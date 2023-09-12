// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) { // Corrected the typo: "isIntersecting" instead of "isIntereecting"
            entry.target.classList.add('show'); // Corrected the typo: "classList" instead of "classlist"
        } else {
            entry.target.classList.remove('show'); // Corrected the typo: "classList" instead of "classlist"
        }
    });
});

// Select hidden elements and observe them
const hiddenElements = document.querySelectorAll('.hidden, .animated, .aboutimg, .barang');
hiddenElements.forEach((el) => {
    observer.observe(el); 
});
