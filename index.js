/* ============ SCROLL REVEAL ============ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('active');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

/* ============ COUNTER ANIMATION ============ */
const counters = document.querySelectorAll('.stat-number');
let countersStarted = false;

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;
      counters.forEach(counter => {
        const target = +counter.dataset.target;
        const suffix = counter.dataset.suffix || '+';
        const duration = 2200;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString() + (current > target * 0.9 ? suffix : '');
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString() + suffix;
          }
        };
        updateCounter();
      });
    }
  });
}, { threshold: 0.4 });

const statsBox = document.querySelector('.stats-box');
if (statsBox) counterObserver.observe(statsBox);

/* ============ DOTS NAV ============ */
document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', () => {
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

/* ============ MOBILE MENU ============ */
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle?.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navLinks.style.display === 'flex';
  if (isOpen) {
    navLinks.style.display = 'none';
    mobileToggle.textContent = '☰';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '16px';
    navLinks.style.right = '16px';
    navLinks.style.background = 'white';
    navLinks.style.padding = '20px';
    navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    navLinks.style.borderRadius = '20px';
    mobileToggle.textContent = '✕';
  }
});

/* ============ PARALLAX HERO SHAPES ============ */
document.addEventListener('mousemove', (e) => {
  const shapes = document.querySelectorAll('.float-num');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  shapes.forEach((shape, i) => {
    const factor = (i + 1) * 0.6;
    shape.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

/* ============ BUTTON RIPPLE ============ */
document.querySelectorAll('.btn, .btn-white, .login-btn').forEach(btn => {
  btn.style.position = btn.style.position || 'relative';
  btn.style.overflow = 'hidden';
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const circle = document.createElement('span');
    circle.style.position = 'absolute';
    circle.style.width = circle.style.height = '20px';
    circle.style.background = 'rgba(255,255,255,0.5)';
    circle.style.borderRadius = '50%';
    circle.style.left = (e.clientX - rect.left) + 'px';
    circle.style.top = (e.clientY - rect.top) + 'px';
    circle.style.transform = 'translate(-50%, -50%) scale(0)';
    circle.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    circle.style.pointerEvents = 'none';
    circle.style.zIndex = '1';
    this.appendChild(circle);
    requestAnimationFrame(() => {
      circle.style.transform = 'translate(-50%, -50%) scale(15)';
      circle.style.opacity = '0';
    });
    setTimeout(() => circle.remove(), 700);
  });
});

/* ============ TOAST ============ */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
  }, 2500);
}

