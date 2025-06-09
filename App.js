//Name animation js
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("animatedText");
    const text = textElement.textContent;
    textElement.textContent = "";
    textElement.style.visibility = "visible";

    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        textElement.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  });

  //download cv
  document.getElementById("downloadBtn").addEventListener("click", () => {

    const fileUrl = "images/VigneshR_resume.pdf";
    const fileName = "vignesh_resume";

    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;

    anchor.click();

    anchor.remove();
  });


  // Me teansistion js
  document.addEventListener("DOMContentLoaded", () => {
    const aboutMeSpan = document.querySelector("#aboutMe span");

    // Create an intersection observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element enters the viewport, add the 'animate' class
                aboutMeSpan.classList.add("animate");
            }
        });
    }, { threshold: 0.8 }); // Trigger when 50% of the element is in the viewport

    // Start observing the element
    observer.observe(document.getElementById("aboutMe"));
});

//UpArrow button js
const scrollToTopButton = document.querySelector('.upArrow');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// skills js
const images = document.querySelectorAll('.animated-img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

            const delay = index * 200;
            entry.target.style.transitionDelay = `${delay}ms`;

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
});

images.forEach((image) => observer.observe(image));

//experience card animation
document.addEventListener("DOMContentLoaded", () => {
  const experienceCards = document.querySelectorAll(".experience-card");

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  };

  const observerOptions = {
    root: null, // Observing relative to the viewport
    threshold: 0.2, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each experience card
  experienceCards.forEach((card) => observer.observe(card));
});

// Contact form validation and submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Reset previous error messages
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      // Validate form
      let isValid = true;

      // Name validation
      if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
      }

      // Email validation
      if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
      } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
      }

      // Phone validation
      if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required';
        isValid = false;
      } else if (!isValidPhone(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
        isValid = false;
      }

      // If form is valid, submit it
      if (isValid) {
        // Send greeting email to the user
        sendGreetingEmail(name, email);

        // Hide the form and show success message
        contactForm.reset();
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';

        // Log form data (for demonstration)
        console.log(`Form data: Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
      }
    });
  }

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Phone validation function
  function isValidPhone(phone) {
    // Basic phone validation - adjust as needed for your requirements
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
  }

  // Function to send greeting email
  function sendGreetingEmail(name, email) {
    // In a real application, you would use a service like EmailJS or a backend API
    // This is a simulation of sending an email

    // Example using EmailJS (you would need to include the EmailJS library and set up an account)
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_name: name,
      to_email: email,
      message: `Dear ${name},\n\nThank you for contacting me! I've received your message and will get back to you as soon as possible.\n\nBest regards,\nVignesh R`
    }).then(
      function(response) {
        console.log('Email sent successfully!', response);
      },
      function(error) {
        console.log('Failed to send email:', error);
      }
    );
    */

    // For demonstration purposes, we'll just log the email content
    console.log('Greeting email would be sent to:', email);
    console.log(`Email content: Dear ${name}, Thank you for contacting me! I've received your message and will get back to you as soon as possible.`);
  }
});


//experience animation
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
          else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".leftInner, .rightInner").forEach((el) => {
      observer.observe(el);
    });
  });


// hamburger function

  document.addEventListener("DOMContentLoaded", function () {
    const topics = document.getElementById("navTopics");
    const downloadBtn = document.getElementById("downloadBtn");
    const mobileHeader = document.getElementById("mobileHeader");
    const header = document.querySelector(".headerContent");
    const hamburger = document.getElementById("hamburgerMenu");

    function moveToMobile() {
      if (window.innerWidth < 650) {
        if (!mobileHeader.contains(topics)) {
          mobileHeader.appendChild(topics);
          topics.classList.add("mobileTopics");
        }
        if (!mobileHeader.contains(downloadBtn)) {
          mobileHeader.appendChild(downloadBtn);
        }
      } else {
        if (!header.contains(topics)) {
          header.appendChild(topics);
          topics.classList.remove("mobileTopics");
        }
        if (!header.contains(downloadBtn)) {
          header.appendChild(downloadBtn);
        }
        mobileHeader.classList.remove("showMobile");
      }
    }

    // Hamburger click toggles visibility
    hamburger.addEventListener("click", function () {
      mobileHeader.classList.toggle("showMobile");
    });

    moveToMobile();
    window.addEventListener("resize", moveToMobile);
  });
