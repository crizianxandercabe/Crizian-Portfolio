/* Update this portfolio data with verified personal details and uploaded work. */
const portfolio = {
  name: "Crizian Xander",
  surname: "Acosta",
  fullName: "Crizian Xander Acosta",
  year: new Date().getFullYear(),
  bio: "3rd-year BSIT student with hands-on experience developing web and mobile applications through collaborative academic projects.",
  profile: "I am a 3rd-year Bachelor of Science in Information Technology student at Northeastern College. I build web and mobile applications and have contributed as a programmer to Carbonel Funeral Home Management System, Habit Quest, and Food Explorer, and as a CSS contributor to a Hotel Reservation System.",
  program: "Information Technology",
  interests: "Web and mobile application development",
  location: "Rosario, Santiago City, Isabela",
  email: "crizianxandercabe@gmail.com",
  linkedin: "https://www.linkedin.com/in/crizian-xander-acosta-a25578445/",
  github: "https://github.com/crizianxandercabe",
  education: [
    { date: "S.Y. 2008–2010", title: "Kindergarten", place: "Rizal Elementary School · Rizal, Alicia, Isabela", detail: "" },
    { date: "S.Y. 2010–2018", title: "Elementary", place: "Oscariz Elementary School · Oscariz, Ramon, Isabela", detail: "" },
    { date: "S.Y. 2018–2022", title: "Junior High School", place: "Santiago City National High School · Santiago City, Isabela", detail: "" },
    { date: "S.Y. 2022–2024", title: "Senior High School", place: "Santiago City National High School · Santiago City, Isabela", detail: "AWARD: With Honors" },
    { date: "S.Y. 2024–Present", title: "Bachelor of Science in Information Technology (BSIT) · 3rd Year", place: "Northeastern College · Santiago City, Isabela", detail: "AWARD: Dean’s Lister" }
  ],
  experience: [
    { date: "Academic project", title: "Carbonel Funeral Home Management System", place: "PHP · JavaScript · CSS · SQL", detail: "Contributed system features for client and service records, chapel reservations, service packages, pickups, payments, and reports." },
    { date: "Academic project", title: "Habit Quest", place: "Flutter · Dart · Supabase", detail: "Helped build a habit-tracking app with routines, streaks, progress stats, goals, focus sessions, and a virtual pet." },
    { date: "Academic project", title: "Food Explorer", place: "Flutter · Dart · TheMealDB API", detail: "Contributed recipe discovery features, including categories, dish search, recipe details, and saved favorites." },
    { date: "Academic project", title: "Student Management System", place: "PHP · JavaScript · CSS · SQL", detail: "Contributed CSS styling for the student management interface." },
    { date: "Academic project", title: "Hotel Reservation System", place: "PHP · JavaScript · CSS · SQL", detail: "Contributed CSS styling for the reservation interface. The project database organizes rooms, customers, user roles, and reservations with check-in and check-out dates." }
  ],
  projects: [
    {
      category: "DATABASE PROJECT",
      title: "Hotel Reservation System",
      description: "A hotel booking database schema for rooms, customers, user roles, and reservations with check-in and check-out dates.",
      contribution: "CSS contributor — styled the interface and improved its layout.",
      technologies: ["SQL", "MariaDB", "Schema only"],
      cover: "ROOMS / BOOKINGS",
      mark: "H",
      variant: "hotel",
      gallery: "hotel-reservation-gallery",
      galleryLabel: "View system screens",
      url: "https://github.com/crizianxandercabe/hotel-reservation.git"
    },
    {
      category: "MOBILE APP · RECIPE DISCOVERY",
      title: "Food Explorer",
      description: "Explore Filipino and international recipes, browse categories, search dishes, view recipe details, and save favorites.",
      contribution: "Programmer — helped build the app and its features.",
      technologies: ["Flutter", "Dart", "TheMealDB API", "Shared Preferences"],
      cover: "DISCOVER DISHES",
      mark: "FE",
      variant: "food",
      gallery: "foodexplorer-gallery",
      url: "https://github.com/crizianxandercabe/foodrecipe-explorer.git"
    },
    {
      category: "MOBILE APP · PRODUCTIVITY",
      title: "Habit Quest",
      description: "A gamified habit app with routine tracking, streaks, progress stats, goals, focus sessions, and a virtual pet.",
      contribution: "Programmer — helped build the app and its features.",
      technologies: ["Flutter", "Dart", "Supabase client"],
      cover: "BUILD YOUR STREAK",
      mark: "HQ",
      variant: "habit",
      gallery: "habitquest-gallery",
      url: "https://apkpure.com/habitquest/com.habitquest.app",
      linkLabel: "View app on APKPure"
    },
    {
      category: "STUDENT MANAGEMENT",
      title: "Student Management System",
      description: "A web-based system for managing student information and records.",
      contribution: "CSS contributor — styled the interface and improved its layout.",
      technologies: ["PHP", "JavaScript", "CSS", "SQL"],
      cover: "STUDENT RECORDS",
      mark: "SMS",
      variant: "student",
      gallery: "student-management-gallery",
      galleryLabel: "View system screens",
      url: "https://github.com/crizianxandercabe/student-management.git"
    },
    {
      category: "WEB APP · FUNERAL HOME MANAGEMENT",
      title: "Carbonel Funeral Home Management System",
      description: "A management system for client and service records, chapel reservations, service packages, pickups, payments, and reports.",
      contribution: "Programmer — helped build the system and its features.",
      technologies: ["PHP", "JavaScript", "CSS", "SQL"],
      cover: "SERVICE MANAGEMENT",
      mark: "CFH",
      variant: "carbonel",
      gallery: "carbonel-gallery",
      galleryLabel: "View system screens",
      url: "https://github.com/crizianxandercabe",
      linkLabel: "View source on GitHub"
    }
  ],
  certificates: {
    microsoft: [
      { icon: "M", title: "Learn the Basics of Web Accessibility", place: "Microsoft Learn · completed September 8, 2026", year: "2026", file: "assets/microsoft-learn-web-accessibility.jpg" },
      { icon: "M", title: "Get Started with Web Development Using Visual Studio Code", place: "Microsoft Learn · completed September 8, 2026", year: "2026", file: "assets/microsoft-learn-web-development-vscode.jpg" }
    ],
    cisco: [
      { icon: "C", title: "Python Essentials 1", place: "Cisco Networking Academy · completed September 10, 2026", year: "2026", file: "assets/cisco-python-essentials-1.jpg" },
      { icon: "C", title: "Introduction to Splunk", place: "ICT Literacy and Competency Development Bureau · DICT Nueva Ecija · Cisco Net Academy Platform · completed August 31, 2026", year: "2026", file: "assets/cisco-introduction-to-splunk.jpg" }
    ],
    tesda: [
      { icon: "T", title: "Maintaining Computer Systems and Networks", place: "TESDA Online Program · completed September 7, 2026", year: "2026", file: "assets/tesda-maintaining-computer-systems-networks.jpg" },
      { icon: "T", title: "Setting Up Computer Servers", place: "TESDA Online Program · completed September 7, 2026", year: "2026", file: "assets/tesda-setting-up-computer-servers.jpg" },
      { icon: "T", title: "Setting Up Computer Networks", place: "TESDA Online Program · completed September 7, 2026", year: "2026", file: "assets/tesda-setting-up-computer-networks.jpg" },
      { icon: "T", title: "Installing and Configuring Computer Systems", place: "TESDA Online Program · completed September 7, 2026", year: "2026", file: "assets/tesda-installing-configuring-computer-systems.jpg" },
      { icon: "T", title: "Introduction to Computer Systems Servicing", place: "TESDA Online Program · completed September 7, 2026", year: "2026", file: "assets/tesda-introduction-computer-systems-servicing.jpg" }
    ],
    webinars: [
      { icon: "W", title: "Protect Your Data", place: "Cyber Hygiene Fridays · DICT / ILCDB Negros Island Region · October 16, 2026", year: "2026", file: "assets/webinar-protect-your-data.jpg" },
      { icon: "W", title: "Cyber Hygiene 101", place: "Cyber Hygiene Fridays · DICT / ILCDB Negros Island Region · October 2, 2026", year: "2026", file: "assets/webinar-cyber-hygiene-101.jpg" },
      { icon: "W", title: "Cyber Hygiene Training", place: "APAC Cybersecurity Fund · July 29, 2026", year: "2026", file: "assets/webinar-cyber-hygiene-training.jpg" },
      { icon: "W", title: "Build Back Better: Practical Implementation", place: "National Disaster Resilience Month Webinar · DICT Region IV-A · July 28, 2026", year: "2026", file: "assets/webinar-disaster-resilience.jpg" },
      { icon: "W", title: "Pro Ads & Precision Reach: Mastering AI Design and Targeting", place: "i4Rizal Episode 1 · DOST Rizal · July 8, 2026", year: "2026", file: "assets/webinar-i4rizal-ai-design.jpg" }
    ],
    itweek: [
      { icon: "IT", title: "Agentic AI", place: "10th I.T. Week 2026 · Northeastern College · August 27, 2026", year: "2026", file: "assets/it-week-agentic-ai.png" },
      { icon: "IT", title: "Programming Fundamentals", place: "10th I.T. Week 2026 · Northeastern College · August 27, 2026", year: "2026", file: "assets/it-week-programming-fundamentals.png" },
      { icon: "IT", title: "Video Editing Tips & Tricks", place: "10th I.T. Week 2026 · Northeastern College · August 27, 2026", year: "2026", file: "assets/it-week-video-editing.png" },
      { icon: "IT", title: "Integrating IoT in Capstone Project", place: "10th I.T. Week 2026 · Northeastern College · August 27, 2026", year: "2026", file: "assets/it-week-iot-capstone.png" }
    ]
  }
};

