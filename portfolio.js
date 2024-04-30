
window.addEventListener('load', function() {
  // Hide loader
  var loader = document.getElementById('loader');
  loader.style.display = 'none';

  // Show website content
  var content = document.getElementById('main');
  content.style.display = 'block';
});



//     theme change   
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.l');

    if (!toggleSwitch.checked) {
        // Add the checked attribute to the toggle switch
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            enableLightTheme();
        } else {
            enableDarkTheme();
        }
    });

    function enableDarkTheme() {
        document.body.classList.add('dark');
    }

    function enableLightTheme() {
        document.body.classList.remove('dark');
    }
});



const newText = document.querySelector("#change-text");
var typed = new Typed('#change-text', {
    strings: ["web developer", "java developer", "android developer", "cyber security", "progammmer"],
    typeSpeed: 100,
    startDelay: 10,
    backSpeed: 100,
    loop: true
}
);


function openPDF(){
    window.open('imp pdf files/Lokendra_resume perfect Recent2.12.pdf','_blank');
}



const driver = window.driver.js.driver;
const driverObj = driver({
    popoverClass: 'driverjs-theme',
    showProgress: true,
    steps: [
        {
            element: '#logo-div',
            popover: {
                title: 'My Logo',
                description: 'This is the logo of my portfolio website, embodying my brand identity and values.',
                side: "right", 
                align: 'start'
            }
        },
        {
            element: '.header-links',
            popover:
            {
                title: 'NavBar Links',
                description: 'This is the navigation bar of my portfolio website, providing easy access to key sections such as Home, About, Services, Projects, Skills & Certificates, and Contact.',
                side: "bottom", 
                align: 'start'
            }
        },
        {
            element: '.social-media',
            popover:
            {
                title: 'My Social Media',
                description: 'Connect with me on social media for updates, insights, and engaging content.',
                side: "right", 
                align: 'end'
            }
        },
        {
            element: '.download-cv',
            popover:
            {
                title: 'Download My current CV',
                description: 'Download my CV to explore my qualifications, experience, and skills.',
                side: "bottom", 
                align: 'end'
            }
        },
        {
            element: '.hire-me',
            popover:
            {
                title: 'Hire me by click',
                description: "Hire me for your next project and let's bring your vision to life together.",
                side: "bottom", 
                align: 'end'
            }
        },
        {
            element: '#know-me',
            popover:
            {
                title: 'Know about me',
                description: "Let's delve into who I am and what drives my passion for development.",
                side: "left", 
                align: 'start'
            }
        },
        {
            element: '#Education',
            popover:
            {
                title: 'My Education',
                description: "Click here to discover my educational background and qualifications.",
                side: "left", 
                align: 'start'
            }
        },
        {
            element: '#Experience',
            popover:
            {
                title: 'My Experience',
                description: "Click here to explore my professional journey and experience.",
                side: "right", 
                align: 'end'
            }
        },
        {
            element: '.my-services',
            popover:
            {
                title: 'My Services',
                description: "Explore the services I offer and how they can benefit you.",
                side: "left", 
                align: 'start'
            }
        },
        {
            element: '.text1',
            popover:
            {
                title: 'My Web development projects',
                description: "Discover my web development projects showcasing responsiveness and the use of diverse JavaScript libraries.",
                side: "top", 
                align: 'start'
            }
        },
        {
            element: '.slider',
            popover:
            {
                title: 'My project preview',
                description: "Preview my projects in a dynamic slider for a glimpse into my portfolio.",
                side: "top", 
                align: 'start'
            }
        },
        {
            element: '.buttonDownload',
            popover:
            {
                title: 'get the code',
                description: "Click here to access the code and explore the underlying implementation.",
                side: "top", 
                align: 'start'
            }
        },
        {
            element: '.rec-box',
            popover:
            {
                title: 'My Skills',
                description: "View my skills and expertise represented as percentages for a quick overview.",
                side: "top", 
                align: 'start'
            }
        },
        {
            element: '#certificates-container',
            popover:
            {
                title: 'My certificates',
                description: "Explore my certifications showcase, a testament to my expertise and dedication in various domains. Browse and be inspired",
                side: "bottom", 
                align: 'start'
            }
        },
        {
            element: '.logos-container',
            popover:
            {
                title: 'My Distinguished Partners',
                description: "Discover the esteemed companies I've collaborated with, whose logos adorn this section, showcasing mutual success and fruitful partnerships.",
                side: "top", 
                align: 'start'
            }
        },
        {
            element: '#slide1-h1',
            popover:
            {
                title: 'Expertise & Proficiencies',
                description: "Explore my diverse skill set, ranging from Java and web development to cybersecurity and competitive programming, honed through hands-on experience.",
                side: "top", 
                align: 'center'
            }
        },
    ]
});
document.querySelector('#take_tour').addEventListener("click",()=>{
    driverObj.drive();
})




