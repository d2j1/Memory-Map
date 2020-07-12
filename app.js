var img_tag_access = document.querySelectorAll(".card-img-tag");
var upadate_score = document.getElementById("score");
document.getElementById("reset").addEventListener("click", function () {
    location.reload();
})
var images = [],
    impdata = [],
    temparray = [],
    Score = 0,
    ctct = 0;
var num1 = 0,
    num2 = 0,
    num3 = 0,
    num4 = 0,
    num5 = 0,
    a;
for (var i = 0; i < 70; i++) {
    ctct++;
    if (images.length < 21) {
        a = Math.floor(Math.random() * 6);
        if (a == 0)
            continue;
        else {
            switch (a) {
                case 1:
                    num1++;
                    if (num1 <= 4) {
                        images.push(a);
                    }
                    break;
                case 2:
                    num2++;
                    if (num2 <= 4) {
                        images.push(a);
                    }
                    break;
                case 3:
                    num3++;
                    if (num3 <= 4) {
                        images.push(a);
                    }
                    break;
                case 4:
                    num4++;
                    if (num4 <= 4) {
                        images.push(a);
                    }
                    break;
                case 5:
                    num5++;
                    if (num5 <= 4) {
                        images.push(a);
                    }
                    break;
            }
        }

    }
}

console.log(images, ctct);
placeimages();
setTimeout(hideImages, 5000);

img_tag_access[0].addEventListener("click", function () {
    var temp = 0;
    takeInput(temp);
});
img_tag_access[1].addEventListener("click", function () {
    var temp = 1;
    takeInput(temp);
});
img_tag_access[2].addEventListener("click", function () {
    var temp = 2;
    takeInput(temp);
});
img_tag_access[3].addEventListener("click", function () {
    var temp = 3;
    takeInput(temp);
});
img_tag_access[4].addEventListener("click", function () {
    var temp = 4;
    takeInput(temp);
});
img_tag_access[5].addEventListener("click", function () {
    var temp = 5;
    takeInput(temp);
});
img_tag_access[6].addEventListener("click", function () {
    var temp = 6;
    takeInput(temp);
});
img_tag_access[7].addEventListener("click", function () {
    var temp = 7;
    takeInput(temp);
});
img_tag_access[8].addEventListener("click", function () {
    var temp = 8;
    takeInput(temp);
});
img_tag_access[9].addEventListener("click", function () {
    var temp = 9;
    takeInput(temp);
});
img_tag_access[10].addEventListener("click", function () {
    var temp = 10;
    takeInput(temp);
});
img_tag_access[11].addEventListener("click", function () {
    var temp = 11;
    takeInput(temp);
});
img_tag_access[12].addEventListener("click", function () {
    var temp = 12;
    takeInput(temp);
});
img_tag_access[13].addEventListener("click", function () {
    var temp = 13;
    takeInput(temp);
});
img_tag_access[14].addEventListener("click", function () {
    var temp = 14;
    takeInput(temp);
});
img_tag_access[15].addEventListener("click", function () {
    var temp = 15;
    takeInput(temp);
});
img_tag_access[16].addEventListener("click", function () {
    var temp = 16;
    takeInput(temp);
});
img_tag_access[17].addEventListener("click", function () {
    var temp = 17;
    takeInput(temp);
});
img_tag_access[18].addEventListener("click", function () {
    var temp = 18;
    takeInput(temp);
});
img_tag_access[19].addEventListener("click", function () {
    var temp = 19;
    takeInput(temp);
});


function takeInput(temp) {
    var win_or_not, toset;
    if (temparray.length <= 4 && impdata[temp].won == false) {
        temparray.push(impdata[temp]);
        showImage(temp);

        setTimeout(function () {
            if (temparray.length == 4) {
                win_or_not = compareCards();
                if (win_or_not) {
                    toset = temparray[0].key;
                    impdata[toset].won = true;
                    toset = temparray[1].key;
                    impdata[toset].won = true;
                    toset = temparray[2].key;
                    impdata[toset].won = true;
                    toset = temparray[3].key;
                    impdata[toset].won = true;
                    Score += 100;
                    upadate_score.innerHTML = Score;
                    temparray = [];
                    
                } else {

                    closeImage(temparray[0].key);
                    closeImage(temparray[1].key);
                    closeImage(temparray[2].key);
                    closeImage(temparray[3].key);
                    temparray = [];
                    
                }
            }
        }, 2000);

    }
}



function placeimages() {
    var obj;

    for (let i = 0; i < images.length; i++) {

        switch (images[i]) {
            case 1:
                obj = {
                    key: i,
                    id: 1,
                    src: "./assets/spade.svg",
                    won: false,
                }
                impdata.push(obj);
                img_tag_access[i].setAttribute("src", "./assets/spade.svg");
                break;
            case 2:
                obj = {
                    key: i,
                    id: 2,
                    src: "./assets/diamond.svg",
                    won: false,
                }
                impdata.push(obj);
                img_tag_access[i].setAttribute("src", "./assets/diamond.svg");
                break;
            case 3:
                obj = {
                    key: i,
                    id: 3,
                    src: "./assets/clubs.svg",
                    won: false,
                }
                impdata.push(obj);
                img_tag_access[i].setAttribute("src", "./assets/clubs.svg");
                break;
            case 4:
                obj = {
                    key: i,
                    id: 4,
                    src: "./assets/heart.svg",
                    won: false,
                }
                impdata.push(obj);
                img_tag_access[i].setAttribute("src", "./assets/heart.svg");
                break;
            case 5:
                obj = {
                    key: i,
                    id: 5,
                    src: "./assets/infinity.svg",
                    won: false,
                }
                impdata.push(obj);
                img_tag_access[i].setAttribute("src", "./assets/infinity.svg");
                break;
        }

    }
}

function hideImages() {
    for (let i = 0; i < images.length; i++) {
        img_tag_access[i].setAttribute("src", "./assets/back.svg");
    }

}

function showImage(position) {

    img_tag_access[position].setAttribute("src", impdata[position].src);
}

function closeImage(position) {
    img_tag_access[position].setAttribute("src", "./assets/back.svg");

}

function compareCards() {
    if (temparray[0].id == temparray[1].id && temparray[1].id == temparray[2].id && temparray[2].id == temparray[3].id)
        return true;
    else
        return false;
}
