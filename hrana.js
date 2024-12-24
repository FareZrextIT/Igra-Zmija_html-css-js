import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
let hrana = getRandomHranaPosition()
const EXPANSION_RATE = 5
export function update() {
  if (onSnake(hrana)) {
    expandSnake(EXPANSION_RATE)
    hrana = getRandomHranaPosition()
  }
}
export function draw(gameBoard) {
  const hranaElement = document.createElement('div')
  hranaElement.style.gridRowStart = hrana.y
  hranaElement.style.gridColumnStart = hrana.x
  hranaElement.classList.add('hrana')
  gameBoard.appendChild(hranaElement)
}
function getRandomHranaPosition() {
  let newHranaPosition
  while (newHranaPosition == null || onSnake(newHranaPosition)) {
    newHranaPosition = randomGridPosition()
  }
  return newHranaPosition
}
