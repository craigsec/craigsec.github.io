/* ============================================================================
   CRAIG — INTERACTIVE TERMINAL RESUME
   ----------------------------------------------------------------------------
   ★ EDIT YOUR CONTENT HERE ★
   Everything personal lives in the DATA object below. Swap the placeholder
   text (clearly marked in the data below) for real details. No other part
   of the script needs changing to update content.
   ========================================================================== */
const DATA = {
  identity: {
    handle: "craig",                                 // shell alias (prompt handle)
    name: "CONSTANTINOS CRAIG",                      // display name
    role: "IT Operations Engineer",
    tagline: "systems administration • infrastructure • security operations",
    location: "Lubbock, TX",
    availability: "Open to work",
    experience: "IT since 2024",            // hands-on IT from the 2024 Turo build; employed in IT from 2025 — matches the resume
    host: "portfolio",
  },

  about: [
    "I work in IT operations and systems administration, keeping the",
    "infrastructure businesses depend on running and secure: Active",
    "Directory, Microsoft 365, Entra and Intune, endpoint and user",
    "support, network troubleshooting, and the hardware behind it all.",
    "",
    "I came in the practical way: self-taught the fundamentals, built real",
    "systems from the ground up, and moved into IT full time from there.",
    "",
    "Defensive security focused. ISC2 Certified in Cybersecurity (CC),",
    "CompTIA Security+, and Google Cybersecurity certified.",
  ],

  // Featured projects — rendered as cards, in order.
  projects: [
    {
      title: "CAR RENTAL IT & SURVEILLANCE",
      tag: "designed & built · Lubbock, Texas · 2024",
      summary: "Set up the on-site IT for a Turo car-rental operation: secure remote access, surveillance, and storage. (Turo handled the bookings and payments; the infrastructure was mine.)",
      demonstrates: [
        "VPN tunnel from the lot back to home for secure remote management and camera viewing, with nothing exposed to the internet",
        "Hikvision IP cameras recording to an NVR running as a VM on a Proxmox host, with motion-triggered recording and a set retention window",
        "Cameras isolated on their own VLAN with no internet access, so a compromised camera could not reach the rest of the network",
        "Synology NAS for footage and files, with scheduled snapshots and backups",
        "A UPS protecting the NVR and NAS for clean shutdown and no corrupted recordings during power loss",
        "Dynamic DNS so the VPN stayed reachable on the site's residential IP",
      ],
      ethics: "My first hands-on build, and the project that pulled me out of retail management and into IT.",
      stack: "Proxmox · Synology NAS · Hikvision NVR · VLANs · VPN · dynamic DNS · UPS",
      note: "",
    },
    {
      title: "ENTERPRISE FLOOR BUILD-OUT",
      tag: "infrastructure · Athens, Greece · 2025",
      summary: "Part of the team that stood up a full enterprise office floor: workstations, server room, network, and access control.",
      demonstrates: [
        "Supported deployment of a 149-workstation enterprise office floor: hardware, cabling, and endpoint installs",
        "Assisted with server-room setup and infrastructure preparation",
        "Network troubleshooting and workstation connectivity validation across the floor",
        "Hikvision CCTV and access-control troubleshooting",
      ],
      ethics: "Hands-on enterprise deployment delivered alongside the Infrastructure and Global Operations teams.",
      stack: "Active Directory · Microsoft 365 · Hikvision · enterprise networking",
      note: "",
    },
  ],

  // Sysadmin dashboard — each becomes a live-style status tile. Values are sample readouts; edit freely.
  // Ops log — real operations rendered as a live `tail -f` feed (no invented metrics).
  opsLog: [
    { tag: "onboarding",   msg: "provisioned new users end to end: M365, Exchange, Intune, laptop setup" },
    { tag: "infra",        msg: "supported a 149-workstation office floor and server room build-out" },
    { tag: "network",      msg: "configured MikroTik VLANs and UniFi; validated workstation connectivity" },
    { tag: "patch",        msg: "verified critical CVE rollout across endpoints (Defender TVM)" },
    { tag: "phishing",     msg: "ran Defender Attack Simulation campaigns; analyzed reported phishing" },
    { tag: "access",       msg: "Hikvision CCTV and access-control troubleshooting" },
    { tag: "fleet",        msg: "commissioned vessel comms racks: MikroTik, VSAT, Synology NAS, UPS" },
    { tag: "connectivity", msg: "managed multi-link WAN: OneWeb LEO, Fleet Xpress + FBB, Starlink, 5G" },
    { tag: "identity",     msg: "designed Conditional Access for offline and shared vessel terminals" },
    { tag: "automation",   msg: "device-health reporting via Intune" },
    { tag: "docs",         msg: "wrote SOPs that standardized how the team worked" },
  ],

  // Skills grouped by domain — a resume-style list of competencies (no ratings).
  skills: {
    "Systems & Administration": [
      "Active Directory", "Microsoft 365 / Exchange Online", "Entra ID", "Intune",
      "Identity & Access Management", "Group Policy", "Windows Server administration",
      "Linux administration", "Ubuntu Server", "User provisioning",
    ],
    "Infrastructure & Networking": [
      "Workstation & hardware deployment", "Server room operations", "MikroTik RouterOS (EVO / CRS)",
      "Ubiquiti UniFi (UDM-Pro, IPS/IDS)", "Cisco managed switches", "VLAN design / bridge filtering",
      "Subnetting & routing", "Network troubleshooting", "Cabling & connectivity",
    ],
    "Security & Access Control": [
      "Microsoft Defender (Attack Simulation, TVM)", "Splunk (SIEM)", "Phishing analysis", "Conditional Access",
      "Access control systems", "Badge provisioning", "Hikvision / CCTV", "Cybersecurity awareness",
    ],
    "IT Operations & Support": [
      "Technical troubleshooting", "Endpoint & remote support", "Escalation management",
      "IT ticketing systems", "SOP documentation",
    ],
    "Virtualization & Automation": [
      "Proxmox VE (clustering, quorum)", "Synology NAS",
      "PowerShell", "Python", "SQL", "Bash scripting",
    ],
    "Specialized / Maritime Infrastructure": [
      "Satellite connectivity (OneWeb / Eutelsat LEO)", "Inmarsat Fleet Xpress + FleetBroadband",
      "Starlink / 5G backup", "SAILOR VSAT", "MarPoint Governor", "NAVTOR NavTracker / NavBox",
      "CyberPower ATS / PowerWalker UPS", "SNMP device monitoring", "3CX + Yealink",
    ],
  },

  timeline: [
    { yr: "Nov 2022",    ev: "Started studying cybersecurity",     de: "Self-guided study in Texas: SIEM (Splunk), Python, and SQL in lab settings." },
    { yr: "2024",        ev: "Built a small-business network",     de: "Set up the network and surveillance for a Turo car-rental fleet in Lubbock, Texas while running it as fleet manager. This is the project that moved me from retail into IT." },
    { yr: "2024",        ev: "Specialized in cybersecurity",       de: "Pivoted toward defensive security and monitoring." },
    { yr: "Oct 2025 – Jul 2026", ev: "IT Generalist / IT Support Technician · IntouchCX",  de: "Athens, Greece. AD provisioning, M365, endpoint support, access control, and the 149-workstation office-floor build-out." },
    { yr: "Jul 2026 – now", ev: "ICT Operations Engineer · Laskaridis Maritime", de: "Kifissia, Athens, Greece. Vessel networks, satellite connectivity, M365 / Entra / Intune, and fleet security" },
  ],

  // Credentials — certifications, education, languages (shown by the `creds` command).
  credentials: {
    certs: [
      "CompTIA Security+ · 2024",
      "ISC2 Certified in Cybersecurity (CC) · ISC2 (2024–2027)",
      "Google Cybersecurity Certificate · Google (2024)",
      "Google IT Support Certificate · Google (2024)",
      "In progress: HTB CJCA → CDSA (defensive-analyst path)",
    ],
    education: [
      "Deree College · Computer Information Sciences",
    ],
    languages: "English · Greek",
  },

  contact: [
    { ic: "email",    val: "constantinoscraig@gmail.com",   href: "mailto:constantinoscraig@gmail.com" },
    { ic: "linkedin", val: "linkedin.com/in/constantinoscraig", href: "https://www.linkedin.com/in/constantinoscraig" },
    { ic: "location", val: "Lubbock, TX" },
  ],

  hireMessages: [
    "Constantinos has been added to your team. Good call.",
    "Onboarding sequence initiated… coffee preferences loading.",
    "root@company:~# hired craig --effective=immediately",
  ],
};

/* ========================================================================== */
/*  ENGINE — no need to edit below this line to change content.               */
/* ========================================================================== */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = s => document.querySelector(s);
const log = $('#log'), screen = $('#screen'), input = $('#cmd');

/* ---- red-team glitch field ----
   Datamosh corruption blocks + RGB-split tear bands over a dark ground.
   Red-dominant with cyan/green flecks. Replaces the old matrix rain. */
