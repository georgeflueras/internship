window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");

    pads.forEach((pad, index) => {
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 81) { //q
                document.getElementById('audio1').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 87) {//w
                document.getElementById('audio2').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 69) {//e
                document.getElementById('audio3').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 65) {//a
                document.getElementById('audio4').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 83) {//s
                document.getElementById('audio5').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 68) {//d
                document.getElementById('audio6').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 90) {//z
                document.getElementById('audio7').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 88) {//x
                document.getElementById('audio8').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 67) {//c
                document.getElementById('audio9').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 103) {//7
                document.getElementById('audio10').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 104) {//8
                document.getElementById('audio11').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 105) {//9
                document.getElementById('audio12').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 100) {//4
                document.getElementById('audio13').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 101) {//5
                document.getElementById('audio14').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 102) {//6
                document.getElementById('audio15').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 97) {//1
                document.getElementById('audio16').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 98) {//2
                document.getElementById('audio17').play();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 99) {//3
                document.getElementById('audio18').play();
            }
        });
    });
});

