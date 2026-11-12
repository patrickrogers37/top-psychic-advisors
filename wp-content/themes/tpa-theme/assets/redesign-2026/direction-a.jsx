// Direction A — Editorial Mystical
// Trust-first editorial. Subtle constellation hero. Tarot-card stack rankings.
// Uses Crest, ADVISORS, SPECIALTIES, SPEC_MAP, FAQS.

const { useState, useEffect, useMemo, useRef } = React;

function StarField({ density = 60 }) {
  const stars = useMemo(() => Array.from({length: density}).map(() => ({
    x: Math.random()*100, y: Math.random()*100,
    s: Math.random()*1.6 + 0.4,
    d: Math.random()*4 + 2,
    l: Math.random()*4,
    p: Math.random()*0.6 + 0.3,
  })), [density]);
  return (
    <div className="starfield">
      {stars.map((s, i) => (
        <span key={i} className="star" style={{
          left: s.x+'%', top: s.y+'%',
          width: s.s+'px', height: s.s+'px',
          '--dur': s.d+'s', '--delay': s.l+'s', '--peak': s.p,
        }} />
      ))}
    </div>
  );
}

function Constellation() {
  // Simple deterministic constellation lines for hero atmosphere
  const points = [[12,30],[22,18],[34,28],[44,16],[56,32],[68,22],[80,34],[88,24]];
  return (
    <svg viewBox="0 0 100 60" preserveAspectRatio="none" style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', opacity:.4}}>
      <polyline points={points.map(p=>p.join(',')).join(' ')}
        fill="none" stroke="url(#cgrad)" strokeWidth=".15" strokeDasharray=".4 .6"/>
      <defs>
        <linearGradient id="cgrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8e8cf0" stopOpacity="0"/>
          <stop offset="50%" stopColor="#8e8cf0" stopOpacity="1"/>
          <stop offset="100%" stopColor="#f2994a" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {points.map((p,i)=>(
        <circle key={i} cx={p[0]} cy={p[1]} r=".6" fill="#a5a3f3"/>
      ))}
    </svg>
  );
}

function ScoreReveal({ value, max=5 }) {
  const ref = useRef(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setW((value/max)*100); io.disconnect(); }
    }, {threshold: 0.4});
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="score-bar" style={{width: 100}}>
      <span style={{'--w': w+'%', width: w+'%'}} />
    </div>
  );
}

function Stars({ score }) {
  const full = Math.floor(score);
  const half = score - full >= 0.5;
  return (
    <span className="stars">
      {Array.from({length:5}).map((_,i)=>(
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i<full ? 'currentColor' : (i===full && half ? 'url(#half)' : 'none')} stroke="currentColor" strokeWidth="1.5">
          {i===0 && <defs><linearGradient id="half"><stop offset="50%" stopColor="#f2994a"/><stop offset="50%" stopColor="transparent"/></linearGradient></defs>}
          <path d="M12 2l2.9 7h7.1l-5.7 4.4 2.2 7-6.5-4.6-6.5 4.6 2.2-7L2 9h7.1z"/>
        </svg>
      ))}
    </span>
  );
}

