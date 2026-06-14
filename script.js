
const text = "Full Stack Developer";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}
typing();

// Smooth scroll to contact section when Hire Me is clicked
document.addEventListener('DOMContentLoaded', function () {
    const hireBtn = document.getElementById('hireBtn');
    if (!hireBtn) return;
    hireBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const contact = document.getElementById('contact');
        if (contact) {
            contact.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '#contact';
        }
    });
});