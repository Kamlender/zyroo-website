'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getServiceById, formatPrice } from '@/lib/services';
import LottieCheckbox from '@/components/LottieCheckbox';
import styles from './page.module.css';

export default function OrderPageClient() {
  const params = useParams();
  const serviceId = params.id as string;
  const service = getServiceById(serviceId);

  const [form, setForm] = useState({
    name: '',
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
            <Link href="/" className="btn btn-primary">
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
      // Send order via Web3Forms (delivers to email)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
          subject: `🛒 New Order — ${service.title} | ZYROO`,
          from_name: 'ZYROO Orders',
          name: form.name,
          email: form.email,
          service: service.title,
          price: formatPrice(service.price),
          delivery: `${service.deliveryDays} days`,
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
              <LottieCheckbox size={80} />
            </div>
            <h2 className={styles.successTitle}>Order Sent!</h2>
            <p className={styles.successText}>
              Aapka order successfully send ho gaya hai. Hum jaldi se aapse
              contact karenge!
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
      {/* Background orbs */}
      <div className={styles.orderBg}>
        <div className={styles.orderOrb1}></div>
        <div className={styles.orderOrb2}></div>
      </div>

      <div className="container">
        {/* Back link */}
        <Link href="/" className={`${styles.backLink} animate-fadeIn`}>
          ← Back to Services
        </Link>

        <div className={styles.orderLayout}>
          {/* Left — Service Info */}
          <div className={`${styles.serviceInfo} animate-fadeInUp`}>
            <div className={styles.serviceInfoCard}>
              <div
                className={styles.serviceInfoGlow}
                style={{ background: service.gradient }}
              ></div>

              <div className={styles.serviceInfoHeader}>
                <div className={styles.serviceInfoIcon}>{service.icon}</div>
                <span className="badge badge-primary">{service.category}</span>
              </div>

              <h2 className={styles.serviceInfoTitle}>{service.title}</h2>
              <p className={styles.serviceInfoDesc}>{service.description}</p>

              <div className={styles.serviceInfoPricing}>
                {service.originalPrice && (
                  <span className={styles.serviceInfoOldPrice}>
                    {formatPrice(service.originalPrice)}
                  </span>
                )}
                <span className={styles.serviceInfoPrice}>
                  {formatPrice(service.price)}
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
                <span>📅</span>
                <span>
                  Delivery in <strong>{service.deliveryDays} days</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right — Order Form */}
          <div className={`${styles.orderForm} animate-fadeInUp stagger-2`}>
            <div className={styles.orderFormCard}>
              <h2 className={styles.orderFormTitle}>📝 Place Your Order</h2>
              <p className={styles.orderFormSubtitle}>
                Apni details bharo aur Send karo — aapka order seedha hamare
                paas aa jayega.
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
                    <label className="form-label" htmlFor="order-email">
                      Email *
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
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
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
                  className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                  id="submit-order-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending Mail...' : '✉️ Send Mail'}
                </button>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
