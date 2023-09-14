
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


const hiddenElements = document.querySelectorAll('.hidden, .animated, .aboutimg, .barang');
hiddenElements.forEach((el) => {
    observer.observe(el); 
});
document.getElementById("payment").addEventListener("click", function() {
    window.location.href = "payment.html";
});