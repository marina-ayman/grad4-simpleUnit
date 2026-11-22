/* ============================================================
   🌐 الترجمة / i18n
============================================================ */
const translations = {
  en: {
    appTitle: 'Large Numbers',
    progressLabel: '🚀 Progress:',
    placeChartTitle: 'Place Value Chart',
    btnHundredMillion: '🔹 100 Million',
    btnBillion: '🌟 1 Billion',
    btnRandom: '🎲 Random',
    btnIncrement: '➕ +1 Million',
    btnDecrement: '➖ -1 Million',
    englishTitle: 'English Reading',
    builderInstructions: '🔊 <strong>Listen</strong> first, then <strong>build the number</strong> by clicking or dragging the word chips into the blue box!',
    listenBtn: '🔊 Listen',
    checkBuildBtn: '✅ Check My Answer',
    resetBuildBtn: '🔄 Reset',
    undoBuildBtn: '↩ Undo',
    builderFeedbackDefault: '💡 Click the word chips below to add them to the box. You can also drag them!',
    revealLabel: '✅ Correct Answer:',
    expandedTitle: 'Expanded Form',
    calcTitle: 'Calculating Large Numbers',
    calcAddMillion: '+ 1,000,000',
    calcSubMillion: '- 1,000,000',
    calcAddBillion: '+ 1,000,000,000',
    calcReset: '↺ Reset',
    calcMessageDefault: '✅ Current number is ready',
    quizTitle: 'Mini Quiz',
    checkQuizBtn: '✅ Check Answer',
    zooTitle: 'Zoo Chart Training',
    zooDescription: '🏞️ <strong>Welcome to the zoo!</strong> Click on an animal, then <strong>click on the chart</strong> to answer, and <strong>edit your answer by clicking the orange box</strong> that pops up!',
    zooHintDefault: '🖱️ Click on the chart at the height that matches the number. Then click the orange box to edit it.',
    checkZooBtn: '✅ Check Answers',
    resetZooBtn: '🔄 New Numbers',
    examTitle: 'Finish Exam',
    examStatusDefault: '🎯 Answer quiz questions, build the English reading, and complete the zoo training. Then click below to see your result!',
    finishBtn: '🎓 Show My Result',
    resultTitleDefault: 'Exam Completed!',
    tryAgainBtn: '🔄 Try Again',
    closeResultBtn: '❌ Close',
    langBtn: '🌐 العربية',
    // dynamic
    placeGroups: { billions: 'Billions', millions: 'Millions', thousands: 'Thousands', ones: 'Ones' },
    placeNames: { hundred: 'Hundred', ten: 'Ten', one: 'One' },
    quizQuestion: (digit, num) => `What is the place value of the digit ${digit} in ${num}?`,
    quizFeedbackSelect: '⚠️ Please select an answer first!',
    quizFeedbackCorrect: '🎉 Correct! Amazing job!',
    quizFeedbackWrong: (ans) => `❌ Oops! The correct answer is "${ans}"`,
    quizPlaceNames: ['ones','tens','hundreds','thousands','ten thousands','hundred thousands',
      'millions','ten millions','hundred millions','billions','ten billions','hundred billions'],
    zooHintAnimal: (emoji, name) => `🖱️ Now click on the chart at the height for ${emoji} ${name}!`,
    zooFeedbackPerfect: (n) => `🎉 PERFECT! All ${n} animals counted correctly! 🏆`,
    zooFeedbackPartial: (c, t) => `📝 You got ${c} out of ${t} correct. Click the chart to fix wrong answers!`,
    zooHintReset: '🖱️ Click on the chart at the height that matches the number you want to answer.',
    builderFeedbackEmpty: '⚠️ Add some words first!',
    builderFeedbackCorrect: '🎉 Perfect! You built the number correctly!',
    builderFeedbackWrong: '❌ Not quite! Compare with the correct answer above, then click Reset to try again.',
    listening: '🔊 Listening...',
    listenedNowBuild: '✅ Now build the number by clicking the words below!',
    speechNotSupported: '❌ Speech synthesis not supported.',
    calcMessageSet: (num) => `✅ Number set to ${num}`,
    finishWarning: '⚠️ Please try the quiz, English reading, and zoo training before finishing!',
    resultStudent: '👤 <strong>Student:</strong>',
    resultQuiz: '❓ <strong>Quiz:</strong>',
    resultZoo: '🦁 <strong>Zoo:</strong>',
    resultEnglish: '🗣️ <strong>English:</strong>',
    resultDate: '📅 <strong>Date:</strong>',
    resultCorrect: 'correct',
    resultSkills: 'skills',
    resultPts: 'pts',
    resultTitles: {
      outstanding: 'Outstanding!',
      great: 'Great Job!',
      good: 'Good Effort!',
      keep: 'Keep Practicing!'
    },
    resultMessages: {
      outstanding: 'You are a Large Numbers champion! 🌟',
      great: 'You did very well! Keep it up! 💪',
      good: "A little more practice and you'll be a pro! 🚀",
      keep: 'Review the place value chart and try again! 💡'
    }
  },
  ar: {
    appTitle: 'الأعداد الكبيرة',
    progressLabel: '🚀 التقدم:',
    placeChartTitle: 'جدول القيم المكانية',
    btnHundredMillion: '🔹 100 مليون',
    btnBillion: '🌟 مليار',
    btnRandom: '🎲 عشوائي',
    btnIncrement: '➕ +1 مليون',
    btnDecrement: '➖ -1 مليون',
    englishTitle: 'القراءة الإنجليزية',
    builderInstructions: '🔊 <strong>استمع</strong> أولًا، ثم <strong>ابنِ العدد</strong> بالضغط على بطاقات الكلمات أو سحبها إلى المربع الأزرق!',
    listenBtn: '🔊 استمع',
    checkBuildBtn: '✅ تحقق من إجابتي',
    resetBuildBtn: '🔄 إعادة',
    undoBuildBtn: '↩ تراجع',
    builderFeedbackDefault: '💡 اضغط على بطاقات الكلمات بالأسفل لإضافتها إلى المربع. يمكنك أيضًا سحبها!',
    revealLabel: '✅ الإجابة الصحيحة:',
    expandedTitle: 'الصيغة الموسعة',
    calcTitle: 'حساب الأعداد الكبيرة',
    calcAddMillion: '+ 1,000,000',
    calcSubMillion: '- 1,000,000',
    calcAddBillion: '+ 1,000,000,000',
    calcReset: '↺ إعادة',
    calcMessageDefault: '✅ العدد الحالي جاهز',
    quizTitle: 'اختبار سريع',
    checkQuizBtn: '✅ تحقق من الإجابة',
    zooTitle: 'تدريب مخطط الحديقة',
    zooDescription: '🏞️ <strong>مرحبًا بك في حديقة الحيوانات!</strong> اضغط على حيوان، ثم <strong>اضغط على المخطط</strong> للإجابة، و<strong>عدّل إجابتك بالضغط على المربع البرتقالي</strong> الذي يظهر!',
    zooHintDefault: '🖱️ اضغط على المخطط عند الارتفاع المطابق للعدد. ثم اضغط على المربع البرتقالي لتعديله.',
    checkZooBtn: '✅ تحقق من الإجابات',
    resetZooBtn: '🔄 أعداد جديدة',
    examTitle: 'إنهاء الامتحان',
    examStatusDefault: '🎯 أجب عن أسئلة الاختبار، وابنِ القراءة الإنجليزية، وأكمل تدريب الحديقة. ثم اضغط بالأسفل لرؤية نتيجتك!',
    finishBtn: '🎓 أظهر نتيجتي',
    resultTitleDefault: 'اكتمل الامتحان!',
    tryAgainBtn: '🔄 حاول مجددًا',
    closeResultBtn: '❌ إغلاق',
    langBtn: '🌐 English',
    welcomeUser: (name) => `👋 مرحبًا، ${name}! 🎉`,
    placeGroups: { billions: 'المليارات', millions: 'الملايين', thousands: 'الآلاف', ones: 'الآحاد' },
    placeNames: { hundred: 'مئات', ten: 'عشرات', one: 'آحاد' },
    quizQuestion: (digit, num) => `ما القيمة المكانية للرقم ${digit} في العدد ${num}؟`,
    quizFeedbackSelect: '⚠️ من فضلك اختر إجابة أولًا!',
    quizFeedbackCorrect: '🎉 صحيح! عمل رائع!',
    quizFeedbackWrong: (ans) => `❌ للأسف! الإجابة الصحيحة هي "${ans}"`,
    quizPlaceNames: ['الآحاد','العشرات','المئات','الآلاف','عشرات الآلاف','مئات الآلاف',
      'الملايين','عشرات الملايين','مئات الملايين','المليارات','عشرات المليارات','مئات المليارات'],
    zooHintAnimal: (emoji, name) => `🖱️ الآن اضغط على المخطط عند ارتفاع ${emoji} ${name}!`,
    zooFeedbackPerfect: (n) => `🎉 ممتاز! تم عدّ جميع الحيوانات (${n}) بشكل صحيح! 🏆`,
    zooFeedbackPartial: (c, t) => `📝 حصلت على ${c} من ${t} صحيحة. اضغط على المخطط لتصحيح الإجابات الخاطئة!`,
    zooHintReset: '🖱️ اضغط على المخطط عند الارتفاع المطابق للعدد الذي تريد الإجابة عنه.',
    builderFeedbackEmpty: '⚠️ أضف بعض الكلمات أولًا!',
    builderFeedbackCorrect: '🎉 ممتاز! لقد بنيت العدد بشكل صحيح!',
    builderFeedbackWrong: '❌ ليس تمامًا! قارن مع الإجابة الصحيحة بالأعلى، ثم اضغط إعادة للمحاولة مجددًا.',
    listening: '🔊 جارٍ الاستماع...',
    listenedNowBuild: '✅ الآن ابنِ العدد بالضغط على الكلمات بالأسفل!',
    speechNotSupported: '❌ تحويل النص إلى كلام غير مدعوم.',
    calcMessageSet: (num) => `✅ تم ضبط العدد على ${num}`,
    finishWarning: '⚠️ من فضلك جرّب الاختبار والقراءة الإنجليزية وتدريب الحديقة قبل الإنهاء!',
    resultStudent: '👤 <strong>الطالب:</strong>',
    resultQuiz: '❓ <strong>الاختبار:</strong>',
    resultZoo: '🦁 <strong>الحديقة:</strong>',
    resultEnglish: '🗣️ <strong>الإنجليزية:</strong>',
    resultDate: '📅 <strong>التاريخ:</strong>',
    resultCorrect: 'صحيحة',
    resultSkills: 'مهارات',
    resultPts: 'نقطة',
    resultTitles: {
      outstanding: 'متميز!',
      great: 'عمل رائع!',
      good: 'مجهود جيد!',
      keep: 'استمر في التدريب!'
    },
    resultMessages: {
      outstanding: 'أنت بطل الأعداد الكبيرة! 🌟',
      great: 'أداء جيد جدًا! استمر! 💪',
      good: 'قليل من التدريب وستصبح محترفًا! 🚀',
      keep: 'راجع جدول القيم المكانية وحاول مجددًا! 💡'
    }
  }
};

