import React, { useState } from 'react';
import {
  Menu, X, Facebook, Instagram, ArrowRight, ArrowUpRight, Check,
  Construction, Store, ShieldCheck, Leaf, CalendarDays, MapPin, Phone,
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
  ['about', 'About'],
  ['priorities', 'Priorities'],
  ['town-board', 'Town Board'],
  ['get-involved', 'Get Involved'],
];

const FACTS = [
  ['Elected', 'November 2023'],
  ['Serving since', 'January 2024'],
  ['Career', '20+ years in technology at Paychex and Xerox'],
  ['At home', 'Park Road Elementary parent'],
];

const PRIORITIES = [
  {
    icon: Construction,
    title: 'Infrastructure',
    points: [
      'Plan for long-term needs, including sidewalk expansion and road maintenance.',
      'Bring community groups into setting infrastructure priorities.',
    ],
  },
  {
    icon: Store,
    title: 'Economic development',
    points: [
      'Support local small businesses and entrepreneurs to grow the tax base.',
      'Attract new businesses by promoting what makes Pittsford strong.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Public safety',
    points: [
      'Update emergency management plans with modern tools like text alerts.',
      'Improve traffic safety through enforcement and calming measures.',
      'Offer community education on safety topics.',
    ],
  },
  {
    icon: Leaf,
    title: 'Environment',
    points: [
      'Push for energy-efficiency plans in public buildings.',
      'Help residents use renewable-energy incentives.',
      'Work with stakeholders so plans include everyone.',
    ],
  },
];

const CREDENTIALS = [
  ['Career', ['20+ years in technology leadership at Paychex and Xerox']],
  ['Education', ['BSc in Mathematics, Physics and Computer Science', 'MBA in Marketing and Systems', 'Leadership Rochester alumnus']],
  ['Community', ['Outreach Liaison, India Community Center', 'Advisory Board, WXXI Little Theatre', 'AAPI Heritage advocate']],
  ['Recognition', ['Rochester Business Journal Forty Under 40, 2023']],
  ['Off the clock', ['Actor and certified pilot']],
];

const ACCOMPLISHMENTS = [
  ['Emergency notifications', "Promoted Monroe County's Hyper-Reach alert system so residents get emergency texts and calls."],
  ['AAPI Heritage Month', 'Championed the town’s recognition of Asian American and Pacific Islander Heritage Month.'],
  ['Roads and potholes', 'Pressing for repairs and longer-term road improvements across town.'],
];

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
              <p className="kicker text-red mb-5 reveal" style={{ animationDelay: '0.05s' }}>Town Board Member · Pittsford, New York</p>
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
                  className="relative w-full aspect-[4/5] object-cover" style={{ objectPosition: 'center 45%' }} />
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

        {/* Priorities */}
        <Section id="priorities" kicker="Priorities" title="What I'm working on for Pittsford">
          <div className="grid md:grid-cols-2 gap-x-14">
            {PRIORITIES.map(({ icon: Icon, title, points }, i) => (
              <article key={title} className="border-t-2 border-ink pt-6 pb-12">
                <div className="flex items-baseline justify-between mb-5">
                  <h3 className="font-display text-3xl">
                    <span className="font-serif italic text-red text-xl mr-3 align-middle">0{i + 1}</span>{title}
                  </h3>
                  <Icon className="text-blue shrink-0" size={26} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <ul className="space-y-3 text-muted leading-relaxed">
                  {points.map((p) => (
                    <li key={p} className="pl-5 relative">
                      <span className="absolute left-0 top-[0.7em] w-2 h-px bg-red" aria-hidden="true" />{p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Wide photo band */}
        <figure className="relative">
          <img src={img('community.jpg')} alt="Naveen greeting veterans at a community event"
            className="w-full h-[52vh] min-h-[320px] max-h-[560px] object-cover" style={{ objectPosition: 'center 30%' }} loading="lazy" />
          <figcaption className="absolute left-0 bottom-0 bg-ink text-paper text-sm px-5 py-3 md:left-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]">
            With veterans in our community
          </figcaption>
        </figure>

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

        {/* Town Board work */}
        <Section id="town-board" kicker="On the Town Board" title="Recent work" className="bg-parchment/60 border-y border-line">
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16">
            <div>
              <ol className="border-t border-line">
                {ACCOMPLISHMENTS.map(([title, body]) => (
                  <li key={title} className="flex gap-5 py-6 border-b border-line">
                    <span className="mt-1 w-7 h-7 shrink-0 rounded-full border border-blue text-blue flex items-center justify-center"><Check size={15} /></span>
                    <div>
                      <h3 className="font-serif font-bold text-xl mb-1">{title}</h3>
                      <p className="text-muted leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <figure className="mt-10 grid sm:grid-cols-[14rem_1fr] gap-5 items-end">
                <img src={img('meeting.jpg')} alt="Naveen at an AAPI Heritage Month event at the New York State Executive Mansion"
                  className="w-full aspect-square object-cover" style={{ objectPosition: 'center 25%' }} loading="lazy" />
                <figcaption className="text-sm text-muted">AAPI Heritage Month celebration at the New York State Executive Mansion</figcaption>
              </figure>
            </div>

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
