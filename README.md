<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Tajawal&size=32&duration=3000&pause=1000&color=D4A843&center=true&vCenter=true&width=600&lines=%D8%A8%D8%B7%D8%A7%D9%82%D8%A9+%D8%B9%D9%8A%D8%AF+%D9%85%D8%A8%D8%A7%D8%B1%D9%83+%F0%9F%8C%99;Eid+Mubarak+Card+Generator" alt="Typing SVG" />

<br/>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/No_Dependencies-00C9B1?style=for-the-badge"/>
<img src="https://img.shields.io/badge/RTL_Support-D4A843?style=for-the-badge"/>

<br/>

[![GitHub stars](https://img.shields.io/github/stars/tamer-Assaf2/Eid-Card?style=social)](https://github.com/tamer-Assaf2/Eid-Card/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/tamer-Assaf2/Eid-Card?style=social)](https://github.com/tamer-Assaf2/Eid-Card/network/members)
[![GitHub issues](https://img.shields.io/github/issues/tamer-Assaf2/Eid-Card)](https://github.com/tamer-Assaf2/Eid-Card/issues)
[![GitHub license](https://img.shields.io/github/license/tamer-Assaf2/Eid-Card)](https://github.com/tamer-Assaf2/Eid-Card/blob/main/LICENSE)

<br/><br/>

**بطاقة معايدة تفاعلية بتصميم فاخر عصري — مبنية بـ HTML/CSS/JS خالص بدون أي مكتبات خارجية**

[🚀 تجربة مباشرة](https://tamer-assaf2.github.io/Eid-Card/) · [📸 لقطات الشاشة](#-لقطات-الشاشة) · [✨ المميزات](#-المميزات) · [🛠️ الاستخدام](#-الاستخدام)

</div>

---

## ✨ المميزات

| الميزة               | التفاصيل                                               |
| -------------------- | ------------------------------------------------------ |
| 🎨 **تصميم فاخر**    | خلفية داكنة مع توهج ذهبي وجزيئات متحركة وتأثير Shimmer |
| 📸 **Photo Preview** | اسحب وزوّم وعدّل السطوع قبل تطبيق الصورة على البطاقة   |
| ✂️ **نسب متعددة**    | دعم نسب 1:1 و 4:5 و 16:9 مع إعادة ضبط تلقائية          |
| 📱 **Pinch-to-Zoom** | دعم كامل للمس وتكبير بإصبعين على الموبايل              |
| ✏️ **تخصيص كامل**    | تعديل العنوان، عبارة التهنئة، واسم المرسل مباشرةً      |
| 🔗 **مشاركة سريعة**  | زر مشاركة يدعم Web Share API مع fallback للنسخ         |
| 🌐 **بدون مكتبات**   | Vanilla JS خالص — لا React، لا jQuery، لا شيء          |
| 📂 **ملف واحد**      | كل شيء في `index.html` واحد — سهل الاستضافة والمشاركة  |

---

## 📸 لقطات الشاشة

<div align="center">

|                                 البطاقة الرئيسية                                  |                                       المعاينة 1                                       |                                       المعاينة 2                                       |
| :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| ![Card](https://raw.githubusercontent.com/tamer-Assaf2/Eid-Card/main/photo/1.png) | ![Preview 1](https://raw.githubusercontent.com/tamer-Assaf2/Eid-Card/main/photo/2.png) | ![Preview 2](https://raw.githubusercontent.com/tamer-Assaf2/Eid-Card/main/photo/3.png) |

</div>

---

## 🚀 البدء السريع

### طريقة 1 — تشغيل مباشر

```bash
# لا يحتاج أي تثبيت
# فقط افتح الملف في المتصفح
open index.html
```

### طريقة 2 — GitHub Pages

```bash
# 1. Fork المشروع
# 2. Settings → Pages → Source: main branch
# 3. الرابط سيكون:
# https://tamer-assaf2.github.io/Eid-Card/
```

### طريقة 3 — استضافة محلية

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# ثم افتح: http://localhost:8000
```

---

## 🛠️ الاستخدام

### 1. إضافة صورة شخصية

اضغط على منطقة الصورة في البطاقة أو زر "اختر صورة" في لوحة التحكم.

### 2. ضبط الصورة في الـ Preview

```
🖱️  اسحب  →  لتحريك الصورة
🔍  Slider  →  للتكبير/التصغير (50% – 300%)
☀️  Slider  →  للسطوع
■   نسبة   →  اختر 1:1 أو 4:5 أو 16:9
📱  Pinch   →  تكبير بإصبعين على الموبايل
🖱️  Scroll  →  تكبير بعجلة الماوس
```

### 3. تخصيص النصوص

عدّل مباشرة من لوحة "خصّص بطاقتك" في الأسفل — التحديث فوري في الوقت الحقيقي.

### 4. المشاركة

- **موبايل:** يفتح نافذة المشاركة الأصلية (WhatsApp, Telegram...)
- **ديسكتوب:** ينسخ الرابط تلقائياً للـ Clipboard

---

## 🏗️ هيكل المشروع

```
Eid-Card/
│
├── index.html          # كل شيء — HTML + CSS + JS في ملف واحد
└── README.md           # أنت هنا
```

### المكونات الداخلية

```
index.html
├── 🎨 CSS Variables     ── نظام ألوان ثابت (gold, ink, accent...)
├── 🃏 .card             ── البطاقة الرئيسية مع animations
├── 📸 .photo-zone       ── منطقة الصورة القابلة للنقر
├── 📐 .modal-backdrop   ── نافذة Photo Preview
│   ├── crop-viewport    ── منطقة السحب والزوم
│   ├── ratio buttons    ── أزرار النسب
│   └── sliders          ── زوم + سطوع
├── 🎛️ .controls         ── لوحة التخصيص
└── ⚡ JavaScript        ── منطق التفاعل الكامل
```

---

## ⚙️ التخصيص للمطورين

### تغيير الألوان

```css
/* في :root داخل index.html */
:root {
  --gold: #d4a843; /* اللون الذهبي الأساسي */
  --gold-light: #f0cc6e; /* الذهبي الفاتح */
  --ink: #0a1628; /* خلفية البطاقة */
  --accent: #00c9b1; /* لون التمييز الأول */
  --accent2: #7b5ea7; /* لون التمييز الثاني */
}
```

### تغيير النص الافتراضي

```html
<!-- ابحث عن هذا في index.html وعدّله -->
<h1 class="main-title" id="main-title">عيد مبارك</h1>
<p class="sub-title">Eid Mubarak</p>
```

### تغيير حدود الزوم

```javascript
// في دالة updateZoom و wheel event
min="50" max="300"   // غيّر هذه القيم حسب احتياجك
```

---

## 🌐 المتصفحات المدعومة

| المتصفح       | الدعم            |
| ------------- | ---------------- |
| Chrome 80+    | ✅ كامل          |
| Firefox 75+   | ✅ كامل          |
| Safari 14+    | ✅ كامل          |
| Edge 80+      | ✅ كامل          |
| Mobile Chrome | ✅ كامل مع Touch |
| Mobile Safari | ✅ كامل مع Pinch |

> ⚠️ **ملاحظة:** Web Share API تعمل فقط على HTTPS أو localhost

---

## 🤝 المساهمة

المساهمات مرحب بها! إليك كيف تبدأ:

```bash
# 1. Fork المشروع
git clone https://github.com/tamer-Assaf2/Eid-Card.git

# 2. أنشئ branch جديد
git checkout -b feature/amazing-feature

# 3. Commit تغييراتك
git commit -m "feat: add amazing feature"

# 4. Push وافتح Pull Request
git push origin feature/amazing-feature
```

### أفكار للمساهمة

- [ ] إضافة المزيد من المناسبات (رمضان، الأضحى، رأس السنة)
- [ ] دعم تصدير البطاقة كـ PNG
- [ ] إضافة خيارات خطوط عربية متعددة
- [ ] وضع Dark/Light toggle
- [ ] إضافة موسيقى/صوت للبطاقة

---

## 📄 الرخصة

```
MIT License — يمكنك الاستخدام، التعديل، والتوزيع بحرية
مع الإشارة إلى المصدر الأصلي
```

---

<div align="center">

صُنع بـ ❤️ و ☕ بواسطة [@tamer-Assaf2](https://github.com/tamer-Assaf2)

⭐ **إذا أعجبك المشروع، لا تنسى النجمة!** ⭐

[![GitHub](https://img.shields.io/badge/GitHub-tamer--Assaf2-181717?style=flat&logo=github)](https://github.com/tamer-Assaf2/Eid-Card)

</div>
