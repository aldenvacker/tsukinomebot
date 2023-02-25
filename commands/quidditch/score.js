let score1 = 0;

module.exports.addScore1 = function(value) {
  score1 += value;
};

module.exports.getScore1 = function() {
  return score1;
};

let score2 = 0;

module.exports.addScore2 = function(value) {
  score2 += value;
};

module.exports.getScore2 = function() {
  return score2;
};
