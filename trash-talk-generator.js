// Define the task & phrase
const task = {
  '工程師': ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  '設計師': ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  '創業家': ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']

// Functions
function generateRandomItem(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function trashTalkGenerator(career) {
  const targetCareer = career.target
  const targetTask = generateRandomItem(task[targetCareer])
  const targetPhrase = generateRandomItem(phrase)
  return `身為一個${targetCareer}，${targetTask}，${targetPhrase}吧！`
}

module.exports = trashTalkGenerator