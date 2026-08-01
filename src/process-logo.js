const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE = 'C:\\Users\\PRINCE\\.gemini\\antigravity-ide\\brain\\3bebb759-3f53-4eb2-bbf5-6880680388cc\\media__1785575373927.png';
const OUT = path.resolve(__dirname, '..', 'public');

async function run() {
  // 1. Read source, remove white background → transparent
  const raw = sharp(SOURCE).removeAlpha(); // ensure no premultiplied alpha issues
  const { width, height } = await sharp(SOURCE).metadata();
  console.log(`Source: ${width}x${height}`);

  // Make white (#f0f0f0 – #ffffff) pixels transparent
  // Strategy: extract image, then use threshold to create alpha mask
  const buf = await sharp(SOURCE)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = buf;
  const pixels = new Uint8Array(data);

  // Walk every pixel – if R,G,B are all > 240 → set alpha to 0 (transparent)
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2];
    if (r > 235 && g > 235 && b > 235) {
      pixels[i + 3] = 0; // fully transparent
    } else if (r > 220 && g > 220 && b > 220) {
      // semi-transparent for anti-aliased edges
      const avg = (r + g + b) / 3;
      const alpha = Math.round(255 * (1 - (avg - 220) / 35));
      pixels[i + 3] = Math.max(0, Math.min(255, alpha));
    }
  }

  const transparentBuf = Buffer.from(pixels);

  // Create the master transparent PNG at original resolution
  const masterPng = await sharp(transparentBuf, {
    raw: { width: info.width, height: info.height, channels: 4 }
  }).png({ quality: 100, compressionLevel: 9 }).toBuffer();

  // Write master
  const masterPath = path.join(OUT, 'zr-logo-master.png');
  fs.writeFileSync(masterPath, masterPng);
  console.log('Master transparent PNG saved:', masterPath);

  // Generate all sizes
  const targets = [
    { name: 'zr-logo.png', size: 512 },
    { name: 'skull-logo.png', size: 512 },
    { name: 'logo.png', size: 512 },
    { name: 'favicon.png', size: 512 },
    { name: 'android-chrome-512x512.png', size: 512 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-16x16.png', size: 16 },
  ];

  for (const t of targets) {
    await sharp(masterPng)
      .resize(t.size, t.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 100 })
      .toFile(path.join(OUT, t.name));
    console.log(`  ✓ ${t.name} (${t.size}x${t.size})`);
  }

  // Generate favicon.ico from 32x32 PNG (just copy as PNG, browsers accept it)
  await sharp(masterPng)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT, 'favicon.ico'));
  console.log('  ✓ favicon.ico');

  console.log('\n✅ All logo and favicon files generated from your ZR monogram!');
}

run().catch(e => { console.error(e); process.exit(1); });
