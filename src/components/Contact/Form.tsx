'use client'
import { submitContact } from '@/actions/submitContact'
import React, { useActionState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const initialState = {
  success: false,
  message: '',
}

const Form = () => {
  const [state, formAction, pending] = useActionState(submitContact, initialState)
    useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <>
    <form className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-4" action={formAction}>
      <div>
        <label
          htmlFor="firstName"
          className="block text-xs font-semibold text-heading uppercase tracking-wide mb-1"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#278206]/20 focus:border-[#278206] transition"
          placeholder="John"
          required
        />
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block text-xs font-semibold text-heading uppercase tracking-wide mb-1"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#278206]/20 focus:border-[#278206] transition"
          placeholder="Doe"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold text-heading uppercase tracking-wide mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#278206]/20 focus:border-[#278206] transition"
          placeholder="john@example.com"
          required
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-semibold text-heading uppercase tracking-wide mb-1"
        >
          Phone <span className="text-[9px] ml-1 text-gray-500">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#278206]/20 focus:border-[#278206] transition"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold text-heading uppercase tracking-wide mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#278206]/20 focus:border-[#278206] transition"
          placeholder="Tell us about your business needs..."
          required
        ></textarea>
      </div>
      <button
        disabled={pending}
        type="submit"
        className="w-full bg-[#278206] text-white py-2.5 font-semibold text-sm hover:bg-[#278206]/90 transition rounded-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed "
      >
        {!pending && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-send w-4 h-4"
            aria-hidden="true"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
            <path d="m21.854 2.147-10.94 10.939"></path>
          </svg>
        )}

        {pending ? 'Sending....' : 'Send Message'}
      </button>
      {state.message && <p>{state.message}</p>}
    </form>
    <ToastContainer/>
    </>
  )
}

export default Form
