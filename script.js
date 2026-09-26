/* ==========================================================================
   ISLEM SERVICE — script.js
   Robust, High-Performance, Fail-Safe Landing Page Controller
   ========================================================================== */

/* ─── i18n Dictionary ─── */
const T = {
  fr: {
    ann:        "⚡ Service actif 7j/7 — Activation Snapchat+ en 5 à 15 min",
    slogan:     "PLUS QU'UN SERVICE",
    nav_home:   "Accueil",
    nav_adv:    "Avantages",
    nav_offers: "Offres",
    nav_why:    "Pourquoi Nous",
    nav_reviews:"Avis",
    nav_steps:  "Processus",
    nav_faq:    "FAQ",
    wa_direct:  "WhatsApp",
    hero_badge: "Activation 100% Officielle & Sans Mot de Passe",
    h1_a:       "Activez Votre",
    h1_b:       "Snapchat+",
    h1_c:       "En Algérie — Au Meilleur Prix",
    hero_desc:  "Profitez de toutes les fonctionnalités exclusives Snapchat+ instantanément. Activation rapide, sécurisée, paiement facile par BaridiMob ou CCP.",
    btn_offer:  "Choisir Mon Offre",
    btn_order:  "Commander",
    t1:         "5-15 Min",
    t2:         "Sans Mdp",
    t3:         "BaridiMob & CCP",
    live:       "Snapchat+ Activé",
    hc_sub:     "Abonnement actif • Algérie",
    p1:         "Story Rewatch",
    p2:         "#1 BFF Pin",
    p3:         "Ghost Trails",
    p4:         "Custom Icons",
    c1:         "Sécurisé",
    c2:         "Activation",
    adv_tag:    "NOS GARANTIES",
    adv_h2:     "Pourquoi Faire Confiance à SERVICE ?",
    adv_sub:    "Une expérience d'achat transparente, rapide et sans mauvaise surprise.",
    a1_h:       "Activation sans mot de passe",
    a1_p:       "Votre sécurité est notre priorité. Nous n'avons jamais besoin de votre mot de passe.",
    a2_h:       "Service ultra rapide",
    a2_p:       "Activation en 5 à 15 minutes après confirmation du paiement.",
    a3_h:       "Support client dédié",
    a3_p:       "Assistance continue pour vous guider jusqu'à l'activation complète.",
    a4_h:       "Satisfaction garantie",
    a4_p:       "Des centaines de clients satisfaits avec un taux de satisfaction > 99%.",
    a5_h:       "Réponse rapide WhatsApp",
    a5_p:       "Parlez directement avec un humain, pas un robot. Réponse instantanée.",
    off_tag:    "NOS TARIFS",
    off_h2:     "Choisissez Votre Offre Snapchat+",
    off_sub:    "Tarifs clairs en Dinars Algériens (DA), sans frais cachés.",
    tab_iphone: "iPhone (iOS)",
    tab_iphone_b: "3 Offres",
    tab_android:"Android",
    tab_android_b: "1 Offre",
    p1m:        "1 Mois",
    p1m_s:      "Idéal pour tester Snapchat+",
    p3m:        "3 Mois",
    p3m_s:      "Le choix préféré de nos clients",
    p12m:       "12 Mois (1 An)",
    p12m_s:     "Économie maximale sur l'année",
    pandroid_s: "Optimisé pour tous smartphones Android",
    r_pop:      "★ POPULAIRE",
    r_best:     "MEILLEUR PRIX",
    r_rec:      "RECOMMANDÉ",
    f_nopass:   "Sans mot de passe",
    f_fast:     "Activation 5-15 min",
    f_badge:    "Badge étoile ✦",
    f_wa:       "Assistance WhatsApp",
    f_priority: "Activation prioritaire",
    f_excl:     "Toutes les fonctions",
    f_g3:       "Garantie 3 mois",
    f_express:  "Activation express",
    f_vip:      "Support VIP 7j/7",
    f_save:     "+3300 DA économisés",
    f_compat:   "Samsung, Xiaomi, Oppo…",
    pb_bm:      "BaridiMob",
    pb_bm_s:    "Accessible à tous (Instantané)",
    pb_ccp:     "CCP Algérie Poste",
    pb_ccp_s:   "Dans tous les bureaux de poste",
    pb_wa:      "Validation WhatsApp",
    pb_wa_s:    "Numéro officiel vérifié",
    why_tag:    "EXCELLENCE",
    why_h2:     "Pourquoi Choisir SERVICE ?",
    why_p:      "Nous avons simplifié le processus pour vous offrir une expérience fluide, rapide et en toute confiance.",
    s1:         "Clients en Algérie",
    s2:         "Sans mot de passe",
    s3:         "Délai moyen",
    w1h:        "Activation rapide",
    w1p:        "Dès réception du reçu, activation instantanée. Aucune attente inutile.",
    w2h:        "Service professionnel",
    w2p:        "Méthode officielle, éprouvée, respectant les règles de la plateforme.",
    w3h:        "Assistance complète",
    w3p:        "Support jusqu'à la pleine satisfaction. Nous ne vous laissons jamais seul.",
    w4h:        "Commande simple",
    w4p:        "3 clics : choisissez l'offre, le paiement, envoyez sur WhatsApp.",
    w5h:        "Paiement sécurisé",
    w5p:        "BaridiMob ou CCP — canaux bancaires officiels de confiance.",
    st_tag:     "PROCESSUS FACILE",
    st_h2:      "Comment Se Déroule La Commande ?",
    st_sub:     "Un parcours d'achat conçu pour être le plus simple possible.",
    st1h:       "Choisissez votre offre",
    st1p:       "Sélectionnez la formule (1, 3 ou 12 mois iPhone, ou 3 mois Android).",
    st2h:       "Cliquez Commander",
    st2p:       "Choisissez BaridiMob ou CCP comme moyen de paiement.",
    st3h:       "WhatsApp auto-ouvert",
    st3p:       "Le site génère automatiquement votre commande et ouvre WhatsApp.",
    st4h:       "Activation en 5-15 min",
    st4p:       "Dès votre versement validé, votre Snapchat+ est immédiatement actif.",
    rv_tag:     "TÉMOIGNAGES VÉRIFIÉS",
    rv_h2:      "Avis de Nos Clients Satisfaits",
    rv_sub:     "Ce que disent ceux qui ont activé Snapchat+ chez nous.",
    rv1:        '"Activé en moins de 10 min après BaridiMob. Aucune demande de mot de passe. Merci  !"',
    rv2:        '"Service sérieux et très poli sur WhatsApp. Étoile bien visible sur profil. Je recommande 100%!"',
    rv3:        '"User a tout expliqué patiemment. Paiement CCP facile et activation directe. Plus qu\'un service !"',
    rv4:        '"7 minutes chrono pour l\'activation ! 2700 DA pour 1 an complet c\'est imbattable. Bravo !"',
    fq_tag:     "QUESTIONS FRÉQUENTES",
    fq_h2:      "Tout Ce Que Vous Devez Savoir",
    q1:         "Avez-vous besoin de mon mot de passe Snapchat ?",
    a1:         "NON, absolument pas ! L'activation ne nécessite jamais votre mot de passe. Votre compte reste 100% protégé.",
    q2:         "Quels sont les moyens de paiement ?",
    a2:         "BaridiMob (virement instantané) et CCP (versement au bureau de poste). Accessibles à tous en Algérie.",
    q3:         "Quel est le délai d'activation ?",
    a3:         "Dès envoi du reçu sur WhatsApp, l'activation se fait entre 5 et 15 minutes en moyenne.",
    q4:         "Que faire en cas de problème après achat ?",
    a4:         "Notre équipe est disponible 7j/7 sur WhatsApp +213 799 14 19 16 pour vous aider jusqu'à satisfaction complète.",
    cta_t:      "PRÊT À DÉMARRER ?",
    cta_h:      "Rejoignez Plus de 1500 Utilisateurs Snapchat+ en Algérie",
    cta_p:      "Ne ratez plus les fonctionnalités exclusives : stories rewatch, badge star, amis n°1 et plus encore.",
    ft_about:   "Service professionnel d'activation en Algérie. Rapide, sécurisé, 7j/7.",
    ft_nav:     "Navigation",
    ft_contact: "Contact",
    ft_hours:   "7j/7 : 09h - 00h",
    ft_rights:  "Tous droits réservés.",
    ft_online:  "Activations en ligne",
    md_title:   "Finaliser Votre Commande",
    md_sub:     "Choisissez votre moyen de paiement pour générer la commande WhatsApp.",
    md_sel:     "Offre sélectionnée :",
    md_pay_lbl: "Moyen de paiement :",
    bm_s:       "Accessible à tous (Instantané)",
    ccp_s:      "Dans tous les bureaux de poste",
    md_name_lbl:"Nom ou pseudo Snapchat (facultatif) :",
    md_confirm: "Confirmer sur WhatsApp",
    md_note:    "+213 799 14 19 16 — Aucun mot de passe requis.",
    wa_tip:     "En ligne • Réponse rapide",
    st_fast:    "Activation 5-15 min",
  },
  ar: {
    ann:        "⚡ الخدمة متاحة 7 أيام — تفعيل Snapchat+ في 5 إلى 15 دقيقة",
    slogan:     "أكثر من مجرد خدمة",
    nav_home:   "الرئيسية",
    nav_adv:    "المميزات",
    nav_offers: "العروض",
    nav_why:    "لماذا نحن",
    nav_reviews:"التقييمات",
    nav_steps:  "الطلب",
    nav_faq:    "الأسئلة",
    wa_direct:  "واتساب",
    hero_badge: "تفعيل 100% رسمي وبدون كلمة مرور",
    h1_a:       "فعّل",
    h1_b:       "Snapchat+",
    h1_c:       "في الجزائر — بأفضل سعر",
    hero_desc:  "استمتع بجميع مميزات Snapchat+ الحصرية فوراً. تفعيل سريع وآمن، دفع سهل عبر BaridiMob أو CCP.",
    btn_offer:  "اختر عرضك",
    btn_order:  "اطلب الآن",
    t1:         "5-15 دقيقة",
    t2:         "بدون كلمة مرور",
    t3:         "BaridiMob و CCP",
    live:       "Snapchat+ مُفعّل",
    hc_sub:     "اشتراك نشط • الجزائر",
    p1:         "مشاهدة القصص مجدداً",
    p2:         "#1 أفضل صديق",
    p3:         "تتبع الأشباح",
    p4:         "أيقونات مخصصة",
    c1:         "آمن تماماً",
    c2:         "التفعيل",
    adv_tag:    "ضماناتنا",
    adv_h2:     "لماذا تثق بـ  SERVICE؟",
    adv_sub:    "تجربة شراء شفافة وسريعة وبدون مفاجآت.",
    a1_h:       "تفعيل بدون كلمة مرور",
    a1_p:       "أمانك هو أولويتنا. لا نحتاج أبداً إلى كلمة مرورك.",
    a2_h:       "خدمة فائقة السرعة",
    a2_p:       "التفعيل في 5 إلى 15 دقيقة بعد تأكيد الدفع.",
    a3_h:       "دعم عملاء متخصص",
    a3_p:       "مساعدة مستمرة لإرشادك حتى اكتمال التفعيل.",
    a4_h:       "رضا مضمون",
    a4_p:       "مئات العملاء الراضين بمعدل رضا يتجاوز 99%.",
    a5_h:       "رد سريع على واتساب",
    a5_p:       "تحدث مباشرة مع إنسان لا روبوت. رد فوري.",
    off_tag:    "أسعارنا",
    off_h2:     "اختر عرض Snapchat+ الخاص بك",
    off_sub:    "أسعار واضحة بالدينار الجزائري، بدون رسوم خفية.",
    tab_iphone: "آيفون (iOS)",
    tab_iphone_b: "3 عروض",
    tab_android:"أندرويد",
    tab_android_b: "عرض واحد",
    p1m:        "شهر واحد",
    p1m_s:      "مثالي لتجربة Snapchat+",
    p3m:        "3 أشهر",
    p3m_s:      "الخيار المفضل لعملائنا",
    p12m:       "12 شهراً (سنة كاملة)",
    p12m_s:     "أقصى توفير على مدار السنة",
    pandroid_s: "متوافق مع جميع هواتف أندرويد",
    r_pop:      "★ الأكثر طلباً",
    r_best:     "أفضل سعر",
    r_rec:      "موصى به",
    f_nopass:   "بدون كلمة مرور",
    f_fast:     "تفعيل 5-15 دقيقة",
    f_badge:    "شارة النجمة ✦",
    f_wa:       "مساعدة واتساب",
    f_priority: "تفعيل ذو أولوية",
    f_excl:     "جميع الميزات",
    f_g3:       "ضمان 3 أشهر",
    f_express:  "تفعيل سريع جداً",
    f_vip:      "دعم VIP 7 أيام",
    f_save:     "+3300 دج توفير",
    f_compat:   "سامسونج، شاومي، أوبو…",
    pb_bm:      "BaridiMob",
    pb_bm_s:    "متاح للجميع (فوري)",
    pb_ccp:     "CCP بريد الجزائر",
    pb_ccp_s:   "في جميع مكاتب البريد",
    pb_wa:      "تأكيد عبر واتساب",
    pb_wa_s:    "رقم رسمي موثق",
    why_tag:    "التميز",
    why_h2:     "لماذا تختار SERVICE؟",
    why_p:      "بسّطنا العملية لنقدم لك تجربة سلسة وسريعة وموثوقة.",
    s1:         "عميل في الجزائر",
    s2:         "بدون كلمة مرور",
    s3:         "متوسط التفعيل",
    w1h:        "تفعيل سريع",
    w1p:        "بمجرد استلام الإيصال، تفعيل فوري. لا انتظار غير ضروري.",
    w2h:        "خدمة احترافية",
    w2p:        "طريقة رسمية ومجربة تحترم قواعد المنصة.",
    w3h:        "مساعدة شاملة",
    w3p:        "دعم حتى الرضا التام. لن نتركك وحيداً.",
    w4h:        "طلب بسيط",
    w4p:        "3 نقرات: اختر العرض، الدفع، أرسل عبر واتساب.",
    w5h:        "دفع آمن",
    w5p:        "BaridiMob أو CCP — قنوات بنكية رسمية موثوقة.",
    st_tag:     "عملية سهلة",
    st_h2:      "كيف يتم الطلب؟",
    st_sub:     "مسار شراء مصمم ليكون أبسط ما يمكن.",
    st1h:       "اختر عرضك",
    st1p:       "اختر الخطة (1، 3 أو 12 شهراً لآيفون، أو 3 أشهر لأندرويد).",
    st2h:       "انقر على اطلب الآن",
    st2p:       "اختر BaridiMob أو CCP كوسيلة دفع.",
    st3h:       "واتساب يفتح تلقائياً",
    st3p:       "يقوم الموقع تلقائياً بإنشاء طلبك وفتح واتساب.",
    st4h:       "تفعيل في 5-15 دقيقة",
    st4p:       "بعد التحقق من الدفع، يصبح Snapchat+ نشطاً فوراً.",
    rv_tag:     "تقييمات موثقة",
    rv_h2:      "آراء عملائنا الراضين",
    rv_sub:     "ما يقوله من فعّل Snapchat+ معنا.",
    rv1:        '"تم التفعيل في أقل من 10 دقائق بعد BaridiMob. لم يطلبوا كلمة مروري. شكراً إسلام!"',
    rv2:        '"خدمة جادة ومؤدبة جداً على واتساب. النجمة واضحة على الملف الشخصي. أنصح بها 100%!"',
    rv3:        '"أسلام شرح كل شيء بصبر. دفع CCP سهل والتفعيل مباشر. أكثر من مجرد خدمة!"',
    rv4:        '"7 دقائق بالضبط للتفعيل! 2700 دج لسنة كاملة لا يُضاهى. أحسنتم!"',
    fq_tag:     "الأسئلة الشائعة",
    fq_h2:      "كل ما تحتاج معرفته",
    q1:         "هل تحتاجون لكلمة مرور سناب شات الخاصة بي؟",
    a1:         "لا، بالتأكيد! التفعيل لا يتطلب أبداً كلمة مرورك. حسابك يبقى محمياً 100%.",
    q2:         "ما هي وسائل الدفع المتاحة؟",
    a2:         "BaridiMob (تحويل فوري) وCCP (إيداع في مكتب البريد). متاح للجميع في الجزائر.",
    q3:         "ما هو وقت التفعيل؟",
    a3:         "بعد إرسال الإيصال على واتساب، يتم التفعيل بين 5 و15 دقيقة في المتوسط.",
    q4:         "ماذا أفعل إذا واجهت مشكلة بعد الشراء؟",
    a4:         "فريقنا متاح 7 أيام/أسبوع على واتساب +213 799 14 19 16 لمساعدتك حتى الرضا التام.",
    cta_t:      "مستعد للبدء؟",
    cta_h:      "انضم لأكثر من 1500 مستخدم Snapchat+ في الجزائر",
    cta_p:      "لا تفوّت الميزات الحصرية: إعادة مشاهدة القصص، شارة النجمة، أفضل صديق وأكثر.",
    ft_about:   "خدمة احترافية للتفعيل في الجزائر. سريع، آمن، 7 أيام.",
    ft_nav:     "التنقل",
    ft_contact: "تواصل معنا",
    ft_hours:   "7 أيام: 09ص - 00م",
    ft_rights:  "جميع الحقوق محفوظة.",
    ft_online:  "التفعيلات نشطة",
    md_title:   "إتمام الطلب",
    md_sub:     "اختر وسيلة الدفع لإنشاء طلب واتساب.",
    md_sel:     "العرض المختار:",
    md_pay_lbl: "وسيلة الدفع:",
    bm_s:       "متاح للجميع (فوري)",
    ccp_s:      "في جميع مكاتب البريد",
    md_name_lbl:"اسم سناب شات أو لقبك (اختياري):",
    md_confirm: "تأكيد عبر واتساب",
    md_note:    "+213 799 14 19 16 — لا حاجة لكلمة مرور.",
    wa_tip:     "متصل • رد سريع",
    st_fast:    "تفعيل 5-15 دقيقة",
  }
};

