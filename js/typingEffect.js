function typeText(elementId, text, delay) {
    let index = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
        else {
            element.setAttribute("style", "animation: none;");
            element.setAttribute("style", "border-right: none;");
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', function() {
    typeText('intro', 'Welcome!', 100); // Typing effect for h1
    typeText('intro2', '\uD83D\uDC4D\uFE0F I am a software engineer passionate about designing and implementing great software! \uD83D\uDC4D\uFE0F', 100); // Typing effect for h2
});