(function glitch(){
  const c = $('#matrix'); if(!c) return;
  c.style.display='none'; return;   // ambient glitch field disabled for a clean, modern look
  /* eslint-disable no-unreachable */
  if (reduceMotion){ c.style.display='none'; return; }
  const ctx = c.getContext('2d'); let w,h;
  function size(){ w=c.width=innerWidth; h=c.height=innerHeight; }
  size(); addEventListener('resize', size);

  let last=0, bands=[], noiseGrid=0;
  function spawnBand(){
    bands.push({ y:Math.random()*h, h:2+Math.random()*22,
                 dx:(Math.random()*2-1)*42, life:1 });
  }
  function draw(t){
    if(t-last>45){ last=t;
      // fade previous frame to leave short trails
      ctx.fillStyle='rgba(5,7,10,0.24)'; ctx.fillRect(0,0,w,h);

      // faint vertical scan grid that drifts (digital substrate)
      noiseGrid=(noiseGrid+1)%40;
      ctx.strokeStyle='rgba(255,42,70,0.03)'; ctx.lineWidth=1;
      for(let x=noiseGrid; x<w; x+=40){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke(); }

      // scattered corruption blocks — red dominant
      for(let i=0;i<14;i++){
        const x=Math.random()*w, y=Math.random()*h,
              bw=4+Math.random()*48, bh=2+Math.random()*7, r=Math.random();
        const col = r<0.62 ? 'rgba(255,42,70,'      // red
                  : r<0.82 ? 'rgba(56,232,255,'     // cyan
                  : r<0.93 ? 'rgba(57,255,147,'     // green fleck
                           : 'rgba(255,92,240,';    // magenta fleck
        ctx.fillStyle = col + (0.05+Math.random()*0.20)+')';
        ctx.fillRect(x,y,bw,bh);
      }

      // rare, faint horizontal tear band with subtle RGB channel split
      // (no bright white center layer — it hurt readability)
      if(Math.random()<0.07) spawnBand();
      bands.forEach(b=>{
        b.life-=0.06;
        const a=Math.max(b.life,0)*0.16;
        ctx.fillStyle='rgba(255,30,60,'+(a*0.8)+')';  ctx.fillRect(b.dx-2,b.y,w,b.h);
        ctx.fillStyle='rgba(56,232,255,'+(a*0.55)+')';ctx.fillRect(b.dx+2,b.y,w,b.h);
      });
      bands = bands.filter(b=>b.life>0);
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

/* ---- clock / uptime / load ---- */
let started = Date.now();
setInterval(()=>{
  const d=new Date();
  $('#clock').textContent = d.toLocaleTimeString([], {hour12:false});
  const s=Math.floor((Date.now()-started)/1000);
  const p=n=>String(n).padStart(2,'0');
  $('#uptime').textContent = `${p(Math.floor(s/3600))}:${p(Math.floor(s/60)%60)}:${p(s%60)}`;
  $('#load').textContent = (0.10 + Math.random()*0.12).toFixed(2);
}, 1000);

/* ---- helpers ---- */
function el(html){ const d=document.createElement('div'); d.className='block'; d.innerHTML=html; return d; }
// roll each matched element in, line by line, with a staggered delay (terminal-style)
function stagger(scope, selector, step=0.06, start=0, cls='rollin'){
  scope.querySelectorAll(selector).forEach((node,i)=>{
    node.classList.add(cls);
    node.style.setProperty('--d', (start + i*step).toFixed(2)+'s');
  });
}
function esc(s){ return String(s).replace(/[&<>]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])); }
let pinnedTop = null;   // when set, new output snaps this element to the top of the view instead of scrolling to the bottom
function scrollDown(){
  if(pinnedTop && pinnedTop.isConnected){
    const d = pinnedTop.getBoundingClientRect().top - screen.getBoundingClientRect().top;
    screen.scrollTop = screen.scrollTop + d - 8;
  } else {
    screen.scrollTop = screen.scrollHeight;
  }
}

function echoCommand(cmd){
  const line = document.createElement('div');
  line.className='block prompt-line';
  line.innerHTML = `<span class="ps">craig@portfolio</span><span class="ph">:${esc(fsPath(cwd))}$</span> <span class="cmd">${esc(cmd)}</span>`;
  log.appendChild(line); pinnedTop = line; scrollDown();
}

/* type text into an element char-by-char (respects reduced motion) */
let animGen = 0;   // bumps on every command; in-flight animations abort when it changes
function typeInto(node, text, speed=12, onTick){
  return new Promise(res=>{
    if(reduceMotion){ node.textContent=text; if(onTick) onTick(); res(); return; }
    const gen=animGen;
    let i=0; (function step(){
      if(gen!==animGen) return;            // a new command took over — stop
      node.textContent = text.slice(0,i++);
      if(onTick) onTick();                 // keep the view tracking as text fills in
      if(i<=text.length){ setTimeout(step, speed); } else res();
    })();
  });
}
// type out rich content char-by-char while KEEPING its markup (clickable spans, links, <br>)
function typeRich(container, speed=5, onDone, chunk=1){
  const walker=document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const nodes=[]; let n; while(n=walker.nextNode()) nodes.push({node:n, full:n.nodeValue});
  if(reduceMotion){ if(onDone) onDone(); return; }
  nodes.forEach(o=>{ if(o.full.trim()!=='') o.node.nodeValue=''; });   // hide real text, keep whitespace/structure
  const gen=animGen;
  let ni=0, ci=0;
  (function step(){
    if(gen!==animGen) return;            // a new command took over — stop
    while(ni<nodes.length && nodes[ni].full.trim()===''){ ni++; ci=0; }
    if(ni>=nodes.length){ if(onDone) onDone(); return; }
    const o=nodes[ni];
    ci = Math.min(o.full.length, ci + chunk);   // reveal `chunk` chars per tick (>1 = faster/abrupt)
    o.node.nodeValue = o.full.slice(0, ci);
    if(ci>=o.full.length){ ni++; ci=0; }
    scrollDown();
    setTimeout(step, speed);
  })();
}

/* scramble-reveal effect for headings on hover */
const SCRAMBLE = "!<>-_\\/[]{}=+*^?#01";
function scramble(node){
  if(reduceMotion) return;
  const final = node.dataset.text || node.textContent;
  node.dataset.text = final;
  let frame=0; const total=12;
  clearInterval(node._sc);
  node._sc = setInterval(()=>{
    let out=''; for(let i=0;i<final.length;i++){
      if(i < (frame/total)*final.length) out+=final[i];
      else out += SCRAMBLE[Math.floor(Math.random()*SCRAMBLE.length)];
    }
    node.textContent=out;
    if(frame++>=total){ clearInterval(node._sc); node.textContent=final; }
  }, 40);
}
function wireScramble(scope){
  scope.querySelectorAll('[data-scramble]').forEach((n,idx)=>{
    n.addEventListener('mouseenter', ()=>scramble(n));           // scramble on hover (desktop)
    if(!reduceMotion){ const g=animGen; setTimeout(()=>{ if(g===animGen) scramble(n); }, 90 + idx*70); }  // auto "decode in" — skip if a new command took over
  });
}

/* ========================= COMMAND RENDERERS ============================== */
const PHOTO = "data:image/jpeg;base64,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";   // headshot embedded as a data URI; replace this string to swap it
function renderBanner(){
  const d=DATA.identity;
  const avatar = (PHOTO && PHOTO.indexOf('data:')===0) ? `<img class="avatar" src="${PHOTO}" alt="${esc(d.name)}">` : '';
  const b=el(`
   <div class="banner">
     <div class="banner-top">
       ${avatar}
       <div class="banner-id">
         <p class="big glitch" data-scramble>${esc(d.name)}</p>
         <div class="role">${esc(d.role)}</div>
         <div class="muted" style="margin-top:6px">${esc(d.tagline)}</div>
       </div>
     </div>
     <div class="meta">
       <span>location···· <b>${esc(d.location)}</b></span>
       <span>experience·· <b>${esc(d.experience)}</b></span>
     </div>
   </div>`);
  log.appendChild(b);
  wireScramble(b); scrollDown();
}
function renderAbout(){
  const b=el(`<h2 class="section" data-scramble>// about</h2><div class="muted" id="aboutbody"></div>`);
  log.appendChild(b); wireScramble(b);
  const body=b.querySelector('#aboutbody'); body.style.whiteSpace='pre-wrap';
  typeInto(body, DATA.about.join('\n'), 5, scrollDown).then(scrollDown); scrollDown();
}
function renderSkills(){
  let html=`<h2 class="section" data-scramble>// skills</h2>`;
  let n=0;  // running index so tags cascade in smoothly across all groups
  for(const [group, list] of Object.entries(DATA.skills)){
    const tags=list.map(s=>`<span class="sk-tag" style="--d:${(n++*0.03).toFixed(2)}s">${esc(s)}</span>`).join('');
    html+=`<div class="skgroup"><h3>${esc(group)}</h3><div class="sk-tags">${tags}</div></div>`;
  }
  const b=el(html); log.appendChild(b); wireScramble(b); scrollDown();
}
function renderSysadmin(){
  // tag colours by type: incidents red, security amber, builds cyan, routine ops green
  const TAGCOLORS = {
    incident:'var(--red)',
    patch:'var(--amber)', phishing:'var(--amber)', access:'var(--amber)',
    onboarding:'var(--green)', identity:'var(--green)', automation:'var(--green)', docs:'var(--green)',
    infra:'var(--cyan)', network:'var(--cyan)', fleet:'var(--cyan)', connectivity:'var(--cyan)',
  };
  const b=el(`<h2 class="section" data-scramble>// sysadmin — operations log</h2>
    <div class="opslog"><div class="head"><span class="blink2">●</span> tail -f /var/log/ops.log <span class="muted">· live operations</span></div>
    <div id="opsbody"></div></div>`);
  log.appendChild(b); wireScramble(b); scrollDown();
  const body=b.querySelector('#opsbody');
  let t = 8*3600 + 11*60 + 3;                 // stylistic log timestamps, counting up
  const p=n=>String(n).padStart(2,'0');
  function addLine(e, i){
    t += 11 + Math.floor(Math.random()*50);
    const hh=p(Math.floor(t/3600)%24), mm=p(Math.floor(t/60)%60), ss=p(t%60);
    const col = TAGCOLORS[e.tag] || 'var(--cyan)';
    const row=document.createElement('div'); row.className='opsline';
    row.innerHTML=`<span class="ts">${hh}:${mm}:${ss}</span><span class="tag2" style="color:${col}">[${esc(e.tag)}]</span><span class="msg">${esc(e.msg)}</span>`;
    body.appendChild(row);
  }
  DATA.opsLog.forEach((e,i)=> addLine(e, i));
  stagger(b, '.opsline', 0.06);   // roll each line in, same as projects
  scrollDown();
}
function renderProjects(){
  const cards = DATA.projects.map(p=>{
    const items=p.demonstrates.map(i=>`<li>${esc(i)}</li>`).join('');
    const noteLine = p.note ? `<div class="ph" style="margin-top:10px">▸ ${esc(p.note)}</div>` : '';
    return `<div class="proj" style="margin-bottom:14px">
       <div class="tag">${esc(p.tag)}</div>
       <h3 class="ptitle" data-scramble>${esc(p.title)}</h3>
       <div class="muted">${esc(p.summary)}</div>
       <div class="cyan" style="margin-top:12px">what it demonstrates:</div>
       <ul>${items}</ul>
       <div class="ethics"><b class="green">impact:</b> ${esc(p.ethics)}</div>
       <div class="muted">stack: <code class="inl">${esc(p.stack)}</code></div>
       ${noteLine}
     </div>`;
  }).join('');
  const b=el(`<h2 class="section" data-scramble>// projects — featured</h2>${cards}`);
  log.appendChild(b); wireScramble(b);
  stagger(b, '.proj', 0.18, 0, 'softfade');   // gentle, slow pure fade per card — no movement
  scrollDown();
}
function renderTimeline(){
  const items=DATA.timeline.map(t=>{
    const cur = /now|present/i.test(t.yr) ? 'current' : '';
    return `<li class="${cur}"><span class="node" aria-hidden="true"></span>`
      + `<span class="yr">${esc(t.yr)}</span>`
      + `<div class="ev" data-scramble>${esc(t.ev)}</div>`
      + `<div class="de">${esc(t.de)}</div></li>`;
  }).join('');
  const b=el(`<h2 class="section" data-scramble>// timeline · journey.log</h2><ul class="tl">${items}</ul>`);
  log.appendChild(b); wireScramble(b);
  stagger(b, '.tl li', 0.08);   // roll out each entry in sequence
  scrollDown();
}
function renderContact(){
  const b=el(`<h2 class="section" data-scramble>// contact</h2><div class="contact" id="cbody"></div>
    <div class="muted" style="margin-top:8px;font-size:12px">tip: links open in a new tab · use copy if a link doesn't respond</div>`);
  log.appendChild(b); wireScramble(b);
  const body=b.querySelector('#cbody');
  (async()=>{
    for(const c of DATA.contact){
      const row=document.createElement('div'); row.className='ln';
      const field = c.href
        ? `<a href="${esc(c.href)}" target="_blank" rel="noopener noreferrer"><span class="v"></span></a>`
        : `<span class="v"></span>`;
      row.innerHTML=`<span class="ic">${esc(c.ic)}</span>
        ${field}
        <button class="copybtn" data-copy="${esc(c.val)}">copy</button>`;
      body.appendChild(row);
      await typeInto(row.querySelector('.v'), c.val, 10); scrollDown();
    }
    body.querySelectorAll('.copybtn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const t=btn.dataset.copy;
        navigator.clipboard?.writeText(t).then(()=>{ btn.textContent='copied'; setTimeout(()=>btn.textContent='copy',1200); })
        .catch(()=>{ const r=document.createRange(); r.selectNodeContents(btn.previousElementSibling);
          const s=getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent='select'; });
      });
    });
  })();
}
function renderResume(){
  // The PDF is served from the repo root, next to index.html (same origin).
  // Swap this filename if you rename the file in the repo.
  const file='Constantinos_Craig_Resume.pdf';
  const b=el(`<h2 class="section" data-scramble>// resume</h2>
    <div id="rbody" class="muted">
      <div class="ln">rendering <span class="cyan">${esc(file)}</span> below &mdash; read it right here, no download needed:</div>
      <div class="pdfwrap">
        <iframe class="pdfframe" src="${esc(file)}#view=FitH" title="Constantinos Craig — resume (PDF)" loading="lazy"></iframe>
      </div>
      <div class="ln" style="margin-top:10px">
        <a class="resbtn" href="${esc(file)}" target="_blank" rel="noopener noreferrer">open full page &rarr;</a>
        <a class="resbtn alt" href="${esc(file)}" download>download PDF</a>
      </div>
      <div class="ln" style="margin-top:8px;font-size:12px">ATS-friendly PDF — the same background as this site, in a format a recruiter can read, file, or forward.</div>
    </div>`);
  log.appendChild(b); wireScramble(b); scrollDown();
}
function renderCreds(){
  const c=DATA.credentials;
  const li=a=>a.map(x=>`<li>${esc(x)}</li>`).join('');
  const b=el(`<h2 class="section" data-scramble>// credentials</h2>
    <div id="credbody">
    <div class="cyan" style="margin-bottom:4px">certifications &amp; memberships:</div>
    <ul style="margin:0 0 12px;padding-left:18px" class="muted">${li(c.certs)}</ul>
    <div class="cyan" style="margin-bottom:4px">education:</div>
    <ul style="margin:0 0 12px;padding-left:18px" class="muted">${li(c.education)}</ul>
    <div class="cyan" style="margin-bottom:4px">languages:</div>
    <div class="muted">${esc(c.languages)}</div>
    </div>`);
  log.appendChild(b); wireScramble(b);
  typeRich(b.querySelector('#credbody'), 5);   // type the creds out like the about page
  scrollDown();
}
function renderHelp(){
  const cmds=[
    ['about','who is craig'],['skills','skills by domain'],['projects','featured builds'],
    ['timeline','career journey'],['sysadmin','operations log'],['creds','certs, education, languages'],
    ['casestudy','phishing campaign — spot the phish'],['resume','view / download my resume (PDF)'],['contact','get in touch'],['tools','live network & crypto utilities'],
    ['topology','interactive home-lab network map'],['ls / cd / cat','explore the filesystem'],['tree','map the current directory'],['grep / history / man','poke around like a real shell'],
    ['help','list commands'],

    ['clear','wipe the screen'],['banner','show login banner'],['whoami','identity readout'],
    ['reboot','replay the boot sequence'],
  ];
  const rows=cmds.map(([k,v])=>`<div class="row"><span class="k">${k}</span><span class="v">${v}</span></div>`).join('');
  const b=el(`<h2 class="section" data-scramble>// available commands</h2>
    <div class="cmd-grid">${rows}</div>
    <div class="muted" style="margin-top:12px">↑/↓ history · Tab to autocomplete commands &amp; file paths · or click a command in the bar below · psst: try <code class="inl">secret</code></div>`);
  log.appendChild(b);
  wireScramble(b); scrollDown();
}
function renderWhoami(){
  const d=DATA.identity;
  const b=el(`<div class="muted">uid=1000(<span class="green">${esc(d.handle)}</span>) role=(<span class="cyan">${esc(d.role)}</span>)
    groups=(blue-team, sysadmin, automation)<br>
    <span class="amber">hint:</span> try <code class="inl">sudo hire-craig</code></div>`);
  log.appendChild(b); scrollDown();
}
function hireDino(){
  const msg=DATA.hireMessages[Math.floor(Math.random()*DATA.hireMessages.length)];
  $('#hiremsg').textContent='';
  $('#hire').classList.add('show');
  typeInto($('#hiremsg'), msg, 22);
}
$('#hireclose').addEventListener('click', ()=>$('#hire').classList.remove('show'));
// dismiss the hire overlay with Enter or Escape — capture phase so it beats the input's Enter handler (no command runs)
document.addEventListener('keydown', e=>{
  const hire=$('#hire');
  if(hire && hire.classList.contains('show') && (e.key==='Enter' || e.key==='Escape')){
    e.preventDefault(); e.stopPropagation(); hire.classList.remove('show');
  }
}, true);

