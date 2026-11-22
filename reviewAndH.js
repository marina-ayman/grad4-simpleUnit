const AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioCtx = null;
        let soundEnabled = true;

        function initAudio() {
            if (!audioCtx) audioCtx = new AudioContext();
        }

        function playSound(type) {
            if (!soundEnabled) return;
            initAudio();
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const now = audioCtx.currentTime;

            if (type === 'correct') {
                const notes = [523.25, 659.25, 783.99, 1046.50];
                notes.forEach((freq, i) => {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.value = freq;
                    osc.connect(gain); gain.connect(audioCtx.destination);
                    gain.gain.setValueAtTime(0, now + i * 0.09);
                    gain.gain.linearRampToValueAtTime(0.25, now + i * 0.09 + 0.02);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.35);
                    osc.start(now + i * 0.09);
                    osc.stop(now + i * 0.09 + 0.4);
                });
                const extra = audioCtx.createOscillator();
                const eg = audioCtx.createGain();
                extra.type = 'sine';
                extra.frequency.value = 1318.51;
                extra.connect(eg); eg.connect(audioCtx.destination);
                eg.gain.setValueAtTime(0.15, now + 0.45);
                eg.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
                extra.start(now + 0.45); extra.stop(now + 0.95);
            } else if (type === 'wrong') {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(392, now);
                osc.frequency.exponentialRampToValueAtTime(196, now + 0.35);
                gain.gain.setValueAtTime(0.18, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
                osc.connect(gain); gain.connect(audioCtx.destination);
                osc.start(now); osc.stop(now + 0.5);
                const osc2 = audioCtx.createOscillator();
                const g2 = audioCtx.createGain();
                osc2.type = 'triangle';
                osc2.frequency.setValueAtTime(280, now + 0.05);
                osc2.frequency.exponentialRampToValueAtTime(140, now + 0.35);
                g2.gain.setValueAtTime(0.12, now + 0.05);
                g2.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
                osc2.connect(g2); g2.connect(audioCtx.destination);
                osc2.start(now + 0.05); osc2.stop(now + 0.45);
            } else if (type === 'click') {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(880, now);
                osc.frequency.exponentialRampToValueAtTime(440, now + 0.05);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                osc.connect(gain); gain.connect(audioCtx.destination);
                osc.start(now); osc.stop(now + 0.1);
            } else if (type === 'levelup') {
                [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, i) => {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'square';
                    osc.frequency.value = freq;
                    osc.connect(gain); gain.connect(audioCtx.destination);
                    gain.gain.setValueAtTime(0.001, now + i * 0.1);
                    gain.gain.linearRampToValueAtTime(0.15, now + i * 0.1 + 0.02);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.25);
                    osc.start(now + i * 0.1);
                    osc.stop(now + i * 0.1 + 0.3);
                });
            }
        }

        function toggleSound() {
            soundEnabled = !soundEnabled;
            const icon = document.getElementById('sound-icon');
            icon.className = soundEnabled ? 'fa-solid fa-volume-high text-slate-600' : 'fa-solid fa-volume-xmark text-red-500';
        }

