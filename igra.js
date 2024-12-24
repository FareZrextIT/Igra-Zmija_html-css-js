import { update as updateZmija, draw as drawZmija, ZMIJA_SPEED, getZmijaHead, zmijaIntersection } from './zmija.js'
import { update as updateFood, draw as drawFood } from './hrana.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (confirm('Izgubio/la si. Pritisni ok da restartas')) {
      window.location = '/'
    }
    return
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / ZMIJA_SPEED) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateZmija()
  updateHrana()
  checkSmrt()
}

function draw() {
  gameBoard.innerHTML = ''
  drawZmija(gameBoard)
  drawHrana(gameBoard)
}

function checkSmrt() {
  gameOver = outsideGrid(getZmijaHead()) || zmijaIntersection()
}
