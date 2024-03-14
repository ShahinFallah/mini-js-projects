let selectMenu = document.querySelectorAll("select");
let timerBox = document.querySelector(".time")
let setAlarmBtn = document.querySelector("button")
let content = document.querySelector(".content")
let ringtone = new Audio("../Timer/sound/Ring.mp3")
let alarmTime, state = "set";

// Create select option
for (let i = 23; i >= 1; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 1; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

// Get real time
setInterval(() => {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    timerBox.innerHTML = `${h}:${m}:${s}`;
    if (alarmTime == `${h}:${m}`) {
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000)

// Set alarm time after click
setAlarmBtn.addEventListener("click", () => {
    alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`
    if (alarmTime.includes("Hour") || alarmTime.includes("Minute")) {
        return alert("Please Choose Your Time")
    }
    checkState(state)
})

// Check button click state
function checkState(changeState) {
    if (changeState == "set") {
        content.classList.add('disable')
        setAlarmBtn.innerHTML = "clear time";
        state = "noset"
    }
    if (changeState == "noset") {
        content.classList.remove('disable')
        setAlarmBtn.innerHTML = "set time";
        alarmTime = ""
        ringtone.pause()
        selectMenu[0].selectedIndex = 0;
        selectMenu[1].selectedIndex = 0;
        state = "set"
    }
}
