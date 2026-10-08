(() => {
  // js/data/defaultData.js
  var DEFAULT_DATA = {
    brandTitle: "\u05D7\u05E6\u05D9\u05DB\u05D5",
    brandSubtitle: "\u05D1\u05D9\u05EA \u05E1\u05E4\u05E8 \u05DC\u05E6\u05DC\u05D9\u05DC\u05D4",
    navCta: "\u05D4\u05E8\u05E9\u05DE\u05D4 \u05DC\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1",
    logoSrc: "assets/new-transparent-logo.png",
    heroSrc: "assets/hero-new.jfif",
    heroBadge: '<img src="assets/half-star.png" class="half-star-img" alt="\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1"> \u05DE\u05E1\u05DC\u05D5\u05DC \u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1 \u05D9\u05D5\u05E7\u05E8\u05EA\u05D9',
    heroTitle: "\u05D7\u05E6\u05D9\u05DB\u05D5 \u2013 \u05D1\u05D9\u05EA \u05E1\u05E4\u05E8 \u05DC\u05E6\u05DC\u05D9\u05DC\u05D4",
    heroMotto: '"\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1. \u05D7\u05E6\u05D9 \u05DB\u05D5\u05D7."',
    heroDescription: "\u05DC\u05DE\u05D4 \u05DC\u05E6\u05DC\u05D5\u05DC 30 \u05DE\u05D8\u05E8 \u05DC\u05E2\u05D5\u05DE\u05E7 \u05DB\u05E9\u05E8\u05E7 \u05D1\u05E8\u05D5\u05DD \u05D4\u05DE\u05D9\u05DD \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E9\u05D5\u05DD? \u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05D1\u05D9\u05EA \u05D4\u05E1\u05E4\u05E8 \u05D4\u05D9\u05D7\u05D9\u05D3 \u05D1\u05E2\u05D5\u05DC\u05DD \u05E9\u05DE\u05D1\u05D9\u05DF \u05E9\u05D1\u05E2\u05D9\u05D5\u05EA \u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD \u05D5\u05D7\u05E8\u05D3\u05D4 \u05E7\u05DC\u05D4 \u05D4\u05DF \u05DC\u05D0 \u05DE\u05E0\u05D9\u05E2\u05D4 \u2013 \u05D4\u05DF \u05E4\u05E9\u05D5\u05D8 \u05E1\u05D9\u05D1\u05D4 \u05DE\u05E6\u05D5\u05D9\u05E0\u05EA \u05DC\u05E1\u05D9\u05D9\u05DD \u05D1\u05D3\u05D9\u05D5\u05E7 \u05D1\u05D7\u05E6\u05D9.",
    stats: [
      { id: "st1", number: "0.5", label: "\u05DB\u05D5\u05DB\u05D1\u05D9\u05DD \u05D1\u05D3\u05D9\u05D5\u05E7" },
      { id: "st2", number: "1.5m", label: "\u05E2\u05D5\u05DE\u05E7 \u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9" },
      { id: "st3", number: "100%", label: "\u05D4\u05E4\u05E1\u05E7\u05D5\u05EA \u05E7\u05E4\u05D4" },
      { id: "st4", number: "0%", label: "\u05DC\u05D7\u05E5 \u05D1\u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD" }
    ],
    heroCtaPrimary: "\u05EA\u05E9\u05E8\u05D9\u05D9\u05E0\u05D5 \u05DC\u05D9 \u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1",
    heroCtaSecondary: "\u05D0\u05E0\u05D9 \u05DE\u05E4\u05D7\u05D3/\u05EA \u2013 \u05DB\u05E0\u05E1\u05D5 \u05DC\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF",
    aboutSubtitle: "\u05D4\u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D4\u05D9\u05D9\u05D7\u05D5\u05D3\u05D9\u05D9\u05DD \u05DC\u05E0\u05D5",
    aboutTitle: '\u05DC\u05DE\u05D4 \u05D3\u05D5\u05D5\u05E7\u05D0 \u05DE\u05E1\u05DC\u05D5\u05DC "\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1"?',
    aboutDesc: "\u05D0\u05E0\u05D7\u05E0\u05D5 \u05DC\u05D0 \u05DE\u05D0\u05DE\u05D9\u05E0\u05D9\u05DD \u05D1\u05DE\u05D0\u05DE\u05E5 \u05DE\u05D9\u05D5\u05EA\u05E8. \u05D4\u05E0\u05D4 3 \u05E1\u05D9\u05D1\u05D5\u05EA \u05DC\u05DE\u05D4 \u05D4\u05E7\u05D5\u05E8\u05E1 \u05E9\u05DC\u05E0\u05D5 \u05D4\u05D5\u05D0 \u05D4\u05DE\u05E9\u05EA\u05DC\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8:",
    feat1Icon: "\u{1F442}",
    feat1Title: "0% \u05DC\u05D7\u05E5 \u05D1\u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD",
    feat1Text: "\u05D1\u05D6\u05DB\u05D5\u05EA \u05E9\u05D9\u05D8\u05EA \u05D4\u05E2\u05D5\u05DE\u05E7 \u05D4\u05E8\u05D3\u05D5\u05D3 \u05E9\u05DC\u05E0\u05D5 (\u05E2\u05D3 \u05DE\u05D8\u05E8 \u05D5\u05D7\u05E6\u05D9), \u05D4\u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA \u05D9\u05D9\u05E9\u05D0\u05E8\u05D5 \u05E4\u05EA\u05D5\u05D7\u05D5\u05EA, \u05E8\u05D2\u05D5\u05E2\u05D5\u05EA \u05D5\u05D1\u05DC\u05D9 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E4\u05DE\u05E4\u05DD \u05E9\u05D5\u05DD \u05D3\u05D1\u05E8 \u05D7\u05D5\u05E5 \u05DE\u05D0\u05E9\u05E8 \u05D0\u05EA \u05D4\u05D0\u05D2\u05D5.",
    feat2Icon: "\u{1F6CB}\uFE0F",
    feat2Title: "\u05D0\u05E4\u05E1 \u05D7\u05E8\u05D3\u05D5\u05EA \u2013 100% \u05D1\u05E0\u05D5\u05D7\u05D5\u05EA",
    feat2Text: "\u05E0\u05DB\u05E0\u05E1\u05EA \u05DC\u05DC\u05D7\u05E5 \u05DE-2 \u05DE\u05D8\u05E8 \u05E2\u05D5\u05DE\u05E7? \u05D0\u05D9\u05DF \u05D1\u05E2\u05D9\u05D4! \u05D4\u05DE\u05D3\u05E8\u05D9\u05DA \u05DE\u05D9\u05D3 \u05E2\u05D5\u05E6\u05E8 \u05D0\u05EA \u05D4\u05E6\u05DC\u05D9\u05DC\u05D4, \u05E2\u05D5\u05DC\u05D9\u05DD \u05DC\u05D9\u05D1\u05E9\u05D4 \u05D5\u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D0\u05E8\u05D8\u05D9\u05E7 \u05E8\u05DE\u05D6\u05D5\u05E8 \u05D1\u05D7\u05D5\u05E3.",
    feat3Icon: "\u{1F4DC}",
    feat3Title: "\u05EA\u05E2\u05D5\u05D3\u05D4 \u05D7\u05E6\u05D9-\u05DE\u05D5\u05DB\u05E8\u05EA",
    feat3Text: "\u05D4\u05EA\u05E2\u05D5\u05D3\u05D4 \u05E9\u05DC\u05E0\u05D5 \u05DE\u05D5\u05DB\u05E8\u05EA \u05E2\u05DC \u05D9\u05D3\u05D9\u05E0\u05D5 \u05D1\u05DC\u05D1\u05D3, \u05EA\u05E7\u05E4\u05D4 \u05DE\u05D9\u05DD \u05D4\u05DE\u05DC\u05D7 \u05D5\u05E2\u05D3 \u05D4\u05D1\u05E8\u05D9\u05DB\u05D4 \u05D1\u05D1\u05D9\u05EA, \u05D5\u05DE\u05D1\u05D8\u05D9\u05D7\u05D4 \u05E9\u05DB\u05D5\u05DC\u05DD \u05D9\u05D3\u05E2\u05D5 \u05E9\u05D4\u05E9\u05EA\u05D3\u05DC\u05EA \u2013 \u05D5\u05D6\u05D4 \u05DE\u05D4 \u05E9\u05D7\u05E9\u05D5\u05D1.",
    syllabusSubtitle: "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05DC\u05D9\u05DE\u05D5\u05D3\u05D9\u05DD \u05D4\u05D9\u05D5\u05E7\u05E8\u05EA\u05D9\u05EA",
    syllabusTitle: "\u05DE\u05D4 \u05DC\u05D5\u05DE\u05D3\u05D9\u05DD \u05D1\u05D3\u05E8\u05DA \u05DC\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1?",
    syllabusDesc: "\u05DE\u05D1\u05E0\u05D4 \u05E7\u05D5\u05E8\u05E1 \u05DE\u05D5\u05E7\u05E4\u05D3 \u05D4\u05DE\u05D5\u05EA\u05D0\u05DD \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DC\u05D0\u05E0\u05E9\u05D9\u05DD \u05E2\u05DD \u05DB\u05D5\u05D5\u05E0\u05D5\u05EA \u05D8\u05D5\u05D1\u05D5\u05EA \u05D5\u05D9\u05DB\u05D5\u05DC\u05EA \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D7\u05DC\u05E7\u05D9\u05EA.",
    calcBadge: "\u{1F9EE} \u05DE\u05D7\u05E9\u05D1\u05D5\u05DF \u05D7\u05E6\u05D9\u05DB\u05D5 \u05D1\u05DC\u05E2\u05D3\u05D9",
    calcTitle: "\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF \u05E2\u05D5\u05DE\u05E7, \u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD \u05D5\u05D7\u05E8\u05D3\u05D4",
    calcDesc: "\u05D4\u05D6\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05DE\u05D3\u05D3\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD \u05D5\u05D2\u05DC\u05D5 \u05DE\u05D4 \u05D4\u05E2\u05D5\u05DE\u05E7 \u05D4\u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9 \u05D4\u05D1\u05D8\u05D5\u05D7 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05D4\u05D9\u05D5\u05DD:",
    calcLabel1: "\u{1F631} \u05E8\u05DE\u05EA \u05D7\u05E8\u05D3\u05D4 \u05DE\u05DE\u05E2\u05DE\u05E7\u05D9\u05DD:",
    calcLabel2: "\u{1F442} \u05E8\u05DE\u05EA \u05E8\u05D2\u05D9\u05E9\u05D5\u05EA/\u05DB\u05D0\u05D1 \u05D1\u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD:",
    calcLabel3: "\u{1F634} \u05D7\u05E9\u05E7 \u05DC\u05D7\u05D6\u05D5\u05E8 \u05DC\u05DE\u05DC\u05D5\u05DF:",
    calcResultHeader: "\u05D4\u05E2\u05D5\u05DE\u05E7 \u05D4\u05DE\u05D5\u05DE\u05DC\u05E5 \u05E2\u05D1\u05D5\u05E8\u05DA:",
    calcSliders: [
      { id: "c1", label: "\u{1F631} \u05E8\u05DE\u05EA \u05D7\u05E8\u05D3\u05D4 \u05DE\u05DE\u05E2\u05DE\u05E7\u05D9\u05DD:", value: 50, weight: 1 },
      { id: "c2", label: "\u{1F442} \u05E8\u05DE\u05EA \u05E8\u05D2\u05D9\u05E9\u05D5\u05EA/\u05DB\u05D0\u05D1 \u05D1\u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD:", value: 60, weight: 1 },
      { id: "c3", label: "\u{1F634} \u05D7\u05E9\u05E7 \u05DC\u05D7\u05D6\u05D5\u05E8 \u05DC\u05DE\u05DC\u05D5\u05DF:", value: 80, weight: 0.8 }
    ],
    calcZoneHigh: "\u05E2\u05D5\u05DE\u05E7 \u05E2\u05D6\u05D9\u05DD (\u05D0\u05D6\u05D5\u05E8 \u05DE\u05D9\u05DD \u05E2\u05DE\u05D5\u05E7\u05D9\u05DD \u05D1\u05D7\u05E6\u05D9\u05DB\u05D5)",
    calcAdviceHigh: '"\u05D6\u05D4\u05D9\u05E8\u05D5\u05EA, \u05DE\u05D2\u05D9\u05E2 \u05DC\u05DA \u05E2\u05D3 \u05D4\u05D7\u05D6\u05D4! \u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D4\u05D7\u05D6\u05D9\u05E7 \u05D1\u05E1\u05D5\u05DC\u05DD \u05D5\u05DC\u05D0 \u05DC\u05D4\u05D5\u05E8\u05D9\u05D3 \u05D0\u05EA \u05D4\u05E8\u05D2\u05DC\u05D9\u05D9\u05DD \u05DE\u05D4\u05E7\u05E8\u05E7\u05E2\u05D9\u05EA."',
    calcZoneMid: "\u05D1\u05E8\u05D9\u05DB\u05EA \u05E4\u05E2\u05D5\u05D8\u05D5\u05EA \u05E8\u05D3\u05D5\u05D3\u05D4",
    calcAdviceMid: '"\u05DE\u05E2\u05D5\u05DC\u05D4! \u05D1\u05D2\u05D5\u05D1\u05D4 \u05D4\u05D6\u05D4 \u05D4\u05E8\u05D0\u05E9 \u05E9\u05DC\u05DA \u05DB\u05DE\u05E2\u05D8 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D9\u05DD. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05D9\u05DD \u05E9\u05E0\u05D5\u05E8\u05E7\u05DC \u05D5\u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05E9\u05DE\u05D5\u05E2 \u05D0\u05EA \u05D4\u05DE\u05D5\u05D6\u05D9\u05E7\u05D4 \u05DE\u05D4\u05D1\u05E8."',
    calcZoneLow: "\u05D2\u05D9\u05D2\u05D9\u05EA \u05E4\u05DC\u05E1\u05D8\u05D9\u05E7 \u05D1\u05DE\u05E8\u05E4\u05E1\u05EA",
    calcAdviceLow: '"\u05D0\u05E4\u05E1 \u05E1\u05D9\u05DB\u05D5\u05DF! \u05D4\u05D9\u05E8\u05D9\u05D3\u05D4 \u05DC\u05DE\u05D9\u05DD \u05DE\u05D5\u05DE\u05DC\u05E6\u05EA \u05E2\u05DD \u05DB\u05D5\u05E1 \u05E7\u05E4\u05D4 \u05E7\u05E8 \u05D5\u05E1\u05E4\u05E8 \u05D8\u05D5\u05D1. \u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05DC\u05D7\u05D1\u05D5\u05E9 \u05E1\u05E0\u05E4\u05D9\u05E8\u05D9\u05DD."',
    testimonialsSubtitle: "\u05DE\u05D4 \u05D0\u05D5\u05DE\u05E8\u05D9\u05DD \u05D4\u05D7\u05E6\u05D9-\u05D1\u05D5\u05D2\u05E8\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5?",
    testimonialsTitle: "\u05D1\u05D9\u05E7\u05D5\u05E8\u05D5\u05EA \u05DE\u05D4\u05DC\u05DC\u05D5\u05EA (\u05DC\u05DE\u05D7\u05E6\u05D4)",
    testimonialsDesc: "\u05E1\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD \u05D0\u05DE\u05D9\u05EA\u05D9\u05D9\u05DD \u05E9\u05DC \u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05E0\u05DB\u05E0\u05E1\u05D5 \u05DC\u05DE\u05D9\u05DD \u05D5\u05D9\u05E6\u05D0\u05D5 \u05DB\u05DE\u05E2\u05D8 \u05DE\u05D9\u05D3.",
    certSubtitle: "\u05DE\u05D6\u05DB\u05E8\u05EA \u05DC\u05DB\u05DC \u05D4\u05D7\u05D9\u05D9\u05DD",
    certTitle: '\u05DE\u05D7\u05D5\u05DC\u05DC \u05EA\u05E2\u05D5\u05D3\u05EA "\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1" \u05E8\u05E9\u05DE\u05D9\u05EA',
    certDesc: "\u05D4\u05D6\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E9\u05DD \u05E9\u05DC\u05DB\u05DD \u05D0\u05D5 \u05E9\u05DC \u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05E7\u05D1\u05DC\u05D5 \u05EA\u05E2\u05D5\u05D3\u05EA \u05E1\u05D9\u05D5\u05DD \u05DE\u05D5\u05EA\u05D0\u05DE\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA!",
    certFormTitle: "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05EA\u05E2\u05D5\u05D3\u05D4",
    certNameLabel: "\u05E9\u05DD \u05DE\u05DC\u05D0 \u05DC\u05DE\u05E7\u05D1\u05DC/\u05EA \u05D4\u05EA\u05E2\u05D5\u05D3\u05D4:",
    certNameDefault: "\u05D0\u05DC\u05D5\u05E4\u05D4 \u05E2\u05DD \u05D1\u05E2\u05D9\u05D5\u05EA \u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD",
    certReasonLabel: "\u05E1\u05D9\u05D1\u05EA \u05E7\u05D1\u05DC\u05EA \u05D4\u05EA\u05E2\u05D5\u05D3\u05D4:",
    certDateLabel: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E0\u05E4\u05E7\u05D4:",
    certPrintBtnText: "\u{1F5A8}\uFE0F \u05D4\u05D3\u05E4\u05E1 / \u05E9\u05DE\u05D5\u05E8 \u05EA\u05E2\u05D5\u05D3\u05D4",
    certDocTitle: "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1 \u05E8\u05E9\u05DE\u05D9\u05EA",
    certDocToText: "\u05EA\u05E2\u05D5\u05D3\u05D4 \u05D6\u05D5 \u05DE\u05D5\u05E2\u05E0\u05E7\u05EA \u05D1\u05D6\u05D0\u05EA \u05D1\u05D2\u05D0\u05D5\u05D5\u05D4 \u05E8\u05D1\u05D4 \u05DC:",
    certDocBodyPrefix: "\u05E2\u05DC \u05E1\u05D9\u05D5\u05DD \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4 \u05E9\u05DC 50% \u05DE\u05E7\u05D5\u05E8\u05E1 \u05D4\u05E6\u05DC\u05D9\u05DC\u05D4, \u05D4\u05E4\u05D2\u05E0\u05EA \u05EA\u05D5\u05E9\u05D9\u05D4 \u05D1\u05D1\u05D7\u05D9\u05E8\u05EA \u05D4\u05D9\u05D1\u05E9\u05D4, \u05D5\u05E1\u05D9\u05D1\u05EA \u05E4\u05E8\u05D9\u05E9\u05D4: ",
    certDocSig1: "\u05D7\u05D6\u05D9\u05DB\u05D5 - \u05DE\u05D3\u05E8\u05D9\u05DA \u05E8\u05D0\u05E9\u05D9",
    certDocSeal: "\u05D7\u05E6\u05D9 \u05DE\u05D5\u05DB\u05E8",
    certReasons: [
      "\u05D1\u05E2\u05D9\u05D5\u05EA \u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD \u05DE\u05D5\u05E6\u05D3\u05E7\u05D5\u05EA \u05D5\u05D7\u05E8\u05D3\u05D4 \u05E7\u05DC\u05D4",
      "\u05D5\u05D9\u05EA\u05D5\u05E8 \u05D0\u05DE\u05D9\u05E5 \u05D1\u05E2\u05D5\u05DE\u05E7 1.80 \u05DE\u05D8\u05E8",
      "\u05D4\u05E2\u05D3\u05E4\u05EA \u05E7\u05E4\u05D4 \u05E2\u05DC \u05E4\u05E0\u05D9 \u05D7\u05E0\u05E7 \u05DE\u05EA\u05D7\u05EA \u05DC\u05DE\u05D9\u05DD",
      "\u05D4\u05E6\u05D8\u05D9\u05D9\u05E0\u05D5\u05EA \u05D9\u05EA\u05E8\u05D4 \u05D1\u05E6\u05D9\u05E4\u05D4 \u05E2\u05DC \u05D4\u05D2\u05D1"
    ],
    faqSubtitle: "\u05D9\u05E9 \u05DC\u05DB\u05DD \u05E9\u05D0\u05DC\u05D5\u05EA?",
    faqTitle: "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA (\u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05DB\u05E0\u05D5\u05EA)",
    faqDesc: "\u05DB\u05DC \u05DE\u05D4 \u05E9\u05E8\u05E6\u05D9\u05EA\u05DD \u05DC\u05D3\u05E2\u05EA \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D0\u05EA\u05DD \u05DE\u05D1\u05D9\u05E0\u05D9\u05DD \u05E9\u05D0\u05D9\u05DF \u05DC\u05DB\u05DD \u05DB\u05D5\u05D7 \u05DC\u05D6\u05D4.",
    registerTitle: "\u05E9\u05E8\u05D9\u05D5\u05DF \u05DE\u05E7\u05D5\u05DD \u05D1\u05E7\u05D5\u05E8\u05E1 \u05D4\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1 \u05D4\u05E7\u05E8\u05D5\u05D1",
    registerDesc: "\u05DE\u05DC\u05D0\u05D5 \u05D0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D5\u05E0\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DB\u05DD \u05D1\u05E8\u05D2\u05E2 \u05E9\u05E0\u05E1\u05D9\u05D9\u05DD \u05D0\u05EA \u05D4\u05E7\u05E4\u05D4.",
    regNameLabel: "\u05E9\u05DD \u05DE\u05DC\u05D0:",
    regNamePlaceholder: "\u05D9\u05E9\u05E8\u05D0\u05DC \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9",
    regPhoneLabel: "\u05D8\u05DC\u05E4\u05D5\u05DF:",
    regPhonePlaceholder: "050-0000000",
    regReasonLabel: "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E8\u05D9\u05E9\u05D4 \u05D4\u05DE\u05E9\u05D5\u05E2\u05E8\u05EA \u05E9\u05DC\u05DA:",
    regMotivationLabel: "\u05E8\u05DE\u05EA \u05D4\u05DE\u05D5\u05D8\u05D9\u05D1\u05E6\u05D9\u05D4 \u05E9\u05DC\u05DA \u05DC\u05D4\u05E9\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05E7\u05D5\u05E8\u05E1:",
    regNotesLabel: "\u05D4\u05E2\u05E8\u05D5\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05D5\u05EA (\u05DC\u05DE\u05E9\u05DC: \u05D0\u05D9\u05D6\u05D4 \u05D0\u05E8\u05D8\u05D9\u05E7 \u05DC\u05D4\u05DB\u05D9\u05DF \u05DC\u05DA \u05D1\u05D7\u05D5\u05E3?):",
    regNotesPlaceholder: "\u05D0\u05E8\u05D8\u05D9\u05E7 \u05DC\u05D9\u05DE\u05D5\u05DF / \u05E7\u05E4\u05D4 \u05E7\u05E8 \u05E2\u05DD \u05D7\u05DC\u05D1 \u05E9\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05D5\u05E2\u05DC...",
    registerBtnText: "\u05E9\u05D2\u05E8\u05D5 \u05D1\u05E7\u05E9\u05D4 (\u05D1\u05DC\u05D9 \u05DC\u05D7\u05E5)",
    regReasons: [
      { id: "rr1", label: "\u05DB\u05D0\u05D1\u05D9 \u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD \u05DB\u05D1\u05E8 \u05D1\u05E9\u05E0\u05D9 \u05DE\u05D8\u05E8" },
      { id: "rr2", label: "\u05D4\u05E6\u05E4\u05EA \u05D7\u05E8\u05D3\u05D4 \u05DE\u05DE\u05D3\u05D5\u05D6\u05D5\u05EA \u05D3\u05DE\u05D9\u05D5\u05E0\u05D9\u05D5\u05EA" },
      { id: "rr3", label: "\u05DE\u05D9\u05DD \u05E7\u05E8\u05D9\u05DD \u05DE\u05D3\u05D9 \u05DC\u05D8\u05E2\u05DE\u05D9" },
      { id: "rr4", label: "\u05E4\u05EA\u05D0\u05D5\u05DD \u05D1\u05D0 \u05DC\u05D9 \u05E9\u05E0\u05D0\u05E4 \u05D1\u05D7\u05D5\u05E3" },
      { id: "rr5", label: "\u05DB\u05DC \u05D4\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05E0\u05DB\u05D5\u05E0\u05D5\u05EA" }
    ],
    regMotivations: [
      { id: "rm1", label: "50% (\u05D1\u05D3\u05D9\u05D5\u05E7 \u05D7\u05E6\u05D9 \u05DB\u05D5\u05D7)" },
      { id: "rm2", label: "30% (\u05D1\u05D0\u05EA\u05D9 \u05D1\u05E2\u05D9\u05E7\u05E8 \u05D1\u05E9\u05D1\u05D9\u05DC \u05D4\u05E9\u05E0\u05D5\u05E8\u05E7\u05DC)" },
      { id: "rm3", label: "10% (\u05D4\u05DB\u05E8\u05D7\u05D5 \u05D0\u05D5\u05EA\u05D9 \u05DC\u05D1\u05D5\u05D0)" }
    ],
    footerDesc: "\u05D1\u05D9\u05EA \u05D4\u05E1\u05E4\u05E8 \u05D4\u05E1\u05D0\u05D8\u05D9\u05E8\u05D9 \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05DC\u05E6\u05DC\u05D9\u05DC\u05D5\u05EA \u05E8\u05D3\u05D5\u05D3\u05D5\u05EA, \u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1 \u05D5\u05D0\u05E4\u05E1 \u05DE\u05D0\u05DE\u05E5.",
    footerDisclaimer: '\u05D4\u05D0\u05EA\u05E8 \u05D4\u05D9\u05E0\u05D5 \u05D0\u05EA\u05E8 \u05D4\u05D9\u05EA\u05D5\u05DC\u05D9/\u05E1\u05D0\u05D8\u05D9\u05E8\u05D9 \u05E9\u05E0\u05D1\u05E0\u05D4 \u05D1\u05D4\u05DE\u05D5\u05DF \u05D0\u05D4\u05D1\u05D4 \u05D5\u05D4\u05D5\u05DE\u05D5\u05E8. \u05D0\u05D9\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05D1\u05EA\u05E2\u05D5\u05D3\u05EA "\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1" \u05D4\u05E1\u05DE\u05DB\u05D4 \u05E8\u05E9\u05DE\u05D9\u05EA \u05DC\u05E6\u05DC\u05D9\u05DC\u05D4 \u05D7\u05D5\u05E4\u05E9\u05D9\u05EA \u05D0\u05D5 \u05E6\u05DC\u05D9\u05DC\u05EA \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD, \u05D0\u05DC\u05D0 \u05D0\u05DD \u05DB\u05DF \u05D0\u05EA\u05DD \u05E6\u05D5\u05DC\u05DC\u05D9\u05DD \u05D1\u05D0\u05DE\u05D1\u05D8\u05D9\u05D4.',
    footerCopyright: "\xA9 2026 \u05D7\u05E6\u05D9\u05DB\u05D5 \u2013 \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \u05DC\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1 \u05D5\u05D7\u05E6\u05D9 \u05DB\u05D5\u05D7.",
    syllabus: [
      {
        id: "s1",
        part: "pool",
        number: "\u05E9\u05D9\u05E2\u05D5\u05E8 1",
        title: "\u05D4\u05DB\u05E8\u05EA \u05DE\u05D9\u05DD \u05E8\u05D3\u05D5\u05D3\u05D9\u05DD \u05D5\u05D7\u05E8\u05D3\u05D4 \u05DE\u05D1\u05D5\u05E7\u05E8\u05EA",
        duration: "15 \u05D3\u05E7\u05D5\u05EA",
        desc: "\u05DC\u05D5\u05DE\u05D3\u05D9\u05DD \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D1\u05DE\u05D9\u05DD \u05E2\u05D3 \u05D4\u05DE\u05D5\u05EA\u05E0\u05D9\u05D9\u05DD \u05D1\u05D1\u05E8\u05D9\u05DB\u05D4 \u05D4\u05DE\u05D7\u05D5\u05DE\u05DE\u05EA, \u05DC\u05D7\u05D1\u05D5\u05E9 \u05DE\u05E1\u05DB\u05D4 \u05D5\u05DC\u05D4\u05D1\u05D9\u05DF \u05E9\u05D4\u05E7\u05E8\u05E7\u05E2\u05D9\u05EA \u05DE\u05DE\u05E9 \u05E7\u05E8\u05D5\u05D1\u05D4 \u05D5\u05D1\u05D8\u05D5\u05D7\u05D4.",
        difficulty: "\u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9: \u05E7\u05DC\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 (\u05D0\u05E4\u05E1 \u05DE\u05D0\u05DE\u05E5)"
      },
      {
        id: "s2",
        part: "pool",
        number: "\u05E9\u05D9\u05E2\u05D5\u05E8 2",
        title: "\u05D8\u05DB\u05E0\u05D9\u05E7\u05D5\u05EA \u05E6\u05D9\u05E4\u05D4 \u05D5\u05E0\u05E9\u05D9\u05DE\u05D4 \u05DC\u05DC\u05D0 \u05DE\u05D0\u05DE\u05E5",
        duration: "45 \u05D3\u05E7\u05D5\u05EA (\u05DB\u05D5\u05DC\u05DC \u05E7\u05E4\u05D4)",
        desc: "\u05EA\u05E8\u05D2\u05D5\u05DC \u05E9\u05DB\u05D9\u05D1\u05D4 \u05E2\u05DC \u05D4\u05D2\u05D1 \u05E2\u05DD \u05E9\u05E0\u05D5\u05E8\u05E7\u05DC, \u05E6\u05D9\u05E4\u05D4 \u05E4\u05E1\u05D9\u05D1\u05D9\u05EA \u05D5\u05D4\u05E8\u05DE\u05EA \u05D9\u05D3 \u05DE\u05D9\u05D9\u05D3\u05D9\u05EA \u05DC\u05E7\u05E8\u05D9\u05D0\u05D4 \u05DC\u05DE\u05E6\u05D9\u05DC \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05DC \u05EA\u05D7\u05D5\u05E9\u05EA \u05E2\u05D9\u05D9\u05E4\u05D5\u05EA \u05E7\u05DC\u05D4.",
        difficulty: "\u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9: \u05DE\u05E0\u05D5\u05D7\u05EA \u05E6\u05D4\u05E8\u05D9\u05D9\u05DD \u05DE\u05D5\u05D7\u05DC\u05D8\u05EA"
      },
      {
        id: "s3",
        part: "sea",
        number: "\u05E9\u05D9\u05E2\u05D5\u05E8 3",
        title: "\u05DB\u05E0\u05D9\u05E1\u05D4 \u05DE\u05D1\u05D5\u05E7\u05E8\u05EA \u05DC\u05D9\u05DD \u05E2\u05D3 \u05D4\u05D1\u05E8\u05DB\u05D9\u05D9\u05DD",
        duration: "20 \u05D3\u05E7\u05D5\u05EA",
        desc: "\u05E6\u05D5\u05E2\u05D3\u05D9\u05DD \u05D1\u05D6\u05D4\u05D9\u05E8\u05D5\u05EA 3 \u05DE\u05D8\u05E8\u05D9\u05DD \u05DE\u05D4\u05D7\u05D5\u05E3, \u05DE\u05E8\u05D2\u05D9\u05E9\u05D9\u05DD \u05D0\u05EA \u05D4\u05D2\u05DC\u05D9\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05DD \u05D5\u05DE\u05D7\u05DC\u05D9\u05D8\u05D9\u05DD \u05DE\u05D9\u05D3 \u05D0\u05DD \u05DB\u05D3\u05D0\u05D9 \u05DC\u05D7\u05D6\u05D5\u05E8 \u05DC\u05E9\u05DE\u05E9\u05D9\u05D9\u05D4.",
        difficulty: "\u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9: \u05D1\u05D9\u05E0\u05D5\u05E0\u05D9\u05EA (\u05D7\u05D5\u05DC \u05D1\u05D0\u05E6\u05D1\u05E2\u05D5\u05EA)"
      },
      {
        id: "s4",
        part: "sea",
        number: "\u05E9\u05D9\u05E2\u05D5\u05E8 4",
        title: "\u05E6\u05DC\u05D9\u05DC\u05EA \u05E2\u05D5\u05DE\u05E7 \u05E8\u05D3\u05D5\u05D3 (1.20 \u05DE\u05D8\u05E8)",
        duration: "7 \u05D3\u05E7\u05D5\u05EA",
        desc: "\u05D8\u05D1\u05D9\u05DC\u05EA \u05E8\u05D0\u05E9 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D1\u05D9\u05DD \u05D4\u05E4\u05EA\u05D5\u05D7! \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D6\u05E2\u05D5\u05E7 '\u05D4\u05DE\u05D9\u05DD \u05DE\u05DC\u05D5\u05D7\u05D9\u05DD \u05DE\u05D3\u05D9' \u05D5\u05DC\u05E2\u05DE\u05D5\u05D3 \u05D1\u05D7\u05D6\u05E8\u05D4 \u05D1\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF \u05DE\u05DC\u05D0 \u05E2\u05DC \u05E9\u05EA\u05D9 \u05E8\u05D2\u05DC\u05D9\u05D9\u05DD.",
        difficulty: "\u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9: \u05D0\u05EA\u05D2\u05E8 \u05D2\u05DC\u05D9\u05DD \u05E7\u05DC"
      },
      {
        id: "s5",
        part: "final",
        number: "\u05E9\u05D9\u05E2\u05D5\u05E8 \u05DE\u05E1\u05DB\u05DD",
        title: "\u05D9\u05E8\u05D9\u05D3\u05D4 \u05DC\u05DE\u05E2\u05DE\u05E7\u05D9\u05DD (\u05DC\u05D4\u05DE\u05D7\u05E9\u05D4 \u05DC\u05DE\u05D4 \u05D1\u05D9\u05D1\u05E9\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05E0\u05E2\u05D9\u05DD)",
        duration: "\u05E9\u05E2\u05EA\u05D9\u05D9\u05DD (\u05DB\u05D5\u05DC\u05DC \u05D0\u05E8\u05D5\u05D7\u05EA \u05E6\u05D4\u05E8\u05D9\u05D9\u05DD)",
        desc: "\u05D9\u05E8\u05D9\u05D3\u05D4 \u05DE\u05D1\u05D5\u05E7\u05E8\u05EA \u05DC-1.50 \u05DE\u05D8\u05E8, \u05D7\u05D5\u05D5\u05D9\u05D9\u05EA \u05DC\u05D7\u05E5 \u05E7\u05DC \u05D1\u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD, \u05D4\u05E1\u05DB\u05DE\u05D4 \u05DE\u05D5\u05D7\u05DC\u05D8\u05EA \u05E9\u05DC \u05D4\u05E7\u05D1\u05D5\u05E6\u05D4 \u05E9\u05D1\u05D9\u05D1\u05E9\u05D4 \u05D4\u05E8\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05E0\u05E2\u05D9\u05DD, \u05D5\u05E2\u05E0\u05D9\u05D3\u05EA \u05EA\u05E2\u05D5\u05D3\u05EA \u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1!",
        difficulty: "\u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9: \u05D5\u05D9\u05EA\u05D5\u05E8 \u05D0\u05E6\u05D9\u05DC\u05D9 \u05D5\u05D7\u05D2\u05D9\u05D2\u05D9"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "\u05D0\u05DC\u05D5\u05E4\u05D4 \u05E2\u05DD \u05D1\u05E2\u05D9\u05D5\u05EA \u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD",
        role: "\u05D7\u05E6\u05D9-\u05D1\u05D5\u05D2\u05E8\u05EA \u05DE\u05D7\u05D6\u05D5\u05E8 \u05D0'",
        stars: 3,
        text: "\u05D4\u05D2\u05E2\u05EA\u05D9 \u05DC\u05E7\u05D5\u05E8\u05E1 \u05E2\u05DD \u05E4\u05E0\u05D8\u05D6\u05D9\u05D4 \u05E2\u05DC \u05E9\u05D5\u05E0\u05D9\u05D5\u05EA \u05D5\u05D3\u05D5\u05DC\u05E4\u05D9\u05E0\u05D9\u05DD, \u05D5\u05D2\u05D9\u05DC\u05D9\u05EA\u05D9 \u05E9\u05DB\u05D1\u05E8 \u05D1-1.5 \u05DE\u05D8\u05E8 \u05D4\u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD \u05E9\u05DC\u05D9 \u05DE\u05D5\u05D7\u05D5\u05EA. \u05D4\u05DE\u05D3\u05E8\u05D9\u05DA \u05E9\u05DC \u05D7\u05E6\u05D9\u05DB\u05D5 \u05D4\u05D2\u05D9\u05D1 \u05DE\u05D9\u05D3, \u05D4\u05E2\u05DC\u05D4 \u05D0\u05D5\u05EA\u05D9 \u05DC\u05DE\u05E2\u05DC\u05D4 \u05D5\u05D4\u05DB\u05D9\u05DF \u05DC\u05D9 \u05D0\u05D9\u05D9\u05E1 \u05E7\u05E4\u05D4. 10/10 \u05DC\u05D0 \u05D9\u05D5\u05E8\u05D3\u05EA \u05D9\u05D5\u05EA\u05E8 \u05DE\u05EA\u05D7\u05EA \u05DC\u05DE\u05D9\u05DD!"
      },
      {
        id: "t2",
        name: "\u05D4\u05E4\u05E8\u05D8\u05E0\u05E8 \u05D4\u05DE\u05D5\u05D3\u05D0\u05D2",
        role: "\u05D7\u05E6\u05D9-\u05D1\u05D5\u05D2\u05E8\u05EA \u05DE\u05D7\u05D6\u05D5\u05E8 \u05D0'",
        stars: 2,
        text: "\u05DB\u05E9\u05D4\u05D2\u05E2\u05E0\u05D5 \u05DC-2 \u05DE\u05D8\u05E8 \u05E2\u05D5\u05DE\u05E7 \u05D5\u05E8\u05D0\u05D9\u05EA\u05D9 \u05D0\u05EA \u05D4\u05E7\u05E8\u05E7\u05E2\u05D9\u05EA \u05DE\u05EA\u05E8\u05D7\u05E7\u05EA, \u05E0\u05DB\u05E0\u05E1\u05EA\u05D9 \u05DC\u05D7\u05E8\u05D3\u05D4 \u05E7\u05DC\u05D4. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC\u05D9\u05D9, \u05D4\u05DE\u05D3\u05E8\u05D9\u05DA \u05D0\u05DE\u05E8 '\u05D7\u05D1\u05D9\u05D1\u05D9, \u05D4\u05D9\u05D1\u05E9\u05D4 \u05D6\u05D4 \u05D4\u05D3\u05D9\u05D1\u05D5\u05E8'. \u05E7\u05D9\u05D1\u05DC\u05E0\u05D5 \u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1 \u05D5\u05E0\u05E1\u05E2\u05E0\u05D5 \u05DC\u05D0\u05DB\u05D5\u05DC \u05D7\u05D5\u05DE\u05D5\u05E1."
      },
      {
        id: "t3",
        name: "\u05E1\u05E4\u05E7\u05D8\u05D9\u05E7\u05E0\u05D9\u05EA \u05DC\u05E9\u05E2\u05D1\u05E8",
        role: "\u05D7\u05E6\u05D9-\u05D1\u05D5\u05D2\u05E8\u05EA \u05DE\u05D7\u05D6\u05D5\u05E8 \u05D1'",
        stars: 4,
        text: "\u05DB\u05DC \u05D4\u05D7\u05D1\u05E8\u05D5\u05EA \u05E9\u05DC\u05D9 \u05E2\u05E9\u05D5 \u05DB\u05D5\u05DB\u05D1 \u05E8\u05D0\u05E9\u05D5\u05DF \u05D5\u05E9\u05E0\u05D9. \u05D0\u05E0\u05D9 \u05E2\u05E9\u05D9\u05EA\u05D9 \u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1 \u05D1\u05D7\u05E6\u05D9\u05DB\u05D5 \u05D5\u05D7\u05E1\u05DB\u05EA\u05D9 4 \u05D9\u05DE\u05D9\u05DD \u05E9\u05DC \u05D7\u05E0\u05E7. \u05D4\u05DB\u05D9 \u05DE\u05E9\u05EA\u05DC\u05DD \u05D1\u05D0\u05E8\u05E5!"
      },
      {
        id: "t4",
        name: "\u05E2\u05D9\u05D9\u05E3 \u05DE\u05E6\u05D9\u05D5\u05D3 \u05D5\u05DE\u05E9\u05E7\u05DC",
        role: "\u05D7\u05E6\u05D9-\u05D1\u05D5\u05D2\u05E8 \u05DE\u05D7\u05D6\u05D5\u05E8 \u05D2'",
        stars: 1,
        text: "\u05E9\u05DE\u05EA\u05D9 \u05D0\u05EA \u05DE\u05D0\u05D6\u05DF \u05D4\u05E6\u05D9\u05E4\u05D4 \u05D1\u05D9\u05D1\u05E9\u05D4, \u05D4\u05E8\u05D2\u05E9\u05EA\u05D9 \u05E9\u05D6\u05D4 \u05E9\u05D5\u05E7\u05DC 40 \u05E7\u05D9\u05DC\u05D5 \u05D5\u05D0\u05DE\u05E8\u05EA\u05D9 \u05DC\u05DE\u05D3\u05E8\u05D9\u05DA \u05E9\u05D0\u05E0\u05D9 \u05DE\u05E2\u05D3\u05D9\u05E3 \u05DC\u05D7\u05DB\u05D5\u05EA \u05D1\u05D1\u05E8 \u05E9\u05DC \u05D4\u05DE\u05DC\u05D5\u05DF. \u05E7\u05D9\u05D1\u05DC\u05EA\u05D9 \u05EA\u05E2\u05D5\u05D3\u05EA \u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1 \u05DE\u05D5\u05DB\u05E8\u05EA \u05D1\u05DE\u05E7\u05D5\u05DD!"
      },
      {
        id: "t5",
        name: "\u05D7\u05E8\u05D3\u05EA\u05D9 \u05DE\u05E6\u05D8\u05D9\u05D9\u05DF",
        role: "\u05D7\u05E6\u05D9-\u05D1\u05D5\u05D2\u05E8 \u05DE\u05D7\u05D6\u05D5\u05E8 \u05D2'",
        stars: 5,
        text: "\u05E0\u05DB\u05E0\u05E1\u05EA\u05D9 \u05DC\u05DE\u05D9\u05DD \u05E2\u05D3 \u05D4\u05E4\u05D5\u05E4\u05D9\u05E7, \u05E8\u05D0\u05D9\u05EA\u05D9 \u05E6\u05DC \u05E9\u05DC \u05D3\u05D2 \u05D6\u05D4\u05D1 \u05D5\u05E0\u05D1\u05D4\u05DC\u05EA\u05D9. \u05D4\u05DE\u05D3\u05E8\u05D9\u05DA \u05E9\u05DC \u05D7\u05E6\u05D9\u05DB\u05D5 \u05D4\u05E8\u05D2\u05D9\u05E2 \u05D0\u05D5\u05EA\u05D9 \u05D5\u05D4\u05E1\u05D1\u05D9\u05E8 \u05E9\u05D6\u05D4 \u05D1\u05E1\u05D3\u05E8 \u05D2\u05DE\u05D5\u05E8 \u05DC\u05E4\u05E8\u05D5\u05E9. \u05D4\u05E7\u05D5\u05E8\u05E1 \u05D4\u05D8\u05D5\u05D1 \u05D1\u05D7\u05D9\u05D9!"
      }
    ],
    faqs: [
      {
        id: "f1",
        question: "\u05DE\u05D4 \u05DE\u05D5\u05EA\u05E8 \u05DC\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA \u05E2\u05DD \u05EA\u05E2\u05D5\u05D3\u05EA \u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1?",
        answer: "\u05D4\u05EA\u05E2\u05D5\u05D3\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05DA \u05DC\u05D4\u05D2\u05D9\u05D3 \u05D1\u05D0\u05E8\u05D5\u05D7\u05D5\u05EA \u05E9\u05D9\u05E9\u05D9 '\u05DB\u05DF, \u05E2\u05E9\u05D9\u05EA\u05D9 \u05E7\u05D5\u05E8\u05E1 \u05E6\u05DC\u05D9\u05DC\u05D4', \u05D5\u05DC\u05D4\u05D7\u05DC\u05D9\u05E3 \u05E0\u05D5\u05E9\u05D0 \u05D1\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05DB\u05DE\u05E9\u05D5\u05D0\u05DC\u05D9\u05DD \u05D0\u05D9\u05D6\u05D4 \u05E2\u05D5\u05DE\u05E7."
      },
      {
        id: "f2",
        question: "\u05DE\u05D4 \u05E7\u05D5\u05E8\u05D4 \u05D0\u05DD \u05DB\u05D5\u05D0\u05D1\u05D5\u05EA \u05DC\u05D9 \u05D4\u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD \u05DB\u05D1\u05E8 \u05D1\u05D9\u05E8\u05D9\u05D3\u05D4 \u05DE\u05D4\u05D0\u05D5\u05D8\u05D5?",
        answer: "\u05D6\u05D4 \u05DE\u05E6\u05D5\u05D9\u05DF! \u05D1\u05D3\u05D9\u05D5\u05E7 \u05D1\u05E9\u05D1\u05D9\u05DC \u05D6\u05D4 \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E4\u05D4. \u05D1\u05DE\u05E7\u05E8\u05D4 \u05DB\u05D6\u05D4 \u05D4\u05DC\u05D9\u05DE\u05D5\u05D3\u05D9\u05DD \u05E2\u05D5\u05D1\u05E8\u05D9\u05DD \u05DC\u05DE\u05EA\u05DB\u05D5\u05E0\u05EA \u05E9\u05DC \u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05E1\u05E8\u05D8\u05D5\u05E0\u05D9 \u05D8\u05D1\u05E2 \u05D1\u05D9\u05D5\u05D8\u05D9\u05D5\u05D1."
      },
      {
        id: "f3",
        question: "\u05DE\u05D4 \u05DC\u05E2\u05E9\u05D5\u05EA \u05D0\u05DD \u05D0\u05E0\u05D9 \u05D7\u05D5\u05D8\u05E3 \u05D7\u05E8\u05D3\u05D4 \u05D1\u05D0\u05DE\u05E6\u05E2 \u05D4\u05E6\u05DC\u05D9\u05DC\u05D4?",
        answer: "\u05E4\u05E9\u05D5\u05D8 \u05DE\u05D0\u05D5\u05D3: \u05E0\u05E2\u05DE\u05D3\u05D9\u05DD (\u05DB\u05D9 \u05D4\u05E2\u05D5\u05DE\u05E7 \u05D4\u05D5\u05D0 1.20 \u05DE\u05D8\u05E8), \u05DE\u05D5\u05E6\u05D9\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05D5\u05D5\u05E1\u05EA \u05D5\u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05DE\u05D5\u05E0\u05D9\u05EA \u05DC\u05DE\u05DC\u05D5\u05DF."
      },
      {
        id: "f4",
        question: "\u05D4\u05D0\u05DD \u05D9\u05E9 \u05D4\u05E0\u05D7\u05D4 \u05DC\u05DE\u05D9 \u05E9\u05DE\u05D1\u05D9\u05D0 \u05D7\u05E6\u05D9 \u05DB\u05D5\u05D7 \u05DE\u05D4\u05D1\u05D9\u05EA?",
        answer: "\u05D1\u05D5\u05D5\u05D3\u05D0\u05D9. \u05D6\u05D5\u05D2\u05D5\u05EA \u05E9\u05E0\u05E8\u05E9\u05DE\u05D9\u05DD \u05D9\u05D7\u05D3 \u05D5\u05DE\u05E4\u05E1\u05D9\u05E7\u05D9\u05DD \u05D9\u05D7\u05D3 \u05DE\u05E7\u05D1\u05DC\u05D9\u05DD 50% \u05D4\u05E0\u05D7\u05D4 \u05E2\u05DC \u05D4\u05E7\u05D5\u05E8\u05E1 \u05D4\u05D1\u05D0 \u05E9\u05DC\u05D0 \u05D9\u05D9\u05E4\u05EA\u05D7 \u05DC\u05E2\u05D5\u05DC\u05DD."
      }
    ]
  };

  // js/core/store.js
  var appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
  var isEditMode = false;
  function getState() {
    return appState;
  }
  function getEditMode() {
    return isEditMode;
  }
  function setEditMode(active) {
    isEditMode = active;
  }
  function loadSavedData() {
    const saved = localStorage.getItem("hatziko_site_data");
    if (saved) {
      try {
        appState = Object.assign({}, DEFAULT_DATA, JSON.parse(saved));
        appState.logoSrc = "assets/new-transparent-logo.png";
        if (appState.heroSrc === "assets/hero.jpg") {
          appState.heroSrc = "assets/hero-new.jfif";
        }
        if (!appState.stats || appState.stats.length === 0) {
          appState.stats = JSON.parse(JSON.stringify(DEFAULT_DATA.stats));
        }
        if (!appState.calcSliders || appState.calcSliders.length === 0) {
          appState.calcSliders = JSON.parse(JSON.stringify(DEFAULT_DATA.calcSliders));
        }
        if (appState.syllabus) {
          appState.syllabus.forEach((item) => {
            if (!item.part) {
              if (item.id === "s1" || item.id === "s2") item.part = "pool";
              else if (item.id === "s3" || item.id === "s4") item.part = "sea";
              else if (item.id === "s5") item.part = "final";
              else item.part = "pool";
            }
          });
        }
        if (appState.heroBadge && (appState.heroBadge.includes("\u2B50\xBD") || appState.heroBadge.includes("\u2B501/2") || appState.heroBadge.includes("\u2B50 1/2"))) {
          appState.heroBadge = appState.heroBadge.replace(/⭐\s*½|⭐\s*1\/2|½|1\/2/g, '<img src="assets/half-star.png" class="half-star-img" alt="\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1">');
        }
        if (appState.testimonials) {
          appState.testimonials.forEach((t) => {
            if (t.stars && (t.stars.includes("\u2B50\xBD") || t.stars.includes("\u2B501/2") || t.stars.includes("\u2B50 1/2") || t.stars.includes("\xBD"))) {
              t.stars = t.stars.replace(/⭐\s*½|⭐\s*1\/2|½|1\/2/g, '<img src="assets/half-star.png" class="half-star-img" alt="\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1">');
            }
          });
        }
        if (!appState.certReasons || appState.certReasons.length === 0) {
          appState.certReasons = JSON.parse(JSON.stringify(DEFAULT_DATA.certReasons));
        }
        if (!appState.regReasons || appState.regReasons.length === 0) {
          appState.regReasons = JSON.parse(JSON.stringify(DEFAULT_DATA.regReasons));
        }
        if (!appState.regMotivations || appState.regMotivations.length === 0) {
          appState.regMotivations = JSON.parse(JSON.stringify(DEFAULT_DATA.regMotivations));
        }
      } catch (e) {
        console.error("Failed to parse saved data, loading default.", e);
        appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
      }
    }
    return appState;
  }
  function saveData() {
    localStorage.setItem("hatziko_site_data", JSON.stringify(appState));
  }
  function resetData() {
    appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveData();
    return appState;
  }

  // js/core/utils.js
  function getStarCount(starVal) {
    if (starVal === null || starVal === void 0 || starVal === "") return 3;
    if (typeof starVal === "number") return Math.max(1, Math.min(10, starVal));
    if (typeof starVal === "string") {
      const parsed = parseFloat(starVal);
      if (!isNaN(parsed) && parsed > 0) {
        return Math.max(1, Math.min(10, Math.round(parsed)));
      }
      const imgMatches = (starVal.match(/<img/g) || []).length;
      const emojiMatches = (starVal.match(/⭐|½|1\/2/g) || []).length;
      const total = imgMatches + emojiMatches;
      return total > 0 ? Math.min(10, total) : 3;
    }
    return 3;
  }
  function renderStars(starVal) {
    const count = getStarCount(starVal);
    let html = "";
    for (let i = 0; i < count; i++) {
      html += '<img src="assets/half-star.png" class="half-star-img" alt="\u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1">';
    }
    return html;
  }
  function updateCharCounter(el) {
    const counter = document.getElementById("char-count");
    if (counter) {
      counter.innerText = el.value.length;
      if (el.value.length >= 480) {
        counter.style.color = "#ef4444";
      } else {
        counter.style.color = "var(--text-secondary)";
      }
    }
  }
  function formatDate(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  // js/features/animations.js
  function initBubbles() {
    const container = document.getElementById("bubbles");
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < 25; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      const size = Math.random() * 25 + 8;
      bubble.style.width = size + "px";
      bubble.style.height = size + "px";
      bubble.style.left = Math.random() * 100 + "%";
      bubble.style.animationDelay = Math.random() * 8 + "s";
      bubble.style.animationDuration = Math.random() * 6 + 6 + "s";
      container.appendChild(bubble);
    }
  }

  // js/components/stats.js
  function renderStats(appState2, isEditMode2) {
    const container = document.getElementById("hero-stats-container");
    if (!container) return;
    if (!appState2.stats || appState2.stats.length === 0) {
      appState2.stats = JSON.parse(JSON.stringify(DEFAULT_DATA.stats));
    }
    container.innerHTML = appState2.stats.map((item) => `
        <div class="stat-card glass-card" data-id="${item.id}">
            <span class="stat-number">${escapeHtml(item.number)}</span>
            <span class="stat-label">${escapeHtml(item.label)}</span>
            ${isEditMode2 ? `
                <div class="item-actions-bar" style="margin-top:0.3rem; padding-top:0.3rem; justify-content:center;">
                    <button class="btn btn-sm btn-outline" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="openEditModal('stat', '${item.id}')">\u270F\uFE0F</button>
                    <button class="btn btn-sm btn-outline" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="deleteItem('stat', '${item.id}')">\u{1F5D1}\uFE0F</button>
                </div>
            ` : ""}
        </div>
    `).join("");
  }

  // js/components/syllabus.js
  var currentSyllabusTab = "pool";
  function setSyllabusTab(part) {
    currentSyllabusTab = part;
  }
  function switchSyllabusTab(part) {
    currentSyllabusTab = part;
    document.querySelectorAll(".syllabus-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-part") === part);
    });
    renderSyllabus(getState(), getEditMode());
  }
  function renderSyllabus(appState2, isEditMode2) {
    const container = document.getElementById("syllabus-container");
    if (!container) return;
    if (!appState2.syllabus || appState2.syllabus.length === 0) {
      appState2.syllabus = JSON.parse(JSON.stringify(DEFAULT_DATA.syllabus));
    }
    const filtered = appState2.syllabus.filter((item) => {
      const itemPart = item.part || "pool";
      return itemPart === currentSyllabusTab;
    });
    if (filtered.length === 0) {
      container.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:3rem 1rem; color: var(--text-secondary);">
                <p style="font-size:1.1rem; margin-bottom:1rem;">\u05D0\u05D9\u05DF \u05E2\u05D3\u05D9\u05D9\u05DF \u05E9\u05D9\u05E2\u05D5\u05E8\u05D9\u05DD \u05D1\u05D7\u05DC\u05E7 \u05D6\u05D4.</p>
                ${isEditMode2 ? `<button class="btn btn-outline" onclick="openEditModal('syllabus')">\u2795 \u05D4\u05D5\u05E1\u05E3 \u05E9\u05D9\u05E2\u05D5\u05E8 \u05DC\u05D7\u05DC\u05E7 \u05D6\u05D4</button>` : ""}
            </div>
        `;
      return;
    }
    container.innerHTML = filtered.map((item) => {
      const itemPart = item.part || "pool";
      const themeClass = itemPart === "sea" ? "theme-sea" : itemPart === "final" ? "theme-final" : "theme-pool";
      return `
            <div class="syllabus-card glass-card ${themeClass}" data-id="${item.id}">
                <span class="syllabus-number">${escapeHtml(item.number || "\u05E9\u05D9\u05E2\u05D5\u05E8")}</span>
                <div>
                    <h3 class="syllabus-title">${escapeHtml(item.title)}</h3>
                    ${item.duration ? `<div class="syllabus-duration">\u23F1\uFE0F ${escapeHtml(item.duration)}</div>` : ""}
                    <p class="syllabus-desc">${escapeHtml(item.desc)}</p>
                </div>
                <div>
                    <div class="syllabus-difficulty">${escapeHtml(item.difficulty)}</div>
                    ${isEditMode2 ? `
                        <div class="item-actions-bar" style="margin-top:1rem;">
                            <button class="btn btn-sm btn-outline" onclick="openEditModal('syllabus', '${item.id}')">\u270F\uFE0F \u05E2\u05E8\u05D5\u05DA \u05E9\u05D9\u05E2\u05D5\u05E8</button>
                            <button class="btn btn-sm btn-outline" onclick="deleteItem('syllabus', '${item.id}')">\u{1F5D1}\uFE0F \u05DE\u05D7\u05E7</button>
                        </div>
                    ` : ""}
                </div>
            </div>
        `;
    }).join("");
  }

  // js/components/testimonials.js
  function renderTestimonials(appState2, isEditMode2) {
    const container = document.getElementById("testimonials-container");
    if (!container) return;
    if (!appState2.testimonials) return;
    container.innerHTML = appState2.testimonials.map((item) => `
        <div class="testimonial-card glass-card" data-id="${item.id}">
            <div>
                <div class="testimonial-header">
                    <div class="testimonial-avatar">\u{1F93F}</div>
                    <div>
                        <div class="testimonial-author">${escapeHtml(item.name)}</div>
                        <div class="testimonial-role">${escapeHtml(item.role)}</div>
                    </div>
                </div>
                <div class="testimonial-stars">${renderStars(item.stars)}</div>
                <p class="testimonial-text">"${escapeHtml(item.text)}"</p>
            </div>
            ${isEditMode2 ? `
                <div class="item-actions-bar">
                    <button class="btn btn-sm btn-outline" onclick="openEditModal('testimonial', '${item.id}')">\u270F\uFE0F \u05E2\u05E8\u05D5\u05DA \u05D4\u05DE\u05DC\u05E6\u05D4</button>
                    <button class="btn btn-sm btn-outline" onclick="deleteItem('testimonial', '${item.id}')">\u{1F5D1}\uFE0F \u05DE\u05D7\u05E7</button>
                </div>
            ` : ""}
        </div>
    `).join("");
  }

  // js/components/faq.js
  function renderFAQs(appState2, isEditMode2) {
    const container = document.getElementById("faq-container");
    if (!container) return;
    if (!appState2.faqs) return;
    container.innerHTML = appState2.faqs.map((item) => `
        <div class="faq-item glass-card" data-id="${item.id}">
            <div class="faq-question">
                <span>\u2753 ${escapeHtml(item.question)}</span>
                <span class="faq-icon">\u25BC</span>
            </div>
            <div class="faq-answer">
                ${escapeHtml(item.answer)}
                ${isEditMode2 ? `
                    <div class="item-actions-bar">
                        <button class="btn btn-sm btn-outline" onclick="openEditModal('faq', '${item.id}')">\u270F\uFE0F \u05E2\u05E8\u05D5\u05DA \u05E9\u05D0\u05DC\u05D4</button>
                        <button class="btn btn-sm btn-outline" onclick="deleteItem('faq', '${item.id}')">\u{1F5D1}\uFE0F \u05DE\u05D7\u05E7</button>
                    </div>
                ` : ""}
            </div>
        </div>
    `).join("");
    document.querySelectorAll(".faq-item").forEach((faqEl) => {
      faqEl.querySelector(".faq-question").onclick = (e) => {
        if (e.target.tagName === "BUTTON") return;
        faqEl.classList.toggle("open");
      };
    });
  }

  // js/features/calculator.js
  function renderCalculatorSliders(appState2, isEditMode2) {
    const container = document.getElementById("calc-sliders-container");
    if (!container) return;
    if (!appState2.calcSliders || appState2.calcSliders.length === 0) {
      appState2.calcSliders = JSON.parse(JSON.stringify(DEFAULT_DATA.calcSliders));
    }
    container.innerHTML = appState2.calcSliders.map((item) => `
        <div class="slider-group" data-id="${item.id}">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                <label for="slider-${item.id}" style="margin:0;">
                    <span class="slider-label-text">${escapeHtml(item.label)}</span>
                    <span id="val-${item.id}" class="slider-value">${item.value}%</span>
                </label>
                ${isEditMode2 ? `
                    <div class="item-actions-bar" style="margin:0; gap:0.3rem;">
                        <button class="btn btn-sm btn-outline" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="openEditModal('calcSlider', '${item.id}')">\u270F\uFE0F</button>
                        <button class="btn btn-sm btn-outline" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="deleteItem('calcSlider', '${item.id}')">\u{1F5D1}\uFE0F</button>
                    </div>
                ` : ""}
            </div>
            <input type="range" id="slider-${item.id}" min="0" max="100" value="${item.value}" oninput="updateCalculatorResult()">
        </div>
    `).join("");
    updateCalculatorResult();
  }
  function updateCalculatorResult() {
    const appState2 = getState();
    if (!appState2.calcSliders || appState2.calcSliders.length === 0) return;
    let totalWeight = 0;
    let weightedSum = 0;
    appState2.calcSliders.forEach((item) => {
      const sliderEl = document.getElementById(`slider-${item.id}`);
      const valEl = document.getElementById(`val-${item.id}`);
      const val = sliderEl ? parseInt(sliderEl.value) : item.value || 50;
      item.value = val;
      if (valEl) valEl.innerText = val + "%";
      const weight = typeof item.weight === "number" && !isNaN(item.weight) ? item.weight : 1;
      weightedSum += val * weight;
      totalWeight += weight;
    });
    const factor = totalWeight > 0 ? weightedSum / (100 * totalWeight) : 0.5;
    let maxDepth = (2 - factor * 1.8).toFixed(1);
    if (maxDepth < 0.2) maxDepth = "0.2";
    const calcDepth = document.getElementById("calc-depth");
    const calcZone = document.getElementById("calc-zone");
    const calcAdvice = document.getElementById("calc-advice");
    if (calcDepth) calcDepth.innerText = maxDepth + " \u05DE\u05D8\u05E8";
    if (calcZone && calcAdvice) {
      if (maxDepth >= 1.5) {
        calcZone.innerText = appState2.calcZoneHigh || DEFAULT_DATA.calcZoneHigh;
        calcAdvice.innerText = appState2.calcAdviceHigh || DEFAULT_DATA.calcAdviceHigh;
      } else if (maxDepth >= 0.8) {
        calcZone.innerText = appState2.calcZoneMid || DEFAULT_DATA.calcZoneMid;
        calcAdvice.innerText = appState2.calcAdviceMid || DEFAULT_DATA.calcAdviceMid;
      } else {
        calcZone.innerText = appState2.calcZoneLow || DEFAULT_DATA.calcZoneLow;
        calcAdvice.innerText = appState2.calcAdviceLow || DEFAULT_DATA.calcAdviceLow;
      }
    }
  }
  function initCalculator() {
    renderCalculatorSliders(getState(), getEditMode());
  }

  // js/features/certificate.js
  function updateCertReasonDisplay() {
    const displayReason = document.getElementById("cert-display-reason");
    const reasonSelect = document.getElementById("cert-reason-select");
    if (displayReason && reasonSelect) {
      displayReason.innerText = reasonSelect.value || "";
    }
  }
  function initCertificate() {
    const nameInput = document.getElementById("cert-name-input");
    const reasonSelect = document.getElementById("cert-reason-select");
    const dateInput = document.getElementById("cert-date-input");
    const displayName = document.getElementById("cert-display-name");
    const displayReason = document.getElementById("cert-display-reason");
    const displayDate = document.getElementById("cert-display-date");
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    if (dateInput) dateInput.value = today;
    if (displayDate) displayDate.innerText = formatDate(today);
    if (nameInput && displayName) {
      nameInput.addEventListener("input", () => {
        displayName.innerText = nameInput.value || "\u05D0\u05DC\u05D5\u05E4\u05D4 \u05E2\u05DD \u05D1\u05E2\u05D9\u05D5\u05EA \u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD";
      });
    }
    if (reasonSelect && displayReason) {
      reasonSelect.addEventListener("change", () => {
        updateCertReasonDisplay();
      });
    }
    if (dateInput && displayDate) {
      dateInput.addEventListener("change", () => {
        displayDate.innerText = formatDate(dateInput.value);
      });
    }
    const printBtn = document.getElementById("btn-print-cert");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }
  }

  // js/features/edit-engine.js
  var editingModalItemType = null;
  var editingModalItemId = null;
  var globalRenderAllCallback = null;
  function setRenderAllCallback(fn) {
    globalRenderAllCallback = fn;
  }
  function triggerRenderAll() {
    if (typeof globalRenderAllCallback === "function") {
      globalRenderAllCallback();
    }
  }
  function renderImages(appState2) {
    const mainLogo = document.getElementById("main-logo-img");
    const heroLogo = document.getElementById("hero-logo-img");
    const certLogo = document.getElementById("cert-logo-img");
    const footerLogo = document.getElementById("footer-logo-img");
    const mainHero = document.getElementById("main-hero-img");
    const logoUrl = appState2.logoSrc || "assets/new-transparent-logo.png";
    const heroUrl = appState2.heroSrc || "assets/hero-new.jfif";
    if (mainLogo) mainLogo.src = logoUrl;
    if (heroLogo) heroLogo.src = logoUrl;
    if (certLogo) certLogo.src = logoUrl;
    if (footerLogo) footerLogo.src = logoUrl;
    if (mainHero) mainHero.src = heroUrl;
  }
  function renderStaticText(appState2, isEditMode2) {
    document.querySelectorAll(".editable").forEach((el) => {
      const key = el.getAttribute("data-key");
      if (key && appState2[key] !== void 0) {
        if (key === "heroBadge" || typeof appState2[key] === "string" && appState2[key].includes("<img")) {
          el.innerHTML = appState2[key];
        } else {
          el.innerText = appState2[key];
        }
      }
      if (isEditMode2) {
        el.contentEditable = "true";
        el.title = "\u05DC\u05D7\u05E5 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4";
        el.onblur = () => {
          appState2[key] = el.innerText.trim();
          saveData();
          if (key === "certDocBodyPrefix") {
            updateCertReasonDisplay();
          }
        };
      } else {
        el.contentEditable = "false";
        el.title = "";
        el.onblur = null;
      }
    });
    document.querySelectorAll("[data-key-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-key-placeholder");
      if (key && appState2[key] !== void 0) {
        el.placeholder = appState2[key];
      }
    });
  }
  function renderDropdownOptions(appState2) {
    const certReasonSelect = document.getElementById("cert-reason-select");
    if (certReasonSelect && appState2.certReasons) {
      const currentVal = certReasonSelect.value;
      certReasonSelect.innerHTML = appState2.certReasons.map(
        (r) => `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`
      ).join("");
      if (currentVal && appState2.certReasons.includes(currentVal)) {
        certReasonSelect.value = currentVal;
      }
      updateCertReasonDisplay();
    }
    const regReasonSelect = document.getElementById("reg-reason");
    if (regReasonSelect && appState2.regReasons) {
      regReasonSelect.innerHTML = appState2.regReasons.map((item) => {
        const label = typeof item === "object" ? item.label : item;
        return `<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`;
      }).join("");
    }
    const regMotSelect = document.getElementById("reg-motivation");
    if (regMotSelect && appState2.regMotivations) {
      regMotSelect.innerHTML = appState2.regMotivations.map((item) => {
        const label = typeof item === "object" ? item.label : item;
        return `<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`;
      }).join("");
    }
  }
  function openEditModal(type, id = null) {
    editingModalItemType = type;
    editingModalItemId = id;
    const appState2 = getState();
    const modal = document.getElementById("edit-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    let item = null;
    if (id) {
      if (type === "stat") item = appState2.stats.find((x) => x.id === id);
      if (type === "calcSlider") item = appState2.calcSliders.find((x) => x.id === id);
      if (type === "syllabus") item = appState2.syllabus.find((x) => x.id === id);
      if (type === "testimonial") item = appState2.testimonials.find((x) => x.id === id);
      if (type === "faq") item = appState2.faqs.find((x) => x.id === id);
    }
    if (type === "stat") {
      modalTitle.innerText = id ? "\u05E2\u05E8\u05D9\u05DB\u05EA \u05DE\u05D3\u05D3/\u05DE\u05E1\u05E4\u05E8" : "\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05D3\u05D3/\u05DE\u05E1\u05E4\u05E8 \u05D7\u05D3\u05E9";
      modalBody.innerHTML = `
            <div class="form-group">
                <label>\u05E2\u05E8\u05DA/\u05DE\u05E1\u05E4\u05E8 (\u05DC\u05DE\u05E9\u05DC: 0.5, 100%, 0):</label>
                <input type="text" id="m-stat-number" class="form-control" value="${item ? escapeHtml(item.number) : "100%"}">
            </div>
            <div class="form-group">
                <label>\u05EA\u05D9\u05D0\u05D5\u05E8/\u05EA\u05D5\u05D5\u05D9\u05EA (\u05DC\u05DE\u05E9\u05DC: \u05D4\u05E4\u05E1\u05E7\u05D5\u05EA \u05E7\u05E4\u05D4):</label>
                <input type="text" id="m-stat-label" class="form-control" value="${item ? escapeHtml(item.label) : "\u05DE\u05D3\u05D3 \u05D7\u05D3\u05E9"}">
            </div>
        `;
    } else if (type === "calcSlider") {
      modalTitle.innerText = id ? "\u05E2\u05E8\u05D9\u05DB\u05EA \u05DE\u05D3\u05D3 \u05D1\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF" : "\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05D3\u05D3 \u05D7\u05D3\u05E9 \u05DC\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF";
      modalBody.innerHTML = `
            <div class="form-group">
                <label>\u05EA\u05D5\u05D5\u05D9\u05EA/\u05E9\u05DD \u05D4\u05DE\u05D3\u05D3 (\u05DB\u05D5\u05DC\u05DC \u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9):</label>
                <input type="text" id="m-calc-label" class="form-control" value="${item ? escapeHtml(item.label) : "\u{1F988} \u05E4\u05D7\u05D3 \u05DE\u05DB\u05E8\u05D9\u05E9\u05D9\u05DD \u05D3\u05DE\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD:"}">
            </div>
            <div class="form-group">
                <label>\u05E2\u05E8\u05DA \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC (0-100%):</label>
                <input type="number" id="m-calc-val" class="form-control" min="0" max="100" value="${item ? item.value : 50}">
            </div>
            <div class="form-group">
                <label>\u05DE\u05E9\u05E7\u05DC/\u05D4\u05E9\u05E4\u05E2\u05D4 \u05E2\u05DC \u05D4\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF (\u05DC\u05DE\u05E9\u05DC 1, 0.5, 2):</label>
                <input type="number" step="0.1" id="m-calc-weight" class="form-control" value="${item ? item.weight || 1 : 1}">
            </div>
        `;
    } else if (type === "syllabus") {
      const selectedPart = item ? item.part || "pool" : "pool";
      modalTitle.innerText = id ? "\u05E2\u05E8\u05D9\u05DB\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D1\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA" : "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D1\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA";
      modalBody.innerHTML = `
            <div class="form-group">
                <label>\u05D7\u05DC\u05E7 / \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D1\u05E1\u05D9\u05DC\u05D1\u05D5\u05E1:</label>
                <select id="m-part" class="form-control">
                    <option value="pool" ${selectedPart === "pool" ? "selected" : ""}>\u05D7\u05DC\u05E7 \u05D0': \u05D1\u05E8\u05D9\u05DB\u05D4 (\u05EA\u05DB\u05DC\u05EA)</option>
                    <option value="sea" ${selectedPart === "sea" ? "selected" : ""}>\u05D7\u05DC\u05E7 \u05D1': \u05D9\u05DD (\u05D8\u05D5\u05E8\u05E7\u05D9\u05D6)</option>
                    <option value="final" ${selectedPart === "final" ? "selected" : ""}>\u05D7\u05DC\u05E7 \u05D2': \u05DB\u05D9\u05E9\u05DC\u05D5\u05DF \u05DE\u05E1\u05DB\u05DD \u05D5\u05EA\u05E2\u05D5\u05D3\u05D4 (\u05DB\u05EA\u05D5\u05DD)</option>
                </select>
            </div>
            <div class="form-group">
                <label>\u05DE\u05E1\u05E4\u05E8/\u05DB\u05D5\u05EA\u05E8\u05EA \u05E7\u05D8\u05E0\u05D4 (\u05DC\u05DE\u05E9\u05DC: \u05E9\u05D9\u05E2\u05D5\u05E8 1, \u05E9\u05D9\u05E2\u05D5\u05E8 \u05DE\u05E1\u05DB\u05DD):</label>
                <input type="text" id="m-number" class="form-control" value="${item ? item.number || "\u05E9\u05D9\u05E2\u05D5\u05E8" : "\u05E9\u05D9\u05E2\u05D5\u05E8"}">
            </div>
            <div class="form-group">
                <label>\u05DB\u05D5\u05EA\u05E8\u05EA \u05D4\u05E9\u05D9\u05E2\u05D5\u05E8:</label>
                <input type="text" id="m-title" class="form-control" value="${item ? item.title : ""}">
            </div>
            <div class="form-group">
                <label>\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF:</label>
                <input type="text" id="m-duration" class="form-control" value="${item ? item.duration || "20 \u05D3\u05E7\u05D5\u05EA" : "20 \u05D3\u05E7\u05D5\u05EA"}">
            </div>
            <div class="form-group">
                <label>\u05E4\u05D9\u05E8\u05D5\u05D8 \u05D4\u05E9\u05D9\u05E2\u05D5\u05E8:</label>
                <textarea id="m-desc" class="form-control" rows="3">${item ? item.desc : ""}</textarea>
            </div>
            <div class="form-group">
                <label>\u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9:</label>
                <input type="text" id="m-difficulty" class="form-control" value="${item ? item.difficulty : "\u05E8\u05DE\u05EA \u05E7\u05D5\u05E9\u05D9: \u05E7\u05DC\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8"}">
            </div>
        `;
    } else if (type === "testimonial") {
      const starsCount = item ? getStarCount(item.stars) : 3;
      const textVal = item ? item.text || "" : "";
      modalTitle.innerText = id ? "\u05E2\u05E8\u05D9\u05DB\u05EA \u05D4\u05DE\u05DC\u05E6\u05D4" : "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D4\u05DE\u05DC\u05E6\u05D4 \u05D7\u05D3\u05E9\u05D4";
      modalBody.innerHTML = `
            <div class="form-group">
                <label>\u05E9\u05DD \u05D4\u05DE\u05DE\u05DC\u05D9\u05E5/\u05D4:</label>
                <input type="text" id="m-name" class="form-control" value="${item ? escapeHtml(item.name) : ""}">
            </div>
            <div class="form-group">
                <label>\u05EA\u05E4\u05E7\u05D9\u05D3/\u05EA\u05D9\u05D0\u05D5\u05E8:</label>
                <input type="text" id="m-role" class="form-control" value="${item ? escapeHtml(item.role) : "\u05D7\u05E6\u05D9-\u05D1\u05D5\u05D2\u05E8/\u05EA \u05DE\u05D7\u05D6\u05D5\u05E8 \u05D0"}">
            </div>
            <div class="form-group">
                <label>\u05DE\u05E1\u05E4\u05E8 \u05D7\u05E6\u05D0\u05D9 \u05DB\u05D5\u05DB\u05D1\u05D9\u05DD (\u05DC\u05DE\u05E9\u05DC: 1, 2, 3, 4, 5):</label>
                <input type="number" id="m-stars-count" class="form-control" min="1" max="10" value="${starsCount}">
                <small style="color:var(--text-secondary); font-size:0.8rem;">\u05D4\u05D6\u05DF \u05DE\u05E1\u05E4\u05E8 \u2013 \u05EA\u05DE\u05D5\u05E0\u05EA \u05D7\u05E6\u05D9 \u05D4\u05DB\u05D5\u05DB\u05D1 \u05EA\u05D5\u05E4\u05D9\u05E2 \u05DB\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E4\u05E2\u05DE\u05D9\u05DD \u05E9\u05EA\u05D1\u05D7\u05E8.</small>
            </div>
            <div class="form-group" style="margin-top:1rem;">
                <label>\u05EA\u05D5\u05DB\u05DF \u05D4\u05D4\u05DE\u05DC\u05E6\u05D4 (\u05E2\u05D3 500 \u05EA\u05D5\u05D5\u05D9\u05DD / \u05DB-80 \u05DE\u05D9\u05DC\u05D9\u05DD):</label>
                <textarea id="m-text" class="form-control" rows="4" maxlength="500" oninput="updateCharCounter(this)">${escapeHtml(textVal)}</textarea>
                <div id="char-counter" style="font-size:0.8rem; color:var(--text-secondary); text-align:left; margin-top:0.35rem;">
                    <span id="char-count">${textVal.length}</span> / 500 \u05EA\u05D5\u05D5\u05D9\u05DD (\u05E2\u05D3 80 \u05DE\u05D9\u05DC\u05D9\u05DD)
                </div>
            </div>
        `;
    } else if (type === "faq") {
      modalTitle.innerText = id ? "\u05E2\u05E8\u05D9\u05DB\u05EA \u05E9\u05D0\u05DC\u05D4" : "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E9\u05D0\u05DC\u05D4 \u05D7\u05D3\u05E9\u05D4";
      modalBody.innerHTML = `
            <div class="form-group">
                <label>\u05D4\u05E9\u05D0\u05DC\u05D4:</label>
                <input type="text" id="m-question" class="form-control" value="${item ? item.question : ""}">
            </div>
            <div class="form-group">
                <label>\u05D4\u05EA\u05E9\u05D5\u05D1\u05D4 \u05D4\u05DB\u05E0\u05D4:</label>
                <textarea id="m-answer" class="form-control" rows="3">${item ? item.answer : ""}</textarea>
            </div>
        `;
    } else if (type === "certReasons") {
      modalTitle.innerText = "\u05E2\u05E8\u05D9\u05DB\u05EA \u05E1\u05D9\u05D1\u05D5\u05EA \u05E4\u05E8\u05D9\u05E9\u05D4 (\u05EA\u05E2\u05D5\u05D3\u05D4)";
      const optionsList = appState2.certReasons || [];
      modalBody.innerHTML = `
            <p style="color:var(--text-secondary); margin-bottom:1rem; font-size:0.9rem;">\u05E2\u05E8\u05D5\u05DA, \u05D4\u05D5\u05E1\u05E3 \u05D0\u05D5 \u05DE\u05D7\u05E7 \u05E1\u05D9\u05D1\u05D5\u05EA \u05E4\u05E8\u05D9\u05E9\u05D4 \u05E9\u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05EA\u05D9\u05D1\u05EA \u05D4\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D7\u05D5\u05DC\u05DC \u05D4\u05EA\u05E2\u05D5\u05D3\u05D5\u05EA:</p>
            <div id="m-cert-reasons-list">
                ${optionsList.map((opt) => `
                    <div class="form-group" style="display:flex; gap:0.5rem; align-items:center;">
                        <input type="text" class="form-control m-cert-opt-input" value="${escapeHtml(opt)}">
                        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">\u{1F5D1}\uFE0F</button>
                    </div>
                `).join("")}
            </div>
            <button type="button" class="btn btn-sm btn-outline" style="margin-top:0.5rem;" onclick="addCertReasonRow()">\u2795 \u05D4\u05D5\u05E1\u05E3 \u05E1\u05D9\u05D1\u05EA \u05E4\u05E8\u05D9\u05E9\u05D4 \u05D7\u05D3\u05E9\u05D4</button>
        `;
    } else if (type === "regReasons") {
      modalTitle.innerText = "\u05E2\u05E8\u05D9\u05DB\u05EA \u05E1\u05D9\u05D1\u05D5\u05EA \u05E4\u05E8\u05D9\u05E9\u05D4 \u05DE\u05E9\u05D5\u05E2\u05E8\u05D5\u05EA (\u05D8\u05D5\u05E4\u05E1 \u05D4\u05E8\u05E9\u05DE\u05D4)";
      const optionsList = appState2.regReasons || [];
      modalBody.innerHTML = `
            <p style="color:var(--text-secondary); margin-bottom:1rem; font-size:0.9rem;">\u05E2\u05E8\u05D5\u05DA, \u05D4\u05D5\u05E1\u05E3 \u05D0\u05D5 \u05DE\u05D7\u05E7 \u05E1\u05D9\u05D1\u05D5\u05EA \u05E4\u05E8\u05D9\u05E9\u05D4 \u05D1\u05D8\u05D5\u05E4\u05E1 \u05D4\u05E7\u05D1\u05DC\u05D4/\u05D4\u05E8\u05E9\u05DE\u05D4:</p>
            <div id="m-reg-reasons-list">
                ${optionsList.map((item2) => {
        const val = typeof item2 === "object" ? item2.label : item2;
        return `
                        <div class="form-group" style="display:flex; gap:0.5rem; align-items:center;">
                            <input type="text" class="form-control m-reg-opt-input" value="${escapeHtml(val)}">
                            <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">\u{1F5D1}\uFE0F</button>
                        </div>
                    `;
      }).join("")}
            </div>
            <button type="button" class="btn btn-sm btn-outline" style="margin-top:0.5rem;" onclick="addRegReasonRow()">\u2795 \u05D4\u05D5\u05E1\u05E3 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D7\u05D3\u05E9\u05D4</button>
        `;
    } else if (type === "regMotivations") {
      modalTitle.innerText = "\u05E2\u05E8\u05D9\u05DB\u05EA \u05E8\u05DE\u05D5\u05EA \u05DE\u05D5\u05D8\u05D9\u05D1\u05E6\u05D9\u05D4 (\u05D8\u05D5\u05E4\u05E1 \u05D4\u05E8\u05E9\u05DE\u05D4)";
      const optionsList = appState2.regMotivations || [];
      modalBody.innerHTML = `
            <p style="color:var(--text-secondary); margin-bottom:1rem; font-size:0.9rem;">\u05E2\u05E8\u05D5\u05DA, \u05D4\u05D5\u05E1\u05E3 \u05D0\u05D5 \u05DE\u05D7\u05E7 \u05E8\u05DE\u05D5\u05EA \u05DE\u05D5\u05D8\u05D9\u05D1\u05E6\u05D9\u05D4 \u05D1\u05D8\u05D5\u05E4\u05E1 \u05D4\u05E7\u05D1\u05DC\u05D4/\u05D4\u05E8\u05E9\u05DE\u05D4:</p>
            <div id="m-reg-mot-list">
                ${optionsList.map((item2) => {
        const val = typeof item2 === "object" ? item2.label : item2;
        return `
                        <div class="form-group" style="display:flex; gap:0.5rem; align-items:center;">
                            <input type="text" class="form-control m-mot-opt-input" value="${escapeHtml(val)}">
                            <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">\u{1F5D1}\uFE0F</button>
                        </div>
                    `;
      }).join("")}
            </div>
            <button type="button" class="btn btn-sm btn-outline" style="margin-top:0.5rem;" onclick="addRegMotRow()">\u2795 \u05D4\u05D5\u05E1\u05E3 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D7\u05D3\u05E9\u05D4</button>
        `;
    }
    modal.classList.remove("hidden");
  }
  function addCertReasonRow() {
    const list = document.getElementById("m-cert-reasons-list");
    if (!list) return;
    const div = document.createElement("div");
    div.className = "form-group";
    div.style.cssText = "display:flex; gap:0.5rem; align-items:center;";
    div.innerHTML = `
        <input type="text" class="form-control m-cert-opt-input" placeholder="\u05E1\u05D9\u05D1\u05EA \u05E4\u05E8\u05D9\u05E9\u05D4 \u05D7\u05D3\u05E9\u05D4..." value="">
        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">\u{1F5D1}\uFE0F</button>
    `;
    list.appendChild(div);
  }
  function addRegReasonRow() {
    const list = document.getElementById("m-reg-reasons-list");
    if (!list) return;
    const div = document.createElement("div");
    div.className = "form-group";
    div.style.cssText = "display:flex; gap:0.5rem; align-items:center;";
    div.innerHTML = `
        <input type="text" class="form-control m-reg-opt-input" placeholder="\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D7\u05D3\u05E9\u05D4..." value="">
        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">\u{1F5D1}\uFE0F</button>
    `;
    list.appendChild(div);
  }
  function addRegMotRow() {
    const list = document.getElementById("m-reg-mot-list");
    if (!list) return;
    const div = document.createElement("div");
    div.className = "form-group";
    div.style.cssText = "display:flex; gap:0.5rem; align-items:center;";
    div.innerHTML = `
        <input type="text" class="form-control m-mot-opt-input" placeholder="\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D7\u05D3\u05E9\u05D4..." value="">
        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">\u{1F5D1}\uFE0F</button>
    `;
    list.appendChild(div);
  }
  function closeModal() {
    const modal = document.getElementById("edit-modal");
    if (modal) modal.classList.add("hidden");
    editingModalItemType = null;
    editingModalItemId = null;
  }
  function saveModalItem() {
    const appState2 = getState();
    const type = editingModalItemType;
    const id = editingModalItemId || "item_" + Date.now();
    if (type === "certReasons") {
      const inputs = document.querySelectorAll(".m-cert-opt-input");
      const newReasons = Array.from(inputs).map((inp) => inp.value.trim()).filter((v) => v.length > 0);
      if (newReasons.length > 0) {
        appState2.certReasons = newReasons;
      }
    } else if (type === "regReasons") {
      const inputs = document.querySelectorAll(".m-reg-opt-input");
      const newReasons = Array.from(inputs).map((inp, idx) => ({ id: "rr_" + idx, label: inp.value.trim() })).filter((x) => x.label.length > 0);
      if (newReasons.length > 0) {
        appState2.regReasons = newReasons;
      }
    } else if (type === "regMotivations") {
      const inputs = document.querySelectorAll(".m-mot-opt-input");
      const newMots = Array.from(inputs).map((inp, idx) => ({ id: "rm_" + idx, label: inp.value.trim() })).filter((x) => x.label.length > 0);
      if (newMots.length > 0) {
        appState2.regMotivations = newMots;
      }
    } else if (type === "stat") {
      const newItem = {
        id,
        number: document.getElementById("m-stat-number").value,
        label: document.getElementById("m-stat-label").value
      };
      if (editingModalItemId) {
        const idx = appState2.stats.findIndex((x) => x.id === id);
        appState2.stats[idx] = newItem;
      } else {
        appState2.stats.push(newItem);
      }
    } else if (type === "calcSlider") {
      const newItem = {
        id,
        label: document.getElementById("m-calc-label").value,
        value: parseInt(document.getElementById("m-calc-val").value) || 50,
        weight: parseFloat(document.getElementById("m-calc-weight").value) || 1
      };
      if (editingModalItemId) {
        const idx = appState2.calcSliders.findIndex((x) => x.id === id);
        appState2.calcSliders[idx] = newItem;
      } else {
        appState2.calcSliders.push(newItem);
      }
    } else if (type === "syllabus") {
      const newItem = {
        id,
        part: document.getElementById("m-part").value,
        number: document.getElementById("m-number").value,
        title: document.getElementById("m-title").value,
        duration: document.getElementById("m-duration").value,
        desc: document.getElementById("m-desc").value,
        difficulty: document.getElementById("m-difficulty").value
      };
      if (editingModalItemId) {
        const idx = appState2.syllabus.findIndex((x) => x.id === id);
        appState2.syllabus[idx] = newItem;
      } else {
        appState2.syllabus.push(newItem);
      }
      setSyllabusTab(newItem.part);
      document.querySelectorAll(".syllabus-tab").forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-part") === newItem.part);
      });
    } else if (type === "testimonial") {
      const countVal = parseInt(document.getElementById("m-stars-count").value) || 1;
      const newItem = {
        id,
        name: document.getElementById("m-name").value,
        role: document.getElementById("m-role").value,
        stars: countVal,
        text: document.getElementById("m-text").value
      };
      if (editingModalItemId) {
        const idx = appState2.testimonials.findIndex((x) => x.id === id);
        appState2.testimonials[idx] = newItem;
      } else {
        if (appState2.testimonials && appState2.testimonials.length >= 5) {
          alert("\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05E2\u05D3 5 \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05D1\u05E1\u05DA \u05D4\u05DB\u05DC (\u05DB\u05D3\u05D9 \u05DC\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05DE\u05E8\u05D0\u05D4 \u05DE\u05D0\u05D5\u05D6\u05DF \u05D5\u05DE\u05D4\u05D5\u05D3\u05E7).");
          return;
        }
        appState2.testimonials.push(newItem);
      }
    } else if (type === "faq") {
      const newItem = {
        id,
        question: document.getElementById("m-question").value,
        answer: document.getElementById("m-answer").value
      };
      if (editingModalItemId) {
        const idx = appState2.faqs.findIndex((x) => x.id === id);
        appState2.faqs[idx] = newItem;
      } else {
        appState2.faqs.push(newItem);
      }
    }
    saveData();
    triggerRenderAll();
    closeModal();
  }
  function deleteItem(type, id) {
    if (!confirm("\u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05E4\u05E8\u05D9\u05D8 \u05D6\u05D4?")) return;
    const appState2 = getState();
    if (type === "stat") appState2.stats = appState2.stats.filter((x) => x.id !== id);
    if (type === "calcSlider") {
      if (appState2.calcSliders.length <= 1) {
        alert("\u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05E9\u05D0\u05D9\u05E8 \u05DC\u05E4\u05D7\u05D5\u05EA \u05DE\u05D3\u05D3 \u05D0\u05D7\u05D3 \u05D1\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF.");
        return;
      }
      appState2.calcSliders = appState2.calcSliders.filter((x) => x.id !== id);
    }
    if (type === "syllabus") appState2.syllabus = appState2.syllabus.filter((x) => x.id !== id);
    if (type === "testimonial") appState2.testimonials = appState2.testimonials.filter((x) => x.id !== id);
    if (type === "faq") appState2.faqs = appState2.faqs.filter((x) => x.id !== id);
    saveData();
    triggerRenderAll();
  }
  function initImageModal() {
    const changeImgBtn = document.getElementById("btn-change-images");
    const modal = document.getElementById("images-modal");
    const closeBtn = document.getElementById("images-modal-close-btn");
    const cancelBtn = document.getElementById("images-modal-cancel-btn");
    const saveBtn = document.getElementById("images-modal-save-btn");
    const logoPathInput = document.getElementById("input-logo-path");
    const heroPathInput = document.getElementById("input-hero-path");
    const logoFileInput = document.getElementById("upload-logo-file");
    const heroFileInput = document.getElementById("upload-hero-file");
    if (!changeImgBtn || !modal) return;
    changeImgBtn.addEventListener("click", () => {
      const appState2 = getState();
      logoPathInput.value = appState2.logoSrc || "assets/new-transparent-logo.png";
      heroPathInput.value = appState2.heroSrc || "assets/hero-new.jfif";
      modal.classList.remove("hidden");
    });
    if (closeBtn) closeBtn.onclick = () => modal.classList.add("hidden");
    if (cancelBtn) cancelBtn.onclick = () => modal.classList.add("hidden");
    if (logoFileInput) {
      logoFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            logoPathInput.value = evt.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }
    if (heroFileInput) {
      heroFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            heroPathInput.value = evt.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        const appState2 = getState();
        appState2.logoSrc = logoPathInput.value.trim() || "assets/new-transparent-logo.png";
        appState2.heroSrc = heroPathInput.value.trim() || "assets/hero-new.jfif";
        saveData();
        triggerRenderAll();
        modal.classList.add("hidden");
        alert("\u05D4\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E2\u05D5\u05D3\u05DB\u05E0\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4!");
      });
    }
  }
  function setupEditEventListeners(renderAll2) {
    setRenderAllCallback(renderAll2);
    const toggleBtn = document.getElementById("toggle-edit-mode");
    const editBar = document.getElementById("edit-mode-bar");
    if (toggleBtn && editBar) {
      toggleBtn.addEventListener("click", () => {
        const active = !getEditMode();
        setEditMode(active);
        document.body.classList.toggle("in-edit-mode", active);
        editBar.classList.toggle("hidden", !active);
        const txt = document.getElementById("edit-toggle-text");
        const icon = document.getElementById("edit-toggle-icon");
        if (txt) txt.innerText = active ? "\u05DE\u05E6\u05D1 \u05EA\u05E6\u05D5\u05D2\u05D4" : "\u05DE\u05E6\u05D1 \u05E2\u05E8\u05D9\u05DB\u05D4";
        if (icon) icon.innerText = active ? "\u{1F441}\uFE0F" : "\u270F\uFE0F";
        renderAll2();
      });
    }
    const saveBtn = document.getElementById("btn-save-data");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        saveData();
        alert("\u05DB\u05DC \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E0\u05E9\u05DE\u05E8\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF! \u{1F389}");
      });
    }
    const resetBtn = document.getElementById("btn-reset-data");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D0\u05E4\u05E1 \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8 \u05DC\u05D8\u05E7\u05E1\u05D8\u05D9\u05DD \u05D5\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9\u05D5\u05EA?")) {
          resetData();
          renderAll2();
        }
      });
    }
    const addStatBtn = document.getElementById("btn-add-stat");
    if (addStatBtn) addStatBtn.addEventListener("click", () => openEditModal("stat"));
    const addCalcSliderBtn = document.getElementById("btn-add-calc-slider");
    if (addCalcSliderBtn) addCalcSliderBtn.addEventListener("click", () => openEditModal("calcSlider"));
    const addSylBtn = document.getElementById("btn-add-syllabus");
    if (addSylBtn) addSylBtn.addEventListener("click", () => openEditModal("syllabus"));
    const addTestimonialBtn = document.getElementById("btn-add-testimonial");
    if (addTestimonialBtn) {
      addTestimonialBtn.addEventListener("click", () => {
        const appState2 = getState();
        if (appState2.testimonials && appState2.testimonials.length >= 5) {
          alert("\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05E2\u05D3 5 \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05D1\u05E1\u05DA \u05D4\u05DB\u05DC (\u05DB\u05D3\u05D9 \u05DC\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05D0\u05D5\u05D6\u05E0\u05EA \u05D5\u05DE\u05D4\u05D5\u05D3\u05E7\u05EA).");
          return;
        }
        openEditModal("testimonial");
      });
    }
    const addFaqBtn = document.getElementById("btn-add-faq");
    if (addFaqBtn) addFaqBtn.addEventListener("click", () => openEditModal("faq"));
    const modalCloseBtn = document.getElementById("modal-close-btn");
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    const modalCancelBtn = document.getElementById("modal-cancel-btn");
    if (modalCancelBtn) modalCancelBtn.addEventListener("click", closeModal);
    const modalSaveBtn = document.getElementById("modal-save-btn");
    if (modalSaveBtn) modalSaveBtn.addEventListener("click", saveModalItem);
    const form = document.getElementById("satirical-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameEl = document.getElementById("reg-name");
        const name = nameEl ? nameEl.value : "";
        alert(`\u05EA\u05D5\u05D3\u05D4 ${name}! \u05D4\u05D1\u05E7\u05E9\u05D4 \u05E9\u05DC\u05DA \u05DC\u05E9\u05DE\u05D5\u05E8 \u05D7\u05E6\u05D9 \u05DB\u05D5\u05DB\u05D1 \u05E0\u05E7\u05DC\u05D8\u05D4. \u05EA\u05E4\u05D5\u05E1/\u05E4\u05D9 \u05E4\u05D9\u05E0\u05D4 \u05D1\u05E6\u05DC, \u05D0\u05E0\u05D7\u05E0\u05D5 \u05D1\u05D3\u05E8\u05DA \u05E2\u05DD \u05D4\u05E7\u05E4\u05D4! \u2615`);
      });
    }
  }

  // js/main.js
  window.openEditModal = openEditModal;
  window.closeModal = closeModal;
  window.saveModalItem = saveModalItem;
  window.addCertReasonRow = addCertReasonRow;
  window.addRegReasonRow = addRegReasonRow;
  window.addRegMotRow = addRegMotRow;
  window.deleteItem = deleteItem;
  window.switchSyllabusTab = switchSyllabusTab;
  window.updateCalculatorResult = updateCalculatorResult;
  window.updateCharCounter = updateCharCounter;
  function renderAll() {
    const state = getState();
    const isEditMode2 = getEditMode();
    renderImages(state);
    renderStaticText(state, isEditMode2);
    renderDropdownOptions(state);
    renderStats(state, isEditMode2);
    renderCalculatorSliders(state, isEditMode2);
    renderSyllabus(state, isEditMode2);
    renderTestimonials(state, isEditMode2);
    renderFAQs(state, isEditMode2);
  }
  document.addEventListener("DOMContentLoaded", () => {
    loadSavedData();
    initBubbles();
    renderAll();
    setupEditEventListeners(renderAll);
    initCalculator();
    initCertificate();
    initImageModal();
  });
})();
