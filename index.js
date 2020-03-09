const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  array.find(function(s) {
    s.result === "W"
    return s.year
  })
}