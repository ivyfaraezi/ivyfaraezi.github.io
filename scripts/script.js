// Navigation toggle functionality
// Used across all pages
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const nav = document.querySelector("nav");

if (navToggle) {
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    }
  });

  // Prevent menu clicks from closing
  navMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

// Scroll reveal animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".edu, .experience-card, .project, .skill-category"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Add parallax effect to profile picture on home page
const profilePic = document.querySelector(".home-profile-pic");
if (profilePic) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;
    profilePic.style.transform = `translateY(${rate}px)`;
  });
}

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// Form validation and enhancement for contact page
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Add submission animation
    const btn = contactForm.querySelector(".btn");
    const originalText = btn.textContent;
    btn.textContent = "Sending...";
    btn.style.background = "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)";

    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      btn.textContent = "Message Sent! ✓";
      btn.style.background =
        "linear-gradient(135deg, #10b981 0%, #059669 100%)";

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "";
        contactForm.reset();
      }, 2000);
    }, 1500);
  });

  // Real-time input validation
  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.value.trim() !== "") {
        input.style.borderColor = "#10b981";
      }
    });

    input.addEventListener("focus", () => {
      input.style.borderColor = "#4e47ff";
    });
  });
}

// Add hover effect to skill icons
const skillIcons = document.querySelectorAll(".skill-icons a");
skillIcons.forEach((icon, index) => {
  icon.style.animationDelay = `${index * 0.05}s`;
});
