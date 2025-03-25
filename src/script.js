// Mobile menu toggle
document.getElementById("services-link").addEventListener("click", function () {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("hidden");
});

// Mega menu hover logic
const servicesLink = document.getElementById("services-link");
const megaMenu = document.getElementById("mega-menu");
let menuTimeout;

servicesLink.addEventListener("mouseenter", () => {
  clearTimeout(menuTimeout);
  megaMenu.classList.remove("opacity-0", "invisible");
  megaMenu.classList.add("opacity-100", "visible");
});

servicesLink.addEventListener("mouseleave", () => {
  menuTimeout = setTimeout(() => {
    megaMenu.classList.remove("opacity-100", "visible");
    megaMenu.classList.add("opacity-0", "invisible");
  }, 200);
});

megaMenu.addEventListener("mouseenter", () => {
  clearTimeout(menuTimeout);
  megaMenu.classList.add("opacity-100", "visible");
});

megaMenu.addEventListener("mouseleave", () => {
  menuTimeout = setTimeout(() => {
    megaMenu.classList.remove("opacity-100", "visible");
    megaMenu.classList.add("opacity-0", "invisible");
  }, 200);
});

// mobile responsive
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileServicesBtn = document.getElementById("mobile-services-btn");
  const mobileServicesMenu = document.getElementById("mobile-services-menu");
  const megaMenu = document.getElementById("mega-menu");
  const servicesLink = document.querySelector(
    'nav ul li.group a[href="#services"]'
  );

  // Mobile Menu Toggle
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("max-h-0");
    mobileMenu.classList.toggle("max-h-0", !isOpen);
    mobileMenu.classList.toggle("max-h-screen", isOpen);
    menuBtn.querySelector("i").classList.toggle("fa-bars", !isOpen);
    menuBtn.querySelector("i").classList.toggle("fa-times", isOpen);
  });

  // Mobile Services Accordion
  mobileServicesBtn.addEventListener("click", () => {
    const isOpen = mobileServicesMenu.classList.contains("max-h-0");
    mobileServicesMenu.classList.toggle("max-h-0", !isOpen);
    mobileServicesMenu.classList.toggle("max-h-[1000px]", isOpen);
    mobileServicesBtn.querySelector("i").classList.toggle("rotate-180");
  });

  // Desktop Mega Menu Hover
  servicesLink.addEventListener("mouseenter", () => {
    megaMenu.classList.remove("opacity-0", "invisible", "-translate-y-4");
  });

  servicesLink.addEventListener("mouseleave", () => {
    megaMenu.classList.add("opacity-0", "invisible", "-translate-y-4");
  });

  // Close menus when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#mobile-menu") && !e.target.closest("#menu-btn")) {
      mobileMenu.classList.add("max-h-0");
      mobileMenu.classList.remove("max-h-screen");
      menuBtn.querySelector("i").classList.add("fa-bars");
      menuBtn.querySelector("i").classList.remove("fa-times");
    }
  });
});

// Function to handle question and answer toggling
function setupQuestionToggle(questionSelector, answerSelector, answerText) {
  const question = document.querySelector(questionSelector);
  const answer = document.querySelector(answerSelector);

  question.addEventListener("click", () => {
    if (answer.innerHTML.trim() === "") {
      answer.innerHTML = `<p class="text-gray-600">${answerText}</p>`;
    } else {
      answer.innerHTML = ""; // Hide answer on second click
    }
  });
}

// Define questions and answers
const faqData = [
  {
    question: ".first-qb",
    answer: ".added-text",
    text: "codeFaster provides one-stop solution for Websites, mobile apps and digital marketing for your brand.",
  },
  {
    question: ".scond-qb",
    answer: ".added-text-scond",
    text: "You can contact CodeFaster on our mail contact@codeFaster or visit contact Page.",
  },
  {
    question: ".thard-qb",
    answer: ".added-text-thard",
    text: "Currently codeFaster have 1 office: rampurhat(birbhum)",
  },
  {
    question: ".four-qb",
    answer: ".added-text-four",
    text: "We offer mobile app development, web solutions, cloud services, UI/UX design, and digital marketing services.",
  },
];

// Initialize event listeners
faqData.forEach((faq) =>
  setupQuestionToggle(faq.question, faq.answer, faq.text)
);

//email handal pop-up sms
document.getElementById(pop-up).addEventListener("click", ()=>{
console.log("hello word")
});