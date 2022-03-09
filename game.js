
const tile1 = document.querySelector('.tile1');
const tile2 = document.querySelector('.tile2');
const tile3 = document.querySelector('.tile3');
const tile4 = document.querySelector('.tile4');
const tile5 = document.querySelector('.tile5');
const tile6 = document.querySelector('.tile6');
const tile7 = document.querySelector('.tile7');
const tile8 = document.querySelector('.tile8');
const tile9 = document.querySelector('.tile9');
const tile10 = document.querySelector('.tile10');
const tile11 = document.querySelector('.tile11');
const tile12 = document.querySelector('.tile12');

const tileSecond1 = document.querySelector('.tileSecond-1');
const tileSecond2 = document.querySelector('.tileSecond-2');
const tileSecond3 = document.querySelector('.tileSecond-3');
const tileSecond4 = document.querySelector('.tileSecond-4');
const tileSecond5 = document.querySelector('.tileSecond-5');
const tileSecond6 = document.querySelector('.tileSecond-6');
const tileSecond7 = document.querySelector('.tileSecond-7');
const tileSecond8 = document.querySelector('.tileSecond-8');
const tileSecond9 = document.querySelector('.tileSecond-9');
const tileSecond10 = document.querySelector('.tileSecond-10');
const tileSecond11 = document.querySelector('.tileSecond-11');
const tileSecond12 = document.querySelector('.tileSecond-12');

let arrTileCarOne = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10, tile11, tile12, tile12, tile12];
let arrTileCarTwo = [tileSecond1, tileSecond2, tileSecond3, tileSecond4, tileSecond5, tileSecond6, tileSecond7, tileSecond8, tileSecond9, tileSecond10, tileSecond11, tileSecond12, tileSecond12, tileSecond12];


const goBtn = document.querySelector('.goBtn');
const resetBtn = document.querySelector('.resetBtn');
let carOneTile = 0;
let carSecondTile = 0;
let racing = true

function getRandomIntInclusive(min, max) {
    console.log(carOneTile)
    console.log(carSecondTile)
    min = Math.ceil(1);
    max = Math.floor(2);
    return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  }

const carRide = () => {
    let carOneSpeed = getRandomIntInclusive(1, 2);
    let carTwoSpeed = getRandomIntInclusive(1, 2);
    
    if( carOneTile >= 11 || carSecondTile >= 11) {
        racing = false;
    }

    else if(racing) {
        arrTileCarOne[carOneTile].innerHTML = '';
        arrTileCarTwo[carSecondTile].innerHTML = '';
        carOneTile += carOneSpeed;
        arrTileCarOne[carOneTile].innerHTML = '<i class="car1 fa-solid fa-car-side"></i>';
        carSecondTile += carTwoSpeed;
        arrTileCarTwo[carSecondTile].innerHTML = '<i class="car2 fa-solid fa-car-side"></i>';
    }
}

const resetRace = () => {
    let carOneTile = 0;
    let carSecondTile = 0;
    let racing = true
     
    for (i = 1; i <= 13; i++) {
        arrTileCarOne[i].innerHTML = '';
    }
    for (i = 1; i <= 13; i++) {
        arrTileCarTwo[i].innerHTML = '';
    }
    arrTileCarOne[0].innerHTML = '<i class="car1 fa-solid fa-car-side"></i>';
    arrTileCarTwo[0].innerHTML = '<i class="car2 fa-solid fa-car-side"></i>';
}


goBtn.addEventListener('click', carRide)
resetBtn.addEventListener('click', resetRace)