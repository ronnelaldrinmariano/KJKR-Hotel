// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 20000, 3000);
    counter("count2", 100, 20001, 2500);
    counter("count3", 0, 20002, 3000);
    counter("count4", 0, 20003, 3000);
});

// Our Partner
var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 8,
        },


    },
});


// Swal 

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.row').addEventListener('submit', function (event) {
        event.preventDefault();

        // Your logic for checking availability goes here

        // Example notification using SweetAlert
        Swal.fire({
            icon: 'success',
            title: "it's a prank",
            text: 'Sorry display lang to wala tayong data base :)',
            showConfirmButton: false,
            timer: 3000  // Set the time you want the notification to be visible (in milliseconds)
        });
    });
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form elements
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Perform form validation
    if (isEmpty(firstNameInput.value) || isEmpty(lastNameInput.value) || isEmpty(emailInput.value) || isEmpty(passwordInput.value)) {
        // Display an error message using SweetAlert if any field is empty
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'All fields are required. Please fill in all the fields.',
        });
    } else {
        // If all fields are filled, proceed with registration logic
        // For simplicity, you can use the browser's built-in validation or add your custom logic
        // For example, you can use SweetAlert for displaying messages

        Swal.fire({
            icon: 'success',
            title: 'Registration Successful!',
            text: 'You have successfully registered.',
        });

        // Clear form fields if needed
        this.reset();
    }
});

// Function to check if a value is empty
function isEmpty(value) {
    return value.trim() === '';
}
