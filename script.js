const text = document.getElementById('text');
const leaf = document.getElementById('leaf');
const hill1 = document.getElementById('hill1');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    const value = window.scrollY;
    const maxScroll = 700; // Adjust as needed

    if (value > maxScroll) {
        window.scrollTo(0, maxScroll);
        return;
    }

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});