const setText = (selector, value) => document.querySelectorAll(selector).forEach(node => { node.textContent = value; });
setText("[data-project-count]", String(portfolio.projects.length).padStart(2, "0"));
setText("[data-name]", portfolio.name);
setText("[data-surname]", `${portfolio.surname}.`);
setText("[data-fullname]", portfolio.fullName);
setText("[data-year]", portfolio.year);
setText("[data-bio]", portfolio.bio);
setText("[data-profile]", portfolio.profile);
setText("[data-program]", portfolio.program);
setText("[data-focus]", portfolio.interests);
setText("[data-location]", portfolio.location);
setText("[data-location-short]", portfolio.location === "Add your city or region" ? "IT STUDENT" : portfolio.location);
const email = document.querySelector("[data-email]");
if (portfolio.email) {
  email.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}`;
  email.target = "_blank";
  email.rel = "noopener noreferrer";
  email.innerHTML = `${portfolio.email} <span>↗</span>`;
} else {
  email.removeAttribute("href");
  email.textContent = "Add your professional email";
}
const setProfileLink = (selector, value, prefix) => {
  const link = document.querySelector(selector);
  if (!value) {
    link.hidden = true;
    return;
  }
  link.hidden = false;
  link.href = value.startsWith("http") ? value : `${prefix}${value}`;
};
setProfileLink("[data-linkedin-link]", portfolio.linkedin, "https://");
setProfileLink("[data-github-link]", portfolio.github, "https://");
const emailProfileLink = document.querySelector("[data-email-link]");
if (portfolio.email) {
  emailProfileLink.hidden = false;
  emailProfileLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}`;
  emailProfileLink.target = "_blank";
  emailProfileLink.rel = "noopener noreferrer";
} else {
  emailProfileLink.hidden = true;
}
setProfileLink("[data-linkedin]", portfolio.linkedin, "https://");
setProfileLink("[data-github]", portfolio.github, "https://");

