import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Crown, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import logo from "@/assets/kvl-logo.png.asset.json";
import hero from "@/assets/hero-kvl.jpg";
import catCamisas from "@/assets/cat-camisas-milan.jpg";
import catTenis from "@/assets/cat-tenis-tn.jpg";
import catBones from "@/assets/cat-bones-brand.jpg";
import { InstagramIcon, WhatsAppIcon } from "@/components/kvl/icons";
import { ADDRESS_LINE, ADDRESS_MAPS_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/kvl";

const TITLE = "KVL Grife — Um projeto que já nasceu grande";
const DESCRIPTION =
  "KVL Grife: artigos esportivos e streetwear com estilo. Camisas, tênis, bonés e conjuntos. Peça pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  { title: "Camisas & Camisetas", text: "Mantos de time e básicas que vestem bem.", img: catCamisas, msg: "camisas e camisetas" },
  { title: "Tênis", text: "Pisante certo pro dia a dia e pro rolê.", img: catTenis, msg: "tênis" },
  { title: "Bonés & Conjuntos", text: "Agasalhos, bonés e acessórios pra fechar o look.", img: catBones, msg: "bonés e conjuntos" },
];

const perks = [
  { icon: MessageCircle, title: "Atendimento no WhatsApp", text: "Tire dúvidas, veja tamanhos e feche seu pedido direto com a gente." },
  { icon: Sparkles, title: "Peças selecionadas", text: "Cada item é escolhido a dedo pra quem gosta de se vestir bem." },
  { icon: ShieldCheck, title: "Compra com confiança", text: "Loja com presença ativa no Instagram e clientes de verdade." },
];

const marquee = ["Um projeto que já nasceu grande", "KVL Grife", "Esporte & Streetwear", "Estilo de verdade"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo.url} alt="KVL Grife" className="h-11 w-auto" width={66} height={44} />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#colecao" className="transition-colors hover:text-foreground">Coleção</a>
            <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </nav>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-street !px-4 !py-2 !text-sm">
            <WhatsAppIcon className="h-4 w-4" /> Comprar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
        <img
          src={hero}
          alt="Modelo vestindo conjunto esportivo preto e vermelho da KVL Grife"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          width={1600}
          height={1008}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-fade-bottom" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
          <div className="max-w-2xl">
            <img
              src={logo.url}
              alt="KVL Oficial"
              className="w-64 animate-rise drop-shadow-2xl md:w-96"
              width={384}
              height={256}
            />
            <p className="mt-6 flex animate-rise items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary [animation-delay:120ms]">
              <Crown className="h-4 w-4" /> KVL Grife
            </p>
            <h1 className="mt-3 animate-rise font-display text-5xl uppercase leading-[0.95] md:text-7xl [animation-delay:200ms]">
              Um projeto que <span className="text-chrome">já nasceu</span>{" "}
              <span className="text-primary">grande.</span>
            </h1>
            <p className="mt-6 max-w-lg animate-rise text-lg text-muted-foreground [animation-delay:300ms]">
              Artigos esportivos e streetwear pra quem veste atitude. Camisas, tênis, bonés e conjuntos com o estilo
              KVL.
            </p>
            <div className="mt-10 flex animate-rise flex-wrap gap-4 [animation-delay:400ms]">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-street">
                <WhatsAppIcon className="h-5 w-5" /> Pedir no WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-ghost-street">
                <InstagramIcon className="h-5 w-5" /> Ver no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {[...marquee, ...marquee].map((item, i) => (
                <span key={i} className="flex items-center gap-8 px-8 font-display text-2xl uppercase tracking-wide">
                  {item} <Crown className="h-5 w-5" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Collection */}
      <section id="colecao" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Coleção</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-6xl">
              Vista o <span className="text-chrome">jogo</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Escolha a categoria e chame no WhatsApp pra ver modelos, tamanhos e disponibilidade.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <a
              key={c.title}
              href={whatsappLink(`Olá! Quero ver os modelos de ${c.msg} da KVL Grife.`)}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={800}
                  height={1008}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-fade-bottom p-6 pt-24">
                <h3 className="font-display text-3xl uppercase">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                  Ver modelos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <img src={logo.url} alt="Logo KVL Oficial" loading="lazy" className="relative w-full max-w-md" width={448} height={299} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Sobre a KVL</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-tight md:text-5xl">
              Nascemos com <span className="text-chrome">a coroa</span> na cabeça
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A KVL Grife é um projeto que já nasceu grande. Unimos o melhor do esporte com o estilo das ruas pra
              trazer peças que dão presença, conforto e atitude no dia a dia.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-1">
              {perks.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold uppercase tracking-wide">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contato */}
      <footer id="contato" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
          <div>
            <img src={logo.url} alt="KVL Grife" loading="lazy" className="h-20 w-auto" width={120} height={80} />
            <p className="mt-4 text-sm text-muted-foreground">Um projeto que já nasceu grande.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Endereço</h3>
            <a
              href={ADDRESS_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-start gap-3 text-foreground transition-colors hover:text-primary"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
              <span>{ADDRESS_LINE}</span>
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Contato</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary">
                <WhatsAppIcon className="h-5 w-5" /> {WHATSAPP_DISPLAY}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary">
                <InstagramIcon className="h-5 w-5" /> {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground md:px-8">
            © {new Date().getFullYear()} KVL Grife. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
