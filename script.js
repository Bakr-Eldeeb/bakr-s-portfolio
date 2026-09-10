const projects = [
  {
    title: 'Gymvance',
    category: 'Gym Management SaaS',
    role: 'Full Stack Developer',
    accent: '#70d700',
    tech: ['Angular', 'TypeScript', 'Supabase'],
    live: 'https://gymvanceapp.com/login',
    code: 'https://github.com/Bakr-Eldeeb/gymora.git',
    description: {
      en: 'A full-stack gym management platform designed to simplify membership management, attendance tracking, payments, subscriptions, branches and daily gym operations.',
      ar: 'منصة متكاملة لإدارة الجيم تساعد على تنظيم الأعضاء والحضور والمدفوعات والاشتراكات والفروع والعمليات اليومية.'
    },
    images: ['gymvance-1.png','gymvance-2.png','gymvance-3.png','gymvance-4.png','gymvance-5.png','gymvance-6.png']
  },
  {
    title: 'CV Masterpiece',
    category: 'Career Services Website',
    role: 'Frontend Developer',
    accent: '#e65252',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://www.cvmasterpiece.com/',
    code: 'https://github.com/bakrma7moud777/cvmasterpiece.git',
    description: {
      en: 'A responsive career-services website for professional CV writing, LinkedIn optimization and career-development services.',
      ar: 'موقع متجاوب لخدمات التطوير المهني، يشمل كتابة السيرة الذاتية وتحسين LinkedIn وخدمات تطوير المسار الوظيفي.'
    },
    images: ['cvm-1.png','cvm-2.png','cvm-3.png','cvm-4.png']
  },
  {
    title: 'Mobile Hub',
    category: 'Angular E-commerce Application',
    role: 'Frontend / Angular Developer',
    accent: '#d6b52e',
    tech: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Angular Data Service'],
    live: 'https://mobile-hub-gamma.vercel.app/',
    code: 'https://github.com/Bakr-Eldeeb/mobile-hub.git',
    description: {
      en: 'An Angular e-commerce application for browsing mobile devices, searching products and managing shopping-cart interactions.',
      ar: 'تطبيق تجارة إلكترونية مبني بـ Angular لعرض الهواتف والبحث في المنتجات وإدارة سلة التسوق.'
    },
    images: ['mobilehub-1.png','mobilehub-2.png','mobilehub-3.png','mobilehub-4.png','mobilehub-5.png','mobilehub-6.png','mobilehub-7.png','mobilehub-8.png']
  }
];

