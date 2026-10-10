import {
  ArrowRight,
  BadgeCheck,
  Gauge,
  HardHat,
  HelpCircle,
  Receipt,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { Location } from "./Location";

const TRUST_BADGES = [
  {
    icon: HardHat,
    title: "Técnicos Certificados",
    description: "Mão de obra qualificada",
  },
  {
    icon: Receipt,
    title: "Orçamento Claro",
    description: "Sem custos ocultos",
  },
  {
    icon: ShieldCheck,
    title: "Peças de Qualidade",
    description: "Procedência rigorosa",
  },
  {
    icon: Gauge,
    title: "Agilidade no Diagnóstico",
    description: "Retorno pontual",
  },
] as const;

export function Hero() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-linear-to-b from-[#fbf8fe] via-[#faf6fd] to-background pt-12 pb-20 md:py-24"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary shadow-xs">
            <BadgeCheck className="size-4" />
            Centro Técnico Especializado
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary shadow-xs">
            <Shield className="size-4" />
            Garantia e Procedência
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-heading mb-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Service Eletrônica
            </h1>
            <p className="mb-6 text-xl font-semibold text-primary">
              Assistência técnica autorizada para eletroeletrônicos.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Com sólida experiência no setor de reparo eletrônico e
              eletrodomésticos, oferecemos atendimento ágil e especializado
              para as principais marcas do mercado. Nosso compromisso é
              pautado pela total transparência no diagnóstico, rapidez na
              execução e uso exclusivo de componentes de procedência
              assegurada.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {TRUST_BADGES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-border/70 bg-white p-4 shadow-sm transition-all hover:border-primary hover:shadow-md"
                >
                  <Icon className="mb-1.5 size-6 text-primary transition-transform group-hover:scale-110" />
                  <h4 className="text-sm font-semibold text-primary">
                    {title}
                  </h4>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#atendimento"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#4f087c] active:scale-[0.98]"
              >
                Solicitar Atendimento
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-xs transition-all hover:border-primary hover:bg-secondary"
              >
                Entender o Fluxo
                <HelpCircle className="size-5" />
              </a>
            </div>
          </div>

          <Location />
        </div>
      </div>
    </section>
  );
}
