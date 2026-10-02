import Link from "next/link";
import { ArrowRight, Check, Plus, X } from "@phosphor-icons/react/dist/ssr";
import { Slot } from "./Slot";
import { BeforeAfter } from "./BeforeAfter";
import { links } from "./links";

/*
  THESIS: A sales page that shows the files you get, not a SaaS page with avatars and blue buttons.
  OWN-WORLD: Near-black (#0a0a0b), warm white text, one flash-pink accent (#ff4d94), Bricolage Grotesque display, Instrument Sans body.
  STORY: A brand owner sees the real set, sees their look vs a fresh one on the slider, reads one price, pays.
  FIRST VIEWPORT: Headline left at display size, $249 button under it, three staggered ads right.
  FORM: Image-led bento with a before/after slider as the one signature piece.
*/

const strip = ["No contract. No lock-in", "3 revision rounds", "You own the files", "Delivered in 10 days"];

const tools = [
  ["Researches real customer words", "No", "No", "Yes"],
  ["3 different angles, not look-alikes", "No", "No", "Yes"],
  ["A person checks logo, label and colour", "No", "Sometimes", "Every frame"],
  ["Claims and AI-label check", "No", "No", "Yes"],
  ["Brief and test plan included", "No", "No", "Yes"],
  ["No contract, no subscription", "No", "Yes", "Yes"],
] as const;

const steps = [
  ["Day 0", "You pay and send your product link and photos."],
  ["Days 1 to 3", "I research what your customers say and what your competitors run. You see the 3 angles."],
  ["Days 4 to 8", "I make the set and check every frame against your real product."],
  ["Day 10", "Files, briefs and test plan arrive. You get 3 rounds of revisions."],
] as const;

const faq = [
  ["How long does it take?", "About 10 days from payment and your product photos."],
  [
    "What do you need from me?",
    "Your product link, product photos, any brand guidelines, the claims you are allowed to make, and the competitors you want to stand apart from.",
  ],
  [
    "How do revisions work?",
    "You get 3 rounds. In each round you send one list of changes and I return the updated set.",
  ],
  [
    "Is it made with AI?",
    "Yes. AI tools make the images and video. I direct every set and check every frame against your real product, so the logo, label, colour and shape stay true. Where a platform asks for an AI label, the set tells you which assets need one.",
  ],
  [
    "Can you make videos with AI people?",
    "Yes, if you want them. Tell me when you order. Platforms such as TikTok and Meta can ask for a label on realistic AI people, and I mark which assets need it.",
  ],
  ["Who owns the files?", "You do."],
  [
    "What products work?",
    "Skincare is where I start. Food, accessories, home goods and other physical products with clear photos work too.",
  ],
  [
    "Is $249 a trial?",
    "No. It is a full set. $249 is the price of your first one, and every set after is $499.",
  ],
] as const;

function Cell({ yes }: { yes: string }) {
  if (yes === "No") return <X size={18} weight="bold" aria-label="No" />;
  return <span>{yes}</span>;
}

