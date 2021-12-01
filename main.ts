let Pacman = game.createSprite(2, 4)
let janaria = game.createSprite(4, 4)
let mamua = game.createSprite(randint(2, 2), randint(2, 2))
mamua.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 50)
janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    basic.pause(500)
    mamua.ifOnEdgeBounce()
    if (input.acceleration(Dimension.X) < 200) {
        basic.pause(200)
        mamua.move(1)
    }
    if (input.acceleration(Dimension.X) < -200) {
        mamua.move(1)
    }
})
basic.forever(function () {
    basic.pause(400)
})
