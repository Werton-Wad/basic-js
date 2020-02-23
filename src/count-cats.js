module.exports = function countCats(backyard) {
  let number = 0;
  let cat = '^^';
  for (let i = 0; i < backyard.length; i++){
    for (let j = 0; j < backyard[i].length; j++){
      if (backyard[i][j] === cat) number ++;
    }
  }
  return number;
};
