import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sun, Menu, X, ArrowRight, ArrowDown, Check, Star,
  TrendingUp, TrendingDown, CloudLightning, Banknote, Home, Store, Factory,
  Leaf, Zap, CalendarCheck, HeartHandshake, MapPin, Ruler, Calculator,
  ChevronDown, Phone, Clock, Instagram, Globe, Users, Award,
  FileSearch, PencilRuler, Wrench, LineChart,
} from "lucide-react";
import heroVideoUrl from "@/assets/hero-video.mp4";
import logoUrl from "@/assets/solpleno-logo.png";
import sobreSolplenoUrl from "@/assets/sobre-solpleno.png";
import instagramPerfilUrl from "@/assets/instagram-perfil.png";
import whatsappIconUrl from "@/assets/whatsapp-icon.png";
import { Iphone16Pro } from "@/components/Iphone16Pro";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.6 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.6l6.2 5.2C41 35.5 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z"/>
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Energia Solar em Fortaleza e Ceará | Solpleno — Economize até 95%" },
      { name: "description", content: "Empresa de energia solar com 6 anos no Ceará. Sistemas para residências, comércios, indústrias e usinas de investimento. Pós-venda dedicada. Solicite seu orçamento." },
      { property: "og:title", content: "Energia Solar em Fortaleza e Ceará | Solpleno" },
      { property: "og:description", content: "Reduza até 95% da sua conta de energia. 6 anos de mercado no Ceará. Pós-venda dedicada." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: logoUrl },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Solpleno Energia Solar",
          telephone: "+5585991811765",
          address: { "@type": "PostalAddress", addressLocality: "Fortaleza", addressRegion: "CE", postalCode: "60426-000", addressCountry: "BR" },
          areaServed: "Ceará",
          openingHours: "Mo-Fr 08:00-18:00",
          sameAs: ["https://www.instagram.com/solpleno.energiasolar"],
          description: "Empresa de energia solar fotovoltaica no Ceará com 6 anos de mercado.",
        }),
      },
    ],
  }),
  component: SolplenoLanding,
});

