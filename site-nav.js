(() => {
  const root = document.getElementById('site-nav-root') || (() => {
    const element = document.createElement('div');
    element.id = 'site-nav-root';
    document.body.prepend(element);
    return element;
  })();
  const savedLanguage = localStorage.getItem('mathkids-language');
  const initialLanguage = savedLanguage === 'en' || savedLanguage === 'ar'
    ? savedLanguage
    : 'ar';
  let currentLanguage = '';
  const pageTranslations = window.MathKidsPageTranslations;
  const originalText = new WeakMap();
  const translatedText = new WeakMap();
  const originalAttributes = new WeakMap();

  const lessons = [
    { ar: 'الوحدة الأولى: الأعداد الكبيرة', en: 'Unit 1: Large Numbers', key: 0, section: 'sec0' },
    { ar: 'الوحدة الثانية: الجمع والطرح', en: 'Unit 2: Addition & Subtraction', key: 1, section: 'sec5' },
    { ar: 'الوحدة الثالثة: القياس', en: 'Unit 3: Measurement', key: 3, section: 'sec4' },
    { ar: 'الوحدة الرابعة: الهندسة', en: 'Unit 4: Geometry', key: 4, section: 'sec3' },
    { ar: 'الوحدة الخامسة: الضرب', en: 'Unit 5: Multiplication', key: 2, section: 'sec1' }
  ];

  function render() {
    const isArabic = currentLanguage === 'ar';
    const text = isArabic ? {
      home: 'الرئيسية', units: 'الوحدات', summary: 'الملخص', activity: 'النشاط التفاعلي', review: 'المراجعة', games: 'الألعاب', tools: 'أدوات إضافية',
      monthlyReview: 'مراجعة الشهر الثاني', fullReview: 'المراجعة التفاعلية الشاملة',
      bigLab: 'مختبر الأعداد الكبيرة', exam: 'اختبار الأعداد الكبيرة', sets: 'المجموعات على خط الأعداد', oldHome: 'صفحة MathKids التعليمية'
    } : {
      home: 'Home', units: 'Units', summary: 'Summary', activity: 'Interactive activity', review: 'Review', games: 'Games', tools: 'More tools',
      monthlyReview: 'Second-month review', fullReview: 'Interactive review',
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
            <details>
              <summary>📝 ${text.review} <span aria-hidden="true">⌄</span></summary>
              <div class="site-nav-tools">
                <a href="reviewNov.html">⭐ ${text.monthlyReview}</a>
                <a href="reviewAndH.w.html">📘 ${text.fullReview}</a>
              </div>
            </details>
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
          <button class="site-nav-language" type="button" aria-label="${isArabic ? 'Switch language to English' : 'التبديل إلى العربية'}">${isArabic ? 'English' : 'العربية'}</button>
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

  function translatedValue(source, language) {
    if (!pageTranslations || language === pageTranslations.sourceLanguage) return source;

    const dictionary = pageTranslations.translations && pageTranslations.translations[language];
    if (dictionary && Object.prototype.hasOwnProperty.call(dictionary, source)) {
      return dictionary[source];
    }

    for (const rule of pageTranslations.patterns || []) {
      rule.pattern.lastIndex = 0;
      if (rule.pattern.test(source)) return source.replace(rule.pattern, rule.replace);
    }

    return source;
  }

  function translateTextNode(node) {
    if (!node.nodeValue || !node.nodeValue.trim()) return;
    const parent = node.parentElement;
    if (!parent || parent.closest('script, style, noscript, textarea, code, pre')) return;

    if (!originalText.has(node) || node.nodeValue !== translatedText.get(node)) {
      originalText.set(node, node.nodeValue);
    }
    const source = originalText.get(node);
    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    const value = source.slice(leading.length, source.length - trailing.length);
    const translated = `${leading}${translatedValue(value, currentLanguage)}${trailing}`;
    translatedText.set(node, translated);
    if (node.nodeValue !== translated) node.nodeValue = translated;
  }

  function translateAttributes(element) {
    if (element.matches('script, style, noscript, textarea')) return;
    const names = ['alt', 'aria-label', 'placeholder', 'title'];
    if (element instanceof HTMLInputElement && ['button', 'submit', 'reset'].includes(element.type)) {
      names.push('value');
    }

    if (!originalAttributes.has(element)) originalAttributes.set(element, new Map());
    const originals = originalAttributes.get(element);
    names.forEach(name => {
      if (!element.hasAttribute(name)) return;
      const current = element.getAttribute(name);
      let original = originals.get(name);
      if (!original || current !== original.translated) {
        original = { source: current, translated: current };
        originals.set(name, original);
      }
      const translated = translatedValue(original.source, currentLanguage);
      original.translated = translated;
      if (current !== translated) element.setAttribute(name, translated);
    });
  }

  function translateSubtree(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      translateTextNode(node);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.DOCUMENT_NODE) return;

    if (node.nodeType === Node.ELEMENT_NODE) translateAttributes(node);
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = walker.nextNode())) translateTextNode(textNode);
    if (node.nodeType === Node.ELEMENT_NODE) {
      node.querySelectorAll('*').forEach(translateAttributes);
    }
  }

  function dispatchLanguageChange() {
    window.dispatchEvent(new CustomEvent('mathkids:languagechange', {
      detail: { language: currentLanguage }
    }));
  }

  function setLanguage(language, persist) {
    if (language !== 'ar' && language !== 'en') return;
    const changed = currentLanguage !== language;
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    if (persist) localStorage.setItem('mathkids-language', language);
    render();
    translateSubtree(document.documentElement);
    if (changed) dispatchLanguageChange();
  }

  root.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    if (event.target.closest('.site-nav-language')) {
      setLanguage(currentLanguage === 'ar' ? 'en' : 'ar', true);
    }
  });

  setLanguage(initialLanguage, false);

  new MutationObserver(() => {
    const language = document.documentElement.lang === 'en' ? 'en' : 'ar';
    if (language !== currentLanguage) setLanguage(language, true);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  new MutationObserver(records => {
    records.forEach(record => {
      if (record.type === 'characterData') translateTextNode(record.target);
      record.addedNodes.forEach(translateSubtree);
    });
  }).observe(document.documentElement, { childList: true, characterData: true, subtree: true });
})();
