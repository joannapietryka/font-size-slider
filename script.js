const p = document.querySelector('#display p');
const bar = document.querySelector('.bar');
const overlay = bar.querySelector('.bar-overlay');
const px = bar.querySelector('.bar-overlay p');

function handleMove(e) {
    const x = e.pageX - this.offsetLeft;
    const percent = x / this.offsetWidth;
    const min = 12;
    const max = 100;
    const width = Math.round(percent * 100) + '%';
    const fontSize = percent * (max - min) + min;
    const fontSizeFixed = fontSize.toFixed() + 'px';
    overlay.style.width = width;
    px.textContent = fontSizeFixed;
    p.style.fontSize = fontSizeFixed;
    if(fontSize > 22) {
        px.style.float = "right";
    }
    else {
        px.style.float = "left";
    }
  }

bar.addEventListener('mousemove', handleMove);
