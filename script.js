$(document).ready(function(){
    const keys ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


keys.forEach(key=> {
    $(".Soundboard").append(`<button data-key="${key}">${key}</button>`);

});

function playSound(key){

    let audio = new Audio(`sounds/${key}.wav`);
    audio.play();

    $(`button[data-key=${key}]`).addClass("active");
    setTimeout(()=>{
        $(`button[data-key=${key}]`).removeClass("active");

    },200);
}

$(document).on("keydown", function (event) {
    let key = event.key.toUpperCase();
    if (keys.includes(key)) {
        playSound(key);
    }
});

$(".Soundboard").on("click", "button", function () {
    let key = $(this).data("key");
    playSound(key);
});

});

