'use strict';

const btnInfo = document.querySelector('.btn--info');
const btnPrecision = document.querySelector('.btn--precision');
const btnHard = document.querySelector('.btn--hard');
const wood = document.getElementById('wood');
const hits = document.getElementById('hits');
const fails = document.getElementById('fails');


let hitCount = 0;
let failCount = 0;
let woodCount = 0;
let playing = true;

const success = () => {
    hitCount++;
    hits.textContent = hitCount;
    wood.textContent = woodCount;
}

const failing = () => {
    hitCount++;
    hits.textContent = hitCount;
    failCount++;
    fails.textContent = failCount;
}

btnInfo.addEventListener('click', function() {
    // Add modal to pop up with rules on the buttons when hit
    console.log('clicked');
    console.log({hitCount});
})

btnPrecision.addEventListener('click', function(){
    if (playing) {
        const dieValue = Math.ceil(Math.random() * 6);

        if(hitCount < 20 && failCount < 3) {
            if(dieValue !== 1) {
                woodCount += dieValue;
                success();
            } else {
                failing();
            }
            console.log('HitCount:', hitCount)
            console.log('Dice:', dieValue);
            console.log('FailCount:', failCount);
            console.log('WoodCount:', woodCount);
        } else {
            playing = false;
            console.log('Out of hits');
        }
    }
})

// Add special resources
// roll 1000
// convert 1000 rolls to be equivalent to a 20
// high rolls out of a thousand will give special resource

btnHard.addEventListener('click', function() {
    let dieValue = 0;
    
    if(playing) {
        const dice = Math.ceil(Math.random() * 1000);
        if (dice <= 300) {
            dieValue = 1;
        } else if(dice > 300 && dice <= 350) {
            dieValue = 7; 
        } else if(dice > 350 && dice <= 400) {
            dieValue = 8;
        } else if(dice > 400 && dice <= 450) {
            dieValue = 9;
        } else if(dice > 450 && dice <= 500) {
            dieValue = 10;
        } else if(dice > 500 && dice <= 550) {
            dieValue = 11;
        } else if(dice > 550 && dice <= 600) {
            dieValue = 12;
        } else if(dice > 600 && dice <= 650) {
            dieValue = 13;
        } else if(dice > 650 && dice <= 700) {
            dieValue = 14;
        } else if(dice > 700 && dice <= 750) {
            dieValue = 15;
        } else if(dice > 750 && dice <= 800) {
            dieValue = 16;
        } else if(dice > 800 && dice <= 850) {
            dieValue = 17;
        } else if(dice > 850 && dice <= 900) {
            dieValue = 18;
        } else if(dice > 900 && dice <= 950) {
            dieValue = 19;
        } else if(dice > 950 && dice <= 980) {
            dieValue = 20;
        } else {
            dieValue = 21;
        }
        
        if(hitCount < 20 && failCount < 3) {
            if(dieValue === 21) {
                woodCount += dieValue;
                success();
                console.log('RARE RESOURCE OBTAINED!');
            } else if(dieValue > 6 && dieValue <= 20){
                woodCount += dieValue;
                success();
            } else {
                failing();
            }

              console.log(`
      DEBUG INFO:
          hitCount: ${hitCount},
          dieValue: ${dieValue},
          failCount: ${failCount},
          woodCount: ${woodCount}
      `);
        
            
        } else {
            playing = false;
            console.log('Out of hits');
        }
    }
});