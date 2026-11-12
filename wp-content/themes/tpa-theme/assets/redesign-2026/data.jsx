// Shared data for all 3 directions.
// If WordPress injected window.WP_ADVISORS, prefer it (so rankings come from the advisor CPT).
const ADVISORS = (Array.isArray(window.WP_ADVISORS) && window.WP_ADVISORS.length) ? window.WP_ADVISORS : [
  { rank: 1, name: 'Kasamba',           score: 4.8, price: '$1.99/min', trial: '3 free min',  methods: ['Chat','Phone','Email'], specs: ['Love','Career','Tarot'],   tag: 'Editor’s pick', verdict: 'The benchmark. 20+ years, the deepest love & career bench, satisfaction guaranteed.', hue: 'purple', kind: 'star' },
  { rank: 2, name: 'Keen',              score: 4.7, price: '$1.99/min', trial: '$1 for 5 min',methods: ['Chat','Phone'],         specs: ['Love','Astrology','Tarot'],tag: 'Best filters', verdict: 'Huge vetted network and the best filtering tools — find a reader for any budget in minutes.', hue: 'aqua',   kind: 'eye' },
  { rank: 3, name: 'Purple Garden',     score: 4.6, price: '$0.99/min', trial: '$10 credit',  methods: ['Chat','Video','Phone'], specs: ['Love','Tarot','Medium'],   tag: 'Best app',     verdict: 'App-first, transparent pricing, and the only top-3 platform with native video readings.', hue: 'pink',   kind: 'moon' },
  { rank: 4, name: 'California Psychics',score: 4.5,price: '$1/min',    trial: 'Intro pack',  methods: ['Phone','Chat'],         specs: ['Love','Career'],            tag: 'Premium phone',verdict: 'Rigorous screening, consistently accurate love and career readings — phone-first feel.', hue: 'orange', kind: 'sun' },
  { rank: 5, name: 'Psychic Source',    score: 4.4, price: '$1/min',    trial: '3 min free',  methods: ['Chat','Phone','Video'], specs: ['Love'],                     tag: 'Most reviewed',verdict: '270K+ five-star reviews and a satisfaction guarantee — strongest love-reading specialists.', hue: 'emerald',kind: 'triangle' },
  { rank: 6, name: 'Oranum',            score: 4.3, price: 'Free preview', trial: '9.99 credit', methods: ['Video','Chat'],     specs: ['Love','Tarot','Medium'],   tag: 'Free streams', verdict: 'Free live video lobbies — preview readers in real time before you spend a single coin.', hue: 'cobalt', kind: 'hand' },
];

const SPECIALTIES = ['All', 'Love & Relationships', 'Career & Work', 'Money & Finance', 'Destiny & Life Path'];
const SPEC_MAP = {
  'All': null,
  'Love & Relationships': 'Love',
  'Career & Work': 'Career',
  'Money & Finance': 'Money',
  'Destiny & Life Path': 'Destiny',
};

const FAQS = [
  { q: 'How are psychic advisors selected and ranked?',
    a: 'We catalog every major platform, conduct real test readings across love, career, money and destiny categories, and combine expert assessments with verified user reviews. Composite scores are recalculated monthly.' },
  { q: 'Who is the best love psychic advisor right now?',
    a: 'Based on our latest testing cycle, Kasamba and Psychic Source consistently score highest for love and relationship readings, with deep specialist benches in this category.' },
  { q: 'Are the rankings updated regularly?',
    a: 'Yes. All rankings refresh monthly with new test readings, fresh user-review data and any platform pricing or policy changes.' },
  { q: 'Can I trust these reviews are independent?',
    a: 'Absolutely. We accept zero sponsorships, paid placements or affiliate prioritization. Editorial decisions are walled off from any commercial relationship.' },
  { q: 'What should I look for in a psychic advisor?',
    a: 'Verified reviews, transparent per-minute pricing, a money-back satisfaction guarantee, and clear specialization in your area of interest. Our comparison table surfaces these signals at a glance.' },
];

window.ADVISORS = ADVISORS;
window.SPECIALTIES = SPECIALTIES;
window.SPEC_MAP = SPEC_MAP;
window.FAQS = FAQS;
