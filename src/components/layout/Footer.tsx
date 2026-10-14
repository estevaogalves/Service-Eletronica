import { BadgeCheck, Cpu, MapPin, Phone } from "lucide-react";
import { NAV_LINKS } from "./Navigation";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-[#603083] bg-primary text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-[#603083]/40 pb-8 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-white text-primary">
                <Cpu className="size-5" />
              </div>
              <span className="font-heading text-xl font-bold text-white">
                {company.name}
              </span>
            </div>
            <p className="max-w-md text-sm text-purple-200/90">
              Assistência Técnica Autorizada com laboratório
              próprio, instrumentos calibrados e dedicação completa ao reparo
              de eletrônicos e utilidades domésticas.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-purple-200">
              <span className="flex items-center gap-1">
                <BadgeCheck className="size-4 text-[#e2b6ff]" />
                Peças 100% Originais
              </span>
              <span className="flex items-center gap-1">
                <BadgeCheck className="size-4 text-[#e2b6ff]" />
                Garantia Oficial
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-purple-200/80 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Contato &amp; Localização
            </h4>
            <div className="space-y-2.5 text-sm text-purple-200/90">
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4.5 shrink-0 text-[#e2b6ff]" />
                <span>{company.contact.whatsappNumber}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4.5 shrink-0 text-[#e2b6ff]" />
                <span>
                  {company.address.neighborhood}, {company.address.city} -{" "}
                  {company.address.state}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-purple-200/70">
          © {new Date().getFullYear()} {company.name}. Assistência Técnica
          Autorizada. Peças 100% Originais. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