// Get all slide elements
var slides = document.querySelectorAll('.sliding');
var slideIndex = 0;

// Function to show slides
function showSlides() {
    // Hide all slides
    slides.forEach(function(slide) {
        slide.style.opacity = 0;
    });

    // Show the current slide
    slides[slideIndex].style.opacity = 1;

    // Move to the next slide
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Repeat every 9 seconds (adjust as needed)
    setTimeout(showSlides, 9000);
}

// Call the function to start the slideshow
showSlides();



//  education or experience sliding 
const textContainer = document.querySelector('#edu-text');
const textDivs = document.querySelectorAll('#edu-text > div');


const divWidth = textDivs[0].offsetWidth;
const scrollDistance = divWidth;

let currentIndex = 0;

function slideText() {
    const transformValue = -currentIndex * scrollDistance;
    textContainer.style.transition = 'transform 0.5s ease-in-out';
    textContainer.style.transform = `translateX(${transformValue}px)`;
    currentIndex = (currentIndex + 1) % textDivs.length;
}

function startSlide() {
    interval = setInterval(slideText, 2000);
}

function stopSlide() {
    clearInterval(interval);
}
startSlide();

textContainer.addEventListener('mouseenter', stopSlide);
textContainer.addEventListener('mouseleave', startSlide);

function exper() {

    const expTextContainer = document.querySelector('#experience-text');
    const expTextDivs = document.querySelectorAll('#experience-text > div');

    let expDivWidth = expTextDivs[0].offsetWidth;
    let expScrollDistance = expDivWidth;

    let expCurrentIndex = 0;

    function slideExperienceText() {
        let expTransformValue = -expCurrentIndex * expScrollDistance;
        expTextContainer.style.transition = 'transform 0.5s ease-in-out';
        expTextContainer.style.transform = `translateX(${expTransformValue}px)`;
        expCurrentIndex = (expCurrentIndex + 1) % expTextDivs.length;
    }

    function startExperienceSlide() {
        expInterval = setInterval(slideExperienceText, 2000);
    }

    function stopExperienceSlide() {
        clearInterval(expInterval);
    }

    startExperienceSlide();

    expTextContainer.addEventListener('mouseenter', stopExperienceSlide);
    expTextContainer.addEventListener('mouseleave', startExperienceSlide);
}

//      About education and experience 

document.getElementById('Education').addEventListener('click', function () {
    document.getElementById('edu-text').style.display = 'flex';
    document.getElementById('experience-text').style.display = 'none';
    this.classList.add('active');
    document.getElementById('Experience').classList.remove('active');
});

document.getElementById('Experience').addEventListener('click', function () {
    document.getElementById('edu-text').style.display = 'none';
    document.getElementById('experience-text').style.display = 'flex';
    exper();
    this.classList.add('active');
    document.getElementById('Education').classList.remove('active');
});


// know more button 
const linkedinButton = document.getElementById('linkedinButton');

// Add an event listener for the click event
linkedinButton.addEventListener('click', function() {
  // Replace 'your-linkedin-profile-url' with your actual LinkedIn profile URL
  const linkedinProfileUrl = 'https://www.linkedin.com/in/lokendra-yadav-a1ab561bb/';
  
  // Redirect the user to your LinkedIn profile
  window.open(linkedinProfileUrl, '_blank');
});

//       projects sliding 

class Slider {
    constructor(containerId) {
        this.slider = document.getElementById(containerId);
        this.slides = this.slider.querySelectorAll('.slide');
        this.prevBtn = this.slider.querySelector('.prev');
        this.nextBtn = this.slider.querySelector('.next');
        this.dotsContainer = this.slider.querySelector('.nav-dots');
        this.slideIndex = 0;

        this.setup();
        this.addEventListeners();
        this.startAutoplay();
    }

