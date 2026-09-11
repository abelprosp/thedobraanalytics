"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useState, type InputHTMLAttributes } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />
          <ModalCard onClose={onClose} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ModalCard({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const [sent, setSent] = useState(false);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0c0c10] p-8 shadow-2xl"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {sent ? (
        <div className="py-8 text-center">
          <p className="eyebrow text-accent">Recebido</p>
          <h2 id={titleId} className="display mt-4 text-3xl">
            Vamos conversar.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-mute">
            Um especialista TheDobra entra em contato para entender seus dados e
            o que precisa ser decidido.
          </p>
          <ContactPhone className="mt-6 justify-center" />
          <Button className="mt-8" onClick={onClose}>
            Fechar
          </Button>
        </div>
      ) : (
        <>
          <p className="eyebrow text-accent">Contato</p>
          <h2 id={titleId} className="display mt-3 text-3xl sm:text-4xl">
            Falar com um especialista
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-mute">
            Conte o essencial. Nós devolvemos clareza.
          </p>
          <ContactPhone className="mt-5" />
          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              const source =
                new URLSearchParams(window.location.search).get("utm_source") ||
                document.referrer ||
                "direct";
              window.dispatchEvent(
                new CustomEvent("thedobra:lead", {
                  detail: { source, funnel: "lead" },
                }),
              );
              setSent(true);
            }}
          >
            <Field label="Nome" name="name" autoComplete="name" required />
            <Field
              label="E-mail corporativo"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <Field label="Empresa" name="company" autoComplete="organization" />
            <label className="block">
              <span className="mb-2 block text-xs text-mute">Mensagem</span>
              <textarea
                name="message"
                rows={4}
                required
                className={fieldClass}
                placeholder="O que seus dados precisam responder?"
              />
            </label>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button type="submit" className="flex-1">
                Enviar
              </Button>
              <Button type="button" variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </form>
        </>
      )}
    </motion.div>
  );
}

const fieldClass = cn(
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[15px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-accent/50",
);

function Field({
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-mute">{label}</span>
      <input className={fieldClass} {...props} />
    </label>
  );
}

const PHONE_DISPLAY = "(51) 99550-1677";
const PHONE_TEL = "+5551995501677";
const PHONE_WHATSAPP = "https://wa.me/5551995501677";

function ContactPhone({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}>
      <a
        href={`tel:${PHONE_TEL}`}
        className="text-[15px] tracking-[-0.02em] text-white/80 transition-colors hover:text-white"
      >
        {PHONE_DISPLAY}
      </a>
      <a
        href={PHONE_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] text-accent transition-colors hover:text-white"
      >
        WhatsApp
      </a>
    </div>
  );
}
