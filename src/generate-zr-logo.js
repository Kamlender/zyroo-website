const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Create high-resolution SVG of the ZR Monogram Logo with metallic copper/bronze gradient and 100% transparent background
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <!-- Metallic Copper Primary Gradient -->
    <linearGradient id="metallicCopper" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7D0B9"/>
      <stop offset="15%" stop-color="#E5A080"/>
      <stop offset="40%" stop-color="#C47350"/>
      <stop offset="70%" stop-color="#8E4122"/>
      <stop offset="90%" stop-color="#64260F"/>
      <stop offset="100%" stop-color="#421606"/>
    </linearGradient>

    <!-- Metallic Highlight Gradient -->
    <linearGradient id="copperHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.6"/>
      <stop offset="30%" stop-color="#F2C4AC" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#7C3316" stop-opacity="0.1"/>
    </linearGradient>

    <!-- Inner Bevel Highlight -->
    <linearGradient id="bevelLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF2EA"/>
      <stop offset="50%" stop-color="#D98A69"/>
      <stop offset="100%" stop-color="#6B2911"/>
    </linearGradient>

    <!-- Soft Drop Shadow for transparent rendering -->
    <filter id="copperShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-color="#2D0D03" flood-opacity="0.45"/>
    </filter>
  </defs>

  <g filter="url(#copperShadow)">
    <!-- 1. Top Z Arm & Serif -->
    <!-- Top left sharp serif dropping down -->
    <path fill="url(#metallicCopper)" d="
      M 130 160 
      C 125 185, 115 210, 100 230 
      C 115 210, 132 198, 150 192 
      C 148 180, 152 170, 165 162
      C 180 152, 210 150, 250 150
      L 380 150
      C 395 150, 405 142, 410 130
      C 395 125, 375 125, 330 125
      L 180 125
      C 150 125, 135 135, 130 160 Z
    "/>

    <!-- 2. Z Diagonal Main Stroke -->
    <path fill="url(#metallicCopper)" d="
      M 345 150
      L 155 375
      C 142 390, 125 408, 100 425
      C 128 410, 152 395, 178 378
      L 378 150
      Z
    "/>

    <!-- 3. Upper R Loop (Sweeping from top Z arm around to middle waist) -->
    <path fill="url(#metallicCopper)" d="
      M 265 150
      C 295 118, 350 95, 410 100
      C 468 105, 510 140, 515 190
      C 520 242, 475 285, 415 308
      C 378 322, 335 325, 290 318
      L 265 315
      L 300 275
      C 335 280, 370 275, 395 264
      C 435 248, 460 218, 458 188
      C 455 156, 428 132, 388 128
      C 345 124, 300 135, 265 150 Z
    "/>

    <!-- 4. Top Right Leaf Flourishes (3 Elegant Leaves on R loop) -->
    <!-- Leaf 1: Topmost leaf pointing up-right -->
    <path fill="url(#metallicCopper)" d="
      M 390 110
      C 405 72, 435 40, 475 20
      C 468 50, 450 82, 418 105
      Z
    "/>
    <!-- Leaf 2: Middle leaf pointing right -->
    <path fill="url(#metallicCopper)" d="
      M 448 138
      C 490 115, 530 105, 570 100
      C 548 132, 508 160, 468 165
      Z
    "/>
    <!-- Leaf 3: Lower leaf pointing down-right -->
    <path fill="url(#metallicCopper)" d="
      M 488 200
      C 532 200, 565 218, 585 245
      C 552 255, 512 250, 485 228
      Z
    "/>

    <!-- 5. Lower R Leg (Flowing down-right with graceful flared curve) -->
    <path fill="url(#metallicCopper)" d="
      M 290 302
      C 315 305, 345 320, 375 342
      C 422 378, 468 430, 545 472
      C 562 482, 576 488, 585 490
      C 555 490, 520 482, 485 462
      C 435 433, 390 385, 350 352
      C 328 335, 308 322, 290 315
      Z
    "/>

    <!-- 6. Bottom Z Swirl & Flourishes (Sweeping under Z diagonal) -->
    <!-- Main Bottom Swirl -->
    <path fill="url(#metallicCopper)" d="
      M 155 380
      C 125 402, 100 432, 90 465
      C 78 498, 86 532, 112 546
      C 138 558, 172 552, 208 530
      C 255 500, 292 455, 328 405
      C 302 440, 262 485, 222 508
      C 192 525, 165 528, 146 520
      C 126 512, 118 492, 126 468
      C 134 442, 152 418, 178 398
      Z
    "/>

    <!-- Bottom Swirl Inner Leaf Petal -->
    <path fill="url(#metallicCopper)" d="
      M 165 480
      C 200 452, 248 430, 295 418
      C 270 440, 230 468, 190 488
      Z
    "/>

    <!-- Highlight Overlay for 3D Specular Shimmer -->
    <path fill="url(#copperHighlight)" d="
      M 180 125
      L 330 125
      C 375 125, 395 125, 410 130
      C 405 142, 395 150, 380 150
      L 250 150
      C 210 150, 180 152, 165 162
      C 152 170, 148 180, 150 192
      C 132 198, 115 210, 100 230
      C 115 210, 125 185, 130 160
      C 135 135, 150 125, 180 125 Z
    " opacity="0.7"/>

  </g>
</svg>`;

const outputDir = path.join(__dirname, '..', 'public');
const svgPath = path.join(outputDir, 'zr-logo.svg');
fs.writeFileSync(svgPath, svgContent);
console.log('SVG written to', svgPath);

// Render high resolution transparent PNGs
async function generatePNGs() {
  const svgBuffer = Buffer.from(svgContent);

  // 1. Full high-res 512x512 transparent PNG
  await sharp(svgBuffer)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'zr-logo.png'));

  // 2. Overwrite logo.png with transparent ZR logo
  await sharp(svgBuffer)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'logo.png'));

  // 3. Overwrite skull-logo.png with transparent ZR logo
  await sharp(svgBuffer)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'skull-logo.png'));

  // 4. Overwrite favicon.png
  await sharp(svgBuffer)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'favicon.png'));

  // 5. Favicon sizes
  await sharp(svgBuffer)
    .resize(32, 32)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'favicon-32x32.png'));

  await sharp(svgBuffer)
    .resize(48, 48)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'favicon-48x48.png'));

  await sharp(svgBuffer)
    .resize(192, 192)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'android-chrome-192x192.png'));

  await sharp(svgBuffer)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'android-chrome-512x512.png'));

  await sharp(svgBuffer)
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'apple-touch-icon.png'));

  console.log('All transparent PNG logo files generated successfully!');
}

generatePNGs().catch(console.error);