export default function MajesticAdsPage() {
  return (
    <>
      <header className="ma-head">
        <div className="ma-wrap ma-head__in">
          <div className="ma-head__brand">
            <span className="ma-logo">Majestic Ads</span>
            <Link href="/" className="ma-head__by">
              by Justin Henry Teh
            </Link>
          </div>
          <a className="ma-btn ma-btn--sm" href={links.first}>
            Get your first set, $249
          </a>
        </div>
      </header>

      <main>
        <section className="ma-hero">
          <div className="ma-wrap ma-hero__grid">
            <div>
              <h1 className="ma-h1 ma-rise" style={{ ["--d" as string]: "0ms" }}>
                A fresh set of ads for your product.
              </h1>
              <p className="ma-lede ma-rise" style={{ ["--d" as string]: "140ms" }}>
                6 image ads and 3 videos, each video with 3 different openings. Made from your product link,
                checked against your real product, ready in 10 days.
              </p>
              <div className="ma-rise ma-cta-row" style={{ ["--d" as string]: "260ms" }}>
                <a className="ma-btn" href={links.first}>
                  Get your first set for $249 <ArrowRight size={20} weight="bold" />
                </a>
                <span className="ma-muted">Then $499 a set, or $1,000 a month for 3.</span>
              </div>
              <ul className="ma-strip ma-rise" style={{ ["--d" as string]: "380ms" }}>
                {strip.map((t) => (
                  <li key={t}>
                    <Check size={16} weight="bold" /> {t}
                  </li>
                ))}
              </ul>
              <p className="ma-small ma-rise" style={{ ["--d" as string]: "460ms" }}>
                Skincare, food, accessories, home. Anything with a product photo.
              </p>
            </div>
            <div className="ma-hero__art" aria-hidden={false}>
              <Slot name="hero-1" ratio="4/5" alt="Sample skincare ad" className="ma-rise ma-hero__a" />
              <Slot name="hero-2" ratio="4/5" alt="Sample skincare ad" className="ma-rise ma-hero__b" />
              <Slot name="hero-3" ratio="9/16" alt="Sample vertical ad" className="ma-rise ma-hero__c" />
            </div>
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap">
            <h2 className="ma-h2">Why most ads look like everyone else&apos;s.</h2>
            <div className="ma-problems">
              <p>
                <strong>Ad tools make 30 versions of one idea.</strong> Meta treats look-alike ads as one ad, so
                you test the same thing again and again.
              </p>
              <p>
                <strong>They get your logo, label and colours wrong.</strong> You spot it after the ad has gone
                out.
              </p>
              <p>
                <strong>A $5 freelancer gives you one image</strong> and no thinking behind it.
              </p>
            </div>
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap">
            <h2 className="ma-h2">One set. Everything you need to run a test.</h2>
            <div className="ma-bento">
              <div className="ma-cell ma-cell--a">
                <h3 className="ma-h3">6 image ads</h3>
                <p className="ma-muted">4:5 for the feed, 9:16 for Stories and Reels.</p>
                <div className="ma-six">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <Slot key={n} name={`static-${n}`} ratio="4/5" alt={`Image ad ${n}`} />
                  ))}
                </div>
              </div>
              <div className="ma-cell ma-cell--b">
                <Slot name="video-1" ratio="9/16" video alt="Sample video ad" className="ma-cell__video" />
                <div>
                  <h3 className="ma-h3">3 videos</h3>
                  <p className="ma-muted">10 to 20 seconds each. 9:16 and 4:5 exports.</p>
                </div>
              </div>
              <div className="ma-cell ma-cell--c">
                <h3 className="ma-h3">3 openings per video</h3>
                <p className="ma-muted">
                  Only the first 2 seconds change. 9 versions to find the opening that stops the scroll.
                </p>
                <ul className="ma-hooks">
                  <li>
                    <b>A</b> If your moisturiser feels heavy by noon, watch this.
                  </li>
                  <li>
                    <b>B</b> What lightweight actually looks like on skin.
                  </li>
                  <li>
                    <b>C</b> Three signs your daily cream is too rich.
                  </li>
                </ul>
              </div>
              <div className="ma-cell ma-cell--d">
                <h3 className="ma-h3">3 briefs</h3>
                <p className="ma-muted">One page per angle: who it is for, the idea, and why it should work.</p>
              </div>
              <div className="ma-cell ma-cell--e">
                <h3 className="ma-h3">1 test plan</h3>
                <p className="ma-muted">What to run first, what to compare, and file names your media buyer can read.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap ma-split">
            <div>
              <h2 className="ma-h2">Same product. New world.</h2>
              <p className="ma-body">
                Your logo, colours and product stay exactly as they are. The setting, the light and the camera
                are new, so your ads stop looking like the ones you already run.
              </p>
              <p className="ma-small">Drag the line.</p>
            </div>
            <BeforeAfter
              before={<Slot name="before" ratio="4/5" alt="A brand's current ad" />}
              after={<Slot name="after" ratio="4/5" alt="The fresh version of the same product" />}
            />
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap">
            <h2 className="ma-h2">Ten days, four steps.</h2>
            <ol className="ma-steps">
              {steps.map(([day, text]) => (
                <li key={day}>
                  <span className="ma-steps__day">{day}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap">
            <h2 className="ma-h2">What the tools skip.</h2>
            <div className="ma-table-wrap">
              <table className="ma-table">
                <caption className="ma-sr">Majestic Ads compared with ad tools and a $5 freelancer</caption>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Ad tools</th>
                    <th scope="col">$5 freelancer</th>
                    <th scope="col" className="ma-table__us">
                      Majestic Ads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map(([row, a, b, c]) => (
                    <tr key={row}>
                      <th scope="row">{row}</th>
                      <td>
                        <Cell yes={a} />
                      </td>
                      <td>
                        <Cell yes={b} />
                      </td>
                      <td className="ma-table__us">
                        <Cell yes={c} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ma-body ma-maker">
              Every frame is checked by Justin Henry Teh. 20+ years in design and art direction, including
              Avon, McCann and Nestlé.
            </p>
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap">
            <h2 className="ma-h2">Sample work</h2>
            <p className="ma-body">Concept work made to show direction. Not client results.</p>
          </div>
          <div className="ma-gallery" tabIndex={0} aria-label="Sample work, scrolls sideways">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <Slot key={n} name={`sample-${n}`} ratio="4/5" alt={`Sample work ${n}`} />
            ))}
          </div>
        </section>

        <section className="ma-sec" id="price">
          <div className="ma-wrap">
            <h2 className="ma-h2">Pricing</h2>
            <div className="ma-prices">
              <div className="ma-price ma-price--main">
                <h3 className="ma-h3">First set</h3>
                <p className="ma-price__n">$249</p>
                <p>For brands new to Majestic Ads. One first set per brand.</p>
                <ul>
                  <li>6 image ads</li>
                  <li>3 videos, 3 openings each</li>
                  <li>3 briefs and 1 test plan</li>
                  <li>3 revision rounds</li>
                </ul>
                <a className="ma-btn ma-btn--ink" href={links.first}>
                  Get your first set <ArrowRight size={20} weight="bold" />
                </a>
              </div>
              <div className="ma-price">
                <h3 className="ma-h3">One set</h3>
                <p className="ma-price__n">$499</p>
                <p>Any set after your first. The same set, the same 3 revision rounds.</p>
                <a className="ma-btn ma-btn--ghost" href={links.single}>
                  Get a set
                </a>
              </div>
              <div className="ma-price">
                <h3 className="ma-h3">3 sets a month</h3>
                <p className="ma-price__n">
                  $1,000<span> a month</span>
                </p>
                <p>A new set about every 10 days. Ads wear out in 2 to 3 weeks, so you always have fresh ones.</p>
                <a className="ma-btn ma-btn--ghost" href={links.monthly}>
                  Start monthly
                </a>
              </div>
            </div>
            <p className="ma-small">
              Ad tools run $39 to $999 a month and you do the work. Icon charges $1,000 a month for 6 UGC ads.
            </p>
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap">
            <h2 className="ma-h2">What this is not.</h2>
            <p className="ma-body ma-big">
              Media buying. Ad copywriting as a service. Guaranteed sales or results.
            </p>
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap ma-faq-wrap">
            <h2 className="ma-h2">Questions</h2>
            <div className="ma-faq">
              {faq.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <Plus size={20} weight="bold" aria-hidden="true" />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ma-sec ma-final">
          <div className="ma-wrap">
            <h2 className="ma-h1">Get your fresh set.</h2>
            <div className="ma-cta-row">
              <a className="ma-btn" href={links.first}>
                Get your first set for $249 <ArrowRight size={20} weight="bold" />
              </a>
            </div>
            <p className="ma-small">After you pay, a short form asks for your product link, photos and claims.</p>
          </div>
        </section>
      </main>

      <footer className="ma-foot">
        <div className="ma-wrap ma-foot__in">
          <span>Majestic Ads by Justin Henry Teh</span>
          <span className="ma-foot__links">
            <a href={links.linkedin}>LinkedIn</a>
            <Link href="/">Portfolio</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