const timelineMarkup = item => `<article class="timeline-item"><span class="timeline-date">${item.date}</span><h4>${item.title}</h4><p>${item.place}${item.detail ? `<span class="timeline-detail">${item.detail}</span>` : ""}</p></article>`;
document.querySelector("#education-list").innerHTML = portfolio.education.map(timelineMarkup).join("");
document.querySelector("#experience-list").innerHTML = portfolio.experience.map(timelineMarkup).join("");
document.querySelector("#projects-list").innerHTML = portfolio.projects.map(project => `<article class="project-card reveal"><div class="project-copy"><div class="project-topline"><span>${project.category}</span></div><h3>${project.title}</h3><p class="project-description">${project.description}</p><p class="project-contribution"><b>Contribution</b><span>${project.contribution}</span></p>${project.note ? `<p class="project-note">${project.note}</p>` : ""}<div class="tags">${project.technologies.map(tag => `<span>${tag}</span>`).join("")}</div>${project.url || project.gallery ? `<div class="project-actions">${project.gallery ? `<button class="project-source-link project-gallery-open" type="button" data-open-project-gallery="${project.gallery}">${project.galleryLabel || "View app screens"} <span aria-hidden="true">▣</span></button>` : ""}${project.url ? `<a class="project-source-link" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.linkLabel || "View source on GitHub"} <span aria-hidden="true">↗</span></a>` : ""}</div>` : ""}</div></article>`).join("");
const listMarkup = item => `<article class="list-item"><span class="list-icon">${item.icon}</span><div><h4>${item.title}</h4><p>${item.place}</p></div><span class="list-year">${item.year}</span>${item.file ? `<button class="certificate-preview" type="button" data-certificate-src="${item.file}" data-certificate-title="${item.title}" aria-label="View ${item.title} certificate"><img src="${item.file}" alt="${item.title} certificate preview"><span>View certificate ⤢</span></button>` : ""}</article>`;
Object.entries(portfolio.certificates).forEach(([category, items]) => {
  const list = document.querySelector(`#certificates-${category}`);
  list.innerHTML = items.length
    ? items.map(listMarkup).join("")
    : '<p class="certificate-empty">Add certificate title, issuer, and year.</p>';
});