function NavA() {
  return (
    <header style={{
      position:'sticky', top:0, zIndex:50,
      background:'rgba(20,19,51,0.7)', backdropFilter:'blur(14px) saturate(140%)',
      borderBottom:'1px solid var(--lilac-09)',
    }}>
      <div style={{maxWidth:1240, margin:'0 auto', padding:'18px 32px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <a href="#" style={{display:'flex', alignItems:'center', gap:10, color:'var(--gray-01)', textDecoration:'none'}}>
          <svg width="28" height="28" viewBox="0 0 32 32">
            <defs><radialGradient id="logoA" cx="50%" cy="65%" r="50%">
              <stop offset="14%" stopColor="#5CCEFF"/><stop offset="52%" stopColor="#6378FD"/><stop offset="84%" stopColor="#553EFF"/><stop offset="97%" stopColor="#462DFF"/>
            </radialGradient></defs>
            <path d="M16 2 L19 13 L30 16 L19 19 L16 30 L13 19 L2 16 L13 13 Z" fill="url(#logoA)"/>
          </svg>
          <span style={{fontFamily:'var(--font-family-heading)', fontSize:18, letterSpacing:-.2}}>Top Psychic Advisors</span>
        </a>
        <nav style={{display:'flex', gap:28, fontSize:14, color:'var(--text-subtle)'}}>
          <a href="#rankings" style={{color:'inherit'}}>Top Advisors</a>
          <a href="#" style={{color:'inherit'}}>Love</a>
          <a href="#" style={{color:'inherit'}}>Career</a>
          <a href="#" style={{color:'inherit'}}>Destiny</a>
          <a href="#" style={{color:'inherit'}}>Money</a>
          <a href="#" style={{color:'inherit'}}>Blog</a>
        </nav>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <span className="tag tag--accent">Updated April 2026</span>
        </div>
      </div>
    </header>
  );
}

function HeroA() {
  return (
    <section style={{position:'relative', padding:'120px 32px 100px', overflow:'hidden'}}>
      <StarField density={80}/>
      <Constellation/>
      <div className="aurora"/>
      <div style={{position:'relative', maxWidth:1240, margin:'0 auto', display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:80, alignItems:'center'}}>
        <div>
          <div style={{display:'flex', gap:10, marginBottom:24}}>
            <span className="tag tag--accent">No paid placements</span>
            <span className="tag">270K+ user reviews verified</span>
          </div>
          <h1 style={{fontSize:72, lineHeight:1.05, letterSpacing:-1.5, margin:'0 0 24px'}}>
            The truth about<br/>
            <em style={{fontStyle:'italic', color:'var(--purple-04)', fontFamily:'var(--font-family-heading)'}}>psychic advisors,</em><br/>
            written for skeptics.
          </h1>
          <p style={{fontSize:20, color:'var(--text-subtle)', maxWidth:520, margin:'0 0 36px', lineHeight:1.55}}>
            Six platforms, real test readings, monthly score recalculations.
            Independent reviews ranked by users who actually paid for the call.
          </p>
          <div style={{display:'flex', gap:14}}>
            <a href="#rankings" className="btn btn--primary">Meet the top advisors →</a>
            <a href="#methodology" className="btn btn--ghost">How we rank</a>
          </div>
          <div style={{marginTop:48, display:'flex', gap:32, color:'var(--text-subtlest)', fontSize:13}}>
            <div><strong style={{color:'var(--gray-01)', fontSize:24, display:'block', fontFamily:'var(--font-family-heading)'}}>120+</strong>test readings</div>
            <div><strong style={{color:'var(--gray-01)', fontSize:24, display:'block', fontFamily:'var(--font-family-heading)'}}>6</strong>platforms vetted</div>
            <div><strong style={{color:'var(--gray-01)', fontSize:24, display:'block', fontFamily:'var(--font-family-heading)'}}>0</strong>sponsored slots</div>
          </div>
        </div>
        <div style={{position:'relative'}}>
          <PodiumA/>
        </div>
      </div>
    </section>
  );
}

function PodiumA() {
  // 3 stacked tarot-style cards — #1 prominent, #2/#3 fanned behind
  const top3 = ADVISORS.slice(0,3);
  return (
    <div style={{position:'relative', height:520}}>
      {top3.map((a, i) => {
        const offsets = [
          {transform:'translate(0,0) rotate(0deg)', z:3, scale:1},
          {transform:'translate(-100px,30px) rotate(-8deg)', z:2, scale:.88},
          {transform:'translate(120px,50px) rotate(8deg)', z:1, scale:.82},
        ][i];
        return (
          <div key={a.name} style={{
            position:'absolute', top:0, left:'50%', marginLeft:-130, width:260,
            transform: offsets.transform + ` scale(${offsets.scale})`,
            zIndex: offsets.z,
            transition: 'all .5s cubic-bezier(.2,.7,.3,1)',
          }}>
            <div className="tarot" style={{
              background: i===0
                ? 'linear-gradient(160deg,#26225a,#3a237a 60%,#5e6ffd)'
                : 'linear-gradient(160deg,#1a1840,#2a2570)',
              boxShadow: i===0 ? '0 30px 80px rgba(94,111,253,.4), 0 0 0 1px var(--purple-07)' : '0 12px 40px rgba(0,0,0,.4)',
            }}>
              <div style={{position:'absolute', inset:0, padding:'24px 20px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-family-heading)', fontSize:13, letterSpacing:2, color:'var(--purple-04)', textTransform:'uppercase'}}>№ {a.rank}</div>
                <div style={{flex:1, display:'grid', placeItems:'center', margin:'12px 0'}}>
                  <Crest kind={a.kind} hue={a.hue} size={120}/>
                </div>
                <div style={{fontFamily:'var(--font-family-heading)', fontSize:22, marginBottom:6}}>{a.name}</div>
                <Stars score={a.score}/>
                <div style={{fontSize:28, fontFamily:'var(--font-family-heading)', marginTop:6, color:'var(--orange-04)'}}>{a.score}</div>
                <div style={{fontSize:11, letterSpacing:1.5, color:'var(--purple-04)', marginTop:8, textTransform:'uppercase'}}>{a.tag}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FilterBar({ specialty, setSpecialty, sort, setSort }) {
  return (
    <div style={{
      display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between',
      gap:16, marginBottom:32,
      padding:'14px 20px', borderRadius: 'var(--radius-300)',
      background:'var(--bg-surface-primary)', border:'1px solid var(--lilac-09)',
    }}>
      <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
        {SPECIALTIES.map(s => (
          <button key={s} onClick={()=>setSpecialty(s)} className="tag" style={{
            cursor:'pointer',
            background: specialty===s ? 'var(--violet-alpha-30)' : 'var(--white-alpha-05)',
            borderColor: specialty===s ? 'var(--purple-05)' : 'var(--lilac-07)',
            color: specialty===s ? 'var(--gray-01)' : 'var(--text-subtle)',
          }}>{s}</button>
        ))}
      </div>
      <div style={{display:'flex', alignItems:'center', gap:10, fontSize:13, color:'var(--text-subtle)'}}>
        Sort by
        <select value={sort} onChange={e=>setSort(e.target.value)} style={{
          background:'var(--lilac-10)', color:'var(--gray-01)',
          border:'1px solid var(--lilac-07)', borderRadius:'var(--radius-150)',
          padding:'6px 10px', fontSize:13, fontFamily:'inherit',
        }}>
          <option value="score">Score (high → low)</option>
          <option value="price">Price (low → high)</option>
          <option value="trial">Free trial generosity</option>
        </select>
      </div>
    </div>
  );
}

function RankingsA() {
  const [specialty, setSpecialty] = useState('All');
  const [sort, setSort] = useState('score');
  const [expanded, setExpanded] = useState(null);

  const list = useMemo(() => {
    const k = SPEC_MAP[specialty];
    let l = ADVISORS.filter(a => !k || a.specs.includes(k));
    if (sort==='score') l = [...l].sort((a,b)=>b.score-a.score);
    if (sort==='price') l = [...l].sort((a,b)=>parseFloat(a.price.replace(/[^0-9.]/g,'')||99) - parseFloat(b.price.replace(/[^0-9.]/g,'')||99));
    if (sort==='trial') l = [...l].sort((a,b)=>(b.trial.length-a.trial.length));
    return l;
  }, [specialty, sort]);

  return (
    <section id="rankings" style={{padding:'100px 32px', position:'relative'}}>
      <div style={{maxWidth:1240, margin:'0 auto'}}>
        <SectionHead eyebrow="Top picks" title={<>Our highest-rated <em style={{fontStyle:'italic', color:'var(--purple-04)'}}>advisors</em></>}
          sub="Expert-tested and user-verified ratings you can trust. Hover any row for the verdict."/>
        <FilterBar specialty={specialty} setSpecialty={setSpecialty} sort={sort} setSort={setSort}/>
        <div style={{display:'flex', flexDirection:'column', gap:14}}>
          {list.map((a, i) => (
            <RankRow key={a.name} a={a} i={i} expanded={expanded===a.name} onClick={()=>setExpanded(expanded===a.name?null:a.name)}/>
          ))}
        </div>
      </div>
    </section>
  );
}

function RankRow({ a, i, expanded, onClick }) {
  return (
    <div className="lift" onClick={onClick} style={{
      background:'var(--bg-surface-primary)',
      border:'1px solid var(--lilac-09)',
      borderRadius:'var(--radius-300)',
      padding:'20px 24px',
      cursor:'pointer',
      display:'grid',
      gridTemplateColumns:'48px 88px 1.4fr 1fr 1fr auto',
      gap:24, alignItems:'center',
    }}>
      <div style={{fontFamily:'var(--font-family-heading)', fontSize:32, color: i<3 ? 'var(--orange-04)' : 'var(--purple-04)', textAlign:'center', lineHeight:1}}>
        {a.rank}
      </div>
      <div className="crest" style={{width:72, height:72, background: a.hue==='purple' ? 'var(--gradient-amethyst)' : a.hue==='orange' ? 'var(--gradient-orchid)' : 'var(--gradient-indigo)'}}>
        <Crest kind={a.kind} hue={a.hue} size={56}/>
      </div>
      <div>
        <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:4}}>
          <h3 style={{fontSize:24, margin:0}}>{a.name}</h3>
          <span className="tag tag--orange">{a.tag}</span>
        </div>
        <div style={{display:'flex', gap:6, flexWrap:'wrap', marginTop:6}}>
          {a.specs.map(s => <span key={s} className="tag" style={{fontSize:11}}>{s}</span>)}
        </div>
        {expanded && (
          <p style={{margin:'14px 0 0', color:'var(--text-subtle)', fontSize:14, lineHeight:1.55, maxWidth:540}}>
            {a.verdict}
          </p>
        )}
      </div>
      <div>
        <div style={{fontSize:11, color:'var(--text-subtlest)', textTransform:'uppercase', letterSpacing:1.2, marginBottom:6}}>Score</div>
        <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:4}}>
          <span style={{fontFamily:'var(--font-family-heading)', fontSize:28, color:'var(--gray-01)'}}>{a.score}</span>
          <Stars score={a.score}/>
        </div>
        <ScoreReveal value={a.score}/>
      </div>
      <div style={{display:'flex', flexDirection:'column', gap:6}}>
        <div style={{fontSize:11, color:'var(--text-subtlest)', textTransform:'uppercase', letterSpacing:1.2}}>From</div>
        <div style={{fontFamily:'var(--font-family-heading)', fontSize:18}}>{a.price}</div>
        <div style={{fontSize:12, color:'var(--purple-04)'}}>{a.trial}</div>
      </div>
      <div style={{display:'flex', flexDirection:'column', gap:8}}>
        <button className="btn btn--primary" style={{padding:'10px 18px', fontSize:13}}>Read review →</button>
        <button className="btn btn--ghost" style={{padding:'10px 18px', fontSize:13}}>Visit site</button>
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div style={{textAlign:'center', marginBottom:48}}>
      <div style={{display:'inline-flex', alignItems:'center', gap:8, color:'var(--purple-04)', fontSize:12, letterSpacing:2, textTransform:'uppercase', marginBottom:14}}>
        <span style={{width:24, height:1, background:'var(--purple-05)'}}/>
        {eyebrow}
        <span style={{width:24, height:1, background:'var(--purple-05)'}}/>
      </div>
      <h2 style={{fontSize:48, margin:'0 0 14px', letterSpacing:-1}}>{title}</h2>
      {sub && <p style={{maxWidth:600, margin:'0 auto', color:'var(--text-subtle)', fontSize:18}}>{sub}</p>}
    </div>
  );
}

function CompareTable() {
  const cols = ADVISORS.slice(0,3);
  const rows = [
    {label:'Our score',     get:a => <strong style={{fontSize:18, color:'var(--orange-04)'}}>{a.score}/5</strong>},
    {label:'Starting price',get:a => a.price},
    {label:'Free trial',    get:a => <span style={{color:'var(--purple-04)'}}>{a.trial}</span>},
    {label:'Reading methods', get:a => a.methods.join(', ')},
    {label:'Specialties',   get:a => a.specs.join(', ')},
    {label:'Satisfaction guarantee', get:_ => '✓'},
    {label:'Mobile app',    get:_ => '✓'},
    {label:'Video readings',get:a => a.methods.includes('Video') ? '✓' : '—'},
  ];
  const [hover, setHover] = useState(null);
  return (
    <section style={{padding:'80px 32px'}}>
      <div style={{maxWidth:1100, margin:'0 auto'}}>
        <SectionHead eyebrow="Side-by-side" title={<>Platform <em style={{fontStyle:'italic', color:'var(--purple-04)'}}>comparison</em></>} sub="How the top 3 platforms stack up."/>
        <div style={{
          background:'var(--bg-surface-primary)',
          border:'1px solid var(--lilac-09)',
          borderRadius:'var(--radius-400)',
          overflow:'hidden',
        }}>
          <div style={{display:'grid', gridTemplateColumns:'1.1fr repeat(3, 1fr)', borderBottom:'1px solid var(--lilac-09)'}}>
            <div style={{padding:24}}/>
            {cols.map((a) => (
              <div key={a.name} style={{padding:24, borderLeft:'1px solid var(--lilac-09)', textAlign:'center'}}>
                <div className="crest" style={{margin:'0 auto 12px', width:56, height:56}}>
                  <Crest kind={a.kind} hue={a.hue} size={42}/>
                </div>
                <div style={{fontFamily:'var(--font-family-heading)', fontSize:20}}>{a.name}</div>
                <div style={{fontSize:12, color:'var(--purple-04)', textTransform:'uppercase', letterSpacing:1.5, marginTop:4}}>№ {a.rank}</div>
              </div>
            ))}
          </div>
          {rows.map((r, i) => (
            <div key={r.label}
              onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
              style={{
                display:'grid', gridTemplateColumns:'1.1fr repeat(3, 1fr)',
                borderBottom: i===rows.length-1 ? 'none' : '1px solid var(--lilac-09)',
                background: hover===i ? 'var(--violet-alpha-10)' : 'transparent',
                transition:'background .15s',
              }}>
              <div style={{padding:'18px 24px', color:'var(--text-subtle)', fontSize:14}}>{r.label}</div>
              {cols.map((a) => (
                <div key={a.name} style={{padding:'18px 24px', borderLeft:'1px solid var(--lilac-09)', textAlign:'center', fontSize:15}}>
                  {r.get(a)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodologyA() {
  const steps = [
    {n:'01', t:'Research',  d:'We catalog every major psychic platform and advisor network operating in North America and the EU.'},
    {n:'02', t:'Test',      d:'Our team conducts paid, real-world readings across love, career, money and destiny categories.'},
    {n:'03', t:'Score',     d:'Expert assessments combine with verified user reviews into a single composite, normalized monthly.'},
    {n:'04', t:'Publish',   d:'Rankings refresh on the first of each month with full transparency about methodology changes.'},
  ];
  return (
    <section id="methodology" style={{padding:'120px 32px', background:'var(--bg-surface-primary)', position:'relative', overflow:'hidden'}}>
      <StarField density={30}/>
      <div style={{maxWidth:1100, margin:'0 auto', position:'relative'}}>
        <div style={{textAlign:'center', marginBottom:60}}>
          <div style={{color:'var(--purple-04)', fontSize:12, letterSpacing:2, textTransform:'uppercase', marginBottom:16}}>The Editorial Process</div>
          <h2 style={{fontSize:56, margin:'0 0 20px', letterSpacing:-1.2, lineHeight:1.05}}>
            We tested every platform.<br/>
            <em style={{fontStyle:'italic', color:'var(--purple-04)'}}>So you don’t have to.</em>
          </h2>
          <p style={{maxWidth:640, margin:'0 auto', color:'var(--text-subtle)', fontSize:18}}>
            Our methodology is public, our funding is editorial, and our scores recalculate monthly.
            No vanity metrics, no affiliate prioritization, no exceptions.
          </p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:24}}>
          {steps.map((s) => (
            <div key={s.n} style={{
              padding:32, borderRadius:'var(--radius-300)',
              background:'var(--lilac-10)', border:'1px solid var(--lilac-09)',
              position:'relative', overflow:'hidden',
            }}>
              <div style={{fontFamily:'var(--font-family-heading)', fontSize:48, color:'var(--purple-07)', lineHeight:1, marginBottom:16}}>{s.n}</div>
              <h3 style={{fontSize:22, margin:'0 0 10px'}}>{s.t}</h3>
              <p style={{margin:0, color:'var(--text-subtle)', fontSize:14, lineHeight:1.6}}>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:16, marginTop:48, padding:32, borderRadius:'var(--radius-300)', background:'var(--lilac-11)', border:'1px solid var(--lilac-09)'}}>
          {[
            {k:'Real readings',   v:'120+'},
            {k:'User reviews',    v:'270K+'},
            {k:'Update cadence',  v:'Monthly'},
            {k:'Sponsored slots', v:'0'},
            {k:'Years in market', v:'20+'},
          ].map(s => (
            <div key={s.k} style={{textAlign:'center', borderRight:'1px solid var(--lilac-09)', padding:'8px 0'}}>
              <div style={{fontFamily:'var(--font-family-heading)', fontSize:32, color:'var(--gray-01)'}}>{s.v}</div>
              <div style={{fontSize:12, color:'var(--text-subtlest)', textTransform:'uppercase', letterSpacing:1.5, marginTop:6}}>{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{padding:'100px 32px'}}>
      <div style={{maxWidth:840, margin:'0 auto'}}>
        <SectionHead eyebrow="FAQ" title="Frequently asked"/>
        <div style={{display:'flex', flexDirection:'column', gap:10}}>
          {FAQS.map((f, i) => (
            <div key={i} style={{
              borderRadius:'var(--radius-300)',
              border:'1px solid var(--lilac-09)',
              background: open===i ? 'var(--bg-surface-primary)' : 'transparent',
              overflow:'hidden',
              transition:'background .2s',
            }}>
              <button onClick={()=>setOpen(open===i?-1:i)} style={{
                width:'100%', textAlign:'left',
                padding:'22px 26px', background:'transparent', border:'none',
                display:'flex', justifyContent:'space-between', alignItems:'center',
                color:'var(--gray-01)', fontFamily:'inherit', fontSize:18, fontWeight:500, cursor:'pointer',
              }}>
                {f.q}
                <span style={{
                  display:'inline-block', width:24, height:24, lineHeight:'22px',
                  textAlign:'center', borderRadius:12,
                  background: open===i ? 'var(--purple-05)' : 'var(--lilac-09)',
                  color: open===i ? 'var(--lilac-11)' : 'var(--purple-04)',
                  transition:'all .2s',
                  transform: open===i ? 'rotate(45deg)' : 'none',
                }}>+</span>
              </button>
              {open===i && (
                <div style={{padding:'0 26px 24px', color:'var(--text-subtle)', fontSize:15, lineHeight:1.6}}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterA() {
  return (
    <footer style={{padding:'80px 32px 40px', borderTop:'1px solid var(--lilac-09)', background:'var(--lilac-12)'}}>
      <div style={{maxWidth:1240, margin:'0 auto', display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48}}>
        <div>
          <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:14}}>
            <svg width="24" height="24" viewBox="0 0 32 32"><path d="M16 2 L19 13 L30 16 L19 19 L16 30 L13 19 L2 16 L13 13 Z" fill="var(--purple-05)"/></svg>
            <span style={{fontFamily:'var(--font-family-heading)', fontSize:16}}>Top Psychic Advisors</span>
          </div>
          <p style={{color:'var(--text-subtlest)', fontSize:13, lineHeight:1.6, maxWidth:340}}>
            Independent psychic advisor reviews and ratings. Ranked by real users, verified by experts. No sponsored placements, ever.
          </p>
        </div>
        {[
          {h:'Quick links', l:['Top 10 advisors','Love specialists','How we rank','Blog']},
          {h:'Resources',  l:['FAQ','About us','Contact']},
          {h:'Legal',      l:['Privacy','Terms','Disclaimer']},
        ].map(c => (
          <div key={c.h}>
            <div style={{fontSize:12, color:'var(--text-subtlest)', textTransform:'uppercase', letterSpacing:1.5, marginBottom:14}}>{c.h}</div>
            <div style={{display:'flex', flexDirection:'column', gap:8}}>
              {c.l.map(x => <a key={x} href="#" style={{color:'var(--purple-01)', fontSize:14}}>{x}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{maxWidth:1240, margin:'48px auto 0', paddingTop:24, borderTop:'1px solid var(--lilac-09)', display:'flex', justifyContent:'space-between', color:'var(--text-subtlest)', fontSize:12}}>
        <div>© 2026 Top Psychic Advisors. All rights reserved.</div>
        <div>Independent reviews — no sponsored placements.</div>
      </div>
    </footer>
  );
}

function StickyCompare() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <div style={{
      position:'fixed', bottom:24, left:'50%', transform:'translateX(-50%)',
      background:'var(--lilac-09)', borderRadius:'var(--radius-full)',
      border:'1px solid var(--lilac-07)', padding:'8px 8px 8px 22px',
      boxShadow:'0 12px 40px rgba(0,0,0,.5)',
      display:'flex', alignItems:'center', gap:14, zIndex:60,
      fontSize:13,
    }}>
      <span style={{display:'flex', alignItems:'center', gap:8}}>
        {ADVISORS.slice(0,3).map((a,i)=>(
          <span key={a.name} className="crest" style={{width:28, height:28, marginLeft:i? -10 : 0, border:'2px solid var(--lilac-09)'}}>
            <Crest kind={a.kind} hue={a.hue} size={22}/>
          </span>
        ))}
      </span>
      <span style={{color:'var(--text-subtle)'}}>Compare top 3</span>
      <button onClick={()=>document.querySelector('#rankings').scrollIntoView({behavior:'smooth'})} className="btn btn--primary" style={{padding:'8px 16px', fontSize:13}}>Open table →</button>
    </div>
  );
}

function DirectionA() {
  return (
    <div style={{background:'var(--bg-page-primary)', color:'var(--text-default)', minHeight:'100vh', position:'relative', overflow:'hidden'}}>
      <NavA/>
      <HeroA/>
      <RankingsA/>
      <CompareTable/>
      <MethodologyA/>
      <FAQ/>
      <section style={{padding:'80px 32px', textAlign:'center', position:'relative', overflow:'hidden'}}>
        <StarField density={50}/>
        <div className="aurora"/>
        <div style={{position:'relative', maxWidth:700, margin:'0 auto'}}>
          <h2 style={{fontSize:48, letterSpacing:-1, margin:'0 0 16px'}}>Find your <em style={{color:'var(--purple-04)'}}>advisor.</em></h2>
          <p style={{color:'var(--text-subtle)', fontSize:18, marginBottom:30}}>Start with our independent, expert-verified rankings.</p>
          <a href="#rankings" className="btn btn--primary">Meet the top advisors →</a>
        </div>
      </section>
      <FooterA/>
      <StickyCompare/>
    </div>
  );
}

window.DirectionA = DirectionA;
window.StarField = StarField;
window.Stars = Stars;
window.ScoreReveal = ScoreReveal;
window.SectionHead = SectionHead;
