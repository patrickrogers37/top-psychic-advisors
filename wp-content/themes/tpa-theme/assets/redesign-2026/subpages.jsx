// Review page + Category page — patched to read injected window.TPA_REVIEW / window.TPA_CATEGORY
// when available (WordPress integration); falls back to the original Kasamba/Love demo data.

const { useState: useStateP } = React;

function ReviewPage() {
  const D = window.TPA_REVIEW || {};
  const a = D.advisor || ADVISORS[0];
  const pros = D.pros || [
    'Deepest love & relationship reader bench in the industry',
    'Satisfaction guarantee on the first paid session',
    'Chat, phone and email — flexible reading channels',
    'Detailed reader profiles with verified reviews',
  ];
  const cons = D.cons || [
    'Per-minute rates climb fast for premium readers',
    'No native video readings (chat / phone only)',
    'Mobile app interface trails app-native competitors',
  ];
  const ratingBreakdown = D.ratingBreakdown || [
    {label:'Reader quality', score:4.9},
    {label:'Pricing transparency', score:4.6},
    {label:'Platform reliability', score:4.8},
    {label:'Customer support', score:4.7},
    {label:'Mobile experience', score:4.4},
  ];
  const verdictHeading = D.verdictHeading || 'The benchmark every other platform is measured against.';
  const verdictBody = D.verdictBody || `${a.name}'s long head-start shows. The reader bench is deeper, the satisfaction guarantee actually pays out, and the testing scores were the most consistent of any platform we vetted. If you want one place to start — start here.`;
  const intro = D.intro || `The most established psychic platform on the web. After six paid readings across love, career and tarot, here's what we found — and where it still falls short.`;
  const visitUrl = D.visitUrl || a.visit || '#';
  const bodyHtml = D.bodyHtml || null;

  return (
    <div style={{background:'var(--bg-page-primary)', color:'var(--text-default)', minHeight:'100vh', position:'relative', overflow:'hidden'}}>
      <NavA/>
      <article>
        {/* Article header */}
        <section style={{position:'relative', padding:'80px 32px 60px', overflow:'hidden'}}>
          <StarField density={50}/>
          <div className="aurora"/>
          <div style={{position:'relative', maxWidth:1100, margin:'0 auto'}}>
            <div style={{fontSize:12, letterSpacing:2, color:'var(--purple-04)', textTransform:'uppercase', marginBottom:18}}>
              Reviews · Updated April 2026 · 12 min read
            </div>
            <h1 style={{fontSize:84, lineHeight:1, letterSpacing:-2.5, margin:'0 0 24px', fontFamily:'var(--font-family-heading)'}}>
              <em style={{fontStyle:'italic', color:'var(--purple-04)'}}>{a.name}</em> review
            </h1>
            <p style={{fontSize:22, color:'var(--text-subtle)', maxWidth:680, lineHeight:1.45, marginBottom:30}}>
              {intro}
            </p>
            <div style={{display:'flex', alignItems:'center', gap:18, paddingTop:20, borderTop:'1px solid var(--lilac-09)'}}>
              <div style={{width:40, height:40, borderRadius:'50%', background:'var(--gradient-orchid)', display:'grid', placeItems:'center', fontFamily:'var(--font-family-heading)', fontSize:14, color:'white'}}>EM</div>
              <div>
                <div style={{fontSize:14, fontWeight:500}}>By the editorial team</div>
                <div style={{fontSize:12, color:'var(--text-subtlest)'}}>Reviewed by 3 testers · 14 hours of paid readings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Verdict card */}
        <section style={{padding:'0 32px 60px'}}>
          <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:32}}>
            <div style={{background:'var(--bg-surface-primary)', border:'1px solid var(--lilac-09)', borderRadius:'var(--radius-400)', padding:40}}>
              <div style={{fontSize:11, letterSpacing:2, textTransform:'uppercase', color:'var(--purple-04)', marginBottom:10}}>The verdict</div>
              <h2 style={{fontSize:32, margin:'0 0 18px', letterSpacing:-.5}}>{verdictHeading}</h2>
              <p style={{color:'var(--text-subtle)', fontSize:17, lineHeight:1.6, margin:0}}>{verdictBody}</p>
              <div style={{display:'flex', gap:14, marginTop:28}}>
                <a className="btn btn--primary" href={visitUrl} target="_blank" rel="noopener">Visit {a.name} →</a>
                <a className="btn btn--ghost" href="/">Compare alternatives</a>
              </div>
            </div>
            <div style={{background:'linear-gradient(165deg,#1a1840,#3a237a)', border:'1px solid var(--purple-07)', borderRadius:'var(--radius-400)', padding:32, position:'relative', overflow:'hidden'}}>
              <StarField density={20}/>
              <div style={{position:'relative'}}>
                <div className="crest" style={{width:80, height:80, marginBottom:18}}>
                  <Crest kind={a.kind} hue={a.hue} size={64}/>
                </div>
                <div style={{fontSize:11, letterSpacing:2, color:'var(--purple-04)', textTransform:'uppercase'}}>Our score</div>
                <div style={{fontFamily:'var(--font-family-heading)', fontSize:72, lineHeight:1, color:'var(--orange-04)', margin:'4px 0 8px'}}>{a.score}<span style={{fontSize:24, color:'var(--text-subtle)'}}>/5</span></div>
                <Stars score={a.score}/>
                <div style={{height:1, background:'var(--purple-07)', margin:'18px 0'}}/>
                <div style={{display:'grid', gap:10, fontSize:13}}>
                  <div style={{display:'flex', justifyContent:'space-between'}}><span style={{color:'var(--text-subtle)'}}>From</span><strong>{a.price}</strong></div>
                  <div style={{display:'flex', justifyContent:'space-between'}}><span style={{color:'var(--text-subtle)'}}>Free trial</span><strong style={{color:'var(--purple-04)'}}>{a.trial}</strong></div>
                  <div style={{display:'flex', justifyContent:'space-between'}}><span style={{color:'var(--text-subtle)'}}>Methods</span><strong>{(a.methods||[]).join(', ')}</strong></div>
                  <div style={{display:'flex', justifyContent:'space-between'}}><span style={{color:'var(--text-subtle)'}}>Guarantee</span><strong style={{color:'var(--green-04)'}}>✓ Yes</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rating breakdown */}
        <section style={{padding:'40px 32px 60px'}}>
          <div style={{maxWidth:1100, margin:'0 auto'}}>
            <h2 style={{fontSize:36, margin:'0 0 24px', letterSpacing:-.5}}>Rating <em style={{fontStyle:'italic', color:'var(--purple-04)'}}>breakdown</em></h2>
            <div style={{background:'var(--bg-surface-primary)', border:'1px solid var(--lilac-09)', borderRadius:'var(--radius-300)', padding:32}}>
              {ratingBreakdown.map((r,i)=>(
                <div key={r.label} style={{display:'grid', gridTemplateColumns:'200px 1fr 60px', alignItems:'center', gap:20, padding:'14px 0', borderBottom: i===ratingBreakdown.length-1 ? 'none' : '1px solid var(--lilac-09)'}}>
                  <div style={{fontSize:15, color:'var(--text-default)'}}>{r.label}</div>
                  <div className="score-bar"><span style={{'--w': (r.score/5)*100+'%', width:(r.score/5)*100+'%'}}/></div>
                  <div style={{fontFamily:'var(--font-family-heading)', fontSize:18, color:'var(--orange-04)', textAlign:'right'}}>{r.score}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros / Cons */}
        <section style={{padding:'40px 32px 60px'}}>
          <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
            <div style={{background:'rgba(77,171,117,.08)', border:'1px solid rgba(77,171,117,.3)', borderRadius:'var(--radius-300)', padding:28}}>
              <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:18}}>
                <span style={{width:28, height:28, borderRadius:14, background:'var(--green-04)', color:'#fff', display:'grid', placeItems:'center', fontSize:14, fontWeight:700}}>✓</span>
                <h3 style={{fontSize:22, margin:0}}>What we liked</h3>
              </div>
              {pros.map((p,i)=>(
                <div key={i} style={{display:'flex', gap:12, padding:'10px 0', borderBottom:i===pros.length-1?'none':'1px solid rgba(77,171,117,.15)'}}>
                  <span style={{color:'var(--green-04)', flexShrink:0}}>+</span>
                  <span style={{fontSize:14, color:'var(--text-subtle)'}}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{background:'rgba(233,61,68,.06)', border:'1px solid rgba(233,61,68,.25)', borderRadius:'var(--radius-300)', padding:28}}>
              <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:18}}>
                <span style={{width:28, height:28, borderRadius:14, background:'var(--red-04)', color:'#fff', display:'grid', placeItems:'center', fontSize:14, fontWeight:700}}>−</span>
                <h3 style={{fontSize:22, margin:0}}>What could be better</h3>
              </div>
              {cons.map((p,i)=>(
                <div key={i} style={{display:'flex', gap:12, padding:'10px 0', borderBottom:i===cons.length-1?'none':'1px solid rgba(233,61,68,.12)'}}>
                  <span style={{color:'var(--red-04)', flexShrink:0}}>−</span>
                  <span style={{fontSize:14, color:'var(--text-subtle)'}}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial body */}
        <section style={{padding:'40px 32px 60px'}}>
          <div style={{maxWidth:760, margin:'0 auto', fontSize:18, lineHeight:1.7, color:'var(--text-subtle)'}}>
            {bodyHtml ? (
              <div className="tpa-review-body" dangerouslySetInnerHTML={{__html: bodyHtml}} />
            ) : (
              <>
                <h2 style={{fontSize:36, margin:'40px 0 16px', color:'var(--gray-01)', letterSpacing:-.5}}>Our testing methodology</h2>
                <p>Our team conducted six paid readings on {a.name} over a four-week testing window. Three were on love and relationship topics, two on career, and one on a long-form destiny reading. Sessions ran between 18 and 42 minutes; total spend was $312.</p>
                <p>Every reading was scored independently by two testers across five dimensions: insight specificity, listening quality, pacing, follow-up coherence, and platform UX. Final scores are the median across testers.</p>
                <h2 style={{fontSize:36, margin:'40px 0 16px', color:'var(--gray-01)', letterSpacing:-.5}}>Who {a.name} is for</h2>
                <p>If you're looking for one platform to start with — particularly for love and relationship questions — {a.name} is our top recommendation. The free trial on every reader makes it cheap to find a fit, and the satisfaction guarantee actually does what it says.</p>
              </>
            )}
          </div>
        </section>
      </article>

      <FAQ/>
      <FooterA/>
    </div>
  );
}