/* ─── Offer Meta ─── */
const OFFERS = {
  iphone_1m:  { fr: "Snapchat+ iPhone — 1 Mois",         ar: "سناب شات+ آيفون — شهر 1",     price: "500 DA",  dev: "iPhone" },
  iphone_3m:  { fr: "Snapchat+ iPhone — 3 Mois",         ar: "سناب شات+ آيفون — 3 أشهر",   price: "1500 DA", dev: "iPhone" },
  iphone_12m: { fr: "Snapchat+ iPhone — 12 Mois (1 An)", ar: "سناب شات+ آيفون — 12 شهراً", price: "2700 DA", dev: "iPhone" },
  android_3m: { fr: "Snapchat+ Android — 3 Mois",        ar: "سناب شات+ أندرويد — 3 أشهر", price: "1500 DA", dev: "Android" },
};

/* ─── State ─── */
let currentLang     = 'fr';
let currentOfferKey = 'iphone_3m';

/* ═══════════════════════════════════════════
   LANGUAGE SYSTEM
═══════════════════════════════════════════ */
function chooseLang(lang) {
  setLang(lang);
  try {
    localStorage.setItem('user_service_lang', lang);
  } catch (e) {
    // LocalStorage fallback
  }
  const overlay = document.getElementById('langOverlay');
  if (overlay) {
    overlay.classList.add('hidden');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 400);
  }
}