const i18n = {
  en: {
    'nav.home':'Home','nav.about':'About','nav.experience':'Experience','nav.skills':'Skills','nav.work':'Work','nav.contact':'Contact','nav.talk':"Let's Talk",
    'hero.hello':"HELLO, I'M",'hero.role':'Full Stack Developer','hero.lead':'I build practical web applications, from clean user interfaces to full-stack systems.','hero.viewWork':'View My Work','hero.based':'Based in','hero.location':'Heliopolis, Cairo','hero.availableFor':'Available for','hero.opportunities':'Opportunities','hero.email':'Email',
    'experience.kicker':'EXPERIENCE','experience.title':'Real-world experience, built into the way I work.','experience.duration':'1 YEAR','experience.label':'Professional Experience','experience.text':'One year of professional experience at UIS, bringing my development skills into a real work environment.','experience.tag1':'Development','experience.tag2':'Problem Solving','experience.tag3':'Team Workflow',
    'about.kicker':'ABOUT ME','about.title':'Building useful products, one problem at a time.','about.p1':"I'm a Full Stack Developer focused on building practical, maintainable and user-friendly web applications.",'about.p2':'My work covers frontend development using Angular and JavaScript, backend development using C# and .NET, and database-driven applications with SQL, Supabase and Firebase.','about.frontend':'Frontend','about.backend':'Backend','about.data':'Data','about.focus':'Focus','about.focusValue':'Full Stack Development',
    'skills.kicker':'MY SKILLS','skills.title':'Tools & technologies I work with.','skills.frontend':'Frontend','skills.backend':'Backend & Programming','skills.data':'Databases & Services',
    'work.kicker':'SELECTED WORK','work.title':"Projects I've built.",'work.note':'Use the arrows or your keyboard to turn the project pages.','work.live':'Live Project','work.code':'View Code','work.prev':'Previous','work.next':'Next',
    'contact.whatsappCta':'Chat on WhatsApp ↗','contact.kicker':'CONTACT','contact.title':"Let's build something useful.",'contact.text':'Have an opportunity, idea or project? Feel free to reach out.','contact.phone':'Phone','contact.location':'Location','contact.locationValue':'Heliopolis, Cairo, Egypt',
    'form.name':'Name','form.email':'Email','form.subject':'Subject','form.message':'Message','form.send':'Send Message','form.note':'This opens your email app — no data is stored.','footer.role':'Full Stack Developer'
  },
  ar: {
    'nav.home':'الرئيسية','nav.about':'نبذة','nav.experience':'الخبرة','nav.skills':'المهارات','nav.work':'المشاريع','nav.contact':'تواصل','nav.talk':'تواصل معي',
    'hero.hello':'أهلًا، أنا','hero.role':'مطور Full Stack','hero.lead':'أبني تطبيقات ويب عملية، من واجهات مستخدم نظيفة إلى أنظمة Full Stack متكاملة.','hero.viewWork':'شاهد مشاريعي','hero.based':'الموقع','hero.location':'مصر الجديدة، القاهرة','hero.availableFor':'متاح لـ','hero.opportunities':'فرص جديدة','hero.email':'البريد الإلكتروني',
    'experience.kicker':'الخبرة','experience.title':'خبرة عملية حقيقية تنعكس على طريقة شغلي.','experience.duration':'سنة واحدة','experience.label':'خبرة مهنية','experience.text':'لدي سنة من الخبرة المهنية في شركة UIS، طبقت خلالها مهاراتي في بيئة عمل حقيقية.','experience.tag1':'تطوير','experience.tag2':'حل المشكلات','experience.tag3':'العمل ضمن فريق',
    'about.kicker':'نبذة عني','about.title':'أبني منتجات مفيدة، مشكلة واحدة في كل مرة.','about.p1':'أنا مطور Full Stack أركز على بناء تطبيقات ويب عملية وقابلة للصيانة وسهلة الاستخدام.','about.p2':'أعمل على الواجهات باستخدام Angular وJavaScript، وعلى الخلفية باستخدام C# و.NET، ومع قواعد البيانات والخدمات مثل SQL وSupabase وFirebase.','about.frontend':'الواجهة الأمامية','about.backend':'الخلفية','about.data':'البيانات','about.focus':'التركيز','about.focusValue':'تطوير Full Stack',
    'skills.kicker':'مهاراتي','skills.title':'الأدوات والتقنيات التي أعمل بها.','skills.frontend':'الواجهة الأمامية','skills.backend':'الخلفية والبرمجة','skills.data':'قواعد البيانات والخدمات',
    'work.kicker':'أعمال مختارة','work.title':'مشاريع قمت ببنائها.','work.note':'استخدم الأسهم أو لوحة المفاتيح للتنقل بين صفحات المشاريع.','work.live':'المشروع مباشر','work.code':'عرض الكود','work.prev':'السابق','work.next':'التالي',
    'contact.whatsappCta':'تواصل عبر واتساب ↗','contact.kicker':'تواصل','contact.title':'خلينا نبني حاجة مفيدة.','contact.text':'عندك فرصة أو فكرة أو مشروع؟ تقدر تتواصل معي مباشرة.','contact.phone':'الهاتف','contact.location':'الموقع','contact.locationValue':'مصر الجديدة، القاهرة، مصر',
    'form.name':'الاسم','form.email':'البريد الإلكتروني','form.subject':'الموضوع','form.message':'الرسالة','form.send':'إرسال الرسالة','form.note':'النموذج يفتح تطبيق البريد لديك ولا يخزن أي بيانات.','footer.role':'مطور Full Stack'
  }
};

let projectIndex = 0;
let screenIndex = 0;
let lang = localStorage.getItem('bakr-lang') || 'en';

const els = {
  header: document.querySelector('.site-header'),
  menuBtn: document.getElementById('menuBtn'),
  mobileNav: document.getElementById('mobileNav'),
  themeToggle: document.getElementById('themeToggle'),
  langToggle: document.getElementById('langToggle'),
  book: document.getElementById('projectBook'),
  bookStage: document.getElementById('bookStage'),
  projectIndex: document.getElementById('projectIndex'),
  projectCategory: document.getElementById('projectCategory'),
  projectTitle: document.getElementById('projectTitle'),
  projectRole: document.getElementById('projectRole'),
  projectDescription: document.getElementById('projectDescription'),
  projectTech: document.getElementById('projectTech'),
  projectLive: document.getElementById('projectLive'),
  projectCode: document.getElementById('projectCode'),
  projectImage: document.getElementById('projectImage'),
  screenCounter: document.getElementById('screenCounter'),
  prevProject: document.getElementById('prevProject'),
  nextProject: document.getElementById('nextProject'),
  prevScreen: document.getElementById('prevScreen'),
  nextScreen: document.getElementById('nextScreen'),
  projectDots: document.getElementById('projectDots'),
  contactForm: document.getElementById('contactForm'),
  turnSheet: document.getElementById('turnSheet'),
  turnFront: document.getElementById('turnFront'),
  turnBack: document.getElementById('turnBack'),
  screenFrame: document.getElementById('screenFrame'),
  scrollProgress: document.getElementById('scrollProgress'),
  bootScreen: document.getElementById('bootScreen')
};

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('bakr-theme', theme);
  els.themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  const icon = els.themeToggle.querySelector('.theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#0b0d0c' : '#f4f1e9');
}