function addChips(container, names){
  names.forEach(n=>{
    const c=document.createElement('button'); c.className='chip'; c.type='button'; c.textContent=n;
    c.addEventListener('click', ()=>run(n));
    container.appendChild(c);
  });
}

/* ---------------- extra commands & easter eggs ---------------- */
function uptimeStr(){
  const s=Math.max(0,Math.floor((Date.now()-started)/1000)), p=n=>String(n).padStart(2,'0');
  return `${p(Math.floor(s/3600))}:${p(Math.floor(s/60)%60)}:${p(s%60)}`;
}
// reveal a set of lines with the same staggered cascade as the ops log
function cascadeLines(rows){
  const html = rows.map((r,i)=>{
    const [c,t] = Array.isArray(r) ? r : ['muted', r];
    return `<div class="opsline" style="--d:${(i*0.06).toFixed(2)}s"><span class="${c}" style="white-space:pre-wrap">${esc(t)}</span></div>`;
  }).join('');
  log.appendChild(el(html)); scrollDown();
}
function printOne(cls, text){ log.appendChild(el(`<span class="${cls}" style="white-space:pre-wrap;overflow-wrap:anywhere">${esc(text)}</span>`)); scrollDown(); }

function renderNeofetch(){
  const d=DATA.identity;
  const logo = ["┌───────┐","│  >_   │","│ craig │","└───────┘"];
  const info = [
    ["cyan","craig@portfolio"],
    ["muted","──────────────────────────"],
    ["muted","OS........ CraigOS (RouterOS-flavored)"],
    ["muted","host...... craigsec"],
    ["muted","kernel.... 6.x-hardened"],
    ["muted","shell..... craig::sh"],
    ["muted",`uptime.... ${uptimeStr()}`],
    ["muted",`role...... ${d.role}`],
    ["muted",`location.. ${d.location}`],
    ["muted","stack..... MikroTik · Proxmox · M365 · Entra ID"],
    ["muted","contact... linkedin.com/in/constantinoscraig"],
  ];
  const left = logo.map(l=>`<div class="green" style="white-space:pre">${esc(l)}</div>`).join('');
  const right = info.map(([c,t])=>`<div class="${c}" style="white-space:pre-wrap">${esc(t)}</div>`).join('');
  log.appendChild(el(`<div style="display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start"><div>${left}</div><div style="min-width:0">${right}</div></div>`));
  scrollDown();
}
function renderScan(){
  cascadeLines([
    ["cyan","Starting Nmap scan ( craig://portfolio )"],
    ["muted","Scanning craig [ 6 ports ]"],
    ["muted",""],
    ["muted","PORT      STATE  SERVICE"],
    ["green","22/tcp    open   ssh         · systems administration"],
    ["green","443/tcp   open   https       · security operations"],
    ["green","3389/tcp  open   rdp         · endpoint & user support"],
    ["green","445/tcp   open   smb         · windows server"],
    ["green","161/udp   open   snmp        · monitoring"],
    ["green","8291/tcp  open   winbox      · mikrotik routeros"],
    ["muted",""],
    ["muted","Host is up (0.012s latency)."],
    ["amber","0 vulnerabilities found — system hardened."],
    ["cyan","→ run `contact` to open a channel."],
  ]);
}
function renderPing(){
  cascadeLines([
    ["muted","PING craig (online): 56 data bytes"],
    ["green","reply from craig: time=12ms  status=available"],
    ["green","reply from craig: time=9ms   status=responsive"],
    ["muted",""],
    ["muted","2 packets transmitted, 2 received, 0% packet loss"],
    ["cyan","→ reachable. run `contact` to say hi."],
  ]);
}
function renderSecret(){
  cascadeLines([
    ["amber","// hidden commands"],
    ["muted","neofetch        system readout"],
    ["muted","nmap            port scan"],
    ["muted","ping            check availability"],
    ["muted","coffee          brew attempt"],
    ["muted","pwd / date      the basics"],
    ["muted","sudo hire-craig access granted"],
    ["muted","…and an old-school console code may still work."],
  ]);
}
function coffee(){
  const cup = [
    "        ( (",
    "         ) )",
    "      ........",
    "      |      |]",
    "      \\      /",
    "       `----'",
  ];
  log.appendChild(el(`<div class="amber" style="white-space:pre;line-height:1.15">${cup.map(esc).join('\n')}</div>`));
  const row = el(`<div style="white-space:pre"><span class="muted">coffee.service: pulling shots </span><span class="amber" id="cbar"></span> <span class="green" id="cnt"></span></div>`);
  log.appendChild(row); scrollDown();
  const bar = row.querySelector('#cbar'), cnt = row.querySelector('#cnt');
  const CELLS = 24, DUR = 4200;                 // slow, smooth pour
  const draw = (e)=>{
    const filled = Math.round(e*CELLS);
    bar.textContent = '[' + '█'.repeat(filled) + '·'.repeat(CELLS-filled) + ']';
    cnt.textContent = Math.min(6, Math.floor(e*6 + 1e-6)) + '/6';
  };
  const done = ()=>{ draw(1); cnt.textContent='6/6';
    printOne('green','6 shots of espresso. no milk, no mercy. uptime secured.'); };
  if(reduceMotion){ done(); return; }
  const t0 = performance.now();
  (function tick(now){
    const p = Math.min(1, (now-t0)/DUR);
    const e = p<.5 ? 4*p*p*p : 1-Math.pow(-2*p+2,3)/2;   // easeInOutCubic
    draw(e);
    if(p<1) requestAnimationFrame(tick); else done();
  })(t0);
}
const noExit = ()=> printOne('cyan',"session lock disabled — you're stuck with me. try `contact` instead.");

/* ---------------- interactive toolkit (all client-side) ---------------- */
const ipToInt = ip => ip.split('.').reduce((a,o)=>((a<<8)+(+o))>>>0, 0)>>>0;
const intToIp = n => [24,16,8,0].map(s=>(n>>>s)&255).join('.');
function subnetCalc(arg){
  const m = (arg||'').match(/^(\d{1,3}(?:\.\d{1,3}){3})\/(\d{1,2})$/);
  if(!m){ printOne('amber','usage: subnet <ip>/<prefix>   e.g. subnet 192.168.1.0/24'); return; }
  const ip=m[1], p=+m[2], octs=ip.split('.').map(Number);
  if(octs.some(o=>o>255) || p>32){ printOne('red','subnet: invalid address or prefix.'); return; }
  const mask = p===0 ? 0 : (0xffffffff << (32-p))>>>0;
  const net = (ipToInt(ip) & mask)>>>0;
  const bcast = (net | (~mask>>>0))>>>0;
  const usable = p>=31 ? (p===32?1:2) : (bcast-net-1);
  const firstH = p>=31 ? net : net+1, lastH = p>=31 ? bcast : bcast-1;
  cascadeLines([
    ['cyan',`// subnet ${ip}/${p}`],
    ['muted',`network ....... ${intToIp(net)}`],
    ['muted',`broadcast ..... ${intToIp(bcast)}`],
    ['muted',`netmask ....... ${intToIp(mask)}`],
    ['muted',`wildcard ...... ${intToIp(~mask>>>0)}`],
    ['muted',`host range .... ${intToIp(firstH)} - ${intToIp(lastH)}`],
    ['green',`usable hosts .. ${usable.toLocaleString()}`],
  ]);
}
async function hashTool(arg){
  if(!arg){ printOne('amber','usage: hash <text>'); return; }
  try{
    const enc = new TextEncoder().encode(arg);
    const hex = b => [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
    const s256 = hex(await crypto.subtle.digest('SHA-256', enc));
    const s1   = hex(await crypto.subtle.digest('SHA-1', enc));
    cascadeLines([
      ['cyan',`// hash "${arg.length>40?arg.slice(0,40)+'…':arg}"`],
      ['muted',`sha-256  ${s256}`],
      ['muted',`sha-1    ${s1}`],
    ]);
  }catch(e){ printOne('red','hash: unavailable in this context.'); }
}
function base64Tool(arg){
  arg = arg||''; let dec=false;
  if(arg.startsWith('-d ')){ dec=true; arg=arg.slice(3).trim(); }
  if(!arg){ printOne('amber','usage: base64 <text>   |   base64 -d <base64>'); return; }
  try{
    const out = dec ? decodeURIComponent(escape(atob(arg)))
                    : btoa(unescape(encodeURIComponent(arg)));
    cascadeLines([['cyan', dec?'// base64 decode':'// base64 encode'], ['green', out]]);
  }catch(e){ printOne('red','base64: invalid input.'); }
}
function humanTime(s){
  if(!isFinite(s) || s>3.15e16) return 'centuries';
  if(s<1) return 'instant';
  for(const [n,v] of [['year',31536000],['day',86400],['hour',3600],['minute',60],['second',1]]){
    if(s>=v){ const x=s/v; return (x>1e6 ? x.toExponential(1) : Math.round(x).toLocaleString())+' '+n+(Math.round(x)!==1?'s':''); }
  }
  return 'instant';
}
function passTool(arg){
  if(!arg){ printOne('amber','usage: passcheck <password>   (runs locally — nothing is sent)'); return; }
  let pool=0;
  if(/[a-z]/.test(arg)) pool+=26;
  if(/[A-Z]/.test(arg)) pool+=26;
  if(/[0-9]/.test(arg)) pool+=10;
  if(/[^A-Za-z0-9]/.test(arg)) pool+=33;
  const bits = Math.round(arg.length * Math.log2(pool||1));
  const secs = Math.pow(pool||1, arg.length) / 2 / 1e10;   // ~10B guesses/sec offline
  const v = bits<40?['red','weak']:bits<60?['amber','fair']:bits<80?['green','strong']:['green','very strong'];
  cascadeLines([
    ['cyan',`// passcheck (${arg.length} chars · local only)`],
    ['muted',`charset pool ... ${pool}`],
    ['muted',`entropy ....... ~${bits} bits`],
    ['muted',`est. crack .... ${humanTime(secs)}`],
    [v[0],   `verdict ....... ${v[1]}`],
  ]);
}
const PORTS={20:'ftp-data',21:'ftp',22:'ssh',23:'telnet',25:'smtp',53:'dns',67:'dhcp',68:'dhcp',80:'http',110:'pop3',123:'ntp',143:'imap',161:'snmp',389:'ldap',443:'https',445:'smb',465:'smtps',514:'syslog',587:'smtp-submission',636:'ldaps',993:'imaps',995:'pop3s',1433:'mssql',1521:'oracle',3306:'mysql',3389:'rdp',5432:'postgresql',5900:'vnc',6379:'redis',8080:'http-alt',8291:'winbox',8443:'https-alt',27017:'mongodb'};
function portTool(arg){
  arg=(arg||'').trim();
  if(!arg){ printOne('amber','usage: port <number>   e.g. port 443'); return; }
  const n=+arg;
  if(Number.isInteger(n) && PORTS[n]){ printOne('green',`port ${n}/tcp → ${PORTS[n]}`); }
  else if(Number.isInteger(n) && n>=0 && n<=65535){ printOne('muted',`port ${n} → no well-known service (user/ephemeral range).`); }
  else {
    const hit=Object.entries(PORTS).filter(([k,v])=>v.includes(arg.toLowerCase()));
    if(hit.length) cascadeLines(hit.map(([k,v])=>['green',`${v} → ${k}/tcp`]));
    else printOne('red','port: not found. try a number like 443.');
  }
}
function uuidTool(){
  const u = (crypto.randomUUID ? crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c=>{
        const r=crypto.getRandomValues(new Uint8Array(1))[0]%16, v=c==='x'?r:(r&0x3|0x8); return v.toString(16); }));
  printOne('green', u);
}
function epochTool(arg){
  arg=(arg||'').trim();
  if(!arg){
    const now=Math.floor(Date.now()/1000);
    cascadeLines([['cyan','// epoch (now)'],['green',`unix ..... ${now}`],
      ['muted',`utc ...... ${new Date().toUTCString()}`],['muted',`local .... ${new Date().toString()}`]]);
    return;
  }
  const n=Number(arg);
  if(!isNaN(n)){
    const d=new Date(n>1e12 ? n : n*1000);   // accept seconds or milliseconds
    if(isNaN(d.getTime())){ printOne('red','epoch: invalid timestamp.'); return; }
    cascadeLines([['cyan',`// epoch ${arg}`],['muted',`utc ...... ${d.toUTCString()}`],['muted',`local .... ${d.toString()}`]]);
  } else printOne('amber','usage: epoch            (now)\n       epoch <seconds>  (convert a timestamp)');
}
function genpassTool(arg){
  let len=parseInt(arg,10); if(!len||len<8) len=20; if(len>128) len=128;
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%^&*-_=+?";
  const a=new Uint32Array(len); crypto.getRandomValues(a);
  let out=''; for(let i=0;i<len;i++) out+=chars[a[i]%chars.length];
  cascadeLines([['cyan',`// genpass (${len} chars)`],['green',out],['muted','generated locally with crypto.getRandomValues']]);
}
function macTool(arg){
  const clean=(arg||'').trim().replace(/[:\-.\s]/g,'').toLowerCase();
  if(!/^[0-9a-f]{12}$/.test(clean)){ printOne('amber','usage: mac <address>   e.g. mac 00:1A:2B:3C:4D:5E'); return; }
  const pretty=clean.match(/.{2}/g).join(':'), fb=parseInt(clean.slice(0,2),16);
  cascadeLines([
    ['cyan',`// mac ${pretty}`],
    ['muted',`oui ........ ${clean.slice(0,6).match(/.{2}/g).join(':')}`],
    ['muted',`cast ....... ${(fb&1)?'multicast':'unicast'}`],
    ['muted',`address .... ${(fb&2)?'locally administered':'globally unique (OUI-assigned)'}`],
  ]);
}
/* safe arithmetic evaluator — recursive descent, no eval or dynamic code,
   so the page runs under a CSP that forbids 'unsafe-eval'. */
