
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result;

  if (!matrix || !matrix.length) {
    result = [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if ((i+2) % 2 !== 0) {
        matrix[i].reverse()
      }
    }

    result = matrix.join().split(',');
  }

  return result
}
