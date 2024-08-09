function threeIronman() {
    startAudio();

    // Nascondi countdown, motivation e pulsante
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('motivation').style.display = 'none';
    document.getElementById('play-button').style.display = 'none';

    // Mostra i nuovi div
    var threeDivs = document.getElementById('three-divs');
    threeDivs.style.display = 'flex'; // Imposta il display a flex
    threeDivs.style.animation = 'fadeIn 3s forwards'; // Applica l'animazione fade-in

    // Nascondi i div dopo 30 secondi
    setTimeout(function() {
        threeDivs.style.display = 'none';
        resetOriginalContent();
    }, 28000); // 30 secondi
}

function startAudio() {
    var audio = document.getElementById("ironman-audio");
    audio.play();
}

function resetOriginalContent() {
    // Rendi di nuovo visibili countdown, motivation e pulsante con fade-in
    var countdown = document.getElementById('countdown');
    var motivation = document.getElementById('motivation');
    var playButton = document.getElementById('play-button');

    countdown.style.display = 'block';
    motivation.style.display = 'block';
    playButton.style.display = 'inline-block';

    // Aggiungi l'effetto fade-in
    countdown.classList.add('fade-in');
    motivation.classList.add('fade-in');
    playButton.classList.add('fade-in');
}