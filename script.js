document.getElementById('sheikh-select').addEventListener('change', function() {
    var selectedSheikh = this.value;
    var audio = document.getElementById('quran-audio');
    
    if (selectedSheikh === 'sheikh1') {
        audio.src = 'adio/hasanق.mp3';
    } else if (selectedSheikh === 'sheikh2') {
        audio.src = 'adio/yaserق.mp3';
    } else if (selectedSheikh === 'sheikh3') {
        audio.src = 'adio/elminshayق.mp3';
    }
    else if (selectedSheikh === 'sheikh4') {
        audio.src = 'adio/khaled.mp3';
    }
    else if (selectedSheikh === 'sheikh5') {
        audio.src = 'adio/maher.mp3';
    }
    else if (selectedSheikh === 'sheikh6') {
        audio.src = 'adio/naser.mp3';
    }
    audio.play();
});

