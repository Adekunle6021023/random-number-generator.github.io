
function generate () {
    var display = document.getElementById('display');
    var min = document.getElementById('input-min').value;
    var max = document.getElementById('input-max').value;

    // MAIN GENERATOR FUNCTION

    function randNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //THIS FUNCTION SPONTANEOUSLY GENERATES RANDOM INPUT WHEN NO USER INPUT IS PROVIDED
    function spontaneous () {
            var min = () => {
                var slop1 = [0,1,2,3,4,5,6,7,8,9];
                var slop2 = [0,1,2,3,4,5,6,7,8,9];
                var grt1 =  (slop1[Math.floor(Math.random() * 10)]) * (slop2[Math.floor(Math.random() * 10)]) ;
                var grt2 =  (slop1[Math.floor(Math.random() * 10)]) + (slop2[Math.floor(Math.random() * 10)]) ;
                var grt3 =  (slop1[Math.floor(Math.random() * 10)]) - (slop2[Math.floor(Math.random() * 10)]) ;
                var grt4 =  (slop1[Math.floor(Math.random() * 10)]) / (slop2[Math.floor(Math.random() * 10)]) ;
                var grt5 =  (slop1[Math.floor(Math.random() * 10)]) ** (slop2[Math.floor(Math.random() * 10)]) ;
                var randGrt = [grt1, grt2, grt3, grt4, grt5];
                return randGrt[Math.floor(Math.random() * 5)];
            }

            var max = () => {
                var slop1 = [0,1,2,3,4,5,6,7,8,9];
                var slop2 = [0,1,2,3,4,5,6,7,8,9];
                var grt1 =  (slop1[Math.floor(Math.random() * 10)]) * (slop2[Math.floor(Math.random() * 10)]) ;
                var grt2 =  (slop1[Math.floor(Math.random() * 10)]) + (slop2[Math.floor(Math.random() * 10)]) ;
                var grt3 =  (slop1[Math.floor(Math.random() * 10)]) - (slop2[Math.floor(Math.random() * 10)]) ;
                var grt4 =  (slop1[Math.floor(Math.random() * 10)]) / (slop2[Math.floor(Math.random() * 10)]) ;
                var grt5 =  (slop1[Math.floor(Math.random() * 10)]) ** (slop2[Math.floor(Math.random() * 10)]) ;
                var randGrt = [grt1, grt2, grt3, grt4, grt5];
                return randGrt[Math.floor(Math.random() * 5)];
            }
        var random = randNum(min(), max());
        display.innerHTML = random;
    }

    //STATEMENT TO DETERMINE IF THERE IS USER INPUT

    if (min == '' && max == '') {
        spontaneous();
    } else {
        var random = randNum(min, max);
        display.innerHTML = random;
    }
}

    //CLICK EVENT LISTENER

var clicker = document.getElementById('clicker');
clicker.addEventListener('click', generate, false);