function setLang(lang) {
  if (!T[lang]) lang = 'fr';
  currentLang = lang;
  const isAr  = lang === 'ar';

  document.documentElement.lang = lang;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-ar', isAr);
  document.body.classList.toggle('lang-fr', !isAr);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang] && T[lang][key] !== undefined) {
      el.textContent = T[lang][key];
    }
  });

  // Update active pill button
  document.querySelectorAll('.lpill-btn').forEach(b => {
    b.classList.toggle('active', b.id === `btn-${lang}`);
  });

  // Update sidenav tooltips
  updateSidenavLabels(lang);

  // Update modal preview if open
  if (currentOfferKey && OFFERS[currentOfferKey]) {
    const offer = OFFERS[currentOfferKey];
    const nameEl = document.getElementById('mdPlanName');
    if (nameEl) nameEl.textContent = offer[lang] || offer.fr;
  }
}

function updateSidenavLabels(lang) {
  const labels = {
    fr: ["Accueil", "Garanties", "Offres", "Pourquoi Nous", "Processus", "Avis Clients", "FAQ"],
    ar: ["الرئيسية", "الضمانات", "العروض", "لماذا نحن", "الطلب", "التقييمات", "الأسئلة"]
  };
  document.querySelectorAll('.sidenav .dot').forEach((dot, i) => {
    if (labels[lang] && labels[lang][i]) {
      dot.setAttribute('data-label', labels[lang][i]);
    }
  });
}

