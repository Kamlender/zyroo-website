'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { getServiceById, formatPrice } from '@/lib/services';
import styles from './page.module.css';

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
    details: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  if (!service) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <div className={styles.notFoundCard}>
            <div className={styles.notFoundIcon}>🔍</div>
            <h2>Service Not Found</h2>
            <p>The service you are looking for does not exist.</p>
            <Link href="/" className="btn-primary">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
          subject: `🛒 New Order — ${service.title}${isRush ? ' (Rush)' : ''} | ZYROO`,
          from_name: 'ZYROO Orders',
          name: form.name,
          phone: form.phone,
          email: form.email || 'Not provided',
          service: service.title,
          mode: isRush ? 'Rush (2× faster)' : 'Standard',
          price: formatPrice(isRush ? Math.round(service.price * 1.5) : service.price),
          delivery: `${isRush ? Math.ceil(service.deliveryDays / 2) : service.deliveryDays} days`,
          message: form.details,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        throw new Error(data.message || 'Failed to send order');
      }
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
          <div className={`${styles.successCard} animate-scaleIn`}>
            <div className={styles.successIcon}>
              <span style={{ fontSize: '64px' }}>✓</span>
            </div>
            <h2 className={styles.successTitle}>Order Sent!</h2>
            <p className={styles.successText}>
              Aapka order successfully send ho gaya hai. Hum jaldi se aapse
              contact karenge!
            </p>
            <div className={styles.successActions}>
              <Link href="/" className="btn-primary">
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
        <Link href="/" className={`${styles.backLink} animate-fadeIn`}>
          ← Back to Services
        </Link>

        <div className={styles.orderLayout}>
          {/* Left — Service Info */}
          <div className={`${styles.serviceInfo} animate-fadeInUp`}>
            <div className={styles.serviceInfoCard}>
              <div className={styles.serviceInfoHeader}>
                <span className={styles.serviceInfoIcon}>{service.icon}</span>
                <span className={styles.serviceInfoCategory}>{service.category}</span>
              </div>

              <h2 className={styles.serviceInfoTitle}>{service.title}</h2>
              <p className={styles.serviceInfoDesc}>{service.description}</p>

              {isRush && (
                <div className={styles.rushBadge}>
                  ⚡ Rush Delivery — 2× Faster
                </div>
              )}

              <div className={styles.serviceInfoPricing}>
                {!isRush && service.originalPrice && (
                  <span className={styles.serviceInfoOldPrice}>
                    {formatPrice(service.originalPrice)}
                  </span>
                )}
                {isRush && (
                  <span className={styles.serviceInfoOldPrice}>
                    {formatPrice(service.price)}
                  </span>
                )}
                <span className={styles.serviceInfoPrice}>
                  {formatPrice(isRush ? Math.round(service.price * 1.5) : service.price)}
                </span>
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
                  <strong>{isRush ? Math.ceil(service.deliveryDays / 2) : service.deliveryDays} days</strong>
                  {isRush && <em style={{ marginLeft: '6px', color: 'var(--accent-yellow)', fontSize: '0.85em' }}>(Rush)</em>}
                </span>
              </div>
            </div>
          </div>

          {/* Right — Order Form */}
          <div className={`${styles.orderForm} animate-fadeInUp stagger-2`}>
            <div className={styles.orderFormCard}>
              <h2 className={styles.orderFormTitle}>Order Details</h2>
              <p className={styles.orderFormSubtitle}>
                Form bharo aur submit karo. Hum WhatsApp pe confirm kar lenge.
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
                      placeholder="Aapka naam"
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
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="order-email"
                    className="form-input"
                    placeholder="aapka@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="form-group" style={{ marginTop: 'var(--space-lg)' }}>
                  <label className="form-label" htmlFor="order-details">
                    Project Details *
                  </label>
                  <textarea
                    id="order-details"
                    className="form-input form-textarea"
                    placeholder="Aapko kaisi website chahiye? Koi specific requirement ho toh yahan likho..."
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
                  className={`btn-primary ${styles.submitBtn}`}
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