    setup() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.setAttribute('data-index', index);
            this.dotsContainer.appendChild(dot);
        });

        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots[0].classList.add('active');
    }

    showSlide(index) {
        const slideWidth = this.slides[0].offsetWidth;
        this.slides.forEach((slide, i) => {
            slide.style.transition = 'transform 0.5s ease-in-out';
            slide.style.transform = `translateX(-${index * slideWidth}px)`;
        });

        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }


    slideNext() {
        this.slideIndex++;
        if (this.slideIndex >= this.slides.length) {
            this.slideIndex = 0;
        }
        this.showSlide(this.slideIndex);
    }

    slidePrev() {
        this.slideIndex--;
        if (this.slideIndex < 0) {
            this.slideIndex = this.slides.length - 1;
        }
        this.showSlide(this.slideIndex);
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.slideNext(), 10000);
    }

    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    }

    addEventListeners() {
        this.prevBtn.addEventListener('click', () => this.slidePrev());
        this.nextBtn.addEventListener('click', () => this.slideNext());

        this.slider.addEventListener('mouseover', () => this.stopAutoplay());
        this.slider.addEventListener('mouseout', () => this.startAutoplay());

        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                this.slideIndex = parseInt(dot.getAttribute('data-index'));
                this.showSlide(this.slideIndex);
            });
        });
    }
}

const slider1 = new Slider('slider1');
const slider2 = new Slider('slider2');
const slider3 = new Slider('slider3');



//  get code button js 
function goToGitHub() {
    window.open("https://github.com/Lokendra-Yadav9", "_blank");
}


        //  certificates sliding 

function initializeSliderDesktop(carouselElement) {
    let startX = null;
    let slideInterval;
    let angle = 0;
    
    const images = document.querySelectorAll('.carousel__img');
     
     images.forEach(image => {
       image.draggable = false;
     });
    // Function to slide the carousel automatically
    function autoSlide() {
      angle -= 45;
      carouselElement.style.transform = `translateZ(-15vw) rotateY(${angle}deg)`;
    }
  
    // Start automatic sliding initially
    function startAutoSlide() {
      slideInterval = setInterval(autoSlide, 3000); // Adjust the interval duration as needed (currently set to 3 seconds)
    }
  
    // Function to stop automatic sliding interval
    function stopAutoSlide() {
      clearInterval(slideInterval);
    }
  
    // Event listener for touchstart
    carouselElement.addEventListener("touchstart", (event) => {
      startX = event.touches[0].clientX;
      stopAutoSlide(); // Stop automatic sliding when user starts swiping
    });
  
    // Event listener for touchmove
    carouselElement.addEventListener("touchmove", (event) => {
      if (!startX) return;
      const currentX = event.touches[0].clientX;
      const diffX = startX - currentX;
      if (Math.abs(diffX) > 50) { 
        angle += (diffX > 0) ? -45 : 45;
        carouselElement.style.transform = `translateZ(-15vw) rotateY(${angle}deg)`;
        startX = currentX; // Update startX to the currentX position
        stopAutoSlide();
      }
    });
  
    // Event listener for touchend
    carouselElement.addEventListener("touchend", () => {
      startX = null;
      startAutoSlide(); 
    });
  
    // Event listener for mouseenter
    carouselElement.addEventListener("mouseenter", () => {
      stopAutoSlide(); // Stop automatic sliding when mouse enters
    });
  
    // Event listener for mouseleave
    carouselElement.addEventListener("mouseleave", () => {
      startAutoSlide(); // Resume automatic sliding when mouse leaves
    });
  
    // Event listener for mouse click on carousel
    carouselElement.addEventListener("mousedown", (event) => {
      startX = event.clientX;
      stopAutoSlide(); // Stop automatic sliding when user starts swiping
    });
  
    // Event listener for mouse move on carousel
    carouselElement.addEventListener("mousemove", (event) => {
      if (!startX) return;
      const currentX = event.clientX;
      const diffX = startX - currentX;
      if (Math.abs(diffX) > 50) { // Adjust the threshold as needed
        angle += (diffX > 0) ? -45 : 45;
        carouselElement.style.transform = `translateZ(-15vw) rotateY(${angle}deg)`;
        startX = null;
      }
    });
  
    // Event listener for mouse up on carousel
    carouselElement.addEventListener("mouseup", () => {
      startX = null;
    });
  
    // Event listener for mouse leave carousel
    carouselElement.addEventListener("mouseleave", () => {
      startX = null;
    });
  
    // Start automatic sliding initially
    startAutoSlide();
  }

  const destopDisplay = window.matchMedia('(min-width: 767px)');
  
  // Check if the media query matches
  if (destopDisplay.matches) {
    // Initialize slider for touch sliding on mobile
    const carousel1 = document.querySelector(".carousel__cards1");
    initializeSliderDesktop(carousel1);
    
    const carousel2 = document.querySelector(".carousel__cards2");
    initializeSliderDesktop(carousel2);
  }