let currentLang = 'en';
const t = (key) => translations[currentLang][key];

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-ar', lang === 'ar');
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined && typeof translations[lang][key] === 'string') {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // إعادة بناء العناصر الديناميكية باللغة الجديدة
  if (appContainer.classList.contains('visible')) {
    buildPlaceChart();
    updateAllFromNumber();
    buildZooCards();
    renderZooChart();
  }
}

window.addEventListener('mathkids:languagechange', event => {
  if (event.detail.language !== currentLang) applyLanguage(event.detail.language);
});

/* ============================================================
   Confetti / stars
============================================================ */
function launchConfetti(count = 100) {
  const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#6ec8e8'];
  for (let i = 0; i < count; i++) {
    const conf = document.createElement('div');
    conf.className = 'confetti';
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.background = colors[Math.floor(Math.random() * colors.length)];
    conf.style.animation = `confettiFall ${2 + Math.random() * 3}s linear forwards`;
    conf.style.animationDelay = Math.random() * 0.5 + 's';
    conf.style.width = (8 + Math.random() * 8) + 'px';
    conf.style.height = (8 + Math.random() * 8) + 'px';
    if (Math.random() > 0.5) conf.style.borderRadius = '50%';
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 6000);
  }
}
function starBurst(x, y) {
  const stars = ['⭐', '🌟', '✨', '💫'];
  for (let i = 0; i < 6; i++) {
    const star = document.createElement('div');
    star.className = 'star-burst';
    star.textContent = stars[Math.floor(Math.random() * stars.length)];
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.animationDelay = (i * 0.05) + 's';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1200);
  }
}

