"use strict";
// Filled in by scripts/build_app.py. BACKEND is null when no Supabase config was given at build time;
// the app is then fully offline and every server feature stays hidden.
const CONFIG = {"quiz": ["data/quiz-000.eb094df461.json", "data/quiz-001.7363917c2a.json", "data/quiz-002.9f1da8cdf0.json", "data/quiz-003.a36ada2a95.json", "data/quiz-004.e084ae5747.json", "data/quiz-005.7106a2565f.json", "data/quiz-006.393424911a.json"], "quizIndex": "data/quizindex.0458f3e9bd.json", "shareBase": "https://pingpong.einzsoft.com/", "labels": {"space": {"name": "อวกาศ"}, "science": {"name": "วิทยาศาสตร์"}, "body": {"name": "ร่างกายและสุขภาพ"}, "animals": {"name": "สัตว์โลก"}, "geography": {"name": "ภูมิศาสตร์"}, "history": {"name": "ประวัติศาสตร์"}, "food": {"name": "อาหาร"}, "arts": {"name": "ศิลปะและบันเทิง"}, "sports": {"name": "กีฬา"}, "tech": {"name": "เทคโนโลยี"}, "economy": {"name": "เงินและเศรษฐกิจ"}, "world_languages": {"name": "ภาษาทั่วโลก"}, "thai_words": {"name": "คำไทยยาก", "badge": true}, "idioms": {"name": "สำนวนไทย"}, "pipes": {"name": "หมุนท่อ"}, "flow": {"name": "ลากเส้น"}, "wordsearch": {"name": "หาคำ"}, "water_sort": {"name": "เทน้ำ"}, "parking": {"name": "เลื่อนแท่ง"}, "ice_slide": {"name": "ลื่นน้ำแข็ง"}, "tilt": {"name": "เอียงกล่อง"}, "make_24": {"name": "เกม 24"}}, "breaks": [["brk-0001", "เล่นมาสักพักแล้ว พักสายตาแป๊บนึงกันไหม"], ["brk-0002", "ลองมองไปไกลๆ สักจุด เช่น ต้นไม้หรือท้องฟ้า แล้วค่อยกลับมาเล่นต่อนะ"], ["brk-0003", "ป่องขอพักตาด้วยคน มาหลับตานับหนึ่งถึงสิบไปพร้อมกันไหม"], ["brk-0004", "ตาจ้องจอมานานแล้ว ลองกะพริบตาช้าๆ สักสิบครั้งดูไหม"], ["brk-0005", "หน้าต่างใกล้ๆ มีอะไรน่ามองบ้าง ลองไปส่องดูสักครู่สิ"], ["brk-0006", "ลองหลับตาเบาๆ แล้วฟังเสียงรอบตัวสักพัก ได้ยินอะไรบ้าง"], ["brk-0007", "มองหาสิ่งที่อยู่ไกลที่สุดในห้อง แล้วมองค้างไว้สักหน่อยกันไหม"], ["brk-0008", "ป่องจะรอตรงนี้นะ ไปพักสายตาให้สบายก่อนได้เลย"], ["brk-0009", "ลองกะพริบตาถี่ๆ สักพัก แล้วหลับตาพักเบาๆ ดูไหม"], ["brk-0010", "ถ้าอยู่ข้างนอก ลองมองหาก้อนเมฆสักก้อน ดูสิว่าเหมือนอะไร"], ["brk-0011", "วางจอลงแป๊บนึง แล้วมองไปรอบๆ ห้องช้าๆ กันไหม"], ["brk-0012", "ลองหลับตาแล้วนึกถึงที่ที่ชอบที่สุดสักครู่ดูไหม"], ["brk-0013", "มองไปไกลๆ แล้วลองนับดูว่าเห็นสีเขียวกี่อย่าง"], ["brk-0014", "ตาเราทำงานมาตั้งหลายข้อแล้ว ให้มันได้พักบ้างไหม"], ["brk-0015", "ลองเอามือป้องตาเบาๆ ให้มืดสักครู่ เหมือนปิดไฟให้ตางีบ"], ["brk-0016", "ลองมองออกไปข้างนอกสักหน่อยไหม ตอนนี้ฟ้าเป็นสีอะไรนะ"], ["brk-0017", "ลองหายใจเข้าลึกๆ ช้าๆ แล้วค่อยๆ ผ่อนออกยาวๆ สักสามรอบไหม"], ["brk-0018", "หายใจเข้านับสี่ ผ่อนออกนับสี่ มาลองไปพร้อมป่องกันไหม"], ["brk-0019", "ป่องพองตัวเวลาหายใจเข้า ลองหายใจเข้าให้ท้องพองแบบป่องดูสิ"], ["brk-0020", "ลองสูดลมหายใจลึกๆ สักครั้ง แล้วปล่อยออกช้าๆ เหมือนเป่าลมให้เทียนไหวดูไหม"], ["brk-0021", "ลองหายใจช้าลงอีกนิด แล้วสังเกตดูว่าลมหายใจเย็นหรืออุ่น"], ["brk-0022", "หายใจเข้าเต็มปอด ค้างไว้นิดนึง แล้วผ่อนออกให้หมด สบายขึ้นไหม"], ["brk-0023", "ลองวางมือบนท้อง แล้วหายใจให้มือขยับขึ้นลงช้าๆ ดูไหม"], ["brk-0024", "พักสักครู่ไหม แค่หายใจเข้า หายใจออก ไม่ต้องคิดอะไรก็ได้"], ["brk-0025", "ลองยกไหล่ขึ้นสูงๆ ค้างไว้ แล้วปล่อยลงสบายๆ สักสองสามที"], ["brk-0026", "ลุกขึ้นยืดตัวสักหน่อยไหม ป่องจะเฝ้าข้อถัดไปไว้ให้"], ["brk-0027", "ลองหมุนไหล่ไปข้างหลังช้าๆ สักห้ารอบ แล้วค่อยกลับมาเล่นต่อ"], ["brk-0028", "ไปเดินหาน้ำดื่มสักแก้วไหม กลับมาแล้วค่อยเล่นต่อกัน"], ["brk-0029", "ลองเอียงคอไปซ้ายทีขวาที ช้าๆ เบาๆ พอให้รู้สึกสบาย"], ["brk-0030", "ประสานมือแล้วยืดแขนขึ้นเหนือหัว ยืดตัวให้สุดแบบสบายๆ ดูไหม"], ["brk-0031", "ลองกำมือแล้วแบมือช้าๆ สักสิบครั้งไหม ให้นิ้วได้ขยับท่าอื่นบ้าง"], ["brk-0032", "ถ้าสะดวก ลองลุกเดินไปมาสักรอบสองรอบไหม แล้วค่อยกลับมาเจอป่องใหม่นะ"], ["brk-0033", "ระหว่างพัก ลองนึกดูไหมว่ารอบนี้ได้รู้อะไรใหม่บ้าง"], ["brk-0034", "เหนื่อยก็พักก่อนได้เลย ป่องไม่ไปไหน"], ["brk-0035", "วันนี้สมองทำงานเยอะแล้ว ให้รางวัลตัวเองด้วยการพักสักนิดนะ"], ["brk-0036", "ตอบถูกหรือยังไม่ใช่ ก็ได้ความรู้ติดตัวไปแล้วทั้งนั้น"], ["brk-0037", "พักแป๊บนึงก่อนก็ได้ เดี๋ยวค่อยกลับมาลุยกันต่อ"], ["brk-0038", "ป่องดีใจที่ได้เล่นด้วยกันนะ พักสักหน่อยแล้วมาลุยต่อ"], ["brk-0039", "เรื่องที่เพิ่งรู้เมื่อกี้ ลองเล่าให้คนข้างๆ ฟังดูไหม"], ["brk-0040", "ไม่ต้องรีบนะ ควิซกับปริศนายังรออยู่ตรงนี้เสมอ"]], "legacy": {"pipes": [250, 350, 400], "flow": [350, 350, 300], "wordsearch": [500, 300, 200]}, "feed": {"kinds": {"quiz": 1, "pipes": 1, "flow": 1, "wordsearch": 1, "make_24": 1, "water_sort": 1, "parking": 1, "ice_slide": 1, "tilt": 1}, "categories": {"space": 1, "science": 1, "body": 1, "animals": 1, "geography": 1, "history": 1, "food": 1, "arts": 1, "sports": 1, "tech": 1, "economy": 1, "world_languages": 1, "thai_words": 1, "idioms": 1}, "maxRun": 2}, "pipes": {"easy": "data/pipes-easy.e4b3229019.json", "medium": "data/pipes-medium.76d3f71ab5.json", "hard": "data/pipes-hard.2ddc349dd8.json"}, "flow": {"easy": "data/flow-easy.e37299beef.json", "medium": "data/flow-medium.75979b7cd9.json", "hard": "data/flow-hard.8f51f0c890.json"}, "wordsearch": {"easy": "data/wordsearch-easy.92c260de83.json", "medium": "data/wordsearch-medium.5af1952df1.json", "hard": "data/wordsearch-hard.284807a1ee.json"}, "make_24": {"easy": "data/make_24-easy.3a3dbf8469.json", "medium": "data/make_24-medium.77a854045c.json", "hard": "data/make_24-hard.4ebff1c207.json"}, "water_sort": {"easy": "data/water_sort-easy.9e574dc373.json", "medium": "data/water_sort-medium.509dfc21c5.json", "hard": "data/water_sort-hard.32963dc200.json"}, "parking": {"easy": "data/parking-easy.9480fc7f08.json", "medium": "data/parking-medium.c693ee2bba.json", "hard": "data/parking-hard.5fd4547205.json"}, "ice_slide": {"easy": "data/ice_slide-easy.ece2226f17.json", "medium": "data/ice_slide-medium.d2ba8005d0.json", "hard": "data/ice_slide-hard.f2c40c61b1.json"}, "tilt": {"easy": "data/tilt-easy.b27fb47b9c.json", "medium": "data/tilt-medium.1f0f848457.json", "hard": "data/tilt-hard.edea08f806.json"}, "groups": [{"id": "question", "name": "คำถาม", "cats": ["space", "science", "body", "animals", "geography", "history", "food", "arts", "sports", "tech", "economy", "world_languages", "thai_words", "idioms"]}, {"id": "puzzle", "name": "ปริศนา", "cats": ["pipes", "flow", "wordsearch", "water_sort", "parking", "ice_slide", "tilt"]}, {"id": "calc", "name": "คำนวณ", "cats": ["make_24"]}], "arcade": {"kid": "e46062483abd9467", "name": "ป่องเพลิน", "games": [{"id": "swim", "name": "ป่องลอดไซ", "note": "แตะให้น้องป่องว่ายลอดช่องระหว่างไซ", "face": "happy", "file": "games/swim.f34b4bc96a.bin"}, {"id": "bounce", "name": "ป่องเด้ง", "note": "แตะตอนน้องป่องถึงพื้น ให้เด้งต่อไปเรื่อยๆ", "face": "happy", "file": "games/bounce.0fbe1ead40.bin"}, {"id": "tower", "name": "หอคอยป่อง", "note": "แตะวางบล็อกให้ตรงกัน สร้างหอคอยให้สูงที่สุด", "face": "happy", "file": "games/tower.95316c5c96.bin"}]}, "legal": "data/legal.d6148ccde1.html"};
const FACE = {"happy": "<svg aria-hidden=\"true\" viewBox=\"0 0 100 100\"><path d=\"M24.4 38.5L14.9 33.0M36.5 26.4L31.0 16.9M53.0 22.0L53.0 11.0M69.5 26.4L75.0 16.9M81.6 38.5L91.1 33.0\" stroke=\"var(--mascot-line)\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M21 55L5 43Q2 55 5 67Z\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\" stroke-linejoin=\"round\"/><circle cx=\"53\" cy=\"55\" r=\"33\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\"/><path d=\"M57 52Q63 45 69 52\" fill=\"none\" stroke=\"var(--mascot-line)\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M68 62Q75 73 82 62Z\" fill=\"#111114\"/></svg>", "confused": "<svg aria-hidden=\"true\" viewBox=\"0 0 100 100\"><g transform=\"rotate(-14 53 55)\"><path d=\"M33.2 35.2L26.8 28.8M53.0 27.0L53.0 18.0M72.8 35.2L79.2 28.8\" stroke=\"var(--mascot-line)\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M26 55L10 43Q7 55 10 67Z\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\" stroke-linejoin=\"round\"/><circle cx=\"53\" cy=\"55\" r=\"28\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\"/><circle cx=\"62\" cy=\"52\" r=\"7\" fill=\"#111114\"/><circle cx=\"64.5\" cy=\"49.5\" r=\"2.4\" fill=\"#FFFFFF\"/><path d=\"M68 65Q71 62 74 65Q77 68 80 65\" fill=\"none\" stroke=\"var(--mascot-line)\" stroke-width=\"3\" stroke-linecap=\"round\"/></g><path d=\"M83 18.5Q83 12 89 12Q95 12 95 17.5Q95 21 91 23Q89 24 89 27\" fill=\"none\" stroke=\"var(--mascot-line)\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><circle cx=\"89\" cy=\"32\" r=\"2.2\" fill=\"var(--mascot-line)\"/></svg>", "sleepy": "<svg aria-hidden=\"true\" viewBox=\"0 0 100 100\"><path d=\"M33.2 35.2L26.8 28.8M53.0 27.0L53.0 18.0M72.8 35.2L79.2 28.8\" stroke=\"var(--mascot-line)\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M26 55L10 43Q7 55 10 67Z\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\" stroke-linejoin=\"round\"/><circle cx=\"53\" cy=\"55\" r=\"28\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\"/><path d=\"M56 53Q62 57 68 53\" fill=\"none\" stroke=\"var(--mascot-line)\" stroke-width=\"4\" stroke-linecap=\"round\"/><ellipse cx=\"73\" cy=\"65\" rx=\"2.2\" ry=\"2.6\" fill=\"#111114\"/><path d=\"M82 30H90L82 40H90M90 18H96L90 25H96\" fill=\"none\" stroke=\"var(--mascot-line)\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"};
const FACE_PREMIUM = {"happy": "<svg aria-hidden=\"true\" viewBox=\"0 0 100 100\"><path d=\"M24.4 38.5L12.8 31.8M36.5 26.4L29.8 14.8M53 22L53.0 8.6M69.5 26.4L76.2 14.8M81.6 38.5L93.2 31.8\" stroke=\"var(--mascot-line)\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M21 55L5 43Q2 55 5 67Z\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\" stroke-linejoin=\"round\"/><circle cx=\"53\" cy=\"55\" r=\"33\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\"/><path d=\"M57 52Q63 45 69 52\" fill=\"none\" stroke=\"var(--mascot-line)\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M68 62Q75 73 82 62Z\" fill=\"#111114\"/><circle cx=\"12.8\" cy=\"31.8\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"11.8\" cy=\"30.7\" r=\"1.1\" fill=\"#FFE08A\"/><circle cx=\"29.8\" cy=\"14.8\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"28.8\" cy=\"13.7\" r=\"1.1\" fill=\"#FFE08A\"/><circle cx=\"53.0\" cy=\"8.6\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"52.0\" cy=\"7.5\" r=\"1.1\" fill=\"#FFE08A\"/><circle cx=\"76.2\" cy=\"14.8\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"75.2\" cy=\"13.7\" r=\"1.1\" fill=\"#FFE08A\"/><circle cx=\"93.2\" cy=\"31.8\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"92.2\" cy=\"30.7\" r=\"1.1\" fill=\"#FFE08A\"/><path d=\"M12 15.5Q14.21 19.79 18.5 22Q14.21 24.21 12 28.5Q9.79 24.21 5.5 22Q9.79 19.79 12 15.5Z\" fill=\"#FFC233\"/><path d=\"M91 75Q92.7 78.3 96 80Q92.7 81.7 91 85Q89.3 81.7 86 80Q89.3 78.3 91 75Z\" fill=\"#FFC233\"/></svg>", "confused": "<svg aria-hidden=\"true\" viewBox=\"0 0 100 100\"><g transform=\"rotate(-14 53 55)\"><path d=\"M33.2 35.2L25.4 27.4M53 27L53.0 16.0M72.8 35.2L80.6 27.4\" stroke=\"var(--mascot-line)\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M26 55L10 43Q7 55 10 67Z\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\" stroke-linejoin=\"round\"/><circle cx=\"53\" cy=\"55\" r=\"28\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\"/><circle cx=\"62\" cy=\"52\" r=\"7\" fill=\"#111114\"/><path d=\"M64.5 46.1Q65.792 48.208 67.9 49.5Q65.792 50.792 64.5 52.9Q63.208 50.792 61.1 49.5Q63.208 48.208 64.5 46.1Z\" fill=\"#FFFFFF\"/><path d=\"M68 65Q71 62 74 65Q77 68 80 65\" fill=\"none\" stroke=\"var(--mascot-line)\" stroke-width=\"3\" stroke-linecap=\"round\"/></g><path d=\"M83 18.5Q83 12 89 12Q95 12 95 17.5Q95 21 91 23Q89 24 89 27\" fill=\"none\" stroke=\"var(--mascot-line)\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><circle cx=\"89\" cy=\"32\" r=\"2.2\" fill=\"var(--mascot-line)\"/><circle cx=\"25.4\" cy=\"27.4\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"24.4\" cy=\"26.3\" r=\"1.1\" fill=\"#FFE08A\"/><circle cx=\"53.0\" cy=\"16.0\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"52.0\" cy=\"14.9\" r=\"1.1\" fill=\"#FFE08A\"/><circle cx=\"80.6\" cy=\"27.4\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"79.6\" cy=\"26.3\" r=\"1.1\" fill=\"#FFE08A\"/><path d=\"M14 74.5Q15.870000000000001 78.13 19.5 80Q15.870000000000001 81.87 14 85.5Q12.129999999999999 81.87 8.5 80Q12.129999999999999 78.13 14 74.5Z\" fill=\"#FFC233\"/><path d=\"M92 51.5Q93.53 54.47 96.5 56Q93.53 57.53 92 60.5Q90.47 57.53 87.5 56Q90.47 54.47 92 51.5Z\" fill=\"#FFC233\"/></svg>", "sleepy": "<svg aria-hidden=\"true\" viewBox=\"0 0 100 100\"><path d=\"M33.2 35.2L25.4 27.4M53 27L53.0 16.0M72.8 35.2L80.6 27.4\" stroke=\"var(--mascot-line)\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M26 55L10 43Q7 55 10 67Z\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\" stroke-linejoin=\"round\"/><circle cx=\"53\" cy=\"55\" r=\"28\" fill=\"#FF6A5A\" stroke=\"var(--mascot-line)\" stroke-width=\"4.5\"/><path d=\"M56 53Q62 57 68 53\" fill=\"none\" stroke=\"var(--mascot-line)\" stroke-width=\"4\" stroke-linecap=\"round\"/><ellipse cx=\"73\" cy=\"65\" rx=\"2.2\" ry=\"2.6\" fill=\"#111114\"/><path d=\"M82 30H90L82 40H90M90 18H96L90 25H96\" fill=\"none\" stroke=\"var(--mascot-line)\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"25.4\" cy=\"27.4\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"24.4\" cy=\"26.3\" r=\"1.1\" fill=\"#FFE08A\"/><circle cx=\"53.0\" cy=\"16.0\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"52.0\" cy=\"14.9\" r=\"1.1\" fill=\"#FFE08A\"/><circle cx=\"80.6\" cy=\"27.4\" r=\"3.7\" fill=\"#FFC233\" stroke=\"var(--mascot-line)\" stroke-width=\"1.7\"/><circle cx=\"79.6\" cy=\"26.3\" r=\"1.1\" fill=\"#FFE08A\"/><path d=\"M12 18Q14.04 21.96 18 24Q14.04 26.04 12 30Q9.96 26.04 6 24Q9.96 21.96 12 18Z\" fill=\"#FFC233\"/><path d=\"M90 79.5Q91.53 82.47 94.5 84Q91.53 85.53 90 88.5Q88.47 85.53 85.5 84Q88.47 82.47 90 79.5Z\" fill=\"#FFC233\"/></svg>"};
/* The mascot's face in the skin in force: the premium skin draws its own (brand/premium). */
const face = name => (document.documentElement.dataset.skin === "premium" ? FACE_PREMIUM : FACE)[name];
const BACKEND = {"url": "https://pngfgnfwezsgvgvvjbyn.supabase.co", "key": "sb_publishable_PpQ3FIBjIieO3HuBecOgxQ_w4qRAcxp", "provider": "google", "turnstile": null, "lib": "assets/supabase.ee3be8de19.js"};
const LEGAL = {"version": "2026-11-14-draft6"};
const APP_VERSION = "0.3.0";

/* ---------- everything kept on the device. The app still works if storage is blocked. ---------- */
const store = {
  get(key, fallback) { try { const v = JSON.parse(localStorage.getItem(key)); return v === null ? fallback : v; } catch { return fallback; } },
  sealed: false, // true once the device was wiped: nothing still running may write the old data back
  set(key, value) { if (this.sealed) return; try { localStorage.setItem(key, JSON.stringify(value)); } catch {} },
  remove(key) { try { localStorage.removeItem(key); } catch {} },
};
const KEYS = { legacy: "pingpong-played-v1", progress: "pingpong-progress-v2", settings: "pingpong-settings-v1",
  consent: "pingpong-consent-v1", queue: "pingpong-queue-v1", account: "pingpong-account-v1", auth: "pingpong-auth", rest: "pingpong-rest-v1",
  member: "pingpong-member-v1", ladder: "pingpong-ladder-v1", best: "pingpong-best-v1", intro: "pingpong-intro-v1", review: "pingpong-review-v1" /* the removed review list: only so it is cleared */, arcadeBest: "pingpong-arcade-best-v1" };

function newId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  const b = crypto.getRandomValues(new Uint8Array(16));
  b[6] = (b[6] & 15) | 64; b[8] = (b[8] & 63) | 128;
  const h = [...b].map(x => x.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

/* FNV-1a. Identifies a puzzle level in statistics: levels never change, so neither does this. */
function shortHash(text) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(16).padStart(8, "0");
}

/* ---------- progress ----------
   seen.<kind> = {e: epoch, ids: [...]}; next.<game>_<tier> = levels of that tier passed so far, never
   wrapped around (next.pipes_easy). Both only grow, so two devices merge without either losing anything
   (same rules as private.merge_progress in the database). The epoch goes up when a whole pool was seen
   and restarts. Kinds the app no longer has (such as hard, now part of quiz) are carried along and never read. */
const TIERS = ["easy", "medium", "hard"];
const PUZZLES = ["pipes", "flow", "wordsearch"];
function emptyProgress() {
  const next = {};
  for (const game of PUZZLES) for (const tier of TIERS) next[game + "_" + tier] = 0;
  return { seen: { quiz: { e: 0, ids: [] } }, next, gen: 0 };
}
/* Up to v0.3 a game was one list from small grids to large, and next.<game> counted along it. Those levels
   now open the three tiers in the same order (CONFIG.legacy says how many went to each), so an old count
   splits into the tiers: 300 pipes is all 250 old easy ones and the first 50 medium. It runs on every read,
   because the server keeps the old key and a device still on v0.3 may move it on; taking the larger
   number each time makes that safe. The old key is dropped on the device; the server keeps its copy,
   which comes back with each sync and splits the same way. */
function splitLegacy(next) {
  for (const [game, sizes] of Object.entries(CONFIG.legacy || {})) {
    if (!(game in next)) continue;
    let before = 0;
    sizes.forEach((size, t) => {
      const key = game + "_" + TIERS[t];
      next[key] = Math.max(next[key] || 0, Math.min(size, Math.max(0, next[game] - before)));
      before += size;
    });
    delete next[game];
  }
}
function normalizeProgress(value) {
  const out = emptyProgress();
  if (!value || typeof value !== "object") return out;
  for (const [kind, v] of Object.entries(value.seen || {})) {
    if (Array.isArray(v)) out.seen[kind] = { e: 0, ids: v.slice() }; // v0.1 stored plain lists
    else if (v && Array.isArray(v.ids)) out.seen[kind] = { e: Math.max(0, v.e | 0), ids: v.ids.slice() };
  }
  for (const [kind, n] of Object.entries(value.next || {})) if (Number.isInteger(n) && n >= 0) out.next[kind] = n;
  splitLegacy(out.next);
  out.gen = Number.isInteger(value.gen) ? value.gen : 0;
  return out;
}
function mergeProgress(a, b) {
  const out = emptyProgress();
  for (const kind of new Set([...Object.keys(a.seen), ...Object.keys(b.seen)])) {
    const x = a.seen[kind] || { e: -1, ids: [] }, y = b.seen[kind] || { e: -1, ids: [] };
    const ids = x.e > y.e ? x.ids : y.e > x.e ? y.ids : [...new Set([...x.ids, ...y.ids])];
    out.seen[kind] = { e: Math.max(x.e, y.e), ids: ids.slice().sort((m, n) => m - n) };
  }
  for (const kind of new Set([...Object.keys(a.next), ...Object.keys(b.next)])) out.next[kind] = Math.max(a.next[kind] || 0, b.next[kind] || 0);
  out.gen = Math.max(a.gen || 0, b.gen || 0);
  return out;
}
function progressCount(p) {
  return Object.values(p.seen).reduce((n, s) => n + s.ids.length, 0) + Object.values(p.next).reduce((n, v) => n + v, 0);
}
/* True when merging `extra` into `base` would add nothing. */
function coveredBy(extra, base) {
  const m = mergeProgress(extra, base);
  return JSON.stringify(m.seen) === JSON.stringify(mergeProgress(base, base).seen) && Object.keys(m.next).every(k => m.next[k] === (base.next[k] || 0));
}

const played = normalizeProgress(store.get(KEYS.progress, null) || store.get(KEYS.legacy, null));
// First open after v0.3: keep the split right away, not only after the next level.
if (Object.keys((store.get(KEYS.progress, null) || {}).next || {}).some(k => k in (CONFIG.legacy || {}))) store.set(KEYS.progress, played);
function setPlayed(value) { Object.assign(played, normalizeProgress(value)); }
function savePlayed() {
  store.set(KEYS.progress, played);
  store.remove(KEYS.legacy);
  if (typeof Net !== "undefined") Net.progressChanged();
}

/* ---------- settings ---------- */
const settings = { sound: true, volume: 0.7, theme: "system", breakOn: true, breakEvery: 30, breakSecs: 30, off: [], tier: "auto", weights: {}, arcadeRest: true, skin: "default", at: "1970-01-01T00:00:00.000Z", ...store.get(KEYS.settings, {}) };
/* The review of wrong answers was removed (history is its replacement): clear what an earlier version left on this device. */
delete settings.review;
store.remove(KEYS.review);
function saveSettings(change) {
  Object.assign(settings, change, { at: new Date().toISOString() });
  store.set(KEYS.settings, settings);
  if (typeof Net !== "undefined") Net.progressChanged();
}
/* The theme and the mascot's skin in force. Both are chosen apart from each other. The premium ones are for members: without
   membership the player gets the device's own theme and the ordinary mascot, what was chosen stays in settings and comes back
   with membership. `look` holds what the theme-and-skin page is previewing, which nothing keeps: it is for looking at a
   members' look, and it ends with the page. */
const look = { theme: null, skin: null };
const themeNow = () => look.theme || (settings.theme === "premium" && !isMember() ? "system" : settings.theme);
const skinNow = () => look.skin || (settings.skin === "premium" && isMember() ? "premium" : "default");
function applyTheme() {
  const root = document.documentElement, theme = themeNow();
  if (theme === "dark" || theme === "light" || theme === "premium") root.dataset.theme = theme; else delete root.dataset.theme;
  if (skinNow() === "premium") root.dataset.skin = "premium"; else delete root.dataset.skin;
  const dark = theme === "dark" || theme === "premium" || (theme !== "light" && !matchMedia("(prefers-color-scheme: light)").matches);
  document.querySelectorAll('meta[name="theme-color"]').forEach(m => { m.removeAttribute("media"); m.content = theme === "premium" ? "#0B0B10" : dark ? "#0E0E12" : "#FFFFFF"; });
}

/* ---------- consent ----------
   Each decision is appended and tagged with the document version. Decisions wait in `unsent`
   until there is an account to record them on; a player with statistics off never sends them. */
const consent = { terms: null, analytics: null, unsent: [], history: [], ...store.get(KEYS.consent, {}) };
function saveConsent() { store.set(KEYS.consent, consent); }
function decide(kind, granted) {
  const entry = { id: newId(), kind, granted, doc_version: LEGAL.version, decided_at: new Date().toISOString() };
  consent[kind] = { granted, version: LEGAL.version, at: entry.decided_at };
  consent.unsent.push(entry);
  consent.history.push(entry);
  if (consent.history.length > 100) consent.history.shift();
  saveConsent();
}
function needsConsent() {
  if (!consent.terms || !consent.terms.granted || consent.terms.version !== LEGAL.version) return true;
  return !!BACKEND && (!consent.analytics || consent.analytics.version !== LEGAL.version);
}
/* The how-to-play intro is for someone who has never opened the app: no flag, and nothing played, decided or
   kept yet. It is read before consent is asked, because a first run writes consent a moment later. */
function introDue() {
  if (store.get(KEYS.intro, false)) return false;
  const best = store.get(KEYS.best, null);
  return !(progressCount(played) > 0 || consent.terms || consent.history.length || (best && Object.keys(best).length) || store.get(KEYS.legacy, null));
}
/* Anything short of a clear yes to the current document means no statistics. */
function statsOn() {
  return !!BACKEND && !!consent.analytics && consent.analytics.granted && consent.analytics.version === LEGAL.version;
}

function wipeDevice() {
  store.sealed = true;
  for (const key of Object.values(KEYS)) store.remove(key);
  try {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith(KEYS.auth)) localStorage.removeItem(k);
    }
  } catch {}
  // In the wrapped app the session lives in the Keychain or Keystore under the same names supabase-js uses.
  if (typeof Native !== "undefined" && Native.on) {
    for (const suffix of ["", "-code-verifier", "-user"]) Native.secureStorage.removeItem(KEYS.auth + suffix).catch(() => {});
    Native.secureStorage.removeItem("pingpong-arcade-key").catch(() => {}); // the key that opens the arcade games
  }
}

/* ---------- sound: everything is synthesized here, there are no audio files ----------
   Tune by editing SOUND_TABLE. A note is one of two shapes, both start at t seconds (default 0):
   - simple: f Hz, to = glide target, d length (s), g gain, w wave.
   - additive: f Hz, g gain, p = partials [ratio, relGain, decaySec], one sine each that rises to
     g*relGain in 0.004 s and falls to silence at 0.004 + decay; optional lp = lowpass Hz and
     sag = [pitch multiplier, seconds] that bends the pitch after the start.
   `group` decides overlap: a new sound fades out what is still ringing in its group, so fast tapping
   stays clean. `gap` is the minimum ms between repeats of the same sound. */
// A kalimba with a long ring for "ping-pong", and a dull, short one for a miss.
const KALIMBA_LONG = [[1, 1, 1.1], [2, 0.12, 0.25], [5.95, 0.2, 0.05]];
const MUTED = [[1, 1, 0.28], [2, 0.1, 0.1], [5.95, 0.08, 0.03]];
// The app's one signature sound: A5 down to F5, used only for a right answer and a solved puzzle.
const PING_PONG = [{ f: 880, g: 0.16, p: KALIMBA_LONG }, { f: 698, t: 0.2, g: 0.18, p: KALIMBA_LONG }];
const SOUND_TABLE = {
  tap: { group: "ui", gap: 40, notes: [{ f: 620, d: 0.045, g: 0.09, w: "sine" }] },
  rotate: { group: "ui", gap: 30, notes: [{ f: 480, to: 560, d: 0.055, g: 0.11, w: "triangle" }] },
  trace: { group: "trace", gap: 30, notes: [{ f: 523, d: 0.07, g: 0.06, w: "sine" }] }, // f comes from TRACE_SCALE
  link: { group: "trace", gap: 60, notes: [{ f: 1047, g: 0.12, p: [[1, 1, 0.12], [2, 0.08, 0.05]] }] },
  found: { group: "ui", gap: 60, notes: [{ f: 1047, g: 0.12, p: [[1, 1, 0.12], [2, 0.08, 0.05]] }] },
  pour: { group: "ui", gap: 60, notes: [{ f: 760, to: 440, d: 0.11, g: 0.07, w: "sine" }] }, // one soft glide down, water going over
  correct: { group: "result", gap: 150, notes: PING_PONG },
  // "Ping-thud": the same kalimba, muffled and quiet, the second note falling low. A shrug, not a buzzer.
  wrong: { group: "result", gap: 150, notes: [
    { f: 880, g: 0.09, p: MUTED, lp: 2200 },
    { f: 587 * 0.84, t: 0.2, g: 0.16, p: MUTED, lp: 1000, sag: [2 ** (-1 / 12), 0.25] },
  ] },
  win: { group: "result", gap: 300, notes: PING_PONG },
  swipe: { group: "swipe", gap: 120, noise: { d: 0.1, g: 0.035, from: 1400, to: 500 } },
};
const TRACE_SCALE = [523, 587, 659, 784, 880, 1047, 1175, 1319, 1568, 1760, 2093];

