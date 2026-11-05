/* ---------- bottom-center AI bar + assistant (free public model + on-device fallback) ---------- */
(function(){
"use strict";

/* knowledge index: verified facts about Sagar */
var INDEX=window.SG_INDEX=[
{t:'AwaazLedger',sec:'Projects',goto:'awaazledger',d:'Autonomous AI teammate for UPI dispute resolution - Hindi/Hinglish voice notes and payment-screenshot OCR with a deterministic policy engine. Paytm Build for India hackathon demo; all banking simulated.',cv:'Hackathon demo - all banking, credit and claim actions are simulated mocks.',k:'upi dispute voice hindi hinglish ocr sarvam paytm hackathon agent autonomous fraud bridge credit rbi npci simulated new latest',links:[['Source','https://github.com/sagar-grv/awaazledger'],['Live demo','https://awaazledger-sg.vercel.app/']]},
{t:'Campus AI',sec:'Projects',goto:'campus-ai',d:'Placement intelligence with hybrid retrieval and cited answers over 115+ company-drive records. FastAPI, React, MongoDB, RAG.',cv:'Dataset coverage of 115+ drives, not placements managed.',k:'placement rag retrieval citations fastapi react mongodb college drives eligibility',links:[['Source','https://github.com/sagar-grv/Campusai'],['Live demo','https://campusai-sg.vercel.app/']]},
{t:'HealthVault',sec:'Projects',goto:'healthvault',d:'AI-assisted health-record management: report upload with Gemini interpretation, Health IDs with QR sharing, access logs, doctor verification. Prototype, not a certified medical service.',cv:'Prototype - not a certified medical service.',k:'health medical records gemini nextjs react typescript supabase qr multilingual prototype',links:[['Source','https://github.com/sagar-grv/healthvault'],['Live demo','https://healthvault-dusky.vercel.app/']]},
{t:'Project Lifeline',sec:'Projects',goto:'project-lifeline',d:'Payment-recovery workflows with HMAC-verified Razorpay test-mode webhooks and PostgreSQL. 104-transaction simulation: ~51% recovery vs 22% blind retry; no production results.',cv:'Simulation results only; no production merchant results.',k:'payment recovery razorpay webhooks hmac fastapi postgres retry simulation dunning',links:[['Source','https://github.com/sagar-grv/razorpay-lifeline']]},
{t:'ShipKit',sec:'Projects',goto:'projects',d:'Stack-aware npm CLI generating CI, security, monitoring and AI-agent configuration for GitHub, GitLab and Bitbucket.',k:'cli npm ci cd github actions devops generator developer tools shipkit-pipe',links:[['Source','https://github.com/sagar-grv/shipkit'],['npm','https://www.npmjs.com/package/shipkit-pipe']]},
{t:'PrivateVoice Docs',sec:'Projects',goto:'projects',d:'Local-first document import, retrieval and grounded browser chat with visible source excerpts; local or selected hosted models.',cv:'Hosted providers receive selected excerpts.',k:'local first privacy ollama documents rag chat offline android',links:[['Source','https://github.com/sagar-grv/privatevoice-docs'],['Docs','https://sagar-grv.github.io/privatevoice-docs/']]},
{t:'AI TestPilot X',sec:'Projects',goto:'projects',d:'AI test automation with LangGraph, RAG and Selenium/API automation - 72 passing tests.',k:'testing automation selenium pytest langgraph qa',links:[['Source','https://github.com/sagar-grv/ai-testpilot-x'],['App','https://ai-testpilot-x.streamlit.app/']]},
{t:'SlotSync',sec:'Projects',goto:'projects',d:'Distributed-computing course project: conflict-safe booking board with RPC, PostgreSQL mutual exclusion and Lamport clocks.',k:'distributed systems booking lamport rpc mutex course mini project concurrency',links:[['Source','https://github.com/sagar-grv/slotsync-distributed-booking'],['Demo','https://slotsync-distributed-booking.vercel.app/']]},
{t:'Agens Digital Twin',sec:'Projects',goto:'projects',d:'Type 2 diabetes digital-twin proof of concept on synthetic data - glucose forecasting and what-if simulation. Happiest Health Digital Twin Challenge 2026.',k:'diabetes health digital twin forecasting happiest health unstop competition agens synthetic',links:[['Source','https://github.com/sagar-grv/Agens_NMIMS_MPSTME']]},
{t:'WindSight',sec:'Projects',goto:'projects',d:'Day-ahead UK wind-forecast intelligence: D-1 forecast versions vs actuals with calibrated P10-P90 error bands.',k:'wind energy forecast uk power calibration pilot',links:[['Source','https://github.com/sagar-grv/vx3kq7'],['Demo','https://vx3kq7.vercel.app']]},
{t:'Fitness Studio Booking API',sec:'Projects',goto:'projects',d:'FastAPI booking API with JWT auth, SQLite and IST timezone handling - backend intern assignment.',k:'fastapi jwt sqlite booking api assignment backend',links:[['Source','https://github.com/sagar-grv/fitness-studio-booking-api']]},
{t:'Co-Developer, College Circle AI',sec:'Experience',goto:'experience',d:'Current role, 2026. TypeScript backend: payment logic, AI usage controls, webhook handling and CI workflows. Pull requests in review; nothing merged or deployed yet.',cv:'Contribution-stage work, 2026; pull requests in review; nothing merged or deployed yet.',k:'work experience job college circle typescript backend pull requests current role startup',links:[]},
{t:'Allocation Problems in Optimization',sec:'Publication',goto:'achievements',d:'Book chapter in the Encyclopedia of Engineering Optimization and Heuristics, Springer Nature, online-first 2026.',cv:'Online-first chapter; final pagination pending.',k:'springer publication research paper book chapter doi optimization heuristics published',links:[['DOI','https://doi.org/10.1007/978-981-96-8165-5_260-1']]},
{t:'Skills',sec:'Skills',goto:'skills',d:'Python, LangGraph, LangChain, RAG, Gemini, ChromaDB, Pinecone; FastAPI, Flask, PostgreSQL, MongoDB, Supabase; React, Next.js, TypeScript, Selenium, PyTest, GitHub Actions; Power BI, Excel.',k:'skills tech stack technologies python sql react what can he do',links:[]},
{t:'Managing Projects with AI',sec:'Certificates',goto:'achievements',d:'AI CERTs / Coursera course completion, Oct 2026.',k:'certificate ai certs coursera project management new latest',links:[['Verify','https://www.coursera.org/account/accomplishments/records/46QIUSRR9SET']]},
{t:'MCP: Advanced Topics',sec:'Certificates',goto:'achievements',d:'Anthropic course completion - Model Context Protocol advanced topics.',k:'certificate anthropic mcp model context protocol',links:[['Verify','https://verify.skilljar.com/c/cv2scy4zb745']]},
{t:'5-Day AI Agents Intensive',sec:'Certificates',goto:'achievements',d:'Google / Kaggle course badge.',k:'certificate google kaggle agents intensive badge',links:[['Verify','https://www.kaggle.com/certification/badges/sagargurav019/105']]},
{t:'Claude 101',sec:'Certificates',goto:'achievements',d:'Anthropic course completion.',k:'certificate anthropic claude',links:[['Verify','https://verify.skilljar.com/c/x9vxpwr27chc']]},
{t:'AI Fluency for Builders',sec:'Certificates',goto:'achievements',d:'Anthropic / CodePath course completion.',k:'certificate anthropic codepath fluency',links:[['Verify','https://verify.skilljar.com/c/vfocjp2v49uk']]},
{t:'Develop Generative AI Applications',sec:'Certificates',goto:'achievements',d:'IBM / Coursera course completion.',k:'certificate ibm coursera generative ai',links:[['Verify','https://www.coursera.org/account/accomplishments/records/UI0A1EXGPHCD']]},
{t:'Claude Code in Action',sec:'Certificates',goto:'achievements',d:'Anthropic course completion. Private certificate.',k:'certificate anthropic claude code private',links:[]},
{t:'First place, Yugantar 2.0',sec:'Recognition',goto:'achievements',d:'Team AGENS (six members). EMR interoperability with NAMASTE, WHO ICD-11 TM2 and a FHIR R4 API.',k:'hackathon win first prize yugantar award achievement fhir healthcare',links:[['Post','https://www.linkedin.com/feed/update/urn:li:activity:7387922783709818880/']]},
{t:'Legends Tier, Google Cloud Arcade',sec:'Recognition',goto:'achievements',d:'Cohort 1 learning milestone, separate from professional cloud certification.',k:'google cloud arcade legends tier achievement badge',links:[['Post','https://www.linkedin.com/feed/update/urn:li:activity:7387098586322386944/']]},
{t:'Student Placement Coordinator',sec:'Leadership',goto:'experience',d:'Jan 2026 - present, NMIMS MPSTME Shirpur. Recruiter-student communication, drive scheduling, placement reports.',k:'leadership placement coordinator tpo responsibility',links:[]},
{t:'Google Gemini Student Ambassador',sec:'Leadership',goto:'experience',d:'Jul 2025 - Jul 2026. Explained cloud and AI concepts to 200+ students; organized four workshops and hackathons.',k:'leadership ambassador gemini google workshops teaching students',links:[]},
{t:'GDG on Campus Web Developer',sec:'Leadership',goto:'experience',d:'Dec 2025 - present, Google Developer Group on Campus MPSTME Shirpur.',k:'leadership gdg developer group web developer community',links:[]},
{t:'B.Tech AI & ML, NMIMS MPSTME',sec:'Education',goto:'about',d:'Jul 2023 - May 2027 (expected), SVKM NMIMS Mukesh Patel School of Technology Management & Engineering, Shirpur.',k:'education degree college university btech nmims mpstme shirpur',links:[]},
{t:'Class 12 - 82.83%',sec:'Education',goto:'about',d:'HSC, Feb 2023, R. C. Patel Arts and Science Jr. College, Shirpur. Maharashtra State Board.',k:'education school hsc 12th percentage marks',links:[]},
{t:'Class 10 - 87.20%',sec:'Education',goto:'about',d:'SSC, 2021, R. C. Patel Secondary School, Shirpur. Maharashtra State Board.',k:'education school ssc 10th percentage marks',links:[]},
{t:'Email Sagar',sec:'Contact',goto:'contact',d:'sagargurav1812@gmail.com',k:'contact email mail reach hire',links:[['Email','mailto:sagargurav1812@gmail.com']]},
{t:'GitHub profile',sec:'Contact',goto:'contact',d:'github.com/sagar-grv - all public source code.',k:'contact github code repos profile',links:[['GitHub','https://github.com/sagar-grv']]},
{t:'LinkedIn profile',sec:'Contact',goto:'contact',d:'linkedin.com/in/sagargrv',k:'contact linkedin profile social',links:[['LinkedIn','https://www.linkedin.com/in/sagargrv/']]}
];

function norm(s){return s.toLowerCase();}
function editDist1(a,b){
  if(Math.abs(a.length-b.length)>1)return false;
  var i=0,j=0,d=0;
  while(i<a.length&&j<b.length){
    if(a[i]===b[j]){i++;j++;}
    else{d++;if(d>1)return false;
      if(a.length>b.length)i++;else if(b.length>a.length)j++;else{i++;j++;}}
  }
  return d+(a.length-i)+(b.length-j)<=1;
}
function score(q){
  var STOP={sagar:1,gurav:1,what:1,who:1,where:1,when:1,which:1,whose:1,does:1,do:1,is:1,are:1,has:1,have:1,had:1,the:1,and:1,for:1,to:1,in:1,on:1,of:1,an:1,he:1,his:1,him:1,she:1,tell:1,me:1,about:1,can:1,you:1,any:1,all:1,list:1,show:1,give:1,get:1,got:1,did:1,project:1};
  var toks=norm(q).split(/[^a-z0-9]+/).filter(function(t){return t.length>1&&!STOP[t];});
  if(!toks.length)return[];
  return INDEX.map(function(it){
    var hayT=norm(it.t).split(/[^a-z0-9]+/), hayK=norm(it.k).split(/\s+/), hayD=norm(it.d).split(/[^a-z0-9]+/), hayS=norm(it.sec);
    var s=0;
    toks.forEach(function(tk){
      if(hayT.indexOf(tk)>-1)s+=6;
      else if(hayT.some(function(w){return w.indexOf(tk)===0;}))s+=4;
      else if(tk.length>4&&hayT.some(function(w){return editDist1(w,tk);}))s+=3;
      if(hayK.indexOf(tk)>-1)s+=4;
      else if(hayK.some(function(w){return w.indexOf(tk)===0;}))s+=2.5;
      else if(tk.length>4&&hayK.some(function(w){return editDist1(w,tk);}))s+=2;
      if(hayD.indexOf(tk)>-1)s+=1.5;
      if(hayS.indexOf(tk)>-1)s+=2;
      else if(tk.length>4&&editDist1(hayS,tk))s+=2.5;
    });
    return {it:it,s:s};
  }).filter(function(r){return r.s>0;}).sort(function(a,b){return b.s-a.s;});
}
window.sgScore=score;

/* ---------- UI ---------- */
var bar=document.createElement('div');bar.id='aiBar';
bar.innerHTML='<div id="aiPanel" role="dialog" aria-label="Sagar\'s AI assistant">'
+'<div class="aib-head"><span class="aib-dot"></span><span class="aib-title">Sagar\'s AI</span><span class="aib-sub">grounded on his resume + site facts</span><button id="aiClose" type="button" aria-label="Close panel">&times;</button></div>'
+'<div id="aiLog"></div>'
+'<div id="aiChips"></div>'
+'<div class="aib-note">Answers are AI-generated from Sagar\'s resume &amp; site facts - please verify anything critical.</div>'
+'</div>'
+'<form id="aiForm"><span class="aib-prompt">&rsaquo;</span><input id="aiText" type="text" placeholder="Ask my AI anything\u2026" autocomplete="off" aria-label="Ask Sagar\'s AI a question"><button id="aiSend" type="submit" aria-label="Send">&uarr;</button></form>';
document.body.appendChild(bar);
var log=document.getElementById('aiLog'), text=document.getElementById('aiText'),
    sendBtn=document.getElementById('aiSend'), chips=document.getElementById('aiChips'),
    form=document.getElementById('aiForm');

function openPanel(){bar.classList.add('open');if(!log.children.length)hello();}
function closePanel(){bar.classList.remove('open');}
document.getElementById('aiClose').addEventListener('click',function(){closePanel();text.blur();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closePanel();});
text.addEventListener('focus',openPanel);

/* the hero hint arrow now points at the bottom-center bar */
Array.prototype.forEach.call(document.querySelectorAll('span'),function(sp){
  if(sp.childNodes.length===1&&sp.textContent.trim()==='\u2198')sp.textContent='\u2193';
});

function scrollLog(){log.scrollTop=log.scrollHeight;}
function addMsg(role,txt,offline){
  var m=document.createElement('div');m.className='aib-msg '+role+(offline?' off':'');
  m.textContent=txt;log.appendChild(m);scrollLog();return m;
}
var ALLOWED={};
INDEX.forEach(function(it){it.links.forEach(function(l){ALLOWED[l[1]]=l[0];});});
['https://github.com/sagar-grv','https://www.linkedin.com/in/sagargrv/','https://doi.org/10.1007/978-981-96-8165-5_260-1'].forEach(function(u){if(!ALLOWED[u])ALLOWED[u]='Link';});
function cleanAnswer(txt){
  /* strip markdown and raw URLs from generated text; verified labeled links are attached separately */
  return String(txt)
    .replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g,'$1')
    .replace(/https?:\/\/[^\s)]+/g,'')
    .replace(/\*\*([^*]+)\*\*/g,'$1')
    .replace(/\(\s*(?:verify|link|source|here)\s*\)/gi,'')
    .replace(/(^|[\s(.:;\u2013\u2014-])(?:verify|source code|live demo|source|link|here)[ \t]*[:)]?[ \t]*(?=\n|$|[ \t]*(?:source code|live demo|verify|source|link|here)\b)/gim,'$1')
    .replace(/(^|[\s(.:;\u2013\u2014-])(?:verify|source code|live demo|source|link|here)[ \t]*[:)]?[ \t]*(?=\n|$)/gim,'$1')
    .replace(/\(\s*\)/g,'')
    .replace(/[ \t]+$/gim,'')
    .replace(/\n{3,}/g,'\n\n')
    .trim();
}
function addCertList(m,hitsAll){
  var certs=hitsAll.filter(function(r){return r.it.sec==='Certificates';});
  if(certs.length<2)return;
  var box=document.createElement('div');box.className='cv';
  var head=document.createElement('b');head.textContent='Certificates ('+certs.length+'):';box.appendChild(head);
  certs.slice(0,7).forEach(function(r){
    var row=document.createElement('div');row.style.marginTop='4px';
    row.appendChild(document.createTextNode('\u2022 '+r.it.t+' - '+r.it.d.replace(/\.$/,'')+'. '));
    if(r.it.links.length){
      var a=document.createElement('a');a.href=r.it.links[0][1];a.target='_blank';a.rel='noopener';
      a.style.color='var(--accent)';a.style.fontWeight='600';a.style.textDecoration='underline';a.textContent='Verify \u2192';row.appendChild(a);
    }
    box.appendChild(row);
  });
  m.appendChild(box);
}
function addSources(m,query,minS){
  var allHits=score(query).filter(function(r){return r.s>=(minS||3);});
  addCertList(m,allHits);
  var hits=allHits.slice(0,2);
  hits.forEach(function(r){
    if(r.it.sec==='Certificates'&&allHits.filter(function(x){return x.it.sec==='Certificates';}).length>=2)return;
    if(r.it.cv){var c=document.createElement('span');c.className='cv';c.textContent=r.it.cv;m.appendChild(c);}
    var target=r.it.links.length?r.it.links[0][1]:('#'+r.it.goto);
    var a=document.createElement('a');a.className='src';a.href=target;
    if(target.charAt(0)!=='#'){a.target='_blank';a.rel='noopener';}
    a.textContent=(r.it.links.length?r.it.links[0][0]:'View on page')+' \u2192';
    if(target.charAt(0)==='#'){a.addEventListener('click',function(e){e.preventDefault();closePanel();
      var el=document.getElementById(r.it.goto);if(el)el.scrollIntoView({behavior:'smooth',block:'center'});});}
    m.appendChild(a);
  });
}
var typingEl=null;
function showTyping(){typingEl=document.createElement('div');typingEl.className='aib-typing';typingEl.innerHTML='<i></i><i></i><i></i>';log.appendChild(typingEl);scrollLog();}
function hideTyping(){if(typingEl){typingEl.remove();typingEl=null;}}

