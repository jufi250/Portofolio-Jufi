// Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

//* ==== Informasi Pribadi / Profil Pribadi ==== *//

// make object
// object literal
// this
// personal data

let Profile = {
  name: "Jufi Rachmana D.C.",
  age: 19,
  school: "State Senior High School 8 Garut",
  major: "Natural Science/ IPA",
  grade: "Grade 87,08",
  Email: "jufirachmanadwichandra@gmail.com",
  PhoneNumber: "+62895-4174-06600",
  isGraduated: true,
};

// Global
// DOM Selection
console.info(document.title);
console.info(document.head);
console.info(document.body);
console.info(document.images);

// this effect activate when the cv button is clicked
// if in begin open the website, the cv not show,
// but when the button is clicked, the cv will show

const cvButton = document.querySelector(".cv-btn");
const toast = document.getElementById("toast");

cvButton.addEventListener("click", function () {
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});
