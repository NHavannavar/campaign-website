import React, { useState } from 'react';
import {
  Menu, X, Facebook, Instagram, ArrowRight, ArrowUpRight, Check,
  Construction, Store, ShieldCheck, Leaf, CalendarDays, MapPin, Phone,
  PiggyBank, Trees, Landmark, ScrollText, HeartHandshake,
} from 'lucide-react';

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

const LINKS = {
  donate: 'https://secure.actblue.com/donate/friendsofnaveen',
  newsletter: 'https://forms.gle/ahPFrddfny4RttRTA',
  volunteer: 'https://forms.gle/bgoQyFWVCz7F5b4A9',
  contact: 'https://www.townofpittsford.org/electedofficials/contact',
  townBoard: 'https://www.townofpittsford.org/townboard',
  town: 'https://www.townofpittsford.org',
  facebook: 'https://www.facebook.com/NaveenForPittsford',
  instagram: 'https://www.instagram.com/naveenforpittsford',
};

const NAV = [
  ['record', 'Record'],
  ['commitments', 'Commitments'],
  ['about', 'About'],
  ['get-involved', 'Get Involved'],
];

const FACTS = [
  ['Elected', 'November 2023'],
  ['Serving since', 'January 2024'],
  ['Career', '20+ years in technology at Paychex and Xerox'],
  ['At home', 'Park Road Elementary parent'],
];

// 2023 platform -> what was delivered -> what's next. Only facts from the record.
const COMMITMENTS = [
  {
    icon: ShieldCheck,
    title: 'Public safety',
    made: 'Modernize emergency alerts and improve traffic safety.',
    kept: "Promoted Monroe County's **Hyper-Reach** text and call alerts.",
    next: 'A three-part plan on speeding, a **radar speed trailer** and flashing STOP signs near schools.',
  },
  {
    icon: Store,
    title: 'Economic development',
    made: 'Support small businesses and grow the tax base.',
    kept: 'Town Code now allows **home businesses**, in-home childcare, **microbreweries** and mixed-use development on Monroe Avenue.',
    next: 'Partnerships with **developers and the Pittsford Chamber of Commerce** to ease the tax burden.',
  },
  {
    icon: Leaf,
    title: 'Environment',
    made: 'Energy efficiency and renewable energy.',
    kept: 'Expanded **residential solar**, required **green infrastructure** for parking lots and preserved green space with cluster zoning.',
    next: '**Energy-efficiency plans** for public buildings.',
  },
  {
    icon: Construction,
    title: 'Infrastructure',
    made: 'Sidewalks, road maintenance and community input on priorities.',
    kept: "Secured **$265,000** for an accessible King's Bend Park.",
    next: 'A **pothole-reporting email**, sidewalk expansion and road maintenance.',
  },
  {
    icon: Landmark,
    title: 'Open government',
    made: 'Transparent, accountable government.',
    kept: '**Online dog license renewal** and **AI safety training** for Town staff.',
    next: '**All Town Hall information online**, in documents that are easy to navigate.',
  },
];

const CREDENTIALS = [
  ['Career', [
    'Software Engineering Manager at Paychex, leading technology used by 19,000+ employees and a $4M annual budget',
    'Consolidated 13 business applications into 2, cutting costs and complexity',
    'Previously Engineering Manager at Xerox; co-founded two Rochester tech startups',
  ]],
  ['Education', ['MBA in Systems and Marketing', 'BSc in Computer Science, Mathematics and Physics', 'Leadership Rochester, 2023 cohort']],
  ['Community', [
    'Statewide Advisory Committee, Coalition for Asian American Children and Families',
    'Community Advisory Board, WXXI/Little Theatre',
    'Past Chair, India Community Center of Rochester',
  ]],
  ['Recognition', ['Rochester Business Journal Forty Under 40, 2023', 'U.S. patent holder: technology to counter misinformation']],
  ['Off the clock', ['FAA-licensed private pilot and actor']],
];

const HIGHLIGHTS = [
  ['50% → 65%', 'Senior tax relief', 'Led the increase in the senior property tax exemption, adopted unanimously in February 2026. Seniors with household incomes under $49,000 now get the higher exemption.'],
  ['$265,000', "King's Bend Park", 'Secured with Assemblymember Jen Lunsford and Senator Jeremy Cooney to make the park accessible for children and people of all ages and abilities.'],
  ['Unanimous', 'Disabled veterans', "Brought Monroe County Veterans Services' request for a property tax exemption for fully disabled veterans to the Board. Adopted October 2026."],
];

