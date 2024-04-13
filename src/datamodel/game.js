export function calculateGameStatus(board) {
    // Check for a winner
    const winner = checkWinner(board);
    if (winner === 'X' || winner === 'O') {
        return winner + ' wins';
    }

    // Check for a tie
    if (board.every(cell => cell !== '')) {
        return 'It is a tie';
    }

    // Determine whose turn it is
    const countX = board.filter(cell => cell === 'X').length;
    const countO = board.filter(cell => cell === 'O').length;
    return countX === countO ? 'X to play' : 'O to play';
}

export function checkWinner(board) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i * 3] === board[i * 3 + 1] && board[i * 3 + 1] === board[i * 3 + 2] && board[i * 3] !== '') {
            return board[i * 3];
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[i] === board[i + 3] && board[i + 3] === board[i + 6] && board[i] !== '') {
            return board[i];
        }
    }

    // Check diagonals
    if ((board[0] === board[4] && board[4] === board[8] && board[0] !== '') ||
        (board[2] === board[4] && board[4] === board[6] && board[2] !== '')) {
        return board[4];
    }

    return ''; // No winner
}

