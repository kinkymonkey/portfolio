import { WorkCardGrid } from "./WorkCards";

export function WorkGrid() {
  return (
    <section id="work" className="bg-bg py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <WorkCardGrid />
      </div>
    </section>
  );
}
