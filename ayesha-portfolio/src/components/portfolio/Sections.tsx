import { useState, type FormEvent } from "react";
import * as Icons from "lucide-react";
import { ArrowRight, ArrowUpRight, Briefcase, CheckCircle2, GraduationCap, MapPin, Send, ShoppingBag } from "lucide-react";
import {
  EDUCATION, EXPERIENCE, HIGHLIGHTS, PROCESS, PROFILE, PROFILE_IMAGE, PROJECTS, SERVICES, SKILLS, WHY,
  WHATSAPP_NUMBER, whatsappLink, type Project,
} from "@/data/portfolio";
import { Card, ImageSlot, Section, Tag, btn } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-22">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-medium">
            <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-success opacity-60" /><span className="h-2 w-2 rounded-full bg-success" /></span>
            Available for Shopify Projects
          </span>
          <p className="mt-6 font-medium text-primary">{PROFILE.name} — {PROFILE.title}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">{PROFILE.headline}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{PROFILE.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className={btn.primary}>View My Work <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className={btn.outline}>Let's Work Together</a>
          </div>
        </div>
        <div className="fade-up relative mx-auto w-full max-w-sm [animation-delay:150ms]">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border bg-card shadow-glow">
            <ImageSlot src={PROFILE_IMAGE} alt={`Portrait of ${PROFILE.name}`} label="Your photo here" variant="profile" />
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border bg-card px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-primary"><ShoppingBag className="h-4 w-4" /></span>
            <div><p className="text-sm font-semibold">Shopify 2.0</p><p className="text-xs text-muted-foreground">Liquid · Custom Sections</p></div>
          </div>
          <div className="absolute -right-4 top-8 rounded-2xl border bg-card px-4 py-3 text-xs">
            <p className="flex items-center gap-1.5 text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-primary" />{PROFILE.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Shopify stores built with care, clarity and conversion in mind.">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <p>I'm a Shopify Developer from Bangladesh with 1.5+ years of practical, hands-on experience building and customizing Shopify stores for international clients.</p>
          <p>My focus is on creating clean, responsive, user-friendly and conversion-focused stores — from theme customization and Liquid development to product pages and app integrations.</p>
          <p>I enjoy solving e-commerce problems through thoughtful design and development, turning business goals into stores that are easy to use and easy to buy from.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {HIGHLIGHTS.map((h) => (
            <Card key={h} className="card-hover flex flex-col justify-between gap-6 p-5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <p className="font-display font-medium">{h}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been building.">
      <ol className="relative border-l pl-8">
        {EXPERIENCE.map((e) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[45px] flex h-9 w-9 items-center justify-center rounded-full border bg-card text-primary shadow-glow"><Briefcase className="h-4 w-4" /></span>
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{e.role} — <span className="text-primary">{e.company}</span></h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>
                </div>
                <Tag>{e.period}</Tag>
              </div>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{p}</li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A focused toolkit for modern Shopify stores.">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {SKILLS.map((s) => {
          const Icon = Icons[s.icon] as Icons.LucideIcon;
          return (
            <div key={s.title} className="card-hover flex flex-col justify-between gap-8 border bg-card p-6 rounded-md">
              <Icon className="h-8 w-8 text-primary" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const domain = project.url.replace(/^https?:\/\//, "");
  return (
    <article className="card-hover group overflow-hidden rounded-2xl border bg-card">
      <div className="aspect-[16/10] overflow-hidden border-b">
        <ImageSlot src={project.image} alt={`${project.name} store preview`} label={domain} className="transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-primary">{project.type}</p>
        <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
        {/* <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Services</p> */}
        <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <a href={project.url} target="_blank" rel="noreferrer" className={`${btn.outline} mt-6 w-full`}>View Project <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Live Shopify stores I've worked on.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => <ProjectCard key={p.name} project={p} />)}
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title="What I Do">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SERVICES.map((s) => {
          const Icon = Icons[s.icon] as Icons.LucideIcon;
          return (
            <Card key={s.title} className="card-hover p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Analytical roots, applied to e-commerce.">
      <Card className="flex flex-col gap-6 md:flex-row md:items-start md:p-8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary"><GraduationCap className="h-6 w-6" /></span>
        <div>
          <h3 className="text-xl font-semibold">{EDUCATION.degree}</h3>
          <p className="mt-1 text-primary">{EDUCATION.major}</p>
          <p className="mt-1 text-sm text-muted-foreground">{EDUCATION.school}, {EDUCATION.location}</p>
          <p className="mt-5 max-w-3xl text-muted-foreground">{EDUCATION.text}</p>
        </div>
      </Card>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" eyebrow="Work process" title="A simple, reliable way of working.">
      <ol className="grid gap-5 md:grid-cols-4">
        {PROCESS.map((p) => (
          <li key={p.step}><Card className="card-hover h-full">
            <p className="font-display text-3xl font-semibold text-primary">{p.step}</p>
            <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
          </Card></li>
        ))}
      </ol>
    </Section>
  );
}

export function Why() {
  return (
    <Section id="why" eyebrow="Why work with me" title="What you can expect.">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w) => (
          <div key={w.title} className="flex gap-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div><h3 className="font-semibold">{w.title}</h3><p className="mt-1 text-sm text-muted-foreground">{w.text}</p></div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const [note, setNote] = useState("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = `Hello Ayesha!\n\nName: ${f.get("name")}\nEmail: ${f.get("email")}\n\nProject details:\n${f.get("message")}`;
    const url = whatsappLink(text);
    if (!url) { setNote("WhatsApp is not configured yet. Please set WHATSAPP_NUMBER in src/data/portfolio.ts."); return; }
    window.open(url, "_blank", "noopener");
    setNote("Opening WhatsApp with your message…");
  };
  const field = "w-full rounded-xl border bg-secondary px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";
  return (
    <section id="contact" className="py-20 md:py-28" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 rounded-3xl border bg-card p-8 shadow-glow md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
            <h2 id="contact-title" className="mt-3 text-3xl font-semibold md:text-4xl">Have a Shopify Project in Mind?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Let's build something great together.</p>
            <p className="mt-6 text-sm text-muted-foreground">Send your details and your message will open directly in WhatsApp, ready to send.</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block"><span className="mb-1.5 block text-sm font-medium">Name</span><input required name="name" autoComplete="name" className={field} placeholder="Your name" /></label>
            <label className="block"><span className="mb-1.5 block text-sm font-medium">Email</span><input required type="email" name="email" autoComplete="email" className={field} placeholder="you@company.com" /></label>
            <label className="block"><span className="mb-1.5 block text-sm font-medium">Message</span><textarea required name="message" rows={5} className={field} placeholder="Tell me about your store and goals" /></label>
            <button type="submit" className={`${btn.primary} w-full`}>Send via WhatsApp <Send className="h-4 w-4" /></button>
            {note && <p role="status" className="text-sm text-muted-foreground">{note}</p>}
            {!WHATSAPP_NUMBER && <span className="sr-only">WhatsApp number not configured</span>}
          </form>
        </div>
      </div>
    </section>
  );
}
