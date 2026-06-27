let score = 0;
let click = 1;
let clickps = 0;

let ACprice = 10;
let ACowned = 0;

let EBprice = 50;
let EBowned = 0;

let ACPprice = 100;
let ACPowned = 0;

let BMprice = 250;
let BMowned = 0;

const shopContainer = document.querySelector('.shop-container');

const scoreText = document.getElementById('score-text');
const ppsText = document.getElementById('pps-text');
const ppcText = document.getElementById('ppc-text');

const mainBtn = document.getElementById('mainBtn');

const ACBtn = document.getElementById('buyAC');
const EBBtn = document.getElementById('buyEB');
const ACPBtn = document.getElementById('buyACP');
const BMBtn = document.getElementById('buyBM');

function reloadText(){
    scoreText.textContent = 'Pixels: ' + Math.floor(score);
    ppsText.textContent = 'Pixels Per Second: ' + clickps;
    ppcText.textContent = 'Pixels Per Click: ' + click;
    
    ACBtn.textContent = 'Auto-Clicker (Cost: ' + ACprice + ') (Owned: ' + ACowned + ')';
    EBBtn.textContent = 'Enhanced Bitrate (Cost: ' + EBprice + ') (Owned: ' + EBowned + ')';
    ACPBtn.textContent = 'Auto-Clicker+ (Cost: ' + ACPprice + ') (Owned: ' + ACPowned + ')';
    BMBtn.textContent = 'Better Monitor (Cost: ' + BMprice + ') (Owned: ' + BMowned + ')';
}

mainBtn.addEventListener('click', () => {
    score += click;
    reloadText();
});

ACBtn.addEventListener('click', () => {
    if(score >= ACprice){
        score -= ACprice;
        clickps += 1;
        ACowned++;
        ACprice = Math.ceil(ACprice ** 1.1);
        reloadText();
    }
});

EBBtn.addEventListener('click', () => {
    if(score >= EBprice){
        score -= EBprice;
        click++;
        EBowned++;
        EBprice = Math.ceil(EBprice ** 1.11);
        reloadText();
    }
});

ACPBtn.addEventListener('click', () => {
    if(score >= ACPprice){
        score -= ACPprice;
        clickps += 5;
        ACPowned++;
        ACPprice = Math.ceil(ACPprice ** 1.15);
        reloadText();
    }
});

BMBtn.addEventListener('click', () => {
    if(score >= BMprice){
        score -= BMprice;
        click += 3;
        ACPowned++;
        BMprice = Math.ceil(BMprice ** 1.15);
        reloadText();
    }
});

shopContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    shopContainer.scrollLeft += evt.deltaY;
});

setInterval(() => {
    score += (clickps / 20);
    reloadText();
}, 50);