function safeCalc(expr){
  const toks = expr.match(/\d+\.?\d*|\.\d+|[-+*/%()]/g);
  if(!toks) throw 0;
  let i=0; const peek=()=>toks[i], next=()=>toks[i++];
  function sum(){ let v=term(); while(peek()==='+'||peek()==='-'){ const o=next(), r=term(); v=o==='+'?v+r:v-r; } return v; }
  function term(){ let v=fac(); while(peek()==='*'||peek()==='/'||peek()==='%'){ const o=next(), r=fac(); v=o==='*'?v*r:o==='/'?v/r:v%r; } return v; }
  function fac(){
    if(peek()==='-'){ next(); return -fac(); }
    if(peek()==='+'){ next(); return fac(); }
    if(peek()==='('){ next(); const v=sum(); if(next()!==')') throw 0; return v; }
    const t=next(); const n=parseFloat(t); if(t===undefined || isNaN(n)) throw 0; return n;
  }
  const r=sum(); if(i!==toks.length) throw 0; return r;
}
function calcTool(arg){
  arg=(arg||'').trim();
  if(!arg){ printOne('amber','usage: calc <expression>   e.g. calc (1024*8)/1000'); return; }
  if(!/^[-+*/%.()0-9\s]+$/.test(arg)){ printOne('red','calc: only numbers and + - * / % ( ) allowed.'); return; }
  try{ const r=safeCalc(arg);
    if(typeof r!=='number' || !isFinite(r)){ printOne('red','calc: invalid expression.'); return; }
    cascadeLines([['cyan',`// calc ${arg}`],['green',String(r)]]);
  }catch(e){ printOne('red','calc: invalid expression.'); }
}
function colorTool(arg){
  arg=(arg||'').trim(); let hex=null;
  let m=arg.match(/^#?([0-9a-fA-F]{6})$/), s=arg.match(/^#?([0-9a-fA-F]{3})$/);
  if(m) hex='#'+m[1].toLowerCase();
  else if(s) hex='#'+s[1].split('').map(x=>x+x).join('').toLowerCase();
  if(!hex){ printOne('amber','usage: color <hex>   e.g. color #38e8ff'); return; }
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  const rn=r/255,gn=g/255,bn=b/255, mx=Math.max(rn,gn,bn), mn=Math.min(rn,gn,bn);
  let h=0,sl=0,l=(mx+mn)/2;
  if(mx!==mn){ const d=mx-mn; sl=l>0.5?d/(2-mx-mn):d/(mx+mn);
    h=mx===rn?(gn-bn)/d+(gn<bn?6:0):mx===gn?(bn-rn)/d+2:(rn-gn)/d+4; h*=60; }
  const swatch=`<span style="display:inline-block;width:54px;height:14px;border-radius:3px;background:${hex};border:1px solid #ffffff22;vertical-align:middle;margin-left:8px"></span>`;
  log.appendChild(el(`<div class="opsline"><span class="cyan">// color ${esc(hex)}</span>${swatch}</div>`));
  cascadeLines([
    ['muted',`hex .... ${hex}`],
    ['muted',`rgb .... rgb(${r}, ${g}, ${b})`],
    ['muted',`hsl .... hsl(${Math.round(h)}, ${Math.round(sl*100)}%, ${Math.round(l*100)}%)`],
  ]);
}
const MORSE={a:'.-',b:'-...',c:'-.-.',d:'-..',e:'.',f:'..-.',g:'--.',h:'....',i:'..',j:'.---',k:'-.-',l:'.-..',m:'--',n:'-.',o:'---',p:'.--.',q:'--.-',r:'.-.',s:'...',t:'-',u:'..-',v:'...-',w:'.--',x:'-..-',y:'-.--',z:'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',' ':'/'};
function morseTool(arg){
  arg=(arg||'').trim();
  if(!arg){ printOne('amber','usage: morse <text>'); return; }
  const out=arg.toLowerCase().split('').map(c=>MORSE[c]||'').filter(Boolean).join(' ');
  cascadeLines([['cyan',`// morse "${arg.length>40?arg.slice(0,40)+'…':arg}"`],['green',out||'(nothing encodable)']]);
}
function cronTool(arg){
  arg=(arg||'').trim().replace(/^["']|["']$/g,'');
  const f=arg.split(/\s+/);
  if(f.length!==5){ printOne('amber','usage: cron "<min> <hour> <dom> <month> <dow>"   e.g. cron "0 9 * * 1-5"'); return; }
  const [mi,ho,dom,mo,dow]=f;
  const DOW=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const MON=['','January','February','March','April','May','June','July','August','September','October','November','December'];
  let time;
  if(mi==='*'&&ho==='*') time='every minute';
  else if(/^\*\/\d+$/.test(mi)&&ho==='*') time=`every ${mi.split('/')[1]} minutes`;
  else if(/^\d+$/.test(mi)&&ho==='*') time=`at ${mi} min past every hour`;
  else if(/^\d+$/.test(mi)&&/^\d+$/.test(ho)) time=`at ${String(ho).padStart(2,'0')}:${String(mi).padStart(2,'0')}`;
  else time=`min=${mi} hour=${ho}`;
  const dowName=x=>x.split(',').map(p=>{ const rm=p.match(/^(\d)-(\d)$/); if(rm) return DOW[+rm[1]%7]+'-'+DOW[+rm[2]%7]; return /^\d$/.test(p)?DOW[+p%7]:p; }).join(', ');
  let day;
  if(dom==='*'&&dow==='*'&&mo==='*') day='every day';
  else { const parts=[];
    if(dow!=='*') parts.push(dowName(dow));
    if(dom!=='*') parts.push('day '+dom+' of the month');
    if(mo!=='*') parts.push('in '+(/^\d+$/.test(mo)?MON[+mo]:mo));
    day=parts.join(', ')||'every day'; }
  cascadeLines([
    ['cyan',`// cron  ${arg}`],
    ['muted',`minute ${mi} · hour ${ho} · dom ${dom} · month ${mo} · dow ${dow}`],
    ['green',`runs ${time}, ${day}`],
  ]);
}
function cowsayTool(arg){
  const text=((arg||'').trim()||'hire craig').slice(0,40);
  const cow=[
    ' '+'_'.repeat(text.length+2),
    `< ${text} >`,
    ' '+'-'.repeat(text.length+2),
    '        \\   ^__^',
    '         \\  (oo)\\_______',
    '            (__)\\       )\\/\\',
    '                ||----w |',
    '                ||     ||',
  ];
  log.appendChild(el(`<div class="green" style="white-space:pre;line-height:1.15">${cow.map(esc).join('\n')}</div>`));
  scrollDown();
}
function renderTools(){
  cascadeLines([
    ['cyan','// toolkit — live utilities (run right here, client-side)'],
    ['amber','  network'],
    ['muted','subnet <ip>/<prefix>    CIDR / subnet calculator'],
    ['muted','mac <address>           MAC / OUI analysis'],
    ['muted','port <number>           well-known port lookup'],
    ['amber','  crypto & encode'],
    ['muted','hash <text>             sha-256 + sha-1 digest'],
    ['muted','base64 <text>           encode  ·  base64 -d to decode'],
    ['muted','passcheck <password>    entropy + crack-time estimate'],
    ['muted','genpass [length]        secure random password'],
    ['muted','morse <text>            morse encode'],
    ['amber','  dev & sysadmin'],
    ['muted','uuid                    generate a v4 UUID'],
    ['muted','epoch [seconds]         unix time now, or convert'],
    ['muted','cron "<expr>"           explain a cron schedule'],
    ['muted','calc <expr>             quick calculator'],
    ['muted','color <hex>             swatch + rgb/hsl'],
    ['amber','  fun'],
    ['muted','cowsay <text>           ascii cow'],
    ['green','try:  cron "0 9 * * 1-5"'],
  ]);
}
const TOOLS = {
  subnet: subnetCalc, cidr: subnetCalc,
  hash: hashTool,
  base64: base64Tool, b64: base64Tool,
  passcheck: passTool, pass: passTool,
  genpass: genpassTool, genpw: genpassTool,
  port: portTool,
  uuid: uuidTool, guid: uuidTool,
  epoch: epochTool, unix: epochTool,
  mac: macTool,
  calc: calcTool, color: colorTool, hex: colorTool,
  morse: morseTool, cron: cronTool, crontab: cronTool,
  cowsay: cowsayTool,
  ls: cmdLs, cd: cmdCd, cat: cmdCat,
  ssh: sshRun, tail: tailRun, sudo: sudoRun, 'mikrotik-export': mikrotikExport,
  echo: echoRun, grep: grepRun, man: manRun, uname: unameRun, rm: rmTool,
};

/* keystroke-monitoring awareness demo — consensual, sandboxed, nothing stored or sent.
   This is a defensive/educational visualization, NOT functional malware: it captures
   only the labeled box below, never the page or system, and transmits nothing. */
/* Interactive phishing case study — "spot the phish" on a real lure I built,
   then the real campaign results. On-theme defensive/blue-team piece. */
function renderCaseStudy(){
  const TOTAL = 6;
  const b = el(`
    <h2 class="section" data-scramble>// casestudy — phishing campaign</h2>
    <div class="kl-warn">a real credential-harvest lure i built &amp; sent. spot the red flags — click the suspicious parts below. (${TOTAL} to find)</div>
    <div class="ph-mail">
      <div class="ph-head">
        <div><span class="ph-k">from</span> <span class="flag" data-why="External look-alike sender — 'hr-rewards-portal.com' is not your real corporate domain.">HR &lt;no-reply@hr-rewards-portal.com&gt;</span></div>
        <div><span class="ph-k">subject</span> You've been selected — confirm to claim your reward</div>
      </div>
      <div class="ph-body">
        Dear Colleague,<br><br>
        You're one of a <span class="flag" data-why="Flattery, exclusivity and secrecy — 'specially chosen, don't tell anyone yet' is engineered to lower your guard.">small group of employees identified this quarter for early recognition</span> — this hasn't gone out company-wide yet.<br><br>
        This quarter's recognition free prize: <span class="flag" data-why="Too-good-to-be-true reward — a free high-value prize is classic bait.">iPhone 18 Pro Max</span><br><br>
        Please confirm and verify your details <span class="flag" data-why="Credential harvest — no legitimate process asks you to enter your company password through an email link.">using your company credentials</span> <span class="flag" data-why="Artificial urgency — a tight deadline pressures you to act before you stop to think.">by Wednesday 5:00 PM</span> to secure your place.<br><br>
        <span class="flag flag-link" data-why="Mismatched link — the button text says one thing, the real URL points somewhere else. Always hover to check the destination before clicking.">Verify &amp; Claim My Prize</span><br><br>
        Thank you for being part of the [Company] team.<br>
        HR — Employee Engagement Team
      </div>
    </div>
    <div class="ph-count" id="phcount">found 0 / ${TOTAL}</div>
    <div id="phfind"></div>
    <button class="ph-btn" id="phreveal" type="button">reveal campaign results →</button>
  `);
  log.appendChild(b); wireScramble(b);
  typeRich(b.querySelector('.ph-mail'), 5);   // type the lure out like the about page
  const count=b.querySelector('#phcount'), find=b.querySelector('#phfind');
  let found=0, shown=false;
  function revealResults(){
    if(shown) return; shown=true;
    b.querySelector('#phreveal').style.display='none';
    cascadeLines([
      ['amber','// campaign results — the real numbers'],
      ['muted','built & sent this as a pilot credential-harvest simulation in Microsoft Defender Attack Simulation Training'],
      ['muted','timed a few days before the iPhone 18 Pro Max launch — the "free prize" lure was topical, which is exactly why it landed'],
      ['muted','pilot group of 12 · 10 opened · 2 clicked · 1 entered credentials · 0 reported'],
      ['muted','first click landed in under 18 minutes'],
      ['green','key finding: 0% report rate → nobody flagged it. that reporting gap was the real risk, not the 1 click.'],
      ['amber','// what i did about it'],
      ['muted','handled it as a learning opportunity, not a gotcha'],
      ['muted','reached out privately to both users who clicked — walked them through the red flags and how to spot and report the next one'],
    ]);
  }
  b.addEventListener('click', e=>{
    e.stopPropagation();
    const f=e.target.closest('.flag');
    if(f && !f.classList.contains('found')){
      f.classList.add('found'); found++;
      count.textContent=`found ${found} / ${TOTAL}`;
      const line=document.createElement('div'); line.className='ph-find';
      line.innerHTML=`<span class="red">⚑</span> <span class="muted">${esc(f.dataset.why)}</span>`;
      find.appendChild(line); scrollDown();
      if(found===TOTAL){
        const w=document.createElement('div'); w.className='ph-find';
        w.innerHTML='<span class="green">nice — you caught every one.</span>';
        find.appendChild(w); revealResults();
      }
    }
  });
  b.querySelector('#phreveal').addEventListener('click', ()=> revealResults());
  scrollDown();
}

/* ---------------- home-lab network topology (interactive map) ----------------
   This is Constantinos's own self-hosted lab — all personal kit, nothing from
   an employer. Edit any spec below freely.
   Each node: { x, y, w, label, kind, badge?, lines:[...] }
   kind drives the colour:  wan | core | vlan | asset                       */
const TOPO_NODES = {
  internet:{ x:385, y:46,  w:160, label:'Home ISP uplink',      kind:'wan',  badge:'WAN',
    lines:['Single internet feed into the lab.','Everything downstream is segmented & firewalled.'] },
  fw:{       x:320, y:140, w:290, label:'Protectli FW4B · OPNsense', kind:'core',
    lines:['Edge firewall & router.','Routing, NAT, DHCP/DNS, VLAN tagging.','Segments the whole lab into isolated zones.'] },
  sw:{       x:340, y:232, w:250, label:'MikroTik CSS610-8G-2S+IN', kind:'core',
    lines:['Managed L2 switch.','802.1Q VLAN trunking to every zone.','2× SFP+ for 10G uplinks.'] },
  vmgmt:{    x:70,  y:326, w:170, label:'Management VLAN',       kind:'vlan',
    lines:['Switch & firewall admin only.','Isolated out-of-band access.'] },
  vlab:{     x:270, y:326, w:170, label:'Lab / servers VLAN',    kind:'vlan',
    lines:['Proxmox host + Kubernetes nodes.','Where the real workloads run.'] },
  poe:{      x:500, y:326, w:210, label:'PoE switch (managed)',  kind:'core', badge:'PoE',
    lines:['Small managed PoE switch, uplinked to the core switch.','Powers the cameras and the AP over Ethernet.','VLAN-aware — keeps each device on its own segment.'] },
  nas:{      x:70,  y:420, w:170, label:'Synology NAS',          kind:'asset',
    lines:['Synology with WD enterprise drives.','Storage, backups & Proxmox snapshots.','Runs Surveillance Station (NVR) for the cameras.'] },
  proxmox:{  x:270, y:420, w:170, label:'Proxmox VE host',       kind:'asset',
    lines:['Repurposed old laptop running Proxmox VE.','Bare-metal hypervisor — virtualises the 5-node K8s cluster.','Snapshots to the NAS; the battery doubles as a built-in UPS.'] },
  cameras:{  x:470, y:420, w:150, label:'Security cameras',      kind:'asset',
    lines:['2 PoE cameras on the isolated camera VLAN.','Record to Surveillance Station on the Synology.','No route to the internet.'] },
  ap:{       x:630, y:420, w:160, label:'TP-Link Omada AP',      kind:'core', badge:'Wi-Fi',
    lines:['Omada access point, PoE-powered from the PoE switch.','Broadcasts a home SSID and a guest SSID,','each tagged to its own VLAN.'] },
  k8s:{      x:250, y:514, w:210, label:'Kubernetes cluster',    kind:'asset', badge:'5 nodes',
    lines:['5-node cluster on the Proxmox host.','Helm-managed workloads.'] },
  home:{     x:590, y:514, w:120, label:'My devices',            kind:'asset',
    lines:['Laptops & phones on the home SSID.','Trusted VLAN.'] },
  guest:{    x:720, y:514, w:120, label:'Visitors',              kind:'asset',
    lines:['Guest SSID on an isolated VLAN.','Internet access only — no route to internal VLANs.'] },
  mon:{      x:250, y:600, w:210, label:'kube-prometheus-stack', kind:'asset', badge:'monitoring',
    lines:['Prometheus · Alertmanager · node-exporter.','Grafana dashboards, metrics & alerting.'] },
};
const TOPO_EDGES = [
  ['internet','fw',1],['fw','sw',1],
  ['sw','vmgmt',1],['sw','vlab',1],['sw','poe',1],
  ['vmgmt','nas',1],['vlab','proxmox',1],
  ['poe','cameras',1],['poe','ap',1],
  ['proxmox','k8s',1],['k8s','mon',1],
  ['ap','home',1],['ap','guest',1],
];
function renderTopology(){
  const b = el(`
    <h2 class="section" data-scramble>// topology — my home lab</h2>
    <div class="muted" style="margin:2px 0 10px;font-size:12.5px">my home lab, designed end-to-end — routing, segmentation, virtualisation and monitoring. hover or tap any node to inspect it. <span class="green">solid green</span> = a link in the design.</div>
    <div class="topo-wrap">
      <div class="topo-stage" id="topostage"></div>
      <div class="topo-detail" id="topodetail"></div>
    </div>
  `);
  log.appendChild(b); wireScramble(b);
  const stage=b.querySelector('#topostage'), detail=b.querySelector('#topodetail');
  const KCOL={ wan:'var(--cyan)', core:'var(--green)', vlan:'var(--magenta)', asset:'var(--amber)', power:'var(--amber)' };
  const KLAB={ wan:'internet uplink', core:'core / routing', vlan:'network segment', asset:'host / workload', power:'power' };
  const H=46, cx=n=>n.x+n.w/2;
  let edges='';
  for(const [a,d,type] of TOPO_EDGES){
    const na=TOPO_NODES[a], nd=TOPO_NODES[d]; let x1,y1,x2,y2,path;
    if(type===2){ x1=na.x+na.w; y1=na.y+H/2; x2=nd.x; y2=nd.y+H/2; path=`M${x1} ${y1} L${x2} ${y2}`; }
    else { x1=cx(na); y1=na.y+H; x2=cx(nd); y2=nd.y; const m=(y1+y2)/2; path=`M${x1} ${y1} C ${x1} ${m}, ${x2} ${m}, ${x2} ${y2}`; }
    const cls=type===1?'tedge active':type===2?'tedge power':'tedge standby';
    edges+=`<path class="${cls}" d="${path}"></path>`;
  }
  let nodes='';
  for(const id in TOPO_NODES){
    const n=TOPO_NODES[id];
    const badge=n.badge?`<text class="tbadge" x="${n.x+n.w-9}" y="${n.y+H-7}" text-anchor="end">${esc(n.badge)}</text>`:'';
    nodes+=`<g class="tnode" data-id="${id}" tabindex="0" role="button" aria-label="${esc(n.label)}" style="--tc:${KCOL[n.kind]}">
      <rect x="${n.x}" y="${n.y}" width="${n.w}" height="${H}" rx="7"></rect>
      <circle class="tdot" cx="${n.x+12}" cy="${n.y+13}" r="3"></circle>
      <text class="tlabel" x="${cx(n)}" y="${n.y+H/2+5}" text-anchor="middle">${esc(n.label)}</text>${badge}
    </g>`;
  }
  stage.innerHTML=`<svg viewBox="0 0 920 660" class="topo-svg" role="img" aria-label="Home lab network topology diagram">${edges}${nodes}</svg>`;
  function show(id){
    const n=TOPO_NODES[id]; if(!n) return;
    stage.querySelectorAll('.tnode').forEach(g=> g.classList.toggle('sel', g.dataset.id===id));
    detail.innerHTML=`<div class="td-tag" style="color:${KCOL[n.kind]};border-color:${KCOL[n.kind]}">${esc(KLAB[n.kind])}</div>
      <h3 style="color:${KCOL[n.kind]}">${esc(n.label)}</h3>
      <ul>${n.lines.map(l=>`<li>${esc(l)}</li>`).join('')}</ul>`;
    stagger(detail,'li',0.05,0,'softfade');
  }
  detail.innerHTML=`<div class="td-empty">// select a node to read its role in the stack</div>`;
  stage.querySelectorAll('.tnode').forEach(g=>{
    const id=g.dataset.id, lbl=g.querySelector('.tlabel');
    g.addEventListener('mouseenter', ()=>{ scramble(lbl); show(id); });
    g.addEventListener('click', ()=> show(id));
    g.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); show(id); } });
  });
  scrollDown();
}

