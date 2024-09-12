const scrollRevealOption = {
    distance: "50px",
    origin:"Bottom",
    duration: 1000,
};
ScrollReveal().reveal(".header__container h1", scrollRevealOption)

ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 500,
});
