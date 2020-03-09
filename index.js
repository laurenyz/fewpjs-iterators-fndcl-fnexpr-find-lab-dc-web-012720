const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  array.find(function(s) {
    s.result === "W"
    })
}

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}