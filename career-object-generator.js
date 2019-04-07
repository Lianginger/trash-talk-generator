
function careerObjectGenerator(career) {
  const careerObject = {
    '工程師': false,
    '設計師': false,
    '創業家': false
  }
  careerObject[career] = true
  return careerObject
}

module.exports = careerObjectGenerator