const Sound = (() => {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  let ctx = null, master = null, noiseBuffer = null, wanted = null;
  const lastAt = {}, ringing = {};

  function setup() {
    if (ctx && ctx.state !== "closed") return ctx;
    if (!Ctx) return null;
    ctx = new Ctx();
    master = ctx.createGain();
    master.gain.value = settings.sound ? settings.volume : 0;
    const limiter = ctx.createDynamicsCompressor();
    master.connect(limiter);
    limiter.connect(ctx.destination);
    return ctx;
  }
  /* Browsers start audio suspended until a gesture. iOS can also move it to "interrupted" after a
     call or app switch, and only a new gesture brings it back, so every gesture tries again. */
  function wake() {
    try {
      if (!setup() || ctx.state === "running") return;
      const resumed = ctx.resume();
      if (resumed && resumed.then) resumed.then(() => {
        if (wanted && performance.now() - wanted.at < 250) { const { name, step } = wanted; wanted = null; play(name, step); }
      }).catch(() => {});
    } catch {}
  }
  for (const type of ["pointerdown", "touchend", "keydown", "click"]) document.addEventListener(type, wake, { capture: true, passive: true });
  document.addEventListener("visibilitychange", () => { if (!document.hidden && ctx) wake(); });

  // Returns how long the note rings, so the bus is kept until the tail is done.
  function note(n, at, out, f) {
    f = f || n.f;
    if (n.p) return voice(n, at, out, f);
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = n.w; o.frequency.setValueAtTime(f, at);
    if (n.to) o.frequency.exponentialRampToValueAtTime(n.to, at + n.d);
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(n.g, at + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, at + n.d);
    o.connect(g); g.connect(out);
    o.start(at); o.stop(at + n.d + 0.02);
    return n.d;
  }
  function voice(n, at, out, f) {
    const attack = 0.004;
    let dest = out, longest = 0;
    if (n.lp) { const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = n.lp; lp.connect(out); dest = lp; }
    for (const [ratio, rel, decay] of n.p) {
      const fr = f * ratio;
      if (fr > 14000) continue;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.setValueAtTime(fr, at);
      if (n.sag) o.frequency.exponentialRampToValueAtTime(fr * n.sag[0], at + n.sag[1]);
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(n.g * rel, at + attack);
      g.gain.exponentialRampToValueAtTime(0.0001, at + attack + decay);
      o.connect(g); g.connect(dest);
      o.start(at); o.stop(at + attack + decay + 0.05);
      longest = Math.max(longest, attack + decay + 0.05);
    }
    return longest;
  }
  function noise(n, at, out) {
    if (!noiseBuffer) {
      noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.2), ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    }
    const s = ctx.createBufferSource(), lp = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuffer;
    lp.type = "lowpass"; lp.frequency.setValueAtTime(n.from, at); lp.frequency.exponentialRampToValueAtTime(n.to, at + n.d);
    g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(n.g, at + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, at + n.d);
    s.connect(lp); lp.connect(g); g.connect(out);
    s.start(at); s.stop(at + n.d + 0.02);
  }
  function play(name, step) {
    try {
      const def = SOUND_TABLE[name];
      if (!def || !settings.sound || !settings.volume || !setup()) return;
      if (ctx.state !== "running") { wanted = { name, step, at: performance.now() }; wake(); return; }
      const now = performance.now();
      if (now - (lastAt[name] || -1e9) < def.gap) return;
      lastAt[name] = now;
      const at = ctx.currentTime + 0.002;
      const groups = def.group === "result" ? ["ui", "trace", "result"] : [def.group];
      for (const g of groups) if (ringing[g]) { ringing[g].gain.cancelScheduledValues(at); ringing[g].gain.setTargetAtTime(0, at, 0.012); }
      const bus = ctx.createGain();
      bus.connect(master);
      ringing[def.group] = bus;
      let longest = 0.1;
      if (def.noise) { noise(def.noise, at, bus); longest = def.noise.d; }
      for (const n of def.notes || []) {
        const f = name === "trace" ? TRACE_SCALE[Math.min(step || 0, TRACE_SCALE.length - 1)] : n.f;
        longest = Math.max(longest, (n.t || 0) + note(n, at + (n.t || 0), bus, f));
      }
      setTimeout(() => { try { bus.disconnect(); if (ringing[def.group] === bus) delete ringing[def.group]; } catch {} }, (longest + 0.2) * 1000);
    } catch {}
  }
  function refresh() {
    try { if (master) master.gain.setTargetAtTime(settings.sound ? settings.volume : 0, ctx.currentTime, 0.01); } catch {}
  }
  return { play, refresh };
})();

/* ---------- the wrapped app: Capacitor on iOS and Android ----------
   The same build runs on the web and inside the native shell in native/. Only the shell puts window.Capacitor on
   the page (its bridge is injected by the native side, not loaded from here), so on the web this module does
   nothing: no plugin, no file, no request. Plugins are called through the bridge's own nativePromise and
   nativeCallback, the same two calls @capacitor/core makes, so no Capacitor JavaScript ships in the build.
   The plugins themselves (@capacitor/app, @capacitor/browser) are installed in native/package.json. */
const Native = (() => {
  const cap = window.Capacitor;
  const on = !!(cap && typeof cap.isNativePlatform === "function" && cap.isNativePlatform() && typeof cap.nativePromise === "function");
  const platform = on && typeof cap.getPlatform === "function" ? cap.getPlatform() : "web";
  // Where Supabase sends the browser after sign-in. It must be on the project's Redirect URLs list, see docs/setup-supabase.md.
  const CALLBACK = "com.einzsoft.pingpong://auth-callback";

  const call = (plugin, method, options) => (on ? cap.nativePromise(plugin, method, options || {}) : Promise.reject(new Error("not native")));
  function listen(plugin, eventName, fn) {
    if (!on) return;
    cap.nativeCallback(plugin, "addListener", { eventName }, (data, err) => { if (!err) try { fn(data || {}); } catch {} });
  }

  /* The sign-in answer, reduced to what readCallback() in net.js reads, or null when the link is not ours.
     Anything else a link carries is dropped: any app or page on the phone can open this scheme. */
  function callbackParams(url) {
    if (typeof url !== "string" || !url.startsWith(CALLBACK)) return null;
    const rest = url.slice(CALLBACK.length);
    if (rest && !/^[/?#]/.test(rest)) return null; // e.g. auth-callbackX
    let parsed;
    try { parsed = new URL("https://callback.invalid" + (rest.startsWith("/") ? rest : "/" + rest)); } catch { return null; }
    const hash = new URLSearchParams(parsed.hash.slice(1)), out = new URLSearchParams();
    for (const k of ["code", "error", "error_code", "error_description"]) {
      const v = parsed.searchParams.get(k) || hash.get(k);
      if (v) out.set(k, v.slice(0, 500));
    }
    return out.has("code") || out.has("error") || out.has("error_code") || out.has("error_description") ? out : null;
  }

  /* ---------- Android back button ----------
     A layer with a way out (a close button, or the cancel of a question) is closed as if tapped. With nothing to
     close, the handler is switched off so Android does what it does in any app, including the predictive back
     animation. Layers without a way out, like first-run consent or a choice the player must make, count as nothing. */
  function topCloser() {
    const root = document.getElementById("overlays");
    const top = root && root.lastElementChild;
    return top ? top.querySelector("[data-back]") : null;
  }
  function wireBackButton() {
    let enabled = null;
    const sync = () => {
      const want = !!topCloser();
      if (want === enabled) return;
      enabled = want;
      call("App", "toggleBackButtonHandler", { enabled: want }).catch(() => {});
    };
    listen("App", "backButton", () => {
      const closer = topCloser();
      if (closer) closer.click();
      else call("App", "minimizeApp").catch(() => {}); // only if a layer closed between the press and the switch
    });
    const root = document.getElementById("overlays");
    if (root) new MutationObserver(sync).observe(root, { childList: true, subtree: true });
    sync();
  }
  if (on && platform === "android") wireBackButton();

  /* Sign-in tokens in the Keychain (iOS) or Keystore (Android) through @aparajita/capacitor-secure-storage,
     called by the native method names its own wrapper uses (the key goes in as "prefixedKey": the native side rejects any other name). supabase-js takes this as auth.storage and awaits it. */
  const secureStorage = {
    // A session saved by an earlier build sits in localStorage: move it once, so nobody is signed out by the update.
    getItem: key => call("SecureStorage", "internalGetItem", { prefixedKey: key }).then(r => {
      if (r && typeof r.data === "string") return r.data;
      let old = null;
      try { old = localStorage.getItem(key); } catch {}
      if (old === null) return null;
      return call("SecureStorage", "internalSetItem", { prefixedKey: key, data: old }).then(() => { store.remove(key); return old; });
    }),
    setItem: (key, data) => call("SecureStorage", "internalSetItem", { prefixedKey: key, data }).then(() => {}),
    removeItem: key => call("SecureStorage", "internalRemoveItem", { prefixedKey: key }).then(() => {}),
  };

  /* ---------- alternate app icons (members) ----------
     An entry of ALT_ICONS is { id, name }: id is the name of the alternate icon set on iOS (in Assets.xcassets, and not starting
     with "AppIcon") and of the activity-alias on Android (without its dot), name is what the player reads. Each entry needs its
     icon resources in native/ too: docs/alt-icons.md. The plugin is @capawesome/capacitor-app-icon, called as "AppIcon" with
     getCurrentIcon, setIcon({ icon }) and resetIcon. Nothing about icons shows unless the plugin is in the app. */
  const ALT_ICONS = [{ id: "Premium", name: "พรีเมียม" }];
  const pluginThere = () => typeof cap.isPluginAvailable !== "function" || cap.isPluginAvailable("AppIcon");
  const altIcons = {
    list: ALT_ICONS,
    available: () => on && ALT_ICONS.length > 0 && pluginThere(),
    current: () => call("AppIcon", "getCurrentIcon").then(r => (r && r.icon) || null, () => null),
    set: id => (id ? call("AppIcon", "setIcon", { icon: id }) : call("AppIcon", "resetIcon")),
  };

  return {
    on, platform, CALLBACK, callbackParams, listen, secureStorage, altIcons,
    /* The system browser: Custom Tabs on Android, Safari View Controller on iOS. Google refuses sign-in inside a web view. */
    openBrowser: url => call("Browser", "open", { url }),
    closeBrowser: () => call("Browser", "close").catch(() => {}),
    launchUrl: () => call("App", "getLaunchUrl").then(r => (r && r.url) || null, () => null),
  };
})();

/* ---------- server: identity, sync and statistics ----------
   Rules this module keeps:
   - The Supabase library is not even loaded while there is nothing to send. A player with statistics
     off who is not signed in causes zero requests.
   - Nothing here can break play: every failure is caught, and work waits in localStorage for later.
   - Guests have one identity on the server (an anonymous user), created only when statistics are on.
     Google sign-in links to it, so the user id and history stay the same.
   - Membership is read from the account's own row after a sync and kept on the device, so it holds offline.
     Guests are never members and never ask. */
const Net = (() => {
  const on = !!BACKEND;
  const QUEUE_MAX = 500, BATCH = 50, FETCH_TIMEOUT = 12000, BACKOFF_MAX = 300000, STATUS_EVERY = 3600000, CAPTCHA_TIMEOUT = 30000;
  const MEMBER_EVERY = 3600000; // read again on a sync at most hourly; always on the first sync after opening
  const BODY_TIMEOUT = 180000; // once the server has answered: three minutes carries a 20 MB export over 1 Mbit/s
  const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  const account = { mode: "none", email: null, oauth: null, decision: null, syncedUid: null, suspended: false, ...store.get(KEYS.account, {}) };
  const queue = store.get(KEYS.queue, []);
  let member = store.get(KEYS.member, null), lastMemberRead = 0; // { uid, expires_at } of the signed-in account
  let client = null, loading = null, user = null, ui = {}, turnstileLoading = null, scriptWithSession = false, captchaShown = false, lastFail = "";
  let flushTimer = null, flushing = false, backoff = 0, askedConsentResend = false;
  let syncTimer = null, syncing = false, lastSync = 0, resolving = false;
  let decisionTimer = null, decisionDelay = 0, statusTimer = null, lastStatusCheck = 0;
  let returning = false; // the wrapped app got its sign-in answer and is reloading into it

  const saveAccount = () => store.set(KEYS.account, account);
  const saveQueue = () => store.set(KEYS.queue, queue);
  const online = () => navigator.onLine !== false;
  // On the web Supabase sends the player back to this page. In the wrapped app that page is https://localhost or
  // capacitor://localhost, which no browser can reach, so the answer comes back as a deep link instead.
  const redirectTo = () => (Native.on ? Native.CALLBACK : location.origin + location.pathname);
  const changed = () => { if (ui.changed) try { ui.changed(); } catch {} };

  function timedFetch(url, options = {}) {
    const stop = new AbortController();
    const timer = setTimeout(() => stop.abort(), FETCH_TIMEOUT);
    return fetch(url, { ...options, signal: options.signal || stop.signal }).finally(() => clearTimeout(timer))
      .then(response => { setTimeout(() => stop.abort(), BODY_TIMEOUT); return response; }); // too late to matter once it is read
  }

  function setUser(next) {
    if ((next && next.id) !== (user && user.id)) askedConsentResend = false;
    if (member && (!next || next.id !== member.uid)) forgetMembership(); // signed out, or someone else
    user = next || null;
    if (user) {
      account.mode = user.is_anonymous ? "guest" : "google";
      account.email = user.is_anonymous ? null : user.email || null;
    } else {
      account.mode = "none"; account.email = null; account.syncedUid = null; account.suspended = false;
    }
    saveAccount();
    changed();
  }

  // Why the last attempt to reach the server failed, in a few plain words and no player data. Shown next to "can't connect"
  // because the wrapped app has no console to read: a wrong guess about the cause costs a whole store build.
  const failNote = (stage, e) => { lastFail = (stage + ": " + (e && (e.name || "") + (e && e.message ? " " + e.message : ""))).replace(/\s+/g, " ").slice(0, 90); };
  const withNote = text => (lastFail ? `${text} (${lastFail})` : text);

  function loadClient() {
    if (!on) return Promise.resolve(null);
    if (!loading) {
      loading = new Promise((resolve, reject) => {
        const tag = document.createElement("script");
        tag.src = BACKEND.lib;
        tag.onload = resolve;
        tag.onerror = () => reject(Object.assign(new Error("script"), { stage: "load" }));
        document.head.appendChild(tag);
      }).then(async () => {
        client = window.supabase.createClient(BACKEND.url, BACKEND.key, {
          auth: { flowType: "pkce", persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: KEYS.auth,
                  ...(Native.on ? { storage: Native.secureStorage } : {}) },
          global: { fetch: timedFetch },
        });
        client.auth.onAuthStateChange((event, session) => {
          // Calling back into the auth client from here can deadlock, so step out first.
          setTimeout(() => {
            if (event === "SIGNED_OUT") setUser(null);
            else if (session && session.user) setUser(session.user);
          }, 0);
        });
        const { data } = await client.auth.getSession();
        if (data && data.session) { user = data.session.user; setUser(user); }
        lastFail = "";
        return client;
      }).catch(e => { failNote(e && e.stage === "load" ? "load" : "client", e); loading = null; return null; });
    }
    return loading;
  }

  /* ---------- Cloudflare Turnstile: only with a site key, and only at the moment a guest is created ----------
     Nothing else in the app ever asks for it, so a player with statistics off, or anyone who already has an
     identity, never touches Cloudflare. Null means no proof today: the guest waits and statistics stay queued. */
  function loadTurnstile() {
    if (!turnstileLoading) {
      turnstileLoading = new Promise((resolve, reject) => {
        const tag = document.createElement("script");
        tag.src = TURNSTILE_SCRIPT;
        tag.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error("no turnstile")));
        tag.onerror = () => { tag.remove(); reject(new Error("no turnstile")); };
        document.head.appendChild(tag);
      }).catch(err => { turnstileLoading = null; throw err; });
    }
    return turnstileLoading;
  }
  async function captchaToken() {
    if (captchaShown) return null; // it has asked the player once this time: statistics wait until the app is next opened
    let widgets, gaveUp;
    try {
      widgets = await Promise.race([loadTurnstile(), new Promise((_, reject) => { gaveUp = setTimeout(reject, CAPTCHA_TIMEOUT); })]);
    } catch { turnstileLoading = null; return null; } finally { clearTimeout(gaveUp); }
    return new Promise(resolve => {
      const box = document.createElement("div");
      box.className = "captcha";
      document.body.appendChild(box);
      let widget, timer;
      const finish = token => {
        clearTimeout(timer);
        try { if (widget !== undefined) widgets.remove(widget); } catch {}
        box.remove();
        resolve(token || null);
      };
      timer = setTimeout(() => finish(null), CAPTCHA_TIMEOUT);
      try {
        widget = widgets.render(box, {
          sitekey: BACKEND.turnstile, appearance: "interaction-only", retry: "never", "refresh-expired": "never",
          callback: finish, "before-interactive-callback": () => { captchaShown = true; },
          "error-callback": () => { finish(null); return true; }, // true: handled, nothing for the console
          "expired-callback": () => finish(null), "timeout-callback": () => finish(null), "unsupported-callback": () => finish(null),
        });
      } catch { finish(null); }
    });
  }

  async function ensureGuest() {
    if (user) return user;
    const c = await loadClient();
    if (!c) return null;
    if (user) return user;
    let options;
    if (BACKEND.turnstile) {
      const captcha = await captchaToken();
      if (!captcha || user || !statsOn()) return user || null; // the player may have said no while it ran
      options = { options: { captchaToken: captcha } };
    }
    const { data, error } = await c.auth.signInAnonymously(options);
    if (error || !data.user) return null;
    scriptWithSession = !!options; // Cloudflare's script is still on this page, now next to a session
    setUser(data.user);
    requeueDecisions(); // a new identity, e.g. after signing out: it has no record of what was agreed
    return user;
  }
  function requeueDecisions(missing = ["terms", "analytics"]) {
    for (const kind of missing) {
      const c = consent[kind];
      if (c && !consent.unsent.some(x => x.kind === kind)) {
        consent.unsent.push({ id: newId(), kind, granted: c.granted, doc_version: c.version, decided_at: c.at });
      }
    }
    saveConsent();
  }

  /* ---------- consent records ---------- */
  async function flushConsents() {
    if (!consent.unsent.length || !user) return;
    const batch = consent.unsent.slice(0, 50);
    const { error } = await client.rpc("record_consents", { p_items: batch });
    if (error) throw error;
    const sent = new Set(batch.map(x => x.id));
    consent.unsent = consent.unsent.filter(x => !sent.has(x.id));
    saveConsent();
  }
  /* A decision is the one thing still sent with statistics off: without it the server would keep accepting
     statistics from this account's other devices. Someone with no server identity has nothing to record it on. */
  async function sendDecisions() {
    clearTimeout(decisionTimer);
    decisionTimer = null;
    if (!on || !consent.unsent.length || account.mode === "none" || !online()) return;
    try {
      const c = await loadClient();
      if (!c) throw new Error("no client");
      if (!user) return;
      await flushConsents();
      decisionDelay = 0;
      if (user && user.is_anonymous && !statsOn()) { try { c.auth.stopAutoRefresh(); } catch {} } // a guest who said no: no more traffic
    } catch (err) {
      if (await sessionGone(err)) return;
      decisionDelay = Math.min(BACKOFF_MAX, (decisionDelay || 4000) * 2);
      decisionTimer = setTimeout(sendDecisions, decisionDelay);
    }
  }
  /* The session outlived its user (deleted elsewhere, or a long-idle guest that was purged). */
  async function sessionGone(err) {
    if (!err || err.code !== "23503" || !client) return false;
    try { await client.auth.signOut({ scope: "local" }); } catch {}
    setUser(null);
    return true;
  }
  /* A decision made on another device applies here too when it is the newer one. */
  async function pullConsent() {
    const { data, error } = await client.from("consents").select("granted,doc_version,decided_at")
      .eq("kind", "analytics").order("decided_at", { ascending: false }).limit(1);
    if (error || !data || !data[0]) return;
    const remote = data[0], local = consent.analytics;
    if (!local || new Date(remote.decided_at) > new Date(local.at)) {
      consent.analytics = { granted: remote.granted, version: remote.doc_version, at: remote.decided_at };
      saveConsent();
      if (!statsOn()) clearQueue();
      changed();
    }
  }

  /* ---------- statistics queue ---------- */
  function clearQueue() { queue.length = 0; saveQueue(); backoff = 0; }
  function record(event_type, content_type, content_id, content_rev, payload) {
    if (!statsOn() || account.suspended) return;
    queue.push({ id: newId(), event_type, content_type, content_id, content_rev, payload: { v: 1, ...payload },
      app_version: APP_VERSION, occurred_at: new Date().toISOString() });
    if (queue.length > QUEUE_MAX) queue.splice(0, queue.length - QUEUE_MAX);
    saveQueue();
    schedule(queue.length >= 20 ? 1000 : 15000);
  }
  function schedule(ms) {
    if (flushTimer) {
      // While backing off, new events must not push the retry further away, nor pull it closer.
      if (backoff || ms > 2000) return;
      clearTimeout(flushTimer);
    }
    flushTimer = setTimeout(() => { flushTimer = null; flush(); }, backoff ? Math.max(ms, backoff) : ms);
  }
  async function flush() {
    if (!on || flushing || !online() || !statsOn() || account.suspended) return;
    if (!queue.length && !consent.unsent.length && user) return;
    flushing = true;
    try {
      if (!(await ensureGuest())) throw new Error("no session");
      await flushConsents();
      if (queue.length && statsOn()) { // the player may have said no during the awaits above
        const batch = queue.slice(0, BATCH);
        const { data, error } = await client.rpc("ingest_events", { p_events: batch });
        if (error && error.code !== "22023") throw error; // 22023: a batch the server will never take; drop it
        if (data && data.suspended) { account.suspended = true; saveAccount(); clearQueue(); changed(); statusTimer = setTimeout(checkStatus, STATUS_EVERY); return; }
        if (data && data.no_consent) {
          await pullConsent().catch(() => {}); // withdrawn on another device of this account?
          if (!statsOn()) return;
          if (askedConsentResend) { queue.splice(0, batch.length); saveQueue(); }
          else { // e.g. a fresh guest whose record has not landed: send the current decision again
            askedConsentResend = true;
            const c = consent.analytics;
            consent.unsent.push({ id: newId(), kind: "analytics", granted: c.granted, doc_version: c.version, decided_at: c.at });
            saveConsent();
            schedule(1000);
            return;
          }
        } else {
          const sent = new Set(batch.map(x => x.id));
          const keep = queue.filter(x => !sent.has(x.id));
          queue.length = 0; queue.push(...keep);
          saveQueue();
        }
        if (queue.length) schedule(1500);
      }
      backoff = 0;
    } catch (err) {
      await sessionGone(err);
      backoff = Math.min(BACKOFF_MAX, (backoff || 4000) * 2);
      schedule(backoff + Math.random() * 1000);
    } finally { flushing = false; }
  }

  /* A suspended guest has no sync to hear from, and a restored one would otherwise stay silent forever.
     One small read at launch, on reconnecting, and at most hourly while open; none with statistics off. */
  async function checkStatus() {
    clearTimeout(statusTimer);
    statusTimer = null;
    if (!account.suspended || account.mode !== "guest" || !statsOn() || !online()) return;
    lastStatusCheck = Date.now();
    try {
      const c = await loadClient();
      if (c && user) {
        const { data, error } = await c.from("profiles").select("account_status").maybeSingle();
        if (!error && (!data || data.account_status === "active")) {
          if (!data) { await sessionGone({ code: "23503" }); } // the guest is gone: the next report starts a new one
          else { account.suspended = false; saveAccount(); changed(); }
          backoff = 0;
          schedule(500);
          return;
        }
      }
    } catch {}
    statusTimer = setTimeout(checkStatus, STATUS_EVERY);
  }

  /* ---------- progress and settings sync (signed-in players only) ---------- */
  const syncPayload = () => ({
    p_progress: { seen: played.seen, next: played.next },
    p_settings: { sound: settings.sound, volume: settings.volume, theme: settings.theme, skin: settings.skin, breakOn: settings.breakOn, breakEvery: settings.breakEvery, breakSecs: settings.breakSecs, off: settings.off },
    p_settings_at: settings.at,
    p_gen: played.gen,
  });
  function applyRemote(state) {
    if (state.progress_gen > played.gen) setPlayed({ ...state.progress, gen: state.progress_gen }); // support reset it
    else setPlayed({ ...mergeProgress(played, normalizeProgress(state.progress)), gen: state.progress_gen });
    store.set(KEYS.progress, played);
    if (new Date(state.settings_at) > new Date(settings.at) && state.settings && Object.keys(state.settings).length) {
      Object.assign(settings, state.settings, { at: state.settings_at });
      store.set(KEYS.settings, settings);
      applyTheme();
      Sound.refresh();
    }
    const blocked = state.account_status !== "active";
    if (blocked !== account.suspended) { account.suspended = blocked; saveAccount(); }
    changed();
  }
  /* ---------- membership (signed-in players only) ----------
     The server decides: the row is written only by the back office, and later by store receipts. The device
     keeps the expiry so membership features work offline. Someone who takes the app apart can change that copy;
     docs/security.md accepts it for features that run on the device alone. */
  function forgetMembership() { member = null; store.remove(KEYS.member); }
  async function readMembership() {
    if (!client || !user || user.is_anonymous) return;
    const { data, error } = await client.from("entitlements").select("expires_at").maybeSingle();
    if (error) return; // offline or the server is down: keep what the device knew
    lastMemberRead = Date.now();
    if (data && data.expires_at) { member = { uid: user.id, expires_at: data.expires_at }; store.set(KEYS.member, member); }
    else forgetMembership();
    changed();
  }
  function isMember() {
    return account.mode === "google" && !!member && Date.parse(member.expires_at) > Date.now();
  }

  /* The key that opens the arcade games, from a server that checks membership itself (docs/arcade-design.md).
     { key, expires_at }, or { problem }: "offline", "member" (not a member now), "old" (this build's key is no longer given) or "server". */
  async function arcadeKey(kid) {
    if (!online()) return { problem: "offline" };
    const c = await loadClient();
    if (!c || !user || user.is_anonymous) return { problem: "server" };
    try {
      const { data, error } = await c.functions.invoke("arcade-key", { body: { kid } });
      if (error) {
        const status = error.context && error.context.status;
        return { problem: status === 403 ? "member" : status === 410 ? "old" : "server" };
      }
      return data && typeof data.key === "string" ? { key: data.key, expires_at: data.expires_at } : { problem: "server" };
    } catch { return { problem: "server" }; }
  }

  /* True when nothing is left unsaved. */
  async function sync() {
    if (!user || user.is_anonymous || account.decision || account.syncedUid !== user.id) return true;
    if (syncing || !online()) return false;
    syncing = true;
    try {
      const { data, error } = await client.rpc("sync_user_state", syncPayload());
      if (error) throw error;
      applyRemote(data);
      lastSync = Date.now();
      if (Date.now() - lastMemberRead > MEMBER_EVERY) await readMembership().catch(() => {});
      return true;
    } catch {
      clearTimeout(syncTimer);
      syncTimer = setTimeout(sync, 60000);
      return false;
    } finally { syncing = false; }
  }
  function progressChanged() {
    if (!user || user.is_anonymous) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(sync, 20000);
  }

  /* After a Google sign-in, decide how this device's progress meets the account's. A choice that was
     not answered yet is saved, so closing the app cannot lose it or make it for the player. */
  async function resolveLogin() {
    if (resolving || !user || user.is_anonymous) return;
    if (account.syncedUid === user.id && !account.decision) return;
    resolving = true;
    try {
      const ticket = account.decision ? account.decision.ticket : null;
      const { data, error } = await client.from("user_state").select("progress,progress_gen").maybeSingle();
      if (error) return; // offline: stays undecided, asked again next time
      const remote = data ? normalizeProgress({ ...data.progress, gen: data.progress_gen }) : null;
      const remoteHas = remote && progressCount(remote) > 0;
      const localHas = progressCount(played) > 0;
      let choice = "merge";
      if (remoteHas && localHas && !coveredBy(played, remote)) {
        account.decision = { ticket };
        saveAccount();
        choice = ui.askMerge ? await ui.askMerge(!!ticket) : "merge";
      }
      if (ticket) {
        const done = await client.rpc(choice === "merge" ? "merge_guest" : "discard_guest", { p_ticket: ticket });
        // Unreachable: stays undecided, asked again next time. A stale ticket means the guest stays until it
        // expires by the retention rule, which the player must hear; progress still continues below.
        if (done.error && done.error.code !== "22023") return;
        if (done.error && ui.toast) ui.toast("ลบหรือย้ายสถิติเดิมไม่สำเร็จเพราะเวลาหมดแล้ว สถิตินั้นจะถูกลบอัตโนมัติเมื่อไม่มีการใช้งาน 12 เดือน");
      }
      if (choice === "account") {
        setPlayed(remote);
        store.set(KEYS.progress, played);
        if (ui.progressReplaced) ui.progressReplaced();
      }
      account.decision = null;
      account.syncedUid = user.id;
      saveAccount();
      // Signing in to an account that has never agreed to this version: this device's decision counts.
      const known = await client.from("consents").select("kind").eq("doc_version", LEGAL.version);
      if (!known.error) requeueDecisions(["terms", "analytics"].filter(k => !known.data.some(x => x.kind === k)));
      await flushConsents().catch(() => {});
      await pullConsent().catch(() => {});
      await sync();
      schedule(1000);
    } catch {} finally { resolving = false; changed(); }
  }

  /* ---------- sign-in ---------- */
  function readCallback() {
    const search = new URLSearchParams(location.search), hash = new URLSearchParams(location.hash.slice(1));
    const value = k => search.get(k) || hash.get(k);
    const error = value("error_code") || value("error") || (value("error_description") ? "unknown" : null);
    return { code: search.get("code"), error };
  }
  const cleanUrl = () => { try { history.replaceState(null, "", location.pathname); } catch {} };

  /* Sign-in leaves the app for a server page. If the server is down that page is a browser error
     with no way back, which in an installed app looks like the app itself died. Check first. */
  async function serverUp() {
    try {
      const r = await timedFetch(BACKEND.url + "/auth/v1/health", { headers: { apikey: BACKEND.key } });
      if (r.ok) lastFail = "";
      else failNote("health", { message: String(r.status) });
      return r.ok;
    } catch (e) { failNote("health", e); return false; }
  }
  async function startOAuth(kind, ticket) {
    const c = await loadClient();
    if (!c || !(await serverUp())) return withNote("ต่อเซิร์ฟเวอร์ไม่ได้ ลองใหม่อีกครั้ง ข้อมูลในเครื่องยังอยู่ครบ");
    account.oauth = { kind, ticket: ticket || null, at: Date.now() };
    saveAccount();
    const options = { provider: BACKEND.provider, options: { redirectTo: redirectTo(), skipBrowserRedirect: Native.on } };
    const { data, error } = kind === "link" ? await c.auth.linkIdentity(options) : await c.auth.signInWithOAuth(options);
    let failed = !!error;
    if (!failed && Native.on) {
      // A web address only: signing in goes to our server, linking straight to the provider's page.
      const url = data && data.url;
      failed = typeof url !== "string" || !/^https?:\/\//.test(url);
      if (!failed) failed = await Native.openBrowser(url).then(() => false, () => true);
    }
    if (failed) {
      account.oauth = null;
      saveAccount();
      return "เปิดหน้าเข้าสู่ระบบไม่ได้ ลองใหม่อีกครั้ง";
    }
    return null;
  }
  async function login() {
    if (!online()) return "ตอนนี้ออฟไลน์อยู่ ต่อเน็ตแล้วลองใหม่";
    const c = await loadClient();
    if (!c) return withNote("ต่อเซิร์ฟเวอร์ไม่ได้ ลองใหม่อีกครั้ง");
    return startOAuth(user && user.is_anonymous ? "link" : "signin");
  }
  /* The Google account already exists, so the guest cannot simply link to it. A ticket taken now, while
     still the guest, lets the signed-in account prove it may take over the guest's history. */
  async function continueToExisting() {
    let ticket = null;
    if (user && user.is_anonymous) {
      const { data, error } = await client.rpc("create_merge_ticket");
      if (error) return "ต่อเซิร์ฟเวอร์ไม่ได้ ลองใหม่อีกครั้ง";
      ticket = data;
    }
    return startOAuth("signin", ticket);
  }
  async function afterCallback(callback) {
    const pending = account.oauth;
    account.oauth = null;
    saveAccount();
    if (callback.error) {
      if (callback.error === "identity_already_exists" || callback.error === "user_already_exists") {
        if (ui.askExisting) ui.askExisting();
      } else if (ui.toast) {
        ui.toast(callback.error === "access_denied" ? "ยกเลิกการเข้าสู่ระบบแล้ว ข้อมูลในเครื่องยังอยู่ครบ" : "เข้าสู่ระบบไม่สำเร็จ ข้อมูลในเครื่องยังอยู่ครบ");
      }
      return;
    }
    if (user && !user.is_anonymous) {
      if (pending && pending.ticket) { account.decision = { ticket: pending.ticket }; saveAccount(); }
      if (ui.toast) ui.toast("เข้าสู่ระบบแล้ว");
      await resolveLogin();
    } else if (ui.toast) {
      // Most likely the page landed in a browser window other than the one that started sign-in.
      ui.toast("เข้าสู่ระบบในหน้าต่างนี้ไม่สำเร็จ กลับไปที่แอพแล้วลองใหม่ ข้อมูลในเครื่องยังอยู่ครบ");
    }
  }

  /* Signing out empties the device, so whatever is not on the server yet must get there first.
     False when it could not, and the player decides whether to go ahead anyway. */
  async function saveBeforeLogout() {
    if (!client || !user) return true;
    if (!online()) return false;
    clearTimeout(syncTimer);
    try {
      await flushConsents();
      for (let i = 0; syncing && i < 150; i++) await new Promise(done => setTimeout(done, 100));
      return await sync();
    } catch { return false; }
  }
  /* The next person on this phone starts as new. The caller reloads right after. */
  async function logout() {
    if (client) {
      try { await flush(); } catch {}
      try { client.auth.stopAutoRefresh(); } catch {}
      if (online()) { try { await client.auth.signOut({ scope: "local" }); } catch {} }
    }
    forgetMembership();
    wipeDevice();
  }
  /* Returns an error message, or null when the account is gone. */
  async function deleteAccount() {
    if (!online()) return "ตอนนี้ออฟไลน์อยู่ ต่อเน็ตแล้วลองใหม่";
    const c = await loadClient();
    if (!c || !user) return "ต่อเซิร์ฟเวอร์ไม่ได้ ลองใหม่อีกครั้ง";
    const { error } = await c.functions.invoke("delete-account", { method: "POST" });
    if (error) return "ลบบัญชีไม่สำเร็จ ลองใหม่อีกครั้ง ข้อมูลยังไม่ถูกลบ";
    forgetMembership();
    wipeDevice();
    return null;
  }

  /* The player's own statistics and data: { data } or { problem: "offline" | "server" | "member" }. */
  async function readMine(rpc, sendQueueFirst, args) {
    if (!online()) return { problem: "offline" };
    const c = await loadClient();
    if (!c || !user || user.is_anonymous) return { problem: "server" };
    if (sendQueueFirst && statsOn() && queue.length) { try { await flush(); } catch {} }
    try {
      const { data, error } = await c.rpc(rpc, args);
      if (error) return { problem: error.code === "42501" ? "member" : "server" };
      return { data };
    } catch { return { problem: "server" }; }
  }

  /* Called whenever a consent decision changes. */
  async function consentChanged() {
    if (!on) return;
    if (statsOn()) { backoff = 0; schedule(200); checkStatus(); return; }
    clearQueue();
    await sendDecisions();
  }

  /* ---------- the wrapped app's way back from sign-in ----------
     The system browser hands the answer to the app as com.einzsoft.pingpong://auth-callback?code=... The app then
     reloads itself with that answer in its own address, so the page that takes the session is a fresh one, exactly
     as on the web: the same code exchange (PKCE, the verifier never left this app), the same error handling, and
     no Cloudflare script left on a page that holds an account. A link that arrives while no sign-in was started
     here is ignored, because any app on the phone can open this scheme; without the verifier its code is useless. */
  function nativeReturn(url) {
    const params = Native.callbackParams(url);
    if (!params || !account.oauth || returning) return false;
    returning = true;
    Native.closeBrowser();
    location.replace(location.pathname + "?" + params.toString());
    return true;
  }
  if (on && Native.on) {
    Native.listen("App", "appUrlOpen", e => { nativeReturn(e.url); });
    // The player closed the browser without finishing. A moment's grace: the deep link can land just after this.
    Native.listen("Browser", "browserFinished", () => setTimeout(() => {
      if (returning || !account.oauth) return;
      account.oauth = null;
      saveAccount();
      if (ui.toast) ui.toast("ยังเข้าสู่ระบบไม่สำเร็จ ข้อมูลในเครื่องยังอยู่ครบ");
      changed();
    }, 1500));
  }

  async function boot(callbacks) {
    ui = callbacks;
    if (!on) return;
    const callback = readCallback();
    // Opened by the sign-in link itself, e.g. the phone closed the app while the browser was up.
    if (Native.on && !callback.code && !callback.error && account.oauth && nativeReturn(await Native.launchUrl())) return;
    const isCallback = !!(callback.code || callback.error);
    if (callback.error) cleanUrl();
    // Decide from local state only; loading the library is itself the first network-capable step.
    const needed = isCallback || account.mode === "google" || statsOn() || (account.mode === "guest" && consent.unsent.length);
    if (needed) {
      await loadClient();
      if (callback.code) cleanUrl();
    }
    if (isCallback) await afterCallback(callback);
    else if (account.oauth) {
      account.oauth = null; saveAccount(); // came back without finishing sign-in
      if (ui.toast) ui.toast("ยังเข้าสู่ระบบไม่สำเร็จ ข้อมูลในเครื่องยังอยู่ครบ");
    }
    if (client && user && !user.is_anonymous) { await resolveLogin(); await sendDecisions(); await pullConsent().catch(() => {}); await sync(); }
    if (client && user && user.is_anonymous && !statsOn() && !account.oauth) {
      await sendDecisions();
      try { client.auth.stopAutoRefresh(); } catch {}
    }
    if (statsOn()) { if (account.suspended) checkStatus(); else schedule(500); }
    changed();
  }

  if (on) {
    window.addEventListener("online", () => {
      backoff = 0; decisionDelay = 0;
      if (statsOn()) { schedule(500); checkStatus(); } else sendDecisions();
      sync();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) { if (statsOn() && queue.length && !backoff) flush(); if (user && !user.is_anonymous) sync(); }
      else {
        // A fresh page drops the script. Only when that costs the player nothing; otherwise next time.
        if (scriptWithSession && ui.nothingInHand && ui.nothingInHand()) { location.reload(); return; }
        if (user && !user.is_anonymous && Date.now() - lastSync > 300000) sync();
        // Phones freeze timers in the background, so the hourly check also runs on coming back.
        if (account.suspended && Date.now() - lastStatusCheck > STATUS_EVERY) checkStatus();
      }
    });
  }

  return {
    enabled: on, boot, record, isMember, progressChanged, login, saveBeforeLogout, logout, deleteAccount, consentChanged, continueToExisting,
    myStats: () => readMine("my_stats", true), myData: () => readMine("my_data_export", true),
    myStatsDetail: () => readMine("my_stats_detail", true),
    myMembership: () => readMine("my_membership", false),
    arcadeKey,
    myStreaks: groups => readMine("my_streaks", true, { p_groups: groups }),
    status: () => ({ enabled: on, mode: account.mode, email: account.email, suspended: account.suspended, online: online(), loginPending: !!account.decision,
      memberUntil: isMember() ? member.expires_at : null }),
  };
})();