/* ---------------- explorable filesystem (ls / cd / cat / tree) ---------------- */
const FS = { home:{t:'d',c:{ craig:{t:'d',c:{
  'readme.txt':{t:'f',x:"Constantinos Craig — IT Operations Engineer\n\nYou're poking around the filesystem. Nice instinct.\nTry: ls, ls -la, cd /, cat /etc/motd, tree, grep, man ls\nHidden files exist — ls -a reveals them. Curiosity is the right instinct."},
  'contact.txt':{t:'f',x:"email      constantinoscraig@gmail.com\nlinkedin   linkedin.com/in/constantinoscraig\nlocation   Lubbock, TX"},
  projects:{t:'d',c:{
    'car-rental.md':{t:'f',x:"# Car Rental IT & Surveillance — Lubbock, TX (2024)\nVPN tunnel (site<->home), Hikvision NVR on a Proxmox VM, VLAN-isolated\ncameras, Synology NAS, UPS, dynamic DNS. The build that moved me into IT."},
    'enterprise-floor.md':{t:'f',x:"# Enterprise Floor Build-out — Athens (2025)\nPart of the team that stood up a 149-workstation floor + server room.\nHardware, cabling, endpoint installs, network validation, access control."},
  }},
  certs:{t:'d',c:{
    'security-plus.txt':{t:'f',x:"CompTIA Security+  —  2024"},
    'isc2-cc.txt':{t:'f',x:"ISC2 Certified in Cybersecurity (CC)  —  2024"},
    'google-cyber.txt':{t:'f',x:"Google Cybersecurity Certificate  —  2024"},
    'google-it.txt':{t:'f',x:"Google IT Support Certificate  —  2024"},
    'htb.txt':{t:'f',x:"HTB CJCA  ->  CDSA  (in progress, defensive-analyst path)"},
  }},
  scripts:{t:'d',c:{
    'nas-backup.sh':{t:'f',x:"#!/bin/bash\n# nightly vessel NAS snapshot\nrsync -a --delete /data /mnt/nas/snap/$(date +%F)\nfind /mnt/nas/snap -mtime +30 -delete"},
    'defender-check.ps1':{t:'f',x:"# verify critical CVE remediation across endpoints\nGet-MpThreatDetection | Where-Object {$_.ThreatStatusID -ne 'Resolved'}"},
  }},
  '.bash_history':{t:'f',x:"ssh noc-jump\ntail -f /var/log/ops.log\nsudo pacman -Syu\nmikrotik-export > backup.rsc\nsudo hire-craig"},
  '.flag':{t:'f',x:"you read the hidden files. that's exactly the mindset this role needs.\nnow run:  sudo hire-craig"},
}}}},
  etc:{t:'d',c:{
    motd:{t:'f',x:"=== portfolio ===\nAuthorized use only. All activity on this host is logged.\n(Friendly note: this is Constantinos's portfolio box — poke around, be nice.)"},
    hostname:{t:'f',x:"portfolio"},
    'os-release':{t:'f',x:"NAME=\"Arch Linux\"\nPRETTY_NAME=\"Arch Linux\"\nID=arch\nBUILD_ID=rolling\nHOME_URL=\"https://craigsec.github.io\""},
  }},
  var:{t:'d',c:{
    log:{t:'d',c:{
      'ops.log':{t:'f',x:"2026-10-17 06:12:04  intune    device-health report generated (all compliant)\n2026-10-17 06:30:11  m365      mailflow OK — 0 messages queued\n2026-10-17 07:02:55  mikrotik  vlan20 link up (sat-primary)\n2026-10-17 07:03:01  wan       failover armed: oneweb -> fleetxpress -> starlink -> 5g\n2026-10-17 08:15:42  defender  TVM scan complete — no critical findings\n2026-10-17 09:40:18  backup    nas snapshot ok (retention 30d)"},
    }},
  }},
};
let cwd=['home','craig'];
function fsNode(parts){ let node={t:'d',c:FS}; for(const p of parts){ if(node.t!=='d'||!node.c[p]) return null; node=node.c[p]; } return node; }
function fsResolve(path){ let parts;
  if(path==='~') return ['home','craig'];
  if(!path) return cwd.slice();
  if(path.startsWith('/')) parts=path.split('/').filter(Boolean);
  else if(path.startsWith('~/')) parts=['home','craig',...path.slice(2).split('/').filter(Boolean)];
  else parts=[...cwd,...path.split('/').filter(Boolean)];
  const out=[]; for(const p of parts){ if(p==='.')continue; else if(p==='..')out.pop(); else out.push(p); } return out; }
