

// SOUND

function sound(id, url) {


    const play = document.getElementById(id);

    function playAudio() {
        let audio = new Audio(url);
        audio.play();
    }


    play.addEventListener("click", playAudio)

}


sound("playA", "sounds/clap.wav");
sound("playS", "sounds/hihat.wav");
sound("playD", "sounds/kick.wav");
sound("playF", "sounds/openhat.wav");
sound("playG", "sounds/boom.wav");
sound("playH", "sounds/ride.wav");
sound("playJ", "sounds/snare.wav");
sound("playK", "sounds/tom.wav");
sound("playL", "sounds/tink.wav");

// SOUND










// KEYBOARD SHORTCUT

function keyboard(letter, id) {

document.addEventListener("keydown", e => {

    if (e.key === letter) {
        document.getElementById(id).click();
    };

} );
}



keyboard("a", "playA")
keyboard("s", "playS")
keyboard("d", "playD")
keyboard("f", "playF")
keyboard("g", "playG")
keyboard("h", "playH")
keyboard("j", "playJ")
keyboard("k", "playK")
keyboard("l", "playL")