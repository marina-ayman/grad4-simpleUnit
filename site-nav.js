(() => {
  const root = document.getElementById('site-nav-root') || (() => {
    const element = document.createElement('div');
    element.id = 'site-nav-root';
    document.body.prepend(element);
    return element;
  })();

  const lessons = [
    { ar: 'الوحدة الأولى: الأعداد الكبيرة', en: 'Unit 1: Large Numbers', key: 0, section: 'sec0' },
    { ar: 'الوحدة الثانية: الجمع والطرح', en: 'Unit 2: Addition & Subtraction', key: 1, section: 'sec5' },
    { ar: 'الوحدة الثالثة: القياس', en: 'Unit 3: Measurement', key: 3, section: 'sec4' },
    { ar: 'الوحدة الرابعة: الهندسة', en: 'Unit 4: Geometry', key: 4, section: 'sec3' },
    { ar: 'الوحدة الخامسة: الضرب', en: 'Unit 5: Multiplication', key: 2, section: 'sec1' }
  ];

  function render() {
    const isArabic = document.documentElement.lang === 'ar';
    const text = isArabic ? {
      home: 'الرئيسية', units: 'الوحدات', summary: 'الملخص', activity: 'النشاط التفاعلي', review: 'المراجعة', games: 'الألعاب', tools: 'أدوات إضافية',
      bigLab: 'مختبر الأعداد الكبيرة', exam: 'اختبار الأعداد الكبيرة', sets: 'المجموعات على خط الأعداد', oldHome: 'صفحة MathKids التعليمية'
    } : {
      home: 'Home', units: 'Units', summary: 'Summary', activity: 'Interactive activity', review: 'Review', games: 'Games', tools: 'More tools',
      bigLab: 'Big Numbers Lab', exam: 'Large Numbers Exam', sets: 'Sets on a Number Line', oldHome: 'MathKids learning page'
    };
    const unitCards = lessons.map(lesson => `
      <section class="site-nav-unit">
        <h3>${isArabic ? lesson.ar : lesson.en}</h3>
        <div class="site-nav-unit-actions">
          <a href="index.html?unit=${lesson.key}#unit-summary">📘 ${text.summary}</a>
          <a href="reviewAndH.w.html?section=${lesson.section}">✏️ ${text.activity}</a>
        </div>
      </section>`).join('');

    root.innerHTML = `
      <nav class="site-nav" aria-label="${isArabic ? 'التنقل الرئيسي' : 'Main navigation'}">
        <div class="site-nav-inner">
          <a class="site-brand" href="index.html"><span class="site-brand-mark">★</span><span>MathKids</span></a>
          <div class="site-nav-links">
            <a class="site-nav-link" href="index.html">🏠 ${text.home}</a>
            <details>
              <summary>📚 ${text.units} <span aria-hidden="true">⌄</span></summary>
              <div class="site-nav-panel">${unitCards}</div>
            </details>
            <a class="site-nav-link" href="reviewAndH.w.html">📝 ${text.review}</a>
            <a class="site-nav-link" href="games.html">🎮 ${text.games}</a>
            <details>
              <summary>🧰 ${text.tools} <span aria-hidden="true">⌄</span></summary>
              <div class="site-nav-tools">
                <a href="Big%20Numbers%20.html">🔢 ${text.bigLab}</a>
                <a href="largeNo.html">📝 ${text.exam}</a>
                <a href="sets.html">📏 ${text.sets}</a>
                <a href="deepseek_html_20260921_ffe7c0.html">📚 ${text.oldHome}</a>
              </div>
            </details>
          </div>
        </div>
      </nav>`;

    root.querySelectorAll('.site-nav details').forEach(details => {
      details.addEventListener('toggle', () => {
        if (!details.open) return;
        root.querySelectorAll('.site-nav details').forEach(other => {
          if (other !== details) other.open = false;
        });
      });
    });
  }

  render();
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