function CategoryPage() {
  const D = window.TPA_CATEGORY || {};
  const cat = D.label || 'Love & Relationships';
  const k = D.key || SPEC_MAP[cat];
  const list = D.advisors || ADVISORS.filter(a => a.specs.includes(k));
  const top = D.top || list[0];
  const intro = D.intro || `Soulmate timelines, ex readings, twin-flame check-ins — every platform here was tested specifically against ${cat.toLowerCase()} questions. Ranked by what actually delivered insight.`;

  return (
    <div style={{background:'var(--bg-page-primary)', color:'var(--text-default)', minHeight:'100vh', position:'relative', overflow:'hidden'}}>
      <NavA/>
      <section style={{position:'relative', padding:'80px 32px 60px', overflow:'hidden'}}>
        <StarField density={70}/>
        <div className="aurora"/>
        <div style={{position:'relative', maxWidth:1240, margin:'0 auto'}}>
          <div style={{fontSize:12, letterSpacing:2, color:'var(--orange-04)', textTransform:'uppercase', marginBottom:18}}>
            Category guide · Updated April 2026
          </div>
          <h1 style={{fontSize:96, lineHeight:.95, letterSpacing:-3, margin:'0 0 24px', fontFamily:'var(--font-family-heading)', maxWidth:900}}>
            The best psychics for <em style={{fontStyle:'italic', color:'var(--purple-04)'}}>{cat.toLowerCase()}.</em>
          </h1>
          <p style={{fontSize:20, color:'var(--text-subtle)', maxWidth:640, lineHeight:1.5, marginBottom:36}}>
            {intro}
          </p>
          <div style={{display:'flex', gap:14}}>
            <a href="#picks" className="btn btn--primary">See the rankings →</a>
            <a href="#guide" className="btn btn--ghost">How to choose</a>
          </div>
        </div>
      </section>

      {/* Top pick spotlight */}
      {top && (
      <section style={{padding:'40px 32px'}}>
        <div style={{maxWidth:1240, margin:'0 auto', background:'linear-gradient(160deg,#1a1840,#2a2570 60%,#3a237a)', border:'1px solid var(--purple-07)', borderRadius:'var(--radius-400)', padding:48, position:'relative', overflow:'hidden'}}>
          <StarField density={40}/>
          <div style={{position:'relative', display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:48, alignItems:'center'}}>
            <div style={{display:'flex', justifyContent:'center'}}>
              <div className="crest" style={{width:200, height:200, background:'var(--gradient-amethyst)', boxShadow:'0 30px 80px rgba(94,111,253,.4)'}}>
                <Crest kind={top.kind} hue={top.hue} size={150}/>
              </div>
            </div>
            <div>
              <div style={{fontSize:11, letterSpacing:3, color:'var(--orange-04)', textTransform:'uppercase', marginBottom:14}}>Top pick for {cat.toLowerCase()} · No.1 of {list.length}</div>
              <h2 style={{fontSize:56, margin:'0 0 14px', letterSpacing:-1}}>{top.name}</h2>
              <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:18}}>
                <Stars score={top.score}/>
                <span style={{fontFamily:'var(--font-family-heading)', fontSize:32, color:'var(--orange-04)'}}>{top.score}</span>
              </div>
              <p style={{color:'var(--purple-01)', fontSize:18, lineHeight:1.55, marginBottom:24}}>
                {top.verdict}
              </p>
              <div style={{display:'flex', gap:14}}>
                <a className="btn btn--primary" href={top.url || '#'}>Read review →</a>
                <a className="btn btn--ghost" href={top.visit || '#'} target="_blank" rel="noopener">Visit site</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Ranked list */}
      <section id="picks" style={{padding:'80px 32px'}}>
        <div style={{maxWidth:1240, margin:'0 auto'}}>
          <SectionHead eyebrow="The full list" title={<>All {cat.toLowerCase()} <em style={{fontStyle:'italic', color:'var(--purple-04)'}}>specialists</em></>} sub={`${list.length} platforms tested with ${cat.toLowerCase()}-specific questions.`}/>
          <div style={{display:'flex', flexDirection:'column', gap:14}}>
            {list.map((a,i)=>(
              <RankRow key={a.name} a={{...a, rank: i+1}} i={i} expanded={false} onClick={()=>{}}/>
            ))}
          </div>
        </div>
      </section>

      {/* Guide section */}
      <section id="guide" style={{padding:'80px 32px', background:'var(--bg-surface-primary)'}}>
        <div style={{maxWidth:900, margin:'0 auto'}}>
          <SectionHead eyebrow="Buyer's guide" title={<>How to choose a <em style={{fontStyle:'italic', color:'var(--purple-04)'}}>{cat.toLowerCase()} psychic</em></>}/>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
            {[
              {t:'Look for specialists, not generalists', d:'Top platforms let you filter by category specifically. Use the filters to find a reader who knows your situation.'},
              {t:'Start with the free trial', d:'Every platform we recommend offers some form of intro credit. Use it to test fit before paying full rate.'},
              {t:'Watch for satisfaction guarantees', d:'Kasamba and Psychic Source both refund unsatisfactory first sessions. That signals confidence in their reader bench.'},
              {t:'Match the channel to your need', d:'Quick check-ins work great over chat. Long-form questions deserve phone or video.'},
            ].map((g,i)=>(
              <div key={i} style={{padding:28, background:'var(--lilac-10)', border:'1px solid var(--lilac-09)', borderRadius:'var(--radius-300)'}}>
                <div style={{fontFamily:'var(--font-family-heading)', fontSize:32, color:'var(--purple-07)', marginBottom:10}}>0{i+1}</div>
                <h3 style={{fontSize:20, margin:'0 0 8px'}}>{g.t}</h3>
                <p style={{color:'var(--text-subtle)', fontSize:14, lineHeight:1.6, margin:0}}>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ/>
      <FooterA/>
    </div>
  );
}

window.ReviewPage = ReviewPage;
window.CategoryPage = CategoryPage;
