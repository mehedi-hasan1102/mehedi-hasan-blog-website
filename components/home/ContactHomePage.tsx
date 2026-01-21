'use client';

import React, { useRef, useMemo } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Copy,
  CheckCircle,
  XCircle
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// ENV VARIABLES
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL!;
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE!;
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL!;

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

const ContactHomePage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const showSuccessToast = (message: string) => {
    toast.custom((t) => (
      <div className="border border-primary/30 max-w-xs sm:max-w-sm w-full bg-base-200 text-primary px-4 py-2 rounded-lg shadow-lg flex items-center gap-3">
        <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
        <span className="text-sm sm:text-base font-medium">{message}</span>
      </div>
    ));
  };

  const showErrorToast = (message: string) => {
    toast.custom((t) => (
      <div className="border border-primary/30 max-w-xs sm:max-w-sm w-full bg-base-200 text-red-500 px-4 py-2 rounded-lg shadow-lg flex items-center gap-3">
        <XCircle size={20} className="text-red-500 flex-shrink-0" />
        <span className="text-sm sm:text-base font-medium">{message}</span>
      </div>
    ));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(() => {
        showSuccessToast("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch(() => {
        showErrorToast("Failed to send. Please try again.");
      });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => showSuccessToast("Email copied to clipboard!"))
      .catch(() => showErrorToast("Failed to copy!"));
  };

  const contactItems: ContactItem[] = useMemo(() => [
    {
      icon: <Phone size={20} />,
      label: "Phone Number",
      value: CONTACT_PHONE,
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: (
        <div
          onClick={() => copyToClipboard(CONTACT_EMAIL)}
          className="underline-offset-6 decoration-dashed hover:underline rounded-lg inline-flex items-center gap-1 hover:text-primary text-sm cursor-pointer transition-all duration-300"
        >
          {CONTACT_EMAIL}
          <Copy size={14} />
        </div>
      ),
    },
    {
      icon: <MapPin size={20} />,
      label: "Address",
      value: "Dhaka, Bangladesh",
    },
    {
      icon: <Calendar size={20} />,
      label: "Book a Meeting",
      value: (
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-6 decoration-dashed hover:underline rounded-lg inline-flex items-center gap-1 hover:text-primary text-sm transition-all duration-300"
        >
          Schedule on Calendly
          <ArrowUpRight size={14} />
        </a>
      ),
    },
  ], []);

  return (
    <section
      id="hire-me"
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <Toaster position="top-right" reverseOrder={false} />

      <div className="rounded-lg p-4 backdrop-blur-sm hover:shadow-primary/10 transition-shadow duration-300">
        {/* Header */}
        <div className="m-4 text-start">
          <p className="text-sm text-base-content mb-0">• Contact</p>
          <h2 className="text-2xl font-geist text-base-content">
            Let’s <span className="text-base-content/60">Connect</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full p-2 input input-bordered focus:border-primary rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full p-2 input input-bordered focus:border-primary rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-2 input input-bordered focus:border-primary rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-2 input input-bordered focus:border-primary rounded-lg focus:outline-none"
                />
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                required
                className="textarea textarea-bordered w-full rounded-lg p-2 focus:border-primary focus:outline-none"
              />

              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <button
                type="submit"
                className="max-w-40 my-4 rounded-lg flex items-center gap-1 hover:text-primary text-sm px-2 py-2 transition-all"
              >
                <span className="underline-offset-6 decoration-dashed hover:underline rounded-lg inline-flex items-center gap-1">
                  Send Message <ArrowUpRight size={14} />
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {contactItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-0 pl-0 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
              >
                <div className="p-4 rounded-md">{item.icon}</div>
                <div className="min-w-0 space-y-2">
                  <p className="text-sm opacity-70">{item.label}</p>
                  <div className="font-geist break-words">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHomePage;
