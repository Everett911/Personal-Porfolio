"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Download,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
  },
];

const emptyForm = { name: "", email: "", message: "" };

const inputClasses =
  "w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all";

export function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        { publicKey },
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent! I'll get back to you soon.",
      });
      setFormData(emptyForm);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: `Sorry, the message couldn't be sent. Please email me directly at ${site.email}.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <SectionHeader
            id="contact-heading"
            eyebrow="Get In Touch"
            title="Let's"
            accent="work together."
            description="Hiring a junior developer, offering an internship, or need a website built? Send me a message."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Reveal delay={300}>
            <div className="glass p-9 rounded-3xl border border-primary/30">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    id="message"
                    name="message"
                    required
                    placeholder="What would you like to talk about?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <Button size="lg" className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </Button>

                <div aria-live="polite">
                  {submitStatus.type && (
                    <div
                      className={`flex items-center gap-3 p-4 rounded-xl ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : "bg-red-500/10 border border-red-500/20 text-red-400"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                      ) : (
                        <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                      )}
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={400} className="space-y-6">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <ul className="space-y-4">
                {contactInfo.map((item) => {
                  const content = (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium break-all">{item.value}</div>
                      </div>
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                {site.availability}.
              </p>
              <a
                href={site.resume}
                download
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download my résumé (PDF)
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
