export function samePos(pos1, pos2) {
  return pos1[0] === pos2[0] && pos1[1] === pos2[1];
}

export function adjPos(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]) === 1;
}

export function surroundPos(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) <= 1 && Math.abs(pos1[1] - pos2[1]) <= 1
}

export function updateGame(board, action, player) {
  const pos = player.round.get('position');
  const bag = player.round.get('bag');

  if (action === null) return [board, pos, bag];

  if (action.type === 'move') {
    if (adjPos(pos, action.position)) {
      return [board, action.position, bag];
    } else {
      console.error(`Invalid move: ${player.id} ${pos} -> ${action.position}`);
    }
  }

  if (action.type === 'collect') {
    const boardCopy = board.map(row => row.map(cell => cell.map(item => item)));
    const itemIndex = boardCopy[pos[0]][pos[1]].indexOf(action.item);

    if (itemIndex !== -1) {
      const bagCopy = bag.map(count => count);

      boardCopy[pos[0]][pos[1]].splice(itemIndex, 1);
      bagCopy[action.item]++;

      return [boardCopy, pos, bagCopy];
    } else {
      console.error(`Invalid collect: ${player.id} at ${pos} collects ${action.item}`);
    }
  }

  if (action.type === 'drop') {
    if (bag[action.item] > 0) {
      const boardCopy = board.map(row => row.map(cell => cell.map(item => item)));
      const bagCopy = bag.map(count => count);
      
      boardCopy[pos[0]][pos[1]].push(action.item);
      bagCopy[action.item]--;

      return [boardCopy, pos, bagCopy];
    } else {
      console.error(`Invalid drop: ${player.id} drops ${action.item}`);
    }
  }
}