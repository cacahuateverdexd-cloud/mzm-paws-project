import { createFileRoute } from "@tanstack/react-router";
import { Heart, Star, Sparkles, Instagram, Mail, ShoppingBag, PawPrint } from "lucide-react";
import logo from "@/assets/mzm-logo.png";
import catSummer from "@/assets/catalogo-summer.png";
import catBodysuits from "@/assets/catalogo-bodysuits.png";
import catCover from "@/assets/catalogo-cover.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MZM Streetwear — Moda con causa" },
      {
        name: "description",
        content:
          "MZM Streetwear: ropa femenina con estilo Y2K. El 7% de cada venta se dona a refugios de animales en situación de calle.",
      },
      { property: "og:title", content: "MZM Streetwear — Moda con causa" },
      {
        property: "og:description",
        content: "Viste tu estilo. Salva una patita. 7% de cada compra va a refugios animales.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Causa />
      <Catalogo />
      <Sobre />
      <Contacto />
      <Footer />
    </div>
  );
}

function Nav() {
  const link = "text-sm font-semibold tracking-wide uppercase hover:text-[color:var(--brand-crimson)] transition-colors";
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--brand-cream)]/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="MZM" className="h-12 w-12 object-contain" />
          <span className="font-black text-xl tracking-tight">MZM<span className="text-[color:var(--brand-crimson)]">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#causa" className={link}>Causa</a>
          <a href="#catalogo" className={link}>Catálogo</a>
          <a href="#sobre" className={link}>Sobre MZM</a>
          <a href="#contacto" className={link}>Contacto</a>
        </nav>
        <a
          href="#catalogo"
          className="inline-flex items-center gap-2 bg-[color:var(--brand-crimson)] text-[color:var(--brand-cream)] px-4 py-2 rounded-full text-sm font-bold shadow-pop border-2 border-foreground hover:-translate-y-0.5 transition-transform"
        >
          <ShoppingBag className="h-4 w-4 shrink-0" />
          <span>Comprar</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-gradient-soft overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[color:var(--brand-pink)] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[color:var(--brand-crimson)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--brand-crimson)] text-[color:var(--brand-cream)] text-xs font-bold uppercase tracking-widest mb-6 shadow-pop border-2 border-foreground">
            <PawPrint className="h-3.5 w-3.5 shrink-0" />
            <span>7% para refugios animales</span>
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95]">
            Viste tu <span className="italic text-[color:var(--brand-crimson)]">estilo</span>.<br />
            Salva una <span className="italic text-[color:var(--brand-pink-hot)]">patita</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg">
            MZM Streetwear es moda femenina con alma. Drops Y2K, prendas que se sienten tuyas, y un 7% de cada compra que se va directo a un refugio de animales en situación de calle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 bg-foreground text-[color:var(--brand-cream)] px-7 py-4 rounded-full font-bold shadow-pop border-2 border-foreground hover:-translate-y-1 transition-transform"
            >
              <span>Ver catálogo</span>
              <Sparkles className="h-4 w-4 shrink-0" />
            </a>
            <a
              href="#causa"
              className="inline-flex items-center gap-2 bg-[color:var(--brand-cream)] px-7 py-4 rounded-full font-bold border-2 border-foreground shadow-pop hover:-translate-y-1 transition-transform"
            >
              <span>Nuestra causa</span>
              <Heart className="h-4 w-4 shrink-0 fill-[color:var(--brand-crimson)] text-[color:var(--brand-crimson)]" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
            <Star className="h-[420px] w-[420px] text-[color:var(--brand-pink)]/40 fill-[color:var(--brand-pink)]/40" />
          </div>
          <img
            src={logo}
            alt="MZM Streetwear logo"
            className="relative w-[340px] md:w-[420px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["MZM STREETWEAR", "★", "MODA CON CAUSA", "★", "7% PARA LOS PERRITOS", "★", "DROP 01", "★"];
  const row = [...items, ...items, ...items];
  return (
    <div className="bg-[color:var(--brand-crimson)] text-[color:var(--brand-cream)] py-4 border-y-2 border-foreground overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="mx-6 text-2xl md:text-3xl font-black italic font-serif">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Causa() {
  return (
    <section id="causa" className="py-24 px-5 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <div className="relative aspect-square rounded-3xl bg-gradient-hero border-2 border-foreground shadow-pop flex items-center justify-center overflow-hidden">
            <span className="text-[180px] md:text-[220px] font-black text-[color:var(--brand-cream)] leading-none">7%</span>
            <PawPrint className="absolute bottom-6 right-6 h-16 w-16 text-[color:var(--brand-cream)]" />
          </div>
        </div>
        <div className="md:col-span-3">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[color:var(--brand-crimson)]">Nuestra causa</span>
          <h2 className="text-4xl md:text-6xl font-black mt-3">Moda que rescata.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Por cada prenda MZM que llega a tu armario, el <strong className="text-foreground">7% de la venta</strong> se dona a un refugio de animales en situación de calle. Comida, vacunas, esterilizaciones, una cobija para la noche.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Porque ellos no pueden pedir ayuda como nosotros — así que la pedimos por ellos, con un buen outfit puesto.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat n="100%" t="Refugios verificados" />
            <Stat n="7%" t="De cada venta" />
            <Stat n="∞" t="Patitas felices" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, t }: { n: string; t: string }) {
  return (
    <div className="bg-[color:var(--brand-cream)] border-2 border-foreground rounded-2xl p-4 shadow-pop text-center">
      <div className="text-3xl md:text-4xl font-black text-[color:var(--brand-crimson)]">{n}</div>
      <div className="text-[10px] md:text-xs uppercase tracking-wider mt-1 font-semibold">{t}</div>
    </div>
  );
}

