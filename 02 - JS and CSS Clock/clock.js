const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setTime = () => {
        const currentTime = new Date();
        let seconds = currentTime.getSeconds();
        let mins = currentTime.getMinutes();
        let hours = currentTime.getHours();

        // FOR SECONDS HAN OF CLOCK
        let secondsInDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
        resetHand(secondsInDegrees, secondHand);

        //MINUTES HAND
        let minutesInDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
        minHand.style.transform = `rotate(${minutesInDegrees}deg)`;
        resetHand(minutesInDegrees, minHand);

        //HOURS HAND
        let hoursInDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
        hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
        resetHand(minutesInDegrees, minHand);
};

const resetHand = (handinDegree, hand) => {
        if (handinDegree == 90) {
                hand.style.transition = "0s";
        }
        else {
                hand.style.transition = "all 0.05s";
        }
}

setInterval(setTime, 1000);

setTime();
