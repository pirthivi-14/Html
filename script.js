const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let gameOver = false;

cells.forEach(cell => {
	cell.addEventListener('click', () => {
		if (!gameOver && cell.textContent === '') {
			cell.textContent = currentPlayer;
			checkWinner();
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	});
});

resetButton.addEventListener('click', () => {
	cells.forEach(cell => {
		cell.textContent = '';
	});
	gameOver = false;
	currentPlayer = 'X';
});

function checkWinner() {
	const winningCombinations = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7]
	];

	for (const combination of winningCombinations) {
		const [a, b, c] = combination;
		if (
			cells[a - 1].textContent === currentPlayer &&
			cells[b - 1].textContent === currentPlayer &&
			cells[c - 1].textContent === currentPlayer
		) {
			gameOver = true;
			alert(`Player ${currentPlayer} wins!`);
		}
	}
}