function hello(){
  addMsg('bot','Hey! I\'m Sagar\'s AI - grounded on his resume and top projects. Ask me anything about his projects, skills or experience.');
}

var history=[]; /* {role,content} */
var busy=false, lastSend=0;

function fallbackAnswer(q){
  var hits=score(q).filter(function(r){return r.s>=3;});
  var m;
  if(hits.length){
    var certs=hits.filter(function(r){return r.it.sec==='Certificates';});
    var body;
    if(certs.length>1&&/cert|badge|coursera|kaggle|course/.test(norm(q))){
      body='Certificates:\n'+certs.slice(0,7).map(function(r){return '- '+r.it.t+' ('+r.it.d+')';}).join('\n');
    }else{
      body=hits[0].it.t+': '+hits[0].it.d;
      if(hits.length>1&&hits[1].it.sec===hits[0].it.sec)body+='\nAlso: '+hits[1].it.t+': '+hits[1].it.d;
    }
    m=addMsg('bot','(Model unavailable - answered from this site\'s on-device index)\n\n'+body,true);
  }else{
    m=addMsg('bot','The model is unavailable right now and the site\'s index has no match for that. Try "projects", "skills", "certificates" or "contact".',true);
  }
  addSources(m,q);
}

function ask(q){
  var now=Date.now();
  if(busy)return;
  /* certificate intent: deterministic list only, no generated body */
  var ch=score(q).filter(function(r){return r.s>=3&&r.it.sec==='Certificates';});
  if(/cert|badge|coursera|kaggle|course/.test(norm(q))&&ch.length>=2){
    addMsg('me',q);
    var m=addMsg('bot','Here are Sagar\'s verified certificates:');
    addCertList(m,score(q).filter(function(r){return r.s>=3;}));
    return;
  }
  var wait=Math.ceil((3000-(now-lastSend))/1000);
  if(wait>0){addMsg('bot','Please wait a few seconds between questions.');return;}
  busy=true;lastSend=now;sendBtn.disabled=true;
  addMsg('me',q);
  history.push({role:'user',content:q});
  if(history.length>10)history=history.slice(-10);
  showTyping();
  var attempts=0;
  function tryOnce(){
    attempts++;
    var ctrl=new AbortController();
    var to=setTimeout(function(){ctrl.abort();},30000);
    fetch('/api/chat',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({messages:history}),
      signal:ctrl.signal
    }).then(function(res){
      if(res.status===429)throw new Error('RATE:5');
      if(!res.ok)throw new Error('HTTP '+res.status);
      return res.json();
    }).then(function(data){
      clearTimeout(to);
      var ans=data&&data.answer;
      if(!ans)throw new Error('empty');
      hideTyping();
      ans=cleanAnswer(ans);
      history.push({role:'assistant',content:ans});
      var m=addMsg('bot',ans);
      if(!/does not cover|not covered|no information|don\u2019t have|don't have/i.test(ans))addSources(m,q,6);
      busy=false;sendBtn.disabled=false;text.focus();
    }).catch(function(err){
      clearTimeout(to);
      var msg=String(err&&err.message||'');
      if(msg.indexOf('RATE:')===0){
        var secs=parseInt(msg.slice(5),10)||30;
        lastSend=Date.now(); /* align throttle to server window */
        hideTyping();
        history.pop();
        addMsg('bot','Please wait a few seconds between questions, then resend.');
        busy=false;sendBtn.disabled=false;text.focus();
        return;
      }
      if(attempts<2){setTimeout(tryOnce,6000);return;}
      hideTyping();
      history.pop(); /* drop unanswered question */
      fallbackAnswer(q);
      busy=false;sendBtn.disabled=false;text.focus();
    });
  }
  tryOnce();
}