/* ═══════════════════════════════════════════
   MOBILE NAVIGATION
═══════════════════════════════════════════ */
function toggleNav() {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('mobileNav');
  if (!ham || !nav) return;
  const isOpen = ham.classList.toggle('open');
  nav.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Close mobile nav when clicking a link
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mnav').forEach(link => {
    link.addEventListener('click', () => {
      const ham = document.getElementById('hamburger');
      const nav = document.getElementById('mobileNav');
      if (ham && nav && nav.classList.contains('open')) {
        ham.classList.remove('open');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });
});

/* ═══════════════════════════════════════════
   DEVICE TABS (iPhone / Android)
═══════════════════════════════════════════ */
function switchTab(device) {
  const iphoneTab = document.getElementById('tab-iphone');
  const androidTab = document.getElementById('tab-android');
  const iphoneGrid = document.getElementById('plans-iphone');
  const androidGrid = document.getElementById('plans-android');

  if (device === 'android') {
    if (iphoneTab) iphoneTab.classList.remove('active');
    if (androidTab) androidTab.classList.add('active');
    if (iphoneGrid) iphoneGrid.classList.add('hidden');
    if (androidGrid) {
      androidGrid.classList.remove('hidden');
      // Ensure cards are visible immediately
      androidGrid.querySelectorAll('.reveal-item, .plan-card').forEach(c => {
        c.classList.add('is-visible');
      });
    }
  } else {
    if (androidTab) androidTab.classList.remove('active');
    if (iphoneTab) iphoneTab.classList.add('active');
    if (androidGrid) androidGrid.classList.add('hidden');
    if (iphoneGrid) {
      iphoneGrid.classList.remove('hidden');
      iphoneGrid.querySelectorAll('.reveal-item, .plan-card').forEach(c => {
        c.classList.add('is-visible');
      });
    }
  }
}