/* The one question every membership feature asks. True while the signed-in account's membership has not run out,
   online or not. Guests, signed-out players and builds without a server are never members. */
function isMember() { return Net.isMember(); }

/* ---------- rest cards: how long someone has really been looking at the feed ----------
   Everything here stays on the device. Timers stop in the background, so time away is simply the gap
   between two readings of the clock. Rest cards are not a category: nobody picks them, and they are
   not in content/categories.json or in anyone's progress. */
const REST_AWAY = 300000; // away for longer than this: the count starts over and an open rest counts as taken
const REST_LONGEST_TICK = 5000; // a longer gap was a short trip away, which does not count as playing
const RestClock = (() => {
  const state = { played: 0, last: 0, open: null, after: null, ...store.get(KEYS.rest, {}) };
  let savedAt = 0;
  const on = () => settings.breakOn !== false;
  const everyMs = () => ([20, 30, 45].includes(settings.breakEvery) ? settings.breakEvery : 30) * 60000;
  const restMs = () => ([20, 30].includes(settings.breakSecs) ? settings.breakSecs : 30) * 1000;
  function save(now) { savedAt = now; store.set(KEYS.rest, state); }
  function read(now, watching) {
    const gap = now - state.last;
    state.last = now;
    if (gap >= REST_AWAY) { state.played = 0; state.open = null; }
    else if (gap > 0 && gap <= REST_LONGEST_TICK && watching) {
      if (state.open) state.open.left -= gap;
      else if (on()) state.played += gap;
    }
    if (state.open || now - savedAt >= REST_LONGEST_TICK) save(now);
    return gap >= REST_AWAY;
  }
  read(Date.now(), false); // the app was closed: only the time away matters
  return {
    read,
    open: () => state.open,
    due: () => on() && !state.open && state.played >= everyMs(),
    begin(id, rev) { state.open = { id, rev, left: restMs(), total: restMs() }; save(Date.now()); },
    finish() {
      const { id, rev, total } = state.open;
      state.open = null; state.played = 0; state.after = { id, rev, ms: total };
      save(Date.now());
    },
    cancel() { state.open = null; state.played = 0; save(Date.now()); },
    /* Statistics of a finished rest: one row, once it is known what the player did next. */
    settle(continued) {
      if (!state.after) return;
      const { id, rev, ms } = state.after;
      state.after = null;
      save(Date.now());
      Net.record("break", "break", id, rev, { ms, completed: true, continued });
    },
    away() { const now = Date.now(); state.last = now; this.settle(false); save(now); },
  };
})();

/* ---------- which kind of card comes next: random, but spread evenly ----------
   A pure function plus a small state object; nothing here reads the page, settings or the clock, so a test can
   run it for thousands of cards with its own random numbers.

   Smooth weighted round-robin with luck in it. Every step each kind earns credit equal to its weight, and the
   kind that is picked pays back the total of all the weights. So over time each kind is picked in proportion
   to its weight, and a kind that has waited a long time has earned a lot of credit. Who is picked among the
   kinds with credit is random, with a chance that grows with the square of the credit (the one waiting longest
   is by far the likeliest, but the order is not the same every time). On top of that:
   - the kind just dealt never comes again straight away, unless it is the only one on (the file's max_run
     can only be 1 or more, so this always keeps it);
   - a kind whose credit passed twice the total weight is picked next, whatever the dice say, so no kind with
     weight above 0 can stay away for long;
   - a kind with weight 0 (or left out of `weights`) is never picked, and forgets its credit.
   state = { credit: {}, last: null }; start with mixState(). */
const mixState = () => ({ credit: {}, last: null });

function mixPick(state, weights, rand = Math.random) {
  const kinds = Object.keys(weights).filter(k => weights[k] > 0);
  for (const k of Object.keys(state.credit)) if (!kinds.includes(k)) delete state.credit[k];
  if (!kinds.length) return null;
  const total = kinds.reduce((sum, k) => sum + weights[k], 0);
  for (const k of kinds) {
    // A kind new to the mix starts anywhere in one round of credit, so the first cards differ from session to session.
    if (!(k in state.credit)) state.credit[k] = rand() * total;
    state.credit[k] = Math.min(state.credit[k] + weights[k], 3 * total);
  }
  const options = kinds.length > 1 ? kinds.filter(k => k !== state.last) : kinds;
  const richest = options.reduce((a, b) => (state.credit[b] > state.credit[a] ? b : a));
  let pick = richest;
  if (state.credit[richest] < 2 * total) {
    const chance = options.map(k => Math.max(state.credit[k], 0) ** 2);
    let r = rand() * chance.reduce((sum, c) => sum + c, 0);
    pick = options.find((k, i) => (r -= chance[i]) < 0) || richest;
  }
  state.credit[pick] -= total;
  state.last = pick;
  return pick;
}

/* ---------- sharing a card by link, and opening one from a link (docs/share-design.md) ----------
   Pure functions, so tests/share_check.mjs can run them on their own. A link carries one thing: the id the card already has in
   the statistics (q-0123, pipe-easy-0017), in the address as ?c=. Nothing about the sender goes in it, and nothing is sent anywhere
   when it is made: the phone's own share sheet hands it to the other app. */
const SHARE_PARAM = "c";
/* Put the sender's time for a puzzle in the message too. Off: nothing is said about the sender's result (the owner may turn it on later;
   it is only text the player sends on, so it needs no change to app/legal.md). */
const SHARE_WITH_TIME = false;
const SHARE_PREFIX = { pipes: "pipe", flow: "flow", wordsearch: "word", make_24: "m24", water_sort: "water", parking: "park", ice_slide: "ice", tilt: "tilt" };
const SHARE_TIERS = ["easy", "medium", "hard"];

/* What an id from a link means: { kind: "quiz", id } or { kind, tier, index } (index counts from 0), or null for anything else. */
function shareParse(text) {
  if (typeof text !== "string" || text.length > 32) return null;
  let m = /^q-(\d{4,6})$/.exec(text);
  if (m) return Number(m[1]) > 0 ? { kind: "quiz", id: Number(m[1]) } : null;
  m = /^([a-z0-9]+)-(easy|medium|hard)-(\d{4,5})$/.exec(text);
  if (!m) return null;
  const kind = Object.keys(SHARE_PREFIX).find(k => SHARE_PREFIX[k] === m[1]);
  return kind && Number(m[3]) > 0 ? { kind, tier: m[2], index: Number(m[3]) - 1 } : null;
}
/* The card a page's own address asks for (its query string), or null. */
function shareFromSearch(search) {
  try { return shareParse(new URLSearchParams(search).get(SHARE_PARAM)); } catch { return null; }
}
/* The card a link the phone opened asks for: only a link on the app's own address counts, any app can open the app with any link. */
function shareFromLink(url, base) {
  try {
    const link = new URL(url), own = new URL(base);
    return link.protocol === "https:" && link.hostname === own.hostname && !link.username && !link.password ? shareFromSearch(link.search) : null;
  } catch { return null; }
}
const shareLink = (base, id) => `${base}?${SHARE_PARAM}=${id}`;
/* The words that go with the link. seconds is only used when SHARE_WITH_TIME is on. */
function shareText(kind, seconds) {
  if (kind === "quiz") return "ข้อนี้ตอบถูกไหม ลองเล่นดูที่ปิ๊งป่อง";
  if (SHARE_WITH_TIME && Number.isFinite(seconds) && seconds > 0) return `ผมผ่านด่านนี้ใน ${Math.round(seconds)} วินาที ลองดูไหม ที่ปิ๊งป่อง`;
  return "ด่านนี้ผ่านได้ไหม ลองเล่นดูที่ปิ๊งป่อง";
}
const SHARE_INVITE = "ปิ๊งป่อง ควิซและปริศนาฝึกสมอง เล่นเพลินแทนการไถโซเชียล";

const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffled = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pad = n => String(n).padStart(4, "0");
const hint = '<div class="hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m6 14 6-6 6 6"/></svg>เลื่อนขึ้นเพื่อไปต่อ</div>';
const winBox = (text, note) => {
  const lines = [].concat(note || []).filter(Boolean).join(" · ");
  return `<div class="result"><div class="verdict-row">${face("happy")}<div class="verdict ok">${esc(text)}</div></div>${lines ? `<p class="muted small">${esc(lines)}</p>` : ""}</div>`;
};

/* ---------- data, fetched only when a card type first needs it ---------- */
const loaded = new Map();
function fetchData(file) {
  if (!loaded.has(file)) {
    loaded.set(file, fetch(file).then(r => { if (!r.ok) throw new Error(file); return r.json(); })
      .catch(e => { loaded.delete(file); throw e; }));
  }
  return loaded.get(file);
}

/* Categories the player switched off. Never all of them: whatever else has happened to the list (another device,
   a category retired since), a feed with nothing in it is not something a setting can cause. */
const ALL_CATEGORIES = CONFIG.groups.flatMap(g => g.cats);
function offCategories() {
  const off = new Set((Array.isArray(settings.off) ? settings.off : []).filter(c => ALL_CATEGORIES.includes(c)));
  return off.size >= ALL_CATEGORIES.length ? new Set() : off;
}

/* ---------- what a player may customise: the one switch ----------
   Choosing a tier and tuning the feed weights belong to members. Everyone else gets the ladder and the weights of
   content/feed.json. What a non-member saved earlier (settings.tier, settings.weights) stays on the device but is not
   read, and comes back if they become members. All content and every tier stay free: members only get to choose. */
function canCustomize() { return isMember(); }

/* ---------- feed weights: the one place that reads them ----------
   From content/feed.json (CONFIG.feed). kinds weighs card kinds against each other, categories weighs quiz
   categories against each other. Anything not written there weighs 1, and 0 means never. maxRun is the
   most cards of one kind in a row (the feed now never deals one kind twice running, which keeps any maxRun). A player may turn each kind down or up (settings.weights, on this device only):
   the step is a multiplier on the file's number. It is never allowed to leave the feed with nothing to show. */
const WEIGHT_STEPS = [["off", 0, "ปิด"], ["low", 0.4, "น้อย"], ["normal", 1, "ปกติ"], ["high", 2.5, "มาก"]];
const stepOf = kind => {
  const v = canCustomize() && settings.weights && settings.weights[kind];
  return WEIGHT_STEPS.some(s => s[0] === v) ? v : "normal";
};
const weightIn = (table, key) => { const w = table && table[key]; return typeof w === "number" && isFinite(w) && w >= 0 ? w : 1; };
function feedWeights() {
  const base = CONFIG.feed || {};
  const build = mult => ({
    kind: k => weightIn(base.kinds, k) * mult(k),
    category: c => weightIn(base.categories, c),
    maxRun: Math.max(1, base.maxRun | 0 || 2),
  });
  const mine = build(k => WEIGHT_STEPS.find(s => s[0] === stepOf(k))[1]);
  const off = offCategories();
  return KINDS.some(k => kindIsOn(k, off, mine)) ? mine : build(() => 1);
}
/* One item, each with a chance in proportion to its weight. Items that weigh 0 never come. */
function pickWeighted(items, weight) {
  let total = 0;
  for (const it of items) total += weight(it);
  let r = Math.random() * total;
  for (const it of items) { r -= weight(it); if (r < 0 && weight(it) > 0) return it; }
  return items.filter(it => weight(it) > 0).pop();
}

/* Quiz pools are split into shards. Serve unseen questions shard by shard; start over when all were seen.
   Inside the shard on hand each question's chance follows the weight of its category, so with every weight 1
   this is the same even draw as before. A question still never comes twice before the whole pool was seen:
   a heavier category comes up sooner and more often while it lasts, it does not get questions of its own. */
const pools = {};
function poolOf(kind) { return pools[kind] || (pools[kind] = { order: shuffled(CONFIG[kind]), at: 0, queue: [], taken: new Set(), catOf: new Map() }); }
async function nextQuiz(kind) {
  const p = poolOf(kind);
  for (let round = 0; round < 2; round++) {
    const seen = new Set(played.seen[kind].ids);
    while (true) {
      const off = offCategories(), w = feedWeights();
      p.queue = p.queue.filter(item => !seen.has(item[0]) && !p.taken.has(item[0]));
      const open = p.queue.filter(item => !off.has(item[1]) && w.category(item[1]) > 0);
      if (open.length) {
        const item = pickWeighted(open, it => w.category(it[1]));
        p.queue.splice(p.queue.indexOf(item), 1);
        p.taken.add(item[0]);
        return item;
      }
      if (p.at >= p.order.length) break;
      const file = p.order[p.at++];
      p.queue = shuffled(await fetchData(file));
      for (const q of p.queue) { p.catOf.set(q[0], q[1]) }
    }
    // Starting over covers what the player has on. What they played in a category that is off stays played.
    played.seen[kind] = { e: played.seen[kind].e + 1, ids: played.seen[kind].ids.filter(id => offCategories().has(p.catOf.get(id))) }; savePlayed();
    p.order = shuffled(CONFIG[kind]); p.at = 0; p.taken.clear();
  }
  throw new Error("empty pool " + kind);
}

/* ---------- difficulty: which tier the next level of a game comes from ----------
   Free players get a ladder that follows how they play, per game, kept on this device only (KEYS.ladder):
   t = tier now (0 easy, 1 medium, 2 hard), s = score in that tier, n = levels dealt above easy.
   - Everyone starts on easy.
   - A finished level adds points: 2 if it was fluent (within the par time of its game and tier), else 1.
     Leaving a level after trying it takes 2 away, moving past it untouched takes 1 away.
   - At 6 points the game moves one tier up, at -4 one tier down; either way the score starts again at 0.
     So three fluent wins move up, and two levels given up after trying move down. Never two tiers at once.
   - On easy nothing takes points away, so a player who keeps winning always moves on. On hard the score
     stops at 6.
   - Above easy, every 5th level is an easy one for a breather. It does not count either way.
   - Only levels from the tier the game is on now count: one dealt before the last move does not.
   Everything comes from what the app already knows: finished or not, tried or not, and the time on screen. */
const LADDER = {
  par: { pipes: [40, 70, 110], flow: [35, 60, 90], wordsearch: [50, 75, 100], make_24: [45, 75, 120], water_sort: [40, 80, 130], parking: [35, 75, 120], ice_slide: [30, 60, 120], tilt: [40, 80, 140] }, // seconds, easy / medium / hard
  points: { fluent: 2, win: 1, skip: -1, quit: -2 },
  up: 6, down: -4, breather: 5,
};
const Ladder = (() => {
  const all = store.get(KEYS.ladder, {}) || {};
  const save = () => store.set(KEYS.ladder, all);
  function state(game) {
    const st = all[game];
    if (st && [0, 1, 2].includes(st.t) && Number.isInteger(st.s) && Number.isInteger(st.n)) return st;
    return (all[game] = { t: 0, s: 0, n: 0 });
  }
  /* The tier of the next level dealt, and whether its result counts. */
  function next(game) {
    const st = state(game);
    if (st.t > 0) {
      st.n++; save();
      if (st.n % LADDER.breather === 0) return { tier: TIERS[0], rated: false };
    }
    return { tier: TIERS[st.t], rated: true };
  }
  /* outcome: "win", "quit" (left after trying) or "skip" (left untouched). */
  function rate(card, outcome) {
    if (!card.tier || !card.rated || card.st.rated) return;
    card.st.rated = true;
    const st = state(card.kind);
    if (TIERS[st.t] !== card.tier) return;
    const fluent = outcome === "win" && cardMs(card) <= LADDER.par[card.kind][st.t] * 1000;
    const points = LADDER.points[fluent ? "fluent" : outcome];
    st.s = Math.min(LADDER.up, Math.max(LADDER.down, st.s + (st.t === 0 ? Math.max(0, points) : points)));
    if (st.s >= LADDER.up && st.t < TIERS.length - 1) Object.assign(st, { t: st.t + 1, s: 0, n: 0 });
    else if (st.s <= LADDER.down && st.t > 0) Object.assign(st, { t: st.t - 1, s: 0, n: 0 });
    save();
  }
  function reset() { for (const game of Object.keys(all)) delete all[game]; store.remove(KEYS.ladder); }
  return { next, rate, reset, state: game => ({ ...state(game) }) };
})();
/* ---------- a card opened from a shared link (docs/share-design.md) ----------
   The link asks for one card by its id; it is dealt as the first card, whatever the player switched off, and it is not rated
   for the difficulty ladder. A card that is not in this build (an old link, a made-up id) is simply not there: the feed starts as usual. */
let sharedAsk = shareFromSearch(location.search); // read once; start() takes the question out of the address
async function sharedCard(ask) {
  try {
    if (ask.kind === "quiz") {
      const at = (await fetchData(CONFIG.quizIndex)).findIndex(ids => ids.includes(ask.id));
      if (at < 0) return null;
      const item = (await fetchData(CONFIG.quiz[at])).find(q => q[0] === ask.id);
      if (!item) return null;
      poolOf("quiz").taken.add(item[0]); // the feed will not deal it again
      return { kind: "quiz", st: {}, item, shared: true };
    }
    const files = CONFIG[ask.kind];
    if (!files || !files[ask.tier]) return null;
    const levels = await fetchData(files[ask.tier]);
    if (ask.index >= levels.length) return null;
    (dealt[ask.kind + "_" + ask.tier] || (dealt[ask.kind + "_" + ask.tier] = new Set())).add(ask.index);
    return { kind: ask.kind, st: {}, shared: true, tier: ask.tier, rated: false, abs: ask.index, index: ask.index, level: levels[ask.index], total: levels.length };
  } catch { return null; }
}
/* The tier the player pinned for every game ("easy", "medium", "hard"), or null to let the ladder decide. */
const pinnedTier = () => (canCustomize() && TIERS.includes(settings.tier) ? settings.tier : null);
/* The one place that picks a tier. A pinned tier is not rated: the ladder only follows free climbing. */
function chooseTier(game) {
  const own = pinnedTier();
  const pick = own ? { tier: own, rated: false } : Ladder.next(game);
  if (!CONFIG[game][pick.tier]) pick.tier = TIERS.find(t => CONFIG[game][t]); // a tier with no levels yet
  return pick;
}

/* Levels of a tier come in random order, never one already played. A level counts as played when it is below
   the old in-order count next.<game>_<tier> (up to v0.3, and only in epoch 0) or its index is in
   seen.<game>_<tier>.ids. That is the same kind of progress as before and it merges the same way between devices.
   When the whole tier was played the epoch goes up and it starts over. `dealt` is what the feed holds but has not
   marked played yet, so two cards in the feed are not the same level. */
const dealt = {};
function playedIn(key) {
  const s = played.seen[key] || { e: 0, ids: [] };
  const done = new Set(s.ids);
  if (!s.e) for (let i = 0; i < (played.next[key] || 0); i++) done.add(i);
  return done;
}
const tierKey = card => card.kind + "_" + card.tier;
async function nextLevel(kind) {
  const { tier, rated } = chooseTier(kind);
  const levels = await fetchData(CONFIG[kind][tier]);
  const key = kind + "_" + tier, held = dealt[key] || (dealt[key] = new Set());
  let done = playedIn(key);
  if (done.size >= levels.length) { // played them all: start over
    played.seen[key] = { e: ((played.seen[key] || {}).e || 0) + 1, ids: [] }; savePlayed();
    held.clear(); done = new Set();
  }
  let open = levels.map((_, i) => i).filter(i => !done.has(i) && !held.has(i));
  if (!open.length) open = levels.map((_, i) => i).filter(i => !done.has(i)); // all left are in the feed already
  const index = open[Math.floor(Math.random() * open.length)];
  held.add(index);
  return { tier, rated, abs: index, index, level: levels[index], total: levels.length };
}

const KINDS = ["quiz", "pipes", "flow", "wordsearch", "make_24", "water_sort", "parking", "ice_slide", "tilt"].filter(k => CONFIG[k] && Object.keys(CONFIG[k]).length);
const broken = new Set();
const QUIZ_CATEGORIES = (CONFIG.groups.find(g => g.id === "question") || { cats: [] }).cats;
function kindIsOn(kind, off, w = feedWeights()) {
  if (!(w.kind(kind) > 0)) return false;
  return kind === "quiz" ? QUIZ_CATEGORIES.some(c => !off.has(c) && w.category(c) > 0) : !off.has(kind);
}
/* The kind of the next card: spread evenly by weight, never the same kind twice in a row (see app/feedmix.js). */
const mix = mixState();
function pickKind(kinds, w) {
  return mixPick(mix, Object.fromEntries(kinds.map(k => [k, w.kind(k)])));
}
async function newCard() {
  while (true) {
    const off = offCategories(), w = feedWeights();
    const kinds = KINDS.filter(k => !broken.has(k) && kindIsOn(k, off, w));
    if (!kinds.length) return null;
    const kind = pickKind(kinds, w);
    try {
      const card = { kind, st: {} };
      if (kind === "quiz") card.item = await nextQuiz(kind);
      else Object.assign(card, await nextLevel(kind));
      return card;
    } catch { broken.add(kind); }
  }
}

const cardCategory = card => (card.kind === "quiz" ? card.item[1] : card.kind);
/* A card that will not be shown after all goes back to wait for its turn. */
function putBack(card) {
  if (card.kind === "quiz") pools.quiz.taken.delete(card.item[0]);
  else if (dealt[tierKey(card)]) dealt[tierKey(card)].delete(card.index);
}

function markPlayed(card) {
  if (card.marked || card.kind === "break") return;
  card.marked = true;
  if (card.kind === "quiz") played.seen[card.kind].ids.push(card.item[0]);
  else {
    const key = tierKey(card), s = played.seen[key] || (played.seen[key] = { e: 0, ids: [] });
    if (!s.ids.includes(card.index)) s.ids.push(card.index);
    if (dealt[key]) dealt[key].delete(card.index);
  }
  savePlayed();
}

/* ---------- statistics for one card: Net drops all of it unless the player said yes ---------- */
const ID_PREFIX = SHARE_PREFIX; // the ids of a shared link are the ones the statistics use (share.js)
function cardRef(card) {
  if (card.kind === "quiz") return ["q-" + pad(card.item[0]), card.item[5]];
  return [ID_PREFIX[card.kind] + "-" + card.tier + "-" + pad(card.index + 1), shortHash(JSON.stringify(card.level))];
}
function cardMs(card) { return Math.min(3600000, Math.round(performance.now() - (card.st.t0 || performance.now()))); }
function logCard(card, type, payload) {
  if (card.st.logged) return;
  card.st.logged = true;
  const [id, rev] = cardRef(card);
  Net.record(type, card.kind, id, rev, { ms: cardMs(card), ...payload });
}
/* The player moved past this card without an answer or a finished level. */
function logLeft(card) {
  if (card.st.logged || card.kind === "break") return;
  const moves = card.st.moves || 0;
  Ladder.rate(card, moves ? "quit" : "skip");
  if (moves) logCard(card, "abandon", { moves, completed: false, ...(card.st.found ? { found: card.st.found.length } : {}) });
  else logCard(card, "skip", {});
}

/* ---------- the player's best result per level, on this device only (KEYS.best) ----------
   Fewest moves wins. Nothing here is sent or synced: it is only a number to beat on a level already won. */
const Best = (() => {
  const all = store.get(KEYS.best, {}) || {};
  /* Records a win. beat: under the best before. first: no result before. */
  function record(card, score) {
    const id = cardRef(card)[0], old = Object.prototype.hasOwnProperty.call(all, id) ? all[id] : null;
    const first = old === null, beat = !first && score < old;
    if (first || beat) { all[id] = score; store.set(KEYS.best, all); }
    return { score, best: first || beat ? score : old, before: old, first, beat };
  }
  function reset() { for (const id of Object.keys(all)) delete all[id]; store.remove(KEYS.best); }
  return { record, reset };
})();

/* A finished puzzle level: statistics, the ladder, then progress. All three count the first win only
   (logCard, Ladder.rate and markPlayed each guard themselves), so playing the level again changes none of them.
   score is what counts as the result, moves by default; null means this game has no result to beat. */
function wonLevel(card, payload, score = payload.moves) {
  logCard(card, "complete", { ...payload, completed: true });
  Ladder.rate(card, "win");
  markPlayed(card);
  card.st.result = Number.isFinite(score) ? Best.record(card, score) : null;
}
/* The line under a win that says how this go compared with the best one. */
function bestLine(card) {
  const r = card.st.result;
  if (!r || r.first) return "";
  return r.beat ? `ดีกว่าเดิมแล้ว! ${r.score} ครั้ง (เดิม ${r.before})` : `ดีที่สุดของคุณคือ ${r.best} ครั้ง`;
}
/* After a win the start-over button offers the same level again. */
function wireReplay(s, st) {
  const b = $(".reset", s), text = [...b.childNodes].find(n => n.nodeType === 3);
  const label = st.won ? "เล่นด่านนี้อีกครั้ง" : "เริ่มใหม่";
  if (text) text.textContent = label; else b.append(label);
}
/* Back to the start. After a win the counters of that go start over too; the win itself was counted already. */
function startOver(st) {
  if (st.won) { st.moves = 0; st.result = null; }
  st.won = false;
}

/* Names come from content/categories.json. A category marked badge shows its name as a pill instead. */
const label = id => (CONFIG.labels[id] && CONFIG.labels[id].name) || id;
/* The tag above a puzzle: game, level number in its tier, then the tier, quietly. */
const TIER_NAMES = { easy: "ง่าย", medium: "ปานกลาง", hard: "ยาก" };
const levelTag = (card, n) => `<div class="tag"><span class="dot"></span><span>${esc(label(card.kind))} · ด่าน ${pad(card.index + 1)} · <span class="tier" data-tier="${card.tier}">${TIER_NAMES[card.tier]}</span>${n ? ` ${n}×${n}` : ""}</span></div>`;

/* How to play, behind a small ? beside the title: two or three short steps and a note, never in the way. */
const HOWTO = {
  pipes: { steps: ["แตะท่อเพื่อหมุนทีละหนึ่งในสี่รอบ", "ต่อท่อทุกช่องให้ถึงกัน ไม่ให้มีปลายเปิดค้าง", "ท่อที่ต่อถึงจุดกลางจะเป็นสีเหลือง"] },
  flow: { steps: ["ลากนิ้วจากจุดหนึ่งไปหาจุดเลขเดียวกัน", "เส้นห้ามตัดกัน และต้องเต็มทุกช่อง"], note: "ลากจากจุดเดิมอีกครั้งเพื่อวาดเส้นนั้นใหม่" },
  wordsearch: { steps: ["ใต้ตารางบอกแค่หมวดและจำนวนคำ ลองหาเองจากตัวอักษรในตาราง", "คำอยู่แนวซ้ายไปขวา หรือบนลงล่างเท่านั้น ไม่มีแนวทแยง", "ลากนิ้วจากตัวแรกถึงตัวสุดท้ายของคำ ลากกลับด้านก็ได้ ตัวอักษรที่ลากอยู่จะขึ้นเหนือตาราง"], note: "ถ้าไม่ไหว กดปุ่ม \"ดูคำที่ต้องหา\" เพื่อเปิดรายการคำ คำที่เจอแล้วจะเป็นสีเหลือง" },
  make_24: { steps: ["แตะเลข แล้วแตะเครื่องหมาย + − × ÷ อันไหนก็ได้", "แตะเลขอีกตัว ผลจะมาแทนที่เลขตัวนั้น", "ทำจนเหลือเลขเดียว ให้ได้ 24"], note: "ต้องใช้เลขทั้งสี่ตัว ตัวละครั้ง ส่วนเครื่องหมายใช้ซ้ำหรือไม่ใช้ก็ได้ แตะเลขเดิมซ้ำเพื่อยกเลิก ผลเป็นเศษส่วนได้ แต่หารด้วยศูนย์ไม่ได้" },
  water_sort: { steps: ["แตะขวดที่จะเท ขวดจะยกขึ้น", "แตะขวดที่จะรับ น้ำสีบนสุดไหลไปทั้งก้อนเท่าที่ขวดรับได้", "เทลงขวดว่าง หรือขวดที่สีบนสุดเหมือนกันเท่านั้น"], note: "แตะขวดเดิมซ้ำเพื่อยกเลิก แต่ละสีมีรูปประจำสี ช่วยให้แยกสีง่ายขึ้น" },
  parking: { steps: ["แตะแท่งที่จะขยับ แล้วกดลูกศร กดหนึ่งครั้งเลื่อนหนึ่งช่อง", "แท่งแนวนอนเลื่อนได้แค่ซ้ายขวา แท่งแนวตั้งเลื่อนได้แค่ขึ้นลง และเลื่อนทับแท่งอื่นไม่ได้", "เปิดทางให้แท่งสีเหลืองเลื่อนออกทางขวา"], note: "ลูกศรสองหัวบนแท่งบอกแนวที่เลื่อนได้ เมื่อทางออกโล่ง กดขวาครั้งเดียว แท่งสีเหลืองเลื่อนออกไปสุดทาง เลื่อนแท่งเดิมไปทางเดิมต่อกันนับเป็นครั้งเดียว ลูกศรที่จางคือไปทางนั้นไม่ได้" },
  ice_slide: { steps: ["กดลูกศร น้องป่องจะไถลไปทางนั้นจนชนหินหรือขอบ", "หยุดกลางทางเองไม่ได้ ใช้หินช่วยให้หยุดตรงที่ต้องการ", "ต้องหยุดบนธงพอดีจึงผ่านด่าน ไถลผ่านธงไม่นับ"], note: "กดหนึ่งครั้งนับหนึ่งครั้ง ลูกศรที่จางคือไปทางนั้นแล้วไม่ขยับ" },
  tilt: { steps: ["กดลูกศรเพื่อเอียงกล่อง ลูกทุกลูกกลิ้งไปทางนั้นพร้อมกันจนชนกำแพงหรือลูกอื่น", "ลูกที่กลิ้งถึงหลุมสีเดียวกันจะตกลงหลุม หลุมที่มีลูกแล้วกลิ้งผ่านได้", "ถ้าเอียงแล้วจะมีลูกตกหลุมผิดสี กล่องจะไม่ขยับ"], note: "ให้ลูกลงหลุมครบทุกลูก แต่ละสีมีรูปประจำสี ช่วยให้แยกสีง่ายขึ้น ลูกศรที่จางคือเอียงทางนั้นแล้วไม่มีลูกขยับ" },
};
/* The title row of a game card with its ? button. title is trusted markup; sub is text. */
function gameHead(card, title, sub) {
  return `<div class="game-head"><div><h2 class="title">${title}</h2><p class="sub">${esc(sub)}</p></div>
      <button class="help" type="button" data-kind="${card.kind}" aria-haspopup="dialog" aria-expanded="false" aria-label="วิธีเล่น"><span aria-hidden="true">?</span></button></div>`;
}
function wireHelp(s) {
  const help = $(".help", s);
  help.onclick = () => openHowto(help.dataset.kind, help);
}
/* How to play opens as a sheet over the card, so the card and its board never change size. It closes with its
   button, a tap outside, Esc, or Android's back (native.js presses the [data-back] of the top layer). */
function openHowto(kind, button) {
  const how = HOWTO[kind], demo = DEMOS[kind]();
  const el = showLayer("sheet howto-sheet", `<div class="sheet-box howto-box">
    <div class="howto-head"><h2 id="howto-title">วิธีเล่น${esc(label(kind))}</h2><button type="button" class="btn-back" data-back aria-label="ปิดวิธีเล่น">ปิด</button></div>
    <div class="demo" aria-hidden="true"><div class="demo-loop">${demo.svg("loop")}</div><div class="demo-still">${demo.svg("a")}<span class="demo-arrow">→</span>${demo.svg("b")}</div></div>
    <p class="demo-cap">ตัวอย่าง: ${esc(demo.cap)}</p>
    <ol>${how.steps.map(t => `<li>${esc(t)}</li>`).join("")}</ol>${how.note ? `<p class="howto-note">${esc(how.note)}</p>` : ""}</div>`);
  el.setAttribute("aria-labelledby", "howto-title");
  button.setAttribute("aria-expanded", "true");
  Sound.play("tap");
  const onKey = e => { if (e.key === "Escape") { e.preventDefault(); close(); } };
  function close() {
    document.removeEventListener("keydown", onKey);
    closeLayer(el);
    button.setAttribute("aria-expanded", "false");
    if (button.isConnected) button.focus({ preventScroll: true });
    Sound.play("tap");
  }
  document.addEventListener("keydown", onKey);
  el.addEventListener("click", e => { if (e.target === el || e.target.closest("[data-back]")) close(); });
}

