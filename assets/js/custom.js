$(document).ready(function () {
  if ($("main#home").length) {
    // HamBurger
    $("#hamBurger").click(function () {
      $("#hamBurger span").toggleClass("active");
      $("header nav").toggleClass("active");
      $("body").toggleClass("active");
    });
    // Main Slider
    $("#slickSlider .slick-slider").slick({
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
    });

    // Burger Slider
    $("#choose .slick-slider").slick({
      arrows: true,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 884,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // Event Slider
    $("#events .slick-slider").slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 3000,
    });

    // Contact Form
    $("#contactForm").submit(function (event) {
      event.preventDefault();

      // Get form data
      const formData = $(this).serializeArray();

      // Create email message
      const emailData = {
        to: "johncorneron@gmail.com", // Replace with recipient's email
        subject: "New Booking Request",
        body: `
          Name: ${formData
            .find((item) => item.name === "name")
            .value.toUpperCase()}<br>
          Date: ${formData
            .find((item) => item.name === "date")
            .value.toUpperCase()}<br>
          People: ${formData
            .find((item) => item.name === "people")
            .value.toUpperCase()}<br>
          Email: ${formData
            .find((item) => item.name === "email")
            .value.toUpperCase()}<br>
          Time: ${formData
            .find((item) => item.name === "time")
            .value.toUpperCase()}<br>
          Message: ${formData
            .find((item) => item.name === "message")
            .value.toUpperCase()}<br>
        `,
      };

      // Send email using SMTP.js
      Email.send({
        // Host: "smtp.your-email-provider.com",
        // Username: "your-username",
        // Password: "your-password",
        SecureToken: "56a85086-ffd9-4a73-8e96-f9945cb4559f",
        To: emailData.to,
        From: "johncorneron@gmail.com",
        Subject: emailData.subject,
        Body: emailData.body,
      }).then(function (response) {
        if (response === "OK") {
          alert("Booking request sent successfully!");
          // Clear the form
          $("#contactForm")[0].reset();
        } else {
          alert("Booking request sending failed. Please try again later.");
        }
      });
    });
  }

  // Show/hide the "Scroll to Top" button based on scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrollToTop i").fadeIn();
    } else {
      $("#scrollToTop i").fadeOut();
    }
  });

  // Scroll to the top of the page when the button is clicked
  $("#scrollToTop i").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