const certificateViewer = document.querySelector("#certificate-viewer");
const certificateViewerImage = document.querySelector("#certificate-viewer-image");
const certificateViewerTitle = document.querySelector("#certificate-viewer-title");
document.querySelector("#development").addEventListener("click", event => {
  const button = event.target.closest("[data-certificate-src]");
  if (!button) return;
  certificateViewerImage.src = button.dataset.certificateSrc;
  certificateViewerImage.alt = `${button.dataset.certificateTitle} certificate`;
  certificateViewerTitle.textContent = button.dataset.certificateTitle;
  certificateViewer.showModal();
});
document.querySelector("#certificate-viewer-close").addEventListener("click", () => certificateViewer.close());
certificateViewer.addEventListener("click", event => {
  if (event.target === certificateViewer) certificateViewer.close();
});
document.querySelector("#projects-list").addEventListener("click", event => {
  const galleryButton = event.target.closest("[data-open-project-gallery]");
  if (galleryButton) document.getElementById(galleryButton.dataset.openProjectGallery)?.showModal();
});
document.querySelectorAll(".app-screens-gallery").forEach(gallery => {
  gallery.querySelector("[data-gallery-close]").addEventListener("click", () => gallery.close());
  gallery.addEventListener("click", event => {
    if (event.target === gallery) gallery.close();
  });
});

const resumeViewer = document.querySelector("#resume-viewer");
document.querySelector("#resume-preview-open").addEventListener("click", () => resumeViewer.showModal());
document.querySelector("#resume-viewer-close").addEventListener("click", () => resumeViewer.close());
resumeViewer.addEventListener("click", event => {
  if (event.target === resumeViewer) resumeViewer.close();
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks.addEventListener("click", event => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }
});
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector('[aria-hidden="true"]');
const themeLabel = themeToggle.querySelector(".theme-toggle-label");
let themeSwitchTimer;
const setPortfolioTheme = (theme, animate = false) => {
  const isLight = theme === "light";
  if (animate) {
    document.documentElement.classList.add("theme-switching");
    window.clearTimeout(themeSwitchTimer);
    themeSwitchTimer = window.setTimeout(() => document.documentElement.classList.remove("theme-switching"), 450);
  }
  document.documentElement.dataset.theme = isLight ? "light" : "dark";
  themeIcon.textContent = isLight ? "☾" : "☼";
  themeLabel.textContent = isLight ? "Dark mode" : "Light mode";
  themeToggle.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} mode`);
  themeToggle.title = `Switch to ${isLight ? "dark" : "light"} mode`;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isLight ? "#e9eef4" : "#080d16");
  try { localStorage.setItem("portfolio-theme", isLight ? "light" : "dark"); } catch {}
};
setPortfolioTheme(document.documentElement.dataset.theme || "dark");
themeToggle.addEventListener("click", () => {
  setPortfolioTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light", true);
  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }
});
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add("is-visible");
  revealObserver.unobserve(entry.target);
}), { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${(index % 5) * 65}ms`);
  revealObserver.observe(element);
});
const scrollProgress = document.createElement("div");
scrollProgress.className = "scroll-progress";
scrollProgress.setAttribute("aria-hidden", "true");
document.body.append(scrollProgress);
const updateScrollProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
};
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) navItems.forEach(link => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
}), { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => observer.observe(section));