/* ═══════════════════════════════════════════
   ORDER MODAL & WHATSAPP CHECKOUT
═══════════════════════════════════════════ */
function openModal(offerKey) {
  if (!OFFERS[offerKey]) offerKey = 'iphone_3m';
  currentOfferKey = offerKey;
  const offer = OFFERS[offerKey];
  const lang  = currentLang;

  const planName = document.getElementById('mdPlanName');
  const planPrice = document.getElementById('mdPlanPrice');
  const planDev = document.getElementById('mdPlanDev');
  const nameInput = document.getElementById('mdName');
  const radioBm = document.getElementById('r-bm');
  const modal = document.getElementById('orderModal');

  if (planName) planName.textContent = offer[lang] || offer.fr;
  if (planPrice) planPrice.textContent = offer.price;
  if (planDev) planDev.textContent = offer.dev;
  if (nameInput) nameInput.value = '';
  if (radioBm) radioBm.checked = true;

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function confirmOrder() {
  const offer = OFFERS[currentOfferKey] || OFFERS['iphone_3m'];
  const pmChecked = document.querySelector('input[name="pm"]:checked');
  const pm = pmChecked ? pmChecked.value : 'BaridiMob';
  const nameInput = document.getElementById('mdName');
  const username = nameInput ? nameInput.value.trim() : '';
  const lang = currentLang;

  let msg;
  if (lang === 'ar') {
    msg  = `🟡 *طلب جديد —  SERVICE*\n\n`;
    msg += `📦 العرض: *${offer.ar || offer.fr}*\n`;
    msg += `💰 السعر: *${offer.price}*\n`;
    msg += `💳 وسيلة الدفع: *${pm}*\n`;
    if (username) msg += `👤 الاسم / سناب: *${username}*\n`;
    msg += `\n✅ أنا مستعد للدفع وأطلب التفعيل فضلاً.`;
  } else {
    msg  = `🟡 *Nouvelle Commande — SERVICE*\n\n`;
    msg += `📦 Offre: *${offer.fr}*\n`;
    msg += `💰 Prix: *${offer.price}*\n`;
    msg += `💳 Paiement: *${pm}*\n`;
    if (username) msg += `👤 Pseudo Snapchat: *${username}*\n`;
    msg += `\n✅ Je suis prêt(e) à payer et je demande l'activation.`;
  }

  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  closeModal();
}

// Close modal on backdrop click or ESC key
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});

