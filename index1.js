var name = prompt("Enter your name");
var c1 = 0,
    c2 = 0;

function fun10() {
    if (c1 == 10) {
        document.getElementById("last").innerHTML = "YOU WON!!" + String.fromCodePoint(0x1F929) + String.fromCodePoint(0x1F929);
    } else if (c2 == 10) {
        document.getElementById("last").innerHTML = "YOU LOST, BETTER LUCK NEXT TIME" + String.fromCodePoint(0x1F614) + String.fromCodePoint(0x1F614);
    }

}


function fun1() {

    if (c1 == 10 || c2 == 10) {
        window.alert("GAME OVER");
    } else {
        var x = Math.random();
        x = x * 3;
        var y = Math.floor(x);
        y++;


        if (y == 1) {
            document.getElementById("demo").innerHTML = "DRAW" + String.fromCodePoint(0x1F62E);
        } else if (y == 2) {
            document.getElementById("demo").innerHTML = "WIN" + String.fromCodePoint(0x1F600);
            c1++;
        } else {
            document.getElementById("demo").innerHTML = "LOST" + String.fromCodePoint(0x1F614);
            c2++;
        }

    }
}

function fun2() {

    if (c1 == 10 || c2 == 10) {
        window.alert("GAME OVER");
    } else {
        var x = Math.random();
        x = x * 3;
        var y = Math.floor(x);
        y++;


        if (y == 1) {
            document.getElementById("demo").innerHTML = "LOST" + String.fromCodePoint(0x1F614);
            c2++;
        } else if (y == 2) {
            document.getElementById("demo").innerHTML = "DRAW" + String.fromCodePoint(0x1F62E);
        } else {
            document.getElementById("demo").innerHTML = "WIN" + String.fromCodePoint(0x1F600);
            c1++;
        }

    }
}

function fun3() {

    if (c1 == 10 || c2 == 10) {
        window.alert("GAME OVER");
    } else {
        var x = Math.random();
        x = x * 3;
        var y = Math.floor(x);
        y++;

        if (y == 1) {
            document.getElementById("demo").innerHTML = "WIN" + String.fromCodePoint(0x1F600);
            c1++;
        } else if (y == 2) {
            document.getElementById("demo").innerHTML = "LOST" + String.fromCodePoint(0x1F614);
            c2++;
        } else {
            document.getElementById("demo").innerHTML = "DRAW" + String.fromCodePoint(0x1F62E);
        }

    }
}


function fun4() {

    document.getElementById("you").innerHTML = name;
    document.getElementById("try1").innerHTML = c1;
    document.getElementById("try2").innerHTML = c2;
}

function fun5() {
    c1 = 0;
    c2 = 0;

    document.getElementById("demo").innerHTML = "";
    document.getElementById("last").innerHTML = "";
}

function finish() {
    if (c1 > c2)
        document.getElementById("last").innerHTML = "YOU WON!!";

    else if (c1 == c2)
        document.getElementById("last").innerHTML = "YOU DREW THE GAME!!";

    else
        document.getElementById("last").innerHTML = "YOU LOST!!";

}