const appData = [
            {
                id: "sec0",
                title: "الأعداد الكبيرة والقيمة المكانية",
                icon: "fa-hashtag",
                color: "from-blue-600 to-cyan-600",
                desc: "تدرّب على القيمة المكانية والمقارنة والتقريب والصيغة التحليلية.",
                questions: [
                    { id:"q0_1", type:"number", question:"ما قيمة الرقم 7 في العدد 4,752,806؟", hint:"الرقم 7 في منزلة مئات الألوف", answer:[700000], explanation:"الرقم 7 في منزلة مئات الألوف، لذلك قيمته 700,000." },
                    { id:"q0_2", type:"mcq", question:"أي العددين أكبر؟", options:["895,432", "895,342", "العددان متساويان"], answer:"895,432", explanation:"تتساوى المنازل حتى الآلاف، ثم نقارن المئات: 4 مئات أكبر من 3 مئات." },
                    { id:"q0_3", type:"number", question:"قرّب 53,216 إلى أقرب عشرة.", hint:"انظر إلى منزلة الآحاد", answer:[53220], explanation:"منزلة الآحاد 6، فنزيد العشرات واحداً: 53,216 ≈ 53,220." },
                    { id:"q0_4", type:"multi_input", question:"اكتب قيمة كل رقم:", subQuestions:[
                        {label:"قيمة الرقم 3 في 238,765,091", key:"pv1", answer:30000000},
                        {label:"قيمة الرقم 5 في 238,765,091", key:"pv2", answer:5000}
                    ], explanation:"قيمة 3 هي 30,000,000، وقيمة 5 هي 5,000." },
                    { id:"q0_5", type:"number", question:"قرّب 238,765,091 إلى أقرب مليون.", hint:"انظر إلى منزلة مئات الألوف", answer:[239000000], explanation:"منزلة مئات الألوف 7، لذا نزيد الملايين واحداً: 238,765,091 ≈ 239,000,000." }
                ]
            },
            {
                id: "sec1",
                title: "الضرب والقسمة ومضاعفات 10، 100، 1000",
                icon: "fa-bolt",
                color: "from-purple-600 to-indigo-600",
                desc: "استمتع بتسهيل عمليات الضرب وخاصية الإبدال والدمج بمضاعفات 10 و100 و1000!",
                questions: [
                    { id:"q1_1", type:"number", question:"كم عدد العشرات التي تكون العدد 180 ؟", hint:"اقسم 180 على 10", answer:[18], explanation:"العدد 180 يتكون من 18 عشرة، لأن: 18 × 10 = 180" },
                    { id:"q1_2", type:"number", question:"اكتب العدد الناقص: 3 × 800 = (3 × 8) × ...............", hint:"3 × 800 = 3 × 8 × 100", answer:[100], explanation:"3 × 800 تعادل (3 × 8) × 100 = 24 × 100 = 2,400" },
                    { id:"q1_3", type:"multi_input", question:"استخدم تحليل مضاعفات 10، 100، 1,000 لتسهيل عملية الضرب:", subQuestions:[
                        {label:"أوجد ناتج: 4 × 30", key:"sq1", answer:120},
                        {label:"أوجد ناتج: 8 × 600", key:"sq2", answer:4800},
                        {label:"أوجد ناتج: 2 × 7,000", key:"sq3", answer:14000}
                    ], explanation:"4 × 30 = 120 | 8 × 600 = 4,800 | 2 × 7,000 = 14,000" },
                    { id:"q1_4", type:"number", question:"الأداء المنزلي (1): 5 × (....... × 2) = 2 × (5 × 2)", hint:"احسب 2 × (5 × 2) = 2 × 10 = 20", answer:[2], acceptAnswers:[2], explanation:"2 × (5 × 2) = 2 × 10 = 20، لذلك: 5 × (2 × 2) = 5 × 4 = 20." },
                    { id:"q1_5", type:"number", question:"الأداء المنزلي (2): (5 × 2) × ....... = (6 × 5) × 2", hint:"الطرف = 60، (5×2)=10", answer:[6], explanation:"(6 × 5) × 2 = 60. إذن 10 × 6 = 60." },
                    { id:"q1_6", type:"mcq", question:"ضع الأقواس في المكان المناسب: 30 = 5 × 3 × 2", options:["30 = (5 × 3) × 2","30 = 5 × (3 × 2)","كلاهما صحيح"], answer:"كلاهما صحيح", explanation:"خاصية الدمج تسمح بالحالتين." },
                    { id:"q1_7", type:"mcq", question:"ضع الأقواس: 24 = 6 × 1 × 4", options:["24 = (6 × 1) × 4","24 = 6 × (1 × 4)","كلاهما صحيح"], answer:"كلاهما صحيح", explanation:"كلا الحالتين تعطي 24." },
                    { id:"q1_8", type:"multi_input", question:"أكمل الفراغات لتحصل على معادلات صحيحة:", subQuestions:[
                        {label:"4 × (....... × 2) = 2 × (3 × 4)", key:"blank1", answer:3},
                        {label:"5 × (....... × 1) = (8 × 5) × 1", key:"blank2", answer:8}
                    ], explanation:"الفراغ الأول = 3، الفراغ الثاني = 8." },
                    { id:"q1_9", type:"multi_input", question:"أوجد الناتج باستخدام خاصية الإبدال والدمج:", subQuestions:[
                        {label:"5 × 9 × 2 =", key:"comb1", answer:90},
                        {label:"4 × 7 × 25 =", key:"comb2", answer:700}
                    ], explanation:"(5×2)×9=90 | (4×25)×7=700." },
                    { id:"q1_10", type:"multi_input", question:"اكتب العدد الناقص باستخدام خاصية الإبدال:", subQuestions:[
                        {label:"4 × 6 = ....... × 6", key:"sw1", answer:4},
                        {label:"7 × 3 = 3 × .......", key:"sw2", answer:7}
                    ], explanation:"الترتيب لا يغير الناتج." },
                    { id:"q1_11", type:"number", question:"اشترى خالد 3 صناديق حلوى، في كل صندوق 8 قطع. كم عدد القطع؟", hint:"3 × 8", answer:[24], explanation:"3 × 8 = 24 قطعة." },
                    { id:"q1_12", type:"mcq", question:"أحمد يقول: 1,000 × 5 = 500. ماذا تقول له؟", options:["كلامه صحيح!","خطأ، 1,000 × 5 = 5,000","خطأ، الناتج 50"], answer:"خطأ، 1,000 × 5 = 5,000", explanation:"نضع 3 أصفار: 1,000 × 5 = 5,000." },
                    { id:"q1_13", type:"number", question:"اشترى أبانوب 6 شنط سعر الواحدة 100 جنيه. احسب الإجمالي.", hint:"6 × 100", answer:[600], explanation:"6 × 100 = 600 جنيه." }
                ]
            },
            {
                id: "sec2",
                title: "المقارنة بالأضعاف والمعادلات ومخطط الشرائط",
                icon: "fa-chart-bar",
                color: "from-blue-600 to-cyan-600",
                desc: "حل المسائل الكلامية والمعادلات واستخدم مخططات الشرائط بسهولة!",
                questions: [
                    { id:"q2_1", type:"number", question:"لدى أحمد 18 قلمًا، ولديه 3 أضعاف عدد أقلام يوسف. كم قلمًا لدى يوسف؟", hint:"18 ÷ 3", answer:[6], explanation:"18 ÷ 3 = 6 أقلام." },
                    { id:"q2_2", type:"number", question:"حديقة بها 24 وردة، وعدد الياسمين ضعف الورود. كم عدد الياسمين؟", hint:"24 × 2", answer:[48], explanation:"24 × 2 = 48 زهرة." },
                    { id:"q2_3", type:"number", question:"عداء يقطع 5 كم يوميًا. آخر يقطع 3 أضعاف. كم يقطع الآخر؟", hint:"5 × 3", answer:[15], explanation:"5 × 3 = 15 كم." },
                    { id:"q2_4", type:"number", question:"عدد يساوي 4 أضعاف العدد 9. ما هو؟", hint:"4 × 9", answer:[36], explanation:"4 × 9 = 36." },
                    { id:"q2_5", type:"multi_input", question:"حل المعادلات:", subQuestions:[
                        {label:"35 = ....... × 5", key:"eq1", answer:7},
                        {label:"....... = 7 × 42", key:"eq2", answer:294},
                        {label:"50 = ....... × 5", key:"eq3", answer:10}
                    ], explanation:"7 | 294 | 10" },
                    { id:"q2_6", type:"mcq", question:"معادلة: '28 يساوي 4 أضعاف عدد ما'", options:["28 = 4 × n","28 = 4 + n","n = 28 × 4"], answer:"28 = 4 × n", explanation:"الصيغة الصحيحة: 28 = 4 × n." },
                    { id:"q2_7", type:"mcq", question:"ليلى جمعت 10 طوابع، وندى 3 أضعافها. معادلة ندى (n)؟", options:["n = 3 × 10","n = 10 ÷ 3","n = 10 + 3"], answer:"n = 3 × 10", explanation:"n = 3 × 10 = 30." },
                    { id:"q2_8", type:"mcq", question:"24 بقرة = 4 أضعاف الأغنام (g). المعادلة الصحيحة؟", options:["24 = 4 × g","g = 24 × 4","24 = 4 + g"], answer:"24 = 4 × g", explanation:"24 = 4 × g." },
                    { id:"q2_9", type:"mcq", question:"عدد القصص 6 أضعاف الدواوين (7). معادلة القصص (p)؟", options:["p = 6 × 7","p = 7 ÷ 6","p = 6 + 7"], answer:"p = 6 × 7", explanation:"p = 42 قصة." },
                    { id:"q2_10", type:"number", question:"سكان (أ) = 10 أضعاف سكان (ب)=50,000. كم سكان (أ)؟", hint:"50,000 × 10", answer:[500000], explanation:"500,000 نسمة." },
                    { id:"q2_11", type:"number", question:"ما العدد الذي 5 أضعافه 35؟", hint:"35 ÷ 5", answer:[7], explanation:"35 ÷ 5 = 7." },
                    { id:"q2_12", type:"number", question:"ما العدد الذي يساوي 7 أضعاف 9؟", hint:"7 × 9", answer:[63], explanation:"7 × 9 = 63." },
                    { id:"q2_13", type:"interactive_tape", question:"تمثيل مخطط الشرائط: 14 = 7 أضعاف 2.", tapeCount:7, tapeVal:2, totalVal:14, explanation:"7 مربعات كل منها 2 = 14." },
                    { id:"q2_14", type:"number", question:"ما العدد الذي 5 أضعافه 45؟", hint:"45 ÷ 5", answer:[9], explanation:"45 ÷ 5 = 9." },
                    { id:"q2_15", type:"number", question:"كم عدد المربعات (9) لتكوين 27؟", hint:"27 ÷ 9", answer:[3], explanation:"3 × 9 = 27." }
                ]
            },
            {
                id: "sec3",
                title: "المحيط والمساحة والأشكال الهندسية",
                icon: "fa-draw-polygon",
                color: "from-amber-500 to-orange-600",
                desc: "قوانين وحساب محيط ومساحة المربعات والمستطيلات بخطوات واضحة!",
                questions: [
                    { id:"q3_1", type:"number", question:"مربع محيطه 36 سم. ما طول ضلعه؟", hint:"36 ÷ 4", answer:[9], explanation:"36 ÷ 4 = 9 سم." },
                    { id:"q3_2", type:"number", question:"مربع مساحته 49 سم². طول ضلعه؟", hint:"ابحث عن عدد × نفسه = 49", answer:[7], explanation:"7 × 7 = 49." },
                    { id:"q3_3", type:"number", question:"مستطيل محيطه 16 سم وطوله 5 سم. العرض a؟", hint:"نصف المحيط = 8", answer:[3], explanation:"8 - 5 = 3 سم." },
                    { id:"q3_4", type:"number", question:"مربع ضلعه 7 م. مساحته؟", hint:"7 × 7", answer:[49], explanation:"49 م²." },
                    { id:"q3_5", type:"number", question:"مساحة مستطيل 9×5 سم²؟", hint:"9 × 5", answer:[45], explanation:"45 سم²." },
                    { id:"q3_6", type:"number", question:"حوض مستطيل 6×3 م. مساحته؟", hint:"6 × 3", answer:[18], explanation:"18 م²." },
                    { id:"q3_7", type:"multi_input", question:"احسب المحيط والمساحة:", subQuestions:[
                        {label:"مربع ضلعه 7م -> محيطه", key:"geom1", answer:28},
                        {label:"مربع ضلعه 7م -> مساحته", key:"geom2", answer:49},
                        {label:"مستطيل 12×4سم -> محيطه", key:"geom3", answer:32},
                        {label:"مستطيل 12×4سم -> مساحته", key:"geom4", answer:48}
                    ], explanation:"28 | 49 | 32 | 48" },
                    { id:"q3_8", type:"mcq", question:"أيهما أصغر: مستطيل 5×2 أم مربع ضلعه 4؟", options:["مساحة المستطيل (10)","مساحة المربع (16)","متساويتان"], answer:"مساحة المستطيل (10)", explanation:"10 أصغر من 16." },
                    { id:"q3_9", type:"mcq", question:"قانون محيط المستطيل P؟", options:["P = (L + W) × 2","P = L × W","P = L + W"], answer:"P = (L + W) × 2", explanation:"P = (L+W)×2." },
                    { id:"q3_10", type:"number", question:"محيط مستطيل 3 و 7 سم؟", hint:"(3+7)×2", answer:[20], explanation:"20 سم." },
                    { id:"q3_11", type:"number", question:"حمام سباحة 12×8 م. محيطه؟", hint:"(12+8)×2", answer:[40], explanation:"40 م." },
                    { id:"q3_12", type:"number", question:"محيط مستطيل 6×3 سم؟", hint:"(6+3)×2", answer:[18], explanation:"18 سم." },
                    { id:"q3_13", type:"number", question:"حديقة مربعة ضلعها 10م. محيطها؟", hint:"10×4", answer:[40], explanation:"40 م." }
                ]
            },
            {
                id: "sec4",
                title: "الوقت والكتلة والسعة والقياس والتحويلات",
                icon: "fa-stopwatch-20",
                color: "from-emerald-600 to-teal-600",
                desc: "تحويل وحدات الزمن والكتلة والسعة وحل المسائل الشريطية!",
                questions: [
                    { id:"q4_1", type:"number", question:"ثلاث ساعات ونصف بالدقائق؟", hint:"3×60 + 30", answer:[210], explanation:"180 + 30 = 210 دقيقة." },
                    { id:"q4_2", type:"number", question:"من 5:15 إلى 6:10 مساءً. المدة بالدقائق؟", hint:"45 + 10", answer:[55], explanation:"55 دقيقة." },
                    { id:"q4_3", type:"multi_input", question:"عصفور طار 25,000م في 5 أيام:", subQuestions:[
                        {label:"المسافة بالأمتار يوميًا", key:"bird1", answer:5000},
                        {label:"المسافة بالكيلومتر", key:"bird2", answer:5}
                    ], explanation:"5000 م = 5 كم." },
                    { id:"q4_4", type:"number", question:"15,000 ملل في 3 زجاجات. كم لتر بكل زجاجة؟", hint:"15,000 ÷ 3 ثم إلى لتر", answer:[5], explanation:"5000 ملل = 5 لتر." },
                    { id:"q4_5", type:"multi_input", question:"قطة 2 كجم، تزداد 200جم/أسبوع. بعد 5 أسابيع:", subQuestions:[
                        {label:"الزيادة (جرام)", key:"cat1", answer:1000},
                        {label:"الكتلة (جرام)", key:"cat2", answer:3000},
                        {label:"الكتلة (كجم)", key:"cat3", answer:3}
                    ], explanation:"1000 جم زيادة، الإجمالي 3 كجم." },
                    { id:"q4_6", type:"number", question:"شريطان 45 سم و 350 مم. الفرق بالسنتيمتر؟", hint:"350 مم = 35 سم", answer:[10], explanation:"45 - 35 = 10 سم." },
                    { id:"q4_7", type:"number", question:"مجموع: 950جم + 2كجم + 150جم بالجرام؟", hint:"2 كجم = 2000 جم", answer:[3100], explanation:"3,100 جرام." },
                    { id:"q4_8", type:"number", question:"طريق 753 كم، قُطع 466 كم. المتبقي؟", hint:"753 - 466", answer:[287], explanation:"287 كم." },
                    { id:"q4_9", type:"number", question:"6,500 جم فاكهة، أُكل 3 كجم. المتبقي بالجرام؟", hint:"6500 - 3000", answer:[3500], explanation:"3,500 جرام." },
                    { id:"q4_10", type:"number", question:"إناء 10 لتر به 7,560 ملل. المطلوب إضافته؟", hint:"10,000 - 7,560", answer:[2440], explanation:"2,440 ملليلتر." },
                    { id:"q4_11", type:"multi_input", question:"احسب الفروق بالأوقات:", subQuestions:[
                        {label:"7:30 - 2:15 (دقائق كلية)", key:"t1", answer:315},
                        {label:"3:10 - 40 دقيقة (دقائق كلية)", key:"t2", answer:150},
                        {label:"من 2:35 إلى 4:45 (دقائق)", key:"t3", answer:130}
                    ], explanation:"315 | 150 | 130" },
                    { id:"q4_12", type:"number", question:"من 8:40 إلى 10:40 مساءً. بالساعات؟", hint:"الفرق", answer:[2], explanation:"ساعتان." },
                    { id:"q4_13", type:"number", question:"ريم قرأت 25 دقيقة صباحًا + 48 مساءً. الإجمالي؟", hint:"25 + 48", answer:[73], explanation:"73 دقيقة." },
                    { id:"q4_14", type:"multi_input", question:"تحويلات:", subQuestions:[
                        {label:"كم ثانية في 10 دقائق؟", key:"u1", answer:600},
                        {label:"كم يومًا في 5 أسابيع و3 أيام؟", key:"u2", answer:38},
                        {label:"كم دقيقة في 6 ساعات؟", key:"u3", answer:360}
                    ], explanation:"600 | 38 | 360" },
                    { id:"q4_15", type:"multi_input", question:"280 دقيقة = ....... ساعات و ....... دقيقة", subQuestions:[
                        {label:"ساعات", key:"b_hrs", answer:4},
                        {label:"دقائق متبقية", key:"b_mins", answer:40}
                    ], explanation:"4 ساعات و40 دقيقة." },
                    { id:"q4_16", type:"number", question:"6 دقائق و40 ثانية = كم ثانية؟", hint:"(6×60) + 40", answer:[400], explanation:"400 ثانية." },
                    { id:"q4_17", type:"multi_input", question:"الكتلة والسعة:", subQuestions:[
                        {label:"كم كجم في 25 طنًا؟", key:"m1", answer:25000},
                        {label:"كم ملل في 9 لتر و495 ملل؟", key:"m2", answer:9495},
                        {label:"9,000 جم = 6 كجم + a. a=؟", key:"m3", answer:3000}
                    ], explanation:"25000 | 9495 | 3000" },
                    { id:"q4_18", type:"number", question:"3 لتر حليب، شُرب 1,850 ملل. المتبقي؟", hint:"3000 - 1850", answer:[1150], explanation:"1,150 ملليلتر." },
                    { id:"q4_19", type:"multi_input", question:"أكمل النماذج:", subQuestions:[
                        {label:"13,025 جم = ....... كجم", key:"tb1", answer:13},
                        {label:"13,025 جم = ....... جم", key:"tb2", answer:25},
                        {label:"12 لتر و530 ملل = ....... ملل", key:"tb3", answer:12530}
                    ], explanation:"13 | 25 | 12530" },
                    { id:"q4_20", type:"multi_input", question:"الأطوال والمسافات:", subQuestions:[
                        {label:"كم مترًا في 55 كم؟", key:"l1", answer:55000},
                        {label:"(10 سم + 60 مم) بالمليمتر", key:"l2", answer:160}
                    ], explanation:"55000 | 160" },
                    { id:"q4_21", type:"mcq", question:"رتب من الأقصر للأطول: 6 دسم، 70 سم، 1 م، 500 مم", options:["500 مم < 6 دسم < 70 سم < 1 م","6 دسم < 500 مم < 70 سم < 1 م","1 م < 70 سم < 6 دسم < 500 مم"], answer:"500 مم < 6 دسم < 70 سم < 1 م", explanation:"50 < 60 < 70 < 100 سم." },
                    { id:"q4_22", type:"multi_input", question:"أكمل النماذج:", subQuestions:[
                        {label:"275 سم = ....... م", key:"lb1", answer:2},
                        {label:"275 سم = ....... سم", key:"lb2", answer:75},
                        {label:"7 م و25 سم = ....... سم", key:"lb3", answer:725}
                    ], explanation:"2 | 75 | 725" },
                    { id:"q4_23", type:"multi_input", question:"عصفور طار 412 سم. عبّر:", subQuestions:[
                        {label:"الأمتار", key:"fly1", answer:4},
                        {label:"السنتيمترات المتبقية", key:"fly2", answer:12}
                    ], explanation:"4 م و 12 سم." }
                ]
            },
            {
                id: "sec5",
                title: "الجمع والطرح والمسائل الكلامية المركبة",
                icon: "fa-calculator",
                color: "from-pink-600 to-rose-600",
                desc: "حل العمليات الحسابية المتعددة والمسائل الحياتية الذكية!",
                questions: [
                    { id:"q5_1", type:"number", question:"56,219 + 80 + 1 =", hint:"+ 81", answer:[56300], explanation:"56,300." },
                    { id:"q5_2", type:"number", question:"محمد 3 علب × 12 قلم، أعطى 6. المتبقي؟", hint:"(3×12) - 6", answer:[30], explanation:"36 - 6 = 30." },
                    { id:"q5_3", type:"number", question:"مكتبة 345 كتابًا، تبرع 128، أُعير 97. الباقي؟", hint:"(345+128) - 97", answer:[376], explanation:"376 كتابًا." },
                    { id:"q5_4", type:"number", question:"مزرعة 415 دجاجة، اشترى 238، باع فأصبح 512. كم باع؟", hint:"(415+238) - 512", answer:[141], explanation:"141 دجاجة." },
                    { id:"q5_5", type:"number", question:"حافلة 1 بها 45 تلميذ، نزل 9. كم بقي؟", hint:"45 - 9", answer:[36], explanation:"36 تلميذًا." }
                ]
            }
        ];

        let currentSectionIndex = 0;
        let questionRevealObserver = null;
        let solvedQuestions = new Set();
        const answeredQuestions = new Set();
        const questionsWithErrors = new Set();
        const submittedSections = new Set();
        let currentScore = 0;
        const totalQuestionsCount = appData.reduce((sum, sec) => sum + sec.questions.length, 0);

        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('total-questions').textContent = totalQuestionsCount;
            renderNavigation();
            const requestedSection = new URLSearchParams(window.location.search).get('section');
            const requestedIndex = appData.findIndex(section => section.id === requestedSection);
            loadSection(requestedIndex >= 0 ? requestedIndex : 0);
        });

        function renderNavigation() {
            const navContainer = document.getElementById('sections-nav');
            navContainer.innerHTML = '';
            appData.forEach((sec, idx) => {
                const answeredInSec = sec.questions.filter(q => answeredQuestions.has(q.id)).length;
                const isComplete = submittedSections.has(sec.id);
                const btn = document.createElement('button');
                btn.className = `w-full text-right p-3 rounded-2xl font-bold text-sm transition flex items-center justify-between border ${
                    idx === currentSectionIndex 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`;
                btn.onclick = () => { playSound('click'); loadSection(idx); };
                btn.innerHTML = `
                    <div class="flex items-center gap-2.5 overflow-hidden">
                        <span class="w-7 h-7 rounded-xl flex items-center justify-center text-xs text-white bg-gradient-to-tr ${sec.color} shrink-0">
                            <i class="fa-solid ${sec.icon}"></i>
                        </span>
                        <span class="truncate">${sec.title}</span>
                    </div>
                    <span class="text-xs px-2 py-0.5 rounded-full ${isComplete ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'}">
                        ${answeredInSec}/${sec.questions.length}
                    </span>`;
                navContainer.appendChild(btn);
            });
        }

        function updateAnswerProgress() {
            document.getElementById('completed-count').textContent = answeredQuestions.size;
            const progressPct = (answeredQuestions.size / totalQuestionsCount) * 100;
            document.getElementById('overall-progress').style.width = `${progressPct}%`;
        }

        function loadSection(index) {
            currentSectionIndex = index;
            const sec = appData[index];
            document.getElementById('section-badge').textContent = `القسم ${index + 1} من ${appData.length}`;
            document.getElementById('section-title').textContent = sec.title;
            document.getElementById('section-desc').textContent = sec.desc;
            document.getElementById('section-icon').className = `fa-solid ${sec.icon}`;
            document.getElementById('section-header').className = `bg-gradient-to-r ${sec.color} rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex items-center justify-between`;

            const qContainer = document.getElementById('questions-container');
            qContainer.innerHTML = '';
            qContainer.insertAdjacentHTML('beforeend', reviewFeedback.welcome(`reviewAndH-${sec.id}`));

            sec.questions.forEach((q, qIndex) => {
                const isSolved = solvedQuestions.has(q.id);
                const isAnswered = answeredQuestions.has(q.id);
                const isWrong = isAnswered && !isSolved;
                const card = document.createElement('div');
                card.id = `card-${q.id}`;
                card.className = `glass-card question-enter rounded-3xl p-6 shadow-sm border border-slate-200 transition duration-300 hover:shadow-md ${isSolved ? 'border-emerald-300 bg-emerald-50/30' : isWrong ? 'border-rose-300 bg-rose-50/50' : ''}`;

                let inputHtml = '';
                if (q.type === 'number') {
                    inputHtml = `
                        <div class="flex flex-wrap gap-3 items-center mt-4">
                            <input type="number" step="any" id="input-${q.id}" placeholder="اكتب إجابتك هنا..." 
                                class="flex-1 min-w-[200px] px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-brand-purple focus:outline-none font-black text-lg text-center ${isSolved ? 'bg-emerald-100/50 border-emerald-400' : ''}"
                                ${isSolved ? 'disabled' : ''}>
                            <button onclick="checkAnswer('${q.id}')" ${isSolved ? 'disabled' : ''} 
                                class="btn-fun px-6 py-3 text-white font-black rounded-2xl active:scale-95 transition disabled:opacity-50">
                                ${isSolved ? '<i class="fa-solid fa-check"></i> تم الحل' : 'تحقق من الإجابة 🚀'}
                            </button>
                        </div>`;
                } else if (q.type === 'mcq') {
                    inputHtml = `
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                            ${q.options.map(opt => `
                                <button onclick="checkMcqAnswer('${q.id}', '${opt}')" ${isSolved ? 'disabled' : ''}
                                    class="p-3 text-sm font-bold border-2 border-slate-200 rounded-2xl bg-white hover:border-brand-purple hover:bg-purple-50 hover:scale-105 active:scale-95 transition text-slate-700 text-center ${isSolved ? 'disabled:opacity-60' : ''}">
                                    ${opt}
                                </button>`).join('')}
                        </div>`;
                } else if (q.type === 'multi_input') {
                    inputHtml = `
                        <div class="space-y-3 mt-4">
                            ${q.subQuestions.map(sq => `
                                <div class="flex flex-wrap items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-200 gap-2">
                                    <label class="font-bold text-sm text-slate-700">${sq.label}</label>
                                    <input type="number" step="any" id="sub-${q.id}-${sq.key}" placeholder="؟" 
                                        class="w-28 px-3 py-1.5 border-2 border-slate-300 rounded-xl text-center font-bold focus:border-brand-purple focus:outline-none"
                                        ${isSolved ? 'disabled' : ''}>
                                </div>`).join('')}
                            <button onclick="checkMultiInputAnswer('${q.id}')" ${isSolved ? 'disabled' : ''}
                                class="mt-2 w-full py-3 btn-fun text-white font-black rounded-2xl active:scale-95 transition disabled:opacity-50">
                                ${isSolved ? '<i class="fa-solid fa-check"></i> تم الحل' : 'تحقق من جميع الإجابات ✨'}
                            </button>
                        </div>`;
                } else if (q.type === 'interactive_tape') {
                    inputHtml = `
                        <div class="mt-4 p-4 bg-purple-50 rounded-2xl border border-purple-200 space-y-3 text-center">
                            <p class="font-bold text-sm text-purple-900">مخطط الشرائط التفاعلي:</p>
                            <div class="flex flex-wrap justify-center gap-2">
                                ${Array(q.tapeCount).fill(0).map(() => `
                                    <div class="w-12 h-12 bg-gradient-to-tr from-brand-purple to-brand-pink text-white font-black text-lg rounded-xl flex items-center justify-center shadow-md animate-pulse-glow">
                                        ${q.tapeVal}
                                    </div>`).join('')}
                            </div>
                            <div class="text-xs text-purple-700 font-bold">المجموع = ${q.totalVal}</div>
                            <button onclick="checkInteractiveTape('${q.id}')" ${isSolved ? 'disabled' : ''}
                                class="px-6 py-2 btn-fun text-white font-black rounded-xl">
                                ${isSolved ? 'تم التأكيد ✓' : 'تأكيد 🎯'}
                            </button>
                        </div>`;
                }

                card.innerHTML = `
                    <div class="flex items-start justify-between gap-3">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-black text-sm border border-slate-300">
                                ${qIndex + 1}
                            </span>
                            <h3 class="text-lg font-bold text-slate-800 leading-snug">${q.question}</h3>
                        </div>
                        ${isSolved ? '<span class="text-emerald-500 font-bold text-xs bg-emerald-100 px-3 py-1 rounded-full"><i class="fa-solid fa-circle-check"></i> ممتازة</span>' : isWrong ? '<span class="text-rose-700 font-bold text-xs bg-rose-100 px-3 py-1 rounded-full">إجابة خاطئة ومقفلة</span>' : ''}
                    </div>
                    ${inputHtml}
                    <div id="feedback-${q.id}" class="hidden mt-3 rounded-2xl border-2 border-rose-300 bg-rose-100 p-3 text-xs font-bold text-rose-800"></div>
                    <div id="explain-${q.id}" class="${isAnswered ? '' : 'hidden'} mt-3 p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 font-bold leading-relaxed">
                        <i class="fa-solid fa-circle-info text-amber-600"></i> ${q.explanation}
                    </div>`;
                qContainer.appendChild(card);
                if (isAnswered) reviewFeedback.lockQuestionControls(card);
                if (isWrong) {
                    const feedback = document.getElementById(`feedback-${q.id}`);
                    feedback.textContent = 'تم تسجيل الإجابة خطأ ولا يمكن تعديلها.';
                    feedback.classList.remove('hidden');
                }
            });
            const sendButton = document.createElement('button');
            sendButton.type = 'button';
            sendButton.className = 'w-full rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink px-6 py-4 text-lg font-black text-white shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60';
            sendButton.disabled = submittedSections.has(sec.id);
            sendButton.textContent = sendButton.disabled ? 'تم إرسال المجموعة' : 'إرسال المجموعة وعرض النتيجة';
            sendButton.onclick = submitCurrentSection;
            qContainer.appendChild(sendButton);
            revealQuestionCards(qContainer);
            renderNavigation();
        }

        function revealQuestionCards(container) {
            if (questionRevealObserver) questionRevealObserver.disconnect();
            const cards = container.querySelectorAll('.question-enter');

            if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                cards.forEach(card => card.classList.add('is-visible'));
                return;
            }

            questionRevealObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    questionRevealObserver.unobserve(entry.target);
                });
            }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

            cards.forEach(card => questionRevealObserver.observe(card));
        }

        function submitCurrentSection() {
            const sec = appData[currentSectionIndex];
            if (submittedSections.has(sec.id)) return;

            sec.questions.forEach(q => {
                if (!answeredQuestions.has(q.id)) {
                    answeredQuestions.add(q.id);
                    questionsWithErrors.add(q.id);
                }
            });
            submittedSections.add(sec.id);
            updateAnswerProgress();
            loadSection(currentSectionIndex);

            const wrongQuestions = sec.questions.filter(q => questionsWithErrors.has(q.id)).length;
            const points = sec.questions.filter(q => solvedQuestions.has(q.id)).length;
            reviewFeedback.showResultPopup(
                `reviewAndH-${sec.id}`,
                sec.title,
                points,
                sec.questions.length,
                wrongQuestions,
                submittedSections.size === appData.length
            );
        }

        function revealExplanation(qId) {
            const explanation = document.getElementById(`explain-${qId}`);
            if (explanation) explanation.classList.remove('hidden');
        }

        function checkAnswer(qId) {
            const input = document.getElementById(`input-${qId}`);
            const val = parseFloat(input.value);
            const question = findQuestion(qId);
            if (isNaN(val)) { triggerShake(qId); return; }
            let isCorrect = false;
            if (question.acceptAnswers) isCorrect = question.acceptAnswers.includes(val);
            else isCorrect = question.answer.includes(val);
            isCorrect ? handleSuccess(qId) : handleFailure(qId);
            revealExplanation(qId);
        }

        function checkMcqAnswer(qId, selectedOption) {
            const question = findQuestion(qId);
            selectedOption === question.answer ? handleSuccess(qId) : handleFailure(qId);
            revealExplanation(qId);
        }

        function checkMultiInputAnswer(qId) {
            const question = findQuestion(qId);
            let allCorrect = true;
            question.subQuestions.forEach(sq => {
                const input = document.getElementById(`sub-${qId}-${sq.key}`);
                const val = parseFloat(input.value);
                if (val !== sq.answer) allCorrect = false;
            });
            allCorrect ? handleSuccess(qId) : handleFailure(qId);
            revealExplanation(qId);
        }

        function checkInteractiveTape(qId) { handleSuccess(qId); revealExplanation(qId); }

        function findQuestion(qId) {
            for (let sec of appData) {
                const q = sec.questions.find(item => item.id === qId);
                if (q) return q;
            }
            return null;
        }

        function spawnStars(x, y) {
            const emojis = ['⭐', '🌟', '✨', '💫', '🎉', '🏆'];
            for (let i = 0; i < 6; i++) {
                const star = document.createElement('div');
                star.className = 'floating-star';
                star.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                star.style.left = (x + (Math.random() - 0.5) * 120) + 'px';
                star.style.top = y + 'px';
                star.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
                document.body.appendChild(star);
                setTimeout(() => star.remove(), 1300);
            }
        }

        function handleSuccess(qId) {
            if (answeredQuestions.has(qId)) return;
            answeredQuestions.add(qId);
            solvedQuestions.add(qId);
            if (!questionsWithErrors.has(qId)) currentScore += 1;
            playSound('correct');

            confetti({
                particleCount: 80, spread: 90, origin: { y: 0.6 },
                colors: ['#7C3AED', '#EC4899', '#F59E0B', '#10B981', '#0EA5E9']
            });

            const card = document.getElementById(`card-${qId}`);
            if (card) {
                const rect = card.getBoundingClientRect();
                spawnStars(rect.left + rect.width / 2, rect.top + rect.height / 2);
                card.classList.add('pop-success');
                setTimeout(() => card.classList.remove('pop-success'), 600);
            }

            const currentSec = appData[currentSectionIndex];
            const solvedInSec = currentSec.questions.filter(q => solvedQuestions.has(q.id)).length;
            if (solvedInSec === currentSec.questions.length) {
                setTimeout(() => {
                    playSound('levelup');
                    confetti({ particleCount: 200, spread: 160, origin: { y: 0.5 }, colors: ['#F59E0B','#EC4899','#7C3AED'] });
                }, 400);
            }

            document.getElementById('score').textContent = currentScore;
            updateAnswerProgress();
            loadSection(currentSectionIndex);
        }

        function handleFailure(qId) {
            if (answeredQuestions.has(qId)) return;
            answeredQuestions.add(qId);
            questionsWithErrors.add(qId);
            playSound('wrong');
            const card = document.getElementById(`card-${qId}`);
            if (card) {
                card.classList.add('border-rose-300', 'bg-rose-50/50');
                reviewFeedback.lockQuestionControls(card);
            }
            const feedback = document.getElementById(`feedback-${qId}`);
            if (feedback) {
                feedback.textContent = 'تم تسجيل الإجابة خطأ ولا يمكن تعديلها.';
                feedback.classList.remove('hidden');
            }
            updateAnswerProgress();
            renderNavigation();
            triggerShake(qId);
        }

        function triggerShake(qId) {
            const card = document.getElementById(`card-${qId}`);
            if (card) {
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);
            }
        }
