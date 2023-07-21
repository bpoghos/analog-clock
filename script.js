const clockCont = document.querySelector('div')
const minutes = document.querySelector('.minutes')
const numbers = document.querySelector('.numbers')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')


function createClockNumbers() {
    for (let i = 1; i <= 12; i++) {
        const clockNumber = document.createElement('div')
        numbers.appendChild(clockNumber)
        clockNumber.classList.add('number', `number${i}`)
        clockNumber.textContent = `${i}`
        clockNumber.style.transform = `rotate(${i * (30)}deg) translateY(-140px) rotate(${i * (-30)}deg) `
    }
}
createClockNumbers()


function createClockMinuteLines() {
    for (let i = 0; i <= 60; i++) {
        const clockMinutes = document.createElement('div')
        minutes.appendChild(clockMinutes)
        if (i % 5 === 0) {
            clockMinutes.style.color = 'red'
            clockMinutes.style.fontWeight = 'bolder'
            clockMinutes.style.fontSize = '24px'
        }
        clockMinutes.classList.add('minute', `minutes${i}`)
        clockMinutes.textContent = `|`
        clockMinutes.style.transform = `rotate(${i * (6)}deg) translateY(-180px) `
    }
}
createClockMinuteLines()


function clock() {
    const d = new Date();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const hr_rotation = 30 * hr + min / 2;
    const min_rotation = 6 * min;
    const sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    const sound = new Audio('./media-files/tick-tock.mp3')
    sound.play()
}


setInterval(() => {
    clock()
}, 1000);