/* ============================================================
   Global state
============================================================ */
let currentUser = 'Student';
let currentNumber = 1234567890;

const examState = {
  quizAttempted: false,
  quizCorrectCount: 0,
  quizTotal: 0,
  zooAttempted: false,
  zooCorrectCount: 0,
  zooTotal: 4,
  englishListened: false,
  englishBuiltCorrect: false,
  englishAttempts: 0,
  totalScore: 0
};

let zooAnimals = [];
let zooChartMax = 600;
let zooChartStep = 50;
let zooUserCounts = [];
let activeAnimalIndex = 0;
let zooChartInstance = null;
let floatingInput = null;

let wordBankWords = [];
let placedWords = [];
let wordIdCounter = 0;

/* ============================================================
   Zoo
============================================================ */
function generateRandomZooAnimals() {
  const pickFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  zooAnimals = [
    { name: 'Rabbits', nameAr: 'أرانب', emoji: '🐰', correct: pickFrom([0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300]) },
    { name: 'Chickens', nameAr: 'دجاج', emoji: '🐔', correct: pickFrom([100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300]) },
    { name: 'Ducks', nameAr: 'بط', emoji: '🦆', correct: pickFrom([40, 60, 80, 100, 120, 140, 160, 180, 80, 100]) },
    { name: 'Turtles', nameAr: 'سلاحف', emoji: '🐢', correct: pickFrom([0, 20, 40, 60, 160, 180, 200, 220, 80, 100, 120, 140]) }
  ];
}

function computeChartScale() {
  const maxCorrect = Math.max(...zooAnimals.map(a => a.correct));
  if (maxCorrect <= 100) { zooChartMax = 120; zooChartStep = 10; }
  else if (maxCorrect <= 200) { zooChartMax = 220; zooChartStep = 20; }
  else if (maxCorrect <= 300) { zooChartMax = 320; zooChartStep = 20; }
  else if (maxCorrect <= 500) { zooChartMax = 520; zooChartStep = 50; }
  else { zooChartMax = 600; zooChartStep = 50; }
}

/* ============================================================
   DOM refs
============================================================ */
const appContainer = document.getElementById('appContainer');

const chartContainer = document.getElementById('placeValueChart');
const currentNumberDisplay = document.getElementById('currentNumberDisplay');
const expandedFormEl = document.getElementById('expandedForm');
const calcDisplay = document.getElementById('calcDisplay');
const calcMessage = document.getElementById('calcMessage');

const btnHundredMillion = document.getElementById('btnHundredMillion');
const btnBillion = document.getElementById('btnBillion');
const btnRandom = document.getElementById('btnRandom');
const btnIncrement = document.getElementById('btnIncrement');
const btnDecrement = document.getElementById('btnDecrement');

const calcAddMillion = document.getElementById('calcAddMillion');
const calcSubMillion = document.getElementById('calcSubMillion');
const calcAddBillion = document.getElementById('calcAddBillion');
const calcReset = document.getElementById('calcReset');

const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const checkQuizBtn = document.getElementById('checkQuizBtn');
const quizFeedback = document.getElementById('quizFeedback');

const listenBtn = document.getElementById('listenBtn');
const buildArea = document.getElementById('buildArea');
const wordBank = document.getElementById('wordBank');
const checkBuildBtn = document.getElementById('checkBuildBtn');
const resetBuildBtn = document.getElementById('resetBuildBtn');
const undoBuildBtn = document.getElementById('undoBuildBtn');
const builderFeedback = document.getElementById('builderFeedback');
const revealBox = document.getElementById('revealBox');
const revealAnswer = document.getElementById('revealAnswer');

const animalCards = document.getElementById('animalCards');
const zooChartCanvas = document.getElementById('zooChart');
const zooChartContainer = document.getElementById('zooChartContainer');
const checkZooBtn = document.getElementById('checkZooBtn');
const resetZooBtn = document.getElementById('resetZooBtn');
const zooFeedback = document.getElementById('zooFeedback');
const zooHint = document.getElementById('zooHint');

const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

const finishBtn = document.getElementById('finishBtn');
const examStatus = document.getElementById('examStatus');

