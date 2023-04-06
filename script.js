'use strict';

const btnInfo = document.querySelector('.btn--info');
const btnPrecision = document.querySelector('.btn--precision');
const btnHard = document.querySelector('.btn--hard');

let hitCount = 0;
let failCount = 0;
let woodCount = 0;
let playing = true;

btnInfo.addEventListener('click', function() {
    // Add modal to pop up with rules on the buttons when hit
    console.log('clicked');
    console.log({hitCount});
})

btnPrecision.addEventListener('click', function(){
    if (playing) {
        // woodCount;
        const dice = Math.ceil(Math.random() * 6);
        console.log(dice);

        if(hitCount < 20 && failCount < 3) {
            hitCount++;
            if(dice !== 1) {
                woodCount += dice;
            } else {
                failCount++;
            }
            console.log('HitCount:', hitCount)
            console.log('Dice:', dice);
            console.log('FailCount:', failCount);
            console.log('WoodCount:', woodCount);
        } else {
            playing = false;
            console.log('Out of hits');
        }
    }
})

btnHard.addEventListener('click', function() {
    console.log('clicked');
})