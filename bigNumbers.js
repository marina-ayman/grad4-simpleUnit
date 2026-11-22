// ============================================
  // 🌐 الترجمة / i18n
  // ============================================
  const translations = {
    en: {
      title: '🔢 Big Numbers Lab',
      subtitle: '3 simple tools to master large numbers!',
      tabZeros: '🧪 Zero Lab',
      tabLine: '🚀 Number Line',
      tabCompare: '⚖️ Compare',
      zerosTitle: '🧪 Zero Lab',
      zerosDesc: 'Move the slider and see how every <strong>3 zeros</strong> create a new number name!',
      sliderLabel: 'Move to change the number of zeros 👇',
      zerosCountLabel: 'Number of zeros:',
      legendOnes: 'Group 1 (Ones)',
      legendThousands: 'Group 2 (Thousands)',
      legendMillions: 'Group 3 (Millions)',
      legendBillions: 'Group 4 (Billions)',
      legendTrillions: 'Group 5 (Trillions)',
      lineTitle: '🚀 Number Line',
      lineDesc: "Type any big number, and we'll draw it on a number line to see where the rocket stops!",
      enterNumber: 'Enter a number:',
      drawBtn: '🚀 Draw!',
      lineInfoDefault: 'Type a number and press "Draw"',
      compareTitle: '⚖️ Compare',
      compareDesc: 'Compare two numbers and pick the correct sign: <strong>&gt;</strong> (greater than), <strong>&lt;</strong> (less than), or <strong>=</strong> (equal to).',
      comparePick: 'Pick the correct sign 👆',
      newQuestion: '🎲 New Question',
      // أسماء الأعداد
      thousand: 'Thousand',
      million: 'Million',
      billion: 'Billion',
      trillion: 'Trillion',
      quadrillion: 'Quadrillion',
      // رسائل
      invalidNumber: '⚠️ Please enter a valid number greater than zero',
      numberOnScale: (formatted, scaleName, percent) =>
        `🎯 The number <strong>${formatted}</strong> on a scale from 0 to <strong>${scaleName}</strong><br>The rocket has traveled <strong>${percent}%</strong> of the journey`,
      correctMsg: '🎉 Correct! You are a genius!',
      wrongMsg: (sign) => `❌ Try again! The correct sign is ${sign}`,
      langBtn: '🌐 العربية',
    },
    ar: {
      title: '🔢 مختبر الأعداد الكبيرة',
      subtitle: '٣ أدوات بسيطة لإتقان الأعداد الكبيرة!',
      tabZeros: '🧪 مختبر الأصفار',
      tabLine: '🚀 خط الأعداد',
      tabCompare: '⚖️ قارن',
      zerosTitle: '🧪 مختبر الأصفار',
      zerosDesc: 'حرّك المؤشر وشاهد كيف كل <strong>٣ أصفار</strong> تصنع اسم عدد جديد!',
      sliderLabel: 'حرّك لتغيير عدد الأصفار 👇',
      zerosCountLabel: 'عدد الأصفار:',
      legendOnes: 'المجموعة ١ (الآحاد)',
      legendThousands: 'المجموعة ٢ (الآلاف)',
      legendMillions: 'المجموعة ٣ (الملايين)',
      legendBillions: 'المجموعة ٤ (المليارات)',
      legendTrillions: 'المجموعة ٥ (التريليونات)',
      lineTitle: '🚀 خط الأعداد',
      lineDesc: 'اكتب أي عدد كبير، وسنرسمه على خط الأعداد لنرى أين يتوقف الصاروخ!',
      enterNumber: 'أدخل عددًا:',
      drawBtn: '🚀 ارسم!',
      lineInfoDefault: 'اكتب عددًا واضغط "ارسم"',
      compareTitle: '⚖️ قارن',
      compareDesc: 'قارن بين عددين واختر الإشارة الصحيحة: <strong>&gt;</strong> (أكبر من)، <strong>&lt;</strong> (أصغر من)، أو <strong>=</strong> (يساوي).',
      comparePick: 'اختر الإشارة الصحيحة 👆',
      newQuestion: '🎲 سؤال جديد',
      thousand: 'ألف',
      million: 'مليون',
      billion: 'مليار',
      trillion: 'تريليون',
      quadrillion: 'كوادريليون',
      invalidNumber: '⚠️ من فضلك أدخل عددًا صحيحًا أكبر من صفر',
      numberOnScale: (formatted, scaleName, percent) =>
        `🎯 العدد <strong>${formatted}</strong> على مقياس من 0 إلى <strong>${scaleName}</strong><br>قطع الصاروخ <strong>${percent}%</strong> من الرحلة`,
      correctMsg: '🎉 إجابة صحيحة! أنت عبقري!',
      wrongMsg: (sign) => `❌ حاول مرة أخرى! الإشارة الصحيحة هي ${sign}`,
      langBtn: '🌐 English',
    }
  };

  let currentLang = 'en';
  const t = (key) => translations[currentLang][key];

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-ar', lang === 'ar');
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // النصوص العادية
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });
    // النصوص التي تحتوي HTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    // إعادة رسم العناصر الديناميكية باللغة الجديدة
    updateZeros();
    drawNumberLine();
    generateQuestion(true); // true = لا نعيد اختيار أرقام جديدة، فقط نعيد تطبيق النصوص
  }

  window.addEventListener('mathkids:languagechange', event => {
    if (event.detail.language !== currentLang) applyLanguage(event.detail.language);
  });

  // ============================================
  // 🎯 Tabs
  // ============================================
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tool').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tool-' + btn.dataset.tool).classList.add('active');
    });
  });

  // ============================================
  // 🛠️ Tool 1: Zero Lab
  // ============================================
  const zeroSlider = document.getElementById('zeroSlider');
  const zerosCount = document.getElementById('zerosCount');
  const zerosDisplay = document.getElementById('zerosDisplay');
  const formattedNumber = document.getElementById('formattedNumber');
  const numberName = document.getElementById('numberName');

  const groupColors = [
    { bg: 'linear-gradient(135deg, #10b981, #059669)', shadow: '0 4px 0 #047857' },
    { bg: 'linear-gradient(135deg, #3b82f6, #2563eb)', shadow: '0 4px 0 #1d4ed8' },
    { bg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', shadow: '0 4px 0 #6d28d9' },
    { bg: 'linear-gradient(135deg, #ec4899, #db2777)', shadow: '0 4px 0 #be185d' },
    { bg: 'linear-gradient(135deg, #f59e0b, #d97706)', shadow: '0 4px 0 #b45309' }
  ];

  // مفاتيح أسماء الأعداد حسب عدد الأصفار
  const numberNameKeys = {
    3:  'thousand',
    6:  'million',
    9:  'billion',
    12: 'trillion',
    15: 'quadrillion'
  };

  function updateZeros() {
    const count = parseInt(zeroSlider.value);
    // الأرقام دائمًا إنجليزية (Western digits)
    zerosCount.textContent = String(count);

    zerosDisplay.innerHTML = '';

    const groups = count / 3;

    for (let g = 0; g < groups; g++) {
      for (let i = 0; i < 3; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'zero-bubble';
        bubble.textContent = '0';
        const colorIndex = groups - 1 - g;
        bubble.style.background = groupColors[colorIndex].bg;
        bubble.style.boxShadow = groupColors[colorIndex].shadow;
        bubble.style.animationDelay = (g * 3 + i) * 0.05 + 's';
        zerosDisplay.appendChild(bubble);
      }

      if (g < groups - 1) {
        const sep = document.createElement('div');
        sep.className = 'group-separator';
        sep.textContent = ',';
        zerosDisplay.appendChild(sep);
      }
    }

    const numStr = '1' + '0'.repeat(count);
    formattedNumber.textContent = formatWithCommas(numStr);

    const key = numberNameKeys[count];
    numberName.textContent = key ? t(key) : '...';
  }

  function formatWithCommas(numStr) {
    // نستخدم الأرقام الإنجليزية دائمًا
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  zeroSlider.addEventListener('input', updateZeros);

  // ============================================
  // 🛠️ Tool 2: Number Line
  // ============================================
  const numberInput = document.getElementById('numberInput');
  const drawBtn = document.getElementById('drawBtn');
  const lineTicks = document.getElementById('lineTicks');
  const lineRocket = document.getElementById('lineRocket');
  const lineInfo = document.getElementById('lineInfo');

  // أسماء المقاييس حسب اللغة
  const scaleNames = {
    en: {
      b1: '1 Billion', b2: '2 Billion', b5: '5 Billion', b10: '10 Billion',
      m1: '1 Million', m10: '10 Million', m100: '100 Million', mB: '1 Billion',
      t10: '10 Thousand', t100: '100 Thousand', tM: '1 Million',
      hundred: '100'
    },
    ar: {
      b1: 'مليار واحد', b2: 'ملياران', b5: '٥ مليارات', b10: '١٠ مليارات',
      m1: 'مليون واحد', m10: '١٠ ملايين', m100: '١٠٠ مليون', mB: 'مليار واحد',
      t10: '١٠ آلاف', t100: '١٠٠ ألف', tM: 'مليون واحد',
      hundred: '١٠٠'
    }
  };

  function drawNumberLine() {
    let num = parseFloat(numberInput.value.replace(/,/g, ''));

    if (isNaN(num) || num <= 0) {
      lineInfo.textContent = t('invalidNumber');
      return;
    }

    let max, step, scaleKey;

    if (num >= 1_000_000_000) {
      const billions = num / 1_000_000_000;
      if (billions <= 1) { max = 1_000_000_000; step = 200_000_000; scaleKey = 'b1'; }
      else if (billions <= 2) { max = 2_000_000_000; step = 400_000_000; scaleKey = 'b2'; }
      else if (billions <= 5) { max = 5_000_000_000; step = 1_000_000_000; scaleKey = 'b5'; }
      else { max = 10_000_000_000; step = 2_000_000_000; scaleKey = 'b10'; }
    } else if (num >= 1_000_000) {
      const millions = num / 1_000_000;
      if (millions <= 1) { max = 1_000_000; step = 200_000; scaleKey = 'm1'; }
      else if (millions <= 10) { max = 10_000_000; step = 1_000_000; scaleKey = 'm10'; }
      else if (millions <= 100) { max = 100_000_000; step = 10_000_000; scaleKey = 'm100'; }
      else { max = 1_000_000_000; step = 100_000_000; scaleKey = 'mB'; }
    } else if (num >= 1_000) {
      const thousands = num / 1_000;
      if (thousands <= 10) { max = 10_000; step = 2_000; scaleKey = 't10'; }
      else if (thousands <= 100) { max = 100_000; step = 20_000; scaleKey = 't100'; }
      else { max = 1_000_000; step = 200_000; scaleKey = 'tM'; }
    } else {
      max = 100; step = 20; scaleKey = 'hundred';
    }

    const scaleName = scaleNames[currentLang][scaleKey];

    lineTicks.innerHTML = '';
    const tickCount = max / step;
    for (let i = 0; i <= tickCount; i++) {
      const value = i * step;
      const percent = (value / max) * 100;

      const tick = document.createElement('div');
      tick.className = 'line-tick';
      tick.style.left = percent + '%';
      lineTicks.appendChild(tick);

      const label = document.createElement('div');
      label.className = 'line-tick-label';
      label.style.left = percent + '%';
      label.textContent = formatShort(value);
      lineTicks.appendChild(label);
    }

    const rocketPercent = Math.min(100, Math.max(0, (num / max) * 100));
    lineRocket.style.left = rocketPercent + '%';

    const percentOfScale = Math.round((num / max) * 100);
    // الأرقام دائمًا إنجليزية
    lineInfo.innerHTML = t('numberOnScale')(formatWithCommas(String(num)), scaleName, percentOfScale);
  }

  function formatShort(num) {
    // نستخدم الاختصارات الإنجليزية دائمًا (K, M, B) للحفاظ على الأرقام لاتينية
    if (num >= 1_000_000_000) return (num / 1_000_000_000) + 'B';
    if (num >= 1_000_000) return (num / 1_000_000) + 'M';
    if (num >= 1_000) return (num / 1_000) + 'K';
    return num.toString();
  }

  drawBtn.addEventListener('click', drawNumberLine);
  numberInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') drawNumberLine();
  });

  // ============================================
  // 🛠️ Tool 3: Comparison
  // ============================================
  const numLeft = document.getElementById('numLeft');
  const numRight = document.getElementById('numRight');
  const compareFeedback = document.getElementById('compareFeedback');
  const signBtns = document.querySelectorAll('.sign-btn');
  const newQuestionBtn = document.getElementById('newQuestionBtn');

  let currentAnswer = null;
  let currentPair = null;

  const numberPairs = [
    [110950000, 111095000],
    [213610000, 203161000],
    [5000000, 5000000],
    [900000000, 899999999],
    [1500000000, 1500000000],
    [75000000, 750000000],
    [1000000, 999999],
    [2500000000, 2500000000]
  ];

  function generateQuestion(keepPair = false) {
    if (!keepPair || !currentPair) {
      currentPair = numberPairs[Math.floor(Math.random() * numberPairs.length)];
    }
    const [left, right] = currentPair;

    // الأرقام دائمًا إنجليزية
    numLeft.textContent = formatWithCommas(String(left));
    numRight.textContent = formatWithCommas(String(right));

    if (left > right) currentAnswer = '>';
    else if (left < right) currentAnswer = '<';
    else currentAnswer = '=';

    signBtns.forEach(btn => {
      btn.classList.remove('correct', 'wrong');
    });

    compareFeedback.textContent = t('comparePick');
    compareFeedback.className = 'compare-feedback';
  }

  signBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen = btn.dataset.sign;
      signBtns.forEach(b => b.classList.remove('correct', 'wrong'));

      if (chosen === currentAnswer) {
        btn.classList.add('correct');
        compareFeedback.textContent = t('correctMsg');
        compareFeedback.className = 'compare-feedback success';
      } else {
        btn.classList.add('wrong');
        const correctBtn = Array.from(signBtns).find(b => b.dataset.sign === currentAnswer);
        if (correctBtn) correctBtn.classList.add('correct');
        compareFeedback.textContent = t('wrongMsg')(currentAnswer);
        compareFeedback.className = 'compare-feedback error';
      }
    });
  });

  newQuestionBtn.addEventListener('click', () => generateQuestion(false));

  // ============================================
  // 🚀 التهيئة الأولى
  // ============================================
  applyLanguage('en');
  setTimeout(() => { drawNumberLine(); }, 100);