const resultOverlay = document.getElementById('resultOverlay');
const resultEmoji = document.getElementById('resultEmoji');
const resultTitle = document.getElementById('resultTitle');
const resultScore = document.getElementById('resultScore');
const resultMessage = document.getElementById('resultMessage');
const resultDetails = document.getElementById('resultDetails');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const closeResultBtn = document.getElementById('closeResultBtn');

/* ============================================================
   Place value chart
============================================================ */
const placeGroupsDef = [
  { key: 'billions', places: [{ key: 'hundred', power: 11 }, { key: 'ten', power: 10 }, { key: 'one', power: 9 }] },
  { key: 'millions', places: [{ key: 'hundred', power: 8 }, { key: 'ten', power: 7 }, { key: 'one', power: 6 }] },
  { key: 'thousands', places: [{ key: 'hundred', power: 5 }, { key: 'ten', power: 4 }, { key: 'one', power: 3 }] },
  { key: 'ones', places: [{ key: 'hundred', power: 2 }, { key: 'ten', power: 1 }, { key: 'one', power: 0 }] }
];

function buildPlaceChart() {
  chartContainer.innerHTML = '';
  const gNames = t('placeGroups');
  const pNames = t('placeNames');
  placeGroupsDef.forEach(group => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'place-group';
    const labelDiv = document.createElement('div');
    labelDiv.className = 'group-label';
    labelDiv.textContent = gNames[group.key];
    groupDiv.appendChild(labelDiv);
    const digitsRow = document.createElement('div');
    digitsRow.className = 'digits-row';
    group.places.forEach(place => {
      const box = document.createElement('div');
      box.className = 'digit-box';
      const valSpan = document.createElement('span');
      valSpan.className = 'digit-value';
      valSpan.id = `digit-${place.power}`;
      valSpan.textContent = '0';
      const nameSpan = document.createElement('span');
      nameSpan.className = 'place-name';
      nameSpan.textContent = pNames[place.key];
      box.appendChild(valSpan);
      box.appendChild(nameSpan);
      digitsRow.appendChild(box);
    });
    groupDiv.appendChild(digitsRow);
    chartContainer.appendChild(groupDiv);
  });
}

/* ============================================================
   Number helpers (English words always)
============================================================ */
function numberToEnglishWords(num) {
  if (num === 0) return ['zero'];
  const ones = ['', 'one','two','three','four','five','six','seven','eight','nine',
    'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

  function convert(n) {
    if (n === 0) return [];
    let words = [];
    if (n >= 100) {
      words.push(ones[Math.floor(n / 100)], 'hundred');
      n %= 100;
    }
    if (n >= 20) {
      const t10 = Math.floor(n / 10);
      const o = n % 10;
      if (o > 0) words.push(tens[t10] + '-' + ones[o]);
      else words.push(tens[t10]);
    } else if (n > 0) {
      words.push(ones[n]);
    }
    return words;
  }

  const billion = Math.floor(num / 1_000_000_000);
  const million = Math.floor((num % 1_000_000_000) / 1_000_000);
  const thousand = Math.floor((num % 1_000_000) / 1000);
  const remainder = num % 1000;

  const parts = [];
  if (billion > 0) parts.push(...convert(billion), 'billion');
  if (million > 0) parts.push(...convert(million), 'million');
  if (thousand > 0) parts.push(...convert(thousand), 'thousand');
  if (remainder > 0) parts.push(...convert(remainder));
  return parts;
}

function numberToEnglish(num) {
  return numberToEnglishWords(num).join(' ');
}

function expandedForm(num) {
  if (num === 0) return '0';
  const numStr = num.toString();
  const parts = [];
  const len = numStr.length;
  for (let i = 0; i < len; i++) {
    const digit = parseInt(numStr[i]);
    if (digit === 0) continue;
    const placeValue = Math.pow(10, len - i - 1);
    parts.push((digit * placeValue).toLocaleString('en-US'));
  }
  return parts.join(' + ');
}

/* ============================================================
   English builder
============================================================ */
function buildWordBank() {
  const correctWords = numberToEnglishWords(currentNumber);
  const wordsWithCommas = [];
  for (let i = 0; i < correctWords.length; i++) {
    wordsWithCommas.push(correctWords[i]);
    if (['billion', 'million', 'thousand'].includes(correctWords[i]) && i < correctWords.length - 1) {
      wordsWithCommas.push(',');
    }
  }

  const bankSet = new Map();
  wordsWithCommas.forEach(w => {
    bankSet.set(w, (bankSet.get(w) || 0) + 1);
  });

  const distractors = ['hundred', 'thousand', 'million', 'billion', 'ten', 'twenty', 'thirty',
    'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'zero'];
  const presentWords = new Set([...bankSet.keys()]);
  let distractorsAdded = 0;
  while (distractorsAdded < 4) {
    const d = distractors[Math.floor(Math.random() * distractors.length)];
    if (!presentWords.has(d) && d !== ',') {
      bankSet.set(d, (bankSet.get(d) || 0) + 1);
      distractorsAdded++;
    }
  }

  wordBankWords = [];
  wordIdCounter = 0;
  bankSet.forEach((count, word) => {
    for (let i = 0; i < count; i++) {
      wordBankWords.push({ id: 'w' + (wordIdCounter++), word, placed: false });
    }
  });

  for (let i = wordBankWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordBankWords[i], wordBankWords[j]] = [wordBankWords[j], wordBankWords[i]];
  }

  placedWords = [];
  renderBuilder();
}

function renderBuilder() {
  wordBank.innerHTML = '';
  wordBankWords.forEach(w => {
    if (w.placed) return;
    const chip = document.createElement('div');
    chip.className = 'word-chip' + (w.word === ',' ? ' comma' : '');
    chip.textContent = w.word === ',' ? '،' : w.word;
    chip.dataset.id = w.id;
    chip.draggable = true;
    chip.addEventListener('click', () => placeWord(w.id));
    chip.addEventListener('dragstart', (e) => e.dataTransfer.setData('text/plain', w.id));
    wordBank.appendChild(chip);
  });

  if (wordBank.children.length === 0) {
    wordBank.innerHTML = '<div class="word-bank-complete">🎉</div>';
  }

  buildArea.innerHTML = '';
  placedWords.forEach(w => {
    const chip = document.createElement('div');
    chip.className = 'word-chip placed' + (w.word === ',' ? ' comma' : '');
    chip.textContent = w.word === ',' ? '،' : w.word;
    chip.dataset.id = w.id;
    chip.draggable = true;
    chip.addEventListener('click', () => removeWord(w.id));
    chip.addEventListener('dragstart', (e) => e.dataTransfer.setData('text/plain', w.id));
    buildArea.appendChild(chip);
  });
}

function placeWord(id) {
  const w = wordBankWords.find(x => x.id === id);
  if (!w || w.placed) return;
  w.placed = true;
  placedWords.push(w);
  renderBuilder();
}
function removeWord(id) {
  const idx = placedWords.findIndex(x => x.id === id);
  if (idx === -1) return;
  placedWords[idx].placed = false;
  placedWords.splice(idx, 1);
  renderBuilder();
}

buildArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  buildArea.style.background = '#dbeafe';
});
buildArea.addEventListener('dragleave', () => { buildArea.style.background = ''; });
buildArea.addEventListener('drop', (e) => {
  e.preventDefault();
  buildArea.style.background = '';
  const id = e.dataTransfer.getData('text/plain');
  if (!id) return;
  const w = wordBankWords.find(x => x.id === id);
  if (w && !w.placed) placeWord(id);
});
wordBank.addEventListener('dragover', (e) => e.preventDefault());
wordBank.addEventListener('drop', (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData('text/plain');
  if (!id) return;
  removeWord(id);
});

