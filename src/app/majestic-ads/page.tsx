import Link from "next/link";
import { ArrowRight, Check, Plus, X } from "@phosphor-icons/react/dist/ssr";
import { Slot } from "./Slot";
import { BeforeAfter } from "./BeforeAfter";
import { links } from "./links";

/*
  THESIS: A sales page that shows the files you get, not a SaaS page with avatars and blue buttons.
  OWN-WORLD: Near-black (#0a0a0b), warm white text, one flash-pink accent (#ff4d94), Bricolage Grotesque display, Instrument Sans body.
  STORY: A brand owner sees the real set, sees their look vs a fresh one on the slider, reads one price, pays.
  FIRST VIEWPORT: Headline left at display size, $499 button under it, three staggered ads right.
  FORM: Image-led bento with a before/after slider as the one signature piece.
*/

const strip = ["No contract on sprints", "1 revision round", "Commercial use rights", "Delivered in 5 to 7 business days"];

const tools = [
  ["Researches real customer words", "No", "No", "Yes"],
  ["3 different angles, not look-alikes", "No", "No", "Yes"],
  ["A person checks logo, label and colour", "No", "Sometimes", "Every frame"],
  ["Claims and AI-label check", "No", "No", "Yes"],
  ["Brief and test plan included", "No", "No", "Yes"],
  ["No contract on sprints", "No", "Yes", "Yes"],
] as const;

const steps = [
  ["Day 0", "You pay, then send your product link, photos, brand files and the claims you can make. The clock starts when I have everything."],
  ["Days 1 to 2", "I research what your customers say and what your competitors run. You see the 3 angles."],
  ["Days 3 to 5", "I make the set and check every frame against your real product."],
  ["Days 5 to 7", "Files, briefs and test plan arrive. You get 1 round of revisions."],
] as const;

