(() => {
  const imageAlbums = {
    good: [
      'img/good/37b4ea8438707ead0d1b3dd600db781f.jpg',
      'img/good/download (1).jfif',
      'img/good/download (2).jfif',
      'img/good/download (3).jfif',
      'img/good/download (4).jfif',
      'img/good/download (5).jfif',
      'img/good/download (8).jfif'
    ],
    bad: [
      'img/bad/18733673b5881bcc364f4f686b43d207.jpg',
      'img/bad/21691ffc132c271e3bdfd833ed569a18.gif',
      'img/bad/4c923e183a2d8c17ae23828aa3eb21a2.jpg',
      'img/bad/download.jfif',
      'img/bad/f0186b252327bc00547e25430366d035.jpg',
      'img/bad/f9dee228d891c7df09f16cfee57ce306.gif',
      'img/bad/videoframe_764.png'
    ],
    welcome: [
      'img/welcome/download (1).gif',
      'img/welcome/download (2).gif',
      'img/welcome/download.gif',
      'img/welcome/Wlcm Sticker – Wlcm – discover and share GIFs.gif'
    ],
    thanks: [
      'img/thanks/5e21d7221e7e4e22464bc3f36f1c3419.jpg',
      'img/thanks/download (7).jfif',
      'img/thanks/Thnx Pengu Sticker – Thnx Pengu Thank you – GIFlar bilan tanishing va ulashing.gif'
    ]
  };
  const welcomeMessages = [
    'أهلاً يا بطل! أنت قادر على حل كل الأسئلة، ابدأ بثقة 🌟',
    'استعد للتحدي؛ كل سؤال جديد فرصة لتثبت تميزك 🚀',
    'فكر بهدوء وحاول، فأنت نجم الرياضيات اليوم ⭐',
    'بالتوفيق يا بطل! خطوة خطوة ستصل للإجابة الصحيحة 🏆'
  ];
  const welcomeCache = new Map();
  const resultImageCache = new Map();
  let thanksImage;
  let previousBodyOverflow = '';

  function choose(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function imageUrl(path) {
    return path.split('/').map(encodeURIComponent).join('/');
  }

  function imageMarkup(path, alt) {
    return `<img src="${imageUrl(path)}" alt="${alt}" class="h-56 w-64 shrink-0 rounded-2xl bg-slate-50 object-contain sm:h-64 sm:w-72" loading="eager">`;
  }

  function lockQuestionControls(card) {
    card.querySelectorAll('input, select, button').forEach(control => {
      if (control.matches('[onclick^="toggleExplain"]')) return;
      control.disabled = true;
    });
  }

  function welcome(sectionKey) {
    if (!welcomeCache.has(sectionKey)) {
      welcomeCache.set(sectionKey, {
        image: choose(imageAlbums.welcome),
        message: choose(welcomeMessages)
      });
    }

    const item = welcomeCache.get(sectionKey);
    return `
      <aside class="my-4 flex flex-col items-center gap-4 rounded-3xl border-2 border-violet-200 bg-white/95 p-5 text-center shadow-md sm:flex-row sm:text-right" aria-label="رسالة ترحيبية">
        ${imageMarkup(item.image, 'صورة ترحيبية')}
        <div>
          <h3 class="text-lg font-black text-violet-800">أهلاً بك في هذا القسم!</h3>
          <p class="mt-1 font-bold text-slate-700">${item.message}</p>
        </div>
      </aside>`;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);
  }

  function closeResultPopup() {
    const overlay = document.getElementById('review-result-modal');
    if (!overlay || overlay.classList.contains('hidden')) return;

    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
    document.body.style.overflow = previousBodyOverflow;
    document.removeEventListener('keydown', handlePopupKeydown);
  }

  function handlePopupKeydown(event) {
    if (event.key === 'Escape') closeResultPopup();
  }

  function showResultPopup(sectionKey, sectionTitle, points, total, wrongQuestions, isFinal) {
    if (!resultImageCache.has(sectionKey)) {
      const album = wrongQuestions > 3 ? imageAlbums.bad : imageAlbums.good;
      resultImageCache.set(sectionKey, choose(album));
    }

    const isGood = wrongQuestions <= 3;
    let overlay = document.getElementById('review-result-modal');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'review-result-modal';
      overlay.className = 'fixed inset-0 z-[10000] hidden items-center justify-center bg-slate-950/60 p-4';
      overlay.addEventListener('click', event => {
        if (event.target === overlay || (event.target instanceof Element && event.target.closest('[data-review-popup-close]'))) {
          closeResultPopup();
        }
      });
      document.body.appendChild(overlay);
    }

    if (isFinal && !thanksImage) thanksImage = choose(imageAlbums.thanks);
    overlay.innerHTML = `
      <section class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border-2 ${isGood ? 'border-emerald-200' : 'border-rose-200'} bg-white p-5 text-center shadow-2xl sm:p-7" role="dialog" aria-modal="true" aria-labelledby="review-result-title">
        <div class="flex items-start justify-between gap-3">
          <h2 id="review-result-title" class="text-xl font-black ${isGood ? 'text-emerald-800' : 'text-rose-800'}">نتيجة المجموعة: ${escapeHtml(sectionTitle)}</h2>
          <button type="button" data-review-popup-close class="rounded-xl px-3 py-1 text-2xl font-black text-slate-500 hover:bg-slate-100" aria-label="إغلاق النتيجة">×</button>
        </div>
        <div class="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:text-right">
          ${imageMarkup(resultImageCache.get(sectionKey), isGood ? 'صورة نتيجة جيدة' : 'صورة تشجيعية بعد أخطاء')}
          <div class="flex-1">
            <p class="text-2xl font-black text-slate-800">درجتك: ${points} من ${total}</p>
            <p class="mt-1 font-bold text-slate-600">كل سؤال عليه درجة واحدة.</p>
            <p class="mt-1 text-sm font-bold text-slate-600">أخطأت في ${wrongQuestions} ${wrongQuestions === 1 ? 'سؤال' : 'أسئلة'} مختلفة.</p>
            <p class="mt-2 font-black ${isGood ? 'text-emerald-700' : 'text-rose-700'}">${isGood ? 'أحسنت! استمر في هذا الأداء الرائع 🌟' : 'لا تيأس؛ راجع إجاباتك وحاول أن تحقق نتيجة أفضل في المجموعة التالية 💪'}</p>
          </div>
        </div>
        ${isFinal ? `
          <div class="mt-5 border-t border-slate-200 pt-5">
            <h3 class="text-xl font-black text-amber-800">أكملت المراجعة كلها! 🎉</h3>
            ${imageMarkup(thanksImage, 'صورة شكر')}
            <p class="mt-2 font-bold text-amber-900">شكراً لمشاركتك يا بطل، واصل اجتهادك وتألقك دائماً ⭐</p>
          </div>` : ''}
        <button type="button" data-review-popup-close class="mt-5 rounded-2xl bg-violet-600 px-6 py-3 font-black text-white shadow-md transition hover:bg-violet-700">إغلاق والعودة للأسئلة</button>
      </section>`;

    previousBodyOverflow = document.body.style.overflow;
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handlePopupKeydown);
    overlay.querySelector('[data-review-popup-close]').focus();
  }

  window.reviewFeedback = Object.freeze({ welcome, showResultPopup, lockQuestionControls });
})();
