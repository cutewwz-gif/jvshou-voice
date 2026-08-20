// =======================
// 背景音乐
// =======================

const bgm = new Audio("../bgm.mp3");
bgm.loop = true;
bgm.volume = 0.3; // 默认30%音量

const button = document.getElementById("bgmButton");
const slider = document.getElementById("volumeSlider");

let playing = false;

// 播放 / 暂停背景音乐
button.onclick = function () {

    if (playing) {

        bgm.pause();
        button.innerText = "▶ 播放背景音乐";

    } else {

        bgm.play();
        button.innerText = "⏸ 暂停背景音乐";

    }

    playing = !playing;

};

// 调节背景音乐音量
slider.addEventListener("input", function () {

    bgm.volume = this.value / 100;

});


// =======================
// 武将语音
// =======================

let currentAudio = null;

function playVoice(id) {

    // 停止上一句
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio("../audio/" + id + ".mp3");
    currentAudio.play();

}


// =======================
// 键盘监听
// =======================

document.addEventListener("keydown", function (e) {

    switch (e.key) {

        case "1":
            playVoice(1);
            break;

        case "2":
            playVoice(2);
            break;

        case "3":
            playVoice(3);
            break;

        case "4":
            playVoice(4);
            break;

    }

});