// done: true = delivered; false = proposed or still pushing for it
const RECORD = [
  {
    icon: PiggyBank,
    title: 'Tax relief',
    items: [
      [true, 'Raised the **senior property tax exemption** from 50% to 65%.'],
      [true, 'Won a **property tax exemption for fully disabled veterans**.'],
      [false, 'Partnerships with **developers and the Pittsford Chamber of Commerce** to ease the tax burden on residents.'],
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Public safety',
    items: [
      [false, 'A **three-part plan on speeding**: infrastructure, education and enforcement, including safety fixes at key intersections.'],
      [false, 'A **radar speed trailer** during peak traffic months, and flashing STOP signs near schools.'],
      [false, 'A **dedicated email for reporting potholes**, so residents can flag road problems quickly.'],
      [false, 'Wider promotion of the free **rabies clinic** and Monroe County’s **Hyper-Reach** emergency alerts.'],
    ],
  },
  {
    icon: Trees,
    title: 'Parks and accessibility',
    items: [
      [true, 'Secured **$265,000 in state funding** for an accessible King’s Bend Park.'],
      [false, '**ADA-compliant playgrounds** so children of all abilities can play safely.'],
      [false, 'A **wheelchair-accessible fishing platform**.'],
      [true, '**Park bathrooms open in winter** for families with young children and seniors.'],
    ],
  },
  {
    icon: Landmark,
    title: 'Open, accountable government',
    items: [
      [true, '**Online dog license renewal**. It’s live.'],
      [true, '**AI safety training for Town employees**, now part of the Town’s 2026 security training to protect residents’ data.'],
      [false, '**All Town Hall information online**, so you don’t have to call or visit.'],
      [false, '**Easy-to-navigate public documents** on the Town website.'],
    ],
  },
];

const TOWN_CODE = [
  'Expanded **cluster zoning** to preserve green space while managing growth',
  'Stronger **viewshed protections** for Pittsford’s scenic character',
  '**Green infrastructure** required for parking lots',
  '**Mixed commercial and residential** development on Monroe Avenue',
  'More options for **senior living and flexible housing**',
  '**Microbreweries and microdistilleries** allowed in mixed-use zones',
  '**In-home childcare and home businesses** allowed',
  'Expanded **residential solar**, on-site farm stands, dark skies and beekeeping',
  'Stronger rules on **junk storage, fences and retaining walls**',
];

// Render **bold** spans inside a plain string
function Rich({ text }) {
  return text.split(/\*\*(.+?)\*\*/).map((part, i) =>
    i % 2 ? <strong key={i} className="font-semibold text-ink">{part}</strong> : part
  );
}

function Status({ done }) {
  return done ? (
    <span className="kicker text-[0.6rem] inline-flex items-center gap-1 bg-blue text-paper px-1.5 py-0.5 rounded-sm"><Check size={11} strokeWidth={3} />Done</span>
  ) : (
    <span className="kicker text-[0.6rem] inline-flex items-center border border-line text-muted px-1.5 py-0.5 rounded-sm">Pushing for</span>
  );
}


function Section({ id, kicker, title, children, className = '' }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-5">
        <p className="kicker text-red mb-3">{kicker}</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-12 max-w-3xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function DonateButton({ className = '', children = 'Donate' }) {
  return (
    <a href={LINKS.donate} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-red text-white font-semibold px-6 py-3 rounded-sm hover:bg-red-dark transition-colors ${className}`}>
      {children}
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
        <div className="h-1.5 bg-ink"><div className="h-full w-24 bg-red" /></div>
        <nav className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="leading-none">
            <span className="block font-display text-2xl">Naveen Havannavar</span>
            <span className="kicker text-muted text-[0.65rem]">Pittsford Town Board</span>
          </a>
          <div className="flex items-center gap-7">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hidden md:block text-sm font-medium link-draw">{label}</a>
            ))}
            <DonateButton className="hidden sm:inline-flex text-sm px-5 py-2" />
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-line px-5 pb-5">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block py-3 border-b border-line font-medium">{label}</a>
            ))}
            <DonateButton className="w-full mt-5" />
          </div>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero-bg overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-[1.15fr_1fr] gap-14 items-center">
            <div>
              <p className="kicker text-red mb-5 reveal leading-relaxed" style={{ animationDelay: '0.05s' }}>
                <span className="whitespace-nowrap">Deputy Supervisor ·</span>{' '}
                <span className="whitespace-nowrap">Town Board Member</span>
                <span className="block text-muted">Pittsford, New York</span>
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-7 reveal" style={{ animationDelay: '0.15s' }}>
                Building a stronger Pittsford, <em className="font-serif italic text-blue">together.</em>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-9 reveal" style={{ animationDelay: '0.3s' }}>
                I'm a Pittsford parent, a technology leader of twenty years, and your Town Board member.
                I'm working on safer streets, sound infrastructure, a healthy local economy and a greener town.
              </p>
              <div className="flex flex-wrap gap-3 reveal" style={{ animationDelay: '0.45s' }}>
                <DonateButton className="text-base px-7 py-3.5">Support my work <ArrowRight size={18} /></DonateButton>
                <a href={LINKS.newsletter} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-ink px-7 py-3.5 rounded-sm font-semibold hover:bg-ink hover:text-paper transition-colors">
                  Get email updates
                </a>
              </div>
            </div>

            <figure className="mx-auto w-full max-w-sm md:max-w-md reveal" style={{ animationDelay: '0.25s' }}>
              <div className="relative">
                <div className="stripes absolute -right-3 -bottom-3 md:-right-6 md:-bottom-6 w-full h-full" aria-hidden="true" />
                <img src={img('town-hall.jpg')} alt="Naveen Havannavar at his seat on the Pittsford Town Board"
                  className="relative w-full aspect-[19/20] object-cover" />
              </div>
              <figcaption className="mt-6 md:mt-9 text-sm text-muted">Pittsford Town Hall, 11 S. Main Street</figcaption>
            </figure>
          </div>
        </section>

        {/* Facts ledger */}
        <section className="border-y border-line bg-[#f1ebdd]">
          <dl className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {FACTS.map(([label, value]) => (
              <div key={label} className="bg-[#f1ebdd] py-6 px-5">
                <dt className="kicker text-muted text-[0.65rem] mb-1">{label}</dt>
                <dd className="font-serif text-lg leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Record */}
        <section id="record" className="py-20 md:py-28 bg-parchment/60 border-b border-line">
          <div className="max-w-6xl mx-auto px-5">
            <p className="kicker text-red mb-3">Delivering for Pittsford</p>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">Less talk, <em className="font-serif italic text-blue whitespace-nowrap">more do.</em></h2>
            <p className="text-lg text-muted max-w-2xl mb-14">What I've delivered as Deputy Supervisor and Town Board member, and what I'm still pushing for.</p>

            {/* Headline results */}
            <div className="grid md:grid-cols-3 gap-x-10 gap-y-10 mb-20">
              {HIGHLIGHTS.map(([figure, title, body]) => (
                <article key={title} className="border-t-2 border-ink pt-5">
                  <p className="font-display text-5xl lg:text-6xl text-blue leading-none mb-4 whitespace-nowrap">{figure}</p>
                  <h3 className="font-serif font-bold text-xl mb-2">{title}</h3>
                  <p className="text-muted leading-relaxed">{body}</p>
                </article>
              ))}
            </div>

            {/* Full record by topic */}
            <div className="grid md:grid-cols-2 gap-x-14 gap-y-12 mb-16">
              {RECORD.map(({ icon: Icon, title, items }) => (
                <article key={title}>
                  <h3 className="flex items-center gap-3 font-display text-3xl border-b border-ink pb-3 mb-2">
                    <Icon className="text-blue shrink-0" size={24} strokeWidth={1.5} aria-hidden="true" />{title}
                  </h3>
                  <ul>
                    {items.map(([done, text]) => (
                      <li key={text} className="py-3 border-b border-line">
                        <div className="mb-1.5"><Status done={done} /></div>
                        <p className="text-muted leading-relaxed"><Rich text={text} /></p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Town Code */}
            <article className="bg-paper border border-line p-7 md:p-10 mb-16">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
                <h3 className="flex items-center gap-3 font-display text-3xl">
                  <ScrollText className="text-blue shrink-0" size={24} strokeWidth={1.5} aria-hidden="true" />Updating our Town Code
                </h3>
                <p className="text-sm text-muted md:max-w-sm md:text-right">With fellow Board members and the Town’s zoning team</p>
              </div>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                {TOWN_CODE.map((t) => (
                  <li key={t} className="py-3 border-t border-line text-muted leading-relaxed pl-5 relative">
                    <span className="absolute left-0 top-[1.45em] w-2 h-px bg-red" aria-hidden="true" /><Rich text={t} />
                  </li>
                ))}
              </ul>
            </article>

            {/* Community + meetings */}
            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16">
              <article>
                <h3 className="flex items-center gap-3 font-display text-3xl border-b border-ink pb-3 mb-6">
                  <HeartHandshake className="text-blue shrink-0" size={24} strokeWidth={1.5} aria-hidden="true" />Community
                </h3>
                <div className="grid sm:grid-cols-[13rem_1fr] gap-6 items-start">
                  <figure>
                    <img src={img('meeting.jpg')} alt="Naveen at an AAPI Heritage Month event at the New York State Executive Mansion"
                      className="w-full aspect-square object-cover" style={{ objectPosition: 'center 25%' }} loading="lazy" />
                    <figcaption className="mt-2 text-sm text-muted">AAPI Heritage Month at the New York State Executive Mansion</figcaption>
                  </figure>
                  <ul className="space-y-4 text-muted leading-relaxed">
                    <li><Rich text="Supporting **Pittsford students and diverse cultural voices**, from celebrating student achievements to championing cultural events." /></li>
                    <li><Rich text="Championed the Town’s recognition of **AAPI Heritage Month**." /></li>
                    <li><Rich text="Serving on the **Coalition for Asian American Children and Families** statewide advisory committee and the **WXXI/Little Theatre** advisory board." /></li>
                  </ul>
                </div>
              </article>
            <aside className="stars text-paper p-8 md:p-10 self-start">
              <p className="kicker text-paper/70 mb-3">Come to a meeting</p>
              <h3 className="font-display text-3xl mb-8">The Town Board meets in public, and you're welcome.</h3>
              <ul className="space-y-5 mb-9">
                <li className="flex gap-4"><CalendarDays className="shrink-0 mt-0.5" size={20} strokeWidth={1.5} /><span>1st and 3rd Tuesday of each month, 6:00 PM</span></li>
                <li className="flex gap-4"><MapPin className="shrink-0 mt-0.5" size={20} strokeWidth={1.5} /><span>Town Hall, Lower Level<br />11 S. Main Street, Pittsford</span></li>
                <li className="flex gap-4"><Phone className="shrink-0 mt-0.5" size={20} strokeWidth={1.5} /><a href="tel:+15852486200" className="link-draw">(585) 248-6200</a></li>
              </ul>
              <a href={LINKS.townBoard} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-paper/60 px-5 py-3 rounded-sm font-semibold hover:bg-paper hover:text-ink transition-colors">
                Minutes and agendas <ArrowUpRight size={18} />
              </a>
            </aside>
            </div>
          </div>
        </section>

        {/* Feature photo */}
        <figure className="max-w-6xl mx-auto px-5 pt-20 md:pt-28">
          <img src={img('community.jpg')} alt="Naveen shaking hands with veterans at a community event"
            className="w-full aspect-[4/3] object-cover" style={{ objectPosition: 'center 15%' }} loading="lazy" />
          <figcaption className="mt-3 text-sm text-muted">With veterans in our community</figcaption>
        </figure>

        {/* Commitments */}
        <Section id="commitments" kicker="Accountability" title={<>Made. Kept. <em className="font-serif italic text-blue whitespace-nowrap">Coming up.</em></>}>
          <p className="text-lg text-muted max-w-2xl -mt-6 mb-12">Here's where each of my 2023 commitments stands: what I promised, what I've delivered and what's next.</p>
          <div className="hidden md:grid grid-cols-[13rem_1fr_1fr_1fr] gap-8 kicker text-[0.65rem] text-muted pb-3 border-b-2 border-ink">
            <span>Commitment</span><span>Promised in 2023</span><span className="text-blue">Kept</span><span className="text-red">Coming up</span>
          </div>
          <div>
            {COMMITMENTS.map(({ icon: Icon, title, made, kept, next }) => (
              <article key={title} className="grid md:grid-cols-[13rem_1fr_1fr_1fr] gap-x-8 gap-y-3 py-7 border-b border-line first:border-t-2 first:border-t-ink md:first:border-t-0">
                <h3 className="flex items-center gap-3 font-display text-2xl leading-tight">
                  <Icon className="text-blue shrink-0" size={22} strokeWidth={1.5} aria-hidden="true" />{title}
                </h3>
                <div>
                  <p className="md:hidden kicker text-[0.6rem] text-muted mb-1">Promised in 2023</p>
                  <p className="font-serif italic text-ink/80 leading-relaxed">{made}</p>
                </div>
                <div className="md:border-l-2 md:border-blue md:pl-4">
                  <p className="md:hidden kicker text-[0.6rem] text-blue mb-1">Kept</p>
                  <p className="text-muted leading-relaxed"><Rich text={kept} /></p>
                </div>
                <div className="md:border-l-2 md:border-red md:pl-4">
                  <p className="md:hidden kicker text-[0.6rem] text-red mb-1">Coming up</p>
                  <p className="text-muted leading-relaxed"><Rich text={next} /></p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* About */}
        <Section id="about" kicker="About" title="A neighbor first.">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            <figure>
              <img src={img('residents.jpeg')} alt="Naveen with his wife Kate and their children Neel and Leela"
                className="w-full aspect-[4/5] object-cover" style={{ objectPosition: 'center 35%' }} loading="lazy" />
              <figcaption className="mt-3 text-sm text-muted">With Kate, Neel and Leela</figcaption>
            </figure>
            <div>
              <div className="space-y-5 text-lg leading-relaxed">
                <p>
                  I'm honored to serve on the Pittsford Town Board. My wife Kate and I have lived here for years, and our
                  two children, Neel and Leela, attend Park Road Elementary. I care about this town's future because my family lives it every day.
                </p>
                <p>
                  I've spent more than two decades as a technology manager, and I bring that problem-solving approach to the
                  town's challenges. I believe in community engagement and in government that is transparent and accountable.
                </p>
              </div>
              <blockquote className="font-serif italic text-2xl leading-snug border-l-2 border-red pl-6 my-10">
                “My family and community are at the center of my life, and I'm committed to being a positive and productive member of both.”
              </blockquote>
              <dl className="divide-y divide-line border-y border-line">
                {CREDENTIALS.map(([label, items]) => (
                  <div key={label} className="grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 py-4">
                    <dt className="kicker text-muted text-[0.65rem] pt-1">{label}</dt>
                    <dd className="space-y-1">{items.map((it) => <p key={it}>{it}</p>)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        {/* Get involved */}
        <section id="get-involved" className="stars text-paper py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <p className="kicker text-paper/70 mb-3">Get involved</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mb-14">
              Pittsford works best when more of us <em className="font-serif italic">show up.</em>
            </h2>
            <div className="grid md:grid-cols-3 gap-px bg-paper/20 border border-paper/20">
              <div className="bg-ink p-8 flex flex-col">
                <h3 className="font-serif font-bold text-2xl mb-3">Donate</h3>
                <p className="text-paper/75 mb-8 flex-1">Every contribution helps me reach more neighbors and stay in touch with the community.</p>
                <DonateButton className="self-start">Donate on ActBlue <ArrowUpRight size={18} /></DonateButton>
              </div>
              <div className="bg-ink p-8 flex flex-col">
                <h3 className="font-serif font-bold text-2xl mb-3">Volunteer</h3>
                <p className="text-paper/75 mb-8 flex-1">Knock doors, host a lawn sign, or help at an event. Tell me how you'd like to pitch in.</p>
                <a href={LINKS.volunteer} target="_blank" rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 border border-paper/60 px-6 py-3 rounded-sm font-semibold hover:bg-paper hover:text-ink transition-colors">
                  Sign up to help <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="bg-ink p-8 flex flex-col">
                <h3 className="font-serif font-bold text-2xl mb-3">Stay in the loop</h3>
                <p className="text-paper/75 mb-8 flex-1">Occasional email updates on Town Board decisions and what's coming up.</p>
                <a href={LINKS.newsletter} target="_blank" rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 border border-paper/60 px-6 py-3 rounded-sm font-semibold hover:bg-paper hover:text-ink transition-colors">
                  Get email updates <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-paper/80">
              <a href={LINKS.contact} target="_blank" rel="noopener noreferrer" className="link-draw self-start">Have a question? Contact me through the Town →</a>
              <div className="flex items-center gap-5">
                <span className="kicker text-paper/60 text-[0.65rem]">Follow</span>
                <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white"><Facebook size={22} strokeWidth={1.5} /></a>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white"><Instagram size={22} strokeWidth={1.5} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-paper">
        <div className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <p className="font-display text-2xl mb-4">Naveen Havannavar</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <li><a href={LINKS.town} target="_blank" rel="noopener noreferrer" className="link-draw">Town of Pittsford</a></li>
              <li><a href={LINKS.townBoard} target="_blank" rel="noopener noreferrer" className="link-draw">Town Board</a></li>
              <li><a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="link-draw">Facebook</a></li>
              <li><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="link-draw">Instagram</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="border border-ink px-4 py-2 inline-block mb-2">Paid for by Friends of Naveen Havannavar for Pittsford</p>
            <p className="text-muted">© {year} Naveen Havannavar</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