/* ═══════════════════════════════════════════
   FAQ ACCORDION
═══════════════════════════════════════════ */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  if (!item) return;
  const isOpen = item.classList.contains('open');

  // Close all other items
  document.querySelectorAll('.faq-item.open').forEach(i => {
    if (i !== item) {
      i.classList.remove('open');
      const ans = i.querySelector('.faq-a');
      if (ans) ans.style.maxHeight = null;
    }
  });

  // Toggle current item
  const ans = item.querySelector('.faq-a');
  if (isOpen) {
    item.classList.remove('open');
    if (ans) ans.style.maxHeight = null;
  } else {
    item.classList.add('open');
    if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
  }
}

/* ═══════════════════════════════════════════
   SCROLL SYNCHRONIZATION & NAVIGATION
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const headerWrap = document.getElementById('headerWrap');
  const stickyBar  = document.getElementById('mobSticky');
  const sections   = Array.from(document.querySelectorAll('.section'));
  const dots       = Array.from(document.querySelectorAll('.sidenav .dot'));
  const tnavs      = Array.from(document.querySelectorAll('.top-nav .tnav'));

  // Header and mobile sticky bar scroll listener
  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    // Header glass effect
    if (headerWrap) {
      headerWrap.classList.toggle('scrolled', y > 20);
    }

    // Mobile sticky bar
    if (stickyBar) {
      stickyBar.style.display = (y > 320 && window.innerWidth <= 640) ? 'flex' : '';
    }
  }, { passive: true });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Active section observer for Sidenav and Topnav
  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          dots.forEach(d => {
            d.classList.toggle('active', d.getAttribute('href') === `#${id}`);
          });
          tnavs.forEach(t => {
            t.classList.toggle('active', t.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    });

    sections.forEach(sec => navObserver.observe(sec));
  }
});

/* ═══════════════════════════════════════════
   FAIL-SAFE VIEWPORT REVEAL ANIMATIONS
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Mark JS as loaded to enable smooth CSS transitions
  document.body.classList.add('js-ready');

  const revealItems = document.querySelectorAll('.reveal-item');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    revealItems.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: make everything visible immediately
    revealItems.forEach(el => el.classList.add('is-visible'));
  }
});

/* ═══════════════════════════════════════════
   ANIMATED NUMBER COUNTERS
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const counterEls = document.querySelectorAll('.counter');
  if (!counterEls.length) return;

  let countersStarted = false;

  function runCounters() {
    counterEls.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      let count = 0;
      const speed = Math.max(15, Math.floor(1800 / (target || 1)));

      const timer = setInterval(() => {
        count += Math.ceil(target / 40);
        if (count >= target) {
          counter.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.textContent = count.toLocaleString();
        }
      }, speed);
    });
  }

  if ('IntersectionObserver' in window) {
    const statsSection = document.getElementById('s-why');
    if (statsSection) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            runCounters();
            statsObserver.disconnect();
          }
        });
      }, { threshold: 0.2 });
      statsObserver.observe(statsSection);
    }
  } else {
    runCounters();
  }
});

/* ═══════════════════════════════════════════
   HERO CARD 3D TILT EFFECT
═══════════════════════════════════════════ */
(function initTilt() {
  document.addEventListener('DOMContentLoaded', () => {
    const wrap = document.getElementById('heroCardWrap');
    const card = document.getElementById('heroCard');
    if (!wrap || !card) return;

    // Only apply tilt on desktop with pointer
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      wrap.addEventListener('mousemove', e => {
        const r  = wrap.getBoundingClientRect();
        const cx = r.left + r.width  / 2;
        const cy = r.top  + r.height / 2;
        const rx = ((e.clientY - cy) / (r.height / 2)) * -9;
        const ry = ((e.clientX - cx) / (r.width  / 2)) *  9;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });

      wrap.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
    }
  });
})();

