import { Factory, Stars } from "lucide-react";
import { brands } from "@/data/brands";
import { BrandCard } from "./BrandCard";
import { ProductsSection } from "./ProductsSection";

export function BrandsSection() {
  return (
    <section
      id="marcas-produtos"
      className="border-y border-border bg-gradient-to-b from-[#faf6fd]/60 via-muted/50 to-[#faf6fd]/60 py-[clamp(1.5rem,5svh,3.5rem)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-[clamp(1rem,4svh,3rem)] max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-primary">
            <Factory className="size-4" />
            Ampla Cobertura Autorizada
          </div>
          <h2 className="font-heading mb-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Marcas e Produtos Atendidos
          </h2>
          <p className="text-muted-foreground">
            Estrutura laboratorial e ferramental técnico especializado para
            diagnosticar com acurácia os equipamentos das marcas mais
            consolidadas do mercado.
          </p>
        </div>

        <div className="mb-[clamp(1.5rem,4svh,3rem)]">
          <div className="mb-6 flex items-center gap-3">
            <Stars className="size-6 text-primary" />
            <h3 className="font-heading text-xl font-semibold text-primary">
              Marcas Atendidas
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
        </div>

        <ProductsSection />
      </div>
    </section>
  );
}
