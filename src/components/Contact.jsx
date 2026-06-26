import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
)

// ─── Secret Key ───────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_ok1tq6t'
const EMAILJS_TEMPLATE_ID = 'template_2d6rswf'
const EMAILJS_PUBLIC_KEY  = '5ZEL5DMwRv1V_e9O5'
// ──────────────────────────────────────────────────────────────────────────────

const socials = [
  { label: 'GitHub',   href: 'https://github.com/CreamySushi',         Icon: GithubIcon,   detail: 'github.com/CreamySushi' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/',    Icon: LinkedinIcon, detail: 'linkedin.com/in/yourhandle' },
  { label: 'Gmail',    href: 'mailto:johnaaronflavien.quirante@gmail.com',       Icon: GmailIcon,    detail: 'johnaaronflavien.quirante@gmail.com' },
]

const Contact = () => {
  const formRef = useRef()
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const [touched, setTouched] = useState({})

  const valid = {
    name:    form.name.trim().length > 0,
    email:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    message: form.message.trim().length >= 10,
  }
  const canSubmit = Object.values(valid).every(Boolean) && status !== 'sending'

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleBlur = (e) =>
    setTouched(prev => ({ ...prev, [e.target.name]: true }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return  
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTouched({})
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full rounded-xl border px-4 py-3 text-sm bg-white dark:bg-[#1A1A18] text-[#111110] dark:text-[#FAFAF9] placeholder:text-[#888780] outline-none transition-all duration-200 '
  const inputIdle  = 'border-[#E8E6DF] dark:border-[#3A3A38] focus:border-[#F97316] dark:focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20'
  const inputError = 'border-red-400 dark:border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-400/20'

  const fieldClass = (name) =>
    inputBase + (touched[name] && !valid[name] ? inputError : inputIdle)

  return (
    <div id='Contact' className="min-h-screen pb-24 bg-(--bg-primary) dark:bg-(--dark-bg-primary)">
      <div className="px-6 md:px-16 lg:px-24 xl:px-40 pt-24">
          <h2 className="mt-2 mb-12 text-3xl font-bold text-(--text-primary) dark:text-(--dark-text-primary) relative uppercase inline-block">
            Contact<span className="absolute left-0 -bottom-1 h-0.75 w-full rounded-full bg-[#F97316]" />
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          <div>
            <p className="text-sm text-(--text-secondary) dark:text-(--text-tertiary) leading-relaxed max-w-sm mb-8">
              I'm currently open to new opportunities — whether it's a full-time role,
              freelance project, or just a chat about something you're building.
              My inbox is always open.
            </p>

            <div className="flex flex-col gap-3">
              {socials.map(({ label, href, Icon, detail }) => (
                
                  <a key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-4 py-3 rounded-xl border border-[#E8E6DF] dark:border-[#3A3A38] bg-white dark:bg-[#1A1A18] hover:border-[#F97316]/50 dark:hover:border-[#F97316]/50 transition-all duration-200"
                >
                  <span className="p-2 rounded-lg bg-[#FFF3E0] dark:bg-[#F97316]/10 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-200">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#111110] dark:text-[#FAFAF9]">{label}</p>
                    <p className="text-xs text-[#888780]">{detail}</p>
                  </div>
                  <span className="ml-auto text-[#888780] group-hover:text-[#F97316] group-hover:translate-x-0.5 transition-all duration-200 text-sm">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="border border-[#E8E6DF] dark:border-[#3A3A38] rounded-2xl px-6 py-6 bg-white dark:bg-[#1A1A18]">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF3E0] dark:bg-[#F97316]/10 flex items-center justify-center text-[#F97316] text-2xl">
                  ✓
                </div>
                <p className="text-sm font-semibold text-[#111110] dark:text-[#FAFAF9]">Message sent!</p>
                <p className="text-xs text-[#888780]">Thanks for reaching out — I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs text-[#F97316] hover:text-[#EA580C] font-semibold transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#3A3A38] dark:text-[#888780] block mb-1.5">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Aaron Quirante"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={fieldClass('name')}
                  />
                  {touched.name && !valid.name && (
                    <p className="text-xs text-red-400 mt-1">Please enter your name.</p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#3A3A38] dark:text-[#888780] block mb-1.5">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={fieldClass('email')}
                  />
                  {touched.email && !valid.email && (
                    <p className="text-xs text-red-400 mt-1">Please enter a valid email.</p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#3A3A38] dark:text-[#888780] block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Hi Aaron, I'd love to talk about..."
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={fieldClass('message') + ' resize-none'}
                  />
                  {touched.message && !valid.message && (
                    <p className="text-xs text-red-400 mt-1">Message must be at least 10 characters.</p>
                  )}
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-400">Something went wrong. Please try again or email me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full py-3 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-pressed)] disabled:opacity-40 disabled:cursor-not-allowed text-[var(--dark-text-primary)] text-sm font-semibold active:scale-95 transition-all duration-200"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact