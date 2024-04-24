let nextChristmas = new Date('2024-12-25 00:00');
function updateParagraph() {
let now = new Date();
let seconds = (nextChristmas.getTime() - now.getTime()) / 1000;
document.getElementById('next-christmas').innerText = 
  '次のクリスマスまで後' + seconds + '秒。';
}
setInterval(updateParagraph, 10);