function fsPath(parts){ if(parts[0]==='home'&&parts[1]==='craig'){ const r=parts.slice(2); return '~'+(r.length?'/'+r.join('/'):''); } return '/'+parts.join('/'); }
function promptText(){ return 'craig@portfolio:'+fsPath(cwd)+'$'; }
function updatePrompt(){ const ps=$('#inputline .ps2'); if(ps) ps.textContent=promptText(); }
function cmdLs(arg){
  const a=(arg||'').trim();
  const flagStr=(a.match(/(^|\s)-\S+/g)||[]).join('');
  const showAll=/a/.test(flagStr), longFmt=/l/.test(flagStr);
  const target=a.replace(/(^|\s)-\S+/g,'').trim();
  const parts=fsResolve(target); const node=fsNode(parts);
  if(!node){ printOne('red',`ls: cannot access '${esc(target)}': No such file or directory`); return; }
  if(node.t==='f'){ printOne('muted', esc(target)); return; }
  let names=Object.keys(node.c); if(!showAll) names=names.filter(n=>!n.startsWith('.'));
  names.sort((x,z)=>x.localeCompare(z));
  const isScript=n=>/\.(sh|ps1)$/.test(n);
  if(longFmt){
    const rows=names.map(n=>{ const ch=node.c[n]; const dir=ch.t==='d';
      const perm=dir?'drwxr-xr-x':(isScript(n)?'-rwxr-xr-x':'-rw-r--r--');
      const size=String(dir?4096:(ch.x?ch.x.length:0)).padStart(5);
      const cls=dir?'cyan':(isScript(n)?'green':'muted');
      return `${perm}  craig craig ${size}  <span class="${cls}">${esc(dir?n+'/':n)}</span>`; });
    printPre(`total ${names.length}\n`+rows.join('\n')); return;
  }
  const html=names.map(n=>{ const ch=node.c[n]; const cls=ch.t==='d'?'cyan':(isScript(n)?'green':'muted');
    return `<span class="${cls}" style="display:inline-block;margin:0 20px 2px 0">${esc(ch.t==='d'?n+'/':n)}</span>`; }).join('');
  log.appendChild(el(`<div style="line-height:1.8">${html}</div>`)); scrollDown(); }
function cmdCd(arg){ const t=(arg||'').trim()||'~'; const parts=fsResolve(t); const node=fsNode(parts);
  if(!node){ printOne('red',`cd: ${esc(t)}: no such file or directory`); return; }
  if(node.t!=='d'){ printOne('red',`cd: ${esc(t)}: not a directory`); return; }
  cwd=parts; updatePrompt(); }
function cmdCat(arg){ const t=(arg||'').trim(); if(!t){ printOne('amber','usage: cat <file>'); return; }
  const parts=fsResolve(t); const node=fsNode(parts);
  if(!node){ printOne('red',`cat: ${esc(t)}: no such file or directory`); return; }
  if(node.t==='d'){ printOne('red',`cat: ${esc(t)}: is a directory`); return; }
  log.appendChild(el(`<div class="muted" style="white-space:pre-wrap;overflow-wrap:anywhere">${esc(node.x)}</div>`)); scrollDown(); }
function cmdPwd(){ printOne('muted', fsPath(cwd)==='~' ? '/home/craig' : fsPath(cwd).replace(/^~/,'/home/craig')); }
function cmdTree(){ const node=fsNode(cwd), lines=[];
  (function walk(n,pre){ const names=Object.keys(n.c).sort((a,z)=>a.localeCompare(z));
    names.forEach((nm,i)=>{ const last=i===names.length-1, ch=n.c[nm];
      lines.push(pre+(last?'└─ ':'├─ ')+nm+(ch.t==='d'?'/':'')); if(ch.t==='d') walk(ch, pre+(last?'   ':'│  ')); }); })(node,'');
  log.appendChild(el(`<div class="muted" style="white-space:pre;line-height:1.5">${esc(fsPath(cwd)+'\n'+lines.join('\n'))}</div>`)); scrollDown(); }

/* ---------------- extra shell realism (all local, no network, output escaped) ----------------
   Everything here is a static readout or operates on the in-memory FS above.
   No fetch/XHR, no eval, no secrets — matches the page's locked-down CSP. */
function printPre(html){ log.appendChild(el(`<div class="muted" style="white-space:pre-wrap;line-height:1.55;overflow-wrap:anywhere">${html}</div>`)); scrollDown(); }
function absPwd(){ const p=fsPath(cwd); return p==='~' ? '/home/craig' : p.replace(/^~/,'/home/craig'); }
function expandVars(s){
  const map={ USER:'craig', LOGNAME:'craig', HOME:'/home/craig', SHELL:'/bin/bash', HOSTNAME:'portfolio',
    PWD:absPwd(), PATH:'/usr/local/sbin:/usr/local/bin:/usr/bin:/bin', LANG:'en_US.UTF-8', TERM:'xterm-256color' };
  return String(s)
    .replace(/\$\?/g,'0')
    .replace(/\$\{?(\w+)\}?/g,(m,k)=> k==='RANDOM'?String(Math.floor(Math.random()*32768)):(k in map?map[k]:m));
}
function envText(){ return ['USER=craig','LOGNAME=craig','HOME=/home/craig','SHELL=/bin/bash','HOSTNAME=portfolio',
  'PWD='+absPwd(),'PATH=/usr/local/sbin:/usr/local/bin:/usr/bin:/bin','LANG=en_US.UTF-8','TERM=xterm-256color'].join('\n'); }
function histText(){ return history.slice().reverse().map((c,i)=>String(i+1).padStart(4)+'  '+c).join('\n'); }