function applyLanguage(nextLang) {
  lang = nextLang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('bakr-lang', lang);
  els.langToggle.textContent = lang === 'en' ? 'AR' : 'EN';
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    if (i18n[lang][key]) node.textContent = i18n[lang][key];
  });
  renderProject(false);
}

function buildDots() {
  els.projectDots.innerHTML = '';
  projects.forEach((project, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', `Open ${project.title}`);
    btn.addEventListener('click', () => switchProject(i, i > projectIndex ? 'next' : 'prev'));
    els.projectDots.appendChild(btn);
  });
}

function renderProject(animate = true) {
  const p = projects[projectIndex];
  els.projectIndex.textContent = `${String(projectIndex + 1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}`;
  els.projectCategory.textContent = p.category;
  if (els.bookStage) els.bookStage.style.setProperty('--project-accent', p.accent || 'var(--accent)');
  els.projectTitle.textContent = p.title;
  els.projectRole.textContent = p.role;
  els.projectDescription.textContent = p.description[lang];
  els.projectTech.innerHTML = p.tech.map(t => `<span>${t}</span>`).join('');
  els.projectLive.href = p.live;
  els.projectCode.href = p.code;
  screenIndex = Math.min(screenIndex, p.images.length - 1);
  els.projectImage.src = `assets/${p.images[screenIndex]}`;
  els.projectImage.alt = `${p.title} screenshot ${screenIndex + 1}`;
  els.screenCounter.textContent = `${screenIndex + 1} / ${p.images.length}`;
  [...els.projectDots.children].forEach((dot, i) => dot.classList.toggle('active', i === projectIndex));
  if (!animate) return;
}

let isTurning = false;

function turnPreviewCopy(project, index) {
  const copy = project.description[lang];
  return `<div class="turn-preview-copy"><small>${String(index + 1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}</small><strong>${project.title}</strong><span>${project.category}</span><span>${copy}</span></div>`;
}

function switchProject(nextIndex, direction = 'next') {
  const normalized = (nextIndex + projects.length) % projects.length;
  if (normalized === projectIndex || isTurning) return;

  const nextProject = projects[normalized];
  const currentProject = projects[projectIndex];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = window.innerWidth <= 980;

  if (reduceMotion || mobile || !els.turnSheet) {
    els.book.classList.add(direction === 'next' ? 'flipping-next' : 'flipping-prev');
    setTimeout(() => {
      projectIndex = normalized;
      screenIndex = 0;
      renderProject(false);
      els.book.classList.remove('flipping-next', 'flipping-prev');
    }, reduceMotion ? 0 : 190);
    return;
  }

  isTurning = true;
  els.turnSheet.className = 'turn-sheet';

  if (direction === 'next') {
    els.turnFront.innerHTML = `<img class="turn-preview-img" src="assets/${currentProject.images[screenIndex]}" alt="">`;
    els.turnBack.innerHTML = turnPreviewCopy(nextProject, normalized);
  } else {
    els.turnFront.innerHTML = turnPreviewCopy(currentProject, projectIndex);
    els.turnBack.innerHTML = `<img class="turn-preview-img" src="assets/${nextProject.images[0]}" alt="">`;
  }

  void els.turnSheet.offsetWidth;
  els.turnSheet.classList.add(direction === 'next' ? 'is-next' : 'is-prev');

  setTimeout(() => {
    projectIndex = normalized;
    screenIndex = 0;
    renderProject(false);
  }, 430);

  setTimeout(() => {
    els.turnSheet.className = 'turn-sheet';
    els.turnFront.innerHTML = '';
    els.turnBack.innerHTML = '';
    isTurning = false;
  }, 890);
}

