const colorBox1 = document.querySelector('.box1');
const colorBox2 = document.querySelector('.box2');
const colorBox3 = document.querySelector('.box3');
const colorBox4 = document.querySelector('.box4');
const colorBox5 = document.querySelector('.box5');
const allBox = document.querySelectorAll('.box');
const bg = document.querySelector('.container');

const handleClick = (e) => {
  const target = e.target;

  allBox.forEach(box => box.classList.remove('box-zoom'));

  if (target === colorBox1){
    bg.style.backgroundColor = '#eccc68';
    colorBox1.classList.add('box-zoom');
  }

  else if (target === colorBox2) {
    bg.style.backgroundColor = '#7bed9f';
    colorBox2.classList.add('box-zoom');
  }

  else if (target === colorBox3) {
    bg.style.backgroundColor = '#ff6b81';
    colorBox3.classList.add('box-zoom');
  }

  else if (target === colorBox4) {
    bg.style.backgroundColor = '#9AECDB';
    colorBox4.classList.add('box-zoom');
  }

  else if (target === colorBox5) {
    bg.style.backgroundColor = '#F8EFBA';
    colorBox5.classList.add('box-zoom');
  }

}