form.addEventListener('submit',function(e){
  e.preventDefault();
  var q=text.value.trim();if(!q)return;
  openPanel();text.value='';ask(q);
});

["Summarise Sagar's strongest projects","What's his experience with GenAI?",'Which tech stack does he know best?','Is he open to internships?'].forEach(function(c){
  var b=document.createElement('button');b.type='button';b.textContent=c;
  b.addEventListener('click',function(){openPanel();ask(c);});
  chips.appendChild(b);
});

/* contact form -> email composer (site backend returns HTTP 500; no automated submission) */
document.addEventListener('submit',function(e){
  var f=e.target;
  if(!f||!f.tagName||f.tagName!=='FORM'||f.id==='aiForm')return;
  e.preventDefault();e.stopImmediatePropagation();
  function gv(n){var el=f.querySelector('[name="'+n+'"]');return el&&el.value?el.value.trim():'';}
  var nm=gv('name'),em=gv('email'),msg=gv('message');
  var su='Portfolio contact'+(nm?' - '+nm:'');
  var bo=(msg||'')+'\n\n- '+nm+(em?' ('+em+')':'');
  window.location.href='mailto:sagargurav1812@gmail.com?subject='+encodeURIComponent(su)+'&body='+encodeURIComponent(bo);
  var note=document.getElementById('sgMailNote');
  if(!note){
    note=document.createElement('div');note.id='sgMailNote';
    note.style.cssText='position:fixed;left:50%;transform:translateX(-50%);bottom:92px;z-index:9999;background:#161b12;color:#d9f99d;border:1px solid #365314;border-radius:10px;padding:10px 16px;font:13px/1.4 ui-monospace,monospace;box-shadow:0 8px 24px rgba(0,0,0,.4)';
    document.body.appendChild(note);
  }
  note.textContent='Email draft requested. Review and send in your email app.';
  note.style.display='block';
  clearTimeout(window.__sgMailNoteT);
  window.__sgMailNoteT=setTimeout(function(){note.style.display='none';},7000);
},true);
/* hero hint arrow: point down at the bottom-center bar (was down-right for the old corner bubble) */
try{
  var sgHint=[].slice.call(document.querySelectorAll('a,button,span,div')).filter(function(e){
    return e.childElementCount<=2&&/Ask my AI anything/.test(e.textContent||'')&&!e.closest('#aiBar')&&!document.getElementById('aiBar').contains(e);
  }).pop();
  var sgSvg=sgHint&&sgHint.querySelector('svg');
  if(sgSvg)sgSvg.style.transform='rotate(45deg)';
}catch(_){}
var sgFormObs=new MutationObserver(function(){
  var fs=document.querySelectorAll('form'),f=null,i;
  for(i=0;i<fs.length;i++){if(fs[i].id!=='aiForm'){f=fs[i];break;}}
  if(f&&!document.getElementById('sgFormHint')){
    var d=document.createElement('p');d.id='sgFormHint';
    d.style.cssText='color:#9aa0a6;font-size:12px;margin-top:10px';
    d.textContent='This opens your email app - nothing is sent automatically.';
    f.appendChild(d);
    sgFormObs.disconnect();
  }
});
sgFormObs.observe(document.documentElement,{childList:true,subtree:true});

})();
