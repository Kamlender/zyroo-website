'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { getServiceById, formatPrice } from '@/lib/services';
import LottieCheckbox from '@/components/LottieCheckbox';
import styles from './page.module.css';

// Discount code config
const VALID_CODES: { code: string; percent: number; expiresAt: string }[] = [
  { code: 'zyroo80independence', percent: 50, expiresAt: '2026-08-15T23:59:59+05:30' },
];

function validateDiscount(input: string): { valid: boolean; percent: number; message: string } {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return { valid: false, percent: 0, message: '' };

  const match = VALID_CODES.find((c) => c.code === trimmed);
  if (!match) return { valid: false, percent: 0, message: 'Invalid discount code' };

  const now = new Date();
  const expiry = new Date(match.expiresAt);
  if (now > expiry) return { valid: false, percent: 0, message: 'This code has expired' };

  return { valid: true, percent: match.percent, message: `${match.percent}% OFF applied! 🎉` };
}

export default function OrderPageClient() {
  const params = useParams();
  const searchParams = useSearchParams();
  const serviceId = params.id as string;
  const service = getServiceById(serviceId);
  const isRush = searchParams.get('mode') === 'rush';

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    discount: '',
    details: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Discount state
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountMsg, setDiscountMsg] = useState('');
  const [discountError, setDiscountError] = useState('');

  if (!service) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <div className={styles.notFoundCard}>
            <div className={styles.notFoundIcon}>🔍</div>
            <h2>Service Not Found</h2>
            <p>The service you are looking for does not exist.</p>
            <Link href="/" className="btn btn-primary">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Price calculations
  const basePrice = isRush ? Math.round(service.price * 1.5) : service.price;
  const baseMax = service.maxPrice
    ? (isRush ? Math.round(service.maxPrice * 1.5) : service.maxPrice)
    : null;

  const discountedPrice = discountApplied
    ? Math.round(basePrice * (1 - discountPercent / 100))
    : basePrice;
  const discountedMax = baseMax && discountApplied
    ? Math.round(baseMax * (1 - discountPercent / 100))
    : baseMax;

  const handleApplyDiscount = () => {
    const result = validateDiscount(form.discount);
    if (result.valid) {
      setDiscountApplied(true);
      setDiscountPercent(result.percent);
      setDiscountMsg(result.message);
      setDiscountError('');
    } else {
      setDiscountApplied(false);
      setDiscountPercent(0);
      setDiscountMsg('');
      setDiscountError(result.message);
    }
  };

  const handleRemoveDiscount = () => {
    setDiscountApplied(false);
    setDiscountPercent(0);
    setDiscountMsg('');
    setDiscountError('');
    setForm((p) => ({ ...p, discount: '' }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      // Build plain-text price
      let priceText = `INR ${discountedPrice}`;
      if (discountedMax) {
        priceText += ` to INR ${discountedMax}`;
      }

      let discountInfo = 'None';
      if (discountApplied) {
        discountInfo = `${form.discount.trim()} (${discountPercent}% OFF) — Original: INR ${basePrice}${baseMax ? ` to INR ${baseMax}` : ''}`;
      }

      const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
      const deliveryDays = isRush ? Math.ceil(service.deliveryDays / 2) : service.deliveryDays;

      // Send via Web3Forms (email)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `🛒 New Order — ${service.title}${discountApplied ? ` (${discountPercent}% OFF)` : ''}`,
          from_name: 'ZYROO Orders',
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: service.title,
          mode: isRush ? 'Rush Delivery' : 'Standard',
          price: priceText,
          delivery: `${deliveryDays} days`,
          discount_code: discountInfo,
          message: form.details,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Email send nahi ho paya. Please try again.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Order send nahi ho paya. Please try again.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.orderPage}>
        <div className="container">
          <div className={styles.successCard}>
            <div className={styles.successIcon}>
              <LottieCheckbox size={80} />
            </div>
            <h2 className={styles.successTitle}>Order Sent!</h2>
            <p className={styles.successText}>
              Your order has been sent successfully. We will contact you
              shortly!
            </p>
            <div className={styles.successActions}>
              <Link href="/" className="btn btn-primary btn-lg">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.orderPage}>
      <div className="container">
        {/* Back link */}
        <Link href="/" className={styles.backLink}>
          ← Back to Services
        </Link>

        <div className={styles.orderLayout}>
          {/* Left — Service Info */}
          <div className={styles.serviceInfo}>
            <div className={styles.serviceInfoCard}>
              <div className={styles.serviceInfoHeader}>
                <div className={styles.serviceInfoIcon}>{service.icon}</div>
                <span className="badge badge-primary">{service.category}</span>
              </div>

              <h2 className={styles.serviceInfoTitle}>{service.title}</h2>
              <p className={styles.serviceInfoDesc}>{service.description}</p>

              {isRush && (
                <div className={styles.rushBadge}>
                  ⚡ Rush Delivery — 2× Faster
                </div>
              )}

              <div className={styles.serviceInfoPricing}>
                {(isRush || discountApplied) && (
                  <span className={styles.serviceInfoOldPrice}>
                    {formatPrice(isRush && !discountApplied ? service.price : basePrice)}
                    {baseMax && !discountApplied && isRush && (
                      <> – {formatPrice(service.maxPrice!)}</>
                    )}
                    {baseMax && discountApplied && (
                      <> – {formatPrice(baseMax)}</>
                    )}
                  </span>
                )}
                <span className={styles.serviceInfoPrice}>
                  {formatPrice(discountedPrice)}
                  {discountedMax && (
                    <> – {formatPrice(discountedMax)}</>
                  )}
                </span>
                {discountApplied && (
                  <span className={styles.discountBadge}>
                    {discountPercent}% OFF
                  </span>
                )}
              </div>

              <div className={styles.serviceInfoFeatures}>
                <h4>What&apos;s Included:</h4>
                {service.features.map((f, i) => (
                  <div key={i} className={styles.serviceInfoFeature}>
                    <span className={styles.featureCheck}>✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <div className={styles.serviceInfoDelivery}>
                <span>Delivery:</span>
                <span>
                  Delivery in <strong>{isRush ? Math.ceil(service.deliveryDays / 2) : service.deliveryDays} days</strong>
                  {isRush && <em style={{ marginLeft: '6px', color: '#f59e0b', fontSize: '0.85em' }}>(Rush)</em>}
                </span>
              </div>
            </div>
          </div>

          {/* Right — Order Form */}
          <div className={styles.orderForm}>
            <div className={styles.orderFormCard}>
              <h2 className={styles.orderFormTitle}>Order Details</h2>
              <p className={styles.orderFormSubtitle}>
                Fill out the form and submit. We&apos;ll confirm via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} id="order-form">

                <div className={styles.formGrid}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="order-name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="order-name"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="order-phone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="order-phone"
                      className="form-input"
                      placeholder="98XXXXXXXX"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      disabled={status === 'sending'}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: 'var(--space-lg)' }}>
                  <label className="form-label" htmlFor="order-email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="order-email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="form-group" style={{ marginTop: 'var(--space-lg)' }}>
                  <label className="form-label" htmlFor="order-discount">
                    Discount Code
                  </label>
                  <div className={styles.discountRow}>
                    <input
                      type="text"
                      id="order-discount"
                      className="form-input"
                      placeholder="Enter coupon code (if any)"
                      value={form.discount}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, discount: e.target.value }));
                        if (discountApplied) {
                          setDiscountApplied(false);
                          setDiscountPercent(0);
                          setDiscountMsg('');
                        }
                        setDiscountError('');
                      }}
                      disabled={status === 'sending' || discountApplied}
                    />
                    {!discountApplied ? (
                      <button
                        type="button"
                        className={styles.applyBtn}
                        onClick={handleApplyDiscount}
                        disabled={!form.discount.trim() || status === 'sending'}
                      >
                        Apply
                      </button>
                    ) : (
                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={handleRemoveDiscount}
                        disabled={status === 'sending'}
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  {discountMsg && (
                    <p className={styles.discountSuccess}>{discountMsg}</p>
                  )}
                  {discountError && (
                    <p className={styles.discountErrorMsg}>{discountError}</p>
                  )}
                </div>

                <div className="form-group" style={{ marginTop: 'var(--space-lg)' }}>
                  <label className="form-label" htmlFor="order-details">
                    Project Details *
                  </label>
                  <textarea
                    id="order-details"
                    className="form-input form-textarea"
                    placeholder="What kind of website do you need? Write any specific requirements here..."
                    value={form.details}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, details: e.target.value }))
                    }
                    required
                    disabled={status === 'sending'}
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.formError}>{errorMsg}</p>
                )}

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                  id="submit-order-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
