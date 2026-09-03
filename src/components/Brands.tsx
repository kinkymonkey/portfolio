import { brands } from "@/lib/data";

export function Brands() {
  return (
    <section className="border-y border-hairline bg-bg py-8">
      <div className="mx-auto flex max-w-[1400px] flex-wrap gap-x-8 gap-y-2 px-4 md:px-6">
        {brands.map((brand) => (
          <span key={brand} className="font-body text-sm text-ink/80">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
