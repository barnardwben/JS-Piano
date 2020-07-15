const cKey = document.querySelector('.cKey');
const dbKey = document.querySelector('.Db')
const dKey = document.querySelector('.D');
const ebKey = document.querySelector('.Eb')
const eKey = document.querySelector('.E');
const fKey = document.querySelector('.F');
const gbKey = document.querySelector('.Gb')
const gKey = document.querySelector('.G');
const abKey = document.querySelector('.Ab')
const aKey = document.querySelector('.A');
const bbKey = document.querySelector('.Bb')
const bKey = document.querySelector('.B');
const c2Key = document.querySelector('.C2');
const db2Key = document.querySelector('.Db2')
const d2Key = document.querySelector('.D2');
const eb2Key = document.querySelector('.Eb2');
const e2Key = document.querySelector('.E2');

let arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];



document.addEventListener('keydown', playNote);

function playNote() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let rNum = Math.floor(Math.random() * arr.length);
    hex += arr[rNum];
  }


  if (event.keyCode === 65) {
    let audio = new Audio('pnotes/c1.wav');
    audio.play();
    cKey.style.background = hex;
  } else if (event.keyCode === 87) {
    let audio = new Audio('pnotes/db.wav');
    audio.play();
    dbKey.style.background = hex;
  } else if (event.keyCode === 83) {
    let audio = new Audio('pnotes/d.wav');
    audio.play();
    dKey.style.background = hex;
  } else if (event.keyCode === 69) {
    let audio = new Audio('pnotes/eb.wav');
    audio.play();
    ebKey.style.background = hex;
  } else if (event.keyCode === 68) {
    let audio = new Audio('pnotes/e.wav');
    audio.play();
    eKey.style.background = hex;
  } else if (event.keyCode === 70) {
    let audio = new Audio('pnotes/f.wav');
    audio.play();
    fKey.style.background = hex;
  } else if (event.keyCode === 84) {
    let audio = new Audio('pnotes/gb.wav');
    audio.play();
    gbKey.style.background = hex;
  } else if (event.keyCode === 71) {
    let audio = new Audio('pnotes/g.wav');
    audio.play();
    gKey.style.background = hex;
  } else if (event.keyCode === 89) {
    let audio = new Audio('pnotes/ab.wav');
    audio.play();
    abKey.style.background = hex;
  } else if (event.keyCode === 72) {
    let audio = new Audio('pnotes/a.wav');
    audio.play();
    aKey.style.background = hex;
  } else if (event.keyCode === 85) {
    let audio = new Audio('pnotes/bb.wav');
    audio.play();
    bbKey.style.background = hex;
  } else if (event.keyCode === 74) {
    let audio = new Audio('pnotes/b.wav');
    audio.play();
    bKey.style.background = hex;
  } else if (event.keyCode === 75) {
    let audio = new Audio('pnotes/c2.wav');
    audio.play();
    c2Key.style.background = hex;
  } else if (event.keyCode === 79) {
    let audio = new Audio('pnotes/db2.wav');
    audio.play();
    db2Key.style.background = hex;
  } else if (event.keyCode === 76) {
    let audio = new Audio('pnotes/d2.wav');
    audio.play();
    d2Key.style.background = hex;
  } else if (event.keyCode === 80) {
    let audio = new Audio('pnotes/eb2.wav');
    audio.play();
    eb2Key.style.background = hex;
  } else if (event.keyCode === 186) {
    let audio = new Audio('pnotes/e2.wav');
    audio.play();
    e2Key.style.background = hex;
  }
}