function Catalogo() {
  return (
    <section id="catalogo" className="py-24 px-5 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[color:var(--brand-crimson)]">Drop 01</span>
            <h2 className="text-4xl md:text-6xl font-black mt-2">Catálogo MZM</h2>
          </div>
          <p className="text-muted-foreground max-w-md">Colecciones pensadas para sentirte tú — desde tops de verano hasta bodysuits que mandan.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Coleccion img={catCover} title="Drop 01" subtitle="La colección" tag="Nuevo" />
          <Coleccion img={catSummer} title="Summer" subtitle="Tops y florales" tag="16 piezas" />
          <Coleccion img={catBodysuits} title="Bodysuits" subtitle="Siluetas que mandan" tag="18 piezas" />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-foreground text-[color:var(--brand-cream)] px-8 py-4 rounded-full font-bold shadow-pop border-2 border-foreground hover:-translate-y-1 transition-transform"
          >
            <span>Reservar una pieza</span>
            <ShoppingBag className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Coleccion({ img, title, subtitle, tag }: { img: string; title: string; subtitle: string; tag: string }) {
  return (
    <article className="group relative bg-card border-2 border-foreground rounded-3xl overflow-hidden shadow-pop hover:-translate-y-2 transition-transform">
      <div className="aspect-[3/4] overflow-hidden bg-[color:var(--brand-pink)]/30">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-5 flex items-end justify-between gap-3">
        <div>
          <h3 className="text-2xl font-black">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[color:var(--brand-crimson)] text-[color:var(--brand-cream)]">{tag}</span>
      </div>
    </article>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 px-5 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[color:var(--brand-crimson)]">Sobre MZM</span>
        <h2 className="text-4xl md:text-6xl font-black mt-3">
          Una marca, una <em className="text-[color:var(--brand-pink-hot)]">misión</em>.
        </h2>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
          MZM nació de la idea de unir dos cosas que aman a Monserrat: el diseño de moda femenina y los animales que viven en la calle. Cada colección se piensa con cuidado — desde el material hasta el último detalle — porque una marca no son solo prendas, es lo que dejas en el mundo con ellas.
        </p>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
          El resto de las ganancias mantiene viva a la marca, para que el 7% siga llegando, drop tras drop, a quienes más lo necesitan.
        </p>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-24 px-5 bg-gradient-hero text-[color:var(--brand-cream)]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black">¿Lista para el drop?</h2>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          Escríbenos para reservar, colaborar o sumar tu refugio a la causa.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hola@mzmstreetwear.com"
            className="inline-flex items-center gap-2 bg-[color:var(--brand-cream)] text-foreground px-7 py-4 rounded-full font-bold border-2 border-foreground shadow-pop hover:-translate-y-1 transition-transform"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span>hola@mzmstreetwear.com</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-[color:var(--brand-cream)] px-7 py-4 rounded-full font-bold border-2 border-foreground shadow-pop hover:-translate-y-1 transition-transform"
          >
            <Instagram className="h-4 w-4 shrink-0" />
            <span>@mzm.streetwear</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-[color:var(--brand-cream)] py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="MZM" className="h-10 w-10 object-contain" />
          <span className="font-black">MZM Streetwear © {new Date().getFullYear()}</span>
        </div>
        <p className="text-sm opacity-80">Hecho con <Heart className="inline h-3 w-3 fill-current" /> por Monserrat Zarate Montes.</p>
      </div>
    </footer>
  );
}