/* ═══════════════════════════════════════════
   CARD SPOTLIGHT HOVER EFFECT
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('[data-card]').forEach(card => {
      card.addEventListener('mousemove', e => {
        const spot = card.querySelector('.adv-card-spot, .plan-card-spot, .step-card-spot, .rev-card-spot');
        if (!spot) return;
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        spot.style.left = (x - 100) + 'px';
        spot.style.top  = (y - 100) + 'px';
      });
    });
  }
});

/* ═══════════════════════════════════════════
   AMBIENT PARTICLES CANVAS
═══════════════════════════════════════════ */
(function initParticles() {
  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W, H, particles;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function createParticles() {
      particles = [];
      const count = Math.min(60, Math.floor((W * H) / 28000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.5 + 0.4,
          dx: (Math.random() - 0.5) * 0.25,
          dy: (Math.random() - 0.5) * 0.25,
          op: Math.random() * 0.45 + 0.1,
          dop: (Math.random() - 0.5) * 0.004,
        });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x  += p.dx;
        p.y  += p.dy;
        p.op += p.dop;
        if (p.op < 0.08) p.dop = Math.abs(p.dop);
        if (p.op > 0.60) p.dop = -Math.abs(p.dop);
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,252,0,${p.op})`;
        ctx.fill();
      });
      requestAnimationFrame(frame);
    }

    resize();
    createParticles();
    frame();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        createParticles();
      }, 200);
    });
  });
})();

/* ═══════════════════════════════════════════
   INITIALIZATION
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Check if visitor has chosen a language before
  let savedLang = 'fr';
  try {
    savedLang = localStorage.getItem('user_service_lang');
  } catch (e) {}

  const overlay = document.getElementById('langOverlay');

  if (savedLang && (savedLang === 'fr' || savedLang === 'ar')) {
    setLang(savedLang);
    if (overlay) {
      overlay.classList.add('hidden');
      overlay.style.display = 'none';
    }
  } else {
    // First visit: show language welcome overlay
    setLang('fr');
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.remove('hidden');
    }
  }
});