function initializeSlider(carouselElement) {
    let startX = null;
    let slideInterval;
    let angle = 0;
  
    const images = carouselElement.querySelectorAll('.carousel__img');
  
    images.forEach(image => {
      image.draggable = false;
    });
  
    function autoSlide() {
      angle -= 45;
      carouselElement.style.transform = `translateZ(-15vw) rotateY(${angle}deg)`;
    }
  
    function startAutoSlide() {
      slideInterval = setInterval(autoSlide, 3000);
    }
  
    function stopAutoSlide() {
      clearInterval(slideInterval);
    }
  
    function handleStart(event) {
      startX = event.touches ? event.touches[0].clientX : event.clientX;
      stopAutoSlide();
    }
  
    function handleMove(event) {
      if (!startX) return;
      const currentX = event.touches ? event.touches[0].clientX : event.clientX;
      const diffX = startX - currentX;
      if (Math.abs(diffX) > 50) {
        angle += (diffX > 0) ? -45 : 45;
        carouselElement.style.transform = `translateZ(-15vw) rotateY(${angle}deg)`;
        startX = currentX;
        stopAutoSlide();
      }
    }
  
    function handleEnd() {
      startX = null;
      startAutoSlide();
    }
  
    carouselElement.addEventListener("touchstart", handleStart);
    carouselElement.addEventListener("touchmove", handleMove);
    carouselElement.addEventListener("touchend", handleEnd);
    carouselElement.addEventListener("mouseenter", stopAutoSlide);
    carouselElement.addEventListener("mouseleave", startAutoSlide);
    carouselElement.addEventListener("mousedown", handleStart);
    carouselElement.addEventListener("mousemove", handleMove);
    carouselElement.addEventListener("mouseup", handleEnd);
    carouselElement.addEventListener("mouseleave", handleEnd);
  
    startAutoSlide();
  }


// Define the color variable
const darkColor = '#122620';

// Get all the text spans
const textSpans = document.querySelectorAll('h1 span');

