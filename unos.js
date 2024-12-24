let unosDirection = { x: 0, y: 0 }
let lasUnosDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastUnosDirection.y !== 0) break
      unosDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastUnosDirection.y !== 0) break
      unosDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastUnoDirection.x !== 0) break
      unosDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastUnosDirection.x !== 0) break
      unosDirection = { x: 1, y: 0 }
      break
  }
})

export function getUnosDirection() {
  lastUnosDirection = unosDirection
  return unosDirection
}