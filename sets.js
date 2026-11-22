(function() {
    // ============================================================
    // 🌐 الترجمة
    // ============================================================
    const translations = {
        en: {
            langBtn: '🌐 العربية',
            title: '📏 10 Sets on a Number Line',
            subhead: '⚡ 10 sets of 10 = 100 · 10 sets of 100 = 1,000 · 10 sets of 100,000 = 1 million · ...',
            footnote: '⚡ Each jump on the number line represents one "set". Ten equal jumps land on the result.',
            lineTitle: (max) => `🔢 Number line: 0 → ${max}`,
            rangeBadge: (max) => `0 – ${max}`,
            tabLabels: [
                '🔹 10 sets of 10',
                '🔸 10 sets of 100',
                '🔹 10 sets of 100,000',
                '🔸 10 sets of 1,000,000',
                '🔶 10 sets of 10,000,000'
            ],
            tabBadges: ['= 100', '= 1,000', '= 1 million', '= 10 million', '= 100 million'],
            eqSets: '10 sets',
            eqResultWords: [
                'one hundred', 'one thousand', 'one million', 'ten million', 'hundred million'
            ],
            explainTitles: {
                set: '🔹 What is one set?',
                add: '➕ Adding 10 equal sets',
                read: '📖 How to read the result',
                line: '📏 On the number line'
            },
            explainSet: (unit) => `One set = <span class="highlight-text num">${unit}</span><br>We have <strong>10 sets</strong> of this number.`,
            explainAdd: (unit, result) => `<span class="num">${unit} × 10</span><br>= <span class="highlight-text num">${result}</span><br>This is the same as adding the number 10 times.`,
            explainRead: (result, words) => `The result is <span class="highlight-text num">${result}</span><br>Read as: <strong>${words}</strong>`,
            explainLine: (max, unit, result) => `The line goes from <strong class="num">0</strong> to <strong class="num">${max}</strong>.<br>Each jump of <strong class="num">${unit}</strong> is one set.<br>After 10 jumps we land on <strong class="num">${result}</strong>.`
        },
        ar: {
            langBtn: '🌐 English',
            title: '📏 ١٠ مجموعات على خط الأعداد',
            subhead: '⚡ 10 مجموعات من 10 = 100 · 10 مجموعات من 100 = 1,000 · 10 مجموعات من 100,000 = 1 مليون · ...',
            footnote: '⚡ كل قفزة على خط الأعداد تمثل "مجموعة". عشر قفزات متساوية تصل بك إلى النتيجة.',
            lineTitle: (max) => `🔢 خط الأعداد: 0 → ${max}`,
            rangeBadge: (max) => `0 – ${max}`,
            tabLabels: [
                '🔹 10 مجموعات من 10',
                '🔸 10 مجموعات من 100',
                '🔹 10 مجموعات من 100,000',
                '🔸 10 مجموعات من 1,000,000',
                '🔶 10 مجموعات من 10,000,000'
            ],
            tabBadges: ['= 100', '= 1,000', '= 1 مليون', '= 10 ملايين', '= 100 مليون'],
            eqSets: '10 مجموعات',
            eqResultWords: [
                'مئة', 'ألف', 'مليون', 'عشرة ملايين', 'مئة مليون'
            ],
            explainTitles: {
                set: '🔹 ما هي المجموعة؟',
                add: '➕ جمع 10 مجموعات متساوية',
                read: '📖 كيف تقرأ النتيجة',
                line: '📏 على خط الأعداد'
            },
            explainSet: (unit) => `المجموعة الواحدة = <span class="highlight-text num">${unit}</span><br>لدينا <strong>10 مجموعات</strong> من هذا العدد.`,
            explainAdd: (unit, result) => `<span class="num">${unit} × 10</span><br>= <span class="highlight-text num">${result}</span><br>هذا مثل جمع العدد 10 مرات.`,
            explainRead: (result, words) => `النتيجة هي <span class="highlight-text num">${result}</span><br>تُقرأ: <strong>${words}</strong>`,
            explainLine: (max, unit, result) => `الخط يمتد من <strong class="num">0</strong> إلى <strong class="num">${max}</strong>.<br>كل قفزة مقدارها <strong class="num">${unit}</strong> تمثل مجموعة.<br>بعد 10 قفزات نصل إلى <strong class="num">${result}</strong>.`
        }
    };

    let currentLang = 'en';
    const t = (key) => translations[currentLang][key];
    const applyT = (fn) => translations[currentLang][fn] || translations.en[fn];

    // ============================================================
    // بيانات المشاهد (الأرقام إنجليزية دائمًا)
    // ============================================================
    const scenes = [
        {
            unit: 10, sets: 10, result: 100, maxValue: 100,
            ticks: [0,10,20,30,40,50,60,70,80,90,100],
            tickLabels: ['0','10','20','30','40','50','60','70','80','90','100']
        },
        {
            unit: 100, sets: 10, result: 1000, maxValue: 1000,
            ticks: [0,100,200,300,400,500,600,700,800,900,1000],
            tickLabels: ['0','100','200','300','400','500','600','700','800','900','1K']
        },
        {
            unit: 100000, sets: 10, result: 1000000, maxValue: 1000000,
            ticks: [0,100000,200000,300000,400000,500000,600000,700000,800000,900000,1000000],
            tickLabels: ['0','100K','200K','300K','400K','500K','600K','700K','800K','900K','1M']
        },
        {
            unit: 1000000, sets: 10, result: 10000000, maxValue: 10000000,
            ticks: [0,1000000,2000000,3000000,4000000,5000000,6000000,7000000,8000000,9000000,10000000],
            tickLabels: ['0','1M','2M','3M','4M','5M','6M','7M','8M','9M','10M']
        },
        {
            unit: 10000000, sets: 10, result: 100000000, maxValue: 100000000,
            ticks: [0,10000000,20000000,30000000,40000000,50000000,60000000,70000000,80000000,90000000,100000000],
            tickLabels: ['0','10M','20M','30M','40M','50M','60M','70M','80M','90M','100M']
        }
    ];

    let currentScene = 0;

    // ============================================================
    // أدوات مساعدة
    // ============================================================
    function formatWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // ============================================================
    // Rendering
    // ============================================================
    const numberLineEl = document.getElementById('numberLine');
    const lineTitle = document.getElementById('lineTitle');
    const rangeBadge = document.getElementById('rangeBadge');
    const equationBox = document.getElementById('equationBox');
    const explainGrid = document.getElementById('explainGrid');
    const tabsEl = document.getElementById('tabs');

    function renderNumberLine() {
        const scene = scenes[currentScene];
        const maxVal = scene.maxValue;

        lineTitle.textContent = t('lineTitle')(formatWithCommas(maxVal));
        rangeBadge.textContent = t('rangeBadge')(formatWithCommas(maxVal));

        numberLineEl.innerHTML = '';

        // Axis
        const axis = document.createElement('div');
        axis.className = 'line-axis';
        numberLineEl.appendChild(axis);

        // Ticks & labels
        scene.ticks.forEach((val, i) => {
            const percent = (val / maxVal) * 100;
            const tick = document.createElement('div');
            tick.className = 'tick major';
            tick.style.left = `${percent}%`;
            numberLineEl.appendChild(tick);

            const label = document.createElement('div');
            label.className = 'tick-label major';
            label.style.left = `${percent}%`;
            label.textContent = scene.tickLabels[i];
            numberLineEl.appendChild(label);
        });

        // Jump arcs
        const unitPercent = (scene.unit / maxVal) * 100;
        for (let i = 0; i < scene.sets; i++) {
            const startPercent = i * unitPercent;
            const endPercent = (i + 1) * unitPercent;
            const midPercent = (startPercent + endPercent) / 2;

            const arc = document.createElement('div');
            arc.className = 'jump-arc';
            arc.style.left = `${startPercent}%`;
            arc.style.width = `${unitPercent}%`;
            arc.style.transform = 'none';
            arc.style.borderTop = '3px dashed #e03a3a';
            arc.style.borderRadius = '50% 50% 0 0';
            arc.style.height = '22px';
            arc.style.top = '20px';
            numberLineEl.appendChild(arc);

            const setLabel = document.createElement('div');
            setLabel.className = 'jump-label';
            setLabel.style.left = `${midPercent}%`;
            setLabel.style.top = '2px';
            setLabel.textContent = String(i + 1);
            setLabel.style.fontSize = '0.6rem';
            setLabel.style.padding = '1px 7px';
            numberLineEl.appendChild(setLabel);
        }

        // Result marker
        const resultPercent = (scene.result / maxVal) * 100;
        const marker = document.createElement('div');
        marker.className = 'number-marker';
        marker.style.left = `${resultPercent}%`;

        const flag = document.createElement('div');
        flag.className = 'marker-flag';
        flag.textContent = formatWithCommas(scene.result);

        const stick = document.createElement('div');
        stick.className = 'marker-stick';

        const dot = document.createElement('div');
        dot.className = 'marker-dot';

        marker.appendChild(flag);
        marker.appendChild(stick);
        marker.appendChild(dot);
        numberLineEl.appendChild(marker);
    }

    function renderEquation() {
        const scene = scenes[currentScene];
        const words = t('eqResultWords')[currentScene];
        equationBox.innerHTML = `
            <div class="eq-part">${t('eqSets')}</div>
            <div class="eq-operator">×</div>
            <div class="eq-part num">${formatWithCommas(scene.unit)}</div>
            <div class="eq-operator">=</div>
            <div class="eq-result">
                <span class="num">${formatWithCommas(scene.result)}</span>
                <small>${words}</small>
            </div>
        `;
    }

    function renderExplanations() {
        const scene = scenes[currentScene];
        const words = t('eqResultWords')[currentScene];
        const titles = t('explainTitles');

        const cards = [
            { title: titles.set, html: applyT('explainSet')(formatWithCommas(scene.unit)) },
            { title: titles.add, html: applyT('explainAdd')(formatWithCommas(scene.unit), formatWithCommas(scene.result)) },
            { title: titles.read, html: applyT('explainRead')(formatWithCommas(scene.result), words) },
            { title: titles.line, html: applyT('explainLine')(formatWithCommas(scene.maxValue), formatWithCommas(scene.unit), formatWithCommas(scene.result)) }
        ];

        explainGrid.innerHTML = cards.map(c => `
            <div class="explain-card">
                <div class="title">${c.title}</div>
                <p>${c.html}</p>
            </div>
        `).join('');
    }

    function renderTabs() {
        const labels = t('tabLabels');
        const badges = t('tabBadges');
        tabsEl.querySelectorAll('.tab-btn').forEach((btn, i) => {
            btn.querySelector('.tab-label').textContent = labels[i];
            btn.querySelector('.small-badge').textContent = badges[i];
            btn.classList.toggle('active', i === currentScene);
        });
    }

    function renderAll() {
        renderTabs();
        renderNumberLine();
        renderEquation();
        renderExplanations();
    }

    // ============================================================
    // التبديل بين المشاهد واللغة
    // ============================================================
    function setScene(index) {
        currentScene = index;
        renderAll();
    }

    tabsEl.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setScene(parseInt(btn.dataset.scene, 10));
        });
    });

    function applyLanguage(language) {
        currentLang = language;
        document.body.classList.toggle('lang-ar', currentLang === 'ar');
        document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.title = t('title');
        document.getElementById('title').textContent = t('title');
        document.getElementById('subhead').textContent = t('subhead');
        document.getElementById('footnote').textContent = t('footnote');
        renderAll();
    }

    window.addEventListener('mathkids:languagechange', event => {
        if (event.detail.language !== currentLang) applyLanguage(event.detail.language);
    });

    // البدء
    renderAll();
})();
