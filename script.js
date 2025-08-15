const linksInternos = document.querySelectorAll(".header-menu a[href^='#'");

if (linksInternos.length) {
  function scrollTo(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollTo);
  });
}
