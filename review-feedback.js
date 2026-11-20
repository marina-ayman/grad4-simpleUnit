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

  function choose(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function imageUrl(path) {
    return path.split('/').map(encodeURIComponent).join('/');
  }

  function imageMarkup(path, alt) {
    return `<img src="${imageUrl(path)}" alt="${alt}" class="h-32 w-40 shrink-0 rounded-2xl bg-slate-50 object-contain" loading="lazy">`;
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

  function result(sectionKey, correctOnFirstTry, total, wrongQuestions) {
    if (!resultImageCache.has(sectionKey)) {
      const album = wrongQuestions > 3 ? imageAlbums.bad : imageAlbums.good;
      resultImageCache.set(sectionKey, choose(album));
    }

    const isGood = wrongQuestions <= 3;
    const grade = total ? Math.round((correctOnFirstTry / total) * 100) : 0;
    return `
      <section class="my-4 flex flex-col items-center gap-4 rounded-3xl border-2 ${isGood ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'} p-5 text-center shadow-md sm:flex-row" role="status" aria-label="نتيجة القسم">
        ${imageMarkup(resultImageCache.get(sectionKey), isGood ? 'صورة نتيجة جيدة' : 'صورة تشجيعية بعد أخطاء')}
        <div class="flex-1">
          <h3 class="text-xl font-black ${isGood ? 'text-emerald-800' : 'text-rose-800'}">نتيجة هذا القسم: ${grade}٪</h3>
          <p class="mt-1 font-bold text-slate-700">إجابات صحيحة من أول محاولة: ${correctOnFirstTry} من ${total}</p>
          <p class="mt-1 text-sm font-bold text-slate-600">أخطأت في ${wrongQuestions} ${wrongQuestions === 1 ? 'سؤال' : 'أسئلة'} مختلفة.</p>
          <p class="mt-2 font-black ${isGood ? 'text-emerald-700' : 'text-rose-700'}">${isGood ? 'أحسنت! استمر في هذا الأداء الرائع 🌟' : 'لا تيأس؛ راجع الإجابات وحاول أن تحقق نتيجة أفضل في القسم التالي 💪'}</p>
        </div>
      </section>`;
  }

  function thanks() {
    if (!thanksImage) thanksImage = choose(imageAlbums.thanks);
    return `
      <section class="my-6 flex flex-col items-center gap-4 rounded-3xl border-2 border-amber-200 bg-amber-50 p-6 text-center shadow-lg sm:flex-row" role="status" aria-label="إتمام المراجعة">
        ${imageMarkup(thanksImage, 'صورة شكر')}
        <div>
          <h2 class="text-2xl font-black text-amber-800">أحسنت! أكملت المراجعة كلها 🎉</h2>
          <p class="mt-2 font-bold text-amber-900">شكراً لمشاركتك يا بطل، واصل اجتهادك وتألقك دائماً ⭐</p>
        </div>
      </section>`;
  }

  window.reviewFeedback = Object.freeze({ welcome, result, thanks });
})();