/* ---------- the example in the how-to ----------
   One move on a tiny board of each game, drawn flat in the colours of the game. It loops: still, the move, the
   result, back. With reduced motion it is two still boards instead, before → after. Classes on the parts:
   mv slides by --dx/--dy, rot turns by --r, grow widens from the left, draw draws a line, in appears, out goes. */
const DC = 20; // one space of an example board, in SVG units
const dXY = v => v * DC + 3; // a space's corner
const dMid = v => v * DC + 13; // a space's centre
const dSvg = (w, h, body) => frame => `<svg class="${frame}" viewBox="0 0 ${w * DC + 6} ${h * DC + 6}"><rect x=".5" y=".5" width="${w * DC + 5}" height="${h * DC + 5}" rx="7" style="fill:var(--raised);stroke:var(--line)"/>${body}</svg>`;
const dCell = (x, y, fill = "var(--surface)") => `<rect x="${dXY(x) + 1}" y="${dXY(y) + 1}" width="${DC - 2}" height="${DC - 2}" rx="4" style="fill:${fill}"/>`;
const dCells = (w, h, fill = () => "var(--surface)") => { let out = ""; for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) out += dCell(x, y, fill(x, y)); return out; };
const dSign = (ch, x, y, size) => `<svg x="${x - size / 2}" y="${y - size / 2}" width="${size}" height="${size}" viewBox="0 0 24 24" style="fill:${waterOf(ch).ink};color:${waterOf(ch).ink}">${waterOf(ch).sign}</svg>`;
const dSignOn = (ch, x, y, size) => `<svg x="${x - size / 2}" y="${y - size / 2}" width="${size}" height="${size}" viewBox="0 0 24 24" style="fill:${waterOf(ch).c};color:${waterOf(ch).c}">${waterOf(ch).sign}</svg>`;
const DEMOS = {
  pipes: () => {
    const arm = { 1: "M50 50V0", 2: "M50 50H100", 4: "M50 50V100", 8: "M50 50H0" };
    const tile = (x, m, colour, cls = "") => `<g transform="translate(${dXY(x)} 3) scale(.2)"><g class="${cls}" style="--r:90deg"><rect width="100" height="100" style="fill:none"/>${
      [1, 2, 4, 8].filter(b => m & b).map(b => `<path d="${arm[b]}" style="stroke:${colour};stroke-width:24;fill:none"/>`).join("")}<circle cx="50" cy="50" r="${[1, 2, 4, 8].includes(m) ? 19 : 12}" style="fill:${colour}"/></g></g>`;
    const idle = "var(--pipe-idle)", on = "var(--ping)";
    return { cap: "แตะท่อตรงกลางหนึ่งครั้ง ท่อหมุนไปต่อถึงจุดกลาง แล้วเป็นสีเหลือง",
      svg: dSvg(3, 1, `${tile(0, 2, idle)}${tile(1, 5, idle, "rot")}${tile(2, 8, on)}<g class="in">${tile(0, 2, on)}${tile(1, 10, on)}</g>`
        + `<circle cx="${dMid(2)}" cy="${dMid(0)}" r="1.8" style="fill:var(--raised);stroke:var(--ping);stroke-width:1.2"/>`) };
  },
  flow: () => {
    const path = [[0, 0], [1, 0], [1, 1], [2, 1]].map(([x, y]) => `${dMid(x)},${dMid(y)}`).join(" ");
    const dot = (x, y, k) => `<circle cx="${dMid(x)}" cy="${dMid(y)}" r="7.2" style="fill:${COLOURS[k]};stroke:#111114;stroke-width:.6"/><text x="${dMid(x)}" y="${dMid(y)}" class="demo-num">${k + 1}</text>`;
    return { cap: "ลากจากจุด 1 ไปหาจุด 1 อีกจุด เส้นเต็มช่องที่ผ่าน",
      svg: dSvg(3, 3, `${dCells(3, 3)}<polyline class="draw" pathLength="1" points="${path}" style="fill:none;stroke:${COLOURS[0]};stroke-width:6.8;stroke-linecap:round;stroke-linejoin:round"/>`
        + `${dot(0, 0, 0)}${dot(2, 1, 0)}${dot(0, 2, 1)}${dot(2, 2, 1)}`) };
  },
  wordsearch: () => {
    const rows = ["กปลา", "แมวส", "ดนบร"];
    const text = (x, y, ch, fill, cls = "") => `<text class="demo-letter ${cls}" x="${dMid(x)}" y="${dMid(y)}" style="fill:${fill}">${ch}</text>`;
    let letters = "";
    rows.forEach((r, y) => [...r].forEach((ch, x) => { letters += y === 1 && x < 3 ? text(x, y, ch, "var(--ink)", "out") + text(x, y, ch, "var(--on-ping)", "in") : text(x, y, ch, "var(--ink)"); }));
    return { cap: "ลากนิ้วจากตัวแรกถึงตัวสุดท้ายของคำ เช่น แมว",
      svg: dSvg(4, 3, `<rect class="grow" x="${dXY(0) + 1}" y="${dXY(1) + 1}" width="${3 * DC - 2}" height="${DC - 2}" rx="4" style="fill:var(--ping)"/>${letters}`) };
  },
  make_24: () => {
    const box = (x, body) => `<rect x="${x}" y="6" width="34" height="34" rx="7" style="fill:var(--surface);stroke:var(--line);stroke-width:1.2"/>${body}`;
    const num = (x, v, cls) => `<text class="demo-big ${cls}" x="${x + 17}" y="23.5">${v}</text>`;
    return { cap: "แตะ 8 แตะ × แล้วแตะ 3 ผล 24 มาแทนที่ 3",
      svg: frame => `<svg class="${frame}" viewBox="0 0 106 46"><rect x=".5" y=".5" width="105" height="45" rx="7" style="fill:var(--raised);stroke:var(--line)"/>`
        + `${box(6, num(6, 8, "out"))}<rect class="in" x="6" y="6" width="34" height="34" rx="7" style="fill:var(--raised);stroke:var(--line);stroke-width:1.2;stroke-dasharray:3 2"/>`
        + `<text class="demo-op out" x="53" y="23.5">×</text>${box(66, num(66, 3, "out") + num(66, 24, "in"))}</svg>` };
  },
  water_sort: () => {
    const glass = x => `<rect x="${x}" y="8" width="22" height="50" rx="5" style="fill:var(--surface);stroke:var(--pipe-idle);stroke-width:2"/>`;
    const layer = (x, k, ch, cls = "", style = "") => `<g class="${cls}" style="${style}"><rect x="${x + 3}" y="${44 - k * 11}" width="16" height="11" style="fill:${waterOf(ch).c}"/>${dSign(ch, x + 11, 49.5 - k * 11, 7)}</g>`;
    return { cap: "แตะขวดซ้าย แล้วแตะขวดขวา สีฟ้าบนสุดไหลไปต่อบนสีเดียวกัน",
      svg: frame => `<svg class="${frame}" viewBox="0 0 86 66"><rect x=".5" y=".5" width="85" height="65" rx="7" style="fill:var(--raised);stroke:var(--line)"/>`
        + `${glass(14)}${glass(50)}${layer(14, 0, "a")}${layer(50, 0, "b")}${layer(14, 1, "b", "mv", "--dx:36px")}</svg>` };
  },
  parking: () => {
    const car = (x, y, w, h, fill, cls = "", style = "") => `<rect class="${cls}" x="${dXY(x) + 2}" y="${dXY(y) + 2}" width="${w * DC - 4}" height="${h * DC - 4}" rx="5" style="fill:${fill};${style}"/>`;
    const arrows = (x, y, w, h, across, col) => { const cx = dXY(x) + w * DC / 2, cy = dXY(y) + h * DC / 2, l = across ? [[cx - 6, cy], [cx + 6, cy]] : [[cx, cy - 6], [cx, cy + 6]];
      const d = across ? `M${l[0][0] + 2.5} ${cy - 2.5}L${l[0][0]} ${cy}L${l[0][0] + 2.5} ${cy + 2.5}M${l[1][0] - 2.5} ${cy - 2.5}L${l[1][0]} ${cy}L${l[1][0] - 2.5} ${cy + 2.5}M${l[0][0]} ${cy}H${l[1][0]}`
        : `M${cx - 2.5} ${l[0][1] + 2.5}L${cx} ${l[0][1]}L${cx + 2.5} ${l[0][1] + 2.5}M${cx - 2.5} ${l[1][1] - 2.5}L${cx} ${l[1][1]}L${cx + 2.5} ${l[1][1] - 2.5}M${cx} ${l[0][1]}V${l[1][1]}`;
      return `<path d="${d}" style="fill:none;stroke:${col};stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round"/>`; };
    return { cap: "แตะแท่งที่ขวาง แล้วกดลูกศรลง ทางออกของแท่งสีเหลืองก็โล่ง",
      svg: dSvg(4, 4, `${dCells(4, 4, (x, y) => (y === 1 ? "rgba(255,194,51,.13)" : "var(--surface)"))}<rect x="${4 * DC + 2}" y="${dXY(1) + 3}" width="3" height="${DC - 6}" rx="1" style="fill:var(--ping)"/>`
        + `${car(0, 1, 2, 1, "var(--ping)")}${arrows(0, 1, 2, 1, true, "var(--on-ping)")}${car(0, 3, 2, 1, "var(--pipe-idle)")}${arrows(0, 3, 2, 1, true, "var(--on-bar)")}`
        + `<g class="mv" style="--dy:20px">${car(2, 1, 1, 2, "var(--pipe-idle)")}${arrows(2, 1, 1, 2, false, "var(--on-bar)")}</g>`) };
  },
  ice_slide: () => ({ cap: "กดลูกศรซ้าย น้องป่องไถลจนชนหิน แล้วหยุดบนธง",
    svg: dSvg(4, 3, `${dCells(4, 3, (x, y) => (x === 0 && y === 1 ? "var(--pipe-idle)" : x === 1 && y === 1 ? "var(--ping)" : "var(--surface)"))}`
      + `<g class="mv" style="--dx:-40px">${face("happy").replace("<svg", `<svg x="${dXY(3) + 2}" y="${dXY(1) + 2}" width="${DC - 4}" height="${DC - 4}"`)}</g>`) }),
  tilt: () => {
    const hole = (x, y, ch) => `<circle cx="${dMid(x)}" cy="${dMid(y)}" r="6.8" style="fill:var(--hole);stroke:${waterOf(ch).c};stroke-width:1.8"/><circle cx="${dMid(x)}" cy="${dMid(y) - 1.2}" r="4.6" style="fill:#000;opacity:.45"/>`
      + dSignOn(ch, dMid(x), dMid(y), 6.5);
    const ball = (x, y, ch, dx) => `<g class="mv" style="--dx:${dx}px"><circle cx="${dMid(x)}" cy="${dMid(y) + 1}" r="7.4" style="fill:#000;opacity:.3"/><circle cx="${dMid(x)}" cy="${dMid(y)}" r="7.4" style="fill:${waterOf(ch).c}"/>`
      + `<circle cx="${dMid(x) - 2.4}" cy="${dMid(y) - 2.8}" r="2.6" style="fill:#fff;opacity:.45"/>${dSign(ch, dMid(x), dMid(y), 8)}</g>`;
    return { cap: "กดลูกศรซ้าย ลูกทุกลูกกลิ้งไปพร้อมกัน ลูกชมพูตกลงหลุมสีเดียวกัน",
      svg: dSvg(4, 3, `${dCells(4, 3, (x, y) => (x === 0 && y === 2 ? "var(--pipe-idle)" : "var(--surface)"))}${hole(0, 0, "a")}${hole(3, 2, "b")}${ball(3, 0, "a", -60)}${ball(2, 2, "b", -20)}`) };
  },
};

/* ---------- quiz card ---------- */
const THAI_KEYS = ["ก", "ข", "ค", "ง"];
function quizCard(card) {
  const [id, category, question, options, explanation] = card.item;
  const st = card.st;
  // True or false always reads in that order. Every other question is shuffled; options[0] stays the right answer.
  if (!st.order) st.order = card.item[6] === "truefalse" ? ["จริง", "เท็จ"].map(o => options.indexOf(o)) : shuffled(options.map((_, i) => i));
  const s = document.createElement("div");
  s.className = "inner";
  const badge = CONFIG.labels[category] && CONFIG.labels[category].badge;
  const tag = (badge ? `<span class="pill">${esc(label(category))}</span>` : `<span class="dot"></span>ควิซ · ${esc(label(category))}`);
  s.innerHTML = `<div class="tag">${tag}</div><h2 class="question">${esc(question)}</h2>
    <div class="answers"></div><div class="slot"></div>${hint}`;
  const answers = $(".answers", s);
  answers.dataset.n = options.length;
  function paint() {
    const done = st.pick !== undefined;
    answers.classList.toggle("done", done);
    answers.innerHTML = st.order.map((o, k) => {
      const cls = done ? (o === 0 ? " correct" : "") + (o === st.pick ? " picked" : "") : "";
      const mark = !done ? "" : o === 0 ? '<span class="mark">เฉลย</span>' : o === st.pick ? '<span class="mark">คุณตอบ</span>' : "";
      return `<button class="ans${cls}" type="button" data-o="${o}" ${done ? "disabled" : ""} style="--c:var(--opt${k})${k === 2 ? ";--on:#111114" : ""}">
        <span class="key">${THAI_KEYS[k]}</span><span class="txt">${esc(options[o])}</span>${mark}</button>`;
    }).join("");
    if (done) {
      const ok = st.pick === 0;
      $(".slot", s).innerHTML = `<div class="result"><div class="verdict-row">${ok ? face("happy") : face("confused")}
        <div class="verdict ${ok ? "ok" : "no"}">${ok ? "ถูกต้อง! น้องป่องพองเลย" : "ยังไม่ใช่ เฉลยอยู่ข้างบน"}</div></div><p>${esc(explanation)}</p></div>`;
    }
  }
  answers.addEventListener("click", e => {
    const b = e.target.closest(".ans");
    if (!b || st.pick !== undefined) return;
    st.pick = +b.dataset.o;
    Sound.play(st.pick === 0 ? "correct" : "wrong");
    logCard(card, "answer", { option: st.pick, pos: st.order.indexOf(st.pick), correct: st.pick === 0, cat: category });
    markPlayed(card);
    paint();
  });
  paint();
  return s;
}

/* ---------- pipes card ----------
   The turns are counted for statistics only (st.moves): the card shows no count and keeps no best result. */
const DIRS = [[1, 0, -1, 4], [2, 1, 0, 8], [4, 0, 1, 1], [8, -1, 0, 2]];
const rotate = (m, k) => { k %= 4; while (k--) m = ((m << 1) | (m >> 3)) & 15; return m; };
function pipeSvg(m) {
  const arms = { 1: "M50 50V0", 2: "M50 50H100", 4: "M50 50V100", 8: "M50 50H0" };
  let p = "";
  for (const b of [1, 2, 4, 8]) if (m & b) p += `<path d="${arms[b]}" stroke-width="24" fill="none"/>`;
  return `<svg viewBox="0 0 100 100" aria-hidden="true">${p}<circle class="hub" cx="50" cy="50" r="${[1, 2, 4, 8].includes(m) ? 19 : 12}"/></svg>`;
}
function pipesCard(card) {
  const code = card.level, n = Math.round(Math.sqrt(code.length));
  const base = [...code].map(c => parseInt(c, 16));
  const src = Math.floor(n / 2) * n + Math.floor(n / 2);
  const st = card.st;
  if (!st.rot) { st.rot = base.map(() => 0); st.moves = 0; }
  const s = document.createElement("div");
  s.className = "inner";
  s.innerHTML = `${levelTag(card, n)}
    ${gameHead(card, "ต่อท่อให้ครบทุกช่อง", "แตะท่อเพื่อหมุน ไม่ให้มีปลายเปิดค้าง")}
    <div class="stage"><div class="board pipes" style="--n:${n}"></div></div>
    <div class="bar end"><button class="ghost reset" type="button">เริ่มใหม่</button></div>
    <div class="dock"><div class="slot"></div></div>${hint}`;
  const board = $(".pipes", s), cur = i => rotate(base[i], st.rot[i]);
  const tiles = base.map((m, i) => {
    const b = document.createElement("button");
    b.className = "tile"; b.type = "button"; b.innerHTML = pipeSvg(m);
    b.setAttribute("aria-label", "ท่อช่องที่ " + (i + 1));
    if (i === src) $("svg", b).insertAdjacentHTML("beforeend", '<circle class="src" cx="50" cy="50" r="9"/>');
    b.onclick = () => turn(i);
    board.appendChild(b);
    return b;
  });
  function lit() {
    const on = new Set([src]), q = [src];
    while (q.length) {
      const i = q.pop(), x = i % n, y = (i / n) | 0, m = cur(i);
      for (const [bit, dx, dy, opp] of DIRS) {
        const nx = x + dx, ny = y + dy, j = ny * n + nx;
        if (m & bit && nx >= 0 && ny >= 0 && nx < n && ny < n && cur(j) & opp && !on.has(j)) { on.add(j); q.push(j); }
      }
    }
    return on;
  }
  function solved() {
    for (let i = 0; i < n * n; i++) {
      const x = i % n, y = (i / n) | 0, m = cur(i);
      for (const [bit, dx, dy, opp] of DIRS) {
        if (!(m & bit)) continue;
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= n || ny >= n || !(cur(ny * n + nx) & opp)) return false;
      }
    }
    return true;
  }
  function paint() {
    const on = lit();
    tiles.forEach((t, i) => { t.classList.toggle("on", on.has(i)); $("svg", t).style.transform = `rotate(${st.rot[i] * 90}deg)`; });
    board.classList.toggle("won", !!st.won);
    $(".slot", s).innerHTML = st.won ? winBox("ต่อสำเร็จ!", bestLine(card)) : "";
    wireReplay(s, st);
    return on.size;
  }
  function turn(i) {
    if (st.won) return;
    st.rot[i]++; st.moves++;
    if (paint() === n * n && solved()) {
      st.won = true;
      Sound.play("win");
      wonLevel(card, { moves: st.moves }, null); // the turns are not shown, so there is no result to beat
      paint();
    } else Sound.play("rotate");
  }
  $(".reset", s).onclick = () => { Sound.play("tap"); st.rot = base.map(() => 0); st.moves = 0; startOver(st); paint(); };
  wireHelp(s);
  paint();
  return s;
}

/* ---------- shared drag handling for boards ---------- */
function dragBoard(board, n, handlers) {
  let active = null, rect = null;
  const cellAt = e => {
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * n), y = Math.floor(((e.clientY - rect.top) / rect.height) * n);
    return { x: Math.max(0, Math.min(n - 1, x)), y: Math.max(0, Math.min(n - 1, y)) };
  };
  board.addEventListener("pointerdown", e => {
    if (active !== null) return;
    rect = board.getBoundingClientRect();
    if (handlers.start(cellAt(e)) === false) return;
    active = e.pointerId;
    try { board.setPointerCapture(active); } catch {}
    e.preventDefault();
  });
  board.addEventListener("pointermove", e => { if (e.pointerId === active) handlers.move(cellAt(e)); });
  const end = e => { if (e.pointerId === active) { active = null; handlers.end(); } };
  board.addEventListener("pointerup", end);
  board.addEventListener("pointercancel", end);
  // Older iOS Safari may still pan from inside a touch-action:none box; this stops it.
  board.addEventListener("touchmove", e => e.preventDefault(), { passive: false });
}

/* ---------- color-link card ---------- */
const COLOURS = ["#FFC233", "#3DCB7A", "#4FB3FF", "#F58AD0", "#B79CFF", "#FF9A4D", "#39D8CF", "#C9CDD6", "#D9A77C"];
function flowCard(card) {
  const code = card.level, n = Math.round(Math.sqrt(code.length));
  const dots = {}; // cell -> colour number
  const pairs = {}; // colour number -> [cell, cell]
  [...code].forEach((c, i) => {
    if (c >= "A" && c <= "Z") {
      const k = c.charCodeAt(0) - 65;
      dots[i] = k;
      (pairs[k] = pairs[k] || []).push(i);
    }
  });
  const colours = Object.keys(pairs).map(Number);
  const st = card.st;
  if (!st.paths) st.paths = {};
  const s = document.createElement("div");
  s.className = "inner";
  s.innerHTML = `${levelTag(card, n)}
    ${gameHead(card, "เชื่อมจุดเลขเดียวกัน", "ลากเส้นจากจุดถึงจุด ให้เต็มทุกช่อง")}
    <div class="stage"><div class="board drag flow" style="--n:${n}"></div></div>
    <div class="bar"><span>เต็ม <strong class="fill">0</strong>/${n * n} ช่อง</span><button class="ghost reset" type="button">เริ่มใหม่</button></div>
    <div class="dock"><div class="slot"></div></div>${hint}`;
  const board = $(".flow", s);
  let grid = "";
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) grid += `<rect class="cell" x="${x}" y="${y}" width="1" height="1"/>`;
  board.innerHTML = `<svg viewBox="0 0 ${n} ${n}" aria-label="กระดานลากเส้น">${grid}<g class="tint"></g><g class="ln"></g>${
    Object.entries(dots).map(([i, k]) => `<circle class="dotc" cx="${(i % n) + .5}" cy="${((i / n) | 0) + .5}" r=".36" fill="${COLOURS[k]}"/><text class="num" x="${(i % n) + .5}" y="${((i / n) | 0) + .5}">${k + 1}</text>`).join("")
  }</svg>`;
  const xy = c => [(c % n) + .5, ((c / n) | 0) + .5];
  const complete = k => { const p = st.paths[k]; return !!p && p.length > 1 && p[p.length - 1] in dots && dots[p[p.length - 1]] === k; };
  function ownerOf(c) { for (const k of colours) { const p = st.paths[k]; if (p && p.includes(c)) return k; } return -1; }
  function paint() {
    let tint = "", ln = "", filled = 0;
    for (const k of colours) {
      const p = st.paths[k]; if (!p) continue;
      filled += p.length;
      for (const c of p) { const [x, y] = xy(c); tint += `<rect x="${x - .5}" y="${y - .5}" width="1" height="1" fill="${COLOURS[k]}" opacity=".22"/>`; }
      ln += `<polyline stroke="${COLOURS[k]}" points="${p.map(c => xy(c).join(",")).join(" ")}"/>`;
    }
    $(".tint", board).innerHTML = tint;
    $(".ln", board).innerHTML = ln;
    $(".fill", s).textContent = filled;
    $(".slot", s).innerHTML = st.won ? winBox("เชื่อมครบแล้ว!", bestLine(card)) : "";
    wireReplay(s, st);
  }
  let drawing = -1;
  function step(c) {
    const p = st.paths[drawing], at = p.indexOf(c);
    if (at >= 0) { p.length = at + 1; return true; }
    if (complete(drawing)) return false;
    if (c in dots && dots[c] !== drawing) return false;
    const owner = ownerOf(c);
    if (owner >= 0) { const q = st.paths[owner]; q.length = q.indexOf(c); }
    p.push(c);
    return true;
  }
  dragBoard(board, n, {
    start({ x, y }) {
      if (st.won) return false;
      const c = y * n + x;
      st.moves = (st.moves || 0) + 1;
      if (c in dots) { drawing = dots[c]; st.paths[drawing] = [c]; }
      else {
        drawing = ownerOf(c);
        if (drawing < 0) return false;
        const p = st.paths[drawing]; p.length = p.indexOf(c) + 1;
      }
      paint();
    },
    move({ x, y }) {
      const p = st.paths[drawing]; let changed = false;
      for (let guard = 0; guard < 2 * n; guard++) { // a fast finger can skip cells: walk there one cell at a time
        const h = p[p.length - 1], hx = h % n, hy = (h / n) | 0;
        if (hx === x && hy === y) break;
        const dx = x - hx, dy = y - hy;
        const next = Math.abs(dx) >= Math.abs(dy) ? h + Math.sign(dx) : h + Math.sign(dy) * n;
        if (!step(next)) break;
        changed = true;
      }
      if (changed) {
        if (complete(drawing)) Sound.play("link");
        else Sound.play("trace", p.length - 1);
        paint();
      }
    },
    end() {
      drawing = -1;
      const filled = colours.reduce((sum, k) => sum + (st.paths[k] ? st.paths[k].length : 0), 0);
      if (filled === n * n && colours.every(complete)) {
        st.won = true;
        Sound.play("win");
        wonLevel(card, { moves: st.moves });
        paint();
      }
    },
  });
  $(".reset", s).onclick = () => { Sound.play("tap"); st.paths = {}; startOver(st); paint(); };
  wireHelp(s);
  paint();
  return s;
}

/* ---------- word-search card ---------- */
function wordCard(card) {
  const { theme, size: n, grid, words } = card.level;
  const cells = grid.split(" ");
  const st = card.st;
  if (!st.found) st.found = [];
  const s = document.createElement("div");
  s.className = "inner";
  s.innerHTML = `${levelTag(card, n)}
    ${gameHead(card, "หมวด " + esc(theme), "คำอยู่แนวซ้ายไปขวา หรือบนลงล่าง")}
    <div class="pickbar idle" aria-hidden="true"></div>
    <div class="stage"><div class="board drag words" style="--n:${n};--fs:${{ 6: 26, 7: 23, 8: 20 }[n]}px"></div></div>
    <div class="wordlist"></div>
    <div class="dock"><div class="slot"></div></div>${hint}`;
  /* The list of words is the answer, so it stays shut until the player asks (st.peek, this card only). */
  const board = $(".words", s);
  board.innerHTML = cells.map(c => `<div class="letter">${esc(c)}</div>`).join("");
  const letters = [...board.children];
  const spots = words.map(w => {
    const out = []; let len = 0;
    for (const ch of [...w.w]) if (!/[ัำ-ฺ็-๎]/.test(ch)) len++;
    const step = w.d === "h" ? 1 : n;
    for (let k = 0; k < len; k++) out.push(w.y * n + w.x + k * step);
    return out;
  });
  let start = null, sel = [];
  const pickbar = $(".pickbar", s);
  function paint() {
    // The letters under the finger, in the order they were dragged; at rest the bar says what to do.
    pickbar.classList.toggle("idle", !sel.length);
    pickbar.textContent = sel.length ? sel.map(i => cells[i]).join("") : "ลากนิ้วตามคำ ลากกลับด้านก็ได้";
    const found = new Set();
    st.found.forEach(k => spots[k].forEach(c => found.add(c)));
    letters.forEach((el, i) => { el.classList.toggle("found", found.has(i)); el.classList.toggle("sel", sel.includes(i)); });
    const list = $(".wordlist", s), open = st.peek || st.won;
    list.innerHTML = open
      ? words.map((w, k) => `<span class="word${st.found.includes(k) ? " found" : ""}">${esc(w.w)}</span>`).join("")
      : `<p class="word-count">หาแล้ว <strong>${st.found.length}</strong> จาก <strong>${words.length}</strong> คำ</p>
        <button class="ghost peek" type="button">ดูคำที่ต้องหา</button>`;
    $(".slot", s).innerHTML = st.won ? winBox("หาครบแล้ว!") : "";
  }
  dragBoard(board, n, {
    start(c) { if (st.won) return false; st.moves = (st.moves || 0) + 1; start = c; sel = [c.y * n + c.x]; paint(); },
    move({ x, y }) {
      const dx = x - start.x, dy = y - start.y, out = [];
      const across = Math.abs(dx) >= Math.abs(dy), len = Math.max(Math.abs(dx), Math.abs(dy));
      for (let k = 0; k <= len; k++) out.push(across ? start.y * n + start.x + k * Math.sign(dx) : (start.y + k * Math.sign(dy)) * n + start.x);
      if (out.join() !== sel.join()) { sel = out; Sound.play("trace", sel.length - 1); paint(); }
    },
    end() {
      const picked = sel.join(), back = sel.slice().reverse().join();
      spots.forEach((spot, k) => {
        const key = spot.join();
        if ((key === picked || key === back) && !st.found.includes(k)) { st.found.push(k); Sound.play("found"); }
      });
      sel = [];
      if (st.found.length === words.length && !st.won) {
        st.won = true;
        Sound.play("win");
        wonLevel(card, { moves: st.moves, found: st.found.length });
      }
      paint();
    },
  });
  $(".wordlist", s).addEventListener("click", e => {
    if (!e.target.closest(".peek")) return;
    st.peek = true; Sound.play("tap"); paint();
  });
  wireHelp(s);
  paint();
  return s;
}

/* ---------- make 24 card ----------
   Tap a number, an operation, then a second number: the result takes the second number's place and the
   first one's place empties, until one number is left. Numbers are exact fractions {n, d}, never decimals. */
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
const frac = (n, d = 1) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); return { n: n / g, d: d / g }; };
const M24_OPS = {
  "+": { sign: "+", name: "บวก", run: (a, b) => frac(a.n * b.d + b.n * a.d, a.d * b.d) },
  "-": { sign: "−", name: "ลบ", run: (a, b) => frac(a.n * b.d - b.n * a.d, a.d * b.d) },
  "*": { sign: "×", name: "คูณ", run: (a, b) => frac(a.n * b.n, a.d * b.d) },
  "/": { sign: "÷", name: "หาร", run: (a, b) => (b.n === 0 ? null : frac(a.n * b.d, a.d * b.n)) },
};
const is24 = v => v.n === 24 && v.d === 1;
/* A number as the player reads it: a whole number, or a fraction stacked over its line. */
function numHtml(v) {
  const sign = v.n < 0 ? '<span class="neg">−</span>' : "", n = Math.abs(v.n);
  if (v.d === 1) return `<span class="val">${sign}<span class="int">${n}</span></span>`;
  return `<span class="val">${sign}<span class="frac"><span class="fn">${n}</span><span class="fd">${v.d}</span></span></span>`;
}
const numSay = v => (v.n < 0 ? "ลบ " : "") + (v.d === 1 ? Math.abs(v.n) : `${Math.abs(v.n)} ส่วน ${v.d}`);
const numSize = v => { const len = String(Math.abs(v.n)).length + (v.n < 0 ? 1 : 0); return v.d > 1 ? "f" : len >= 4 ? "xl" : len === 3 ? "l" : ""; };
const calm = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const ICON_UNDO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>';
const ICON_RESET = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>';
function make24Card(card) {
  const start = [...card.level].map(c => frac(+c));
  const st = card.st;
  if (!st.nums) Object.assign(st, { nums: start.slice(), hist: [], sel: -1, op: null, last: null, note: "", moves: 0 });
  const s = document.createElement("div");
  s.className = "inner m24";
  s.innerHTML = `${levelTag(card)}
    ${gameHead(card, 'ทำให้ได้ <span class="goal">24</span>', "ใช้เลขทั้งสี่ตัว ตัวละครั้ง ส่วน + − × ÷ ใช้ซ้ำหรือไม่ใช้ก็ได้")}
    <div class="game-line m24-line" role="status" aria-live="polite"></div>
    <div class="stage m24-stage"><div class="board m24-board"></div></div>
    <div class="dock"><div class="m24-ops">${Object.entries(M24_OPS).map(([k, o]) => `<button class="op" type="button" data-op="${k}" aria-label="${o.name}">${o.sign}</button>`).join("")}</div><div class="slot"></div></div>
    <div class="bar game-bar"><button class="ghost undo" type="button">${ICON_UNDO}ย้อน</button><span class="left">เหลือ <strong>4</strong> ตัว</span><button class="ghost reset" type="button">${ICON_RESET}เริ่มใหม่</button></div>
    ${hint}`;
  const board = $(".m24-board", s), line = $(".m24-line", s), ops = [...s.querySelectorAll(".op")];
  const tiles = start.map((_, i) => {
    const b = document.createElement("button");
    b.className = "num"; b.type = "button"; b.dataset.i = i;
    b.onclick = () => tapNumber(i);
    board.appendChild(b);
    return b;
  });
  const left = () => st.nums.filter(Boolean);
  const over = () => left().length === 1;
  function paint() {
    const done = over(), dividing = st.op === "/";
    tiles.forEach((t, i) => {
      const v = st.nums[i];
      t.classList.toggle("gone", !v);
      t.classList.toggle("sel", i === st.sel);
      t.classList.toggle("cant", !!v && dividing && i !== st.sel && v.n === 0);
      t.classList.toggle("won", !!v && done && !!st.won);
      t.classList.toggle("off", !!v && done && !st.won);
      if (!v || !done) t.classList.remove("win", "miss");
      t.classList.remove("pop");
      t.disabled = !v || done;
      t.dataset.size = v ? numSize(v) : "";
      t.innerHTML = v ? numHtml(v) : "";
      t.setAttribute("aria-label", v ? "เลข " + numSay(v) : "ช่องว่าง");
      t.setAttribute("aria-pressed", i === st.sel ? "true" : "false");
    });
    ops.forEach(b => {
      b.classList.toggle("sel", b.dataset.op === st.op);
      b.disabled = st.sel < 0 || done;
      b.setAttribute("aria-pressed", b.dataset.op === st.op ? "true" : "false");
    });
    const step = x => `${numHtml(x.a)}<span class="sg">${M24_OPS[x.op].sign}</span>${numHtml(x.b)}<span class="sg">=</span>${numHtml(x.r)}`;
    let expr = "", say = "";
    if (st.note) say = st.note;
    else if (st.sel >= 0) {
      expr = `${numHtml(st.nums[st.sel])}<span class="sg${st.op ? "" : " wait"}">${st.op ? M24_OPS[st.op].sign : "?"}</span>${st.op ? '<span class="sg wait">?</span>' : ""}`;
      say = st.op ? "แตะเลขตัวที่สอง" : "เลือกเครื่องหมาย";
    } else if (st.last) { expr = step(st.last); say = done ? "" : "แตะเลขต่อได้เลย"; }
    else say = "แตะเลขตัวแรก";
    line.innerHTML = `${expr ? `<span class="expr">${expr}</span>` : ""}${say ? `<span class="say">${esc(say)}</span>` : ""}`;
    line.classList.toggle("note", !!st.note);
    $(".left strong", s).textContent = left().length;
    $(".undo", s).disabled = !st.hist.length || !!st.won;
    $(".reset", s).disabled = !st.won && !st.hist.length && st.sel < 0;
    wireReplay(s, st);
    board.classList.toggle("won", !!st.won);
    const slot = $(".slot", s);
    if (st.won) slot.innerHTML = winBox("ได้ 24 แล้ว!");
    else if (done) slot.innerHTML = `<div class="result"><div class="verdict-row">${face("confused")}<div class="verdict">ได้ ${numHtml(left()[0])} ยังไม่ใช่ 24</div></div><p>กดย้อนแล้วลองทางอื่นดูนะ</p></div>`;
    else slot.innerHTML = "";
  }
  /* The first number glides onto the second, which then shows the result. */
  function glide(from, to) {
    if (calm() || !tiles[from].animate) return;
    const a = tiles[from].getBoundingClientRect(), b = tiles[to].getBoundingClientRect(), box = board.getBoundingClientRect();
    const g = document.createElement("div");
    g.className = "num ghost sel";
    g.dataset.size = tiles[from].dataset.size;
    g.innerHTML = tiles[from].innerHTML;
    g.setAttribute("aria-hidden", "true");
    Object.assign(g.style, { left: a.left - box.left - board.clientLeft + "px", top: a.top - box.top - board.clientTop + "px", width: a.width + "px", height: a.height + "px" });
    board.appendChild(g);
    const anim = g.animate([{ transform: "none", opacity: 1 }, { transform: `translate(${b.left - a.left}px, ${b.top - a.top}px) scale(.55)`, opacity: 0 }],
      { duration: 260, easing: "cubic-bezier(.4, 0, .2, 1)" });
    anim.onfinish = anim.oncancel = () => g.remove();
  }
  function tapNumber(i) {
    if (st.won || !st.nums[i] || over()) return;
    st.note = "";
    if (st.sel === i) { st.sel = -1; st.op = null; Sound.play("tap"); return paint(); }
    if (st.sel < 0 || !st.op) { st.sel = i; Sound.play("tap"); return paint(); }
    const a = st.nums[st.sel], b = st.nums[i], r = M24_OPS[st.op].run(a, b);
    if (!r) { st.note = "หารด้วยศูนย์ไม่ได้ ลองเลขอื่นนะ"; paint(); replay(tiles[i], "nope"); return; }
    st.hist.push({ nums: st.nums.slice(), last: st.last });
    const from = st.sel;
    glide(from, i);
    st.nums[i] = r; st.nums[from] = null;
    st.last = { a, op: st.op, b, r };
    st.sel = -1; st.op = null; st.moves++;
    if (over() && is24(r)) {
      st.won = true;
      Sound.play("win");
      wonLevel(card, { moves: st.moves }, null); // always three steps: nothing to beat
    } else Sound.play(over() ? "wrong" : "found");
    paint();
    replay(tiles[i], over() ? (st.won ? "win" : "miss") : "pop");
  }
  ops.forEach(b => (b.onclick = () => {
    if (st.sel < 0 || over()) return;
    st.note = "";
    st.op = st.op === b.dataset.op ? null : b.dataset.op;
    Sound.play("tap");
    paint();
  }));
  $(".undo", s).onclick = () => {
    if (!st.hist.length || st.won) return;
    const back = st.hist.pop();
    Object.assign(st, { nums: back.nums, last: back.last, sel: -1, op: null, note: "" });
    Sound.play("tap");
    paint();
  };
  $(".reset", s).onclick = () => {
    startOver(st);
    Object.assign(st, { nums: start.slice(), hist: [], sel: -1, op: null, last: null, note: "" });
    Sound.play("tap");
    paint();
  };
  wireHelp(s);
  paint();
  return s;
}

