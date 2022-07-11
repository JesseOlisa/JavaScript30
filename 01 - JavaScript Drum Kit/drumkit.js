
// FUNCTIONS
const playSound = (keyCodenum) => {
        const audio = document.querySelector(`audio[data-key="${keyCodenum}"]`);
        const key = document.querySelector(`div[data-key="${keyCodenum}"]`);

        if (!audio) return;
        key.classList.add('playing');
        audio.currentTime = 0; //this resets the playing time so it plays as we tap
        audio.play(); //this function plays an animation
}

// EVENT LISTENERS

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach((key) => {
        key.addEventListener('click', () => {
               let keyCodenum = key.getAttribute('data-key');
               playSound(keyCodenum);
        })
});

window.addEventListener('keydown', (e) => {
        let keyCodenum = e.keyCode;
        playSound(keyCodenum);
});

window.addEventListener('transitionend', (e) => {
        e.target.classList.remove('playing'); //this listens for any transition ending
});