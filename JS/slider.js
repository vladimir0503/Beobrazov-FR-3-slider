
const imgArr = document.querySelectorAll('.js-img-slider');
const mobImgArr = document.querySelectorAll('.mob_slider');
const linkArr = document.querySelectorAll('.js-link');
const btnArr = document.querySelectorAll('.js-btn');

const sity = document.getElementById('city');
const apartamentAera = document.getElementById('apartament');
const repairTime = document.getElementById('repair');

const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

const mobBtnLeft = document.getElementById('mobBtnLeft');
const mobBtnRight = document.getElementById('mobBtnRight');

let aparAera = document.getElementById('apartament_aera');

let click = 0;
let imgAnimCheck = 1;

const paragraphs = [
    {
        text1: 'Rostov-on-Don <br \/> LCD admiral',
        text2: '81 m2',
        text3: '3.5 months'
    },

    {
        text1: 'Sochi <br \/> Thieves',
        text2: '105 m2',
        text3: '4 months'
    },

    {
        text1: 'Rostov-on-Don <br \/> Patriotic',
        text2: '93 m2',
        text3: '3 months'
    }
]

function replaceTect() {
    if (click == 0) {
        sity.innerHTML = paragraphs[click].text1;
        apartamentAera.innerHTML = paragraphs[click].text2;
        repairTime.innerHTML = paragraphs[click].text3;
        sity.style.marginBottom = `${19}px`;
    } else if (click == 1) {
        sity.innerHTML = paragraphs[click].text1;
        apartamentAera.innerHTML = paragraphs[click].text2;
        repairTime.innerHTML = paragraphs[click].text3;
        sity.style.marginRight = `${15}px`;
    } else {
        sity.innerHTML = paragraphs[click].text1;
        apartamentAera.innerHTML = paragraphs[click].text2;
        repairTime.innerHTML = paragraphs[click].text3;
        sity.style.marginBottom = `${19}px`;
        
    }
}

function changeTransp(img, units) {
    img.style.opacity = `${units}`;
}

function imgAnim(arr) {
    if (click == 0) {
        if (imgAnimCheck == 1) {
            return
        }
        imgAnimCheck = 1;
        changeTransp(arr[0], 100);
        changeTransp(arr[1], 0);
        changeTransp(arr[2], 0);
    } else if (click == 1) {
        if (imgAnimCheck == 2) {
            return
        }
        imgAnimCheck = 2;
        changeTransp(arr[0], 0);
        changeTransp(arr[1], 100);
        changeTransp(arr[2], 0);
    } else if (click == 2) {
        if (imgAnimCheck == 3) {
            return
        }
        imgAnimCheck = 3;
        changeTransp(arr[0], 0);
        changeTransp(arr[1], 0);
        changeTransp(arr[2], 100);
    }
}


function btnStyle(arr, btnNum, addStyle, removeStyle) {
    for (let i = 0; i < arr.length; i++) {
        if ([i] == btnNum) {
            arr[btnNum].className = addStyle;
        } else {
            arr[i].className = removeStyle
        }
    }
}

function btnStyleChange() {
    if (click == 0) {
        btnStyle(linkArr, 0, 'added_link_style', 'reset_link_style');
        btnStyle(btnArr, 0, 'added_round_btn', 'round_btn');
    } else if (click == 1) {
        btnStyle(linkArr, 1, 'added_link_style', 'reset_link_style');
        btnStyle(btnArr, 1, 'added_round_btn', 'round_btn');
    } else {
        btnStyle(linkArr, 2, 'added_link_style', 'reset_link_style');
        btnStyle(btnArr, 2, 'added_round_btn', 'round_btn');
    }
}

function slider() {
    imgAnim(imgArr);
    replaceTect();
    btnStyleChange();
}

function clickCountUp() {
    if (click >= 2) {
        click = 0;
    } else {
        click += 1
    };
}

function clickCountDown() {
    if (click <= 0) {
        click = 2;
    } else {
        click -= 1
    };
}

function mobReplaceTect() {

    if (click == 0) {
        sity.innerHTML = paragraphs[click].text1;
        apartamentAera.innerHTML = paragraphs[click].text2;
        repairTime.innerHTML = paragraphs[click].text3;
    } else if (click == 1) {
        sity.innerHTML = paragraphs[click].text1;
        apartamentAera.innerHTML = paragraphs[click].text2;
        repairTime.innerHTML = paragraphs[click].text3;
        aparAera.style.marginLeft = `${34}px`;
    } else {
        sity.innerHTML = paragraphs[click].text1;
        apartamentAera.innerHTML = paragraphs[click].text2;
        repairTime.innerHTML = paragraphs[click].text3;
    }
}

linkArr.forEach((item, index) => item.addEventListener('click', function (event) {
    event.preventDefault();
    click = index;
    slider();
}));

btnArr.forEach((item, index) => item.addEventListener('click', function (event) {
    event.preventDefault();
    click = index;
    slider();
}));

arrowLeft.addEventListener('click', function (event) {
    event.preventDefault();
    clickCountDown();
    slider();
});

arrowRight.addEventListener('click', function (event) {
    event.preventDefault();
    clickCountUp();
    slider();
});

mobBtnLeft.addEventListener('click', function () {
    clickCountDown();
    imgAnim(mobImgArr);
    mobReplaceTect();
});

mobBtnRight.addEventListener('click', function () {
    clickCountUp();
    imgAnim(mobImgArr);
    mobReplaceTect();
})