// Add event listeners to each text span
textSpans.forEach(span => {
    span.addEventListener('mouseenter', (event) => {
        const boundingRect = span.getBoundingClientRect();
        const offsetX = (event.clientX - boundingRect.left - boundingRect.width / 2) / 2; // Adjust the offset as desired
        const offsetY = (event.clientY - boundingRect.top - boundingRect.height / 2) / 2; // Adjust the offset as desired
        
        span.style.transition = 'transform 0.3s ease, color 0.3s ease'; // Smooth transition effect
        span.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.2)`; // Move the word outside and zoom in
        span.style.color = darkColor; // Set the font color using the variable
        span.style.zIndex = '99999'; // Set the z-index to a high value

    });

    span.addEventListener('mouseleave', () => {
        span.style.transition = 'transform 0.3s ease, color 0.3s ease'; // Smooth transition effect
        span.style.transform = 'translate(0, 0) scale(1)'; // Reset position and zoom out
        span.style.color = ''; // Reset the font color
        span.style.zIndex = ''; // Reset the z-index
    });
});






   
  // Media query for screens with a maximum width of 767px
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  
  // Check if the media query matches
  if (mediaQuery.matches) {
    // Initialize slider for touch sliding on mobile
    const carousel1 = document.querySelector(".carousel__cards1");
    initializeSlider(carousel1);
    
    const carousel2 = document.querySelector(".carousel__cards2");
    initializeSlider(carousel2);
  }

function init() {
  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Update ScrollTrigger whenever Locomotive Scroll updates
  locoScroll.on("scroll", ScrollTrigger.update);

  // Use scrollerProxy for "#main" element since Locomotive Scroll is in control
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : false // Set pinType to false to avoid transforming the element
  });

  // Refresh ScrollTrigger and update Locomotive Scroll on window resize
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
    locoScroll.update();
  });

  // Refresh ScrollTrigger and update Locomotive Scroll after setup
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

// init();





  function showPopup() {
    // Create popup container if it doesn't exist
    const popupContainer = document.querySelector('.popup-container') || document.createElement('div');
    popupContainer.classList.add('popup-container');
  
    // Create popup content with a button
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    const button = document.createElement('button');
    button.textContent = 'Click here!'; // Customize button text
    button.addEventListener('click', hidePopup);
    popupContent.appendChild(button);
  
    // Add close button and event listener
    const closeButton = document.createElement('span');
    closeButton.classList.add('popup-close');
    closeButton.textContent = '&times;';
    closeButton.addEventListener('click', hidePopup);
    popupContent.appendChild(closeButton);
  
    // Add backdrop and event listener
    const backdrop = document.createElement('div');
    backdrop.classList.add('popup-backdrop');
    backdrop.addEventListener('click', hidePopup);
  
    // Append popup and backdrop to body
    popupContainer.appendChild(popupContent);
    document.body.appendChild(backdrop);
    document.body.appendChild(popupContainer);
  
    // Show popup using animation (optional)
    popupContainer.classList.add('show'); // Example using CSS class for animation
  
    function hidePopup() {
      // Hide popup with animation (optional)
      popupContainer.classList.remove('show');
  
      // Remove popup and backdrop after animation
      setTimeout(() => {
        popupContainer.remove();
        backdrop.remove();
      }, 300); // Adjust timeout as needed
    }
  }




// popup for send msg 
function popup() {
    const toast = document.querySelector(".toast");
    const closeIcon = document.querySelector(".close");
    const progress = document.querySelector(".progress");
    let timer1, timer2;

    toast.classList.add("active");
    progress.classList.add("active");
  
    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 2000); 
  
    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 2000);
  
    closeIcon.addEventListener("click", () => {
      toast.classList.remove("active");
  
      setTimeout(() => {
        progress.classList.remove("active");
      }, 300);
  
      clearTimeout(timer1);
      clearTimeout(timer2);
    });
  }
  

//   scroll screen progress bar 
const scrollline = document.querySelector('.scroll-line');

      function fillscrollline(){
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

        scrollline.style.width = percentScrolled + '%';
      };

      window.addEventListener('scroll', fillscrollline);




//   form submit js 

const scriptURL = 'https://script.google.com/macros/s/AKfycbxohVygl8AdECbizcEIBeMEm1ViFJxj--N-8GKRXUhQ-hhcG2DGsmpTDGVtKBn2xbAI/exec';
  const form = document.forms['submit-to-google-sheet'];
  
  form.addEventListener('submit', e => {
      e.preventDefault();
      popup(); 
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
              form.reset(); 
          })
          .catch(error => console.error('Error!', error.message));
  });


// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn")

// When user scrolls down 20px from top show button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When user clicks on button, scroll to top 
scrollToTopBtn.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function init() {
  // Check viewport dimensions
  if (window.innerWidth >= 767 && window.innerHeight >= 700) {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      // smooth: true
    });

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Update ScrollTrigger whenever Locomotive Scroll updates
    locoScroll.on("scroll", ScrollTrigger.update);

    // Use scrollerProxy for "#main" element since Locomotive Scroll is in control
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : false // Set pinType to false to avoid transforming the element
    });

    // Refresh ScrollTrigger and update Locomotive Scroll on window resize
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
      locoScroll.update();
    });

    // Refresh ScrollTrigger and update Locomotive Scroll after setup
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();


  //contact form bg 
gsap.from('.about-div', {
  opacity: 0,
  y: 150,
  duration: 1,
  scrollTrigger: {
    trigger: '.about-div',
    start: 'top 80%',
    end: '+=100',
    toggleActions: 'play none none reverse',
    scrub:1,
    // markers:true,
    yoyo:true,
  }
});


gsap.utils.toArray('.Services-box').forEach(box => {
  gsap.from(box, {
    opacity: 0,
    y: 150,
    duration: 0.1,
    scrollTrigger: {
      trigger: box,
      start: 'top 80%',
      end: '+=100',
      toggleActions: 'play none none reverse',
      // markers:true,
      yoyo:true,
    }
  });
});



gsap.from('#slider1', {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '#slider1',
    start: 'top 80%',
    end: '+=100',
    toggleActions: 'play none none reverse',
    scrub:1,
    // markers:true,
    yoyo:true,
  }
},"computer");


gsap.from('#t1', {
  opacity: 0,
  x: -50,
  duration: 1,
  scrollTrigger: {
    trigger: '#t1',
    start: 'top 80%',
    end: '+=100',
    toggleActions: 'play none none reverse',
    scrub:1,
    // markers:true,
    yoyo:true,
  }
},"computer");


gsap.from('#slider2', {
  opacity: 0,
  x: 150,
  duration: 1,
  scrollTrigger: {
    trigger: '#slider2',
    start: 'top 80%',
    end: '+=100',
    toggleActions: 'play none none reverse',
    scrub:3,
    // markers:true,
    yoyo:true,
  }
},"computer1");

gsap.from('#t2', {
  opacity: 0,
  x: -150,
  duration: 1,
  scrollTrigger: {
    trigger: '#t2',
    start: 'top 80%',
    end: '+=100',
    toggleActions: 'play none none reverse',
    scrub:3,
    // markers:true,
    yoyo:true,
  }
},"computer1");


gsap.from('#slider3', {
  opacity: 0,
  y: 150,
  duration: 1,
  scrollTrigger: {
    trigger: '#slider3',
    start: 'top 80%',
    end: '+=100',
    toggleActions: 'play none none reverse',
    scrub:3,
    // markers:true,
    yoyo:true,
  }
},"computer3");

gsap.from('#t3', {
  opacity: 0,
  y: 150,
  duration: 1,
  scrollTrigger: {
    trigger: '#t3',
    start: 'top 80%',
    end: '+=100',
    toggleActions: 'play none none reverse',
    scrub:3,
    // markers:true,
    yoyo:true,
  }
},"computer3");



// skill box gsap 
function animateRecBoxes() {
  gsap.utils.toArray('.rec-box .card:nth-child(even)').forEach(box => {
    gsap.from(box, {
      opacity: 0,
      y: -50,
      duration: 0.1,
      scrollTrigger: {
        trigger:".card",
        start: 'top 80%',
        end: '+=100',
        toggleActions: 'play none none reverse',
        scrub:1,
    // markers:true,
    yoyo:true,
      }
    });
  },"recBox");

  gsap.utils.toArray('.rec-box .card:nth-child(odd)').forEach(box => {
    gsap.from(box, {
      opacity: 0,
      y: 50,
      duration: 0.1,
      scrollTrigger: {
        trigger:".card",
        start: 'top 80%',
        end: '+=100',
        toggleActions: 'play none none reverse',
        scrub:1,
    // markers:true,
    yoyo:true,
      }
    },"recBox");
  });
}

// Call the function to animate the rec-box elements
animateRecBoxes();



// cirtificates
gsap.utils.toArray('.carousel__card').forEach(card => {
  gsap.from(card, {
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      end: '+=100',
      toggleActions: 'play none none reverse'
    }
  });
});


  //contact form bg 



// company logos
gsap.utils.toArray('.c-logo').forEach(logo => {
  gsap.from(logo, {
    opacity: 0,
    scale: 0.5,
    rotation: Math.random() * 360 - 180,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: logo,
      start: 'top 80%',
      end: '+=100',
      toggleActions: 'play none none reverse'
    }
  });
});



gsap.utils.toArray("#Contact #slide2-h1 h1").forEach(function(elem) {
  gsap.to(elem, {
    x: "0%",
    duration: 4,
    scrollTrigger: {
      trigger: "#Contact",
      // scroller: "#main",
      scrub: 8,
      // markers: true,
      yoyo: true,
    }
  });
});

gsap.utils.toArray("#Contact #slide1-h1 h1").forEach(function(elem) {
  gsap.to(elem, {
    x: "-100%",
    duration: 4,
    scrollTrigger: {
      trigger: "#Contact",
      scrub: 8,
      yoyo: true,
    }
  });
});

  }
}

if (window.innerWidth >= 767) {
  init();
} else {

}


// $('a').on('click', function(event) {
//   event.preventDefault();
//   $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 800);
// });



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const phoneNumber = "+917471172041";
const qrCodeElement = document.getElementById("qrcode");

// Generate the QR code using the QRCode.js library
new QRCode(qrCodeElement, {
    text: "tel:" + phoneNumber,
});



