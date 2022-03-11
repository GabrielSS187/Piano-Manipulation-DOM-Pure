//* Passo a Passo

//* Get All Keys
const keys = document.querySelectorAll(".key");

//* 2 - Play Notes
const playNote = (event) => {

    //* Logica

    //* 1 - KeyCode
    let audioKeyCode = getKeyCode(event);

    //* 2 - Typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

    //* 3 - If key existis
    if ( !key ) {
        return;
    };

    //* Play audio
    addPlayingClass(key);
    playAudio(audioKeyCode);
    
};//! palyNotes

//* Adction Class
const addPlayingClass = (key) => {
    key.classList.add("playing");
}; //!

//* Get key
const getKeyCode = (event) => {
    let keyCode;

    event.type === "keydown" ? 
    keyCode = event.keyCode
    :
     keyCode = event.target.dataset.key

     return keyCode;
}; //!

//* Play audio
const playAudio = (audioKeyCode) => {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}; //!

//* Remove "playing" classe
const removePlayingClasse = (event) => {
    event.target.classList.remove("playing");
}; //!

//* 3 Click with Mouse
keys.forEach(( key ) => {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClasse);
}) //!

//* 4 - Keyboard Type
window.addEventListener("keydown", playNote);