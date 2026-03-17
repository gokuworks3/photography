import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  message: '',
  service: ''
};

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'wedding', label: 'Wedding Photography' },
  { value: 'portrait', label: 'Portrait Session' },
  { value: 'event', label: 'Event Coverage' },
  { value: 'commercial', label: 'Commercial Work' },
  { value: 'other', label: 'Other' }
];

function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState({});

  function validate(formValues) {
    const nextErrors = {};

    if (!formValues.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!formValues.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.message.trim()) {
      nextErrors.message = 'Please add a short message.';
    } else if (formValues.message.trim().length < 20) {
      nextErrors.message = 'Message should be at least 20 characters.';
    }

    return nextErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setValues(function (current) {
      return {
        ...current,
        [name]: value
      };
    });

    setErrors(function (current) {
      return {
        ...current,
        [name]: ''
      };
    });

    setIsSubmitted(false);
  }

  function handleFocus(name) {
    setFocused(function (current) {
      return { ...current, [name]: true };
    });
  }

  function handleBlur(name) {
    setFocused(function (current) {
      return { ...current, [name]: false };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(function () {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setValues(initialValues);
    }, 1500);
  }

  function getInputClass(name) {
    const base = 'w-full rounded-2xl border-2 bg-white px-5 py-4 text-neutral-800 outline-none transition-all duration-300';
    const hasError = errors[name];
    const isFocused = focused[name];

    if (hasError) {
      return base + ' border-red-300 focus:border-red-500';
    }

    if (isFocused) {
      return base + ' border-gold shadow-glow';
    }

    return base + ' border-neutral-200 hover:border-neutral-300 focus:border-gold';
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-charcoal">Message Sent!</h3>
        <p className="mt-2 max-w-sm text-neutral-600">
          Thank you for reaching out. I'll get back to you within 24-48 hours.
        </p>
        <button
          type="button"
          onClick={function () {
            setIsSubmitted(false);
          }}
          className="mt-6 rounded-full border-2 border-neutral-300 px-6 py-2 text-sm font-medium text-neutral-700 transition-all duration-300 hover:border-charcoal hover:text-charcoal"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            onFocus={function () { handleFocus('name'); }}
            onBlur={function () { handleBlur('name'); }}
            className={getInputClass('name')}
            placeholder="John Doe"
          />
          {errors.name ? (
            <p className="mt-2 flex items-center gap-1 text-sm text-red-600">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            onFocus={function () { handleFocus('email'); }}
            onBlur={function () { handleBlur('email'); }}
            className={getInputClass('email')}
            placeholder="john@example.com"
          />
          {errors.email ? (
            <p className="mt-2 flex items-center gap-1 text-sm text-red-600">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-neutral-700">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={handleChange}
          onFocus={function () { handleFocus('service'); }}
          onBlur={function () { handleBlur('service'); }}
          className={getInputClass('service') + ' cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")] bg-[length:1.5rem] bg-[right_1rem_center] bg-no-repeat pr-12'}
        >
          {serviceOptions.map(function (option) {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">
          Your Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={values.message}
          onChange={handleChange}
          onFocus={function () { handleFocus('message'); }}
          onBlur={function () { handleBlur('message'); }}
          className={getInputClass('message') + ' resize-none'}
          placeholder="Tell me about your project, preferred date, location, and vision..."
        />
        <div className="mt-2 flex items-center justify-between">
          {errors.message ? (
            <p className="flex items-center gap-1 text-sm text-red-600">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className={[
            'text-xs transition-colors duration-300',
            values.message.length >= 20 ? 'text-emerald-600' : 'text-neutral-400'
          ].join(' ')}>
            {values.message.length}/20 min
          </span>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full overflow-hidden rounded-full bg-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          <span className={[
            'inline-flex items-center gap-2 transition-all duration-300',
            isSubmitting ? 'opacity-0' : 'opacity-100'
          ].join(' ')}>
            Send Inquiry
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>

          {isSubmitting ? (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </span>
          ) : null}
        </button>
      </div>

      <p className="text-xs text-neutral-500">
        <span className="text-gold">*</span> Required fields. Your information is secure and will never be shared.
      </p>
    </form>
  );
}

export default ContactForm;
