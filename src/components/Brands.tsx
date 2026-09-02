import { brands } from "@/lib/data";

export function Brands() {
  const track = [...brands, ...brands];
  return (
    <section className="border-y border-hairline bg-surface py-6">
      <div className="group overflow-hidden">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-10 group-hover:[animation-play-state:paused]">
          {track.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap font-display text-xl uppercase tracking-tight text-paper/45"
            >
              {brand}
              <span aria-hidden className="text-ember">
                /
              </span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
