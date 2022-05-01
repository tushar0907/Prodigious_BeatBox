window.onload = () => {
    setButtons();
};

let beats = {
    a: {
        beat: "./assets/beat 201.mp3",
        color: "#00FFFF",
    },
    s: {
        beat: "./assets/beat 202.mp3",
        color: "#00FFFF",
    },
    d: {
        beat: "./assets/beat 203.mp3",
        color: "#FF00FF",
    },
    f: {
        beat: "./assets/beat 204.mp3",
        color: "#00FF33",
    },
    g: {
        beat: "./assets/beat 205.mp3",
        color: "#FFFFFF",
    },
    h: {
        beat: "./assets/beat 206.mp3",
        color: "#00FFFF",
    },
    j: {
        beat: "./assets/beat 207.mp3",
        color: "#FF00FF",
    },
    k: {
        beat: "./assets/beat 208.mp3",
        color: "#00FF33",
    },
    l: {
        beat: "./assets/beat 210.mp3",
        color: "#FFFFFF",
    },
};

const setButtons = () => {
    for (let beatKey in beats) {
        let beat = beats[beatKey];
        let element = document.getElementById(beatKey);
        element.style.borderColor = beat.color;
        element.addEventListener("transitionend", () => {
            element.style.backgroundColor = "transparent";
            element.style.boxShadow = "none";
        });
    }
};

const onButtonPress = (buttonKey) => {
    let element = document.getElementById(buttonKey);
    element.style.backgroundColor = beats[buttonKey].color;
    element.style.boxShadow = `0px 0px 17px 0px  ${beats[buttonKey].color}`;
};

const playBeat = (buttonKey) => {
    let audioSrc = beats[buttonKey].beat;
    let audio = new Audio(audioSrc);
    audio.currentTime = 0;
    audio.play();
};

document.addEventListener("keydown", (event) => {
    playBeat(event.key);
    onButtonPress(event.key);
});
const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);