/* ---------- shared by the tap-only games below ---------- */
const replay = (el, cls) => { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); };
/* The count between undo and start over: moves on the way now, and the fewest the level can be won in. */
const countHtml = (verb, n, best) => `<span class="left count"><span>${verb} <strong>${n}</strong> ครั้ง</span><small>น้อยสุด ${best}</small></span>`;
const winNote = (verb, n, best) => (n <= best ? `${verb} ${n} ครั้ง น้อยที่สุดแล้ว เก่งมาก` : `${verb} ${n} ครั้ง ด่านนี้ทำได้ใน ${best} ครั้ง`);

/* ---------- water sort card ----------
   Tap a bottle to lift it, then another to pour into it. The run of one colour on top flows over, as much as
   fits, onto an empty bottle or the same colour. Won when every bottle is empty or full of one colour.
   Each colour also carries its own sign, the same in every theme, so no one has to tell colours apart by
   colour alone. Taps only, nothing to drag. */
const WATER_CAP = 4;
const WATER = [ // a, b, c, ... of content/puzzles/water_sort.json; ink is the colour of the sign on it
  { c: "#E0499A", ink: "#111114", name: "ชมพู", sign: '<path d="M12 20.4 4.7 13.3a4.5 4.5 0 0 1 6.4-6.4l.9.9.9-.9a4.5 4.5 0 0 1 6.4 6.4Z"/>' },
  { c: "#5CC2FF", ink: "#111114", name: "ฟ้า", sign: '<path d="M12 3.6c3.3 4.3 5.7 7.4 5.7 10.5a5.7 5.7 0 0 1-11.4 0c0-3.1 2.4-6.2 5.7-10.5Z"/>' },
  { c: "#B5E04A", ink: "#111114", name: "เขียวอ่อน", sign: '<path d="m12 3.2 2.6 5.5 6 .8-4.4 4.1 1.1 6L12 16.7l-5.3 2.9 1.1-6-4.4-4.1 6-.8Z"/>' },
  { c: "#A47CFF", ink: "#111114", name: "ม่วง", sign: '<path d="M14.6 3.6a8.4 8.4 0 1 0 5.8 13.2A7 7 0 0 1 14.6 3.6Z"/>' },
  { c: "#FFB27A", ink: "#111114", name: "ส้มอ่อน", sign: '<circle cx="12" cy="12" r="5.6" fill="none" stroke="currentColor" stroke-width="3.2"/>' },
  { c: "#2A4FA8", ink: "#FFFFFF", name: "น้ำเงิน", sign: '<path d="M3.5 9.5c2.1-2.4 4.2-2.4 5.7 0s3.6 2.4 5.7 0 3.6-2.4 5.6 0M3.5 15.5c2.1-2.4 4.2-2.4 5.7 0s3.6 2.4 5.7 0 3.6-2.4 5.6 0" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' },
  { c: "#9A6440", ink: "#FFFFFF", name: "น้ำตาล", sign: '<path d="M12 4.6v14.8M4.6 12h14.8" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"/>' },
];
const waterOf = ch => WATER[ch.charCodeAt(0) - 97];
const solidBottle = b => b.length === WATER_CAP && [...b].every(ch => ch === b[0]);
/* How many layers of bottle b pour onto bottle c, or why none can: "empty", "full" or "colour". */
function pourOf(b, c) {
  if (!b) return { why: "empty" };
  if (c.length >= WATER_CAP) return { why: "full" };
  const top = b[b.length - 1];
  if (c && c[c.length - 1] !== top) return { why: "colour" };
  let run = 1;
  while (run < b.length && b[b.length - 1 - run] === top) run++;
  return { k: Math.min(run, WATER_CAP - c.length) };
}
const WATER_WHY = { empty: "ขวดนี้ว่าง แตะขวดที่มีน้ำ", full: "ขวดนั้นเต็มแล้ว", colour: "เทไม่ได้ สีบนสุดต้องเหมือนกัน" };
function waterCard(card) {
  const start = card.level.bottles.slice(), best = card.level.moves, n = start.length;
  const st = card.st;
  if (!st.b) Object.assign(st, { b: start.slice(), hist: [], sel: -1, note: "", moves: 0 });
  const s = document.createElement("div");
  s.className = "inner water";
  // Up to 6 bottles stand in one row; more stand in two, the longer row on top.
  const cols = n > 6 ? Math.ceil(n / 2) : n;
  s.innerHTML = `${levelTag(card)}
    ${gameHead(card, "เทน้ำให้ขวดละสี", "แตะขวดที่จะเท แล้วแตะขวดที่จะรับ")}
    <div class="game-line" role="status" aria-live="polite"></div>
    <div class="stage water-stage${n > 6 ? " two" : ""}"><div class="board water-board${n > 6 ? " two" : ""}" style="--cols:${cols}"></div></div>
    <div class="bar game-bar"><button class="ghost undo" type="button">${ICON_UNDO}ย้อน</button><span class="tally"></span><button class="ghost reset" type="button">${ICON_RESET}เริ่มใหม่</button></div>
    <div class="dock"><div class="slot"></div></div>${hint}`;
  const board = $(".water-board", s), line = $(".game-line", s);
  const bottles = start.map((_, i) => {
    const b = document.createElement("button");
    b.className = "bottle"; b.type = "button"; b.dataset.i = i;
    b.innerHTML = '<span class="cork" aria-hidden="true"></span><span class="glass"></span>';
    b.onclick = () => tap(i);
    board.appendChild(b);
    return b;
  });
  const won = () => st.b.every(b => !b || solidBottle(b));
  function sayBottle(b, i) {
    if (!b) return `ขวดที่ ${i + 1} ว่าง`;
    const runs = [];
    for (const ch of b) { const last = runs[runs.length - 1]; if (last && last[0] === ch) last[1]++; else runs.push([ch, 1]); }
    return `ขวดที่ ${i + 1} จากก้นขึ้นบน ` + runs.map(([ch, k]) => `${waterOf(ch).name} ${k} ชั้น`).join(" ") + (solidBottle(b) ? " เต็มแล้ว" : "");
  }
  function paint(fresh = {}) {
    bottles.forEach((el, i) => {
      const b = st.b[i];
      $(".glass", el).innerHTML = [...b].map((ch, k) => {
        const w = waterOf(ch), isNew = fresh[i] && k >= b.length - fresh[i];
        return `<span class="w${isNew ? " in" : ""}" data-c="${ch}" style="--w:${w.c};--ink:${w.ink}${isNew ? `;--k:${k - (b.length - fresh[i])}` : ""}"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${w.sign}</svg></span>`;
      }).join("");
      el.classList.toggle("sel", i === st.sel);
      el.classList.toggle("done", solidBottle(b));
      el.disabled = !!st.won;
      el.setAttribute("aria-pressed", i === st.sel ? "true" : "false");
      el.setAttribute("aria-label", sayBottle(b, i));
    });
    const say = st.won ? "" : st.note || (st.sel >= 0 ? "แตะขวดที่จะรับน้ำ" : st.hist.length ? "แตะขวดที่จะเทต่อ" : "แตะขวดที่จะเท");
    line.innerHTML = say ? `<span class="say">${esc(say)}</span>` : "";
    line.classList.toggle("note", !!st.note);
    $(".tally", s).innerHTML = countHtml("เท", st.hist.length, best);
    $(".undo", s).disabled = !st.hist.length || !!st.won;
    $(".reset", s).disabled = !st.won && !st.hist.length && st.sel < 0;
    wireReplay(s, st);
    board.classList.toggle("won", !!st.won);
    $(".slot", s).innerHTML = st.won ? winBox("เรียงสีครบแล้ว!", [winNote("เท", st.hist.length, best), bestLine(card)]) : "";
  }
  function refuse(i, why) {
    st.note = WATER_WHY[why];
    paint();
    replay(bottles[i], "nope");
  }
  function tap(i) {
    if (st.won) return;
    st.note = "";
    if (st.sel === i) { st.sel = -1; Sound.play("tap"); return paint(); }
    if (st.sel < 0) {
      if (!st.b[i]) return refuse(i, "empty");
      st.sel = i; Sound.play("tap");
      return paint();
    }
    const from = st.sel, p = pourOf(st.b[from], st.b[i]);
    if (!p.k) return refuse(i, p.why); // the lifted bottle stays up, ready for another try
    st.hist.push(st.b.slice());
    const b = st.b[from];
    st.b[i] += b.slice(b.length - p.k);
    st.b[from] = b.slice(0, b.length - p.k);
    st.sel = -1; st.moves++;
    if (won()) {
      st.won = true;
      Sound.play("win");
      wonLevel(card, { moves: st.moves }, st.hist.length);
    } else Sound.play(solidBottle(st.b[i]) ? "found" : "pour");
    paint({ [i]: p.k });
    // The bottle poured from leans toward the one it poured into.
    const right = bottles[from].offsetTop === bottles[i].offsetTop ? bottles[from].offsetLeft < bottles[i].offsetLeft : i > from;
    replay(bottles[from], right ? "tip-r" : "tip-l");
    if (solidBottle(st.b[i])) replay(bottles[i], "filled");
  }
  $(".undo", s).onclick = () => {
    if (!st.hist.length || st.won) return;
    Object.assign(st, { b: st.hist.pop(), sel: -1, note: "" });
    Sound.play("tap");
    paint();
  };
  $(".reset", s).onclick = () => {
    startOver(st);
    Object.assign(st, { b: start.slice(), hist: [], sel: -1, note: "" });
    Sound.play("tap");
    paint();
  };
  wireHelp(s);
  paint();
  return s;
}

/* ---------- parking card ("เลื่อนแท่ง", sliding bars; the id stays parking) ----------
   A 6×6 tray of plain bars 2 to 4 long, called cars in the code. Tap a bar, then an arrow: one tap slides it
   one space along its own line. The yellow bar, in the third row, leaves by the open edge on the right. The count follows content/puzzles/parking.json: sliding the
   same car the same way again, with nothing else in between, is still one move. Taps only, nothing to drag. */
const PARK_N = 6, PARK_ROW = 2;
const PARK_KEYS = [
  { dx: -1, dy: 0, name: "ซ้าย", d: "M15 5 8 12l7 7" },
  { dx: 0, dy: -1, name: "ขึ้น", d: "m5 15 7-7 7 7" },
  { dx: 0, dy: 1, name: "ลง", d: "m5 9 7 7 7-7" },
  { dx: 1, dy: 0, name: "ขวา", d: "m9 5 7 7-7 7" },
];
// A small arrow with two heads on every bar, along the line it slides on.
const ICON_SLIDE_H = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12h18"/><path d="m7 8-4 4 4 4"/><path d="m17 8 4 4-4 4"/></svg>';
const ICON_SLIDE_V = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18"/><path d="m8 7 4-4 4 4"/><path d="m8 17 4 4 4-4"/></svg>';
function parkCars(grid) {
  const cars = {};
  grid.forEach((row, y) => [...row].forEach((ch, x) => {
    if (ch === ".") return;
    (cars[ch] = cars[ch] || { cells: [] }).cells.push([x, y]);
  }));
  for (const c of Object.values(cars)) {
    const [x0, y0] = c.cells[0];
    c.across = c.cells.every(([, y]) => y === y0);
    c.len = c.cells.length;
    c.line = c.across ? y0 : x0; // the row or column it stays on
    c.start = c.across ? x0 : y0; // where it begins along that line
  }
  return cars;
}
function parkingCard(card) {
  const cars = parkCars(card.level.grid), ids = Object.keys(cars).sort(), best = card.level.moves;
  const startAt = Object.fromEntries(ids.map(id => [id, cars[id].start]));
  const st = card.st;
  if (!st.at) Object.assign(st, { at: { ...startAt }, hist: [], sel: null, run: null, moves: 0 });
  const s = document.createElement("div");
  s.className = "inner parking";
  s.innerHTML = `${levelTag(card)}
    ${gameHead(card, 'พา<span class="goal">แท่งสีเหลือง</span>ออกทางขวา', "แตะเลือกแท่ง แล้วกดลูกศรเพื่อเลื่อน")}
    <div class="game-line" role="status" aria-live="polite"></div>
    <div class="stage"><div class="board park-board"><div class="lot"></div></div></div>
    <div class="dock"><div class="park-keys">${PARK_KEYS.map((k, i) => `<button class="op pkey" type="button" data-k="${i}" aria-label="เลื่อน${k.name}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${k.d}"/></svg></button>`).join("")}</div><div class="slot"></div></div>
    <div class="bar game-bar"><button class="ghost undo" type="button">${ICON_UNDO}ย้อน</button><span class="tally"></span><button class="ghost reset" type="button">${ICON_RESET}เริ่มใหม่</button></div>
    ${hint}`;
  const lot = $(".lot", s), line = $(".game-line", s), keys = [...s.querySelectorAll(".pkey")];
  let bays = "";
  for (let y = 0; y < PARK_N; y++) for (let x = 0; x < PARK_N; x++) bays += `<span class="bay${y === PARK_ROW ? " lane" : ""}" style="--x:${x};--y:${y}"></span>`;
  lot.innerHTML = `${bays}<span class="exit" style="--y:${PARK_ROW}" aria-hidden="true"></span>`;
  // Tapping an empty space lets go of the car.
  lot.addEventListener("click", e => {
    if (e.target.closest(".car") || !st.sel || st.won) return;
    st.sel = null; Sound.play("tap"); paint();
  });
  const els = {};
  for (const id of ids) {
    const c = cars[id], b = document.createElement("button");
    b.className = "car" + (id === "A" ? " goal-car" : "") + (c.across ? " across" : " down");
    b.type = "button"; b.dataset.car = id;
    b.style.setProperty("--len", c.len);
    b.innerHTML = `<span class="roof">${c.across ? ICON_SLIDE_H : ICON_SLIDE_V}</span>`;
    b.onclick = () => pick(id);
    lot.appendChild(b);
    els[id] = b;
  }
  function cellsOf(id) {
    const c = cars[id], at = st.at[id], out = [];
    for (let k = 0; k < c.len; k++) out.push(c.across ? [at + k, c.line] : [c.line, at + k]);
    return out;
  }
  /* Can car id slide one space the way of key: along its own line, inside the lot, onto a free space? */
  const canStep = (id, key) => canStepFrom(id, key, st.at[id]);
  function canStepFrom(id, key, from) {
    const c = cars[id];
    if ((key.dx !== 0) !== c.across) return false;
    const step = key.dx || key.dy, at = from + step;
    if (at < 0 || at + c.len > PARK_N) return false;
    const ahead = step > 0 ? at + c.len - 1 : at;
    const [x, y] = c.across ? [ahead, c.line] : [c.line, ahead];
    return !ids.some(o => o !== id && cellsOf(o).some(([ox, oy]) => ox === x && oy === y));
  }
  const out = () => st.at.A + cars.A.len === PARK_N;
  function paint() {
    for (const id of ids) {
      const c = cars[id], el = els[id], x = c.across ? st.at[id] : c.line, y = c.across ? c.line : st.at[id];
      el.style.setProperty("--x", x);
      el.style.setProperty("--y", y);
      el.classList.toggle("sel", st.sel === id);
      el.disabled = !!st.won;
      el.setAttribute("aria-pressed", st.sel === id ? "true" : "false");
      el.setAttribute("aria-label", `${id === "A" ? "แท่งสีเหลือง" : `แท่งยาว ${c.len} ช่อง`}${c.across ? "แนวนอน" : "แนวตั้ง"} แถว ${y + 1} ช่อง ${x + 1}`);
    }
    const sel = st.won ? null : st.sel;
    keys.forEach((b, i) => {
      const k = PARK_KEYS[i];
      b.disabled = !sel || !canStep(sel, k);
      b.classList.toggle("off", !!sel && (k.dx !== 0) !== cars[sel].across); // not this car's way at all
    });
    const stuck = !!sel && keys.every(b => b.disabled);
    let say = "";
    if (st.won) say = "";
    else if (!sel) say = st.hist.length ? "แตะเลือกแท่งต่อไป" : "แตะเลือกแท่งที่จะขยับ";
    else if (stuck) say = "แท่งนี้ติดอยู่ ลองขยับแท่งอื่นก่อน";
    else if (sel === "A") say = "เปิดทางแล้วกดขวาพาออก";
    else say = cars[sel].across ? "แท่งนี้เลื่อนได้ซ้ายขวา" : "แท่งนี้เลื่อนได้ขึ้นลง";
    line.innerHTML = say ? `<span class="say">${esc(say)}</span>` : "";
    line.classList.toggle("note", stuck);
    $(".tally", s).innerHTML = countHtml("ขยับ", st.hist.length, best);
    $(".undo", s).disabled = !st.hist.length || !!st.won;
    $(".reset", s).disabled = !st.won && !st.hist.length && !st.sel;
    wireReplay(s, st);
    lot.classList.toggle("won", !!st.won);
    $(".slot", s).innerHTML = st.won ? winBox("เลื่อนออกได้แล้ว!", [winNote("ขยับ", st.hist.length, best), bestLine(card)]) : "";
  }
  function pick(id) {
    if (st.won) return;
    st.sel = st.sel === id ? null : id;
    Sound.play("tap");
    paint();
  }
  function press(i) {
    const id = st.sel, k = PARK_KEYS[i];
    if (st.won || !id || !canStep(id, k)) return;
    const dir = k.dx || k.dy;
    // The same car again the same way, straight after: still the move it was.
    if (!(st.run && st.run.car === id && st.run.dir === dir)) {
      st.hist.push({ ...st.at });
      st.run = { car: id, dir };
      st.moves++;
    }
    // With the way out clear, one press to the right takes the yellow bar all the way out: the same spaces as
    // pressing right until it is out, so the same one move, and the count under it does not change.
    let steps = 1;
    if (id === "A" && dir > 0) {
      let free = 0;
      while (canStepFrom(id, k, st.at.A + free)) free++;
      if (st.at.A + free + cars.A.len === PARK_N) steps = free; // clear all the way to the edge
    }
    els[id].style.setProperty("--d", steps);
    st.at[id] += dir * steps;
    if (id === "A" && out()) {
      st.won = true; st.sel = null;
      Sound.play("win");
      wonLevel(card, { moves: st.moves }, st.hist.length);
      paint();
      els.A.classList.add("leave"); // drives off through the exit
      return;
    }
    Sound.play("rotate");
    paint();
  }
  keys.forEach((b, i) => (b.onclick = () => press(i)));
  $(".undo", s).onclick = () => {
    if (!st.hist.length || st.won) return;
    Object.assign(st, { at: st.hist.pop(), run: null });
    Sound.play("tap");
    paint();
  };
  $(".reset", s).onclick = () => {
    startOver(st);
    els.A.classList.remove("leave", "left-lot");
    Object.assign(st, { at: { ...startAt }, hist: [], sel: null, run: null });
    Sound.play("tap");
    paint();
  };
  wireHelp(s);
  paint();
  if (st.won) els.A.classList.add("left-lot"); // drawn again after the win: already gone
  return s;
}

/* ---------- ice slide card ("ลื่นน้ำแข็ง") ----------
   A square of ice with rocks on it. An arrow sends น้องป่อง sliding until the next space is a rock or the edge,
   and the level is won only by stopping on the flag: sliding over it does not count. Each press that moves is
   one move, the way content/puzzles/ice_slide.json counts; an arrow that would not move at all is faded.
   Taps only: nothing to drag, and never tilting the phone. The arrows are the ones of parking. */
const ICON_FLAG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 21V4"/><path d="M6 4h11l-2.5 4L17 12H6" fill="currentColor"/></svg>';
function iceSlideCard(card) {
  const grid = card.level.grid, n = grid.length, best = card.level.moves;
  const flat = grid.join(""), at = ch => [flat.indexOf(ch) % n, (flat.indexOf(ch) / n) | 0];
  const start = at("S"), goal = at("G");
  const rock = (x, y) => x < 0 || y < 0 || x >= n || y >= n || grid[y][x] === "#";
  const onGoal = ([x, y]) => x === goal[0] && y === goal[1];
  const st = card.st;
  if (!st.at) Object.assign(st, { at: start.slice(), hist: [], over: false, moves: 0 });
  const s = document.createElement("div");
  s.className = "inner ice";
  s.innerHTML = `${levelTag(card, n)}
    ${gameHead(card, 'พาน้องป่อง<span class="goal">หยุดบนธง</span>', "กดลูกศร น้องป่องจะไถลจนชนหินหรือขอบ")}
    <div class="game-line" role="status" aria-live="polite"></div>
    <div class="stage"><div class="board ice-board" style="--n:${n}"><div class="rink"></div></div></div>
    <div class="dock"><div class="park-keys ice-keys">${PARK_KEYS.map((k, i) => `<button class="op pkey" type="button" data-k="${i}" aria-label="ไถล${k.name}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${k.d}"/></svg></button>`).join("")}</div><div class="slot"></div></div>
    <div class="bar game-bar"><button class="ghost undo" type="button">${ICON_UNDO}ย้อน</button><span class="tally"></span><button class="ghost reset" type="button">${ICON_RESET}เริ่มใหม่</button></div>
    ${hint}`;
  const rink = $(".rink", s), line = $(".game-line", s), keys = [...s.querySelectorAll(".pkey")];
  let cells = "";
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const ch = grid[y][x];
    cells += `<span class="ice-cell${ch === "#" ? " rock" : ch === "G" ? " flag" : ""}" style="--x:${x};--y:${y}">${ch === "G" ? ICON_FLAG : ""}</span>`;
  }
  rink.innerHTML = `${cells}<span class="skater" aria-hidden="true">${face("happy")}</span>`;
  rink.setAttribute("role", "img");
  const skater = $(".skater", rink);
  /* Where a press of key k slides to from p, and whether it slid over the flag on the way. */
  function slide(p, k) {
    let [x, y] = p, over = false;
    while (!rock(x + k.dx, y + k.dy)) { x += k.dx; y += k.dy; if (onGoal([x, y])) over = true; }
    return { to: [x, y], d: Math.abs(x - p[0]) + Math.abs(y - p[1]), over: over && !onGoal([x, y]) };
  }
  function paint() {
    const [x, y] = st.at;
    skater.style.setProperty("--x", x);
    skater.style.setProperty("--y", y);
    rink.setAttribute("aria-label", `กระดานลื่นน้ำแข็ง ${n}×${n} น้องป่องอยู่แถว ${y + 1} ช่อง ${x + 1} ธงอยู่แถว ${goal[1] + 1} ช่อง ${goal[0] + 1}`);
    keys.forEach((b, i) => (b.disabled = !!st.won || !slide(st.at, PARK_KEYS[i]).d));
    let say = "";
    if (st.won) say = "";
    else if (st.over) say = "ไถลเลยธงไปแล้ว ต้องหยุดบนธงพอดี";
    else say = st.hist.length ? "ยังไม่ถึงธง ลองไถลต่อ" : "กดลูกศรให้น้องป่องไถล";
    line.innerHTML = say ? `<span class="say">${esc(say)}</span>` : "";
    line.classList.toggle("note", !!st.over && !st.won);
    $(".tally", s).innerHTML = countHtml("ไถล", st.hist.length, best);
    $(".undo", s).disabled = !st.hist.length || !!st.won;
    $(".reset", s).disabled = !st.hist.length;
    wireReplay(s, st);
    rink.classList.toggle("won", !!st.won);
    $(".slot", s).innerHTML = st.won ? winBox("หยุดบนธงได้แล้ว!", [winNote("ไถล", st.hist.length, best), bestLine(card)]) : "";
  }
  function press(i) {
    if (st.won) return;
    const m = slide(st.at, PARK_KEYS[i]);
    if (!m.d) return;
    st.hist.push(st.at);
    Object.assign(st, { at: m.to, over: m.over });
    st.moves++;
    skater.style.setProperty("--d", m.d);
    if (onGoal(m.to)) {
      st.won = true;
      Sound.play("win");
      wonLevel(card, { moves: st.moves }, st.hist.length);
    } else Sound.play("rotate");
    paint();
  }
  keys.forEach((b, i) => (b.onclick = () => press(i)));
  $(".undo", s).onclick = () => {
    if (!st.hist.length || st.won) return;
    skater.style.setProperty("--d", 1);
    Object.assign(st, { at: st.hist.pop(), over: false });
    Sound.play("tap");
    paint();
  };
  $(".reset", s).onclick = () => {
    if (!st.hist.length) return;
    skater.style.setProperty("--d", 1);
    startOver(st);
    Object.assign(st, { at: start.slice(), hist: [], over: false });
    Sound.play("tap");
    paint();
  };
  wireHelp(s);
  paint();
  return s;
}

/* ---------- tilt card ("เอียงกล่อง") ----------
   A square box with walls, balls and holes. An arrow tilts the box: every ball rolls that way together until a
   wall or another ball. A ball that reaches the open hole of its colour drops in, and a filled hole is floor.
   A tilt that would roll a ball onto another colour's open hole is refused: nothing moves, the box shakes and
   the card points at that ball and hole. Each press that moves a ball is one move, the way
   content/puzzles/tilt.json counts. Balls and holes take the colours and signs of WATER, so no one has to tell
   them apart by colour alone. Taps only: nothing to drag, and never tilting the phone. */
function tiltCard(card) {
  const grid = card.level.grid, n = grid.length, best = card.level.moves;
  const wall = (x, y) => x < 0 || y < 0 || x >= n || y >= n || grid[y][x] === "#";
  const start = {}, holes = {};
  grid.forEach((row, y) => [...row].forEach((ch, x) => {
    if (ch >= "A" && ch <= "Z") start[ch.toLowerCase()] = [x, y];
    else if (ch >= "a" && ch <= "z") holes[ch] = [x, y];
  }));
  const colours = Object.keys(start).sort();
  const holeAt = (x, y) => colours.find(c => holes[c][0] === x && holes[c][1] === y);
  const st = card.st;
  if (!st.balls) Object.assign(st, { balls: { ...start }, hist: [], blame: null, moves: 0 });
  /* One tilt the way of key k from balls (colour -> [x, y], or null once in its hole), one space at a time
     until nothing moves, as scripts/verify_puzzles.py does. Gives where each ball ends, how far it rolled and
     which dropped in, or the ball and hole that refuse it. */
  function roll(balls, k) {
    const at = {}, dist = {}, sunk = [];
    for (const c of colours) if (balls[c]) at[c] = balls[c].slice();
    for (let moved = true; moved;) {
      moved = false;
      for (const c of Object.keys(at).sort()) {
        const nx = at[c][0] + k.dx, ny = at[c][1] + k.dy;
        if (wall(nx, ny) || Object.values(at).some(p => p[0] === nx && p[1] === ny)) continue;
        moved = true;
        dist[c] = (dist[c] || 0) + 1;
        const h = holeAt(nx, ny);
        if (h && at[h]) { // an open hole
          if (h !== c) return { refused: { ball: c, hole: h } };
          delete at[c];
          sunk.push(c);
        } else at[c] = [nx, ny];
        break;
      }
    }
    const out = {};
    for (const c of colours) out[c] = at[c] || null;
    return { balls: out, dist, sunk, moved: Object.keys(dist).length > 0 };
  }
  const inHole = (balls, c) => !balls[c];
  const left = balls => colours.filter(c => !inHole(balls, c)).length;
  const s = document.createElement("div");
  s.className = "inner tilt";
  s.innerHTML = `${levelTag(card, n)}
    ${gameHead(card, 'เอียงกล่องให้ลูก<span class="goal">ลงหลุม</span>', "ลูกทุกลูกกลิ้งพร้อมกัน ลงได้เฉพาะหลุมสีเดียวกัน")}
    <div class="game-line" role="status" aria-live="polite"></div>
    <div class="stage"><div class="board tilt-board" style="--n:${n}"><div class="tray"></div></div></div>
    <div class="dock"><div class="park-keys tilt-keys">${PARK_KEYS.map((k, i) => `<button class="op pkey" type="button" data-k="${i}" aria-label="เอียง${k.name}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${k.d}"/></svg></button>`).join("")}</div><div class="slot"></div></div>
    <div class="bar game-bar"><button class="ghost undo" type="button">${ICON_UNDO}ย้อน</button><span class="tally"></span><button class="ghost reset" type="button">${ICON_RESET}เริ่มใหม่</button></div>
    ${hint}`;
  const box = $(".tilt-board", s), tray = $(".tray", s), line = $(".game-line", s), keys = [...s.querySelectorAll(".pkey")];
  const sign = c => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${waterOf(c).sign}</svg>`;
  let html = "";
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) html += `<span class="tilt-cell${grid[y][x] === "#" ? " wall" : ""}" style="--x:${x};--y:${y}"></span>`;
  html += '<span class="trail" hidden></span>'; // under the holes, so it ends at the ring
  for (const c of colours) html += `<span class="hole" data-c="${c}" style="--x:${holes[c][0]};--y:${holes[c][1]};--w:${waterOf(c).c}">${sign(c)}</span>`;
  for (const c of colours) html += `<span class="ball" data-c="${c}" style="--w:${waterOf(c).c};--ink:${waterOf(c).ink}">${sign(c)}</span>`;
  tray.innerHTML = html;
  tray.setAttribute("role", "img");
  const ballEl = Object.fromEntries(colours.map(c => [c, $(`.ball[data-c="${c}"]`, tray)]));
  const holeEl = Object.fromEntries(colours.map(c => [c, $(`.hole[data-c="${c}"]`, tray)]));
  const trail = $(".trail", tray);
  const colourName = c => "สี" + waterOf(c).name;
  function paint() {
    const b = st.balls;
    for (const c of colours) {
      const el = ballEl[c], p = b[c] || holes[c], sunk = inHole(b, c);
      el.style.setProperty("--x", p[0]);
      el.style.setProperty("--y", p[1]);
      el.classList.toggle("sunk", sunk);
      holeEl[c].classList.toggle("filled", sunk);
    }
    const bl = st.blame;
    for (const c of colours) {
      ballEl[c].classList.toggle("blame", !!bl && bl.ball === c);
      holeEl[c].classList.toggle("blame", !!bl && bl.hole === c);
    }
    trail.hidden = !bl;
    if (bl) { // from the ball to the hole it would fall into: always one row or one column
      const [x0, y0] = b[bl.ball], [x1, y1] = holes[bl.hole];
      trail.className = "trail " + (y0 === y1 ? "across" : "down");
      trail.style.setProperty("--x", Math.min(x0, x1));
      trail.style.setProperty("--y", Math.min(y0, y1));
      trail.style.setProperty("--len", Math.abs(x1 - x0) + Math.abs(y1 - y0));
    }
    const say = colours.map(c => inHole(b, c) ? `ลูก${colourName(c)}ลงหลุมแล้ว` : `ลูก${colourName(c)}อยู่แถว ${b[c][1] + 1} ช่อง ${b[c][0] + 1} หลุมอยู่แถว ${holes[c][1] + 1} ช่อง ${holes[c][0] + 1}`);
    tray.setAttribute("aria-label", `กล่อง ${n}×${n} ` + say.join(" "));
    keys.forEach((el, i) => {
      const r = st.won ? null : roll(b, PARK_KEYS[i]);
      el.disabled = !r || !(r.refused || r.moved);
    });
    const rest = left(b);
    let text = "";
    if (st.won) text = "";
    else if (bl) text = `เอียง${bl.way}ไม่ได้ ลูก${colourName(bl.ball)}จะตกหลุม${colourName(bl.hole)}`;
    else if (!st.hist.length) text = "กดลูกศรเพื่อเอียงกล่อง";
    else text = rest < colours.length ? `ลงหลุมแล้ว ${colours.length - rest} ลูก เหลืออีก ${rest} ลูก` : "ยังไม่มีลูกลงหลุม ลองเอียงทางอื่น";
    line.innerHTML = text ? `<span class="say">${esc(text)}</span>` : "";
    line.classList.toggle("note", !!bl);
    $(".tally", s).innerHTML = countHtml("เอียง", st.hist.length, best);
    $(".undo", s).disabled = !st.hist.length || !!st.won;
    $(".reset", s).disabled = !st.hist.length;
    wireReplay(s, st);
    tray.classList.toggle("won", !!st.won);
    $(".slot", s).innerHTML = st.won ? winBox("ลงหลุมครบแล้ว!", [winNote("เอียง", st.hist.length, best), bestLine(card)]) : "";
  }
  function press(i) {
    if (st.won) return;
    const k = PARK_KEYS[i], r = roll(st.balls, k);
    if (r.refused) {
      st.blame = { ...r.refused, way: k.name };
      paint();
      replay(box, "shake");
      return;
    }
    st.blame = null;
    if (!r.moved) return paint();
    st.hist.push(st.balls);
    st.balls = r.balls;
    st.moves++;
    for (const c of colours) ballEl[c].style.setProperty("--d", r.dist[c] || 1);
    if (!left(st.balls)) {
      st.won = true;
      Sound.play("win");
      wonLevel(card, { moves: st.moves }, st.hist.length);
    } else Sound.play(r.sunk.length ? "found" : "rotate");
    paint();
  }
  keys.forEach((el, i) => (el.onclick = () => press(i)));
  const back = balls => {
    for (const c of colours) ballEl[c].style.setProperty("--d", 1);
    Object.assign(st, { balls, blame: null });
    Sound.play("tap");
    paint();
  };
  $(".undo", s).onclick = () => { if (st.hist.length && !st.won) back(st.hist.pop()); };
  $(".reset", s).onclick = () => { if (st.hist.length) { startOver(st); st.hist = []; back({ ...start }); } };
  wireHelp(s);
  paint();
  return s;
}

