const MREZA_SIZE = 21

export function randomMrezaPosition() {
  return {
    x: Math.floor(Math.random() * MREZA_SIZE) + 1,
    y: Math.floor(Math.random() * MREZA_SIZE) + 1,
  }
}

export function outsideMreza(position) {
  return (
    position.x < 1 || position.x > MREZA_SIZE ||
    position.y < 1 || position.y > MREZA_SIZE 

    )
}

    
