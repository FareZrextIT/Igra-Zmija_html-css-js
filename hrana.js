import { onZmija, expandZmija } from './zmija.js'
import { randomMrezaPosition } from './mreza.js'
let hrana = getRandomHranaPosition()
const EXPANSION_RATE = 5
export function update() {
  if (onZmija(hrana)) {
    expandZmija(EXPANSION_RATE)
    hrana = getRandomHranaPosition()
  }
}
export function draw(gameBoard) {
  const hranaElement = document.createElement('div')
  hranaElement.style.mrezaRowStart = hrana.y
  hranaElement.style.mrezaColumnStart = hrana.x
  hranaElement.classList.add('hrana')
  gameBoard.appendChild(hranaElement)
}
function getRandomHranaPosition() {
  let newHranaPosition
  while (newHranaPosition == null || onZmija(newHranaPosition)) {
    newHranaPosition = randomMrezaPosition()
  }
  return newHranaPosition
}