/* ---------- rest card ---------- */
function restCard(card) {
  const s = document.createElement("div");
  s.className = "inner rest";
  s.innerHTML = `<div class="tag"><span class="dot"></span>พักสายตา</div>
    <div class="rest-face">${face("sleepy")}</div>
    <p class="rest-text">${esc(card.text)}</p>
    <div class="ring" aria-hidden="true"><svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="45"/><circle class="left" cx="50" cy="50" r="45" pathLength="100"/></svg><span class="secs"></span></div>
    <div class="rest-foot"><p class="rest-status"></p><p class="sr" role="status" aria-live="polite"></p></div>`;
  paintRest(card, s);
  return s;
}
function paintRest(card, s = nodes.has(cards.indexOf(card)) && nodes.get(cards.indexOf(card))) {
  if (!s) return;
  const open = RestClock.open();
  const running = open && !card.st.done;
  const secs = running ? Math.max(0, Math.ceil(open.left / 1000)) : 0;
  $(".secs", s).textContent = running ? secs : "";
  $(".left", s).style.strokeDashoffset = running ? 100 * (1 - open.left / open.total) : 0;
  $(".rest-status", s).textContent = card.st.done ? "ปัดต่อได้แล้ว" : "พักก่อนนะ ครบเวลาแล้วปัดต่อได้";
  // Screen readers hear the message once, then the time every ten seconds rather than every second.
  const live = $(".sr", s);
  if (card.st.done) live.textContent = "ปัดต่อได้แล้ว";
  else if (running && (!live.textContent || secs % 10 === 0)) live.textContent = (live.textContent ? "" : card.text + " ") + `เหลือเวลา ${secs} วินาที`;
}
function newRestCard() {
  const list = CONFIG.breaks.length ? CONFIG.breaks : [["brk-0000", "พักสายตาสักครู่นะ"]];
  const [id, text] = list[Math.floor(Math.random() * list.length)];
  return { kind: "break", id, text, rev: shortHash(text), st: {} };
}
function restoredRestCard({ id, rev }) {
  const found = CONFIG.breaks.find(m => m[0] === id);
  return { kind: "break", id, rev, text: found ? found[1] : "พักสายตาสักครู่นะ", st: {} };
}

/* ---------- feed: only a few cards are in the DOM at a time ---------- */
const RENDER = { quiz: quizCard, pipes: pipesCard, flow: flowCard, wordsearch: wordCard, make_24: make24Card, water_sort: waterCard, parking: parkingCard, ice_slide: iceSlideCard, tilt: tiltCard, break: restCard };
const feed = $("#feed");
const cards = [];
const nodes = new Map();
const BEHIND = 1, AHEAD = 2;
let current = 0, filling = false;

function syncDom() {
  const low = current - BEHIND, high = current + AHEAD;
  for (const [i, el] of nodes) if (i < low || i > high) { el.remove(); nodes.delete(i); }
  for (let i = Math.max(0, low); i <= high && i < cards.length; i++) {
    if (nodes.has(i)) continue;
    const el = document.createElement("section");
    el.className = "slide";
    el.style.setProperty("--i", i);
    el.dataset.kind = cards[i].kind;
    el.appendChild(RENDER[cards[i].kind](cards[i]));
    feed.appendChild(el);
    nodes.set(i, el);
  }
}
async function fill() {
  if (filling) return;
  filling = true;
  try {
    // Closed the app in the middle of a rest and came back in time: carry on with what was left of it.
    if (!cards.length && RestClock.open()) { cards.push(restoredRestCard(RestClock.open())); syncDom(); enterRest(); }
    while (cards.length <= current + AHEAD) {
      const asked = !cards.length && sharedAsk ? sharedAsk : null;
      if (asked) sharedAsk = null;
      const card = (asked && await sharedCard(asked)) || await newCard();
      if (!card) break;
      if (!card.shared && offCategories().has(cardCategory(card))) { putBack(card); continue; } // switched off while it was loading
      if (!cards.length) card.st.t0 = performance.now();
      cards.push(card);
      syncDom();
    }
  } finally { filling = false; }
  if (!cards.length) $("#status").textContent = "โหลดเนื้อหาไม่ได้ ต่อเน็ตแล้วเปิดใหม่อีกครั้ง";
  else { const status = $("#status"); if (status) status.remove(); }
}
function onScroll() {
  const height = feed.clientHeight;
  if (!height) return;
  const at = Math.round(feed.scrollTop / height);
  // A rest card cannot be jumped over, whatever moved the feed.
  const stop = pendingRest();
  if (stop >= 0 && at > stop) { feed.scrollTop = stop * height; return; }
  if (at === current) { enterRest(); return; }
  if (cards[current] && cards[current].kind === "break" && cards[current].st.done) RestClock.settle(true);
  // Everything before the card on screen has been passed: skipped cards count as played.
  for (let i = 0; i < at && i < cards.length; i++) { logLeft(cards[i]); markPlayed(cards[i]); }
  current = at;
  if (cards[at] && !cards[at].st.t0) cards[at].st.t0 = performance.now();
  if (!cards[at] || cards[at].kind !== "break") Sound.play("swipe"); // a rest starts in silence
  syncDom();
  fill();
  enterRest();
}

/* ---------- when a rest card comes up, and what it holds back ---------- */
let restLocked = -1;
const pendingRest = () => cards.findIndex(c => c.kind === "break" && !c.st.done);
/* Nothing on screen would be lost by starting the page over: no answer to read, no level under way, no rest, nothing open. */
function nothingInHand() {
  const card = cards[current];
  return !!card && !feed.inert && card.kind !== "break" && card.st.pick === undefined && !card.st.moves;
}
const atRest = () => { const h = feed.clientHeight; return !!h && Math.abs(feed.scrollTop - current * h) < 2; };
function redrawAhead() {
  for (const [i, el] of nodes) if (i > current) { el.remove(); nodes.delete(i); }
  syncDom();
}
/* Stops the finger, the wheel and the keyboard. Anything that gets through anyway is put back by the scroll listener. */
const holdStill = e => e.preventDefault();
const SCROLL_KEYS = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "]);
const holdKeys = e => { if (SCROLL_KEYS.has(e.key) && e.target.tagName !== "BUTTON") e.preventDefault(); };
function unlockRest() {
  restLocked = -1;
  feed.classList.remove("locked");
  feed.removeEventListener("touchmove", holdStill);
  feed.removeEventListener("wheel", holdStill);
  document.removeEventListener("keydown", holdKeys);
}
/* The card on screen is a rest that has not run yet: start it, and hold the feed still. */
function enterRest() {
  const card = cards[current];
  if (!card || card.kind !== "break" || card.st.done || restLocked === current || !atRest()) return;
  if (!RestClock.open()) RestClock.begin(card.id, card.rev);
  restLocked = current;
  feed.classList.add("locked");
  feed.addEventListener("touchmove", holdStill, { passive: false });
  feed.addEventListener("wheel", holdStill, { passive: false });
  document.addEventListener("keydown", holdKeys);
  paintRest(card);
}
function restDone(card) {
  card.st.done = true;
  unlockRest();
  paintRest(card);
}
function restTick() {
  if (document.hidden) return;
  const wasOpen = !!RestClock.open();
  const wasAway = RestClock.read(Date.now(), (!feed.inert || (Arcade.playing() && settings.arcadeRest !== false)) && cards.length > 0);
  const at = pendingRest();
  if (wasOpen && at >= 0) {
    if (!RestClock.open()) restDone(cards[at]); // away for long enough: that was the rest
    else if (RestClock.open().left <= 0) { RestClock.finish(); restDone(cards[at]); }
    else paintRest(cards[at]);
  } else if (wasAway && at > current) {
    cards.splice(at, 1); // that was the rest too, even though the card had not come up yet
    redrawAhead();
  } else if (at < 0 && RestClock.due() && atRest()) {
    // Only ever the next card: whatever is on screen now is left to finish in peace.
    cards.splice(current + 1, 0, newRestCard());
    redrawAhead();
  }
  enterRest();
}
/* At the end of a round in the arcade, when a rest is due: the rest card is the next card, and the feed goes to it. */
function restNow() {
  if (pendingRest() < 0 && RestClock.due()) { cards.splice(current + 1, 0, newRestCard()); redrawAhead(); }
  const at = pendingRest();
  if (at >= 0) feed.scrollTo({ top: at * feed.clientHeight, behavior: "instant" });
}
function restSettingsChanged() {
  const at = pendingRest();
  if (settings.breakOn === false && at >= 0) {
    if (restLocked === at || RestClock.open()) { RestClock.cancel(); restDone(cards[at]); }
    else { cards.splice(at, 1); redrawAhead(); }
  }
}
/* A category went off or on, here or on another device. The card on screen stays; cards not reached yet follow. */
let appliedOff = [...offCategories()].sort().join();
function categoriesChanged() {
  const now = offCategories();
  const sig = [...now].sort().join();
  if (sig === appliedOff) return;
  appliedOff = sig;
  if (pools.quiz) Object.assign(pools.quiz, { order: shuffled(CONFIG.quiz), at: 0, queue: [] });
  for (let i = cards.length - 1; i > current; i--) {
    const card = cards[i];
    if (card.kind === "break" || !now.has(cardCategory(card))) continue;
    putBack(card);
    cards.splice(i, 1);
  }
  redrawAhead();
  fill();
}
/* The tier or the weights changed. The card on screen stays; cards not reached yet that no longer fit are swapped. */
function feedOptionsChanged() {
  const w = feedWeights(), pin = pinnedTier(), off = offCategories();
  for (let i = cards.length - 1; i > current; i--) {
    const card = cards[i];
    if (card.kind === "break") continue;
    const wrongTier = pin && card.tier && card.tier !== pin && CONFIG[card.kind][pin];
    if (kindIsOn(card.kind, off, w) && !wrongTier) continue;
    putBack(card);
    cards.splice(i, 1);
  }
  redrawAhead();
  fill();
}
setInterval(restTick, 1000);
document.addEventListener("visibilitychange", () => { if (document.hidden) RestClock.away(); else restTick(); });
window.addEventListener("pagehide", () => RestClock.away());
let scrollQueued = false;
feed.addEventListener("scroll", () => {
  if (restLocked >= 0) { // a programmatic scroll, or a gesture that started before the rest did
    const top = restLocked * feed.clientHeight;
    if (Math.abs(feed.scrollTop - top) > 1) feed.scrollTop = top;
    return;
  }
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(() => { scrollQueued = false; onScroll(); });
}, { passive: true });
let lastHeight = feed.clientHeight;
window.addEventListener("resize", () => {
  if (feed.clientHeight !== lastHeight) { lastHeight = feed.clientHeight; feed.scrollTop = current * lastHeight; }
});
// Safari ignores user-scalable=no; pinch gestures are stopped here instead.
for (const g of ["gesturestart", "gesturechange"]) document.addEventListener(g, e => e.preventDefault(), { passive: false });

/* ---------- offline ---------- */
if ("serviceWorker" in navigator) {
  const hadWorker = !!navigator.serviceWorker.controller;
  let updated = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => { updated = hadWorker; });
  // A new build took over: move to it the next time the app is out of sight, never mid-game.
  document.addEventListener("visibilitychange", () => { if (document.hidden && updated) location.reload(); });
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

/* ---------- the arcade (members): games for fun, a page of their own, not in the feed (docs/arcade-design.md) ----------
   The games are in the app but locked: each one is a file the build locked with a key (build_app.py), and the key is only given by a
   server that checks membership itself. The app opens a game in memory and runs it from a blob. Editing what the device remembers about
   membership therefore opens nothing: without the key there is nothing to run. A key is kept for a while for playing offline (in the Keychain
   or Keystore on a phone, in memory on the web) and never longer than the membership or 30 days.
   A game file sets globalThis.PINGPONG_GAME = { id, create(env), logic }; create gives { tap, update(dt), draw(ctx), score, over, started }. */
const ARCADE = CONFIG.arcade;
const ARCADE_KEY_NAME = "pingpong-arcade-key"; // in secure storage
const ARCADE_KEY_DAYS = 30; // how long a key may be kept for playing offline
const ARCADE_FRESH_MS = 10 * 60000; // within this a key already in memory is used without asking again

const arcadeBytes = hex => Uint8Array.from(hex.match(/../g) || [], pair => parseInt(pair, 16));
function arcadeSame(a, b) { // the same bytes, without stopping at the first difference
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}
/* Opens what arcade_seal() in build_app.py locked: nonce (16) + code xor an HMAC-SHA256 keystream + tag (32). A wrong key or a changed byte throws. */
async function arcadeOpen(bytes, keyHex) {
  if (!/^[0-9a-f]{64}$/.test(keyHex) || bytes.length < 48) throw new Error("arcade: bad key or file");
  const hmac = await crypto.subtle.importKey("raw", arcadeBytes(keyHex), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sign = data => crypto.subtle.sign("HMAC", hmac, data).then(r => new Uint8Array(r));
  const nonce = bytes.slice(0, 16), locked = bytes.slice(16, bytes.length - 32), tag = bytes.slice(bytes.length - 32);
  const label = new TextEncoder().encode("pingpong-arcade-tag");
  const checked = new Uint8Array(label.length + 16 + locked.length);
  checked.set(label); checked.set(nonce, label.length); checked.set(locked, label.length + 16);
  if (!arcadeSame(await sign(checked), tag)) throw new Error("arcade: wrong key");
  const plain = new Uint8Array(locked.length), block = new Uint8Array(20);
  block.set(nonce);
  for (let start = 0; start < locked.length; start += 32) {
    new DataView(block.buffer).setUint32(16, start / 32, false);
    const stream = await sign(block);
    for (let i = 0; i < 32 && start + i < locked.length; i++) plain[start + i] = locked[start + i] ^ stream[i];
  }
  return plain;
}

/* ---------- the key ---------- */
const ArcadeKey = (() => {
  let memory = null; // { key, kid, until, at }
  const usable = k => k && k.kid === ARCADE.kid && k.until > Date.now();
  async function saved() {
    if (!Native.on) return null;
    try { const raw = await Native.secureStorage.getItem(ARCADE_KEY_NAME); const k = raw && JSON.parse(raw); return usable(k) && /^[0-9a-f]{64}$/.test(k.key) ? k : null; } catch { return null; }
  }
  const keep = k => { if (Native.on) Native.secureStorage.setItem(ARCADE_KEY_NAME, JSON.stringify(k)).catch(() => {}); };
  const forget = () => { memory = null; if (Native.on) Native.secureStorage.removeItem(ARCADE_KEY_NAME).catch(() => {}); };
  /* { key } or { problem: "offline" | "member" | "old" | "server" }. The server decides; what is kept is only for when it cannot be asked. */
  async function get() {
    if (memory && usable(memory) && Date.now() - memory.at < ARCADE_FRESH_MS) return { key: memory.key };
    const answer = await Net.arcadeKey(ARCADE.kid);
    if (answer.key) {
      const until = Math.min(Date.parse(answer.expires_at) || 0, Date.now() + ARCADE_KEY_DAYS * 86400000);
      memory = { key: answer.key, kid: ARCADE.kid, until, at: Date.now() };
      keep(memory);
      return { key: answer.key };
    }
    if (answer.problem === "member" || answer.problem === "old") { forget(); return { problem: answer.problem }; }
    const kept = memory && usable(memory) ? memory : await saved();
    if (kept) { memory = { ...kept, at: Date.now() - ARCADE_FRESH_MS + 60000 }; return { key: kept.key }; } // asked again in a minute
    return { problem: answer.problem };
  }
  return { get, forget };
})();

/* ---------- opening a game ---------- */
const arcadeOpened = new Map();
/* { game } with the game's code run, or { problem }. */
async function arcadeLoad(meta) {
  if (arcadeOpened.has(meta.id)) return { game: arcadeOpened.get(meta.id) };
  const got = await ArcadeKey.get();
  if (!got.key) return { problem: got.problem };
  let bytes;
  try { const r = await fetch(meta.file); if (!r.ok) throw new Error("file"); bytes = new Uint8Array(await r.arrayBuffer()); } catch { return { problem: "offline" }; }
  let code;
  try { code = await arcadeOpen(bytes, got.key); } catch { ArcadeKey.forget(); return { problem: "old" }; } // a key that does not fit: another build's
  delete globalThis.PINGPONG_GAME;
  const url = URL.createObjectURL(new Blob([code], { type: "text/javascript" }));
  try {
    await new Promise((resolve, reject) => { const s = document.createElement("script"); s.src = url; s.onload = () => { s.remove(); resolve(); }; s.onerror = () => { s.remove(); reject(new Error("script")); }; document.head.appendChild(s); });
  } catch { return { problem: "server" }; } finally { URL.revokeObjectURL(url); }
  const game = globalThis.PINGPONG_GAME;
  delete globalThis.PINGPONG_GAME;
  if (!game || game.id !== meta.id || typeof game.create !== "function") return { problem: "server" };
  arcadeOpened.set(meta.id, game);
  return { game };
}

/* ---------- the best score of each game, on this device only ---------- */
const ArcadeBest = {
  get: id => { const v = (store.get(KEYS.arcadeBest, {}) || {})[id]; return Number.isInteger(v) && v > 0 ? v : 0; },
  set(id, n) { const all = store.get(KEYS.arcadeBest, {}) || {}; if (Number.isInteger(n) && n > (Number.isInteger(all[id]) ? all[id] : 0)) { all[id] = n; store.set(KEYS.arcadeBest, all); return true; } return false; },
  reset() { store.remove(KEYS.arcadeBest); },
};

/* ---------- drawing helpers for the games ---------- */
const arcadeFaces = {};
function arcadeFaceImage(name) {
  if (arcadeFaces[name]) return arcadeFaces[name];
  const line = getComputedStyle(document.documentElement).getPropertyValue("--mascot-line").trim() || "#111114";
  const svg = FACE[name].replace("aria-hidden=\"true\"", "xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\"").split("var(--mascot-line)").join(line);
  const image = new Image();
  image.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  return (arcadeFaces[name] = image);
}
const arcadeDark = () => { const m = /\d+/g, c = (getComputedStyle(document.body).backgroundColor.match(m) || [255, 255, 255]).map(Number); return (c[0] * 299 + c[1] * 587 + c[2] * 114) / 1000 < 128; };
function arcadeColors(dark) {
  return dark
    ? { waterTop: "#14304A", waterBottom: "#0B1B2C", bamboo: "#B58B4C", bambooLine: "#7A5A2B", bambooLight: "#D2AE73",
        skyTop: "#14182E", skyBottom: "#27214A", ground: "#2A2540", groundLine: "#FFC233", go: "#5FD3A2", mark: "#6B6A85", shadow: "rgba(0,0,0,.35)",
        blocks: ["#FFC233", "#FF6A5A", "#2FB5A5", "#7A7AF0"], edge: "rgba(255,255,255,.35)", guide: "rgba(255,255,255,.35)" }
    : { waterTop: "#BFE6F7", waterBottom: "#7CC4E4", bamboo: "#C99A55", bambooLine: "#8F6A32", bambooLight: "#E3C28A",
        skyTop: "#DCEFFF", skyBottom: "#F6FBFF", ground: "#E8DFC8", groundLine: "#FFC233", go: "#13824A", mark: "#9AA0B4", shadow: "rgba(0,0,0,.14)",
        blocks: ["#FFC233", "#FF6A5A", "#2FB5A5", "#5B5BE0"], edge: "rgba(0,0,0,.22)", guide: "rgba(0,0,0,.28)" };
}

/* ---------- playing ---------- */
let arcadePlaying = false; // time in a game counts for the rest clock (see restTick in app.js)
const STEP = 1 / 60;
function playGame(meta, module, layerEl) {
  const stage = $(".game-stage", layerEl), canvas = $("canvas", layerEl), scoreEl = $(".game-score", layerEl), overlay = $(".game-overlay", layerEl);
  const ctx = canvas.getContext("2d");
  let game = null, raf = 0, last = 0, acc = 0, paused = false, ended = false, shown = -1, closed = false;
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seedRand = () => Math.random();
  function size() {
    const dpr = Math.min(3, window.devicePixelRatio || 1), w = stage.clientWidth, h = stage.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w, h };
  }
  function fresh() {
    const { w, h } = size();
    game = module.create({ w, h, rand: seedRand, colors: arcadeColors(arcadeDark()), calm, drawMascot: (c, name, x, y, s) => { const img = arcadeFaceImage(name); if (img.complete && img.naturalWidth) c.drawImage(img, x, y, s, s); } });
    ended = false; paused = false; shown = -1; acc = 0; last = 0;
    overlay.hidden = false;
    overlay.innerHTML = `<div class="game-card"><p class="game-hint"><b>แตะที่ไหนก็ได้เพื่อเริ่ม</b></p><p class="muted">${esc(meta.note)}</p></div>`;
    paint();
  }
  function paint() { game.draw(ctx); const n = game.score(); if (n !== shown) { shown = n; scoreEl.textContent = n; } }
  function setPlaying() { arcadePlaying = !!game && game.started() && !game.over() && !paused && !closed; }
  function finish() {
    ended = true; setPlaying();
    const n = game.score(), beat = ArcadeBest.set(meta.id, n), best = ArcadeBest.get(meta.id);
    const restDue = settings.arcadeRest !== false && RestClock.due();
    Sound.play("wrong");
    overlay.hidden = false;
    overlay.innerHTML = `<div class="game-card" role="status"><p class="game-over-title">${n ? "จบรอบแล้ว" : "ลองอีกครั้งนะ"}</p>
      <p class="game-final"><b>${n}</b> <span class="muted">คะแนน</span></p>
      <p class="muted">${beat && n ? "คะแนนสูงสุดใหม่!" : `คะแนนสูงสุด ${best}`}</p>
      ${restDue ? '<p class="small">เล่นมานานแล้ว พักสายตาสักครู่นะ</p>' : ""}
      <div class="stack">${restDue ? '<button type="button" class="btn primary" data-rest>พักสายตา</button><button type="button" class="btn" data-again>เล่นอีกครั้ง</button>' : '<button type="button" class="btn primary" data-again>เล่นอีกครั้ง</button>'}
      <button type="button" class="btn" data-game-close>กลับไปเลือกเกม</button></div></div>`;
    const first = $("[data-rest], [data-again]", overlay); if (first) first.focus({ preventScroll: true });
  }
  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (paused || ended) { last = now; return; }
    const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
    last = now;
    if (game.started()) {
      acc += dt;
      while (acc >= STEP) { game.update(STEP); acc -= STEP; }
    }
    paint();
    if (game.over() && !ended) finish();
    setPlaying();
  }
  function tap() {
    if (paused || ended) return;
    const was = game.started();
    game.tap();
    if (!was) { overlay.hidden = true; last = 0; }
    Sound.play("tap");
    setPlaying();
  }
  function pause(on) {
    if (ended || !game.started() || game.over()) return;
    paused = on; setPlaying();
    if (on) { overlay.hidden = false; overlay.innerHTML = '<div class="game-card"><p class="game-over-title">หยุดพักอยู่</p><div class="stack"><button type="button" class="btn primary" data-resume>เล่นต่อ</button><button type="button" class="btn" data-game-close>กลับไปเลือกเกม</button></div></div>'; const b = $("[data-resume]", overlay); if (b) b.focus({ preventScroll: true }); }
    else { overlay.hidden = true; last = 0; }
  }
  const stopAll = () => { closed = true; arcadePlaying = false; cancelAnimationFrame(raf); document.removeEventListener("visibilitychange", onHide); window.removeEventListener("resize", onResize); document.removeEventListener("keydown", onKey); };
  const onHide = () => { if (document.hidden) pause(true); };
  const onResize = () => { if (!game.started() || ended) { fresh(); } };
  const onKey = e => { if ((e.key === " " || e.key === "Enter" || e.key === "ArrowUp") && e.target.tagName !== "BUTTON") { e.preventDefault(); tap(); } };
  layerEl.addEventListener("click", e => {
    if (e.target.closest("[data-game-close]") || e.target.closest("[data-game-back]")) { Sound.play("tap"); stopAll(); closeLayer(layerEl); return; }
    if (e.target.closest("[data-pause]")) { Sound.play("tap"); pause(!paused); return; }
    if (e.target.closest("[data-resume]")) { Sound.play("tap"); pause(false); return; }
    if (e.target.closest("[data-again]")) { Sound.play("tap"); fresh(); return; }
    if (e.target.closest("[data-rest]")) { Sound.play("tap"); stopAll(); closeLayer(layerEl); const list = document.querySelector(".layer.arcade"); if (list) closeLayer(list); restNow(); return; }
  });
  stage.addEventListener("pointerdown", e => { if (e.target.closest("button")) return; e.preventDefault(); tap(); });
  document.addEventListener("visibilitychange", onHide);
  window.addEventListener("resize", onResize);
  document.addEventListener("keydown", onKey);
  layerEl.stopGame = stopAll; // closing the layer from outside (Android back) stops the loop too
  fresh();
  raf = requestAnimationFrame(frame);
}

/* ---------- the page of games ---------- */
const GAME_ICON = '<rect x="2.5" y="7" width="19" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4"/><circle cx="15.5" cy="11.5" r=".6"/><circle cx="18" cy="13.5" r=".6"/>';
const arcadeLockedText = "เกมของป่องเพลินเป็นสิทธิ์ของสมาชิก ตอนนี้ยังสมัครสมาชิกไม่ได้ เมื่อเปิดให้สมัคร จะเล่นได้ที่นี่ เนื้อหาและปริศนาในฟีดเล่นได้ฟรีเหมือนเดิม";
const ARCADE_PROBLEMS = {
  offline: "ครั้งแรกต้องต่อเน็ตก่อนถึงจะเล่นเกมนี้ได้ ต่อเน็ตแล้วลองอีกครั้ง",
  member: "ตอนนี้ยังไม่เป็นสมาชิก เกมนี้เป็นสิทธิ์ของสมาชิก",
  old: "ต้องอัปเดตแอพก่อนถึงจะเล่นเกมนี้ได้",
  server: "ต่อเซิร์ฟเวอร์ไม่ได้ ตรวจว่าต่อเน็ตอยู่ แล้วลองอีกครั้ง",
};
function arcadeRowHtml(meta, member) {
  const best = ArcadeBest.get(meta.id);
  return `<button type="button" class="set-item" data-game="${esc(meta.id)}"><span class="set-tile t-ping set-face" aria-hidden="true">${FACE[meta.face] || FACE.happy}</span>
    <span class="set-text"><b>${esc(meta.name)}</b><span class="muted">${esc(meta.note)}${best ? ` · คะแนนสูงสุด ${best}` : ""}</span></span>${member ? setIcon("chev", "set-chev") : SET_LOCK_BADGE}</button>`;
}
function arcadePageHtml() {
  const member = isMember();
  return `${subHead(ARCADE.name, "ฟีด", "data-arcade-close")}
    <p class="muted small">เกมเล่นเพลิน แตะมือเดียวก็เล่นได้ คะแนนสูงสุดเก็บไว้ในเครื่องนี้เท่านั้น</p>
    ${setGroup("", ARCADE.games.map(g => arcadeRowHtml(g, member)).join(""))}
    ${member ? setGroup("", setSwitchRow({ icon: "moon", tone: "t-teal", title: "การ์ดพักสายตาในเกม", sub: "เล่นนานแล้ว การ์ดพักจะขึ้นตอนจบรอบ ไม่ขัดกลางรอบ", name: "arcade-rest", value: settings.arcadeRest !== false })) : ""}`;
}
function openArcade() {
  if (document.querySelector(".layer.arcade")) return;
  const el = showLayer("page arcade", arcadePageHtml());
  el.addEventListener("click", async e => {
    if (e.target.closest("[data-arcade-close]")) { Sound.play("tap"); closeLayer(el); return; }
    const sw = e.target.closest("[data-switch='arcade-rest']");
    if (sw) { const on = sw.getAttribute("aria-checked") !== "true"; sw.setAttribute("aria-checked", on); saveSettings({ arcadeRest: on }); Sound.play("tap"); return; }
    const row = e.target.closest("[data-game]");
    if (!row) return;
    Sound.play("tap");
    if (!isMember()) { await ask({ title: "เกมของสมาชิก", text: arcadeLockedText, buttons: [{ label: "ตกลง", kind: "primary", value: true }] }); return; }
    const meta = ARCADE.games.find(g => g.id === row.dataset.game);
    if (!meta || row.disabled) return;
    row.disabled = true;
    const opened = await arcadeLoad(meta);
    row.disabled = false;
    if (!opened.game) { toast(ARCADE_PROBLEMS[opened.problem] || ARCADE_PROBLEMS.server); if (opened.problem === "member") Net.myMembership(); return; }
    const gameEl = showLayer("game", `<div class="game-bar"><button type="button" class="btn-back sub-back" data-back data-game-back aria-label="กลับไปเลือกเกม">${setIcon("back")}<span>เกม</span></button>
      <h2>${esc(meta.name)}</h2><button type="button" class="game-pause" data-pause aria-label="หยุดพัก"><svg class="si" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg></button><span class="game-score" role="status" aria-label="คะแนน">0</span></div>
      <div class="game-stage"><canvas aria-label="${esc(meta.name)}" role="img"></canvas><div class="game-overlay"></div></div>`);
    playGame(meta, opened.game, gameEl);
  });
}
const Arcade = { open: openArcade, playing: () => arcadePlaying };

/* ---------- overlays: first-run consent, settings, legal text, confirmations ---------- */
const overlayRoot = $("#overlays");
const GEAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-2.8 1.2V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-2.9-1.1l-.1.1a2 2 0 1 1-2.8-2.9l.1-.1a1.7 1.7 0 0 0-1.2-2.8H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.1-2.9l-.1-.1a2 2 0 1 1 2.9-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>';
const iosStandalone = /iP(hone|ad|od)/.test(navigator.userAgent) && (navigator.standalone === true || matchMedia("(display-mode: standalone)").matches);

/* A full page has its own copy of the sky (gold stars in the premium theme, hidden in the others): the page covers the one behind the
   feed, and the player previewing or using the theme should see it move here too. Set a page's content with this, so the sky stays. */
function fillLayer(el, html) {
  el.innerHTML = html;
  if (!el.classList.contains("page")) return;
  const sky = document.createElement("div");
  sky.className = "sky";
  sky.setAttribute("aria-hidden", "true");
  sky.innerHTML = '<i class="shoot a"></i><i class="shoot b"></i>';
  el.appendChild(sky);
}
function showLayer(className, html) {
  const el = document.createElement("div");
  el.className = "layer " + className;
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  fillLayer(el, html);
  overlayRoot.appendChild(el);
  feed.inert = true;
  const first = el.querySelector("h2");
  if (first) { first.tabIndex = -1; first.focus({ preventScroll: true }); }
  return el;
}
function closeLayer(el) {
  el.remove();
  if (!overlayRoot.children.length) feed.inert = false;
}
function toast(text) {
  const el = document.createElement("div");
  el.className = "toast";
  el.setAttribute("role", "status");
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4500);
}
/* Resolves with the value of the chosen button. Cancel-like buttons come last; one whose value is false is also what
   the Android back button presses. A question with no false answer cannot be dismissed that way. */
function ask({ title, text, buttons }) {
  return new Promise(resolve => {
    const el = showLayer("sheet", `<div class="sheet-box"><h2>${esc(title)}</h2><p>${esc(text)}</p><div class="stack">${
      buttons.map((b, i) => `<button type="button" class="btn ${b.kind || ""}" data-i="${i}"${b.value === false ? " data-back" : ""}>${esc(b.label)}</button>`).join("")}</div></div>`);
    el.addEventListener("click", e => {
      const b = e.target.closest("[data-i]");
      if (!b) return;
      Sound.play("tap");
      closeLayer(el);
      resolve(buttons[+b.dataset.i].value);
    });
  });
}

async function showLegal() {
  const el = showLayer("page", `${subHead("ข้อกำหนดและความเป็นส่วนตัว", "ตั้งค่า")}<div class="legal">กำลังเปิด...</div>`);
  $(".btn-back", el).onclick = () => { Sound.play("tap"); closeLayer(el); };
  try {
    const r = await fetch(CONFIG.legal);
    if (!r.ok) throw new Error();
    $(".legal", el).innerHTML = await r.text(); // our own build output, escaped by build_app.py
  } catch { $(".legal", el).textContent = "เปิดเอกสารไม่ได้ ต่อเน็ตแล้วลองอีกครั้ง"; }
}

/* ---------- first run, and again whenever the document version changes ---------- */
const CLOUDFLARE_NOTE = "เปิดสถิติโดยไม่เข้าสู่ระบบ Cloudflare จะเห็น IP และข้อมูลอุปกรณ์ของคุณตอนตรวจว่าเป็นคนจริง";
function askConsent() {
  return new Promise(resolve => {
    const again = !!consent.terms;
    const el = showLayer("page consent", `<div class="consent-box">
      <div class="consent-face">${face("happy")}</div>
      <h2>${again ? "ข้อกำหนดมีการอัปเดต" : "ก่อนเริ่มเล่น"}</h2>
      <p>${again ? "ช่วยอ่านฉบับใหม่แล้วเลือกอีกครั้ง" : "เล่นได้เลยไม่ต้องสมัคร ความคืบหน้าอยู่ในเครื่องของคุณ"}</p>
      <button type="button" class="btn link read">อ่านข้อกำหนดและนโยบายความเป็นส่วนตัว</button>
      <button type="button" class="check" role="checkbox" aria-checked="false"><span class="box"></span><span>ฉันอ่านและยอมรับข้อกำหนดแล้ว</span></button>
      ${BACKEND ? `<div class="group"><h3>ส่งสถิติการเล่นไหม</h3>
        <p class="muted">ช่วยให้รู้ว่าข้อไหนยากเกินหรือเล่นแล้วไม่สนุก ส่งเฉพาะคำตอบ เวลา การข้าม และการพัก ไม่มีชื่อหรืออีเมล ถ้าไม่เปิด เล่นได้เหมือนเดิมและไม่มีอะไรออกจากเครื่อง เปลี่ยนใจได้ในตั้งค่า</p>
        ${BACKEND.turnstile ? `<p class="muted small" data-cloudflare-note>${esc(CLOUDFLARE_NOTE)}</p>` : ""}
        <div class="seg" role="radiogroup" aria-label="สถิติการเล่น">
          <button type="button" role="radio" aria-checked="false" data-stats="1">เปิดสถิติ</button>
          <button type="button" role="radio" aria-checked="false" data-stats="0">ไม่เปิด</button>
        </div></div>` : ""}
      <button type="button" class="btn primary go" disabled>เริ่มเล่น</button></div>`);
    let accepted = false, stats = null;
    const refresh = () => { $(".go", el).disabled = !(accepted && (!BACKEND || stats !== null)); };
    $(".read", el).onclick = () => { Sound.play("tap"); showLegal(); };
    $(".check", el).onclick = e => {
      accepted = !accepted;
      e.currentTarget.setAttribute("aria-checked", accepted);
      Sound.play("tap");
      refresh();
    };
    el.querySelectorAll("[data-stats]").forEach(b => {
      b.onclick = () => {
        stats = b.dataset.stats === "1";
        el.querySelectorAll("[data-stats]").forEach(x => x.setAttribute("aria-checked", x === b));
        Sound.play("tap");
        refresh();
      };
    });
    $(".go", el).onclick = () => {
      if ($(".go", el).disabled) return;
      decide("terms", true);
      if (BACKEND) decide("analytics", stats);
      Sound.play("tap");
      closeLayer(el);
      resolve();
    };
  });
}

