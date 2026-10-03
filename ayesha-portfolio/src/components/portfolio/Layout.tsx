import { useState } from "react";
import { Menu, X, MessageCircle, Linkedin, Instagram, FacebookIcon} from "lucide-react";
import { NAV_LINKS, PROFILE, SOCIAL, whatsappLink } from "@/data/portfolio";
import { btn } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="font-display text-lg font-semibold">
          Ayesha<span className="text-primary">.</span>Ferdous
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className={`${btn.primary} hidden !py-2 lg:inline-flex`}>Let's Talk</a>
        <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a onClick={() => setOpen(false)} href={l.href} className="block py-3 text-muted-foreground hover:text-foreground">{l.label}</a></li>
            ))}
            <li className="pt-3"><a onClick={() => setOpen(false)} href="#contact" className={`${btn.primary} w-full`}>Let's Talk</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const wa = whatsappLink();
  const socials = [
    { label: "LinkedIn", href: SOCIAL.linkedin, Icon: Linkedin },
    { label: "Instagram", href: SOCIAL.instagram, Icon: Instagram },
    { label: "Instagram", href: SOCIAL.facebook, Icon: FacebookIcon },
    { label: "WhatsApp", href: wa, Icon: MessageCircle },
  ];
  return (
    <footer className="border-t py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{PROFILE.name}</p>
          <p className="text-sm text-primary">{PROFILE.title}</p>
          <p className="mt-3 text-sm text-muted-foreground">Clean, responsive and conversion-focused Shopify stores for brands worldwide.</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold">Quick links</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => <li key={l.href}><a href={l.href} className="text-sm text-muted-foreground hover:text-foreground">{l.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold">Connect</p>
          <div className="mt-3 flex gap-3">
            {socials.map(({ label, href, Icon }) => href ? (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition hover:border-primary hover:text-primary"><Icon className="h-4 w-4" /></a>
            ) : (
              <span key={label} title={`${label} — add link in portfolio data`} aria-label={`${label} (coming soon)`} className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground opacity-50"><Icon className="h-4 w-4" /></span>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-5 text-xs text-muted-foreground">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
    </footer>
  );
}

export function WhatsAppFloat() {
  const href = whatsappLink("Hi Ayesha, I'd like to discuss a Shopify project.");
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition hover:scale-105">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