const faq = [
  [
    "How long does it take?",
    "5 to 7 business days for the first creative sprint and 7 to 10 business days for the paid social sprint. The clock starts when I have your product link, photos, brand files and claims.",
  ],
  [
    "What do you need from me?",
    "Your product link, product photos, any brand guidelines, the claims you are allowed to make, and the competitors you want to stand apart from. One person on your side sends one list of feedback.",
  ],
  [
    "How do revisions work?",
    "Each sprint includes one consolidated revision round. You send one list of changes and I return the updated set. The monthly pipeline includes two rounds per batch. More rounds are billed.",
  ],
  [
    "Is it made with AI?",
    "Yes. AI tools make the images and video. I direct every set and check every frame against your real product, so the logo, label, colour and shape stay true. Where a platform asks for an AI label, the set tells you which assets need one.",
  ],
  [
    "Can you make videos with AI people?",
    "Yes, as an add-on. Tell me when you order. Platforms such as TikTok and Meta can ask for a label on realistic AI people, and I mark which assets need it.",
  ],
  [
    "Who can use the files?",
    "You get commercial usage rights to the final files. Editable source files are not included. Ask me if you need them.",
  ],
  [
    "What products work?",
    "Physical products with clear photos are where I start: skincare, beauty, food, accessories, home goods and gadgets. For apps and subscription offers, message me before you order.",
  ],
  [
    "Do you run my ads?",
    "No. I make the creative and a test plan. You or your media buyer runs the campaign.",
  ],
  [
    "Is the first creative sprint a trial?",
    "No. It is a full set at a one-time pilot price for brands new to Majestic Ads, one per brand. After it, the paid social sprint is $1,500.",
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
            Start your first sprint, $499
          </a>
        </div>
      </header>

      <main>
        <section className="ma-hero">
          <div className="ma-wrap ma-hero__grid">
            <div>
              <h1 className="ma-h1 ma-rise" style={{ ["--d" as string]: "0ms" }}>
                Test-ready ads for your product.
              </h1>
              <p className="ma-lede ma-rise" style={{ ["--d" as string]: "140ms" }}>
                A fresh set of Meta and TikTok ads: 6 image ads and 3 videos, each video with 3 different
                openings. New hooks, angles and formats, checked against your real product and delivered in 5 to
                7 business days.
              </p>
              <div className="ma-rise ma-cta-row" style={{ ["--d" as string]: "260ms" }}>
                <a className="ma-btn" href={links.first}>
                  Start your first creative sprint, $499 <ArrowRight size={20} weight="bold" />
                </a>
                <span className="ma-muted">Then $1,500 for a full sprint, or $3,500 a month always-on.</span>
              </div>
              <ul className="ma-strip ma-rise" style={{ ["--d" as string]: "380ms" }}>
                {strip.map((t) => (
                  <li key={t}>
                    <Check size={16} weight="bold" /> {t}
                  </li>
                ))}
              </ul>
              <p className="ma-small ma-rise" style={{ ["--d" as string]: "460ms" }}>
                Built for DTC and e-commerce brands that run paid social.
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
                <strong>A freelancer gives you one image per brief.</strong> You manage the revisions and the
                thinking behind it.
              </p>
            </div>
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap">
            <h2 className="ma-h2">Who this is for.</h2>
            <div className="ma-problems">
              <p>
                <strong>DTC and e-commerce brands</strong> spending about $10,000 to $100,000 a month on Meta or
                TikTok, who need fresh creative faster than a designer can brief it.
              </p>
              <p>
                <strong>Consumer apps and subscription brands</strong>, and beauty, wellness, apparel, food, home
                and gadget brands.
              </p>
              <p>
                <strong>Performance agencies</strong> that need overflow creative, and brands entering
                English-speaking markets.
              </p>
            </div>
            <p className="ma-small">Not set up for companies that need vendor onboarding, legal review or procurement.</p>
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap">
            <h2 className="ma-h2">One sprint. Everything you need to run a test.</h2>
            <div className="ma-bento">
              <div className="ma-cell ma-cell--a">
                <h3 className="ma-h3">6 image ads</h3>
                <p className="ma-muted">4:5 for the feed, 9:16 for Stories and Reels. 3 primary-text variations per angle.</p>
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
            <h2 className="ma-h2">Five to seven business days, four steps.</h2>
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
                <caption className="ma-sr">Majestic Ads compared with ad tools and a freelancer</caption>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Ad tools</th>
                    <th scope="col">Freelancer</th>
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
                <h3 className="ma-h3">First creative sprint</h3>
                <p className="ma-price__n">$499</p>
                <p>A one-time pilot for brands new to Majestic Ads. One per brand.</p>
                <ul>
                  <li>1 product or offer, Meta or TikTok</li>
                  <li>3 angles</li>
                  <li>6 image ads, 2 per angle</li>
                  <li>3 videos, 10 to 20 seconds, 3 openings each</li>
                  <li>3 primary-text variations per angle</li>
                  <li>3 briefs and 1 test plan</li>
                  <li>1 revision round</li>
                  <li>Delivered in 5 to 7 business days</li>
                </ul>
                <a className="ma-btn ma-btn--ink" href={links.first}>
                  Start your first sprint <ArrowRight size={20} weight="bold" />
                </a>
              </div>
              <div className="ma-price">
                <h3 className="ma-h3">Paid social sprint</h3>
                <p className="ma-price__n">$1,500</p>
                <p>The full one-off campaign package for one product or offer.</p>
                <ul>
                  <li>5 angles</li>
                  <li>10 image ads, 2 per angle</li>
                  <li>5 videos, 15 to 30 seconds, 2 openings each</li>
                  <li>4:5, 1:1 and 9:16 for Meta, 9:16 for TikTok and Reels</li>
                  <li>Captions, on-screen text and CTA variations</li>
                  <li>1 brief per angle and 1 test plan</li>
                  <li>1 consolidated revision round</li>
                  <li>Delivered in 7 to 10 business days</li>
                </ul>
                <a className="ma-btn ma-btn--ghost" href={links.single}>
                  Get a sprint
                </a>
              </div>
              <div className="ma-price">
                <h3 className="ma-h3">Always-on pipeline</h3>
                <p className="ma-price__n">
                  $3,500<span> a month</span>
                </p>
                <p>Fresh creative every month for brands that spend on paid social all the time. Cancel anytime.</p>
                <ul>
                  <li>1 planning call a month</li>
                  <li>8 to 12 concepts</li>
                  <li>16 to 24 image ads and 8 to 12 videos</li>
                  <li>New hooks, CTAs and cut-downs from what works</li>
                  <li>2 revision rounds per batch</li>
                  <li>Monthly review of the results you share</li>
                  <li>Delivered weekly or every two weeks</li>
                </ul>
                <a className="ma-btn ma-btn--ghost" href={links.monthly}>
                  Start monthly
                </a>
              </div>
            </div>
            <p className="ma-small">
              Add-ons on request: extra concepts or video versions, a new-language pass, AI avatar videos, rush
              delivery and editable source files.
            </p>
            <p className="ma-small">
              Ad tools run about $29 to $249 a month and you do the work. Freelancers charge about $150 to $500 per
              ad. Agencies start around $3,500 a month.
            </p>
          </div>
        </section>

        <section className="ma-sec">
          <div className="ma-wrap">
            <h2 className="ma-h2">What this is not.</h2>
            <p className="ma-body ma-big">
              Media buying or ad account management. Landing pages. Filming real creators. More than one product
              per sprint. Guaranteed sales or results.
            </p>
            <p className="ma-small">
              The creative is built for testing. Results depend on your offer, your targeting and how the campaign
              is run.
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
            <h2 className="ma-h1">Get your fresh set of ads.</h2>
            <div className="ma-cta-row">
              <a className="ma-btn" href={links.first}>
                Start your first creative sprint, $499 <ArrowRight size={20} weight="bold" />
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
