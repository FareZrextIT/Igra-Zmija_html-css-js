import { getUnosDirection } from "./unos.js"

export const ZMIJA_SPEED = 5
const zmijaBody = [{ x: 11, y: 11 }]
let newSegments = 0

export function update() {
  addSegments()

  const unosDirection = getUnosDirection()
  for (let i = zmijaBody.length - 2; i >= 0; i--) {
    zmijaBody[i + 1] = { ...zmijaBody[i] }
  }

  zmijaBody[0].x += unosDirection.x
  zmijaBody[0].y += unosDirection.y
}

export function draw(gameBoard) {
  zmijaBody.forEach(segment => {
    const zmijaElement = document.createElement('div')
    zmijaElement.style.gridRowStart = segment.y
    zmijaElement.style.gridColumnStart = segment.x
    zmijaElement.classList.add('zmija')
    gameBoard.appendChild(zmijaElement)
  })
}

export function expandZmija(amount) {
  newSegments += amount
}

export function onZmija(position, { ignoreHead = false } = {}) {
  return zmijaBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

export function getZmijaHead() {
  return zmijaBody[0]
}

export function zmijaIntersection() {
  return onZmija(zmijaBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    zmijaBody.push({ ...zmijaBody[zmijaBody.length - 1] })
  }

  newSegments = 0
}