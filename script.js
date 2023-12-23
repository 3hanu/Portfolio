const header = document.querySelector('header');
const navLinks = document.querySelectorAll("nav a");
let activeLink = navLinks[0];

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        setActiveLink(link);
        scrollToSection(link.getAttribute("href"));
    });
});

function setActiveLink(link) {
    activeLink.classList.remove("active");
    link.classList.add("active");
    activeLink = link;
}

function handleScroll() {
    if (window.pageYOffset > header.offsetTop) {
        header.classList.add('sticky');
        document.body.classList.add('body-padding');
    } else {
        header.classList.remove('sticky');
        document.body.classList.remove('body-padding');
    }
}

window.onscroll = function() {
    handleScroll();
}

function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId.substring(1));
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - header.clientHeight,
            behavior: 'smooth'
        });
    }
}

function download() {
    var pdfPath = 'resume.pdf';
    var link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'resume.pdf'; 
    link.target = '_blank'; 
    link.click();
  }


