'use client';

import React, { useState, useCallback } from 'react';
import styles from './ReviewFeedback.module.css';

export default function ReviewFeedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const starLabels = ['Terrible', 'Poor', 'Okay', 'Great', 'Amazing!'];

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (rating === 0) return;

      setIsSubmitting(true);
      setErrorMsg('');

      try {
        const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `⭐ New Review — ${rating}/5 Stars`,
            from_name: 'ZYROO Reviews',
            rating: `${rating}/5 — ${starLabels[rating - 1]}`,
            name: name,
            message: feedback,
          }),
        });

        const data = await res.json();

        if (!data.success) {
          throw new Error(data.message || 'Could not send feedback. Please try again.');
        }

        setSubmitted(true);
      } catch (err) {
        setErrorMsg(
          err instanceof Error
            ? err.message
            : 'Could not send feedback. Please try again.'
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [rating, name, feedback]
  );

  const handleReset = () => {
    setRating(0);
    setHoverRating(0);
    setName('');
    setFeedback('');
    setSubmitted(false);
    setErrorMsg('');
  };

  const activeRating = hoverRating || rating;

  return (
    <div className={styles.feedbackWrapper} id="rate-us">
      {/* Decorative glow */}
      <div className={styles.glowOrb} />
      <div className={styles.glowOrb2} />

      <div className={styles.feedbackCard}>
        {/* Header */}
        <div className={styles.cardHeader}>
          <span className={styles.cardBadge}>⭐ Rate Us</span>
          <h3 className={styles.cardTitle}>
            How Was Your <span className={styles.titleHighlight}>Experience?</span>
          </h3>
          <p className={styles.cardSubtitle}>
            Share your feedback — your rating truly matters to us!
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.feedbackForm}>
            {/* Star Rating */}
            <div className={styles.ratingSection}>
              <div className={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={`${styles.starBtn} ${
                      star <= activeRating ? styles.starActive : ''
                    } ${star <= activeRating && activeRating >= 4 ? styles.starGold : ''}`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={styles.starSvg}
                      fill={star <= activeRating ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth={star <= activeRating ? 0 : 1.5}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {/* Sparkle effect on hover */}
                    <span className={styles.sparkle} />
                  </button>
                ))}
              </div>
              {activeRating > 0 && (
                <span className={styles.ratingLabel}>
                  {starLabels[activeRating - 1]}
                </span>
              )}
            </div>

            {/* Name Input */}
            <div className={styles.inputGroup}>
              <label htmlFor="feedback-name" className={styles.inputLabel}>
                Your Name *
              </label>
              <input
                id="feedback-name"
                type="text"
                className={styles.textInput}
                placeholder="e.g., Rahul"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                required
              />
            </div>

            {/* Feedback Textarea */}
            <div className={styles.inputGroup}>
              <label htmlFor="feedback-text" className={styles.inputLabel}>
                Your Feedback *
              </label>
              <textarea
                id="feedback-text"
                className={`${styles.textInput} ${styles.textArea}`}
                placeholder="Tell us about your experience..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                maxLength={500}
                rows={3}
                required
              />
              {feedback.length > 0 && (
                <span className={styles.charCount}>
                  {feedback.length}/500
                </span>
              )}
            </div>

            {/* Error Message */}
            {errorMsg && (
              <p className={styles.errorMsg}>{errorMsg}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={`${styles.submitBtn} ${
                rating === 0 ? styles.submitDisabled : ''
              } ${isSubmitting ? styles.submitLoading : ''}`}
              disabled={rating === 0 || isSubmitting}
            >
              {isSubmitting ? (
                <span className={styles.spinner} />
              ) : (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className={styles.sendIcon}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Send Feedback
                </>
              )}
            </button>
          </form>
        ) : (
          /* Success State */
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" />
                <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h4 className={styles.successTitle}>Thank You! 🎉</h4>
            <p className={styles.successText}>
              Thanks for your {rating}-star review. We've received your feedback!
            </p>
            <button onClick={handleReset} className={styles.resetBtn}>
              Submit Another Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