undoBuildBtn.addEventListener('click', () => {
  if (placedWords.length === 0) return;
  removeWord(placedWords[placedWords.length - 1].id);
});

resetBuildBtn.addEventListener('click', () => {
  buildWordBank();
  builderFeedback.textContent = t('builderFeedbackDefault');
  builderFeedback.className = 'builder-feedback';
  revealBox.classList.remove('visible');
  buildArea.classList.remove('correct', 'wrong');
  examState.englishBuiltCorrect = false;
  examState.englishAttempts = 0;
  updateProgress();
});

checkBuildBtn.addEventListener('click', (e) => {
  if (placedWords.length === 0) {
    builderFeedback.textContent = t('builderFeedbackEmpty');
    builderFeedback.className = 'builder-feedback fail';
    return;
  }
  examState.englishAttempts++;

  const userWords = placedWords.map(w => w.word);
  const correctWords = numberToEnglishWords(currentNumber);
  const correctWithCommas = [];
  for (let i = 0; i < correctWords.length; i++) {
    correctWithCommas.push(correctWords[i]);
    if (['billion', 'million', 'thousand'].includes(correctWords[i]) && i < correctWords.length - 1) {
      correctWithCommas.push(',');
    }
  }

  const isCorrect = userWords.join(' ').toLowerCase() === correctWithCommas.join(' ').toLowerCase();

  revealAnswer.textContent = numberToEnglish(currentNumber);
  revealBox.classList.add('visible');

  if (isCorrect) {
    buildArea.classList.remove('wrong');
    buildArea.classList.add('correct');
    builderFeedback.textContent = t('builderFeedbackCorrect');
    builderFeedback.className = 'builder-feedback success';
    examState.englishBuiltCorrect = true;
    launchConfetti(50);
    starBurst(e.clientX, e.clientY);
    updateProgress();
  } else {
    buildArea.classList.remove('correct');
    buildArea.classList.add('wrong');
    builderFeedback.textContent = t('builderFeedbackWrong');
    builderFeedback.className = 'builder-feedback fail';
  }
});

/* ============================================================
   Listen
============================================================ */
listenBtn.addEventListener('click', () => {
  if (!('speechSynthesis' in window)) {
    builderFeedback.textContent = t('speechNotSupported');
    return;
  }
  window.speechSynthesis.cancel();
  const text = numberToEnglish(currentNumber);
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.4;

  utterance.onstart = () => {
    builderFeedback.textContent = t('listening');
    builderFeedback.className = 'builder-feedback';
  };
  utterance.onend = () => {
    builderFeedback.textContent = t('listenedNowBuild');
    builderFeedback.className = 'builder-feedback success';
    examState.englishListened = true;
    updateProgress();
  };
  window.speechSynthesis.speak(utterance);
});

/* ============================================================
   Update number
============================================================ */
function updateAllFromNumber() {
  for (let power = 0; power <= 11; power++) {
    const digitSpan = document.getElementById(`digit-${power}`);
    if (!digitSpan) continue;
    digitSpan.textContent = Math.floor(currentNumber / Math.pow(10, power)) % 10;
  }
  const formatted = currentNumber.toLocaleString('en-US');
  currentNumberDisplay.textContent = formatted;
  calcDisplay.textContent = formatted;
  expandedFormEl.textContent = expandedForm(currentNumber);

  buildWordBank();

  revealBox.classList.remove('visible');
  buildArea.classList.remove('correct', 'wrong');
  builderFeedback.textContent = t('builderFeedbackDefault');
  builderFeedback.className = 'builder-feedback';
  examState.englishBuiltCorrect = false;
  examState.englishAttempts = 0;

  generateQuizQuestion();
}

function setNumber(newNum) {
  if (newNum < 0) newNum = 0;
  if (newNum > 999_999_999_999) newNum = 999_999_999_999;
  currentNumber = Math.floor(newNum);
  updateAllFromNumber();
  calcMessage.textContent = t('calcMessageSet')(currentNumber.toLocaleString('en-US'));
}

