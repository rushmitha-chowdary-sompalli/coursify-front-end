// Custom animations for the recruitment startup website

// Example animation with jQuery
$(document).ready(function() {
    // Animate the hero section
    $(".hero-section h1").fadeIn(1500);
    $(".hero-section p").fadeIn(2000);
    $(".hero-section .btn").fadeIn(2500);
  });
  
  // Example animation with vanilla JavaScript
  document.addEventListener("DOMContentLoaded", function() {
    // Animate the services section
    const servicesItems = document.querySelectorAll(".services-section .col-md-4");
    let delay = 0;
    servicesItems.forEach(item => {
      setTimeout(() => {
        item.style.transform = "translateY(0)";
        item.style.opacity = "1";
      }, delay);
      delay += 300;
    });
  });
  