/* ---------- first run: how to play, three short pages ----------
   Shown once, after consent, to someone who has never played (introDue). Only a flag on the device says it was seen. */
const INTRO_UP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 15 6-6 6 6"/><path d="m6 21 6-6 6 6" opacity=".45"/></svg>';
const INTRO_PAGES = [
  { face: "happy", title: "สวัสดี ฉันน้องป่อง", lines: ["ปิ๊งป่องคือฟีดแนวตั้งของควิซสั้นๆ กับปริศนาฝึกสมอง ปัดเล่นได้ทีละนิด ทุกการ์ดได้รู้อะไรใหม่หรือได้ฝึกคิด"] },
  { face: "happy", small: true, title: "มีอะไรให้เล่นบ้าง", lines: ["ควิซความรู้หลายหมวด ตั้งแต่อวกาศถึงสำนวนไทย กับปริศนาให้ลองคิดหลายแบบ"], chips: true },
  { face: "happy", up: true, title: "เล่นง่ายนิดเดียว", lines: ["ปัดขึ้นเพื่อไปการ์ดถัดไป", "กดปุ่ม ? บนการ์ดปริศนาเพื่อดูวิธีเล่น", "ปรับความยากและสัดส่วนการ์ดในฟีดได้ในตั้งค่า"] },
];
// The chips are what the feed really has: the kinds that have levels in this build.
const introChips = () => ["quiz", ...KINDS.filter(k => k !== "quiz")].filter(k => KINDS.includes(k)).map(k => k === "quiz" ? "ควิซความรู้" : label(k));
function showIntro() {
  return new Promise(resolve => {
    const el = showLayer("intro", `<div class="intro-top"><button type="button" class="btn-back intro-skip" data-back>ข้าม</button></div>
      <div class="intro-body" aria-live="polite"></div>
      <div class="intro-foot"><div class="intro-dots" aria-hidden="true">${INTRO_PAGES.map(() => "<i></i>").join("")}</div>
        <button type="button" class="btn primary intro-next"></button></div>`);
    let at = 0;
    const draw = () => {
      const page = INTRO_PAGES[at];
      const body = $(".intro-body", el);
      body.innerHTML = `<div class="intro-art ${page.up ? "up" : ""} ${page.small ? "small" : ""}">${face(page.face)}${page.up ? `<span class="intro-chev">${INTRO_UP}</span>` : ""}</div>
        <h2>${esc(page.title)}</h2>${page.lines.map(t => `<p>${esc(t)}</p>`).join("")}
        ${page.chips ? `<ul class="intro-chips">${introChips().map(c => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}`;
      el.querySelectorAll(".intro-dots i").forEach((d, i) => d.classList.toggle("on", i === at));
      $(".intro-next", el).textContent = at === INTRO_PAGES.length - 1 ? "เริ่มเลย" : "ต่อไป";
      el.dataset.page = at + 1;
      const h = $("h2", el);
      h.tabIndex = -1;
      h.focus({ preventScroll: true });
    };
    const finish = () => {
      store.set(KEYS.intro, true);
      closeLayer(el);
      resolve();
    };
    const next = () => { Sound.play("tap"); if (at >= INTRO_PAGES.length - 1) finish(); else { at++; draw(); } };
    $(".intro-next", el).onclick = next;
    $(".intro-skip", el).onclick = () => { Sound.play("tap"); finish(); };
    // A swipe up anywhere goes on, like the feed. A tap on the page itself goes on too.
    let from = null;
    el.addEventListener("pointerdown", e => { from = { x: e.clientX, y: e.clientY, t: e.target }; });
    el.addEventListener("pointercancel", () => { from = null; });
    el.addEventListener("pointerup", e => {
      if (!from) return;
      const dy = e.clientY - from.y, dx = e.clientX - from.x, onButton = from.t.closest && from.t.closest("button");
      from = null;
      if (dy < -40 && Math.abs(dy) > Math.abs(dx)) next();
      else if (!onButton && Math.abs(dy) < 10 && Math.abs(dx) < 10) next();
    });
    el.addEventListener("keydown", e => { if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); next(); } });
    draw();
  });
}

/* ---------- settings ---------- */
let settingsLayer = null;
function row(label, control, note) {
  return `<div class="row"><div class="row-text"><div>${esc(label)}</div>${note ? `<div class="muted small">${esc(note)}</div>` : ""}</div>${control}</div>`;
}
function switchHtml(name, value, label) {
  return `<button type="button" class="switch" role="switch" aria-checked="${!!value}" aria-label="${esc(label)}" data-switch="${name}"><span></span></button>`;
}
function thaiDate(iso) {
  try { return new Date(iso).toLocaleDateString("th-TH", { day: "numeric", month: "long", year: "numeric" }); } catch { return iso.slice(0, 10); }
}
function shortThaiDate(iso) {
  try { return new Date(iso).toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" }); } catch { return iso.slice(0, 10); }
}
/* ---------- settings: rows grouped by what they are about, each opening a page of its own ----------
   The list is short on purpose: a row is an icon, a name and what is set now. Everything that was one long page lives in the
   page its row opens (SUB_PAGES below). A new setting is a row in settingsGroupsHtml() and, if it needs room, an entry in SUB_PAGES. */
const SET_ICONS = {
  user: '<circle cx="12" cy="9" r="3.5"/><path d="M5 20c1-4 4-5.5 7-5.5s6 1.5 7 5.5"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2 0-1.6-1-1.8-1-3 0-1 .8-1.7 2-1.7H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3z"/><circle cx="7.8" cy="11" r="1"/><circle cx="10" cy="7.3" r="1"/><circle cx="14.3" cy="7.3" r="1"/>',
  app: '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.2"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  speaker: '<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  chart: '<path d="M5 20V10M12 20V4M19 20v-7"/>',
  trash: '<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13"/>',
  doc: '<path d="M7 3.5h7l4 4V20.5H7z"/><path d="M14 3.5v4h4M9.5 12h5M9.5 15.5h5"/>',
  chev: '<path d="M9 5l7 7-7 7"/>',
  share: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  logout: '<path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4M15 8l4 4-4 4M19 12H9"/>',
};
const setIcon = (name, cls = "") => `<svg class="si ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SET_ICONS[name]}</svg>`;
const SET_LOCK_BADGE = `<span class="set-badge">${setIcon("lock")}สมาชิก</span>`;
const subHead = (title, back, attrs = "") => `<div class="sub-head"><button type="button" class="btn-back sub-back" data-back data-act="close" ${attrs} aria-label="กลับไป${esc(back)}">${setIcon("back")}<span>${esc(back)}</span></button><h2>${esc(title)}</h2></div>`;
/* A row that opens a page. `sub` is what is set now; `subAttrs` lets the code find it again to keep it current. */
function setItem({ act, icon, tone, title, sub, subAttrs = "", badge = "", cls = "" }) {
  return `<button type="button" class="set-item ${cls}" data-act="${act}"><span class="set-tile ${tone}">${setIcon(icon)}</span><span class="set-text"><b>${esc(title)}</b><span class="muted" ${subAttrs}>${esc(sub)}</span></span>${badge}${setIcon("chev", "set-chev")}</button>`;
}
function setSwitchRow({ icon, tone, title, sub, name, value }) {
  return `<div class="set-item"><span class="set-tile ${tone}">${setIcon(icon)}</span><span class="set-text"><b>${esc(title)}</b><span class="muted">${esc(sub)}</span></span>${switchHtml(name, value, title)}</div>`;
}
const setGroup = (title, inner) => `<div class="set-group">${title ? `<h3 class="set-group-title">${esc(title)}</h3>` : ""}<div class="set-card">${inner}</div></div>`;

/* The account card at the top of the list. Signed in: who, and a way into the account page. Not signed in: the sign-in button. */
function accountHtml() {
  const s = Net.status();
  if (!s.enabled) return "";
  const signedIn = s.mode === "google";
  const iosNote = iosStandalone && !Native.on && !signedIn
    ? '<p class="muted small">บน iPhone หน้าเข้าสู่ระบบอาจเปิดในหน้าต่างซ้อน ถ้าทำเสร็จแล้วไม่กลับเข้าแอพ ให้ปิดหน้าต่างนั้นแล้วลองอีกครั้ง ข้อมูลในเครื่องจะไม่หาย</p>' : "";
  const notice = s.suspended ? '<p class="notice">บัญชีนี้ถูกระงับ ยังเล่นในเครื่องได้ตามปกติ แต่จะไม่ซิงก์และไม่ส่งสถิติ ติดต่อทีมงานได้ตามอีเมลในข้อกำหนด</p>' : "";
  if (signedIn) return `<div class="set-group">${notice}<button type="button" class="set-card set-me" data-act="account"><span class="set-avatar">${face("happy")}</span><span class="set-text"><b>${esc(s.email || "บัญชี Google")}</b><span class="muted">${s.memberUntil ? `สมาชิกปิ๊งป่อง ใช้ได้ถึง ${esc(thaiDate(s.memberUntil))}` : "เข้าสู่ระบบด้วย Google"}</span></span>${setIcon("chev", "set-chev")}</button></div>`;
  return `<div class="set-group"><div class="set-card"><div class="set-me"><span class="set-avatar">${face("happy")}</span><span class="set-text"><b>เข้าสู่ระบบ</b><span class="muted">ความคืบหน้าอยู่ในเครื่องนี้เท่านั้น เข้าสู่ระบบเพื่อซิงก์ความคืบหน้าและการตั้งค่าข้ามเครื่อง</span></span></div>
    ${notice}${iosNote}<div class="set-cta"><button type="button" class="btn primary" data-act="login">เข้าสู่ระบบด้วย Google</button></div></div></div>`;
}
function accountPageHtml() {
  const s = Net.status();
  return `${subHead("บัญชี", "ตั้งค่า")}
    ${setGroup("", `<div class="set-me"><span class="set-avatar">${face("happy")}</span><span class="set-text"><b>${esc(s.email || "")}</b><span class="muted">เข้าสู่ระบบด้วย Google</span></span></div>
      ${s.memberUntil ? `<p class="set-note" data-member>เป็นสมาชิกปิ๊งป่อง ใช้ได้ถึง ${esc(thaiDate(s.memberUntil))}</p>` : ""}`)}
    ${setGroup("", `<button type="button" class="set-item" data-act="logout"><span class="set-tile t-gray">${setIcon("logout")}</span><span class="set-text"><b>ออกจากระบบ</b><span class="muted">ความคืบหน้าและการตั้งค่าในเครื่องนี้จะถูกล้าง</span></span></button>`)}
    ${setGroup("ลบบัญชี", `<button type="button" class="set-item danger" data-act="delete"><span class="set-tile t-pong">${setIcon("trash")}</span><span class="set-text"><b>ลบบัญชี</b><span class="muted">ลบข้อมูลของบัญชีนี้บนเซิร์ฟเวอร์ทั้งหมด ย้อนกลับไม่ได้</span></span></button>`)}`;
}
function restHtml() {
  const seg = (name, label, values, unit, current) => `<div class="seg" role="radiogroup" aria-label="${label}">${values.map(v =>
    `<button type="button" role="radio" aria-checked="${current === v}" data-${name}="${v}">${v} ${unit}</button>`).join("")}</div>`;
  return `${row("เตือนให้พักเมื่อเล่นนาน", switchHtml("rest", settings.breakOn !== false, "เตือนให้พักเมื่อเล่นนาน"), "เล่นต่อเนื่องครบเวลา การ์ดใบถัดไปจะเป็นการ์ดพัก ไม่ขัดกลางข้อที่เล่นอยู่")}
    ${settings.breakOn !== false ? `<p class="muted small">พักทุกๆ</p>${seg("rest-every", "พักทุกๆ", [20, 30, 45], "นาที", settings.breakEvery)}
    <p class="muted small">พักนาน</p>${seg("rest-secs", "พักนาน", [20, 30], "วินาที", settings.breakSecs)}` : ""}`;
}
function categorySummary() {
  const on = ALL_CATEGORIES.length - offCategories().size;
  return on === ALL_CATEGORIES.length ? `เปิดอยู่ทุกหมวด (${on})` : `เปิดอยู่ ${on} จาก ${ALL_CATEGORIES.length} หมวด`;
}
function categoriesHtml() {
  const off = offCategories();
  return `${subHead("เลือกหมวดที่อยากเล่น", "ตั้งค่า", 'data-cats-close')}
    <p class="muted small">หมวดที่ปิดจะไม่ขึ้นในฟีด เปิดกลับได้ทุกเมื่อ ต้องเปิดไว้อย่างน้อยหนึ่งหมวด</p>
    <div class="set-body">${CONFIG.groups.map(g => setGroup(g.name, g.cats.map(c => {
      const name = label(c);
      return `<div class="set-item"><span class="set-text"><b>${esc(name)}</b></span><button type="button" class="switch" role="switch" aria-checked="${!off.has(c)}" aria-label="${esc(name)}" data-cat="${esc(c)}"><span></span></button></div>`;
    }).join(""))).join("")}</div>`;
}
function openCategories() {
  const el = showLayer("page categories", categoriesHtml());
  el.addEventListener("click", e => {
    if (e.target.closest("[data-cats-close]")) { Sound.play("tap"); closeLayer(el); refreshSettings(); return; }
    const sw = e.target.closest("[data-cat]");
    if (!sw) return;
    const off = offCategories(), cat = sw.dataset.cat;
    if (off.has(cat)) off.delete(cat);
    else if (off.size + 1 >= ALL_CATEGORIES.length) { toast("ต้องเปิดไว้อย่างน้อยหนึ่งหมวด"); return; }
    else off.add(cat);
    saveSettings({ off: [...off] });
    sw.setAttribute("aria-checked", !off.has(cat));
    Sound.play("tap");
    categoriesChanged();
  });
}
/* ---------- difficulty and feed mix: both stay on this device ---------- */
const TIER_CHOICES = [["auto", "ไล่ระดับเอง"], ["easy", "ง่ายเท่านั้น"], ["medium", "ปานกลางเท่านั้น"], ["hard", "ยากเท่านั้น"]];
function tierHtml() {
  const now = pinnedTier() || "auto";
  return `<div class="seg wrap" role="radiogroup" aria-label="ความยากของปริศนา">${TIER_CHOICES.map(([v, n]) =>
    `<button type="button" role="radio" aria-checked="${now === v}" data-tier-pick="${v}">${n}</button>`).join("")}</div>
    <p class="muted small" id="tier-note">${now === "auto" ? "เริ่มจากง่าย แล้วปรับตามที่เล่นของแต่ละเกม" : "ปริศนาทุกเกมจะมาจากระดับนี้อย่างเดียว ไม่มีการไล่ระดับ"}</p>`;
}
const kindName = k => (k === "quiz" ? "ควิซ" : label(k));
function weightsSummary() {
  const changed = KINDS.filter(k => stepOf(k) !== "normal").length;
  return changed ? `ปรับไว้ ${changed} ชนิด` : "ทุกชนิดปกติ";
}
function weightsHtml() {
  return `${subHead("สัดส่วนในฟีด", "ปรับฟีด", 'data-mix-close')}
    <p class="muted small">เลือกว่าอยากเจอการ์ดชนิดไหนมากหรือน้อย "ปิด" คือไม่ขึ้นเลย ต้องเหลืออย่างน้อยหนึ่งชนิด</p>
    <div class="set-body">${KINDS.map(k => `<div class="set-group" data-mix-row="${k}"><h3 class="set-group-title">${esc(kindName(k))}</h3><div class="set-card"><div class="set-pad">
      <div class="seg" role="radiogroup" aria-label="${esc(kindName(k))}">${WEIGHT_STEPS.map(([v, , n]) =>
        `<button type="button" role="radio" aria-checked="${stepOf(k) === v}" data-mix="${k}" data-step="${v}">${n}</button>`).join("")}</div>
    </div></div></div>`).join("")}
    ${setGroup("", `<div class="set-pad"><div class="stack"><button type="button" class="btn" data-mix-reset>กลับค่าตั้งต้น</button></div></div>`)}</div>`;
}
function openWeights() {
  const el = showLayer("page mix", weightsHtml());
  const paint = () => el.querySelectorAll("[data-mix]").forEach(b => b.setAttribute("aria-checked", stepOf(b.dataset.mix) === b.dataset.step));
  el.addEventListener("click", e => {
    if (e.target.closest("[data-mix-close]")) { Sound.play("tap"); closeLayer(el); refreshSettings(); return; }
    if (e.target.closest("[data-mix-reset]")) {
      saveSettings({ weights: {} }); paint(); Sound.play("tap"); toast("กลับเป็นค่าตั้งต้นแล้ว"); feedOptionsChanged(); return;
    }
    const b = e.target.closest("[data-mix]");
    if (!b) return;
    const mine = { ...(settings.weights || {}) };
    if (b.dataset.step === "normal") delete mine[b.dataset.mix]; else mine[b.dataset.mix] = b.dataset.step;
    const before = settings.weights;
    settings.weights = mine; // try it: would anything be left to show?
    const left = KINDS.some(k => kindIsOn(k, offCategories(), { kind: k2 => weightIn((CONFIG.feed || {}).kinds, k2) * WEIGHT_STEPS.find(s => s[0] === stepOf(k2))[1], category: c => weightIn((CONFIG.feed || {}).categories, c) }));
    settings.weights = before;
    if (!left) { toast("ต้องเหลือไว้อย่างน้อยหนึ่งชนิด"); return; }
    saveSettings({ weights: mine }); paint(); Sound.play("tap"); feedOptionsChanged();
  });
}
/* ---------- the signed-in player's own statistics and data ---------- */
const categoryName = c => (c.category === "quiz" ? "ควิซก่อนมีการแยกหมวด" : CONFIG.labels[c.category] ? label(c.category) : "หมวดอื่น");
/* ---------- the statistics page ----------
   Everyone sees the total and one row per kind of card (questions, puzzles, calculation). Members can open a row
   for its categories and, for puzzles, the levels finished at each tier. Only the tiers need the server to decide
   (Net.myStatsDetail); the category totals are the player's own rows that every account can read. */
const STAT_ICONS = {
  question: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.6 2.2c-.8.4-1.2 1-1.2 1.8M12 17h.01"/>',
  puzzle: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><path d="M16.5 14v5M14 16.5h5"/>',
  calc: '<path d="M6 5v6M3 8h6M14 8h6M14.5 15l5 5M19.5 15l-5 5M4 17.5h6"/>',
  other: '<circle cx="12" cy="12" r="2.5"/>',
};
const statIcon = id => `<span class="sg-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${STAT_ICONS[id] || STAT_ICONS.other}</svg></span>`;
const STAT_TIERS = [["easy", "ง่าย"], ["medium", "ปานกลาง"], ["hard", "ยาก"]];
const statPct = (right, of) => (of ? Math.round((right / of) * 100) : null);
const DETAIL_MIN_ANSWERS = 5; // fewer answers than this say nothing about being good or better at something
const LOCKED_HINT = '<p class="muted small st-hint" data-detail-locked>สมาชิกเปิดดูรายหมวดและระดับความยากของแต่ละกลุ่มได้</p>';
/* "ไม่ถึง 1 นาที", "25 นาที", "3 ชม. 20 นาที". Time is the time cards were on screen (see my_stats), so it is said as time played. */
function durationText(ms) {
  const min = Math.round(ms / 60000);
  if (min < 1) return ms > 0 ? "ไม่ถึง 1 นาที" : "0 นาที";
  if (min < 60) return `${min} นาที`;
  const h = Math.floor(min / 60), m = min % 60;
  return h >= 100 || !m ? `${h} ชม.` : `${h} ชม. ${m} นาที`;
}
const metaTile = (key, label, value) => `<div class="st-tile" data-meta="${key}"><b>${esc(value)}</b><span class="muted small">${esc(label)}</span></div>`;
/* How long the player has been here, said warmly: days, then months, then years. Thai calendar days, same as the rest. */
/* A number of days said as years, months and days: "12 วัน", "3 เดือน 2 วัน", "1 ปี 2 เดือน". */
function spanFromDays(days) {
  const years = Math.floor(days / 365), months = Math.floor((days % 365) / 30), rest = (days % 365) % 30;
  return years ? `${years} ปี${months ? ` ${months} เดือน` : ""}` : months ? `${months} เดือน${rest ? ` ${rest} วัน` : ""}` : `${days} วัน`;
}
/* The day number in Thailand (UTC+7): two moments are a day apart when their numbers are. */
const thaiDay = ms => Math.floor((ms + 7 * 3600000) / 86400000);
function tenureText(firstIso, nowMs = Date.now()) {
  const first = Date.parse(firstIso);
  if (!isFinite(first)) return "";
  const days = Math.max(0, thaiDay(nowMs) - thaiDay(first));
  if (days < 1) return "วันนี้คือวันแรกของคุณ ยินดีต้อนรับ";
  return `อยู่กับน้องป่องมาแล้ว ${spanFromDays(days)}`;
}
/* The time someone has been a member, counted by the server only while they were (docs/payments-design.md): it keeps going from
   where it was if they come back. A member who began today is welcomed, not shown "0 days". */
function memberTimeText(m) {
  const days = Math.floor((m.total_seconds || 0) / 86400);
  const since = m.since ? ` · สมาชิกตั้งแต่ ${shortThaiDate(m.since)}` : "";
  return days < 1 ? `เพิ่งเริ่มเป็นสมาชิก ขอบคุณที่อยู่กับเรา${since}` : `เป็นสมาชิกมาแล้ว ${spanFromDays(days)}${since}`;
}
function metaHtml(stats) {
  if (stats.first_at === undefined) return "";
  const tenure = stats.first_at ? tenureText(stats.first_at) : "";
  return `<div class="st-meta">${metaTile("first", "วันแรกที่ใช้งาน", stats.first_at ? shortThaiDate(stats.first_at) : "–")}${metaTile("days", "วันที่เล่น", `${stats.days || 0} วัน`)}${metaTile("time", "เวลาที่เล่น", durationText(stats.play_ms || 0))}</div>${tenure ? `<p class="st-tenure" data-tenure><span class="st-tenure-face" aria-hidden="true">${face("happy")}</span>${esc(tenure)}</p>` : ""}`;
}
function ringHtml(pct) {
  const C = 2 * Math.PI * 42;
  return `<svg class="st-ring" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="42" class="st-track"/>${!pct ? "" :
    `<circle cx="50" cy="50" r="42" class="st-arc" stroke-dasharray="${(C * pct / 100).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 50 50)"/>`}</svg>`;
}
function groupedStats(stats) {
  const groupOf = c => CONFIG.groups.find(g => g.cats.includes(c.category)) || (c.category === "quiz" ? CONFIG.groups.find(g => g.id === "question") : null);
  const rows = CONFIG.groups.filter(g => ["question", "puzzle", "calc"].includes(g.id)).map(g => ({ g, id: g.id, name: g.name, plays: 0, answers: 0, correct: 0, cats: [] }));
  const other = { g: null, id: "other", name: "อื่นๆ", plays: 0, answers: 0, correct: 0, cats: [] };
  for (const c of stats.by_category) {
    const row = rows.find(r => r.g === groupOf(c)) || other;
    row.plays += c.plays; row.answers += c.answers; row.correct += c.correct; row.cats.push(c);
  }
  return other.plays ? [...rows, other] : rows;
}
function strengthHtml(group) {
  const ranked = group.cats.filter(c => c.answers >= DETAIL_MIN_ANSWERS).map(c => ({ c, r: statPct(c.correct, c.answers) })).sort((x, y) => y.r - x.r);
  if (ranked.length < 2 || ranked[0].r === ranked[ranked.length - 1].r) return "";
  const best = ranked[0], worst = ranked[ranked.length - 1];
  return `<div class="sg-tags" data-detail-strength><span class="sg-tag good">ถนัดสุด ${esc(categoryName(best.c))} ${best.r}%</span><span class="sg-tag">ฝึกเพิ่มได้ ${esc(categoryName(worst.c))} ${worst.r}%</span></div>`;
}
function categoryRowHtml(group, c) {
  const answered = c.answers > 0, pct = statPct(c.correct, c.answers);
  const text = answered ? `ถูก ${pct}% จาก ${c.answers} ข้อ` : `ผ่าน ${c.plays} ด่าน`;
  const bar = answered ? `<div class="sg-bar"><i style="width:${pct}%"></i></div>` : "";
  const tiers = !answered && group.id !== "other" ? `<div class="tier-pills" data-tiers="${esc(c.category)}"></div>` : "";
  return `<div class="sg-cat" data-stat="${esc(c.category)}"><div class="sg-cat-top"><span>${esc(categoryName(c))}</span><span class="muted small">${esc(text)}<span data-streak-cat="${esc(c.category)}"></span>${answered || group.id === "other" ? "" : ' · <span data-game-time="' + esc(c.category) + '"></span>'}</span></div>${bar}${tiers}</div>`;
}
const CHEVRON = '<svg class="sg-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>';
function groupHeadHtml(group, chevron) {
  const answered = group.answers > 0, pct = statPct(group.correct, group.answers);
  const caption = !group.plays ? "ยังไม่ได้เล่น" : answered ? `ตอบแล้ว ${group.answers} ข้อ` : `ผ่านแล้ว ${group.plays} ด่าน`;
  const big = !group.plays ? "–" : answered ? `${pct}%` : String(group.plays);
  return `${statIcon(group.id)}<span class="sg-name"><b>${esc(group.name)}</b><span class="muted small">${esc(caption)}<span data-streak-group="${group.id}"></span></span></span><span class="sg-big${group.plays ? "" : " none"}">${big}</span>${chevron ? CHEVRON : ""}`;
}
function groupRowHtml(group, member) {
  const pct = statPct(group.correct, group.answers);
  const bar = group.answers ? `<div class="sg-bar"><i style="width:${pct}%"></i></div>` : "";
  if (member && group.plays) {
    return `<details class="sg" data-group="${group.id}"><summary>${groupHeadHtml(group, true)}</summary>${bar}<div class="sg-body"><p class="muted small sg-time" data-group-time="${group.id}"></p>${group.id === "question" ? strengthHtml(group) : ""}${group.cats.map(c => categoryRowHtml(group, c)).join("")}</div></details>`;
  }
  return `<div class="sg" data-group="${group.id}"><div class="sg-head">${groupHeadHtml(group, false)}</div>${bar}</div>`;
}
function statsHtml(stats) {
  const member = canCustomize(), pct = statPct(stats.correct, stats.answers);
  return `<div class="st-hero">
      <div class="st-ringbox" data-stat-total="rate">${ringHtml(pct)}<div class="st-ringtext"><span class="stat-n">${pct === null ? "–" : pct + "%"}</span><span class="muted small">ตอบถูก</span></div></div>
      <div class="st-plays" data-stat-total="plays"><span class="stat-n">${stats.plays}</span><span class="muted small">ข้อและด่านที่เล่น</span><div id="month-chip"></div></div>
    </div>
    <div id="streak-slot"></div>
    ${metaHtml(stats)}${member ? '<p class="st-tenure" data-member-time hidden></p>' : ""}
    <div class="sg-list">${groupedStats(stats).map(g => groupRowHtml(g, member)).join("")}</div>
    ${member ? '<div id="detail-slot"></div>' : LOCKED_HINT}
    <p class="muted small">นับจากสถิติที่ส่งแล้ว ย้อนหลังไม่เกิน 12 เดือน ตามอายุการเก็บในข้อกำหนด เวลาที่เล่นนับจากเวลาที่การ์ดอยู่บนจอ ไม่รวมช่วงพัก ชนะติดต่อกันนับตอบถูกหรือผ่านด่าน ตอบผิดหรือเลิกกลางคันทำให้ขาด การเลื่อนผ่านโดยไม่แตะไม่นับและไม่ทำให้ขาด</p>`;
}
/* Members: this month against the last, and the tiers. Up or down is said in words, and only when both months have
   enough answers to mean something: one answer is 0% or 100%. */
function paintDetailData(el, d) {
  const now = d.this_month, before = d.last_month;
  const a = statPct(now.correct, now.answers), b = statPct(before.correct, before.answers);
  const trend = a === null || b === null || now.answers < DETAIL_MIN_ANSWERS || before.answers < DETAIL_MIN_ANSWERS ? ""
    : a > b ? ` · ตอบถูกขึ้น ${a - b} จุด` : a < b ? ` · ตอบถูกลง ${b - a} จุด` : " · ตอบถูกเท่าเดิม";
  const chip = $("#month-chip", el);
  if (chip) chip.innerHTML = `<span class="sg-tag" data-detail-month>เดือนนี้ ${now.plays} · เดือนก่อน ${before.plays}${esc(trend)}</span>`;
  const gameMs = Object.fromEntries((d.by_game || []).map(g => [g.game, g.ms]));
  for (const t of el.querySelectorAll("[data-group-time]")) {
    const g = CONFIG.groups.find(x => x.id === t.dataset.groupTime);
    const games = t.dataset.groupTime === "question" ? ["quiz"] : g ? g.cats : [];
    const ms = games.reduce((sum, k) => sum + (gameMs[k] || 0), 0);
    t.textContent = ms ? `เวลาที่เล่นในกลุ่มนี้ ${durationText(ms)}` : "";
    t.hidden = !ms;
  }
  for (const t of el.querySelectorAll("[data-game-time]")) {
    const ms = gameMs[t.dataset.gameTime] || 0;
    t.textContent = ms ? `${durationText(ms)}` : "";
  }
  for (const t of el.querySelectorAll("[data-tiers]")) {
    const mine = Object.fromEntries(d.by_tier.filter(r => r.category === t.dataset.tiers).map(r => [r.tier, r.plays]));
    t.innerHTML = STAT_TIERS.map(([id, name]) => `<span class="tier-pill${mine[id] ? "" : " none"}" data-tier="${id}"><b>${mine[id] || 0}</b> ${name}<span data-streak-tier="${esc(t.dataset.tiers)}:${id}"></span></span>`).join("");
  }
  applyStreaks(el);
}
const FLAME = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.2 2-4 .2 1.6 1 2.4 2 2.5C11 9.5 10.5 6 12 3Z"/></svg>';
/* The longest run of wins: everyone gets the total and one per group; the server adds categories and tiers for members. */
function applyStreaks(el) {
  const d = el.__streaks;
  if (!d) return;
  const slot = $("#streak-slot", el);
  if (slot) slot.innerHTML = `<div class="st-streak" data-streak-total><span class="st-flame">${FLAME}</span><span class="st-streak-text"><span class="stat-n">${d.overall}</span><span class="muted small">ชนะติดต่อกันสูงสุด (ครั้ง)</span></span></div>`;
  const put = (selector, table, key, text) => el.querySelectorAll(selector).forEach(n => { const v = table && table[n.dataset[key]]; n.textContent = v > 0 ? text(v) : ""; });
  put("[data-streak-group]", d.by_group, "streakGroup", v => ` · ชนะติดกัน ${v}`);
  put("[data-streak-cat]", d.by_category, "streakCat", v => ` · ติดกัน ${v}`);
  put("[data-streak-tier]", d.by_tier, "streakTier", v => ` · ติดกัน ${v}`);
}
async function paintStreaks(el) {
  const groups = {};
  for (const g of CONFIG.groups) if (["question", "puzzle", "calc"].includes(g.id)) groups[g.id] = g.id === "question" ? ["quiz", "hard"] : g.cats;
  const { data, problem } = await Net.myStreaks(groups);
  if (problem || !data || !$("#streak-slot", el)) return;
  el.__streaks = data;
  applyStreaks(el);
}
async function paintMembership(el) {
  const line = $("[data-member-time]", el);
  if (!line || !canCustomize()) return;
  const { data, problem } = await Net.myMembership();
  if (problem || !data || !data.member || !$("[data-member-time]", el)) return; // only for a member the server says is one
  line.textContent = memberTimeText(data);
  line.hidden = false;
}
async function paintDetail(el) {
  if (!$("#detail-slot", el) || !canCustomize()) return;
  const { data, problem } = await Net.myStatsDetail();
  const slot = $("#detail-slot", el);
  if (!slot) return;
  if (problem === "member") { // the server says no, whatever this device believed: the rows close and the invitation shows
    slot.innerHTML = LOCKED_HINT;
    el.querySelectorAll("details.sg").forEach(d => {
      const row = document.createElement("div");
      row.className = "sg"; row.dataset.group = d.dataset.group;
      row.innerHTML = `<div class="sg-head">${$("summary", d).innerHTML}</div>${(d.querySelector(".sg-bar") || { outerHTML: "" }).outerHTML}`;
      row.querySelector(".sg-chev")?.remove();
      d.replaceWith(row);
    });
    return;
  }
  if (!problem) paintDetailData(el, data);
}
const MINE_PROBLEM = {
  offline: "ตอนนี้ออฟไลน์อยู่ ต่อเน็ตแล้วเปิดหน้านี้อีกครั้ง",
  server: "ตอนนี้ต่อเซิร์ฟเวอร์ไม่ได้ ลองใหม่อีกครั้ง ข้อมูลของคุณไม่ได้หายไปไหน",
};
async function paintStats(el) {
  const slot = $("#stats-slot", el);
  if (!statsOn()) {
    slot.innerHTML = '<p class="notice" data-stats-state="off">ยังไม่มีสถิติให้ดู เพราะปิด "ส่งสถิติการเล่น" อยู่ เปิดได้ที่ตั้งค่า หัวข้อสถิติ แล้วกลับมาดูหลังเล่นสักพัก</p>';
    return;
  }
  slot.innerHTML = '<p class="muted">กำลังโหลด...</p>';
  const { data, problem } = await Net.myStats();
  if (problem) {
    slot.innerHTML = `<p class="notice" data-stats-state="${problem}">${esc(MINE_PROBLEM[problem])}</p><div class="stack"><button type="button" class="btn" data-mine="retry">ลองอีกครั้ง</button></div>`;
  } else if (!data.plays) {
    slot.innerHTML = '<p class="muted" data-stats-state="empty">ยังไม่มีสถิติ เล่นสักหน่อยแล้วกลับมาดูนะ</p>';
  } else { slot.innerHTML = statsHtml(data); paintDetail(el); paintStreaks(el); paintMembership(el); }
}
/* iPhone's installed app cannot follow a download link, so it gets the share sheet, which also saves to Files.
   A download link cannot say how it went, so "started" promises nothing. */
async function saveFile(name, text) {
  const file = new File([text], name, { type: "application/json" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file] }); return "shared"; }
    catch (err) { if (err && err.name === "AbortError") return "cancelled"; }
  }
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url; link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
  return "started";
}
/* Sharing must start from a tap, and fetching the data uses that tap up: the file is ready first, then one more tap saves it. */
function offerFile(name, text) {
  const size = text.length < 1048576 ? `${Math.max(1, Math.round(text.length / 1024))} KB` : `${(text.length / 1048576).toFixed(1)} MB`;
  const el = showLayer("sheet", `<div class="sheet-box"><h2>ไฟล์พร้อมแล้ว</h2><p>ไฟล์ JSON ขนาด ${size} มีข้อมูลบัญชี ความยินยอม ความคืบหน้า และสถิติของคุณ เก็บไว้ในที่ปลอดภัย</p>
    <p class="muted small" role="status" data-file-note hidden></p>
    <div class="stack"><button type="button" class="btn primary" data-file="save">บันทึกไฟล์</button><button type="button" class="btn" data-file="close" data-back>ปิด</button></div></div>`);
  el.addEventListener("click", async e => {
    const b = e.target.closest("[data-file]");
    if (!b) return;
    Sound.play("tap");
    if (b.dataset.file === "save") {
      let how;
      try { how = await saveFile(name, text); }
      catch { toast("บันทึกไฟล์ไม่สำเร็จ ลองอีกครั้ง"); return; }
      if (how === "started") { // said inside the sheet: a toast would sit on top of its buttons
        const note = $("[data-file-note]", el);
        note.textContent = "กำลังบันทึกไฟล์ ดูได้ในโฟลเดอร์ดาวน์โหลด ถ้าไม่เจอ กดบันทึกอีกครั้ง";
        note.hidden = false;
        return;
      }
      if (how === "shared") toast("บันทึกไฟล์แล้ว");
    }
    closeLayer(el);
  });
}
function openMine() {
  const el = showLayer("page mine", `${subHead("สถิติและข้อมูลของฉัน", "สถิติการเล่น", 'data-mine="close"')}
    <div class="set-body">
      <section><h3>สถิติ</h3><div id="stats-slot"></div></section>
      <section><h3>ข้อมูลของฉัน</h3>
        <p class="small">ส่งออกข้อมูลทั้งหมดของบัญชีนี้เป็นไฟล์ JSON ใช้เก็บไว้ดูเองหรือย้ายไปที่อื่นได้</p>
        <div class="stack"><button type="button" class="btn" data-mine="export">ส่งออกข้อมูลของฉัน</button></div>
      </section>
      <section><h3>ลบบัญชี</h3>
        <p class="small" data-delete-hint>ปุ่มลบบัญชีอยู่ในหน้าบัญชี (ตั้งค่า แล้วแตะการ์ดบัญชีด้านบน) ลบแล้วข้อมูลบนเซิร์ฟเวอร์หายทั้งหมดและย้อนกลับไม่ได้ ควรส่งออกข้อมูลก่อนถ้าอยากเก็บไว้</p>
        <div class="stack"><button type="button" class="btn" data-mine="to-delete">ไปที่ปุ่มลบบัญชี</button></div>
      </section>
    </div>`);
  el.addEventListener("click", async e => {
    const b = e.target.closest("[data-mine]");
    if (!b) return;
    Sound.play("tap");
    const what = b.dataset.mine;
    if (what === "close") closeLayer(el);
    else if (what === "retry") paintStats(el);
    else if (what === "to-delete") {
      closeLayer(el);
      if (settingsLayer) { openSub("account"); const del = $('[data-act="delete"]', subLayers.account.el); if (del) del.scrollIntoView({ block: "center" }); }
    } else if (what === "export") {
      b.disabled = true;
      const { data, problem } = await Net.myData();
      b.disabled = false;
      if (problem) toast(MINE_PROBLEM[problem]);
      else offerFile(`pingpong-data-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(data, null, 1));
    }
  });
  paintStats(el);
}
/* Tier and feed mix are for members. Free players see the same place, said politely, with nothing to buy yet. */
/* The feed page and the icon page are for members. Free players see the same place, said politely, with nothing to buy yet. */
function feedPageHtml() {
  if (!canCustomize()) return `${subHead("ปรับฟีด", "ตั้งค่า")}
    ${setGroup("", `<div class="set-pad" data-member-locked><p class="small">เลือกความยากของปริศนาเอง ปรับสัดส่วนการ์ดในฟีด เป็นสิทธิ์ของสมาชิก ตอนนี้ปิ๊งป่องเลือกความยากให้ตามที่คุณเล่น เนื้อหาและทุกระดับความยากเล่นได้ฟรีเหมือนเดิม</p></div>`)}`;
  return `${subHead("ปรับฟีด", "ตั้งค่า")}
    ${setGroup("ความยากของปริศนา", `<div class="set-pad" id="tier-slot">${tierHtml()}</div>`)}
    ${setGroup("", setItem({ act: "weights", icon: "sliders", tone: "t-indigo", title: "สัดส่วนการ์ดในฟีด", sub: weightsSummary(), subAttrs: 'id="mix-summary" data-sub="mix"' }))}`;
}
function iconsPageHtml() {
  if (!canCustomize()) return `${subHead("ไอคอนแอพ", "ตั้งค่า")}
    ${setGroup("", `<div class="set-pad" data-icons-locked><p class="small">ไอคอนสำรองของแอพเป็นสิทธิ์ของสมาชิก ตอนนี้ใช้ไอคอนปกติ เมื่อเป็นสมาชิกจะเลือกไอคอนอื่นได้ที่นี่</p></div>`)}`;
  return `${subHead("ไอคอนแอพ", "ตั้งค่า")}
    ${setGroup("", `<div class="set-pad"><div id="icon-slot" class="seg wrap" role="radiogroup" aria-label="ไอคอนแอพ">${iconHtml(null)}</div></div>`)}`;
}
function iconHtml(current) {
  return [{ id: null, name: "ไอคอนปกติ" }, ...Native.altIcons.list].map(i =>
    `<button type="button" role="radio" aria-checked="${(i.id || null) === current}" data-icon-pick="${esc(i.id || "")}">${esc(i.name)}</button>`).join("");
}
let shownCustom = null, feedCustom = null;
/* Membership started or ended while the app is open: the feed follows at once, cards not reached yet included. */
function memberAccessChanged() {
  const now = canCustomize();
  applyTheme(); // the premium theme follows membership
  if (!now && feedCustom !== null && feedCustom !== now && Native.altIcons.available()) Native.altIcons.set(null).catch(() => {}); // an icon for members goes back to the default
  if (feedCustom === null) { feedCustom = now; return; }
  if (feedCustom === now) return;
  feedCustom = now;
  try { feedOptionsChanged(); } catch {}
}
/* ---------- the theme and the skin: one page, chosen apart ----------
   Each look has an id, a name and a note. A look with `members` is for members: everyone sees it and can look at it live
   (the page applies it until it is closed, nothing is kept), only members can choose it. Adding a theme or a skin later is one entry
   here, its CSS in template.html (themes) or its drawings in brand/ (skins). */
const LOOKS = {
  theme: [
    { id: "system", name: "ตามเครื่อง", note: "สว่างหรือมืดตามที่เครื่องตั้งไว้", thumb: "--t-bg:linear-gradient(135deg,#FFFFFF 50%,#0E0E12 50%);--t-card:#9696A4;--t-acc:#FFC233" },
    { id: "light", name: "สว่าง", note: "พื้นขาว อ่านสบายตอนกลางวัน", thumb: "--t-bg:#FFFFFF;--t-card:#E2E2E8;--t-acc:#FFC233" },
    { id: "dark", name: "มืด", note: "พื้นเข้ม ถนอมสายตาตอนกลางคืน", thumb: "--t-bg:#0E0E12;--t-card:#2E2E37;--t-acc:#FFC233" },
    { id: "premium", name: "ธีมดาว", note: "ท้องฟ้ายามค่ำ ดาวทองที่ขยับได้", members: true, thumb: "--t-bg:linear-gradient(160deg,#0B0B10,#1A1024);--t-card:#2D2B35;--t-acc:linear-gradient(90deg,#FFE08A,#FFC233,#E3A400)" },
  ],
  skin: [
    { id: "default", name: "น้องป่องธรรมดา", note: "น้องป่องตัวเดิมที่คุ้นเคย", art: "happy" },
    { id: "premium", name: "น้องป่องประกายทอง", note: "อัญมณีทองที่ปลายหนามและประกายรอบตัว", members: true, art: "happy" },
  ],
};
const LOOK_KIND = { theme: "ธีม", skin: "สกิน" };
const lookItem = (kind, id) => LOOKS[kind].find(i => i.id === id) || LOOKS[kind][0];
const lookOpen = (kind, item) => !item.members || isMember();
/* What is chosen, as far as this player may use it: a members' look they chose before, without membership, counts as the first one. */
const lookChosen = kind => { const item = lookItem(kind, kind === "theme" ? settings.theme : settings.skin); return lookOpen(kind, item) ? item : LOOKS[kind][0]; };
const lookSummary = () => `ธีม${lookChosen("theme").name} · สกิน${lookChosen("skin").name}`;
const LOCK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
const CHECK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
function lookTileHtml(kind, item) {
  const chosen = lookChosen(kind).id === item.id, open = lookOpen(kind, item), previewing = look[kind] === item.id;
  const thumb = kind === "skin" ? `<span class="look-thumb skin" aria-hidden="true">${(item.id === "premium" ? FACE_PREMIUM : FACE)[item.art]}</span>`
    : `<span class="look-thumb" style="${item.thumb}" aria-hidden="true"><span class="look-mini">${FACE.happy}</span></span>`;
  const state = previewing ? '<span class="look-state on">กำลังดูตัวอย่าง</span>'
    : chosen ? `<span class="look-state on">${CHECK_ICON}ใช้อยู่</span>`
    : open ? "" : `<span class="look-state">${LOCK_ICON}สำหรับสมาชิก</span>`;
  return `<button type="button" role="radio" class="look-tile${open ? "" : " locked"}${previewing ? " previewing" : ""}" aria-checked="${chosen}" data-look="${kind}" data-id="${item.id}">
    ${thumb}<b class="look-name">${esc(item.name)}</b><span class="muted small">${esc(item.note)}</span>${state}</button>`;
}
/* One tab for themes and one for skins; inside a tab the looks for everyone come first, then those for members, in a grid of cards
   that grows by rows. A new look is one entry in LOOKS: nothing here changes. */
function looksBodyHtml(tab) {
  const names = ["theme", "skin"].filter(k => look[k]).map(k => `${LOOK_KIND[k]} “${lookItem(k, look[k]).name}”`);
  const banner = names.length ? `<div class="looks-banner" data-looks-banner role="status"><span class="small">กำลังดูตัวอย่าง ${esc(names.join(" และ "))} เป็นสิทธิ์ของสมาชิก ปิดหน้านี้แล้วจะกลับเป็นแบบเดิม</span><button type="button" class="btn" data-looks-reset>ดูแบบเดิม</button></div>` : "";
  const tabs = `<div class="look-tabs" role="tablist">${["theme", "skin"].map(k => `<button type="button" role="tab" aria-selected="${tab === k}" data-looks-tab="${k}">${LOOK_KIND[k]}</button>`).join("")}</div>`;
  const panel = kind => {
    const sections = [["แบบทั่วไป", LOOKS[kind].filter(i => !i.members)], ["สำหรับสมาชิก", LOOKS[kind].filter(i => i.members)]].filter(([, items]) => items.length);
    return `<div data-looks-panel="${kind}"${tab === kind ? "" : " hidden"}>${sections.map(([name, items]) =>
      `<h3 class="set-group-title">${name}</h3><div class="look-grid" role="radiogroup" aria-label="${LOOK_KIND[kind]}">${items.map(i => lookTileHtml(kind, i)).join("")}</div>`).join("")}</div>`;
  };
  return `${banner}${tabs}${panel("theme")}${panel("skin")}`;
}
function openLooks() {
  let tab = "theme";
  const el = showLayer("page looks", `${subHead("ธีมและสกิน", "ตั้งค่า", "data-looks-close")}
    <p class="muted small">เลือกหน้าตาของแอพและน้องป่อง แยกกันได้ ของสมาชิกแตะดูตัวอย่างได้ทุกคน</p><div class="set-body" id="looks-body">${looksBodyHtml(tab)}</div>`);
  const paint = () => { $("#looks-body", el).innerHTML = looksBodyHtml(tab); };
  const endPreview = () => { if (look.theme || look.skin) { look.theme = look.skin = null; applyTheme(); } };
  el.addEventListener("click", e => {
    if (e.target.closest("[data-looks-close]")) { Sound.play("tap"); endPreview(); closeLayer(el); refreshSettings(); return; }
    if (e.target.closest("[data-looks-reset]")) { Sound.play("tap"); endPreview(); paint(); return; }
    const tabBtn = e.target.closest("[data-looks-tab]");
    if (tabBtn) { Sound.play("tap"); tab = tabBtn.dataset.looksTab; paint(); return; }
    const tile = e.target.closest("[data-look]");
    if (!tile) return;
    const kind = tile.dataset.look, item = lookItem(kind, tile.dataset.id);
    Sound.play("tap");
    if (lookOpen(kind, item)) { // chosen: kept, and the look of it replaces a preview of the same kind
      look[kind] = null;
      saveSettings(kind === "theme" ? { theme: item.id } : { skin: item.id });
    } else look[kind] = item.id; // looked at only
    applyTheme();
    paint();
  });
}
const HUB_SUB = {
  looks: () => lookSummary(),
  icons: () => "เปลี่ยนไอคอนที่หน้าจอเครื่อง",
  categories: () => categorySummary(),
  feed: () => (canCustomize() ? "ความยากและสัดส่วนการ์ด" : "เลือกความยากและสัดส่วนการ์ดเอง"),
  mix: () => weightsSummary(),
  sound: () => (settings.sound ? `เปิด · ระดับ ${Math.round(settings.volume * 100)}%` : "ปิด"),
  rest: () => (settings.breakOn !== false ? `เตือนทุก ${settings.breakEvery} นาที · พัก ${settings.breakSecs} วินาที` : "ปิด"),
  stats: () => (statsOn() ? "ส่งสถิติ: เปิด" : "ส่งสถิติ: ปิด"),
  local: () => "ลบความคืบหน้าในเครื่องนี้",
  invite: () => "ส่งลิงก์ให้เพื่อนหรือครอบครัว",
  legal: () => `เอกสารฉบับ ${LEGAL.version}`,
};
const hubRow = (key, act, icon, tone, title, extra = {}) => setItem({ act, icon, tone, title, sub: HUB_SUB[key](), subAttrs: `data-sub="${key}"${extra.subAttrs ? " " + extra.subAttrs : ""}`, badge: extra.badge || "" });
function settingsGroupsHtml() {
  const lock = canCustomize() ? "" : SET_LOCK_BADGE;
  return [
    setGroup("หน้าตา", hubRow("looks", "looks", "palette", "t-ping", "ธีมและสกิน", { subAttrs: 'id="look-summary" data-look-summary' })
      + (Native.altIcons.available() ? hubRow("icons", "icons", "app", "t-pong", "ไอคอนแอพ", { badge: lock }) : "")),
    setGroup("การเล่น", hubRow("categories", "categories", "grid", "t-teal", "หมวดที่อยากเล่น", { subAttrs: 'id="cat-summary"' })
      + hubRow("feed", "feed", "sliders", "t-indigo", "ปรับฟีด", { badge: lock })),
    setGroup("เสียงและการพัก", hubRow("sound", "sound", "speaker", "t-ping", "เสียง") + hubRow("rest", "rest", "moon", "t-teal", "พักสายตา")),
    setGroup("ข้อมูลและความเป็นส่วนตัว", (BACKEND ? hubRow("stats", "stats", "chart", "t-indigo", "สถิติการเล่น") : "") + hubRow("local", "local", "trash", "t-gray", "ข้อมูลในเครื่อง")),
    setGroup("เกี่ยวกับ", hubRow("invite", "invite", "share", "t-pong", "ชวนเพื่อนมาเล่น") + hubRow("legal", "legal", "doc", "t-gray", "ข้อกำหนดและความเป็นส่วนตัว")),
  ].join("");
}
function settingsHtml() {
  shownCustom = canCustomize();
  return `<div class="page-head"><button type="button" class="btn-back" data-back data-act="close" aria-label="ปิด">ปิด</button><h2>ตั้งค่า</h2></div>
    <div class="set-body"><div id="account-slot">${accountHtml()}</div><div id="set-groups">${settingsGroupsHtml()}</div>
    <p class="set-foot muted small">ปิ๊งป่อง เวอร์ชัน ${esc(APP_VERSION)} · เอกสารฉบับ ${esc(LEGAL.version)}</p></div>`;
}

/* The pages the rows open. html() draws one; refresh(entry) keeps it current when something changes under it (a sign-in, a membership). */
function soundPageHtml() {
  return `${subHead("เสียง", "ตั้งค่า")}
    ${setGroup("", setSwitchRow({ icon: "speaker", tone: "t-ping", title: "เปิดเสียง", sub: "เสียงประกอบตอนแตะและตอบ", name: "sound", value: settings.sound })
      + `<div class="set-range"><label for="vol">ระดับเสียง</label><input id="vol" type="range" min="0" max="100" step="5" value="${Math.round(settings.volume * 100)}" ${settings.sound ? "" : "disabled"}></div>`)}`;
}
function restPageHtml() {
  return `${subHead("พักสายตา", "ตั้งค่า")}${setGroup("", `<div class="set-pad" id="rest-slot">${restHtml()}</div>`)}`;
}
function statsPageHtml() {
  const s = Net.status(), signedIn = s.mode === "google";
  return `${subHead("สถิติการเล่น", "ตั้งค่า")}
    ${setGroup("", setSwitchRow({ icon: "chart", tone: "t-indigo", title: "ส่งสถิติการเล่น", sub: "คำตอบ เวลา การข้าม และการพัก ไม่มีชื่อหรืออีเมล ปิดแล้วหยุดส่งทันที", name: "stats", value: statsOn() })
      + (BACKEND.turnstile ? `<p class="set-note muted small" data-cloudflare-note>${esc(CLOUDFLARE_NOTE)}</p>` : ""))}
    ${signedIn ? setGroup("ข้อมูลของฉัน", `<button type="button" class="set-item" data-act="mine"><span class="set-tile t-teal">${setIcon("chart")}</span><span class="set-text"><b>สถิติและข้อมูลของฉัน</b><span class="muted">ดูสถิติ ส่งออกข้อมูล</span></span>${setIcon("chev", "set-chev")}</button>`) : ""}
    ${!signedIn && s.mode !== "none" ? setGroup("ข้อมูลบนเซิร์ฟเวอร์", `<button type="button" class="set-item danger" data-act="delete"><span class="set-tile t-pong">${setIcon("trash")}</span><span class="set-text"><b>ลบข้อมูลของฉันบนเซิร์ฟเวอร์</b><span class="muted">ลบสถิติที่ส่งไว้ทั้งหมด ย้อนกลับไม่ได้</span></span></button>`) : ""}`;
}
function localPageHtml() {
  return `${subHead("ข้อมูลในเครื่อง", "ตั้งค่า")}
    ${setGroup("", `<div class="set-pad"><p class="small">ล้างข้อและด่านที่เล่นแล้ว คะแนนที่ดีที่สุด และระดับความยากที่ไล่มา ในเครื่องนี้ การตั้งค่าไม่ถูกลบ ถ้าเข้าสู่ระบบอยู่ ความคืบหน้าในบัญชียังอยู่และกลับมาเมื่อซิงก์ครั้งถัดไป</p>
      <div class="stack"><button type="button" class="btn danger" data-act="wipe">ลบความคืบหน้าในเครื่อง</button></div></div>`)}`;
}
const subLayers = {};
const SUB_PAGES = {
  account: { html: accountPageHtml, refresh: entry => { if (Net.status().mode !== "google") { closeLayer(entry.el); delete subLayers.account; } else fillLayer(entry.el, accountPageHtml()); } },
  stats: { html: statsPageHtml, refresh: entry => { const sw = $('[data-switch="stats"]', entry.el); if (sw) sw.setAttribute("aria-checked", statsOn()); } },
  sound: { html: soundPageHtml, refresh: entry => { const sw = $('[data-switch="sound"]', entry.el); if (sw) sw.setAttribute("aria-checked", !!settings.sound); } },
  rest: { html: restPageHtml, refresh: entry => { const slot = $("#rest-slot", entry.el); if (slot) slot.innerHTML = restHtml(); } },
  local: { html: localPageHtml },
  feed: { html: feedPageHtml, member: true },
  icons: { html: iconsPageHtml, member: true },
};
function openSub(name) {
  const def = SUB_PAGES[name];
  if (!def || subLayers[name]) return;
  const el = showLayer(`page sub sub-${name}`, def.html());
  subLayers[name] = { el, def, custom: canCustomize() };
  wireSettings(el, () => { closeLayer(el); delete subLayers[name]; refreshSettings(); });
  if (name === "icons" && canCustomize()) Native.altIcons.current().then(now => { const slot = $("#icon-slot", el); if (slot) slot.innerHTML = iconHtml(now); });
}
function openSettings() {
  if (settingsLayer) return;
  const el = settingsLayer = showLayer("page settings", settingsHtml());
  wireSettings(el, () => { closeLayer(el); settingsLayer = null; });
}
/* One listener set for the list and every page under it: each page is its own layer, `close` closes the one it is on. */
function wireSettings(el, close) {
  el.addEventListener("input", e => {
    if (e.target.id === "vol") { saveSettings({ volume: +e.target.value / 100 }); Sound.refresh(); }
  });
  el.addEventListener("change", e => { if (e.target.id === "vol") Sound.play("tap"); });
  el.addEventListener("click", async e => {
    const sw = e.target.closest("[data-switch]");
    const act = e.target.closest("[data-act]");
    const restPick = e.target.closest("[data-rest-every],[data-rest-secs]");
    const tierPick = e.target.closest("[data-tier-pick]");
    const iconPick = e.target.closest("[data-icon-pick]");
    if (iconPick) {
      const id = iconPick.dataset.iconPick || null;
      Sound.play("tap");
      Native.altIcons.set(id).then(() => {
        el.querySelectorAll("[data-icon-pick]").forEach(b => b.setAttribute("aria-checked", b === iconPick));
        toast("เปลี่ยนไอคอนแล้ว");
      }, () => toast("เปลี่ยนไอคอนไม่สำเร็จ ลองอีกครั้ง"));
    } else if (tierPick) {
      saveSettings({ tier: tierPick.dataset.tierPick });
      $("#tier-slot", el).innerHTML = tierHtml();
      Sound.play("tap");
      feedOptionsChanged();
    } else if (sw) {
      const on = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", on);
      if (sw.dataset.switch === "sound") {
        saveSettings({ sound: on });
        Sound.refresh();
        $("#vol", el).disabled = !on;
      } else if (sw.dataset.switch === "rest") {
        saveSettings({ breakOn: on });
        restSettingsChanged();
        $("#rest-slot", el).innerHTML = restHtml();
      } else {
        decide("analytics", on);
        Net.consentChanged();
      }
      Sound.play("tap");
    } else if (restPick) {
      saveSettings(restPick.dataset.restEvery ? { breakEvery: +restPick.dataset.restEvery } : { breakSecs: +restPick.dataset.restSecs });
      $("#rest-slot", el).innerHTML = restHtml();
      Sound.play("tap");
    } else if (act) {
      Sound.play("tap");
      const name = act.dataset.act;
      if (name === "close") close();
      else if (SUB_PAGES[name]) openSub(name);
      else if (name === "legal") showLegal();
      else if (name === "invite") shareOut(SHARE_INVITE, CONFIG.shareBase);
      else if (name === "categories") openCategories();
      else if (name === "weights") openWeights();
      else if (name === "mine") openMine();
      else if (name === "login") {
        act.disabled = true;
        const problem = await Net.login();
        if (problem) { toast(problem); act.disabled = false; }
      } else if (name === "logout") {
        const yes = await ask({ title: "ออกจากระบบไหม", text: "ความคืบหน้า การตั้งค่า และความยินยอมจะถูกล้างออกจากเครื่องนี้ แอพจะเริ่มใหม่เหมือนเปิดครั้งแรก ความคืบหน้าของบัญชียังอยู่บนเซิร์ฟเวอร์ เข้าสู่ระบบอีกครั้งเมื่อไหร่ก็กลับมา",
          buttons: [{ label: "ออกจากระบบ", kind: "primary", value: true }, { label: "ยกเลิก", value: false }] });
        if (!yes) return;
        if (!(await Net.saveBeforeLogout())) {
          const anyway = await ask({ title: "ยังบันทึกไม่ได้", text: "ตอนนี้ต่อเซิร์ฟเวอร์ไม่ได้ ถ้าออกเลย ความคืบหน้าและการเปลี่ยนใจเรื่องสถิติที่ยังไม่ได้ส่งจะหายไป และเครื่องอื่นของบัญชีนี้จะไม่รู้",
            buttons: [{ label: "ออกเลย", kind: "danger", value: true }, { label: "ยกเลิก", value: false }] });
          if (!anyway) return;
        }
        await Net.logout();
        location.reload();
      } else if (name === "looks") {
        openLooks();
      } else if (name === "wipe") {
        const signedIn = Net.status().mode === "google";
        const yes = await ask({ title: "ลบความคืบหน้าในเครื่องไหม",
          text: signedIn ? "ความคืบหน้าในบัญชียังอยู่ และจะกลับมาเมื่อซิงก์ครั้งถัดไป" : "ข้อและด่านที่เล่นไปแล้วจะกลับมาเริ่มใหม่ ย้อนกลับไม่ได้",
          buttons: [{ label: "ลบความคืบหน้า", kind: "danger", value: true }, { label: "ยกเลิก", value: false }] });
        if (yes) {
          const gen = played.gen;
          setPlayed({ ...emptyProgress(), gen });
          store.set(KEYS.progress, played);
          Ladder.reset(); // the tiers start over from easy too
          Best.reset();
          ArcadeBest.reset();
          location.reload();
        }
      } else if (name === "delete") {
        const yes = await ask({ title: "ลบบัญชีและข้อมูลทั้งหมดไหม",
          text: "ความคืบหน้า การตั้งค่า ประวัติการเล่น และบันทึกความยินยอมจะถูกลบจริงทั้งบนเซิร์ฟเวอร์และในเครื่องนี้ ย้อนกลับไม่ได้",
          buttons: [{ label: "ลบถาวร", kind: "danger", value: true }, { label: "ยกเลิก", value: false }] });
        if (yes) {
          const problem = await Net.deleteAccount();
          if (problem) toast(problem); else location.reload();
        }
      }
    }
  });
}
function refreshSettings() {
  if (!settingsLayer) return;
  const slot = $("#account-slot", settingsLayer);
  if (slot) slot.innerHTML = accountHtml();
  if (shownCustom !== canCustomize()) { const groups = $("#set-groups", settingsLayer); if (groups) groups.innerHTML = settingsGroupsHtml(); }
  shownCustom = canCustomize();
  for (const [name, entry] of Object.entries(subLayers)) {
    if (entry.def.member && entry.custom !== canCustomize()) { // membership started or ended under an open page
      entry.custom = canCustomize();
      fillLayer(entry.el, entry.def.html());
      if (name === "icons" && canCustomize()) Native.altIcons.current().then(now => { const iconSlot = $("#icon-slot", entry.el); if (iconSlot) iconSlot.innerHTML = iconHtml(now); });
    } else if (entry.def.refresh) entry.def.refresh(entry);
  }
  overlayRoot.querySelectorAll("[data-sub]").forEach(node => { node.textContent = HUB_SUB[node.dataset.sub](); });
}

/* ---------- start ---------- */
const callbacks = {
  changed: () => { memberAccessChanged(); refreshSettings(); restSettingsChanged(); categoriesChanged(); },
  toast,
  askExisting: async () => {
    const go = await ask({ title: "บัญชี Google นี้มีข้อมูลอยู่แล้ว", text: "เข้าสู่ระบบบัญชีนั้นต่อได้ แล้วเลือกว่าจะรวมข้อมูลในเครื่องนี้เข้าไปไหม ระหว่างนี้ข้อมูลในเครื่องจะไม่หาย",
      buttons: [{ label: "เข้าสู่ระบบบัญชีนี้", kind: "primary", value: true }, { label: "ยังไม่ทำตอนนี้", value: false }] });
    if (go) { const problem = await Net.continueToExisting(); if (problem) toast(problem); }
  },
  askMerge: hasGuest => ask({ title: "มีความคืบหน้าทั้งในเครื่องและในบัญชี", text: "รวมกันจะเก็บของทั้งสองฝั่งไว้ครบ ถ้าใช้ของบัญชีอย่างเดียว ความคืบหน้าในเครื่องนี้จะถูกแทนที่"
      + (hasGuest ? " และสถิติการเล่นที่ส่งไว้ตอนยังไม่เข้าสู่ระบบจะถูกลบจากเซิร์ฟเวอร์ถาวร" : ""),
    buttons: [{ label: "รวมกัน (แนะนำ)", kind: "primary", value: "merge" }, { label: "ใช้ของบัญชีอย่างเดียว", value: "account" }] }),
  progressReplaced: () => location.reload(),
  nothingInHand,
};

/* Premium: a burst of gold stars where a win appears. A result box is added to the page when a card is won or answered; if it is
   a win and the premium theme is on (and the device does not ask for less motion), stars fly out of it and are removed. */
const REDUCED_MOTION = matchMedia("(prefers-reduced-motion: reduce)");
function burstStars(box) {
  const burst = document.createElement("span");
  burst.className = "spark-burst";
  burst.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 12; i++) {
    const star = document.createElement("i"), angle = (i / 12) * Math.PI * 2 + Math.random() * 0.4, far = 70 + Math.random() * 70;
    star.style.setProperty("--dx", `${Math.round(Math.cos(angle) * far)}px`);
    star.style.setProperty("--dy", `${Math.round(Math.sin(angle) * far * 0.8)}px`);
    star.style.animationDelay = `${Math.round(Math.random() * 120)}ms`;
    star.style.width = star.style.height = `${8 + Math.round(Math.random() * 8)}px`;
    burst.appendChild(star);
  }
  box.appendChild(burst);
  setTimeout(() => burst.remove(), 1400);
}
/* ---------- sharing: the phone's own share sheet, or the link copied when there is none ----------
   Nothing is sent from here: the link only goes where the player sends it. */
async function shareOut(text, url) {
  if (typeof navigator.share === "function") {
    try { await navigator.share({ text, url }); return; }
    catch (e) { if (e && e.name === "AbortError") return; } // closed the sheet: done; any other trouble falls through to copying
  }
  try { await navigator.clipboard.writeText(`${text} ${url}`); toast("คัดลอกลิงก์แล้ว ส่งต่อได้เลย"); return; } catch {}
  await ask({ title: "ลิงก์สำหรับส่งต่อ", text: `${text} ${url}`, buttons: [{ label: "ปิด", kind: "primary", value: true }] });
}
/* A small share button on the result of a card (after a question is answered, or a level is won): the card the result is in. */
function addShareButton(box) {
  if (box.querySelector("[data-share]")) return;
  const slide = box.closest(".slide");
  const at = slide && [...nodes].find(([, el]) => el === slide);
  const card = at && cards[at[0]];
  if (!card || card.kind === "break") return;
  box.insertAdjacentHTML("beforeend", `<button type="button" class="share-btn" data-share aria-label="ส่งการ์ดนี้ให้เพื่อน">${setIcon("share")}</button>`);
}
function watchShare() {
  const feedEl = $("#feed");
  new MutationObserver(changes => {
    for (const change of changes) for (const node of change.addedNodes) {
      if (node.nodeType !== 1) continue;
      const box = node.matches(".result") ? node : node.querySelector(".result");
      if (box) addShareButton(box);
    }
  }).observe(feedEl, { childList: true, subtree: true });
  feedEl.addEventListener("click", e => {
    const button = e.target.closest("[data-share]");
    const slide = button && button.closest(".slide");
    const at = slide && [...nodes].find(([, el]) => el === slide);
    const card = at && cards[at[0]];
    if (!card) return;
    Sound.play("tap");
    shareOut(shareText(card.kind, card.st.won ? cardMs(card) / 1000 : 0), shareLink(CONFIG.shareBase, cardRef(card)[0]));
  });
}
/* The card a link asks for leaves the address bar once it is read, so a reload does not deal it again. */
function takeSharedFromAddress() {
  try {
    const params = new URLSearchParams(location.search);
    if (!params.has(SHARE_PARAM)) return;
    params.delete(SHARE_PARAM);
    const rest = params.toString();
    history.replaceState(null, "", location.pathname + (rest ? "?" + rest : "") + location.hash);
  } catch {}
}
/* A link opened while the app is running reloads it on that card (the same way the way back from sign-in does); one that started the app is read at once. */
async function sharedFromPhone() {
  if (!Native.on) return;
  Native.listen("App", "appUrlOpen", e => {
    if (!shareFromLink(e.url, CONFIG.shareBase)) return;
    location.replace(location.pathname + "?" + SHARE_PARAM + "=" + new URL(e.url).searchParams.get(SHARE_PARAM));
  });
  if (sharedAsk) return;
  const url = await Promise.race([Native.launchUrl(), new Promise(r => setTimeout(r, 800, null))]);
  let seen = null; // the same start link is given again after a reload (signing in reloads the app): it counts once
  try { seen = sessionStorage.getItem("pingpong-link-seen"); if (url) sessionStorage.setItem("pingpong-link-seen", url); } catch {}
  const ask = url && url !== seen && shareFromLink(url, CONFIG.shareBase);
  if (ask) sharedAsk = ask;
}
function watchCelebrations() {
  new MutationObserver(changes => {
    if (document.documentElement.dataset.theme !== "premium" || REDUCED_MOTION.matches) return;
    for (const change of changes) for (const node of change.addedNodes) {
      if (node.nodeType !== 1) continue;
      const box = node.matches(".result") ? node : node.querySelector(".result");
      if (box && box.querySelector(".verdict.ok")) burstStars(box);
    }
  }).observe($("#feed"), { childList: true, subtree: true });
}
async function start() {
  applyTheme();
  watchCelebrations();
  watchShare();
  takeSharedFromAddress();
  await sharedFromPhone();
  $("#open-arcade").innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${GAME_ICON}</svg>`;
  $("#open-arcade").onclick = () => { Sound.play("tap"); Arcade.open(); };
  $("#open-settings").innerHTML = GEAR;
  $("#open-settings").onclick = () => { Sound.play("tap"); openSettings(); };
  matchMedia("(prefers-color-scheme: light)").addEventListener("change", applyTheme);
  fill();
  const showFirst = introDue(); // before consent, which a first run writes
  if (needsConsent()) {
    await askConsent();
    Net.consentChanged();
  }
  if (showFirst) await showIntro();
  RestClock.settle(false); // a finished rest the app was closed on, with no time to say so
  Net.boot(callbacks).catch(() => {});
}
start();
