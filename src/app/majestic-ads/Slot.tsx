import fs from "node:fs";
import path from "node:path";

const IMAGE_EXT = ["jpg", "jpeg", "png", "webp"];

function find(name: string, exts: string[]) {
  for (const ext of exts) {
    const file = `${name}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", "majestic-ads", file))) {
      return `/majestic-ads/${file}`;
    }
  }
  return null;
}

type Props = {
  name: string;
  ratio: string;
  alt?: string;
  video?: boolean;
  className?: string;
};

// Shows public/majestic-ads/<name>.jpg|png|webp (or .mp4 for video) when it exists,
// otherwise a labelled placeholder. Drop the file in and reload.
export function Slot({ name, ratio, alt = "", video = false, className = "" }: Props) {
  const style = { aspectRatio: ratio };
  const src = find(name, video ? ["mp4", "webm"] : IMAGE_EXT);

  if (src && video) {
    return (
      <video
        className={`ma-slot ${className}`}
        style={style}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt || undefined}
      />
    );
  }
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={`ma-slot ${className}`} style={style} src={src} alt={alt} loading="lazy" />;
  }
  return (
    <div className={`ma-slot ma-slot--empty ${className}`} style={style} role="img" aria-label={alt || "Placeholder"}>
      <span>{video ? "Video goes here" : "Image goes here"}</span>
      <code>{name}.{video ? "mp4" : "jpg"}</code>
    </div>
  );
}
