'use strict';

const btnOpen = document.querySelector('.open-rules');
const btnClose = document.querySelector('.close-rules');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnPrecision = document.querySelector('.btn--precision');
const btnHard = document.querySelector('.btn--hard');
const btnRules = document.querySelector('.open-rules');

const wood = document.getElementById('wood');
const hits = document.getElementById('hits');
const fails = document.getElementById('fails');
const rewardItems = document.getElementById('rewardItems');
const outOfHits = document.querySelector('.outOfHits');

let hitCount = 0;
let failCount = 0;
let woodCount = 0;
let playing = true;
let rewardsArray = [];

// Need to make sure it displays correctly if 2 or more items are received
const rare = [
  'Mark of Ent',
  'Ancient Resin',
  'Orphaned baby OwlBear',
  'Orphaned Baby Ent',
];

btnRules.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnClose.addEventListener('click', function () {
  closeRules();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeRules();
  }
});

const closeRules = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const rareResource = () => {
  const item = rare[Math.floor(Math.random() * rare.length)];
  rewardsArray.push(item);

  // There has to be an easier way to do this. Overthinking it?
  if (rewardsArray.length === 1) {
    rewardItems.textContent = `${rewardsArray[0]}`;
  } else if (rewardsArray.length === 2) {
    rewardItems.textContent = `${rewardsArray[0]}, ${rewardsArray[1]}`;
  }
};

const success = () => {
  hitCount++;
  hits.textContent = hitCount;
  wood.textContent = woodCount;
};

const failing = () => {
  hitCount++;
  hits.textContent = hitCount;
  failCount++;
  fails.textContent = failCount;
};

const zeroHits = () => {
  outOfHits.classList.remove('hidden');
};

btnPrecision.addEventListener('click', function () {
  let dieValue = 0;
  if (playing) {
    if (hitCount < 20 && failCount < 3) {
      const dice = Math.ceil(Math.random() * 6000);
      if (dice <= 1000) {
        dieValue = 1;
        failing();
      } else if (dice > 1000 && dice <= 2000) {
        dieValue = 2;
        woodCount += dieValue;
        success();
      } else if (dice > 2000 && dice <= 3000) {
        dieValue = 3;
        woodCount += dieValue;
        success();
      } else if (dice > 3000 && dice <= 4000) {
        dieValue = 4;
        woodCount += dieValue;
        success();
      } else if (dice > 4000 && dice <= 5000) {
        dieValue = 5;
        woodCount += dieValue;
        success();
      } else if (dice > 5000 && dice <= 5600) {
        dieValue = 6;
        woodCount += dieValue;
        success();
      } else if (dice > 5600 && dice <= 5900) {
        dieValue = 7;
        woodCount += 6;
        success();
      } else if (dice > 5900 && dice <= 5950) {
        dieValue = 8;
        woodCount += 6;
        success();
      } else if (dice > 5950 && dice <= 5980) {
        dieValue = 9;
        woodCount += 6;
        success();
      } else if (dice > 5980 && dice <= 5995) {
        dieValue = 10;
        woodCount += 6;
        success();
      } else {
        dieValue = 11;
        woodCount += 6;
        success();
      }
    } else {
      playing = false;
      zeroHits();
      console.log('Out of hits');
    }
  }
});

// Add special resources
// roll 1000
// convert 1000 rolls to be equivalent to a 20
// high rolls out of a thousand will give special resource

btnHard.addEventListener('click', function () {
  if (playing) {
    const dice = Math.ceil(Math.random() * 20);
    if (hitCount < 20 && failCount < 3) {
      if (dice <= 5) {
        failing();
      } else {
        woodCount += dice;
        success();
      }
    } else {
      playing = false;
      zeroHits();
      console.log('Out of hits');
    }
  }
});