function switchScreen(delta) {
  const p = projects[projectIndex];
  els.projectImage.classList.add('swap');
  setTimeout(() => {
    screenIndex = (screenIndex + delta + p.images.length) % p.images.length;
    els.projectImage.src = `assets/${p.images[screenIndex]}`;
    els.projectImage.alt = `${p.title} screenshot ${screenIndex + 1}`;
    els.screenCounter.textContent = `${screenIndex + 1} / ${p.images.length}`;
    els.projectImage.classList.remove('swap');
  }, 140);
}

function initReveals() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .14 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function updateScrollUI() {
  els.header.classList.toggle('scrolled', window.scrollY > 12);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
  if (els.scrollProgress) els.scrollProgress.style.width = `${progress}%`;
}
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

els.menuBtn.addEventListener('click', () => {
  const open = els.mobileNav.classList.toggle('open');
  els.menuBtn.setAttribute('aria-expanded', String(open));
});
els.mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  els.mobileNav.classList.remove('open');
  els.menuBtn.setAttribute('aria-expanded', 'false');
}));

els.themeToggle.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  setTheme(current === 'dark' ? 'light' : 'dark');
});
els.langToggle.addEventListener('click', () => applyLanguage(lang === 'en' ? 'ar' : 'en'));

els.prevProject.addEventListener('click', () => switchProject(projectIndex - 1, 'prev'));
els.nextProject.addEventListener('click', () => switchProject(projectIndex + 1, 'next'));
els.prevScreen.addEventListener('click', () => switchScreen(-1));
els.nextScreen.addEventListener('click', () => switchScreen(1));

document.addEventListener('keydown', (e) => {
  const workTop = document.getElementById('work').getBoundingClientRect();
  const workVisible = workTop.top < window.innerHeight * .8 && workTop.bottom > window.innerHeight * .2;
  if (!workVisible) return;
  if (e.key === 'ArrowRight') switchProject(projectIndex + (lang === 'ar' ? -1 : 1), lang === 'ar' ? 'prev' : 'next');
  if (e.key === 'ArrowLeft') switchProject(projectIndex + (lang === 'ar' ? 1 : -1), lang === 'ar' ? 'next' : 'prev');
});

let touchX = null;
els.book.addEventListener('touchstart', e => touchX = e.changedTouches[0].screenX, { passive: true });
els.book.addEventListener('touchend', e => {
  if (touchX == null) return;
  const dx = e.changedTouches[0].screenX - touchX;
  if (Math.abs(dx) > 55) {
    const natural = dx < 0 ? 1 : -1;
    switchProject(projectIndex + (lang === 'ar' ? -natural : natural), natural > 0 ? 'next' : 'prev');
  }
  touchX = null;
}, { passive: true });

els.contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(els.contactForm);
  const subject = encodeURIComponent(data.get('subject') || 'Portfolio inquiry');
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
  window.location.href = `mailto:bakr.ma7moud.777@gmail.com?subject=${subject}&body=${body}`;
});


function initBoot() {
  if (!els.bootScreen) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const seen = sessionStorage.getItem('bakr-boot-seen');
  if (seen || reduceMotion) {
    els.bootScreen.classList.add('done');
    return;
  }
  sessionStorage.setItem('bakr-boot-seen', '1');
  setTimeout(() => els.bootScreen.classList.add('done'), 980);
}

function initActiveNav() {
  const navLinks = [...document.querySelectorAll('.desktop-nav a, .mobile-nav a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const byId = new Map();
  navLinks.forEach(link => {
    const id = link.getAttribute('href')?.slice(1);
    if (!byId.has(id)) byId.set(id, []);
    byId.get(id)?.push(link);
  });
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach(a => a.classList.remove('active'));
    (byId.get(visible.target.id) || []).forEach(a => a.classList.add('active'));
  }, { rootMargin: '-34% 0px -52% 0px', threshold: [0,.1,.25,.5] });
  sections.forEach(section => observer.observe(section));
}

function initProjectParallax() {
  if (!els.screenFrame || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer:fine)').matches) return;
  els.screenFrame.addEventListener('mousemove', e => {
    const rect = els.screenFrame.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - .5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - .5) * 2;
    els.projectImage.style.setProperty('--img-x', `${nx * 4}px`);
    els.projectImage.style.setProperty('--img-y', `${ny * 4}px`);
  });
  els.screenFrame.addEventListener('mouseleave', () => {
    els.projectImage.style.setProperty('--img-x', '0px');
    els.projectImage.style.setProperty('--img-y', '0px');
  });
}

setTheme(document.documentElement.dataset.theme || 'dark');
initBoot();
buildDots();
applyLanguage(lang);
renderProject(false);
initReveals();
initActiveNav();
initProjectParallax();