/* ============================================================
   Quiz
============================================================ */
let currentQuizCorrectAnswer = '';
let currentQuizSelected = null;
let currentQuizPower = 0;

function generateQuizQuestion() {
  let power = Math.floor(Math.random() * 12);
  let digit = Math.floor(currentNumber / Math.pow(10, power)) % 10;
  let attempts = 0;
  while (digit === 0 && attempts < 20) {
    power = Math.floor(Math.random() * 12);
    digit = Math.floor(currentNumber / Math.pow(10, power)) % 10;
    attempts++;
  }
  currentQuizPower = power;

  const placeNames = t('quizPlaceNames');
  const placeName = placeNames[power];

  quizQuestion.textContent = t('quizQuestion')(digit, currentNumber.toLocaleString('en-US'));
  currentQuizCorrectAnswer = placeName;

  const optionsSet = new Set([placeName]);
  while (optionsSet.size < 4) optionsSet.add(placeNames[Math.floor(Math.random() * placeNames.length)]);
  const optionsArray = Array.from(optionsSet);
  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  quizOptions.innerHTML = '';
  currentQuizSelected = null;
  quizFeedback.textContent = '';

  optionsArray.forEach(opt => {
    const optDiv = document.createElement('div');
    optDiv.className = 'quiz-option';
    optDiv.dataset.value = opt;
    optDiv.innerHTML = `<span>💡</span> ${opt}`;
    optDiv.addEventListener('click', () => {
      if (examState.quizAttempted) return;
      document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
      optDiv.classList.add('selected');
      currentQuizSelected = opt;
    });
    quizOptions.appendChild(optDiv);
  });
}

checkQuizBtn.addEventListener('click', (e) => {
  if (!currentQuizSelected) {
    quizFeedback.textContent = t('quizFeedbackSelect');
    quizFeedback.className = 'quiz-feedback red-text';
    return;
  }
  if (examState.quizAttempted) return;

  examState.quizAttempted = true;
  examState.quizTotal++;

  document.querySelectorAll('.quiz-option').forEach(el => {
    if (el.dataset.value === currentQuizCorrectAnswer) el.classList.add('correct');
    else if (el.classList.contains('selected')) el.classList.add('wrong');
    el.style.cursor = 'default';
  });

  if (currentQuizSelected === currentQuizCorrectAnswer) {
    quizFeedback.textContent = t('quizFeedbackCorrect');
    quizFeedback.className = 'quiz-feedback green-text';
    examState.quizCorrectCount++;
    starBurst(e.clientX, e.clientY);
  } else {
    quizFeedback.textContent = t('quizFeedbackWrong')(currentQuizCorrectAnswer);
    quizFeedback.className = 'quiz-feedback red-text';
  }
  updateProgress();

  setTimeout(() => {
    if (currentUser) {
      examState.quizAttempted = false;
      generateQuizQuestion();
    }
  }, 2500);
});

/* ============================================================
   Zoo
============================================================ */
function buildZooCards() {
  animalCards.innerHTML = '';
  zooAnimals.forEach((animal, idx) => {
    const card = document.createElement('div');
    card.className = 'animal-card';
    card.id = `animal-card-${idx}`;
    const displayName = currentLang === 'ar' ? animal.nameAr : animal.name;
    card.innerHTML = `
      <div class="animal-emoji">${animal.emoji}</div>
      <div class="animal-name">${displayName}</div>
      <div class="animal-count-display" id="zoo-display-${idx}">${animal.correct}</div>
    `;
    card.addEventListener('click', () => {
      activeAnimalIndex = idx;
      highlightActiveCard();
      zooHint.textContent = t('zooHintAnimal')(animal.emoji, displayName);
      if (zooUserCounts[idx] != null) {
        setTimeout(() => openFloatingInput(idx), 100);
      }
    });
    animalCards.appendChild(card);
  });
  highlightActiveCard();
}

function highlightActiveCard() {
  zooAnimals.forEach((_, idx) => {
    const card = document.getElementById(`animal-card-${idx}`);
    if (!card) return;
    card.classList.toggle('active', idx === activeAnimalIndex);
  });
}

function renderZooChart() {
  computeChartScale();
  const labels = zooAnimals.map(a => a.emoji + ' ' + (currentLang === 'ar' ? a.nameAr : a.name));
  const values = zooAnimals.map((_, idx) => zooUserCounts[idx] || 0);
  const colors = ['#f59e0b', '#fbbf24', '#10b981', '#6ec8e8'];

  if (zooChartInstance) zooChartInstance.destroy();

  const annotations = {};
  zooAnimals.forEach((animal, idx) => {
    const val = zooUserCounts[idx];
    if (val == null) return;
    annotations[`line-${idx}`] = {
      type: 'line',
      yMin: val, yMax: val,
      xMin: idx - 0.45, xMax: idx + 0.45,
      borderColor: '#ef4444',
      borderWidth: 3,
      borderDash: [6, 4],
      label: {
        display: true,
        content: `${val} ✏️`,
        position: 'end',
        backgroundColor: '#f59e0b',
        color: '#fff',
        font: { weight: 'bold', size: 12 },
        padding: 5,
        borderRadius: 8
      }
    };
  });

  zooChartInstance = new Chart(zooChartCanvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: currentLang === 'ar' ? 'إجابتك' : 'Your Answer',
        data: values,
        backgroundColor: colors,
        borderRadius: 10,
        borderSkipped: false,
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 500 },
      onClick: (event, elements, chart) => {
        const yScale = chart.scales.y;
        const canvasY = event.native.offsetY;
        const value = yScale.getValueForPixel(canvasY);
        if (value == null) return;
        const rounded = Math.max(0, Math.round(value / zooChartStep) * zooChartStep);
        zooUserCounts[activeAnimalIndex] = rounded;
        updateZooDisplay(activeAnimalIndex);
        renderZooChart();
        setTimeout(() => openFloatingInput(activeAnimalIndex), 150);
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1e293b',
          titleFont: { weight: 'bold', size: 13 },
          bodyFont: { weight: 'bold', size: 12 },
          padding: 10,
          cornerRadius: 8,
          callbacks: { label: (ctx) => `${currentLang === 'ar' ? 'إجابتك' : 'Your answer'}: ${ctx.raw}` }
        },
        annotation: { annotations }
      },
      scales: {
        y: {
          beginAtZero: true, max: zooChartMax,
          ticks: { font: { size: 12, weight: 'bold' }, stepSize: zooChartStep, color: '#475569' },
          title: {
            display: true,
            text: currentLang === 'ar' ? '🐾 عدد الحيوانات' : '🐾 Number of Animals',
            font: { size: 13, weight: 'bold' }, color: '#475569'
          },
          grid: { color: '#f1f5f9' }
        },
        x: {
          ticks: { font: { size: 13, weight: 'bold' }, color: '#334155' },
          grid: { display: false }
        }
      }
    }
  });
}