const PHONE = "5585991811765";
const waUrl = (text: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

function trackLead(section: string) {
  try {
    // @ts-expect-error gtm
    window.dataLayer = window.dataLayer || [];
    // @ts-expect-error gtm
    window.dataLayer.push({ event: "lead_whatsapp", section });
  } catch {}
  try {
    // @ts-expect-error fbq
    if (typeof window.fbq === "function") window.fbq("track", "Lead", { section });
  } catch {}
}

function WaLink({
  text, section, children, className, ariaLabel,
}: { text: string; section: string; children: React.ReactNode; className?: string; ariaLabel?: string }) {
  return (
    <a
      href={waUrl(text)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead(section)}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <img src={whatsappIconUrl} alt="WhatsApp" className={className} aria-hidden="true" />
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className={`grid place-items-center w-10 h-10 rounded-xl shadow-soft ${light ? "bg-white/10" : "bg-navy"}`}>
        <Sun className="w-5 h-5 text-solar" />
      </span>
      <span className={`font-display font-extrabold text-lg sm:text-xl tracking-tight ${light ? "text-white" : "text-navy"}`}>
        <span className="text-solar">Sol</span>pleno
        <span className={`hidden sm:inline font-medium text-xs ml-1 ${light ? "text-white/60" : "text-sub"}`}>Energia Solar</span>
      </span>
    </span>
  );
}

function SolplenoLanding() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [showFloat, setShowFloat] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contaInput, setContaInput] = useState("");
  const [result, setResult] = useState<{ mensal: number; anual: number; total: number } | null>(null);
  const [displayResult, setDisplayResult] = useState<{ mensal: number; anual: number; total: number } | null>(null);
  const [hint, setHint] = useState<{ msg: string; tone: "muted" | "error" | "success" }>({
    msg: "Informe um valor médio mensal. A simulação é apenas uma estimativa.",
    tone: "muted",
  });
  const [particles, setParticles] = useState<{ id: number; tx: string; ty: string; delay: string }[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);
  const particleId = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setShowFloat(docH > 0 && y / docH > 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const fmt = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  const onContaChange = (v: string) => {
    const digits = v.replace(/\D/g, "");
    setContaInput(digits ? Number(digits).toLocaleString("pt-BR") : "");
  };

  const animateValue = (target: { mensal: number; anual: number; total: number }) => {
    const duration = 900;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setDisplayResult({
        mensal: Math.round(target.mensal * ease),
        anual: Math.round(target.anual * ease),
        total: Math.round(target.total * ease),
      });
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const calcular = () => {
    const raw = Number((contaInput || "").replace(/\D/g, ""));
    if (!raw || raw < 50) {
      setHint({ msg: "Informe um valor válido da sua conta mensal.", tone: "error" });
      setResult(null);
      setDisplayResult(null);
      return;
    }
    setHint({ msg: "Simulação concluída. Valores aproximados.", tone: "success" });
    const mensal = raw * 0.9;
    const anual = mensal * 12;
    const total = anual * 25;
    setResult({ mensal, anual, total });
    setDisplayResult(null);
    setTimeout(() => {
      animateValue({ mensal, anual, total });
      // burst particles
      const newParticles = Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const dist = 40 + Math.random() * 60;
        return {
          id: particleId.current++,
          tx: `${Math.cos(angle) * dist}px`,
          ty: `${Math.sin(angle) * dist - 20}px`,
          delay: `${Math.random() * 0.15}s`,
        };
      });
      setParticles(newParticles);
      setTimeout(() => setParticles([]), 1100);
    }, 80);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 60);
  };

  const showAssinatura = result && Number((contaInput || "").replace(/\D/g, "")) < 500;

  return (
    <div className="bg-background text-ink min-h-screen overflow-x-hidden">

      {/* ========= HEADER ========= */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`mt-3 sm:mt-4 rounded-full px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "bg-navy/90 backdrop-blur-xl shadow-[0_8px_32px_-12px_rgba(0,0,0,0.3)] border border-white/[0.08]"
                : "bg-transparent"
            }`}
          >
            <a href="#top" aria-label="Solpleno início" className="flex items-center gap-2 group">
              <img
                src={logoUrl}
                alt="Solpleno"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium tracking-wide">
              {[
                ["#solucoes", "Soluções"],
                ["#como", "Como funciona"],
                ["#sobre", "Sobre nós"],
                ["#simulador", "Simulador"],
                ["#depoimentos", "Depoimentos"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="relative px-3.5 py-2 text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  {label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-solar rounded-full transition-all duration-300 group-hover:w-4" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <WaLink
                text="Olá! Vim pelo site e quero simular minha economia com energia solar."
                section="header"
                className="hidden sm:inline-flex items-center gap-2 bg-solar hover:bg-solar-600 text-navy font-bold text-sm px-5 py-2.5 rounded-full shadow-glow transition-all duration-300 hover:shadow-[0_12px_40px_-8px_rgba(255,184,0,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
              >
                <WhatsAppIcon className="w-4 h-4" /> Simular Economia
              </WaLink>
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden grid place-items-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors duration-300"
                aria-label="Abrir menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========= DRAWER ========= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white p-6 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={() => setMenuOpen(false)} className="grid place-items-center w-9 h-9 rounded-lg bg-cloud" aria-label="Fechar menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col text-base font-medium text-ink">
              {[
                ["#solucoes","Soluções"],["#como","Como funciona"],["#sobre","Sobre nós"],
                ["#simulador","Simulador"],["#depoimentos","Depoimentos"],
              ].map(([href,label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3 border-b border-cloud">{label}</a>
              ))}
            </nav>
            <WaLink
              text="Olá! Vim pelo site e quero simular minha economia com energia solar."
              section="drawer"
              className="mt-auto inline-flex items-center justify-center gap-2 bg-solar text-navy font-semibold px-5 py-3 rounded-full"
            >
              <WhatsAppIcon className="w-5 h-5" /> Simular Economia
            </WaLink>
          </aside>
        </div>
      )}

      {/* ========= HERO ========= */}
      <section id="top" className="relative min-h-[100svh] lg:min-h-[95vh] flex items-center pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 gradient-navy text-white overflow-hidden">
        {/* video bg - mais visível */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay muted loop playsInline preload="metadata"
          src={heroVideoUrl}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/75 to-navy/95" aria-hidden="true" />

        {/* Orbes de luz solar animados no fundo */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-solar/10 blur-[120px] animate-pulse pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-leaf/8 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} aria-hidden="true" />

        {/* Grade de pontos sutil */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,184,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} aria-hidden="true" />

        <svg className="absolute top-10 right-[-80px] w-[520px] opacity-30 pointer-events-none" viewBox="0 0 200 200" fill="none" aria-hidden="true">
          <g stroke="#FFB800" strokeWidth="1">
            <circle cx="100" cy="100" r="40" />
            <g strokeLinecap="round">
              <line x1="100" y1="20" x2="100" y2="50"/><line x1="100" y1="150" x2="100" y2="180"/>
              <line x1="20" y1="100" x2="50" y2="100"/><line x1="150" y1="100" x2="180" y2="100"/>
              <line x1="40" y1="40" x2="62" y2="62"/><line x1="138" y1="138" x2="160" y2="160"/>
              <line x1="160" y1="40" x2="138" y2="62"/><line x1="62" y1="138" x2="40" y2="160"/>
            </g>
          </g>
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" />
              6 anos transformando contas de luz no Ceará
            </span>
            <h1 className="mt-5 text-[2rem] sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Reduza até <span className="text-solar">95% da sua conta</span> de energia em Fortaleza e em todo o Ceará
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-white/80 max-w-xl">
              Sistemas de energia solar fotovoltaica para residências, comércios, indústrias e usinas de investimento. 6 anos de mercado e pós-venda que não te abandona depois da instalação.
            </p>
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <WaLink
                text="Olá! Vim pelo site e quero simular minha economia com energia solar."
                section="hero"
                className="group inline-flex items-center justify-center gap-2 bg-solar hover:bg-solar-600 text-navy font-bold px-5 sm:px-6 py-3.5 sm:py-4 rounded-full shadow-glow transition w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5" /> Quero minha economia
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </WaLink>
              <a href="#como" className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold px-3 py-3">
                Como funciona <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="mt-7 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-white/80">
              {["6 anos no mercado","Atendimento em todo o Ceará","Pós-venda dedicada"].map((t) => (
                <li key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-leaf" /> {t}</li>
              ))}
            </ul>
          </div>

          {/* Mockup iPhone */}
          <div className="relative reveal flex items-center justify-center mt-4 lg:mt-0 w-full" style={{ transitionDelay: ".15s" }}>
            <Iphone16Pro className="w-[260px] sm:w-[300px] lg:w-[380px] h-auto mx-auto max-w-full">
              <div className="h-full w-full bg-gradient-to-b from-white to-[#F8FAFC] flex flex-col font-[var(--font-display)]">
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[9px] font-semibold text-[#1E293B]/80">
                  <span>14:20</span>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-1.5 border border-[#1E293B]/40 rounded-sm relative">
                      <span className="absolute inset-0.5 bg-[#1E293B]/60 rounded-[1px]" />
                    </span>
                  </div>
                </div>

                <div className="flex-1 px-5 pt-4 pb-5 flex flex-col">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#64748B] font-extrabold">Conta de energia</p>
                  <p className="mt-0.5 text-[10px] text-[#1E293B] font-medium">Distribuidora · Mês atual</p>

                  {/* Before card */}
                  <div className="mt-5 p-4 rounded-2xl border border-rose-100 bg-rose-50/50">
                    <p className="text-[9px] font-bold text-rose-500 tracking-wider uppercase">Antes</p>
                    <div className="relative inline-block mt-1">
                      <span className="text-[16px] font-extrabold text-rose-900/40 tracking-tight">R$ 750,00</span>
                      <span className="absolute top-1/2 left-[-5%] right-[-5%] h-[2px] bg-rose-600 rounded-full -rotate-3" />
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center -my-2 z-10">
                    <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg shadow-emerald-200 ring-4 ring-white">
                      <ArrowDown className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* After card */}
                  <div className="p-4 rounded-2xl border-2 border-emerald-100 bg-emerald-50 shadow-sm ring-4 ring-emerald-500/5">
                    <p className="text-[9px] font-bold text-[#10B981] tracking-wider uppercase">Depois com Solpleno</p>
                    <div className="flex items-baseline gap-1 mt-1 whitespace-nowrap">
                      <span className="text-sm font-bold text-emerald-700">R$</span>
                      <span className="text-[24px] font-extrabold text-emerald-800 tracking-tight leading-none">38,00</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 bg-emerald-500/10 self-start px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-[9px] font-bold text-emerald-800">Economia de até 95%</span>
                    </div>
                  </div>

                  {/* Bottom badge */}
                  <div className="mt-auto bg-[#0A2540] rounded-xl py-3 px-4 flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                    <span className="text-[10px] font-extrabold text-white tracking-wide">Solpleno · 6 anos no Ceará</span>
                  </div>
                </div>
              </div>
            </Iphone16Pro>
            <div className="hero-card-rise hidden sm:flex absolute left-4 top-10 bg-white text-navy rounded-2xl shadow-soft p-3 pr-4 items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-solar text-navy"><TrendingDown className="w-5 h-5" /></span>
              <div><p className="text-[10px] text-sub leading-none">economia</p><p className="text-sm font-extrabold leading-tight">-94,9%</p></div>
            </div>
            <div className="hero-card-rise hidden sm:flex absolute right-4 bottom-20 bg-white text-navy rounded-2xl shadow-soft p-3 pr-4 items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-leaf text-white"><Leaf className="w-5 h-5" /></span>
              <div><p className="text-[10px] text-sub leading-none">payback médio</p><p className="text-sm font-extrabold leading-tight">4 a 7 anos</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= PROVA SOCIAL ========= */}
      <section className="bg-navy text-white py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-medium">
          <span className="flex items-center gap-2"><Users className="w-4 h-4 text-solar" />+500 clientes atendidos no Ceará</span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="flex items-center gap-2"><Award className="w-4 h-4 text-solar" />6 anos de mercado</span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="flex items-center gap-2"><Star className="w-4 h-4 text-solar" />Nota 4,9 no Google</span>
        </div>
      </section>

      {/* ========= DOR + SOLUÇÃO ========= */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-white text-ink">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            {/* Heading */}
            <div className="lg:col-span-7 reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cloud border border-slate-200 backdrop-blur">
                <span className="w-1.5 h-1.5 rounded-full bg-solar animate-pulse" />
                <p className="text-solar font-semibold uppercase tracking-[0.18em] text-[11px]">O problema</p>
              </div>
              <h2 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Sua conta de luz só <span className="relative inline-block"><span className="relative z-10">sobe</span><span aria-hidden className="absolute left-0 right-0 bottom-1 h-3 bg-solar/40 -skew-x-6" /></span>.<br />
                <span className="text-sub">E o dinheiro nunca volta.</span>
              </h2>
              <p className="mt-6 text-ink/70 text-lg max-w-xl">
                No Ceará, a tarifa da distribuidora subiu sucessivamente nos últimos anos. Cada bandeira vermelha aperta um pouco mais o seu orçamento — e <span className="text-ink font-semibold">nada disso volta pra você</span>.
              </p>
            </div>

            {/* Tariff visual */}
            <div className="lg:col-span-5 reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="relative p-6 sm:p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_60px_-20px_rgba(10,37,64,.1)]">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-sub font-semibold">
                  <span>Tarifa média</span>
                  <span className="flex items-center gap-1.5 text-rose-500"><TrendingUp className="w-3.5 h-3.5 rising-arrow" />Subindo</span>
                </div>
                {/* Bars */}
                <div className="mt-8 relative flex items-end gap-3 sm:gap-4 h-48">
                  {[
                    { y: "2021", h: 42, c: "bg-[#C5D1E0]" },
                    { y: "2022", h: 58, c: "bg-[#8FA0B8]" },
                    { y: "2023", h: 70, c: "bg-[#FFC107]" },
                    { y: "2024", h: 86, c: "bg-[#FF9800]" },
                    { y: "2025", h: 100, c: "bg-[#FF2D55]" },
                  ].map((b, i) => (
                    <div key={b.y} className="flex-1 h-full flex flex-col items-center justify-end gap-2">
                      <div
                        className="bar-grow bar-shine w-full rounded-xl relative overflow-hidden shadow-sm"
                        style={{ height: `${b.h}%`, transitionDelay: `${0.2 + i * 0.14}s` }}
                      >
                        <div className={`absolute inset-0 ${b.c}`} />
                        <div className="absolute inset-x-0 top-0 h-px bg-white/60" />
                        <div className="absolute inset-x-0 bottom-0 h-px bg-black/5" />
                      </div>
                      <span className="text-[11px] text-sub font-semibold">{b.y}</span>
                    </div>
                  ))}
                  {/* sparkline overlay */}
                  <svg
                    aria-hidden
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 w-full h-[calc(100%-2rem)] overflow-visible"
                  >
                    <path
                      d="M10,58 L30,42 L50,30 L70,14 L90,0"
                      fill="none"
                      stroke="#FF2D55"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      className="spark-path"
                      style={{ strokeDasharray: 220, strokeDashoffset: 220 }}
                    />
                    <circle cx="90" cy="0" r="3" fill="#FF2D55" className="spark-path" style={{ opacity: 0, animation: "kpiPop .5s ease .9s both" }} />
                  </svg>
                </div>
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-sm text-ink/60">Sem solar, é só ladeira pra cima.</p>
                  <span className="kpi-pop text-[1.75rem] font-extrabold text-[#FF2D55] count-38" />
                </div>
              </div>
            </div>
          </div>

          {/* Three pain points */}
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {[
              { icon: TrendingUp, kpi: "+8%", kpiLabel: "ao ano", title: "Tarifa que não para de subir", body: "Reajustes anuais consomem seu poder de compra. O que você paga hoje vai ser mais caro no próximo ano — e no próximo." },
              { icon: CloudLightning, kpi: "R$ 7,87", kpiLabel: "a cada 100 kWh", title: "Bandeira vermelha sem aviso", body: "A bandeira aparece do nada e infla a fatura. Você não tem controle — e a conta vem mais alta justamente nos meses de maior consumo." },
              { icon: Banknote, kpi: "R$ 6k–240k", kpiLabel: "por ano jogados fora", title: "Dinheiro que escorre todo mês", body: "Esse é o tamanho do desperdício que você poderia estar investindo. Cada fatura paga é dinheiro que nunca mais volta." },
            ].map((c, i) => (
              <article
                key={c.title}
                className="reveal pain-card group relative p-7 rounded-3xl bg-cloud border border-slate-200 hover:border-solar/40 hover:bg-white"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-solar/10 text-solar ring-1 ring-solar/20 group-hover:scale-110 transition-transform">
                    <c.icon className="w-6 h-6" />
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold text-navy leading-none">{c.kpi}</div>
                    <div className="text-[11px] uppercase tracking-wider text-sub mt-1">{c.kpiLabel}</div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-ink/60 leading-relaxed">{c.body}</p>
                <div aria-hidden className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-solar/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ========= SOLUÇÕES ========= */}
      <section id="solucoes" className="py-20 sm:py-28 gradient-navy text-white relative overflow-hidden">
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-solar/8 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl reveal">
            <p className="text-solar font-semibold uppercase tracking-widest text-xs">Soluções Solpleno</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">Um projeto pra cada perfil.</h2>
            <p className="mt-4 text-white/70 text-lg">Da casa de família à usina de investimento — engenharia própria dimensiona o sistema certo pra você.</p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Home, badge: "bg-solar/20 text-solar", title: "Energia Solar Residencial", sub: "Para quem tem conta acima de R$ 500/mês.", items: ["Até 95% de economia","Valoriza o imóvel","Financiamento facilitado"], wa: "Olá! Tenho interesse em energia solar residencial.", sec: "card-residencial" },
              { icon: Store, badge: "bg-leaf/20 text-leaf", title: "Energia Solar Comercial", sub: "Lojas, escritórios, clínicas e franquias.", items: ["Redução de custo operacional","ROI em média de 3 a 5 anos","Abate imposto"], wa: "Olá! Quero energia solar para meu comércio.", sec: "card-comercial" },
              { icon: Factory, badge: "bg-white/15 text-white", title: "Energia Solar Industrial", sub: "Indústrias de médio e grande porte.", items: ["Previsibilidade orçamentária","Abate ICMS","Projeto turn-key"], wa: "Olá! Quero saber sobre energia solar industrial.", sec: "card-industrial" },
            ].map((c, i) => (
              <article key={c.title} className="reveal p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(255,184,0,0.15)] transition flex flex-col" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className={`grid place-items-center w-12 h-12 rounded-2xl ${c.badge}`}><c.icon className="w-6 h-6" /></span>
                <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/60">{c.sub}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2"><Check className="w-4 h-4 text-solar shrink-0 mt-0.5" />{it}</li>
                  ))}
                </ul>
                <WaLink text={c.wa} section={c.sec} className="wa-link mt-6 inline-flex items-center justify-center gap-2 bg-white hover:bg-solar text-navy font-semibold text-sm px-4 py-3 rounded-full transition">
                  Falar com especialista <ArrowRight className="w-4 h-4" />
                </WaLink>
              </article>
            ))}

            {/* Card destaque usina */}
            <article className="reveal relative p-6 rounded-3xl border border-solar/40 bg-solar/10 backdrop-blur hover:-translate-y-1 hover:bg-solar/15 hover:border-solar/60 hover:shadow-[0_20px_60px_-15px_rgba(255,184,0,0.35)] transition flex flex-col" style={{ transitionDelay: "0.21s" }}>
              <span className="absolute -top-3 right-5 bg-solar text-navy text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-glow">Mais rentável</span>
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-solar text-navy"><TrendingUp className="w-6 h-6" /></span>
              <h3 className="mt-5 text-lg font-bold">Usinas de Investimento</h3>
              <p className="mt-2 text-sm text-white/70">De 75kWp a 1MW. Para quem busca rentabilidade superior à renda fixa.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                {["Retorno superior ao CDI","Ativo de longo prazo (25+ anos)","Receita recorrente"].map((it) => (
                  <li key={it} className="flex gap-2"><Check className="w-4 h-4 text-solar shrink-0 mt-0.5" />{it}</li>
                ))}
              </ul>
              <WaLink text="Olá! Quero investir em uma usina solar. Me chama no privado." section="card-usina" className="mt-6 inline-flex items-center justify-center gap-2 bg-solar hover:bg-solar-600 text-navy font-bold text-sm px-4 py-3 rounded-full shadow-glow">
                Falar com especialista <ArrowRight className="w-4 h-4" />
              </WaLink>
            </article>
          </div>

          {/* Assinatura banner */}
          <div className="reveal mt-8 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur text-white flex flex-col md:flex-row md:items-center gap-5 justify-between">
            <div className="flex items-start gap-4">
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-solar text-navy shrink-0"><Zap className="w-6 h-6" /></span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Energia por Assinatura</h3>
                <p className="mt-1 text-white/70">Não quer investir agora? Pague menos na conta de energia sem instalar nada.</p>
              </div>
            </div>
            <WaLink text="Olá! Quero saber sobre energia por assinatura." section="assinatura" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-solar text-navy font-bold px-5 py-3 rounded-full whitespace-nowrap transition">
              Saber mais no WhatsApp <ArrowRight className="w-4 h-4" />
            </WaLink>
          </div>
        </div>
      </section>

      {/* ========= COMO FUNCIONA ========= */}
      <section id="como" className="py-20 sm:py-28 bg-cloud relative overflow-hidden">
        {/* ambient ornaments */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-solar/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-navy/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl reveal">
            <p className="text-solar-600 font-semibold uppercase tracking-widest text-xs">Como funciona</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              Do diagnóstico ao primeiro mês de <span className="relative inline-block text-navy">
                <span className="relative z-10">economia</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-solar/40 -z-0 rounded" />
              </span>.
            </h2>
            <p className="mt-5 text-sub text-lg max-w-xl">Um processo simples, transparente e sem enrolação. Do primeiro contato até o monitoramento, você sempre sabe o próximo passo.</p>
          </div>

          <div className="mt-16 relative">
            {/* connecting dashed line */}
            <div aria-hidden className="hidden md:block absolute top-10 left-[10%] right-[10%] border-t-2 border-dashed border-navy/15" />
            <ol className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
              {[
                { n: "01", t: "Diagnóstico gratuito", d: "Você envia sua conta de luz e a gente analisa o seu consumo.", icon: FileSearch, time: "24h" },
                { n: "02", t: "Projeto personalizado", d: "Engenheiro dimensiona o sistema ideal pro seu perfil — não é vendedor com calculadora.", icon: PencilRuler, time: "2-3 dias" },
                { n: "03", t: "Instalação rápida", d: "Equipe própria. Em média de 5 a 15 dias dependendo do porte do projeto.", icon: Wrench, time: "5-15 dias" },
                { n: "04", t: "Economia + pós-venda", d: "Monitoramento, garantia e suporte que não some depois da venda.", icon: LineChart, time: "25+ anos" },
              ].map((s, i) => {
                const Icon = s.icon;
                const highlight = i === 3;
                return (
                  <li
                    key={s.n}
                    className="reveal group relative"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="relative h-full rounded-3xl bg-white border border-slate-200/80 p-7 shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(2,17,53,0.25)] hover:-translate-y-1 hover:border-solar/40 transition-all duration-300">
                      {/* step badge */}
                      <div className="flex items-center justify-between">
                        <div className={`grid place-items-center w-14 h-14 rounded-full shadow-lg ring-4 ring-white transition-transform group-hover:scale-105 ${highlight ? "bg-solar text-navy" : "bg-navy text-solar"}`}>
                          <Icon className="w-7 h-7" strokeWidth={2.2} />
                        </div>
                        <span className={`text-5xl font-extrabold tracking-tight ${highlight ? "text-solar/30" : "text-navy/10"}`}>
                          {s.n}
                        </span>
                      </div>

                      <h3 className="mt-6 text-lg font-bold text-navy">{s.t}</h3>
                      <p className="mt-2 text-sub text-sm leading-relaxed">{s.d}</p>

                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs">
                        <Clock className="w-3.5 h-3.5 text-solar-600" />
                        <span className="font-semibold text-navy/70 uppercase tracking-wider">{s.time}</span>
                      </div>
                    </div>

                    {/* arrow between cards */}
                    {i < 3 && (
                      <div aria-hidden className="hidden md:grid place-items-center absolute top-10 -right-4 w-8 h-8 rounded-full bg-white border border-navy/10 shadow z-10">
                        <ArrowRight className="w-4 h-4 text-navy/50" />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>

        </div>
      </section>

      {/* ========= SOBRE NÓS ========= */}
      <section id="sobre" className="py-20 sm:py-28 bg-ink text-white relative overflow-hidden">
        {/* ambient glow behind logo */}
        <div aria-hidden className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-solar/10 blur-[120px] opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <div className="reveal flex flex-col items-center lg:items-start">
              <div className="relative w-full max-w-lg">
                {/* layered glow behind image */}
                <div className="absolute -inset-6 rounded-[2.5rem] bg-solar/10 blur-3xl" />
                <div className="absolute -inset-3 rounded-[2rem] bg-solar/20 blur-2xl" />
                {/* main image container */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.12] shadow-[0_0_80px_-20px_rgba(255,184,0,0.3)]">
                  <img
                    src={sobreSolplenoUrl}
                    alt="Instalação premium de painéis solares em telhado residencial"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                  {/* subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-navy/10 pointer-events-none" />
                </div>
                {/* floating stats card */}
                <div className="absolute -bottom-5 -right-4 sm:right-4 bg-navy/80 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-solar/20 flex items-center justify-center">
                      <Sun className="w-5 h-5 text-solar" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-none">+500</p>
                      <p className="text-white/50 text-xs mt-0.5">Projetos realizados</p>
                    </div>
                  </div>
                </div>
                {/* top-left accent dot */}
                <div aria-hidden className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-solar shadow-[0_0_24px_rgba(255,184,0,0.5)]" />
              </div>
            </div>

            {/* Text side */}
            <div className="reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-solar/20 bg-solar/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-solar animate-pulse" />
                <span className="text-solar font-semibold uppercase tracking-[0.18em] text-[11px]">Sobre a Sol Pleno</span>
              </div>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-tight">
                Mais que vender painéis. <br />
                <span className="text-solar">Transformar energia.</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Nossa missão é transformar a forma como nossos clientes lidam com energia, oferecendo soluções sustentáveis, inovadoras e que fazem a diferença no seu dia a dia. Criamos projetos personalizados que maximizam a eficiência e o retorno sobre o investimento.
              </p>
              <p className="mt-5 text-white/70 text-lg leading-relaxed">
                Com uma equipe de especialistas que acumulam anos de experiência no setor, nosso foco vai além da instalação: <span className="text-white font-semibold">garantimos a melhor experiência de pós-venda.</span>
              </p>
              <p className="mt-5 text-white/70 text-lg leading-relaxed">
                Sabemos que a verdadeira transformação começa após o projeto entregue. Por isso, acompanhamos cada cliente de perto com suporte contínuo, manutenção eficiente e monitoramento constante.
              </p>

              {/* feature pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["Projetos personalizados", "Suporte 24/7", "Monitoramento real-time"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/80">
                    <Check className="w-3.5 h-3.5 text-solar" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <WaLink
                  text="Olá! Vim pelo site e quero falar com um especialista."
                  section="sobre"
                  className="inline-flex items-center gap-2 bg-leaf hover:bg-leaf-600 text-white font-bold px-6 py-4 rounded-full shadow-glow transition hover:-translate-y-0.5 active:translate-y-0"
                >
                  <WhatsAppIcon className="w-5 h-5" /> FALAR COM UM ESPECIALISTA
                </WaLink>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Users className="w-4 h-4 text-solar" />
                  <span>+500 clientes no Ceará</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= SIMULADOR ========= */}
      <section id="simulador" className="py-20 sm:py-28 relative overflow-hidden">
        {/* ambient glow behind card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-solar/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="reveal text-center max-w-2xl mx-auto">
            <p className="text-solar-600 font-semibold uppercase tracking-widest text-xs">Simulador rápido</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy sim-shimmer">Descubra quanto você economiza em 25 anos.</h2>
            <p className="mt-4 text-sub text-lg">Estimativa baseada em 90% de economia média sobre o valor mensal da sua conta.</p>
          </div>

          <div className="reveal mt-10 sim-card rounded-[2rem] p-6 sm:p-10">
            <label htmlFor="contaInput" className="block text-sm font-semibold text-navy">Qual o valor da sua conta de luz?</label>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <div className="sim-input-wrap flex-1 flex items-center bg-cloud rounded-2xl px-4 border border-slate-200 transition">
                <span className="grid place-items-center w-8 h-8 rounded-lg bg-solar/15 text-solar"><Zap className="w-4 h-4" /></span>
                <span className="ml-2 text-sub font-semibold">R$</span>
                <input
                  id="contaInput" type="text" inputMode="numeric" placeholder="750"
                  value={contaInput}
                  onChange={(e) => onContaChange(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && calcular()}
                  className="w-full bg-transparent px-3 py-4 outline-none text-xl font-bold text-navy placeholder:text-sub/40"
                  aria-label="Valor da conta em reais"
                />
              </div>
              <button onClick={calcular} className="sim-btn inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-2xl shadow-glow">
                <Calculator className="w-5 h-5" /> Calcular
              </button>
            </div>
            <p className={`mt-3 text-sm ${hint.tone === "error" ? "text-rose-600" : hint.tone === "success" ? "text-leaf-600" : "text-sub"}`}>{hint.msg}</p>

            {result && displayResult && (
              <div ref={resultRef} className="mt-8 relative">
                {/* particles burst container */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible" aria-hidden="true">
                  {particles.map((p) => (
                    <span
                      key={p.id}
                      className="sim-particle"
                      style={{ '--tx': p.tx, '--ty': p.ty, animationDelay: p.delay } as React.CSSProperties}
                    />
                  ))}
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sim-result-card rounded-2xl bg-white border border-slate-100 p-5 text-center shadow-soft">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-sub">Economia mensal</p>
                    <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-navy count-slot">{fmt(displayResult.mensal)}</p>
                    <p className="mt-1 text-xs text-sub">por mês</p>
                  </div>
                  <div className="sim-result-card rounded-2xl bg-white border border-slate-100 p-5 text-center shadow-soft">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-sub">Economia anual</p>
                    <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-navy count-slot">{fmt(displayResult.anual)}</p>
                    <p className="mt-1 text-xs text-sub">por ano</p>
                  </div>
                  <div className="sim-result-card rounded-2xl bg-gradient-to-br from-solar-100 to-amber-50 border border-solar/30 p-5 text-center shadow-glow">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-navy/70">Em 25 anos</p>
                    <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-navy count-slot">{fmt(displayResult.total)}</p>
                    <p className="mt-1 text-xs text-navy/70">economia total</p>
                  </div>
                </div>

                <WaLink
                  text={`Olá! Simulei no site e quero economizar ${fmt(result.mensal)} por mês (${fmt(result.total)} em 25 anos) na minha conta.`}
                  section="simulador-resultado"
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-600 text-white font-bold px-8 py-4 rounded-full transition shadow-soft w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-5 h-5" /> Quero esse desconto na minha conta
                </WaLink>
              </div>
            )}

            {showAssinatura && (
              <div className="mt-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                <p className="text-leaf-600 text-sm"><strong>Sua conta é abaixo de R$ 500.</strong> Pra esse perfil, energia por assinatura costuma ser ainda mais vantajosa — sem instalar nada.</p>
                <WaLink text="Olá! Quero saber sobre energia por assinatura." section="simulador-assinatura" className="inline-flex items-center justify-center gap-2 bg-leaf hover:bg-leaf-600 text-white font-bold px-5 py-3 rounded-full whitespace-nowrap transition">
                  Conhecer assinatura
                </WaLink>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========= DEPOIMENTOS ========= */}
      <section id="depoimentos" className="py-20 sm:py-28 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl reveal flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <GoogleIcon className="w-5 h-5" />
              <p className="text-solar-600 font-semibold uppercase tracking-widest text-xs">Avaliações no Google</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy">Quem instalou com a Solpleno, conta.</h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex gap-0.5 text-solar">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-navy font-bold">5,0</span>
              <span className="text-sub text-sm">· Avaliações verificadas no Google</span>
            </div>
          </div>

          <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]} className="mt-12 reveal">
            <CarouselContent className="-ml-4">
              {[
                { i: "J", color: "bg-purple-500", n: "José Costa", meta: "Local Guide · 8 avaliações", time: "9 meses atrás", t: "Tive uma excelente experiência com a Sol Pleno Energia Solar. Desde o primeiro contato, a equipe foi muito atenciosa, esclareceu todas as minhas dúvidas e apresentou um projeto bem detalhado e transparente. A instalação dos painéis solares superou as expectativas." },
                { i: "T", color: "bg-amber-600", n: "TULIO MEDEIROS", meta: "8 avaliações · 2 fotos", time: "9 meses atrás", t: "Melhor empresa de energia solar. O Neto é um cara incrível. Nota 10." },
                { i: "J", color: "bg-rose-500", n: "Joel Rodrigues", meta: "Local Guide · 6 avaliações", time: "9 meses atrás", t: "Exelente atendimento super indico." },
                { i: "K", color: "bg-sky-500", n: "Kaline Oliveira", meta: "1 avaliação", time: "um ano atrás", t: "A melhor empresa de energia Solar." },
              ].map((d) => (
                <CarouselItem key={d.n} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <figure className="h-full bg-white p-7 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`grid place-items-center w-11 h-11 rounded-full text-white font-bold ${d.color}`}>{d.i}</span>
                        <div>
                          <p className="text-sm font-bold text-navy leading-tight">{d.n}</p>
                          <p className="text-xs text-sub">{d.meta}</p>
                        </div>
                      </div>
                      <GoogleIcon className="w-5 h-5 shrink-0" />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex gap-0.5 text-solar">
                        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <span className="text-xs text-sub">{d.time}</span>
                    </div>
                    <blockquote className="mt-4 text-ink/90 text-sm leading-relaxed flex-1">{d.t}</blockquote>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>


      {/* ========= INSTAGRAM ========= */}
      <section id="instagram" className="py-20 sm:py-28 bg-ink text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal order-2 lg:order-1 flex flex-col items-center lg:items-start">
              <span className="inline-flex items-center gap-2 bg-solar/10 border border-solar/20 px-3 py-1.5 rounded-full text-xs font-semibold text-solar mb-5">
                <Instagram className="w-3.5 h-3.5" />
                @solpleno.energiasolar
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Acompanhe nosso dia a dia no <span className="text-solar">Instagram</span>
              </h2>
              <p className="mt-4 text-white/70 max-w-md">
                Lançamentos, obras, dicas de economia e bastidores da energia solar no Ceará. Siga a gente e não perca nenhuma novidade.
              </p>
              <a
                href="https://instagram.com/solpleno.energiasolar"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f77737] text-white font-bold px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Instagram className="w-5 h-5" /> Seguir no Instagram
              </a>
            </div>
            <div className="reveal order-1 lg:order-2 flex justify-center" style={{ transitionDelay: ".15s" }}>
              <Iphone16Pro className="w-[260px] sm:w-[300px] lg:w-[340px] h-auto mx-auto max-w-full" src={instagramPerfilUrl} />
            </div>
          </div>
        </div>
      </section>

      {/* ========= CTA FINAL ========= */}
      <section className="py-20 sm:py-28 bg-solar relative overflow-hidden">
        <svg className="absolute -right-20 -top-20 w-[500px] opacity-20" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="60" fill="none" stroke="#0A2540" strokeWidth="1" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="#0A2540" strokeWidth="1" />
        </svg>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-navy relative reveal">
          <h2 className="text-[1.75rem] sm:text-5xl font-extrabold leading-tight">Sua conta de luz não vai diminuir sozinha.</h2>
          <p className="mt-4 text-base sm:text-lg text-navy/80 max-w-2xl mx-auto">Fale agora com um especialista e descubra em 5 minutos quanto você pode economizar.</p>
          <WaLink text="Olá! Vim pelo site e quero simular minha economia com energia solar." section="cta-final"
            className="mt-8 inline-flex items-center justify-center gap-3 bg-navy hover:bg-navy-600 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-full transition shadow-xl w-full sm:w-auto">
            <WhatsAppIcon className="w-6 h-6" /> Falar no WhatsApp <ArrowRight className="w-5 h-5" />
          </WaLink>
        </div>
      </section>

      {/* ========= FOOTER ========= */}
      <footer className="bg-navy text-white/80 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo light />
            <p className="mt-4 text-white/70 max-w-md">Energia solar fotovoltaica no Ceará. 6 anos transformando contas em investimento, com pós-venda que não te abandona.</p>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://instagram.com/solpleno.energiasolar" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid place-items-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition"><Instagram className="w-5 h-5" /></a>
              <a href="https://solplenoenergia.com.br" target="_blank" rel="noopener noreferrer" aria-label="Site institucional" className="grid place-items-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition"><Globe className="w-5 h-5" /></a>
              <WaLink text="Olá! Vim pelo site da Solpleno." section="footer" className="grid place-items-center w-10 h-10 rounded-xl bg-leaf hover:bg-leaf-600 transition" ariaLabel="WhatsApp"><WhatsAppIcon className="w-5 h-5" /></WaLink>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider">Contato</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-solar" /> (85) 99181-1765</li>
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-solar" /> Seg–Sex · 8h às 18h</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-solar" /> Fortaleza/CE · CEP 60426-000</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider">Navegação</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#solucoes" className="hover:text-solar">Soluções</a></li>
              <li><a href="#como" className="hover:text-solar">Como funciona</a></li>
              <li><a href="#sobre" className="hover:text-solar">Sobre nós</a></li>
              <li><a href="#simulador" className="hover:text-solar">Simulador</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between text-xs text-white/60">
          <p>© 2026 Solpleno Energia Solar. Todos os direitos reservados.</p>
          <p>Tratamos seus dados conforme a LGPD. Utilizamos cookies para melhorar sua experiência.</p>
        </div>
      </footer>

      {/* ========= WHATSAPP FLUTUANTE ========= */}
      <a
        href={waUrl("Olá! Vim pelo site e quero simular minha economia com energia solar.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#128C7E] transition"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.929L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
