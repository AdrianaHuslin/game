input.onButtonPressed(Button.A, function () {
    x.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    x.change(LedSpriteProperty.X, 1)
})
let x: game.LedSprite = null
game.setScore(0)
game.setLife(3)
x = game.createSprite(2, 4)
let y = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (y.isTouching(x)) {
        game.addScore(1)
        game.addLife(1)
    }
    if (y.get(LedSpriteProperty.Y) < 4) {
        y.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    } else if (false) {
    	
    } else {
        y.set(LedSpriteProperty.X, randint(0, 4))
        y.set(LedSpriteProperty.Y, 0)
        game.removeLife(1)
    }
})
