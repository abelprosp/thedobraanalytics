"use client";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  onContact: () => void;
};

export function Navbar({ onContact }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] transition-colors duration-500",
        scrolled || open ? "glass border-b border-white/6" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-5 md:h-16 md:px-8">
        <a href="#topo" className="flex items-center" aria-label="TheDobra">
          <Logo height={26} priority />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-white/55 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button onClick={onContact} className="h-10 px-5 text-[13px]">
            Falar com um especialista
          </Button>
        </div>

        <button
          type="button"
          className="relative h-10 w-10 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={cn(
              "absolute left-2.5 right-2.5 h-px bg-white transition-transform duration-300",
              open ? "top-1/2 rotate-45" : "top-[15px]",
            )}
          />
          <span
            className={cn(
              "absolute left-2.5 right-2.5 h-px bg-white transition-transform duration-300",
              open ? "top-1/2 -rotate-45" : "top-[23px]",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            className="border-t border-white/6 px-5 pb-8 pt-4 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-2 py-3 text-2xl tracking-[-0.03em] text-white/85"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-4"
                onClick={() => {
                  setOpen(false);
                  onContact();
                }}
              >
                Falar com um especialista
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
