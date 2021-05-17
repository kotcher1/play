document.querySelector('[data-number="4"]').classList.add('active');

let cards = document.getElementById('cardsSection');
let sectionNumber = document.getElementById('sectionNumber')
let switches = document.querySelector('.switches-block');
let blockTitle = document.getElementById('blockTitle');

let colors = {
  1: '#D699AD',
  2: '#EEBA2B',
  3: '#41C6A4',
  4: '#9787C4',
  5: '#54BBCD',
  6: '#D6B699',
  7: '#DD7F8E',
  8: '#96BA73',
  9: '#B6A39B',
}

let percents = {
  1: 25,
  2: 15,
  3: 18,
  4: 15,
  5: 5,
  6: 40,
  7: 15,
  8: 18,
  9: 15,
}

for (i = 1; i < 10; i++) {
  document.getElementById(`percent${i}`).textContent = `${percents[i]}%`;
  document.getElementById(`segment${i}`).setAttribute('stroke-dasharray', `${percents[i] * 442.74 / 100} ${(100 - percents[i]) * 442.74 / 100}`);
}

document.body.style.setProperty('--color', colors[4]);

let activeElement = document.querySelector('.active');
let targetCard;

cards.addEventListener('click', (e) => {
  targetCard = e.target;
  while(targetCard !== document.querySelector('body') && !targetCard.dataset.number) {
    targetCard = targetCard.parentElement;
  }
  if(targetCard.dataset.number) {
    activeElement.classList.remove('active');
    document.body.style.setProperty('--color', colors[targetCard.dataset.number]);
    targetCard.classList.add('active');
    activeElement = targetCard;
    sectionNumber.textContent = `${targetCard.dataset.number}.`;
    blockTitle.textContent = document.getElementById(`title${targetCard.dataset.number}`).textContent;
  } 
})

let activeSwitch = document.querySelector('.switch.active');
let activeChart = document.querySelector('.canvas.active');
let targetSwitch;

switches.addEventListener('click', (e) => {
  targetSwitch = e.target;
  while(targetSwitch !== document.querySelector('body') && !targetSwitch.dataset.number) {
    targetSwitch = targetSwitch.parentElement;
  }
  if(targetSwitch.dataset.number) {
    activeSwitch.classList.remove('active');
    targetSwitch.classList.add('active');
    activeSwitch = targetSwitch;
    activeChart.classList.remove('active');
    activeChart = document.getElementById(`myChart${targetSwitch.dataset.number}`);
    activeChart.classList.add('active');
  } 
})