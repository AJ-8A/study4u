(() => {
  const modal = document.getElementById("featureModal");
  const content = document.getElementById("featureContent");
  const usersKey = "studyhub_users";
  const currentUserKey = "studyhub_current_user";
  const quizKey = "studyhub_quiz_stats";

  const user = () => {
    try {
      const users = JSON.parse(localStorage.getItem(usersKey) || "{}");
      const name = localStorage.getItem(currentUserKey);
      return name && users[name] ? users[name] : null;
    } catch { return null; }
  };
  const saveUser = (u) => {
    const name = localStorage.getItem(currentUserKey);
    if (!name || !u) return;
    const users = JSON.parse(localStorage.getItem(usersKey) || "{}");
    users[name] = u;
    localStorage.setItem(usersKey, JSON.stringify(users));
  };
  const open = (html) => {
    content.innerHTML = html;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
  };
  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
  };
  document.querySelectorAll("[data-close-feature]").forEach(x => x.addEventListener("click", close));
  document.addEventListener("keydown", e => { if(e.key==="Escape") close(); });

  function levelFor(xp) {
    if (xp >= 2500) return "Grandmaster";
    if (xp >= 1800) return "Master";
    if (xp >= 1200) return "Expert";
    if (xp >= 700) return "Advanced";
    if (xp >= 300) return "Intermediate";
    if (xp >= 100) return "Novice";
    return "Beginner";
  }

  function renderStats() {
    const u=user(), completed=u?.completed||[], xp=completed.length*100;
    const best=u?.stats?.bestStreak||0;
    const qs=JSON.parse(localStorage.getItem(quizKey)||'{"correct":0,"answered":0}');
    const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
    set("statCompleted",completed.length); set("statXp",xp); set("statBest",best);
    set("statAccuracy",qs.answered ? Math.round(qs.correct/qs.answered*100)+"%" : "—");
    const box=document.getElementById("subjectAnalytics"); if(!box)return;
    const subjects=[...new Set(lessons.map(l=>l.subject))];
    box.innerHTML=subjects.map(s=>{
      const total=lessons.filter(l=>l.subject===s).length;
      const done=lessons.reduce((n,l,i)=>n+(l.subject===s&&completed.includes(i)?1:0),0);
      const pct=total?Math.round(done/total*100):0;
      return '<div class="analytics-row"><span>'+s+'</span><div><i style="width:'+pct+'%"></i></div><b>'+done+'/'+total+'</b></div>';
    }).join("");
  }

  function renderTree() {
    const box=document.getElementById("skillTreeGrid"), u=user(), completed=u?.completed||[];
    if(!box)return;
    const subjects=[...new Set(lessons.map(l=>l.subject))];
    box.innerHTML=subjects.map(s=>{
      const ids=lessons.map((l,i)=>l.subject===s?i:-1).filter(i=>i>=0);
      const done=ids.filter(i=>completed.includes(i)).length;
      const pct=ids.length?Math.round(done/ids.length*100):0;
      return '<button class="skill-node" data-skill="'+s.replace(/"/g,'&quot;')+'"><span>'+({
        HTML:"🌐",CSS:"🎨",JavaScript:"⚡",Python:"🐍",SQL:"🗄️",Web:"🌍",Security:"🛡️",
        Algorithms:"🧩",Cloud:"☁️",AI:"🤖","Study Skills":"🧠",Project:"🚀",Databases:"🗄️"
      }[s]||"✦")+'</span><b>'+s+'</b><small>'+done+'/'+ids.length+' complete</small><em><i style="width:'+pct+'%"></i></em></button>';
    }).join("");
    box.querySelectorAll(".skill-node").forEach(b=>b.onclick=()=>{
      document.getElementById("lessons")?.scrollIntoView({behavior:"smooth"});
      const input=document.getElementById("lessonSearch");
      if(input){input.value=b.dataset.skill;input.dispatchEvent(new Event("input",{bubbles:true}));}
    });
  }

  function renderProjects() {
    const box=document.getElementById("projectGrid"); if(!box)return;
    const projects=lessons.map((l,i)=>({l,i})).filter(x=>x.l.subject==="Project");
    const completed=user()?.completed||[];
    box.innerHTML=projects.map(({l,i})=>'<article class="project-card '+(completed.includes(i)?"done":"")+'"><span>'+l.icon+'</span><small>'+l.level+'</small><h3>'+l.title+'</h3><p>'+l.description+'</p><button type="button" data-project="'+i+'">'+(completed.includes(i)?"Review project →":"Open project →")+'</button></article>').join("");
    box.querySelectorAll("[data-project]").forEach(b=>b.onclick=()=>window.showLesson?.(+b.dataset.project));
  }

  function renderLeaderboard() {
    const box=document.getElementById("leaderboardCard"); if(!box)return;
    let users={}; try{users=JSON.parse(localStorage.getItem(usersKey)||"{}")}catch{}
    const rows=Object.entries(users).map(([name,u])=>({name,xp:(u.completed||[]).length*100,streak:u.stats?.bestStreak||0})).sort((a,b)=>b.xp-a.xp||b.streak-a.streak).slice(0,10);
    if(!rows.length){box.innerHTML='<p class="empty-feature">Create an account to enter your local leaderboard.</p>';return;}
    const top=rows.slice(0,3);
    const rest=rows.slice(3);
    const medals=["🥇","🥈","🥉"];
    const podium=top.length ? '<div class="leader-podium">'+top.map((r,i)=>'<div class="podium-card podium-'+(i+1)+'"><span class="podium-medal">'+medals[i]+'</span><strong>'+r.name+'</strong><b>'+r.xp+' XP</b><small>🔥 '+r.streak+' best streak</small></div>').join("")+'</div>' : "";
    const list=rest.map((r,i)=>'<div class="leader-row"><strong>#'+(i+4)+'</strong><span>'+r.name+'</span><b>'+r.xp+' XP</b><small>🔥 '+r.streak+'</small></div>').join("");
    box.innerHTML=podium+list;
    const topBox=document.getElementById("topLeaderboard");
    if(topBox) topBox.innerHTML=podium;
  }

  function profile() {
    const u=user(), name=localStorage.getItem(currentUserKey)||"Guest", done=u?.completed?.length||0, xp=done*100, qs=JSON.parse(localStorage.getItem(quizKey)||'{"correct":0,"answered":0}');
    open('<div class="feature-kicker">PROFILE</div><h2 id="featureTitle">'+name+'</h2><div class="profile-hero"><strong>'+levelFor(xp)+'</strong><span>'+xp+' XP</span></div><div class="profile-grid"><div><b>'+done+'</b><small>Lessons</small></div><div><b>'+(u?.stats?.bestStreak||0)+'</b><small>Best streak</small></div><div><b>'+(qs.answered?Math.round(qs.correct/qs.answered*100):0)+'%</b><small>Quiz accuracy</small></div></div><h3>Achievements</h3><div class="profile-achievements">'+((u?.achievements||[]).length?u.achievements.map(a=>'<span>🏆 '+a+'</span>').join(""):"<span>Complete lessons to unlock achievements.</span>")+'</div>');
  }

  function quiz() {
    const pool=lessons.filter(l=>l.content?.quiz&&l.content?.answer).sort(()=>Math.random()-.5).slice(0,10);
    let n=0,score=0,answered=false;
    const render=()=>{
      const q=pool[n];
      open('<div class="feature-kicker">QUIZ ARENA · '+(n+1)+' / '+pool.length+'</div><h2 id="featureTitle">'+q.title+'</h2><p class="quiz-question">'+q.content.quiz+'</p><input id="quizAnswer" class="quiz-input" placeholder="Type your answer..." autocomplete="off"><div class="quiz-actions"><button class="button" id="quizSubmit">Submit answer</button><button class="outline-button" id="quizSkip">Skip</button></div><p id="quizFeedback" class="quiz-feedback"></p>');
      document.getElementById("quizAnswer").focus();
      document.getElementById("quizSubmit").onclick=()=>{
        if(answered)return; answered=true;
        const input=document.getElementById("quizAnswer"), answer=q.content.answer||"";
        const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
        const ok=norm(input.value)===norm(answer)||norm(answer).includes(norm(input.value))&&norm(input.value).length>2;
        if(ok)score++;
        document.getElementById("quizFeedback").textContent=ok?"✓ Correct!":"✕ Not quite. Answer: "+answer;
        document.getElementById("quizSubmit").textContent=n===pool.length-1?"Finish":"Next →";
        document.getElementById("quizSubmit").onclick=next;
      };
      document.getElementById("quizSkip").onclick=()=>{answered=true;document.getElementById("quizFeedback").textContent="Answer: "+q.content.answer;document.getElementById("quizSubmit").textContent=n===pool.length-1?"Finish":"Next →";document.getElementById("quizSubmit").onclick=next;};
    };
    const next=()=>{n++;answered=false;if(n>=pool.length){finish();}else render();};
    const finish=()=>{
      const qs=JSON.parse(localStorage.getItem(quizKey)||'{"correct":0,"answered":0}');
      qs.correct+=score;qs.answered+=pool.length;localStorage.setItem(quizKey,JSON.stringify(qs));
      open('<div class="feature-kicker">QUIZ COMPLETE</div><h2 id="featureTitle">'+score+' / '+pool.length+'</h2><p class="quiz-result">'+(score>=8?"Excellent work.":"Good run. Keep practicing and try again.")+'</p><button class="button" id="quizAgain">Run another quiz</button>');
      document.getElementById("quizAgain").onclick=quiz; renderStats();
    };
    render();
  }

  document.getElementById("openQuizMode")?.addEventListener("click",quiz);
  document.getElementById("openProfile")?.addEventListener("click",profile);
  document.getElementById("openSkillTree")?.addEventListener("click",()=>document.getElementById("skillTree")?.scrollIntoView({behavior:"smooth"}));
  document.getElementById("openProjects")?.addEventListener("click",()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}));

  renderStats(); renderTree(); renderProjects(); renderLeaderboard();
  setInterval(()=>{renderStats();renderLeaderboard();},10000);
})();