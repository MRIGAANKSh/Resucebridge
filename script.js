hamburger=document.querySelector(".hamburger")
hamburger.onclick=function(){
    navbar=document.querySelector(".navbar");
    navbar.classList.toggle("active")
}
document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');
            const toggle = faq.querySelector('.faq-toggle');
            toggle.textContent = faq.classList.contains('active') ? '−' : '+';
        });
    });
});