function openFloatingInput(idx) {
  closeFloatingInput();
  if (!zooChartInstance) return;
  const val = zooUserCounts[idx];
  if (val == null) return;

  const chart = zooChartInstance;
  const xPixel = chart.scales.x.getPixelForValue(idx);
  const yPixel = chart.scales.y.getPixelForValue(val);

  const containerRect = zooChartContainer.getBoundingClientRect();
  const canvasRect = zooChartCanvas.getBoundingClientRect();
  const offsetX = canvasRect.left - containerRect.left;
  const offsetY = canvasRect.top - containerRect.top;

  const input = document.createElement('input');
  input.type = 'number';
  input.className = 'chart-edit-input';
  input.value = val;
  input.min = 0;
  input.style.left = (offsetX + xPixel) + 'px';
  input.style.top = (offsetY + yPixel - 20) + 'px';

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') commitFloatingInput(idx, input.value);
    else if (e.key === 'Escape') closeFloatingInput();
  });
  input.addEventListener('blur', () => {
    setTimeout(() => {
      if (floatingInput === input) commitFloatingInput(idx, input.value);
    }, 100);
  });

  zooChartContainer.appendChild(input);
  floatingInput = input;
  input.focus();
  input.select();
}

function commitFloatingInput(idx, rawValue) {
  const num = parseInt(rawValue);
  if (!isNaN(num) && num >= 0) {
    zooUserCounts[idx] = num;
    updateZooDisplay(idx);
  }
  closeFloatingInput();
  renderZooChart();
}

function closeFloatingInput() {
  if (floatingInput && floatingInput.parentNode) floatingInput.parentNode.removeChild(floatingInput);
  floatingInput = null;
}

function updateZooDisplay(idx) {
  const display = document.getElementById(`zoo-display-${idx}`);
  if (display) display.classList.remove('correct', 'wrong');
}

checkZooBtn.addEventListener('click', (e) => {
  examState.zooAttempted = true;
  let correct = 0;
  zooAnimals.forEach((animal, idx) => {
    const display = document.getElementById(`zoo-display-${idx}`);
    display.classList.remove('correct', 'wrong');
    if (zooUserCounts[idx] === animal.correct) {
      display.classList.add('correct');
      correct++;
    } else {
      display.classList.add('wrong');
    }
  });
  examState.zooCorrectCount = correct;

  if (correct === zooAnimals.length) {
    zooFeedback.textContent = t('zooFeedbackPerfect')(correct);
    zooFeedback.className = 'zoo-feedback green-text';
    launchConfetti(120);
    starBurst(e.clientX, e.clientY);
  } else {
    zooFeedback.textContent = t('zooFeedbackPartial')(correct, zooAnimals.length);
    zooFeedback.className = 'zoo-feedback red-text';
  }
  updateProgress();
});

resetZooBtn.addEventListener('click', () => {
  closeFloatingInput();
  generateRandomZooAnimals();
  zooUserCounts = zooAnimals.map(() => null);
  activeAnimalIndex = 0;
  buildZooCards();
  renderZooChart();
  zooFeedback.textContent = '';
  zooHint.textContent = t('zooHintReset');
  examState.zooAttempted = false;
  examState.zooCorrectCount = 0;
  updateProgress();
});

/* ============================================================
   Progress & score
============================================================ */
function updateProgress() {
  const quizPart = Math.min(examState.quizCorrectCount, 5) / 5 * 35;
  const zooPart = (examState.zooAttempted ? examState.zooCorrectCount / examState.zooTotal : 0) * 40;
  const englishPart = ((examState.englishListened ? 1 : 0) + (examState.englishBuiltCorrect ? 1 : 0)) / 2 * 25;
  const total = Math.round(quizPart + zooPart + englishPart);
  progressFill.style.width = total + '%';
  progressText.textContent = total + '%';
}

function calculateFinalScore() {
  const quizScore = Math.min(examState.quizCorrectCount, 5) * 7;
  const zooScore = examState.zooAttempted ? Math.round((examState.zooCorrectCount / examState.zooTotal) * 40) : 0;
  const englishScore = ((examState.englishListened ? 1 : 0) + (examState.englishBuiltCorrect ? 1 : 0)) / 2 * 25;
  return Math.round(quizScore + zooScore + englishScore);
}

finishBtn.addEventListener('click', () => {
  if (examState.quizCorrectCount === 0 && !examState.zooAttempted && !examState.englishListened) {
    examStatus.textContent = t('finishWarning');
    examStatus.style.color = '#dc2626';
    return;
  }
  showResult();
});

