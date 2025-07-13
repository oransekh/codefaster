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

//auto counting
document.addEventListener("DOMContentLoaded", async () => {
  const counters = document.querySelectorAll(".counter");

  const startCounter = async (counter) => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target"); // Get target value
    const increment = target / 100; // Define step increment

    const updateCounter = async () => {
      const current = +counter.innerText; // Get current number
      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`; // Increase count
        await new Promise((resolve) => setTimeout(resolve, 20)); // Async delay
        await updateCounter(); // Recursive call
      } else {
        counter.innerText = target; // Stop at target value
      }
    };

    await updateCounter(); // Start updating the counter
  };

  // Start all counters asynchronously
  counters.forEach(async (counter) => await startCounter(counter));
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

//our team section
document.addEventListener("DOMContentLoaded", () => {
  const ourteams = [
    {
      name: "ORAN SK",
      title: "Founder & CEO",
      image: "/src/img/ceo.jpg",
      p: "2 years development exprices",
    },
    {
      name: "MD ARIF HOSSAIN",
      title: "Fronted & Backend Developer",
      image: "/src/img/devloper.jpg",
      p: "",
    },
    {
      name: "MD ARIF HOSSAIN",
      title: "Fronted & Backend Developer",
      image: "/src/img/devloper.jpg",
      p: "",
    },
  ];
  //get selected the myteam div
  const inputcl = document.getElementById("myteam");

  ourteams.forEach((ourteam) => {
    const teamdiv = document.createElement("div");
    teamdiv.innerHTML = `<div
              class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
              <img
                src="${ourteam.image}"
                alt="ORAN Sk"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-slate-800">${ourteam.name}</h3>
                <p class="text-indigo-600 mb-2">${ourteam.title}</p>
                <p class="text-gray-600 text-sm">
                 ${ourteam.p}
                </p>
              </div>
            </div>`;
    inputcl.appendChild(teamdiv);
  });
});

//testimonial content
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      image: "img/ceo.jpg",
      name: "Sarah Johnson",
      title: "CEO, Tech Solutions",
      review:
        "The service exceeded all our expectations. Their team delivered exceptional results that helped us scale our business exponentially. Highly recommended!",
    },
    {
      image: "/src/img/michael.jpg",
      name: "Michael Chen",
      title: "CTO, Digital Innovations",
      review:
        "Incredible attention to detail and proactive communication. They transformed our digital presence completely within just 3 months. Truly outstanding work!",
    },
    {
      image: "/src/img/emma.jpg",
      name: "Emma Wilson",
      title: "Marketing Director, Global Corp",
      review:
        "Their strategic approach and technical expertise helped us achieve 3x ROI in the first quarter itself. A truly collaborative and results-driven partner.",
    },
  ];

  const carousel = document.querySelector(".owl-carousel");

  testimonials.forEach((testimonial) => {
    const card = document.createElement("div");
    card.classList.add(
      "bg-white",
      "rounded-xl",
      "p-8",
      "transition-all",
      "duration-300",
      "hover:shadow-xl"
    );

    card.innerHTML = `
      <div class="flex items-center mb-6">
        <img class="w-14 h-14 rounded-full object-cover" src="${testimonial.image}" alt="${testimonial.name}" />
        <div class="ml-4">
          <h3 class="text-lg font-semibold text-gray-900">${testimonial.name}</h3>
          <p class="text-sm text-gray-500">${testimonial.title}</p>
        </div>
      </div>
      <blockquote class="text-gray-600 relative">
        <p class="relative z-10">${testimonial.review}</p>
      </blockquote>
    `;

    carousel.appendChild(card);
  });

  // Initialize Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    dots: true,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });
});

// Loop through all elements with class "callnow"
document.querySelectorAll(".callnow").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("phone-popup").classList.remove("hidden");
  });
});

// Close popup when 'X' button is clicked
document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("phone-popup").classList.add("hidden");
});