/* ============ NAV LINK ACTIVE ============ */
document.querySelectorAll('.nav-links > li > a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.classList.contains('active') === false && !this.parentElement.classList.contains('dropdown')) {
      document.querySelectorAll('.nav-links > li > a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

const homeContent = {
  ar: {
    language: 'English',
    languageLabel: 'التبديل إلى الإنجليزية',
    heroTitle: 'رياضيات الصف الرابع <span>بسهولة ومتعة</span>',
    heroDescription: 'ملخصات قصيرة وواضحة لأهم دروس الرياضيات، مع أمثلة محلولة وروابط أنشطة وصفحات المشروع.',
    start: 'ابدأ بالمراجعة ←',
    pagesAction: 'تصفح صفحات المشروع',
    pagesTitle: 'أدوات وصفحات إضافية',
    pagesDescription: 'أنشطة أخرى موجودة في المشروع وليست مرتبطة بملخص درس محدد.',
    lessonsTitle: 'ملخصات دروس الرياضيات',
    lessonsDescription: 'اقرأ الفكرة والقانون، ثم تابع المثال خطوة بخطوة.',
    unitsTitle: 'وحدات المنهج', unitsDescription: 'اختر الوحدة لعرض ورقة مراجعتها أو الانتقال إلى نشاط الحل.',
    open: 'افتح الصفحة ←',
    ideas: 'أهم الأفكار',
    rules: 'القواعد المهمة',
    example: 'مثال محلول خطوة بخطوة',
    note: 'تذكّر',
    summaryAction: 'التلخيص', solveAction: 'حل', backToUnits: '← كل الوحدات',
    features: [['📖','دروس تفاعلية','تعلم خطوة بخطوة مع أمثلة وأسئلة للتدريب.'],['🎮','ألعاب رياضيات','تدرّب على المهارات عبر ألعاب مشوقة.'],['🏆','اختبارات ومراجعات','تحقق من فهمك بعد كل وحدة.'],['📈','متابعة التقدم','لاحظ المهارات التي أتقنتها.'],['💡','أفكار إبداعية','ألغاز وأنشطة لتجربة الرياضيات.']],
    pathTitle: 'خطوات مراجعة بسيطة', pathDescription: 'انتقل من فهم الفكرة إلى حل السؤال بنفسك.',
    pathSteps: [['١','تعلّم','شاهد الدرس وافهم الفكرة الجديدة.'],['٢','تدرّب','حلّ أمثلة وأسئلة قصيرة.'],['٣','العب','ثبّت مهاراتك من خلال الألعاب.'],['٤','اختبر نفسك','تأكد من فهمك بعد كل درس.'],['٥','تقدّم','احتفل بما تعلمته واستمر.']],
    gamesTitle: 'وقت اللعب والتعلّم', gamesDescription: 'ثلاث ألعاب قصيرة لتقوية مهاراتك.', gameCards: [['🧠','لعبة الذاكرة'],['🔢','تحدي القيمة المكانية'],['⚡','تحدي العمليات']],
    whyTitle: 'لماذا يحب الأطفال والأهل MathKids؟', whyDescription: 'نجعل تعلّم الرياضيات بسيطاً وممتعاً وفعّالاً.', whyCenter: 'نتعلّم معاً، وننمو معاً',
    benefits: [['✓','آمن ومناسب للأطفال','بيئة تعليمية هادئة وخالية من الإعلانات.'],['🎓','متوافق مع المنهج','دروس مصممة لمهارات الصف الرابع.'],['❤️','تعلّم تفاعلي','أنشطة وألعاب ورسوم تحفّز المشاركة.'],['📊','تقدّم تلاحظه','تابع المهارات والإنجازات خطوة بخطوة.']],
    stats: ['طالب سعيد','درس تفاعلي','لعبة رياضيات','رضا أولياء الأمور'],
    ctaTitle: 'ابدأ مغامرتك في الرياضيات اليوم!', ctaDescription: 'انضم إلى رحلة تعلّم الرياضيات بطريقة ممتعة.', ctaLink: '🚀 ابدأ التعلّم الآن',
    unitCovers: [['🔢','238,765,091'],['➕','45 + 12 = 57'],['✖️','4 × 6 = 24'],['📏','2 كم = 2000 م'],['📐','P = 2 × (L + W)']],
    footer: 'MathKids • ملخصات تعليمية للصف الرابع الابتدائي',
    pages: [
      ['📚', 'أنشطة MathKids', 'صفحة تعليمية تفاعلية من صفحات المشروع.', 'deepseek_html_20260921_ffe7c0.html'],
      ['📏', 'مجموعات على خط الأعداد', 'تدرّب على تحديد المجموعات وتمثيلها.', 'sets.html']
    ],
    lessons: [
      {
        unit: 'الوحدة الأولى: الأعداد الكبيرة والقيمة المكانية', title: 'قراءة الأعداد والقيمة المكانية',
        ideas: ['لكل رقم قيمة تتحدد بمكانه في العدد.', 'نقرأ العدد في مجموعات من ثلاث خانات: آحاد، آلاف، ملايين.', 'الصيغة التحليلية تكتب العدد كمجموع قيم أرقامه.'],
        rules: ['قيمة الرقم = الرقم × قيمة المنزلة.', 'للمقارنة نبدأ بأكبر منزلة، وإذا تساوت ننتقل إلى التالية.'],
        example: 'في العدد 238,765,091: <br>١. قيمة الرقم 8 هي 8,000,000 لأنه في منزلة الملايين. <br>٢. الصيغة التحليلية: 200,000,000 + 30,000,000 + 8,000,000 + 700,000 + 60,000 + 5,000 + 90 + 1.',
        note: 'قسّم العدد إلى مجموعات من ثلاثة أرقام لتسهيل قراءته ومقارنته.',
        resources: [['ابدأ النشاط التفاعلي', 'أجب عن أسئلة القيمة المكانية وشاهد الحل بعد إجابتك', 'reviewAndH.w.html?section=sec0'], ['افتح مختبر الأعداد الكبيرة', 'تدريب على القيمة المكانية', 'Big%20Numbers%20.html'], ['اختبار الأعداد الكبيرة', 'أسئلة للتدرب والتحقق', 'largeNo.html']]
      },
      {
        unit: 'الوحدة الثانية: استراتيجيات الجمع والطرح', title: 'الجمع والطرح وإعادة التسمية',
        ideas: ['رتّب الآحاد تحت الآحاد والعشرات تحت العشرات.', 'في الجمع نعيد تسمية 10 آحاد بعشرة واحدة، وفي الطرح نعيد التجميع عند الحاجة.', 'في المسائل الكلامية حدّد المطلوب والعملية المناسبة أولاً.'],
        rules: ['خاصية الإبدال:  a + b = b + a.', 'خاصية العنصر المحايد:  a + 0 = a.', 'نتحقق من الطرح بالجمع: الناتج + المطروح = العدد الأصلي.'],
        example: 'اشترى أحمد كتاباً بـ 45 جنيهاً وقلماً بـ 12 جنيهاً، ودفع 100 جنيه. <br>١. ثمن المشتريات: 45 + 12 = 57 جنيهاً. <br>٢. الباقي: 100 − 57 = 43 جنيهاً.',
        note: 'قدّر الإجابة أولاً؛ فالتقدير يساعدك على اكتشاف الناتج غير المعقول.',
        resources: [['ابدأ النشاط التفاعلي', 'أجب عن الأسئلة وشاهد الحل بعد إجابتك', 'reviewAndH.w.html?section=sec5']]
      },
      {
        unit: 'الوحدة الخامسة: عملية الضرب كعلاقة', title: 'الضرب والأنماط والخصائص',
        ideas: ['الضرب جمع متكرر أو مقارنة بين كميتين.', 'يمكن تمثيل المسألة بمعادلة فيها عدد مجهول.', 'الأنماط تساعد على إيجاد نواتج الضرب بسرعة.'],
        rules: ['خاصية الإبدال:  3 × 5 = 5 × 3.', 'العنصر المحايد:  a × 1 = a، وخاصية الصفر:  a × 0 = 0.', 'لإيجاد العامل المجهول نقسم حاصل الضرب على العامل المعروف.'],
        example: 'عدد الأقلام 4 أمثال 6 أقلام. <br>١. نمثل ذلك بـ: 4 × 6 = ؟ <br>٢. نحسب: 4 × 6 = 24. إذن العدد 24 قلماً. <br>٣. للتحقق: 24 ÷ 4 = 6.',
        note: 'عند الضرب في 5 تتناوب آحاد النواتج بين 5 و0.',
        resources: [['ابدأ النشاط التفاعلي', 'أجب عن الأسئلة وشاهد الحل بعد إجابتك', 'reviewAndH.w.html?section=sec1']]
      },
      {
        unit: 'الوحدة الثالثة: مفاهيم القياس', title: 'تحويل وحدات الطول والكتلة والسعة',
        ideas: ['اختر الوحدة المناسبة لما تقيسه: طول أو كتلة أو سعة.', 'الكيلومتر أكبر من المتر، والكيلوجرام أكبر من الجرام، واللتر أكبر من الملليلتر.', 'عند التحويل إلى وحدة أصغر نضرب، وإلى وحدة أكبر نقسم.'],
        rules: ['1 كم = 1000 م، و1 م = 100 سم.', '1 كجم = 1000 جم.', '1 لتر = 1000 ملليلتر.'],
        example: 'حوّل 2 كم إلى أمتار: <br>١. كل كيلومتر يساوي 1000 متر. <br>٢. نضرب: 2 × 1000 = 2000. <br>إذن 2 كم = 2000 م.',
        note: 'اكتب الوحدة في الإجابة، وتأكد أن اتجاه التحويل يناسب حجم الوحدة.',
        resources: [['ابدأ النشاط التفاعلي', 'أجب عن الأسئلة وشاهد الحل بعد إجابتك', 'reviewAndH.w.html?section=sec4']]
      },
      {
        unit: 'الوحدة الرابعة: الهندسة والقياس', title: 'محيط ومساحة المستطيل والمربع',
        ideas: ['المحيط هو مجموع أطوال الأضلاع حول الشكل.', 'المساحة هي عدد الوحدات المربعة التي تغطي الشكل.', 'في المربع الأضلاع الأربعة متساوية.'],
        rules: ['محيط المستطيل = 2 × (الطول + العرض).', 'مساحة المستطيل = الطول × العرض.', 'محيط المربع = 4 × طول الضلع، ومساحته = طول الضلع × نفسه.'],
        example: 'مستطيل طوله 7 سم وعرضه 3 سم: <br>١. المحيط = 2 × (7 + 3) = 20 سم. <br>٢. المساحة = 7 × 3 = 21 سم².',
        note: 'المحيط يقاس بوحدات طول مثل سم، أما المساحة فبوحدات مربعة مثل سم².',
        resources: [['ابدأ النشاط التفاعلي', 'أجب عن الأسئلة وشاهد الحل بعد إجابتك', 'reviewAndH.w.html?section=sec3']]
      }
    ]
  },
  en: {
    language: 'العربية',
    languageLabel: 'Switch to Arabic',
    heroTitle: 'Grade 4 Math <span>Made Clear and Fun</span>',
    heroDescription: 'Short, friendly summaries of key math lessons, with worked examples and links to the project pages.',
    start: 'Start reviewing →',
    pagesAction: 'Explore project pages',
    pagesTitle: 'More Pages and Tools',
    pagesDescription: 'Other project activities that do not match a specific lesson summary.',
    lessonsTitle: 'Grade 4 Math Summaries',
    lessonsDescription: 'Read the idea and rule, then follow each worked example step by step.',
    unitsTitle: 'Course Units', unitsDescription: 'Choose a unit to view its review summary or open its practice activity.',
    open: 'Open page →',
    ideas: 'Key ideas',
    rules: 'Important rules',
    example: 'Worked example',
    note: 'Remember',
    summaryAction: 'Summary', solveAction: 'Solve', backToUnits: '← All units',
    features: [['📖','Interactive Lessons','Learn step by step with examples and practice questions.'],['🎮','Fun Math Games','Practice skills with exciting games.'],['🏆','Exams and Quizzes','Check what you understand after each unit.'],['📈','Progress Tracking','See which skills you have mastered.'],['💡','Creative Ideas','Explore math with puzzles and activities.']],
    pathTitle: 'A Simple Review Path', pathDescription: 'Move from understanding the idea to solving problems on your own.',
    pathSteps: [['1','Learn','Understand a new idea step by step.'],['2','Practice','Try examples and short questions.'],['3','Play','Strengthen your skills with games.'],['4','Test Yourself','Check what you learned after each lesson.'],['5','Achieve','Celebrate your progress and keep going.']],
    gamesTitle: 'Play and Learn', gamesDescription: 'Three short games to strengthen your skills.', gameCards: [['🧠','Memory Match'],['🔢','Place Value Challenge'],['⚡','Math Dash']],
    whyTitle: 'Why Kids & Parents Love MathKids', whyDescription: 'We make learning math simple, fun, and effective.', whyCenter: 'Learning together, growing together',
    benefits: [['✓','Safe & Kid-Friendly','A calm learning environment with no ads.'],['🎓','Curriculum Aligned','Lessons designed for Grade 4 skills.'],['❤️','Engaging & Interactive','Activities and games that invite children to participate.'],['📊','Progress You Can See','Track skills and achievements step by step.']],
    stats: ['Happy Students','Interactive Lessons','Fun Math Games','Parents Satisfied'],
    ctaTitle: 'Start Your Math Adventure Today!', ctaDescription: 'Join a fun journey to learn and enjoy mathematics.', ctaLink: '🚀 Start Learning Now',
    unitCovers: [['🔢','238,765,091'],['➕','45 + 12 = 57'],['✖️','4 × 6 = 24'],['📏','2 km = 2,000 m'],['📐','P = 2 × (L + W)']],
    footer: 'MathKids • Learning summaries for Grade 4',
    pages: [
      ['📚', 'MathKids Activities', 'An interactive learning page included in this project.', 'deepseek_html_20260921_ffe7c0.html'],
      ['📏', 'Sets on a Number Line', 'Practice identifying and representing sets.', 'sets.html']
    ],
    lessons: [
      {
        unit: 'Unit 1: Large Numbers and Place Value', title: 'Reading Numbers and Place Value',
        ideas: ['A digit’s value depends on its place in the number.', 'Read numbers in groups of three digits: ones, thousands, and millions.', 'Expanded form writes a number as the sum of its place values.'],
        rules: ['Digit value = digit × place value.', 'To compare numbers, start with the greatest place and move right when places are equal.'],
        example: 'In 238,765,091: <br>1. The value of 8 is 8,000,000 because it is in the millions place. <br>2. Expanded form: 200,000,000 + 30,000,000 + 8,000,000 + 700,000 + 60,000 + 5,000 + 90 + 1.',
        note: 'Group digits in threes to make large numbers easier to read and compare.',
        resources: [['Start interactive activity', 'Answer place-value questions and see the solution after responding', 'reviewAndH.w.html?section=sec0'], ['Open Big Numbers Lab', 'Practice place value', 'Big%20Numbers%20.html'], ['Take the Large Numbers Exam', 'Practice questions and check your skills', 'largeNo.html']]
        // img: img/unit1.png
      },
      {
        unit: 'Unit 2: Addition and Subtraction Strategies', title: 'Addition, Subtraction, and Regrouping',
        ideas: ['Line up ones with ones and tens with tens.', 'Regroup 10 ones as 1 ten when adding; regroup when needed to subtract.', 'For a word problem, identify what is asked and choose the operation first.'],
        rules: ['Commutative property:  a + b = b + a.', 'Identity property:  a + 0 = a.', 'Check subtraction with addition: difference + subtracted number = original number.'],
        example: 'Ahmed buys a book for 45 pounds and a pen for 12 pounds. He pays 100 pounds. <br>1. Total cost: 45 + 12 = 57 pounds. <br>2. Change: 100 − 57 = 43 pounds.',
        note: 'Estimate first. An estimate helps you spot an answer that does not make sense.',
        resources: [['Start interactive activity', 'Answer questions and see the solution after responding', 'reviewAndH.w.html?section=sec5']]
      },
      {
        unit: 'Unit 5: Multiplication as a Relationship', title: 'Multiplication, Patterns, and Properties',
        ideas: ['Multiplication is repeated addition or a comparison between quantities.', 'Represent a problem with an equation containing an unknown.', 'Patterns help you find multiplication products quickly.'],
        rules: ['Commutative property:  3 × 5 = 5 × 3.', 'Identity:  a × 1 = a; zero property:  a × 0 = 0.', 'To find a missing factor, divide the product by the known factor.'],
        example: 'There are 4 times as many pencils as 6 pencils. <br>1. Write: 4 × 6 = ? <br>2. Calculate: 4 × 6 = 24, so there are 24 pencils. <br>3. Check: 24 ÷ 4 = 6.',
        note: 'When multiplying by 5, product ones digits alternate between 5 and 0.',
        resources: [['Start interactive activity', 'Answer questions and see the solution after responding', 'reviewAndH.w.html?section=sec1']]
      },
      {
        unit: 'Unit 3: Measurement Concepts', title: 'Converting Length, Mass, and Capacity',
        ideas: ['Choose a suitable unit for what you measure: length, mass, or capacity.', 'Kilometers are larger than meters; kilograms larger than grams; liters larger than milliliters.', 'Multiply when converting to a smaller unit; divide when converting to a larger unit.'],
        rules: ['1 km = 1,000 m, and 1 m = 100 cm.', '1 kg = 1,000 g.', '1 L = 1,000 mL.'],
        example: 'Convert 2 km to meters: <br>1. One kilometer equals 1,000 meters. <br>2. Multiply: 2 × 1,000 = 2,000. <br>So, 2 km = 2,000 m.',
        note: 'Include the unit in your answer and check that the conversion direction makes sense.',
        resources: [['Start interactive activity', 'Answer questions and see the solution after responding', 'reviewAndH.w.html?section=sec4']]
      },
      {
        unit: 'Unit 4: Geometry and Measurement', title: 'Perimeter and Area of Rectangles and Squares',
        ideas: ['Perimeter is the total distance around a shape.', 'Area is the number of square units that cover a shape.', 'A square has four equal sides.'],
        rules: ['Rectangle perimeter = 2 × (length + width).', 'Rectangle area = length × width.', 'Square perimeter = 4 × side; square area = side × side.'],
        example: 'A rectangle is 7 cm long and 3 cm wide: <br>1. Perimeter = 2 × (7 + 3) = 20 cm. <br>2. Area = 7 × 3 = 21 cm².',
        note: 'Perimeter uses length units such as cm; area uses square units such as cm².',
        resources: [['Start interactive activity', 'Answer questions and see the solution after responding', 'reviewAndH.w.html?section=sec3']]
      }
    ]
  }
};

const resourceGrid = document.getElementById('resource-grid');
const lessonGrid = document.getElementById('lesson-grid');
const unitReviewImages = ['img/unit1.jpeg','img/unit2.jpeg','img/unit5.png','img/unit33.jpeg','img/unit44.jpeg'];
const requestedLessonIndex = Number(new URLSearchParams(location.search).get('unit'));
let selectedLessonIndex = Number.isInteger(requestedLessonIndex) && requestedLessonIndex >= 0 && requestedLessonIndex < 5 ? requestedLessonIndex : 0;

function renderSelectedLesson(language) {
  const content = homeContent[language];
  const lesson = content.lessons[selectedLessonIndex];
  const [coverIcon, coverEquation] = content.unitCovers[selectedLessonIndex];
  lessonGrid.innerHTML = `<article class="lesson-card summary-detail"><div class="summary-poster" role="img" aria-label="${lesson.unit} ${lesson.title}"><img class="unit-review-image" src="${unitReviewImages[selectedLessonIndex]}" alt=""><div class="poster-caption"><strong>${coverIcon} ${lesson.title}</strong><div class="poster-equation">${coverEquation}</div></div></div><div class="summary-copy"><a class="summary-back" href="index.html#unit-summary">${content.backToUnits}</a><div class="unit-name">${lesson.unit}</div><h3>${lesson.title}</h3><h4>${content.ideas}</h4><ul>${lesson.ideas.map(idea => `<li>${idea}</li>`).join('')}</ul><h4>${content.rules}</h4><ul>${lesson.rules.map(rule => `<li>${rule}</li>`).join('')}</ul><h4>${content.example}</h4><div class="math-example">${lesson.example}</div><div class="memory-note">💡 ${content.note}: ${lesson.note}</div><div class="lesson-resources">${lesson.resources.map(([label, description, href]) => `<a href="${href}" title="${description}">${label}</a>`).join('')}</div></div></article>`;
}

function renderUnitCards(language) {
  const content = homeContent[language];
  const unitOrder = [0, 1, 3, 4, 2];
  lessonGrid.innerHTML = unitOrder.map((lessonIndex, cardIndex) => {
    const lesson = content.lessons[lessonIndex];
    const [coverIcon, coverEquation] = content.unitCovers[lessonIndex];
    const solveLink = lesson.resources[0][2];
    const summaryLink = `index.html?unit=${lessonIndex}#unit-summary`;
    return `<article class="unit-card reveal"><a class="review-cover" href="${summaryLink}" aria-label="${lesson.unit}: ${lesson.title}"><span class="cover-unit">${lesson.unit}</span><img class="unit-review-image" src="${unitReviewImages[lessonIndex]}" alt=""></a><div class="unit-card-body"><h3>${lesson.unit}</h3><p>${lesson.title}</p><div class="unit-actions"><a href="${summaryLink}">📘 ${content.summaryAction}</a><a class="solve" href="${solveLink}">✏️ ${content.solveAction}</a></div></div></article>`;
  }).join('');
}

function renderHome(language) {
  const content = homeContent[language];
  const hasSelectedUnit = new URLSearchParams(location.search).has('unit');
  document.getElementById('grade-home').classList.toggle('home-summary-mode', hasSelectedUnit);
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.title = hasSelectedUnit ? `${content.lessonsTitle} | MathKids` : language === 'ar' ? 'رياضيات الصف الرابع | MathKids' : 'Grade 4 Mathematics | MathKids';
  document.getElementById('hero-title').innerHTML = content.heroTitle;
  document.getElementById('hero-description').textContent = content.heroDescription;
  document.getElementById('start-link').textContent = content.start;
  document.getElementById('pages-link').textContent = content.pagesAction;
  document.getElementById('pages-title').textContent = content.pagesTitle;
  document.getElementById('pages-description').textContent = content.pagesDescription;
  lessonGrid.classList.toggle('unit-grid', !hasSelectedUnit);
  lessonGrid.classList.toggle('summary-grid', hasSelectedUnit);
  document.getElementById('lessons-title').textContent = hasSelectedUnit ? content.lessonsTitle : content.unitsTitle;
  document.getElementById('lessons-description').textContent = hasSelectedUnit ? content.lessonsDescription : content.unitsDescription;
  document.getElementById('path-title').textContent = content.pathTitle;
  document.getElementById('path-description').textContent = content.pathDescription;
  document.getElementById('games-title').textContent = content.gamesTitle;
  document.getElementById('games-description').textContent = content.gamesDescription;
  document.getElementById('why-title').textContent = content.whyTitle;
  document.getElementById('why-description').textContent = content.whyDescription;
  document.getElementById('why-center-text').textContent = content.whyCenter;
  document.getElementById('why-left').innerHTML = content.benefits.slice(0,2).map(([icon,title,description],index) => `<article class="why-item reveal"><div class="why-icon w-icon-${index+1}">${icon}</div><div><h5>${title}</h5><p>${description}</p></div></article>`).join('');
  document.getElementById('why-right').innerHTML = content.benefits.slice(2).map(([icon,title,description],index) => `<article class="why-item reveal"><div class="why-icon w-icon-${index+3}">${icon}</div><div><h5>${title}</h5><p>${description}</p></div></article>`).join('');
  ['stat-students','stat-lessons','stat-games','stat-satisfaction'].forEach((id,index) => { document.getElementById(id).textContent = content.stats[index]; });
  document.getElementById('cta-title').textContent = content.ctaTitle;
  document.getElementById('cta-description').textContent = content.ctaDescription;
  document.getElementById('cta-link').textContent = content.ctaLink;
  document.getElementById('footer-text').textContent = content.footer;
  document.getElementById('feature-grid').innerHTML = content.features.map(([icon,title,description],index) => `<article class="feature-card reveal"><div class="feature-icon f-icon-${index+1}">${icon}</div><h4>${title}</h4><p>${description}</p></article>`).join('');
  document.getElementById('path-grid').innerHTML = content.pathSteps.map(([number,title,description]) => `<article class="path-card reveal"><strong>${number}. ${title}</strong><p>${description}</p></article>`).join('');
  document.getElementById('games-grid').innerHTML = content.gameCards.map(([icon,title]) => `<a class="game-link-card reveal" href="games.html"><span>${icon}</span>${title}</a>`).join('');
  resourceGrid.innerHTML = content.pages.map(([icon, title, description, href]) => `<article class="resource-card"><div><h3>${icon} ${title}</h3><p>${description}</p></div><a href="${href}">${content.open}</a></article>`).join('');
  if (hasSelectedUnit) renderSelectedLesson(language);
  else renderUnitCards(language);
  document.querySelectorAll('#grade-home .reveal:not(.active)').forEach(element => landingRevealObserver.observe(element));
}

let currentLanguage = localStorage.getItem('mathkids-language') === 'en' ? 'en' : 'ar';
const landingRevealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      landingRevealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

renderHome(currentLanguage);
window.addEventListener('mathkids:languagechange', event => {
  if (event.detail.language !== currentLanguage) {
    currentLanguage = event.detail.language;
    renderHome(currentLanguage);
  }
});