function showResult() {
  const score = calculateFinalScore();
  examState.totalScore = score;

  let emoji = '🎉', titleKey = 'good', messageKey = 'good';
  if (score >= 90) { emoji = '🏆'; titleKey = 'outstanding'; messageKey = 'outstanding'; }
  else if (score >= 70) { emoji = '🌟'; titleKey = 'great'; messageKey = 'great'; }
  else if (score >= 50) { emoji = '👍'; titleKey = 'good'; messageKey = 'good'; }
  else { emoji = '📚'; titleKey = 'keep'; messageKey = 'keep'; }

  resultEmoji.textContent = emoji;
  resultTitle.textContent = t('resultTitles')[titleKey];
  resultScore.textContent = `${score} / 100`;
  resultMessage.textContent = t('resultMessages')[messageKey];

  const quizPts = Math.min(examState.quizCorrectCount, 5) * 7;
  const zooPts = examState.zooAttempted ? Math.round((examState.zooCorrectCount / examState.zooTotal) * 40) : 0;
  const engPts = Math.round(((examState.englishListened ? 1 : 0) + (examState.englishBuiltCorrect ? 1 : 0)) / 2 * 25);

  resultDetails.innerHTML = `
    <div>${t('resultStudent')} <span>${currentUser.split('@')[0]}</span></div>
    <div>${t('resultQuiz')} <span>${Math.min(examState.quizCorrectCount, 5)} / 5 ${t('resultCorrect')} (${quizPts} ${t('resultPts')})</span></div>
    <div>${t('resultZoo')} <span>${examState.zooCorrectCount} / ${examState.zooTotal} ${t('resultCorrect')} (${zooPts} ${t('resultPts')})</span></div>
    <div>${t('resultEnglish')} <span>${(examState.englishListened ? 1 : 0) + (examState.englishBuiltCorrect ? 1 : 0)} / 2 ${t('resultSkills')} (${engPts} ${t('resultPts')})</span></div>
    <div>${t('resultDate')} <span>${new Date().toLocaleString('en-US')}</span></div>
  `;

  resultOverlay.classList.add('visible');
  launchConfetti(150);
  sendResultEmail(score, emoji, resultTitle.textContent);
}

/* ============================================================
   Email
============================================================ */
function sendResultEmail(score, emoji, title) {
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
    console.log('📧 Email not sent — EmailJS not configured.');
    return;
  }
  const templateParams = {
    to_email: 'marinaaymanae777@gmail.com',
    student_name: currentUser,
    score: score + ' / 100',
    result_title: title,
    emoji,
    quiz_score: `${Math.min(examState.quizCorrectCount, 5)} / 5`,
    zoo_score: `${examState.zooCorrectCount} / ${examState.zooTotal}`,
    english_score: `${(examState.englishListened ? 1 : 0) + (examState.englishBuiltCorrect ? 1 : 0)} / 2`,
    exam_date: new Date().toLocaleString('en-US'),
    message: `Student ${currentUser} scored ${score}/100 on the Large Numbers exam.`
  };
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
    .then(() => console.log('✅ Email sent!'))
    .catch(err => console.error('❌ Email error:', err));
}

/* ============================================================
   Result modal buttons
============================================================ */
closeResultBtn.addEventListener('click', () => resultOverlay.classList.remove('visible'));

tryAgainBtn.addEventListener('click', () => {
  resultOverlay.classList.remove('visible');
  resetExamState();
  currentNumber = 1234567890;
  updateAllFromNumber();
  resetZooBtn.click();
  revealBox.classList.remove('visible');
  examStatus.textContent = t('examStatusDefault');
  examStatus.style.color = '#475569';
  updateProgress();
});

function resetExamState() {
  examState.quizAttempted = false;
  examState.quizCorrectCount = 0;
  examState.quizTotal = 0;
  examState.zooAttempted = false;
  examState.zooCorrectCount = 0;
  examState.englishListened = false;
  examState.englishBuiltCorrect = false;
  examState.englishAttempts = 0;
  examState.totalScore = 0;
  updateProgress();
}

/* ============================================================
   Init
============================================================ */
function initApp() {
  buildPlaceChart();
  generateRandomZooAnimals();
  zooUserCounts = zooAnimals.map(() => null);
  activeAnimalIndex = 0;
  buildZooCards();
  updateAllFromNumber();
  renderZooChart();
  resetExamState();
}

// الأزرار تُربط مرة واحدة فقط (خارج initApp لتجنب تكرار المستمعين)
btnHundredMillion.addEventListener('click', () => setNumber(100_000_000));
btnBillion.addEventListener('click', () => setNumber(1_000_000_000));
btnRandom.addEventListener('click', () => setNumber(Math.floor(Math.random() * 999_999_999_999) + 1_000_000));
btnIncrement.addEventListener('click', () => setNumber(currentNumber + 1_000_000));
btnDecrement.addEventListener('click', () => setNumber(Math.max(0, currentNumber - 1_000_000)));

calcAddMillion.addEventListener('click', () => setNumber(currentNumber + 1_000_000));
calcSubMillion.addEventListener('click', () => setNumber(Math.max(0, currentNumber - 1_000_000)));
calcAddBillion.addEventListener('click', () => setNumber(currentNumber + 1_000_000_000));
calcReset.addEventListener('click', () => setNumber(1234567890));

window.addEventListener('resize', () => {
  if (floatingInput) closeFloatingInput();
});

if (typeof emailjs !== 'undefined') {
  emailjs.init({ publicKey: 'YOUR_PUBLIC_KEY' });
}

// التهيئة الأولى للغة
applyLanguage('en');
initApp();
