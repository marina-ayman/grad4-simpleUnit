const gameText = {
      ar: { title:'ألعاب الرياضيات <span>المرحة</span>', subtitle:'اختر لعبة، فكّر، ثم جرّب إجابتك.', footer:'MathKids • العب وتعلّم كل يوم',
        memory:'لعبة الذاكرة', memoryDesc:'اقلب البطاقات وابحث عن الأزواج المتطابقة.', moves:'المحاولات', pairs:'الأزواج', reset:'ابدأ من جديد',
        place:'تحدي القيمة المكانية', placeDesc:'اكتب قيمة الرقم المحدد في العدد.', whatValue:'ما قيمة الرقم', inNumber:'في العدد', check:'تحقق', next:'سؤال جديد', answer:'الإجابة الصحيحة:', correct:'إجابة صحيحة! أحسنت.', retry:'ليست هذه الإجابة. راجع الحل ثم جرّب سؤالاً جديداً.',
        math:'تحدي العمليات', mathDesc:'حل العملية الحسابية بأسرع ما يمكنك.',
        memoryDone:'أحسنت! وجدت كل الأزواج في {moves} محاولات.' },
      en: { title:'Math <span>Games</span>', subtitle:'Pick a game, think it through, and try your answer.', footer:'MathKids • Play and learn every day',
        memory:'Memory Match', memoryDesc:'Flip the cards and find all matching pairs.', moves:'Moves', pairs:'Pairs', reset:'Start again',
        place:'Place Value Challenge', placeDesc:'Enter the place value of the highlighted digit.', whatValue:'What is the value of digit', inNumber:'in', check:'Check', next:'New question', answer:'Correct answer:', correct:'Correct! Well done.', retry:'Not quite. Review the solution, then try a new question.',
        math:'Math Dash', mathDesc:'Solve the arithmetic problem as quickly as you can.',
        memoryDone:'Great job! You found every pair in {moves} moves.' }
    };
    let language = document.documentElement.lang === 'en' ? 'en' : 'ar';
    const pairs = ['🍎','⭐','🐠','🚀','📚','🎈','🦋','⚽'];
    let firstCard = null, lockBoard = false, moves = 0, matchedPairs = 0;
    let placeValue = { number: 0, digit: 0, value: 0 };
    let arithmetic = { expression: '', answer: 0 };

    function setText(id, value) { document.getElementById(id).textContent = value; }
    function shuffle(items) { return [...items].sort(() => Math.random() - .5); }
    function startMemory() {
      firstCard = null; lockBoard = false; moves = 0; matchedPairs = 0;
      setText('memory-status', `${gameText[language].moves}: 0 · ${gameText[language].pairs}: 0/${pairs.length}`);
      document.getElementById('memory-grid').innerHTML = shuffle([...pairs, ...pairs]).map((emoji, index) => `<button class="memory-card" type="button" data-pair="${emoji}" aria-label="${language === 'ar' ? 'بطاقة' : 'Card'} ${index + 1}">?</button>`).join('');
      document.querySelectorAll('.memory-card').forEach(card => card.addEventListener('click', () => flipCard(card)));
    }
    function flipCard(card) {
      if (lockBoard || card.classList.contains('revealed') || card.classList.contains('matched')) return;
      card.textContent = card.dataset.pair; card.classList.add('revealed');
      if (!firstCard) { firstCard = card; return; }
      moves += 1;
      const secondCard = card;
      if (firstCard.dataset.pair === secondCard.dataset.pair) {
        firstCard.classList.replace('revealed','matched'); secondCard.classList.replace('revealed','matched');
        firstCard = null; matchedPairs += 1;
        if (matchedPairs === pairs.length) setText('memory-status', gameText[language].memoryDone.replace('{moves}', moves));
        else setText('memory-status', `${gameText[language].moves}: ${moves} · ${gameText[language].pairs}: ${matchedPairs}/${pairs.length}`);
      } else {
        lockBoard = true;
        setText('memory-status', `${gameText[language].moves}: ${moves} · ${gameText[language].pairs}: ${matchedPairs}/${pairs.length}`);
        window.setTimeout(() => { firstCard.textContent = '?'; secondCard.textContent = '?'; firstCard.classList.remove('revealed'); secondCard.classList.remove('revealed'); firstCard = null; lockBoard = false; }, 750);
      }
    }
    function newPlaceQuestion() {
      const samples = [[238765091,3],[4752806,7],[530216,2],[894325,9],[6721405,4]];
      const [number, digit] = samples[Math.floor(Math.random() * samples.length)];
      const digitsFromRight = String(number).split('').reverse();
      const value = digit * (10 ** digitsFromRight.indexOf(String(digit)));
      placeValue = { number, digit, value };
      setText('place-question', `${gameText[language].whatValue} ${digit} ${gameText[language].inNumber} ${number.toLocaleString('en-US')}?`);
      document.getElementById('place-answer').value = '';
      document.getElementById('place-solution').classList.remove('visible');
    }
    function checkPlaceAnswer() {
      const field = document.getElementById('place-answer');
      if (field.value === '') { field.focus(); return; }
      const solution = document.getElementById('place-solution');
      solution.textContent = `${Number(field.value) === placeValue.value ? gameText[language].correct : gameText[language].retry} ${gameText[language].answer} ${placeValue.value.toLocaleString('en-US')}.`;
      solution.classList.add('visible');
    }
    function newMathQuestion() {
      const a = Math.floor(Math.random() * 12) + 2, b = Math.floor(Math.random() * 12) + 2;
      const operation = ['+', '−', '×'][Math.floor(Math.random() * 3)];
      arithmetic = { expression: `${a} ${operation} ${b}`, answer: operation === '+' ? a + b : operation === '−' ? a - b : a * b };
      setText('math-question', `${arithmetic.expression} = ?`);
      document.getElementById('math-answer').value = '';
      document.getElementById('math-solution').classList.remove('visible');
    }
    function checkMathAnswer() {
      const field = document.getElementById('math-answer');
      if (field.value === '') { field.focus(); return; }
      const solution = document.getElementById('math-solution');
      solution.textContent = `${Number(field.value) === arithmetic.answer ? gameText[language].correct : gameText[language].retry} ${gameText[language].answer} ${arithmetic.answer}.`;
      solution.classList.add('visible');
    }
    function renderGames() {
      const text = gameText[language];
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.title = language === 'ar' ? 'ألعاب الرياضيات | MathKids' : 'Math Games | MathKids';
      document.getElementById('page-title').innerHTML = text.title;
      setText('page-subtitle', text.subtitle); setText('page-footer', text.footer);
      setText('memory-title', text.memory); setText('memory-desc', text.memoryDesc); setText('memory-reset', text.reset);
      setText('place-title', text.place); setText('place-desc', text.placeDesc); setText('place-check', text.check); setText('place-next', text.next);
      setText('math-title', text.math); setText('math-desc', text.mathDesc); setText('math-check', text.check); setText('math-next', text.next);
      startMemory(); newPlaceQuestion(); newMathQuestion();
    }
    document.getElementById('memory-reset').addEventListener('click', startMemory);
    document.getElementById('place-check').addEventListener('click', checkPlaceAnswer);
    document.getElementById('place-next').addEventListener('click', newPlaceQuestion);
    document.getElementById('math-check').addEventListener('click', checkMathAnswer);
    document.getElementById('math-next').addEventListener('click', newMathQuestion);
    window.addEventListener('mathkids:languagechange', event => {
      if (event.detail.language !== language) {
        language = event.detail.language;
        renderGames();
      }
    });
    document.getElementById('place-answer').addEventListener('keydown', event => { if (event.key === 'Enter') checkPlaceAnswer(); });
    document.getElementById('math-answer').addEventListener('keydown', event => { if (event.key === 'Enter') checkMathAnswer(); });
    renderGames();