/* grep + the text-producing side of pipes */
function textOf(cmd){
  const c=cmd.trim(); const parts=c.split(/\s+/); const head=(parts[0]||'').toLowerCase(); const rest=c.slice(parts[0].length).trim();
  if(head==='cat'){ const n=fsNode(fsResolve(rest)); return (n&&n.t==='f')?n.x:null; }
  if(head==='ls'){ const tgt=rest.replace(/(^|\s)-\S+/g,'').trim(); const n=fsNode(fsResolve(tgt)); if(!n||n.t!=='d')return null;
    const all=/(^|\s)-\S*a/.test(rest); let ks=Object.keys(n.c); if(!all)ks=ks.filter(k=>!k.startsWith('.')); return ks.sort().join('\n'); }
  if(head==='history') return histText();
  if(head==='env') return envText();
  if(head==='echo') return expandVars(rest.replace(/^"([\s\S]*)"$/,'$1').replace(/^'([\s\S]*)'$/,'$1'));
  return null;
}
function highlight(line,pat,ci){
  if(!pat) return esc(line);
  let out='', i=0; const L=ci?line.toLowerCase():line, p=ci?pat.toLowerCase():pat;
  while(i<line.length){ const idx=L.indexOf(p,i); if(idx<0){ out+=esc(line.slice(i)); break; }
    out+=esc(line.slice(i,idx))+'<span class="green">'+esc(line.slice(idx,idx+pat.length))+'</span>'; i=idx+pat.length; }
  return out;
}
function printGrep(text, pat, ci){
  const hits=String(text).split('\n').filter(l=> (ci?l.toLowerCase():l).includes(ci?pat.toLowerCase():pat));
  if(!hits.length) return;              // grep is silent when nothing matches
  printPre(hits.map(l=>highlight(l,pat,ci)).join('\n'));
}
function grepRun(rest){
  const toks=(rest||'').trim().match(/(?:"[^"]*"|\S)+/g)||[];
  let ci=false; const args=[];
  toks.forEach(t=>{ if(t==='-i'||t==='-in'||t==='-ni'){ ci=true; } else args.push(t.replace(/^"|"$/g,'')); });
  const pat=args[0], file=args[1];
  if(pat===undefined||file===undefined){ printOne('amber','usage: grep [-i] <pattern> <file>   (or: cat <file> | grep <pattern>)'); return; }
  const n=fsNode(fsResolve(file));
  if(!n){ printOne('red',`grep: ${esc(file)}: No such file or directory`); return; }
  if(n.t==='d'){ printOne('red',`grep: ${esc(file)}: Is a directory`); return; }
  printGrep(n.x, pat, ci);
}

/* the four commands that were only decoration in .bash_history — now they do something */
function sshRun(rest){
  const host=(rest||'').trim().split(/\s+/)[0]||'';
  if(!host){ printOne('amber','usage: ssh <host>'); return; }
  const h=esc(host);
  printPre(
    `Connecting to <span class="cyan">${h}</span> (10.10.0.2:22)...\n`+
    `The authenticity of host '${h}' can't be established.\n`+
    `ED25519 key fingerprint is SHA256:9zQ4m2Xv+Kd1p8sJ0rN7bWqLtY3cF6eHgA5uI (match in known_hosts)\n`+
    `<span class="green">Authenticated with publickey.</span>\n`+
    `Last login: ${esc(new Date().toUTCString())} from 10.10.0.14\n`+
    `<span class="muted">────────────────────────────────────────────</span>\n`+
    `  <span class="cyan">${h}</span> · jump host · <span class="green">access logged</span>\n`+
    `<span class="muted">────────────────────────────────────────────</span>\n`+
    `craig@${h}:~$ <span class="muted">(static readout — no real connection is made)</span>`
  );
}
function tailRun(rest){
  const toks=(rest||'').trim().split(/\s+/).filter(Boolean);
  const follow=toks.includes('-f'); const file=toks.filter(t=>!t.startsWith('-')).pop();
  if(!file){ printOne('amber','usage: tail [-f] <file>'); return; }
  const n=fsNode(fsResolve(file));
  if(!n){ printOne('red',`tail: cannot open '${esc(file)}' for reading: No such file or directory`); return; }
  if(n.t==='d'){ printOne('red',`tail: error reading '${esc(file)}': Is a directory`); return; }
  let out=String(n.x).split('\n').slice(-10).map(esc).join('\n');
  if(follow){ out+=`\n<span class="muted">… following ${esc(file)} — static demo, no live tail</span>`; }
  printPre(out);
}
function pacmanRun(){
  printPre(
    `:: Synchronizing package databases...\n`+
    ` core         is up to date\n`+
    ` extra        is up to date\n`+
    ` community    is up to date\n`+
    `:: Starting full system upgrade...\n`+
    ` <span class="green">there is nothing to do</span> — system is current`
  );
}
function sudoRun(rest){
  const r=(rest||'').trim(); const h=(r.split(/\s+/)[0]||'').toLowerCase();
  if(!r){ printOne('amber','usage: sudo <command>   (try: sudo hire-craig)'); return; }
  if(h==='pacman'){ return pacmanRun(); }
  if(h==='hire-craig'){ return hireDino(); }
  if(h==='rm'){ return rmTool(r.replace(/^rm\b\s*/i,'')); }
  if(h==='apt'||h==='apt-get'||h==='yum'||h==='dnf'){ printPre(`<span class="muted">this box runs Arch — try:</span> sudo pacman -Syu`); return; }
  printPre(`[sudo] password for craig: <span class="muted">(demo — authentication skipped)</span>\nsudo: ${esc(r.split(/\s+/)[0])}: command not found`);
}
function mikrotikExport(rest){
  const exportText =
`# ${new Date().toISOString().slice(0,10)} RouterOS 7.16 on CRS610 (EVO)
# sensitive values (passwords, PSKs, SNMP communities) are NOT exported
/interface bridge
add name=bridge-core vlan-filtering=yes
/interface vlan
add interface=bridge-core name=vlan10 vlan-id=10
add interface=bridge-core name=vlan20 vlan-id=20
/ip address
add address=10.10.10.1/24 interface=vlan10
add address=10.10.20.1/24 interface=vlan20
/ip firewall filter
add chain=forward action=drop comment="deny inter-VLAN by default"
/snmp
set enabled=yes contact=craig
/system identity
set name=core-rtr`;
  const m=(rest||'').trim().match(/>\s*([A-Za-z0-9._-]+)/);
  if(m){
    const fname=m[1]; const node=fsNode(cwd);
    if(node&&node.t==='d'){ node.c[fname]={t:'f',x:exportText}; }
    printPre(`<span class="muted"># configuration exported to</span> <span class="green">${esc(fname)}</span> <span class="muted">— open it with</span> cat ${esc(fname)}`);
  } else { printPre(esc(exportText)); }
}
function echoRun(rest){
  const s=(rest||'').replace(/^"([\s\S]*)"$/,'$1').replace(/^'([\s\S]*)'$/,'$1');
  printOne('muted', expandVars(s));
}
function unameRun(rest){
  const a=/(^|\s)-a\b/.test(rest||'');
  printOne('muted', a ? 'Linux portfolio 6.9.0-craig #1 SMP PREEMPT x86_64 GNU/Linux' : 'Linux');
}
function idCmd(){ printOne('muted','uid=1000(craig) gid=1000(craig) groups=1000(craig),10(wheel),998(network)'); }
function envCmd(){ printPre(esc(envText())); }
function historyCmd(){ printPre(esc(histText())); }
const MANPAGES={
  ls:"LS(1)\n\nNAME\n    ls — list directory contents\n\nSYNOPSIS\n    ls [-a] [-l] [path]\n\nDESCRIPTION\n    Lists files. -a also shows hidden dotfiles; -l uses the long format.",
  cd:"CD(1)\n\nNAME\n    cd — change the working directory\n\nSYNOPSIS\n    cd [path]\n\nDESCRIPTION\n    Move around: cd /, cd .., cd ~, cd projects, cd /var/log.",
  cat:"CAT(1)\n\nNAME\n    cat — print a file to the screen\n\nSYNOPSIS\n    cat <file>",
  grep:"GREP(1)\n\nNAME\n    grep — search text for a pattern\n\nSYNOPSIS\n    grep [-i] <pattern> <file>\n    <command> | grep <pattern>\n\nDESCRIPTION\n    Prints matching lines; -i ignores case. Works after a pipe from cat, ls, history, echo or env.",
  ssh:"SSH(1)\n\nNAME\n    ssh — (demo) open a shell on a remote host\n\nSYNOPSIS\n    ssh <host>",
  tail:"TAIL(1)\n\nNAME\n    tail — show the end of a file\n\nSYNOPSIS\n    tail [-f] <file>",
  echo:"ECHO(1)\n\nNAME\n    echo — print a line of text\n\nSYNOPSIS\n    echo <text>\n\nDESCRIPTION\n    Expands variables: $USER $HOME $PWD $SHELL $HOSTNAME $PATH.",
  history:"HISTORY(1)\n\nNAME\n    history — show the commands you have run\n\nSYNOPSIS\n    history\n\nDESCRIPTION\n    Tip: !! repeats your last command.",
  "mikrotik-export":"MIKROTIK-EXPORT(1)\n\nNAME\n    mikrotik-export — (demo) export a RouterOS config\n\nSYNOPSIS\n    mikrotik-export [> file]\n\nDESCRIPTION\n    Prints a sanitized config; with > file it saves to that file. Secrets are never exported.",
  pacman:"PACMAN(8)\n\nNAME\n    pacman — package manager\n\nSYNOPSIS\n    sudo pacman -Syu",
  resume:"RESUME(1)\n\nNAME\n    resume — view or download my resume (PDF)\n\nSYNOPSIS\n    resume",
};
function manRun(rest){
  const name=(rest||'').trim().split(/\s+/)[0]||'';
  if(!name){ printOne('amber','What manual page do you want?  e.g. man ls'); return; }
  const k=name.toLowerCase();
  if(MANPAGES[k]){ printPre(esc(MANPAGES[k])); } else { printOne('red',`No manual entry for ${esc(name)}`); }
}
/* `sudo rm -rf /` easter egg — a funny "deletion" readout, a glitch, then a reboot.
   Nothing is actually deleted (the FS is in-memory and untouched); no network, no eval. */
function rmTool(rest){
  const r=rest||''; const flags=(r.match(/-\S+/g)||[]).join('').toLowerCase();
  const recursive=/r/.test(flags)||/--recursive/.test(r);
  const force=/f/.test(flags)||/--force/.test(r);
  if(recursive&&force) return rmRf();
  printOne('muted','rm: this filesystem is read-only — nothing can actually be deleted (static site).');
}
function rmRf(){
  const gen=animGen;
  try{ log.innerHTML=''; pinnedTop=null; }catch(e){}
  const seq=[
    ['red',   "rm: it is dangerous to operate recursively on '/'"],
    ['red',   "rm: ...doing it anyway. hold my coffee."],
    ['muted', ""],
    ['green', "removing /bin .............................. done"],
    ['green', "removing /etc .............................. done"],
    ['green', "removing /home/craig/retail_career ......... done"],
    ['green', "removing /home/craig/impostor_syndrome ..... done"],
    ['green', "removing /var/log/evidence ................. done"],
    ['amber', "removing /dev/null ......................... wait, that's not how this works"],
    ['muted', ""],
    ['red',   "SYSTEM INTEGRITY ................ 0%"],
    ['muted', ""],
    ['cyan',  "just kidding. nothing here can actually be deleted."],
    ['muted', "(it's a static site — your machine is safe, and so is mine.)"],
    ['amber', "rebooting"],
  ];
  let i=0;
  (function next(){
    if(gen!==animGen) return;                 // a new command took over — abort
    if(i<seq.length){ const row=seq[i++]; printOne(row[0], row[1]); setTimeout(next, reduceMotion?45:190); return; }
    if(reduceMotion){ setTimeout(()=>{ if(gen===animGen) runBoot(); }, 500); return; }
    glitchThenReboot(gen);
  })();
}
function glitchThenReboot(gen){
  const ov=document.createElement('div'); ov.className='rm-glitch';
  ov.innerHTML='<div><div class="rm-glitch-txt">KERNEL PANIC</div><div class="rm-glitch-sub">// just kidding — rebooting portfolio //</div></div>';
  document.body.appendChild(ov);
  setTimeout(()=>{ try{ ov.remove(); }catch(e){} if(gen===animGen) runBoot(); }, 1400);
}

/* ---- bash-style Tab completion: commands as the first word, file/dir paths as arguments ----
   Operates only on the in-memory FS above; no network, no eval. */
function commonPrefix(arr){ if(!arr.length)return''; let p=arr[0];
  for(const s of arr){ let i=0; while(i<p.length&&i<s.length&&p[i]===s[i])i++; p=p.slice(0,i); if(!p)break; } return p; }
function cmdNameList(){ return Array.from(new Set([...Object.keys(COMMANDS), ...Object.keys(TOOLS), ...COMPLETIONS])).filter(n=>n && !n.includes(' ')); }
function pathComplete(frag){
  const slash=frag.lastIndexOf('/');
  const dirPart = slash>=0 ? frag.slice(0,slash+1) : '';
  const base    = slash>=0 ? frag.slice(slash+1) : frag;
  const dirParts = dirPart==='' ? cwd.slice() : fsResolve(dirPart);
  const node=fsNode(dirParts);
  if(!node||node.t!=='d') return {matches:[],dirPart,base,node:null};
  let names=Object.keys(node.c);
  if(!base.startsWith('.')) names=names.filter(n=>!n.startsWith('.'));   // dotfiles only when you type a leading '.'
  const matches=names.filter(n=>n.startsWith(base)).sort((a,z)=>a.localeCompare(z));
  return {matches,dirPart,base,node};
}
function printCandidates(names, node){
  const html=names.map(n=>{ const ch=node&&node.c[n]; const dir=ch&&ch.t==='d'; const cls=dir?'cyan':(/\.(sh|ps1)$/.test(n)?'green':'muted');
    return `<span class="${cls}" style="display:inline-block;margin:0 18px 2px 0">${esc(dir?n+'/':n)}</span>`; }).join('');
  log.appendChild(el(`<div style="line-height:1.8">${html}</div>`)); scrollDown();
}
function finishComplete(prefix, token, matches, node){
  if(!matches.length) return;
  if(matches.length===1){ const only=matches[0]; const ch=node&&node.c[only]; const dir=ch&&ch.t==='d';
    input.value=prefix+only+(dir?'/':' '); moveCaretEnd(); return; }      // dir → '/', file/command → ' '
  const cp=commonPrefix(matches);
  if(cp.length>token.length){ input.value=prefix+cp; moveCaretEnd(); }     // extend to the shared prefix
  else { printCandidates(matches, node); }                                 // nothing more to extend → list them
}
function handleTab(){
  const val=input.value; if(!val) return;
  if(!/\s/.test(val)){                              // still on the first word → complete a command name
    const base=val.toLowerCase();
    const names=cmdNameList().filter(n=>n.startsWith(base)).sort((a,z)=>a.localeCompare(z));
    finishComplete('', val, names, null); return;
  }
  const first=val.trim().split(/\s+/)[0].toLowerCase();
  const frag=(val.match(/(\S*)$/)||['',''])[1];     // the token under the cursor
  const keep=val.slice(0, val.length-frag.length);  // everything before it, preserved verbatim
  if(first==='sudo' && !frag.includes('/')){        // handy: complete sudo sub-commands
    const subs=['hire-craig','pacman','rm','make'].filter(s=>s.startsWith(frag.toLowerCase())).sort();
    finishComplete(keep, frag, subs, null); return;
  }
  const pc=pathComplete(frag);                       // everything else → file/dir path completion
  finishComplete(keep+pc.dirPart, pc.base, pc.matches, pc.node);
}

/* these new commands/tools are registered directly in the TOOLS and COMMANDS
   object literals (search "ls: cmdLs" and "tree: cmdTree") — the functions above
   are hoisted, so the literals can reference them even though they appear later. */

/* ------------------------- command router -------------------------------- */
const COMMANDS = {
  help: renderHelp, about: renderAbout, skills: renderSkills, projects: renderProjects,
  project: renderProjects, sysadmin: renderSysadmin, timeline: renderTimeline,
  contact: renderContact, banner: renderBanner, whoami: renderWhoami,
  creds: renderCreds, credentials: renderCreds, certs: renderCreds,
  resume: renderResume, cv: renderResume, 'download': renderResume,
  clear: ()=>{ log.innerHTML=''; pinnedTop=null; renderBanner(); screen.scrollTop=0; },
  reboot: ()=>{ pinnedTop=null; runBoot(); }, restart: ()=>{ pinnedTop=null; runBoot(); },
  tools: renderTools, toolkit: renderTools,
  casestudy: renderCaseStudy, phishing: renderCaseStudy, demo: renderCaseStudy,
  'sudo hire-craig': hireDino, 'hire-craig': hireDino, 'sudo hire craig': hireDino,
  // extra commands & easter eggs
  neofetch: renderNeofetch, sysinfo: renderNeofetch, fetch: renderNeofetch,
  nmap: renderScan, scan: renderScan, ping: renderPing,
  secret: renderSecret, secrets: renderSecret,
  topology: renderTopology, network: renderTopology, netmap: renderTopology, topo: renderTopology,
  tree: cmdTree, pwd: cmdPwd,
  history: historyCmd, id: idCmd, env: envCmd,
  date: ()=> printOne('muted', new Date().toString()),
  coffee: coffee, 'sudo make coffee': coffee, 'make coffee': coffee,
  exit: noExit, logout: noExit, quit: noExit,
};
const COMPLETIONS = ['help','about','skills','projects','sysadmin','timeline','creds','resume','cv','contact','tools','clear','banner','whoami','reboot','tools','casestudy','phishing','subnet','mac','port','hash','base64','passcheck','genpass','morse','uuid','epoch','cron','calc','color','cowsay','neofetch','nmap','ping','coffee','pwd','date','secret','topology','network','netmap','topo','ls','cd','cat','tree','grep','history','man','echo','ssh','tail','uname','env','id','sudo hire-craig'];

function run(raw){
  const cmd = raw.trim(); if(!cmd) return;
  // !! — repeat the last command (bash history expansion)
  if(cmd==='!!'){ if(history.length){ run(history[0]); } else { echoCommand(cmd); printOne('amber','!!: event not found'); } return; }
  echoCommand(cmd);
  history.unshift(cmd); histPtr=-1;
  animGen++;   // invalidate any animation still running from the previous command
  // simple pipe: PRODUCER | grep PATTERN  (producers: cat, ls, history, echo, env)
  if(cmd.includes('|')){
    const i=cmd.indexOf('|'); const left=cmd.slice(0,i).trim(); const right=cmd.slice(i+1).trim();
    const rparts=right.split(/\s+/); const rhead=(rparts[0]||'').toLowerCase();
    if(rhead!=='grep'){ printOne('amber','pipe: only “… | grep <pattern>” is supported here'); return; }
    let rrest=right.slice(rparts[0].length).trim(); let ci=false;
    if(/^-i\b/.test(rrest)){ ci=true; rrest=rrest.replace(/^-i\b\s*/,''); }
    const pat=rrest.replace(/^["']|["']$/g,'');
    const text=textOf(left);
    if(text===null){ printOne('red',`${esc((left.split(/\s+/)[0]||''))}: cannot pipe (unsupported source or no output)`); return; }
    if(!pat){ printOne('amber','usage: … | grep <pattern>'); return; }
    printGrep(text, pat, ci); return;
  }
  const key = cmd.toLowerCase();
  const parts = cmd.split(/\s+/);
  const head = parts[0].toLowerCase();
  const rest = cmd.slice(parts[0].length).trim();
  if(COMMANDS[key]){ COMMANDS[key](); }
  else if(TOOLS[head]){ TOOLS[head](rest); }
  else if(key==='sudo'){ log.appendChild(el(`<span class="amber">usage: sudo hire-craig</span>`)); scrollDown(); }
  else {
    log.appendChild(el(`<span class="red">command not found:</span> <span class="muted">${esc(cmd)} — type <code class="inl">help</code></span>`));
    scrollDown();
  }
}

/* ------------------------- input + history + tab ------------------------- */
let history=[], histPtr=-1;
input.addEventListener('keydown', e=>{
  if(e.key==='Enter'){ const v=input.value; input.value=''; run(v); }
  else if(e.key==='ArrowUp'){ e.preventDefault();
    if(history.length){ histPtr=Math.min(histPtr+1,history.length-1); input.value=history[histPtr]; moveCaretEnd(); } }
  else if(e.key==='ArrowDown'){ e.preventDefault();
    if(histPtr>0){ histPtr--; input.value=history[histPtr]; } else { histPtr=-1; input.value=''; } }
  else if(e.key==='Tab'){ e.preventDefault(); handleTab(); }
});
function moveCaretEnd(){ const v=input.value; input.value=''; input.value=v; updateCursor(); }

/* position the block cursor at the end of the typed text */
const mirror = $('#mirror'), blockcur = $('#blockcur');
function updateCursor(){
  mirror.textContent = input.value || '';
  if(blockcur) blockcur.style.left = mirror.getBoundingClientRect().width + 'px';
}
input.addEventListener('input', updateCursor);
input.addEventListener('keyup', updateCursor);
input.addEventListener('keydown', ()=> requestAnimationFrame(updateCursor));
input.addEventListener('focus', updateCursor);
addEventListener('resize', updateCursor);
updateCursor();
// keep focus on the terminal when clicking empty screen space (desktop)
screen.addEventListener('click', e=>{ if(window.innerWidth>680 && e.target.closest('a,button,input,textarea')===null) input.focus(); });

/* mobile command bar */
/* order mirrors the resume: summary → skills → experience → projects → credentials → resume/contact, then site utilities */
['about','skills','timeline','sysadmin','projects','casestudy','topology','creds','resume','contact','tools','help'].forEach(n=>{
  const btn=document.createElement('button'); btn.type='button'; btn.textContent=n;
  btn.addEventListener('click', ()=>run(n));
  $('#mobile-cmds').appendChild(btn);
});

/* ------------------------- boot sequence --------------------------------- */
const BOOTART = " ██████╗██████╗  █████╗ ██╗ ██████╗ ███████╗███████╗ ██████╗\n██╔════╝██╔══██╗██╔══██╗██║██╔════╝ ██╔════╝██╔════╝██╔════╝\n██║     ██████╔╝███████║██║██║  ███╗███████╗█████╗  ██║     \n██║     ██╔══██╗██╔══██║██║██║   ██║╚════██║██╔══╝  ██║     \n╚██████╗██║  ██║██║  ██║██║╚██████╔╝███████║███████╗╚██████╗\n ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚══════╝╚══════╝ ╚═════╝\n                                                            ";
const BOOT_LINES = [
  ['dm','RouterBOOT booter 7.16'],
  ['dm',''],
  ['ok','CPU 1400MHz  RAM 1024MiB  NAND 128MiB'],
  ['cy','Press any key within 2 seconds for setup..'],
  ['ok','loading kernel from NAND... OK'],
  ['ok','setting up elf image... OK'],
  ['ok','jumping to kernel code'],
  ['dm',''],
  ['ok','[  OK  ] RouterOS 7.16 (stable) starting'],
  ['ok','[  OK  ] interfaces up: ether1-5, sfp+1'],
  ['ok','[  OK  ] bridge + VLAN filtering enabled'],
  ['ok','[  OK  ] firewall filter + NAT applied'],
  ['ok','[  OK  ] DHCP server running'],
  ['ok','[  OK  ] WireGuard tunnel established'],
  ['wa','[ WARN ] routerboard firmware upgrade available'],
  ['cy','[ AUTH ] establishing secure session…'],
  ['ok','[  OK  ] login: admin, access granted'],
  ['dm',''],
  ['cy','type `help` or tap a command below.'],
];
function startSession(skipped){
  $('#boot').style.display='none';
  log.innerHTML='';        // fresh screen each (re)boot
  pinnedTop = null;
  renderBanner();
  renderHelp();
  input.focus();
  screen.scrollTop = 0;   // land at the top so the banner shows first
}
let skipBoot = ()=>{};
let bootGen = 0;                        // bumps each (re)boot so a new boot cancels any in-flight one
$('#skipboot').addEventListener('click', ()=> skipBoot());
$('#reboot').addEventListener('click', ()=> runBoot());

function runBoot(){
  const gen = ++bootGen;                // invalidates any boot loop still running
  const bootEl=$('#boot'), out=$('#bootlog');
  $('#bootart').textContent = BOOTART;
  out.textContent = '';
  bootEl.style.display = 'flex';
  started = Date.now();                 // reset uptime on (re)boot
  let skipped=false;
  function finish(){ if(skipped || gen!==bootGen) return; skipped=true; startSession(false); }
  skipBoot = ()=>{ if(skipped || gen!==bootGen) return; skipped=true; startSession(true); };
  if(reduceMotion){ // no animation — straight to content
    out.textContent = BOOT_LINES.map(l=>l[1]).join('\n');
    setTimeout(()=>{ if(!skipped && gen===bootGen){skipped=true;startSession(true);} }, 1400); return;
  }
  let i=0;
  (function next(){
    if(skipped || gen!==bootGen) return;   // a newer boot took over — stop this loop
    if(i>=BOOT_LINES.length){ setTimeout(finish, 1900); return; }
    const [cls,txt]=BOOT_LINES[i++];
    const span=document.createElement('div');
    span.innerHTML = txt? `<span class="${cls}">${esc(txt)}</span>` : '&nbsp;';
    out.appendChild(span);
    setTimeout(next, 230 + Math.random()*170);
  })();
}
runBoot();

/* keyboard: focus input on any keypress (desktop convenience) */
addEventListener('keydown', e=>{
  if(e.target===input || ['INPUT','TEXTAREA'].includes(e.target.tagName)) return;
  if($('#boot').style.display==='none' && !e.metaKey && !e.ctrlKey && e.key.length===1){ input.focus(); }
});

/* Konami code easter egg: ↑ ↑ ↓ ↓ ← → ← → b a */
const KSEQ=['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a'];
let konami=[];
addEventListener('keydown', e=>{
  konami.push((e.key||'').toLowerCase()); konami = konami.slice(-KSEQ.length);
  if(KSEQ.length===konami.length && KSEQ.every((k,i)=>konami[i]===k)){
    konami=[];
    document.body.classList.add('konami');
    cascadeLines([
      ['amber','✦ CHEAT CODE ACCEPTED ✦'],
      ['green','+30 years uptime granted · root access unlocked'],
      ['cyan',"(kidding — but you clearly know your way around. let's talk: run `contact`)"],
    ]);
    setTimeout(()=>document.body.classList.remove('konami'), 900);
  }
});
