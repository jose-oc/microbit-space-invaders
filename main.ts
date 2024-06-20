input.onButtonPressed(Button.A, function () {
    Ship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Laser = game.createSprite(Ship.get(LedSpriteProperty.X), Ship.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        Laser.change(LedSpriteProperty.Y, -1)
    }
    if (Laser.isTouching(Alien)) {
        game.addScore(1)
        Alien.delete()
    }
    Laser.delete()
})
input.onButtonPressed(Button.B, function () {
    Ship.change(LedSpriteProperty.X, 1)
})
let Laser: game.LedSprite = null
let Alien: game.LedSprite = null
let Ship: game.LedSprite = null
Ship = game.createSprite(2, 4)
Alien = game.createSprite(0, 0)
Alien.set(LedSpriteProperty.Blink, 8)
game.setScore(0)
game.startCountdown(60000)
basic.forever(function () {
    Alien.move(1)
    Alien.ifOnEdgeBounce()
    basic.pause(500)
    if (Alien.isDeleted()) {
        Alien = game.createSprite(0, 0)
        Alien.set(LedSpriteProperty.Blink, 8)
    }
})
