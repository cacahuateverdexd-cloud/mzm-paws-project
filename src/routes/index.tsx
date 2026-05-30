import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Instagram, Mail, ShoppingBag, PawPrint, Shirt, CreditCard, Bell, Truck, User, Star } from "lucide-react";
import logo from "@/assets/mzm-logo.jpeg";
import catTops from "@/assets/catalogo-tops.jpeg";
import catBodysuits from "@/assets/catalogo-bodysuits.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MZM Street Wear — Moda con propósito" },
      {
        name: "description",
        content:
          "MZM Street Wear: moda femenina con causa. El 7% de cada compra se dona a refugios de animales. Tops, bodysuits y más.",
      },
      { property: "og:title", content: "MZM Street Wear — Moda con propósito" },
      {
        property: "og:description",
        content: "Viste tendencia, transforma vidas. 7% de cada compra para refugios animales.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-[color:var(--brand-cream)] text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <Catalogo />
      <Impacto />
      <Sobre />
      <Contacto />
      <Footer />
    </div>
  );
}

function Nav() {
  const link = "text-sm font-semibold tracking-wide uppercase hover:text-[color:var(--brand-pink-hot)] transition-colors";
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/90 border-b border-[color:var(--brand-pink)]/30">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between text-[color:var(--brand-cream)]">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="MZM Street Wear" className="h-12 w-12 object-contain rounded-full" />
          <span className="font-black text-xl tracking-tight">MZM<span className="text-[color:var(--brand-pink-hot)]">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#catalogo" className={link}>Catálogo</a>
          <a href="#impacto" className={link}>Impacto</a>
          <a href="#sobre" className={link}>Sobre</a>
          <a href="#contacto" className={link}>Contacto</a>
        </nav>
        <a
          href="#catalogo"
          className="inline-flex items-center gap-2 bg-[color:var(--brand-pink-hot)] text-black px-4 py-2 rounded-full text-sm font-bold hover:-translate-y-0.5 transition-transform"
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
    <section id="top" className="relative bg-[color:var(--brand-cream)] overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[color:var(--brand-pink)] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[color:var(--brand-pink-hot)]/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] font-semibold text-foreground/70">
            Monse Zárate Montes
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="h-px w-10 bg-[color:var(--brand-pink-hot)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-pink-hot)] font-semibold">Moda que transforma vidas</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mt-6">
            MODA CON<br />
            <span className="italic text-[color:var(--brand-pink-hot)]">PROPÓSITO</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-lg">
            Descubre MZM Street Wear: moda femenina donde cada compra impulsa el rescate y cuidado de animales en refugios.
          </p>
          <p className="mt-4 italic text-[color:var(--brand-pink-hot)] text-lg">
            Viste tendencia, transforma vidas. <Heart className="inline h-4 w-4 fill-current shrink-0" />
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 bg-black text-[color:var(--brand-cream)] px-7 py-4 rounded-full font-bold hover:-translate-y-1 transition-transform"
            >
              <span>Comprar ahora</span>
              <Sparkles className="h-4 w-4 shrink-0" />
            </a>
            <a
              href="#impacto"
              className="inline-flex items-center gap-2 bg-[color:var(--brand-pink-hot)] text-black px-7 py-4 rounded-full font-bold hover:-translate-y-1 transition-transform"
            >
              <span>Nuestra causa</span>
              <PawPrint className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative rounded-full bg-black p-8 md:p-12 shadow-soft">
            <img
              src={logo}
              alt="MZM Street Wear logo"
              className="w-[280px] md:w-[380px] rounded-full"
            />
          </div>
          <span className="absolute -bottom-4 -right-2 md:right-8 bg-[color:var(--brand-pink-hot)] text-black text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full rotate-[-8deg]">
            Cada compra hace la diferencia
          </span>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Shirt, t: "Catálogo", d: "Explora tops, bodysuits y colecciones street wear con fotos, tallas, colores y precios." },
    { icon: ShoppingBag, t: "Carrito", d: "Agrega, edita y revisa tus productos fácilmente." },
    { icon: CreditCard, t: "Pagos online", d: "Paga de forma segura con tarjetas, PSE, Nequi, Daviplata y más." },
    { icon: User, t: "Cuenta", d: "Regístrate, inicia sesión y guarda tu historial de compras." },
    { icon: Truck, t: "Seguimiento", d: "Conoce el estado de tu pedido en tiempo real." },
    { icon: Heart, t: "Favoritos", d: "Guarda tus prendas favoritas para comprarlas después." },
  ];
  return (
    <section className="py-20 px-5 bg-[color:var(--brand-cream)] border-y border-[color:var(--brand-pink)]/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <span className="bg-black text-[color:var(--brand-cream)] px-6 py-2 rounded-full text-sm md:text-base font-bold uppercase tracking-wider">
            Todo lo que necesitas en una sola app
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((it) => (
            <div key={it.t} className="text-center">
              <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-[color:var(--brand-pink)]/40 flex items-center justify-center">
                <it.icon className="h-7 w-7 text-[color:var(--brand-pink-hot)] shrink-0" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide">{it.t}</h3>
              <p className="text-xs text-foreground/70 mt-2 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <SideFeature icon={Instagram} t="Integración con redes" d="Síguenos y descubre nuevas colecciones, promociones y más." />
          <SideFeature icon={Bell} t="Notificaciones" d="Recibe alertas de nuevos lanzamientos, descuentos y promociones exclusivas." />
        </div>
      </div>
    </section>
  );
}

function SideFeature({ icon: Icon, t, d }: { icon: typeof Heart; t: string; d: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="h-12 w-12 shrink-0 rounded-full bg-[color:var(--brand-pink)]/40 flex items-center justify-center">
        <Icon className="h-6 w-6 text-[color:var(--brand-pink-hot)] shrink-0" />
      </div>
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wide">{t}</h4>
        <p className="text-sm text-foreground/70 mt-1">{d}</p>
      </div>
    </div>
  );
}

function Catalogo() {
  return (
    <section id="catalogo" className="py-24 px-5 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[color:var(--brand-pink-hot)]">Drop 01</span>
          <h2 className="text-4xl md:text-6xl font-black mt-3">Nuestro Catálogo</h2>
          <p className="text-foreground/70 max-w-xl mx-auto mt-4">
            Colecciones pensadas para sentirte tú — tops de verano y bodysuits que mandan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ColeccionCard img={catTops} title="Tops Summer" subtitle="12 piezas · desde $45" />
          <ColeccionCard img={catBodysuits} title="Bodysuits" subtitle="12 piezas · desde $45" />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-black text-[color:var(--brand-cream)] px-8 py-4 rounded-full font-bold hover:-translate-y-1 transition-transform"
          >
            <span>Reservar por Instagram</span>
            <Instagram className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ColeccionCard({ img, title, subtitle }: { img: string; title: string; subtitle: string }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-[color:var(--brand-pink)]/40 shadow-soft hover:-translate-y-2 transition-transform">
      <div className="overflow-hidden bg-[color:var(--brand-pink)]/20">
        <img src={img} alt={title} className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700" />
      </div>
      <div className="p-5 flex items-end justify-between gap-3 bg-black text-[color:var(--brand-cream)]">
        <div>
          <h3 className="text-2xl font-black">{title}</h3>
          <p className="text-sm opacity-80">{subtitle}</p>
        </div>
        <Star className="h-6 w-6 text-[color:var(--brand-pink-hot)] fill-[color:var(--brand-pink-hot)] shrink-0" />
      </div>
    </article>
  );
}

function Impacto() {
  return (
    <section id="impacto" className="py-20 px-5 bg-[color:var(--brand-cream)]">
      <div className="max-w-5xl mx-auto bg-black text-[color:var(--brand-cream)] rounded-3xl overflow-hidden p-10 md:p-14 relative">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[color:var(--brand-pink-hot)]/30 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black">
              IMPACTO <span className="text-[color:var(--brand-pink-hot)]">SOCIAL</span> <Heart className="inline h-8 w-8 fill-[color:var(--brand-pink-hot)] text-[color:var(--brand-pink-hot)] shrink-0" />
            </h2>
            <p className="mt-5 text-lg opacity-90">
              El <strong className="text-[color:var(--brand-pink-hot)]">7% de las ganancias</strong> de cada compra se dona a refugios de animales. Gracias a ti, más vidas son transformadas.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <Stat icon={<Heart className="h-6 w-6 text-[color:var(--brand-pink-hot)] shrink-0" />} n="$12.500.000" t="Donados" />
              <Stat icon={<PawPrint className="h-6 w-6 text-[color:var(--brand-pink-hot)] shrink-0" />} n="248" t="Animales ayudados" />
            </div>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 bg-[color:var(--brand-pink-hot)] text-black px-6 py-3 rounded-full font-bold hover:-translate-y-1 transition-transform"
            >
              <span>Juntos hacemos la diferencia</span>
              <Heart className="h-4 w-4 fill-black shrink-0" />
            </a>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-hero flex items-center justify-center border-4 border-[color:var(--brand-pink-hot)]">
              <div className="text-center">
                <div className="text-[120px] md:text-[160px] font-black leading-none text-[color:var(--brand-cream)]">7%</div>
                <div className="uppercase tracking-[0.3em] text-sm font-bold text-[color:var(--brand-cream)]">para refugios</div>
              </div>
              <PawPrint className="absolute bottom-5 right-5 h-12 w-12 text-[color:var(--brand-cream)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, n, t }: { icon: React.ReactNode; n: string; t: string }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <div className="text-2xl font-black text-[color:var(--brand-pink-hot)]">{n}</div>
        <div className="text-[10px] uppercase tracking-wider opacity-80">{t}</div>
      </div>
    </div>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 px-5 bg-[color:var(--brand-cream)] border-t border-[color:var(--brand-pink)]/40">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[color:var(--brand-pink-hot)]">Sobre MZM</span>
        <h2 className="text-4xl md:text-6xl font-black mt-3">
          Una marca, una <em className="text-[color:var(--brand-pink-hot)]">misión</em>.
        </h2>
        <p className="mt-8 text-lg md:text-xl text-foreground/75 leading-relaxed">
          MZM Street Wear nace de la unión de dos pasiones de Monserrat Zárate Montes: el diseño de moda femenina y el cuidado de los animales que viven en la calle. Cada colección se piensa con cariño porque una marca no son solo prendas, es lo que dejas en el mundo con ellas.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wider font-bold">
          <span className="flex items-center gap-2"><Shirt className="h-5 w-5 text-[color:var(--brand-pink-hot)] shrink-0" /> Moda con estilo</span>
          <span className="flex items-center gap-2"><ShoppingBag className="h-5 w-5 text-[color:var(--brand-pink-hot)] shrink-0" /> Compras con propósito</span>
          <span className="flex items-center gap-2"><PawPrint className="h-5 w-5 text-[color:var(--brand-pink-hot)] shrink-0" /> Impacto real</span>
        </div>
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
          Escríbenos por Instagram o correo para reservar tu pieza o sumarte a la causa.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://instagram.com/mzm_clothes"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-[color:var(--brand-cream)] px-7 py-4 rounded-full font-bold hover:-translate-y-1 transition-transform"
          >
            <Instagram className="h-4 w-4 shrink-0" />
            <span>@mzm_clothes</span>
          </a>
          <a
            href="mailto:monserratzaratemontes10@gmail.com"
            className="inline-flex items-center gap-2 bg-[color:var(--brand-cream)] text-black px-7 py-4 rounded-full font-bold hover:-translate-y-1 transition-transform"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="break-all">monserratzaratemontes10@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-[color:var(--brand-cream)] py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="MZM" className="h-10 w-10 object-contain rounded-full" />
          <span className="font-black">MZM Street Wear © 2026</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://instagram.com/mzm_clothes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[color:var(--brand-pink-hot)]">
            <Instagram className="h-4 w-4 shrink-0" /> <span>@mzm_clothes</span>
          </a>
          <a href="mailto:monserratzaratemontes10@gmail.com" className="flex items-center gap-2 hover:text-[color:var(--brand-pink-hot)]">
            <Mail className="h-4 w-4 shrink-0" /> <span className="hidden sm:inline break-all">monserratzaratemontes10@gmail.com</span>
          </a>
        </div>
        <p className="text-sm opacity-80 w-full md:w-auto text-center md:text-right">
          <span>Hecho con</span> <Heart className="inline h-3 w-3 fill-current shrink-0" /> <span>por Monserrat Zárate Montes.</span>
        </p>
      </div>
    </footer>
  );
}
