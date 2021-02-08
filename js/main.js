let cells = document.querySelectorAll('.cell');
let gamerChange = document.querySelector('.gamerNumber');
let winner = document.querySelector('.gamer');
let gamer = 2;
let counter = 9;
let btn = document.querySelector('.btn');

for (let cell of cells) {
  cell.onclick = function () {
    if (cell.textContent === '' && counter !== -1) {
      if (gamer%2 === 0) {
        cell.textContent = 'X';
        gamer++;
        gamerChange.textContent = '0';
        counter--;
      } else {
        cell.textContent = '0';
        gamerChange.textContent = 'X';
        gamer++;
        counter--;
      }
    }
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X'|| cells[3].textContent == 'X' && cells[4].textContent == 'X' && cells[5].textContent == 'X' || cells[0].textContent == 'X' && cells[7].textContent == 'X' && cells[8].textContent == 'X' || cells[0].textContent == 'X' && cells[3].textContent == 'X' && cells[6].textContent == 'X' || cells[1].textContent == 'X' && cells[4].textContent == 'X' && cells[7].textContent == 'X' || cells[2].textContent == 'X' && cells[5].textContent == 'X' && cells[8].textContent == 'X' || cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X' || cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X') {
      winner.textContent = 'Победитель игрок Х';
      counter = -1;
    }
    if (cells[0].textContent == '0' && cells[1].textContent == '0' && cells[2].textContent == '0' || cells[3].textContent == '0' && cells[4].textContent == '0' && cells[5].textContent == '0' || cells[0].textContent == '0' && cells[7].textContent == '0' && cells[8].textContent == '0' || cells[0].textContent == '0' && cells[3].textContent == '0' && cells[6].textContent == '0' || cells[1].textContent == '0' && cells[4].textContent == '0' && cells[7].textContent == '0' || cells[2].textContent == '0' && cells[5].textContent == '0' && cells[8].textContent == '0' || cells[0].textContent == '0' && cells[4].textContent == '0' && cells[8].textContent == '0' || cells[2].textContent == '0' && cells[4].textContent == '0' && cells[6].textContent == '0') {
      winner.textContent = 'Победитель игрок 0';
      counter = -1;
    }
    if (counter === 0) {
      winner.textContent = 'Победителя нет. Ничья';
    }
  }

  btn.onclick = function () {
    window.location.reload();
  }
}


