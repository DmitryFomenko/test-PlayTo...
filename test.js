'use strict';

function searchRelatedGroup(coordCard, board) {
  let [row, ceil] = coordCard;
  const cardValue = board[row][ceil];
  let notDoneScan = true;
  board[row][ceil] = '';
  let direction = 'down';
  let count = 0;
  let prevCount = 0;

  while (notDoneScan) {
    board[row].forEach((_, index) => {
      if (board[row][index] === '') {
        if (row - 1 >= 0 && board[row - 1][index] === cardValue) {
          board[row - 1][index] = '';
          count++;
        }

        if (row + 1 < 7 && board[row + 1][index] === cardValue) {
          board[row + 1][index] = '';
          count++;
        }

        if (board[row][index - 1] === cardValue) {
          board[row][index - 1] = '';
          count++;
        }

        if (board[row][index + 1] === cardValue) {
          board[row][index + 1] = '';
          count++;
        }
      }
    });

    if (count === prevCount && row === 0) {
      notDoneScan = false;
    }

    if (row === board.length - 1) {
      direction = 'up';
    }

    if (row === 0) {
      direction = 'down';
      prevCount = count;
    }

    if (direction === 'down') {
      row++;
    } else {
      row--;
    };
  }
  return board;
}

const gameBoard = [
  ['Clubs', 'Spades', 'Clubs', 'Diamonds', 'Clubs', 'Spades'],
  ['Spades', 'Clubs', 'Clubs', 'Diamonds', 'Diamonds', 'Clubs'],
  ['Spades', 'Clubs', 'Clubs', 'Diamonds', 'Diamonds', 'Spades'],
  ['Clubs', 'Spades', 'Spades', 'Spades', 'Spades', 'Spades'],
  ['Spades', 'Clubs', 'Clubs', 'Clubs', 'Hearts', 'Spades'],
  ['Clubs', 'Hearts', 'Clubs', 'Clubs', 'Diamonds', 'Clubs'],
  ['Spades', 'Hearts', 'Hearts', 'Spades', 'Spades', 'Spades'],
];

searchRelatedGroup([3, 2], gameBoard);
