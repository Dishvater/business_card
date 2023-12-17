import differenceInDays from "date-fns/differenceInDays";

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener('click', () => {
    const nav = document.querySelector(".nav--js");
    nav.classList.toggle("nav__open")})
const birthday = [2024, 3, 23, 0, 0];
const resultDate = differenceInDays(
    // new Date(2024, 3, 23, 0, 0),
    new Date(...birthday), 
    new Date(2023, 11, 17, 0, 0)
    )

console.log(resultDate);