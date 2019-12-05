namespace SpriteKind {
    export const computer = SpriteKind.create()
    export const end = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 1 f 1 1 1 1 f f . . . . 
. . f 1 1 1 f 1 1 1 1 f f . . . 
. . f 1 1 1 1 f f 1 1 1 f . . . 
. f 1 1 1 1 1 1 1 f f f f . . . 
. f 1 1 f f f f f 1 1 1 f . . . 
. f f f 1 1 1 1 f f f f f f . . 
. f 1 1 1 1 f 1 1 1 1 1 f f . . 
. . f 1 1 1 f 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 f f 1 f f . . . 
. . . f 1 1 f f 1 1 f . . . . . 
. . . f 1 1 f 1 1 1 f . . . . . 
. . f f 1 1 f 1 1 f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`, img`
. . . . . f f f f f f . . . . . 
. . . . f 1 f 1 1 1 1 f f . . . 
. . . f 1 1 1 f 1 1 1 1 f f . . 
. . . f 1 1 1 1 f f 1 1 1 f . . 
. . f 1 1 1 1 1 1 1 f f f f . . 
. . f 1 1 f f f f f 1 1 1 f . . 
. . f f f 1 1 1 1 f f f f f f . 
. . f 1 1 1 1 f 1 1 1 1 1 f f . 
. . f f 1 1 1 f 1 1 1 1 1 1 f . 
. f 1 1 f 1 1 1 1 1 1 1 1 f . . 
. f 1 1 f f f f 1 1 1 f f . . . 
. f 1 1 f 1 1 f 1 1 1 f . . . . 
. . f 1 f 1 1 f 1 1 1 f . . . . 
. . . f f 1 1 f 1 1 1 f . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . . f f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 1 f 1 1 1 1 f f . . . 
. . . f 1 1 1 f 1 1 1 1 f f . . 
. . . f 1 1 1 1 f f 1 1 1 f . . 
. . f 1 1 1 1 1 1 1 f f f f . . 
. . f 1 1 f f f f f 1 1 1 f . . 
. . f f f 1 1 1 1 f f f f f f . 
. . f 1 1 1 1 f 1 1 1 1 1 f f . 
. . . f 1 1 1 f 1 1 1 1 1 1 f . 
. . . . f 1 1 1 1 f f f f f . . 
. . . . f 1 1 f f 1 1 f . . . . 
. . . . f 1 1 f 1 1 1 f . . . . 
. . . f f 1 1 f 1 1 f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 1 f 1 1 1 1 f f . . . 
. . . f 1 1 1 f 1 1 1 1 f f . . 
. . . f 1 1 1 1 f f 1 1 1 f . . 
. . f 1 1 1 1 1 1 1 f f f f . . 
. . f 1 1 f f f f f 1 1 1 f . . 
. . f f f 1 1 1 1 f f f f f f . 
. . f 1 1 1 1 f 1 1 1 1 1 f f . 
. . f f 1 1 1 f 1 1 1 1 1 1 f . 
. f 1 1 f 1 1 1 1 1 1 1 f f . . 
. f 1 1 f f f f 1 1 1 f . . . . 
. f 1 1 f 1 1 f 1 1 1 f . . . . 
. . f 1 f 1 1 f 1 1 1 f f . . . 
. . . f f 1 1 f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
. . . . . . f f f f . . . . . . 
. . . . f f f 1 1 f f f . . . . 
. . . f f f 1 1 1 1 f f f . . . 
. . f f f 1 1 1 1 1 1 f f f . . 
. . f f 1 1 1 1 1 1 1 1 1 f . . 
. . f 1 1 f f f f f f 1 1 f . . 
. . f f f f 1 1 1 1 f f f f . . 
. f f 1 f 1 f 1 1 f 1 f 1 f f . 
. f 1 1 1 1 f 1 1 f 1 1 1 1 f . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . f 1 f 1 1 1 1 1 1 f 1 f . . 
. . f 1 f 1 1 1 1 1 1 f 1 f . . 
. . f f f 1 1 1 1 1 1 f f f . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 1 1 f f f . . . . 
. . . f f f 1 1 1 1 f f f . . . 
. . f f f 1 1 1 1 1 1 f f f . . 
. . f f 1 1 1 1 1 1 1 1 1 f . . 
. f f 1 1 f f f f f f 1 1 f f . 
. f f f f f 1 1 1 1 f f f f f . 
. . f 1 f 1 f 1 1 f 1 f 1 f . . 
. . f 1 1 1 f 1 1 f 1 1 1 f . . 
. . . f 1 1 1 1 1 1 f f f f . . 
. . f 1 f 1 1 1 1 f 1 1 1 f . . 
. . f f f 1 1 1 1 f 1 1 f . . . 
. . . . f 1 1 1 1 f f f . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`, img`
. . . . . . f f f f . . . . . . 
. . . . f f f 1 1 f f f . . . . 
. . . f f f 1 1 1 1 f f f . . . 
. . f f f 1 1 1 1 1 1 f f f . . 
. . f f 1 1 1 1 1 1 1 1 1 f . . 
. . f 1 1 f f f f f f 1 1 f . . 
. . f f f f 1 1 1 1 f f f f . . 
. f f 1 f 1 f 1 1 f 1 f 1 f f . 
. f 1 1 1 1 f 1 1 f 1 1 1 1 f . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . f 1 f 1 1 1 1 1 1 f 1 f . . 
. . f 1 f 1 1 1 1 1 1 f 1 f . . 
. . f f f 1 1 1 1 1 1 f f f . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 1 1 f f f . . . . 
. . . f f f 1 1 1 1 f f f . . . 
. . f f f 1 1 1 1 1 1 f f f . . 
. . f 1 1 1 1 1 1 1 1 1 f f . . 
. f f 1 1 f f f f f f 1 1 f f . 
. f f f f f 1 1 1 1 f f f f f . 
. . f 1 f 1 f 1 1 f 1 f 1 f . . 
. . f 1 1 1 f 1 1 f 1 1 1 f . . 
. . f f f f 1 1 1 1 1 1 f . . . 
. . f 1 1 1 f 1 1 1 1 f 1 f . . 
. . . f 1 1 f 1 1 1 1 f f f . . 
. . . . f f f 1 1 1 1 f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.computer, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    game.splash(convertToText(informer[inform]))
    inform += 1
    otherSprite.destroy(effects.disintegrate, 2000)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.placeOnRandomTile(hero, 8)
})
function level_switch () {
    next_level += 1
    if (next_level == 2) {
        game.splash("level two: business")
        switch_level()
    }
    if (next_level == 3) {
        game.splash("level three: leader")
        switch_level()
    }
    if (next_level == 4) {
        game.splash("level four: america")
        switch_level()
        enemy2.follow(hero)
    }
    if (next_level == 5) {
        game.over(true)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.end, function (sprite, otherSprite) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    scene.placeOnRandomTile(hero, 9)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . f f 1 1 1 1 f f . . . . . . . . . . . . 
. . . f f 1 1 1 1 1 1 f f . . . . . . . . . . . 
. . f f 1 1 1 1 1 1 1 1 f f . . . . . . . . . . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. f f 1 1 1 f 1 1 f 1 1 1 f f . . . . . . . . . 
. f 1 1 1 1 f 1 1 f 1 1 1 1 f . . . . . . . . . 
f 1 f 1 1 1 1 1 1 1 f f f f . . . . . . . . . . 
f 1 f f 1 1 1 1 1 f 1 1 f 1 . . . . . . . . . . 
f 1 f 1 f 1 1 1 1 f 1 1 f . . . . . . . . . . . 
f 1 f . f 1 1 f f f f f . . . . . . . . . . . . 
. f f . f 1 1 f 1 f 1 f . . . . . . . . . . . . 
. . . . f f f 1 1 f f f . . . . . . . . . . . . 
. . . . . f 1 1 f f f . . . . . . . . . . . . . 
. . . . f 1 1 f f . . . . . . . . . . . . . . . 
. . . . f 1 f f . . . . . . . . . . . . . . . . 
. . . . f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . f f 1 1 1 1 f f . . . . . . . . . . . . 
. . . f f 1 1 1 1 1 1 f f . . . . . . . . . . . 
. . f f 1 1 1 1 1 1 1 1 f f . . . . . . . . . . 
. . f 1 1 1 1 1 1 1 1 1 1 f f . . . . . . . . . 
. f f 1 1 1 1 1 1 1 1 1 1 f f . . . . . . . . . 
. f f 1 1 1 1 1 1 1 1 1 1 f f . . . . . . . . . 
f 1 f 1 1 1 f 1 1 f 1 1 1 f f . . . . . . . . . 
f 1 f 1 1 1 f 1 1 f 1 1 1 f . . . . . . . . . . 
f 1 f f 1 1 1 1 1 1 1 f f f . . . . . . . . . . 
f 1 f f f 1 1 1 1 1 f 1 f . . . . . . . . . . . 
. f f . f 1 1 1 1 1 f 1 f . . . . . . . . . . . 
. . . . f f f f f f 1 1 f . . . . . . . . . . . 
. . . . . f f f f f 1 1 f . . . . . . . . . . . 
. . . . . . . . . . f f . . . . . . . . . . . . 
. . . . . . . . . f f f . . . . . . . . . . . . 
. . . . . . . . f f 1 f f . . . . . . . . . . . 
. . . . . . . . . f 1 f . . . . . . . . . . . . 
. . . . . . . . . f 1 f . . . . . . . . . . . . 
. . . . . . . . . f 1 f . . . . . . . . . . . . 
. . . . . . . . . f f f . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . f f 1 1 1 1 f f . . . . . . . . . . . . 
. . . f f 1 1 1 1 1 1 f f . . . . . . . . . . . 
. . f f 1 1 1 1 1 1 1 1 f f . . . . . . . . . . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . . . . f f f f . 
. f f 1 1 1 f 1 1 f 1 1 1 f f . . . f f 1 1 f . 
. f f 1 1 1 f 1 1 f 1 1 1 f f . . f f 1 1 f f . 
. f 1 1 1 1 1 1 1 1 1 1 1 1 f . f f 1 1 f f . . 
f 1 f 1 1 1 1 1 1 1 1 1 1 f f f f 1 1 f f . . . 
f 1 f f 1 1 1 1 1 1 1 1 f f 1 1 f f f f . . . . 
f 1 f f f 1 1 1 1 1 1 f 1 f 1 1 f . . . . . . . 
f 1 f . f 1 1 1 1 1 1 f f f f f f . . . . . . . 
. f f . f 1 1 1 1 1 1 f . . . . . . . . . . . . 
. . . . f f f f f f f f . . . . . . . . . . . . 
. . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
    slash = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 1 . . . . . . . . . 1 . . . 
. . 1 1 . . . . . . . 1 1 . . . 
. . . 1 1 . . . . . 1 1 . . . . 
. . . . 1 1 . . . 1 1 . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, hero.vx, hero.vy)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f 1 1 1 1 f 1 f . . . . 
. . f f 1 1 1 1 f 1 1 1 f . . . 
. . f 1 1 1 f f 1 1 1 1 f . . . 
. . f f f f 1 1 1 1 1 1 1 f . . 
. . f 1 1 1 f f f f f 1 1 f . . 
. f f f f f f 1 1 1 1 f f f . . 
. f f 1 1 1 1 1 f 1 1 1 1 f . . 
. f 1 1 1 1 1 1 f 1 1 1 f f . . 
. . f f 1 1 1 1 1 1 1 f 1 1 f . 
. . . . f 1 1 1 f f f f 1 1 f . 
. . . . f 1 1 1 f 1 1 f 1 1 f . 
. . . f f 1 1 1 f 1 1 f 1 f . . 
. . . f f f f f f 1 1 f f . . . 
. . . . f f . . . f f f . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f 1 1 1 1 f 1 f . . . . 
. . f f 1 1 1 1 f 1 1 1 f . . . 
. . f 1 1 1 f f 1 1 1 1 f . . . 
. . f f f f 1 1 1 1 1 1 1 f . . 
. . f 1 1 1 f f f f f 1 1 f . . 
. f f f f f f 1 1 1 1 f f f . . 
. f f 1 1 1 1 1 f 1 1 1 1 f . . 
. f 1 1 1 1 1 1 f 1 1 1 f . . . 
. . f f 1 f f 1 1 1 1 f . . . . 
. . . . f 1 1 f f 1 1 f . . . . 
. . . . f 1 1 1 f 1 1 f . . . . 
. . . f f f 1 1 f 1 1 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`, img`
. . . . . f f f f f f . . . . . 
. . . f f 1 1 1 1 f 1 f . . . . 
. . f f 1 1 1 1 f 1 1 1 f . . . 
. . f 1 1 1 f f 1 1 1 1 f . . . 
. . f f f f 1 1 1 1 1 1 1 f . . 
. . f 1 1 1 f f f f f 1 1 f . . 
. f f f f f f 1 1 1 1 f f f . . 
. f f 1 1 1 1 1 f 1 1 1 1 f . . 
. f 1 1 1 1 1 1 f 1 1 1 f f . . 
. . f 1 1 1 1 1 1 1 1 f 1 1 f . 
. . . f f 1 1 1 f f f f 1 1 f . 
. . . . f 1 1 1 f 1 1 f 1 1 f . 
. . . . f 1 1 1 f 1 1 f 1 f . . 
. . . . f 1 1 1 f 1 1 f f . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f . . . . . . . 
`, img`
. . . . . . f f f f f f . . . . 
. . . . f f 1 1 1 1 f 1 f . . . 
. . . f f 1 1 1 1 f 1 1 1 f . . 
. . . f 1 1 1 f f 1 1 1 1 f . . 
. . . f f f f 1 1 1 1 1 1 1 f . 
. . . f 1 1 1 f f f f f 1 1 f . 
. . f f f f f f 1 1 1 1 f f f . 
. . f f 1 1 1 1 1 f 1 1 1 1 f . 
. . f 1 1 1 1 1 1 f 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . . . f f f f 1 1 1 1 f . . . 
. . . . . f 1 1 f 1 1 1 f . . . 
. . . . . f 1 1 f 1 1 1 f . . . 
. . . . . f 1 1 f 1 1 1 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`],
    100,
    true
    )
})
function switch_level () {
    hero = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 1 1 f f f . . . . 
. . . f f f 1 1 1 1 f f f . . . 
. . f f f 1 1 1 1 1 1 f f f . . 
. . f f 1 1 1 1 1 1 1 1 1 f . . 
. . f 1 1 f f f f f f 1 1 f . . 
. . f f f f 1 1 1 1 f f f f . . 
. f f 1 f 1 f 1 1 f 1 f 1 f f . 
. f 1 1 1 1 f 1 1 f 1 1 1 1 f . 
. . f f f f 1 1 1 1 1 1 1 f . . 
. f 1 1 1 1 f 1 1 1 1 1 f . . . 
. f 1 1 1 1 f 1 1 1 1 f 1 f . . 
. f 1 1 1 1 f 1 1 1 1 f 1 f . . 
. . f 1 1 f 1 1 1 1 1 f f f . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(hero, 75, 75)
    scene.cameraFollowSprite(hero)
    scene.setTile(15, img`
f c c c c c c c f c c c c c c c 
c f f f f f f c c f f f f f f c 
c f f f f f f c c f f f f f f c 
c f f f f f f c c f f f f f f c 
c f f f f f f c c f f f f f f c 
c f f f f f f c c f f f f f f c 
c f f f f f f f c f f f f f f f 
c c c c c c f a c c c c c c f a 
f c c c c c c c f c c c c c c c 
c f f f f f f c c f f f f f f c 
c f f f f f f c c f f f f f f c 
c f f f f f f c c f f f f f f c 
c f f f f f f c c f f f f f f c 
c f f f f f f c c f f f f f f c 
c f f f f f f f c f f f f f f f 
c c c c c c f a f c c c c c c a 
`, true)
    scene.setTile(12, img`
f a a a a a a c f a a a a a a c 
a f f f f f f c a f f f f f f c 
a f f f f f 6 c a f f f f f f c 
a f f f f f f 6 a f f f f f f c 
a f f f f f f 6 a f f f f f f c 
a f f 6 f f f c a f f f f f f c 
a 6 6 f f f f f a f f f f f f f 
c c 6 c c c 6 c 6 c 6 c c c f e 
f a a a a f c 6 6 6 a a a a a c 
a f f f f f f e 6 a f f f f f c 
a f f f f f f e e f f f f f f c 
a f f f f f f e a f f f f f c c 
a f f f f f f c a f f f c f f c 
a f f f f f f c a f f f c f f c 
a f f f f f f f a f f c f f f f 
c c c c c c f e f c c c c c c e 
`, true)
    scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 3 3 3 8 8 6 6 6 6 8 8 3 3 3 8 
8 3 3 8 8 6 6 a a a 6 8 8 3 3 8 
8 3 8 8 6 6 a a 9 9 6 6 8 8 3 8 
8 8 8 6 6 6 6 a 9 9 6 6 6 8 8 8 
8 8 6 6 6 6 6 9 9 9 6 6 6 6 8 8 
8 6 a 9 9 9 9 9 3 9 6 6 a 6 6 8 
8 6 a 9 9 9 3 3 3 9 9 a a a 6 8 
8 6 a a a 9 9 3 3 3 9 9 9 a 6 8 
8 6 6 a 6 6 9 3 9 9 9 9 9 6 6 8 
8 8 6 6 6 6 9 9 9 6 6 6 6 6 8 8 
8 8 8 6 6 6 9 9 a 6 6 6 6 8 8 8 
8 3 8 8 6 6 9 9 a a 6 6 8 8 3 8 
8 3 3 8 8 6 6 a a 6 6 8 8 3 3 8 
8 3 3 3 8 8 6 6 6 6 8 8 3 3 3 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, false)
    scene.setTile(9, img`
f a a a a a a c c a a a a a a c 
a f f f f f c a a c f f f f f c 
a f f f f c a f f f c f f f f c 
a f f f c a f f f f f c f f f c 
a f f c a f f f f f f f c f f c 
a f c a f f f f f f f f f c f c 
a c a f f f f f f f f f f f c f 
c a f f f f f f f f f f f f f c 
c a f f f f f f f f f f f f c a 
a c f f f f f f f f f f f c a c 
a f c f f f f f f f f f c a f c 
a f f c f f f f f f f c a f f c 
a f f f c f f f f f c a f f f c 
a f f f f c f f f c a f f f f c 
a f f f f f c f c a f f f f f c 
c c c c c c f c a c c c c c c a 
`, false)
    scene.setTile(7, img`
f a a a a a a c c a a a a a a c 
a f f f f f c a a c f f f f f c 
a f f f f c a f f f c f f f f c 
a f f f c a f f f f f c f f f c 
a f f c a f f f f f f f c f f c 
a f c a f f f f f f f f f c f c 
a c a f f f f f f f f f f f c f 
c a f f f f f f f f f f f f f c 
c a f f f f f f f f f f f f c a 
a c f f f f f f f f f f f c a c 
a f c f f f f f f f f f c a f c 
a f f c f f f f f f f c a f f c 
a f f f c f f f f f c a f f f c 
a f f f f c f f f c a f f f f c 
a f f f f f c f c a f f f f f c 
c c c c c c f c a c c c c c c a 
`, false)
    scene.setTile(11, img`
6 6 6 f f 6 6 6 6 6 6 f f 6 6 6 
7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 
7 7 7 7 6 7 7 7 7 7 7 7 6 7 7 7 
6 6 7 7 6 7 7 7 7 7 7 7 6 f 6 6 
f 6 6 6 6 6 7 4 7 7 6 6 6 6 f f 
f 7 7 7 7 7 7 4 4 7 7 7 7 7 7 6 
f f 7 7 7 7 4 5 5 4 7 7 7 7 7 6 
f f f 6 7 6 4 1 1 4 7 7 6 6 6 f 
6 6 7 7 7 7 c 4 4 4 7 7 7 7 6 6 
6 6 6 7 7 7 6 e e 6 7 7 7 6 6 6 
f f f f 7 6 6 c c 6 6 7 6 f f f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f f f f f f f f f f f f f f f f 
6 6 f f 6 6 6 6 6 6 f f 6 6 6 6 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(6, img`
f a a a a a a c f a a a a a a c 
a f f f f f f c a f f f f f f c 
a f f f f f 6 c a f f f f f f c 
a f f f f f f 6 a f f f f f f c 
a f f f f f f 6 a f f f f f f c 
a f f 6 f f f c a f f f f f f c 
a 6 6 f f f f f a f f f f f f f 
c c 6 c c c 6 c 6 c 6 c c c f e 
f a a a a f c 6 6 6 a a a a a c 
a f f f f f f e 6 a f f f f f c 
a f f f f f f e e f f f f f f c 
a f f f f f f e a f f f f f c c 
a f f f f f f c a f f f c f f c 
a f f f f f f c a f f f c f f c 
a f f f f f f f a f f c f f f f 
c c c c c c f e f c c c c c c e 
`, false)
    scene.setTile(3, img`
c c c c c c c c c c c c c c c a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
c f f f f f f f f f f f f f f a 
a a a a a a a a a a a a a a a a 
`, false)
    scene.setTile(5, img`
5 5 4 2 2 2 2 2 4 2 2 2 2 4 4 5 
5 4 2 2 2 2 2 4 4 4 4 4 4 4 5 5 
4 2 2 4 2 4 4 4 5 5 5 5 5 5 4 4 
2 2 2 2 4 4 5 5 4 4 4 5 4 5 4 4 
4 4 2 4 4 5 5 4 4 2 2 4 5 4 4 2 
4 4 2 4 5 4 4 2 2 2 2 4 5 4 4 2 
2 2 4 5 4 4 2 2 2 4 4 2 5 5 4 2 
4 4 5 5 4 2 2 2 2 4 4 2 4 5 5 4 
5 5 5 4 2 2 4 2 2 2 2 2 4 5 5 5 
4 5 4 4 2 2 2 2 2 2 2 2 4 5 4 4 
4 5 5 2 2 4 2 2 2 4 2 2 4 5 5 4 
5 5 4 2 4 2 4 2 2 2 2 4 5 5 5 5 
4 5 5 4 2 4 2 2 2 2 2 4 5 4 4 4 
4 5 5 5 2 2 2 4 4 4 5 5 5 4 2 2 
4 5 5 4 5 5 5 5 5 5 5 4 4 2 2 2 
4 5 5 4 4 4 4 4 4 4 4 2 2 2 4 4 
`, true)
    levels = [sprites.food.smallBurger, img`
c c c c c c c c c c c c c c c c f f 7 7 2 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 9 9 9 9 9 9 f f f 9 9 9 9 9 9 9 9 9 
c c c c c c c c c c c c c c c c f f 7 f f f 9 9 9 9 9 9 9 9 f f f 9 9 9 9 9 9 9 9 9 9 f f f 9 9 9 9 9 9 f f f 9 9 9 9 9 9 9 9 9 
c c c c 8 8 8 8 8 8 c c c c c c f f 7 7 f f f 9 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 f f f 9 f f f f 9 f f f 9 9 9 9 9 9 9 9 9 
c c c 8 8 8 8 8 8 8 9 c c c c c f f f 7 7 f f f 9 9 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c 8 8 8 8 8 8 8 9 9 9 c c c c f f f f 7 7 f f f 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c 8 8 8 8 8 8 9 9 9 9 9 c c c c f f f f 7 7 f f f f 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c 8 8 8 8 8 9 9 9 9 9 9 9 c c c 9 f f f f 7 7 f f f f 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c 8 8 8 8 9 9 9 9 9 9 9 9 9 c c 9 9 f f f f 7 7 f f f 9 9 9 9 9 f f f f f 9 5 5 5 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 9 9 9 9 9 
c c 8 8 8 3 3 3 3 9 3 3 3 3 3 9 9 9 9 9 f f f f 7 f f f f 9 9 9 9 9 f f f f f 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f 9 9 9 9 9 
c c 8 8 9 3 9 9 9 9 3 9 9 9 3 9 9 9 9 9 9 f f f 7 7 f f f f f 9 9 9 9 f f f f f 5 5 5 2 9 9 9 9 5 5 5 5 f f f f f f f 9 9 9 9 9 
c c c 9 9 3 9 3 3 9 3 9 9 9 3 9 9 9 9 9 3 9 9 f f 7 7 f f f f 9 9 9 9 9 f f f 9 5 5 5 5 5 5 5 9 9 9 9 5 f f f f f f f 9 9 9 9 9 
c c c c 9 3 9 9 3 9 3 9 9 9 3 9 9 9 9 3 9 9 9 f f f 7 7 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 9 5 5 9 9 b f f f f 9 9 9 9 
c c c c c 3 3 3 3 9 3 3 3 3 3 9 9 9 3 9 9 9 9 9 f f f 7 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 9 5 5 9 9 f f f f f 9 9 9 9 
c c c c c c 9 9 9 9 9 9 9 9 9 9 9 3 9 9 9 9 9 9 9 f f 7 7 f f f f f 9 9 9 9 9 9 9 9 9 5 5 5 9 9 9 5 9 5 5 9 9 f f f f f 9 9 9 9 
c c c c c c c 9 9 9 9 9 9 9 9 9 3 9 9 9 9 9 9 9 9 9 f f 7 7 f f f f f 9 9 9 9 9 9 5 5 5 5 5 5 5 5 5 9 5 9 9 f f f f f f 9 9 9 9 
c c c c c c c c 9 9 9 9 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 f f 7 7 7 f f f f 9 9 9 9 9 5 9 9 9 9 9 9 9 9 9 5 9 9 f f f f f f 9 9 9 9 
f f f f f c c c 9 9 9 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 7 7 7 f f f 9 9 9 9 5 9 5 5 5 5 5 5 5 5 5 9 9 f f f f f 9 9 9 9 9 
f f f f f f f f f 9 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 7 7 f f f 9 9 9 5 9 5 5 5 5 9 9 5 5 5 9 9 f f f f f f f 9 9 9 
f f f f f f f f f 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 7 7 f f f f 9 9 9 9 5 5 5 9 9 5 5 5 9 9 9 f f f f f f 9 9 9 
7 7 7 7 f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 7 7 f f f f 9 9 9 9 9 9 9 9 5 5 5 9 9 9 f f f f f f 9 9 9 
7 f f 7 f f f f f f 7 7 f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 7 7 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f 9 9 9 9 
7 f f 7 f f f f f f f 7 f f 7 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 7 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
2 f f 7 7 7 7 7 7 7 7 7 f f 7 f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 7 7 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
f f f f f f f f f f 7 7 f f 7 f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 7 7 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 f f f f f f f f f 7 7 f 7 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 7 7 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 f f f 7 f f f f f 7 7 7 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 7 7 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f f 7 7 f f f f 7 7 7 7 7 f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 7 7 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 f f 7 7 f f f f 7 f f 7 f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 f f f 7 7 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 f f 7 f f f f 7 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f 9 9 9 9 9 9 9 9 9 f f f 7 7 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 f f f 9 9 9 f 7 7 f f f 7 f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 f f f 7 7 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 f f f 9 9 9 f f 7 7 f f 7 f f 9 9 9 f f f f f 9 9 9 9 f f f 9 9 9 9 9 9 9 9 9 9 9 f f f 7 7 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 
9 f f f f 9 9 9 f f 7 7 7 7 f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 9 9 9 f f f 7 7 f f f f f 9 9 9 9 9 9 9 9 9 9 9 
9 f f f f 9 9 9 9 f f f 7 7 f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 9 9 9 9 f f f 7 7 7 f f f f f 9 9 9 9 9 9 9 9 9 
9 9 f f f 9 9 9 9 9 f f f 7 f f f f 9 9 9 9 9 9 9 9 9 9 f f b 9 9 9 9 9 f f f f f 9 9 9 9 b f f f 7 7 7 f f f f 9 9 9 9 9 9 9 9 
9 9 f f f f 9 9 9 9 9 f f 7 7 7 7 f f f f f f f f 9 9 9 f f f 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 f f f f 7 7 f f f f 9 9 9 9 9 9 9 
9 9 f f f f 9 9 9 9 9 9 f f f f 7 7 7 7 f f f f f 9 9 9 f f f f 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 f f f f 7 7 8 f f f 9 9 9 9 9 9 
9 9 9 f f f 9 9 9 9 9 9 f f f f f f f 7 f f f f f 9 9 9 f f f f 9 9 9 9 9 9 f f f f f 9 9 9 9 9 9 f f f f f f f f f 9 9 9 9 9 9 
9 9 9 f f f 9 9 9 9 9 9 f f f f f b f 7 7 f f f 9 9 9 9 9 f f f f 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 f f f f f f f f 9 9 9 9 9 9 
9 9 9 f f f f 9 9 9 f f f f f 9 9 b f f 7 f f 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 f f b 9 9 9 9 9 9 9 9 9 f f f f f f 9 9 9 9 9 9 
9 9 9 f f f f 9 9 9 f f f f f 9 f f f f 7 7 f 9 9 9 9 9 9 9 f f f f 9 9 9 9 9 f f f 9 f f 9 9 9 9 9 9 9 f f f f f b 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 f f f f f 9 f f f f f 7 f f 9 9 9 9 9 9 f f f f 9 9 9 9 f f f 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 f f 9 9 9 9 9 9 9 9 9 f f f f 7 7 f f 9 9 9 9 9 9 f f f 9 9 9 9 f 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 f 9 9 9 9 9 9 9 9 9 9 f f f f 7 7 f f f 9 9 9 9 f f f 9 9 9 f f 9 f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f f 9 f 9 9 9 9 9 9 9 9 9 9 f f f f f 7 f f f 9 9 9 9 f f f 9 9 f f 9 9 f 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 f 9 f 9 9 9 9 9 9 9 9 9 9 9 f f f f 7 7 f f f 9 9 9 9 9 9 9 f f 9 9 f f 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 7 7 f f f f 9 9 9 9 f f 9 9 f f 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 f 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 7 7 f f f f 9 9 f f 9 9 f f 9 9 9 9 9 b 9 f f f 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 
9 9 9 9 9 f 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 8 f f f f f 9 f 9 9 f f 9 9 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 9 f f 9 9 9 9 
9 9 9 9 9 f f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f 9 f f 9 9 9 9 9 9 9 9 9 f f f f f 9 9 9 9 9 9 f f 9 9 9 9 9 
9 9 9 9 9 9 f b f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f 9 9 f 9 9 9 9 9 9 9 9 9 9 9 f f f f f 9 9 9 9 9 f 9 9 9 9 9 9 
9 f f f f 9 f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f 9 f f 9 9 9 9 f f f f 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 9 9 
9 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f 9 9 f f f 9 9 9 f f f f f 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 9 
9 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f 9 f f f f 9 9 9 f f f f f 9 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 
9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f 9 9 f f f a f f f f 9 9 9 9 f f f f f 9 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 
9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f 9 9 9 9 f f f f f f f 9 9 9 9 9 f f f f 9 9 9 9 9 9 f f f f f 9 9 9 9 9 9 9 
9 9 9 f f f f 9 9 9 9 9 9 9 9 9 f f f f f f f f 9 9 9 9 9 9 9 f f f f f f 9 9 9 9 9 9 f f f 9 9 9 9 9 9 f f f f f f 9 9 9 9 9 9 
9 9 9 9 f f f f 9 9 9 9 9 f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 9 9 9 9 9 9 9 f f f f f 9 9 9 9 9 9 
9 9 9 9 f f f f 9 9 9 9 f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f 9 9 9 9 9 
f f 9 9 9 f f f f 9 9 9 f f f f f f 9 9 9 9 9 9 9 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f 9 9 9 9 9 
9 f f 9 9 f f f f 9 9 9 f f f 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f 9 9 9 9 9 
9 9 f 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f 9 9 f 9 f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 f f 9 9 
9 9 f 9 9 9 9 f f f f f 9 9 9 9 9 9 9 9 9 f f f f f f f f 9 9 9 9 f 9 f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 f f 9 
9 9 f 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 
`, img`
c d d d d d d c c d d d d d d c f f f f f f f f f f f f f f f f 1 1 1 f 9 9 9 9 
d 1 1 1 1 1 1 1 1 1 1 1 1 c c c f 1 1 1 b f b 1 f f b 1 1 1 f f 1 f b f 9 9 9 9 
d 1 1 1 1 1 1 1 d c c c 1 c 9 9 f 1 1 f f f f 1 1 f f f f 1 f f 1 f f f f f 9 9 
d 1 1 1 1 1 1 1 d c 1 1 1 c 9 9 f f 1 1 f f f f 1 f b 1 1 1 f 1 1 f 5 5 5 f 9 9 
d 1 1 1 1 1 1 1 d c 8 c c c 9 9 f f f 1 f f 1 1 1 f f f f 1 f f 1 1 1 1 5 f f f 
d 1 1 1 1 1 1 1 d c c c c c c c f f 1 1 f 1 1 f f f b 1 1 1 f f f 1 f 1 5 5 5 f 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f b f f 1 f f f b 1 1 f 1 1 1 5 5 
1 1 1 1 1 1 1 c c c c c c c c c f f f 1 f 1 1 1 1 f f 1 f c f f f 1 f 5 5 1 1 5 
b d d d d d 1 c b d d d d d d c f f f 1 f f 1 1 f f 1 1 f f f 1 1 1 f f 5 5 1 2 
d 1 1 1 1 1 1 c d b c c c c c c f f f 1 f f 1 1 1 1 1 1 1 1 1 1 f 1 1 f f 5 5 5 
d 1 c c c c c c d 1 c c 9 9 c c f 1 1 1 f f 1 f 1 1 1 1 f f 1 f f f 1 1 f f f f 
d 1 1 c 9 9 9 c d 1 c c 9 9 c c f 1 f f f f 1 f f 1 f 1 1 f 1 f c f f 1 1 1 f c 
c c 1 c 9 9 9 c d 1 1 c 9 9 c b 1 1 f f f 1 1 f b 1 f 1 1 f 1 f f f f f f 1 f c 
c c 1 c c c c c d c 1 c c c c c f f f f f 1 f f f f 1 1 f f 1 1 1 1 b f f b f c 
c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a f 1 b f f b 1 f f f f 1 1 f f f f f f c 
`, img`
3 d d d d d d 3 3 d d d d d d 3 f f f f f f f f f f f f f f f f 1 1 1 f f 1 1 1 1 f f f f f f f 
d 1 1 1 1 1 1 1 1 1 1 1 1 f f 3 f 1 1 1 b f b 1 f f b 1 1 1 f f 1 f 1 1 f 1 f f 1 f f f f 2 f f 
d 1 8 8 8 8 8 3 d f f f 1 f f 3 f 1 1 f f f f 1 1 f f f f 1 f f 1 f f b f 1 f f 1 f f f f 6 f f 
d 1 8 8 8 8 8 3 d f 1 1 1 f f 3 f f 1 1 f f f f 1 f b 1 1 1 f 1 1 f f f f 1 b f 1 f f f f 6 f f 
d 1 8 8 8 8 8 3 d f 8 f f f f 3 f f f 1 f f 1 1 1 f f f f 1 f f 1 1 1 1 f f f f 1 f f f 6 6 f f 
d 1 8 8 8 8 8 3 d f f f f f f 3 f f 1 1 f 1 1 f f f b 1 1 1 f f f 1 f 1 f f f f 1 f f 6 6 f f f 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 f f 1 f f f b 1 1 f 1 1 1 f f 1 f f 6 f f f f 
3 3 3 3 3 3 1 a 3 3 3 3 3 3 3 a f f f 1 f 1 1 1 1 f f 1 f f f f f 1 f f f 1 1 1 1 f f 6 f f f f 
3 d d d d d 1 3 3 d d d d d d 3 f f f 1 f f 1 1 f f 1 1 f f f 1 1 1 f f f f 1 f f f f 6 6 6 f f 
d 1 1 1 1 1 1 3 d 1 f f f f f 3 f f f 1 f f 1 1 1 1 1 1 1 1 1 1 f 1 f f f f f f f f f f f 6 f f 
d 1 f f f f f 3 d 1 f f f f f 3 f 1 1 1 f f 1 f 1 1 1 1 f f 1 f f 1 1 1 1 1 f f f f f f f 6 6 f 
d 1 1 f f f f 3 d 1 f f f f f 3 f 1 f f f f 1 f f 1 f 1 1 f 1 f f f f f 1 1 f f f f f f f f 6 f 
d f 1 f f f f 3 d 1 1 f f f b 1 1 1 f f f 1 1 f 1 1 f 1 1 f 1 f f f f f f 1 f f f f f 6 6 6 6 f 
d f 1 f f f f 3 d 8 1 f f f 6 6 6 6 f f f 1 f f f f f 1 f f 1 1 1 1 b f f b f f f 6 6 6 f f f f 
d f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b f 1 b f f b 1 1 f f f 1 1 f f f f f f f 6 6 f f f f f f 
f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f 1 f f f f f f 6 6 6 f f f f f f f 
f f f f f f f f f f f 6 f f f f f f f f f 1 1 f f f 1 1 f 1 f 1 f f f 6 6 6 6 f f f f f b 1 1 f 
f f f f f f f f f f f 6 f f f f f f f f 1 1 f f f 1 1 f f 1 f 1 f f 6 6 f f f f b 1 1 1 1 f f f 
1 1 1 1 1 1 1 1 1 1 1 6 1 1 1 1 1 1 1 1 1 f f f 1 1 f f 1 1 f 1 f 8 6 f f f 6 1 1 f f f f f f f 
f 1 f f f f f f f f f 6 f f f f f f 1 1 1 f f 1 1 f f 1 1 f f 1 f f f f b 1 6 f f f f f f f f f 
f 1 1 f f f f f f f f 6 f f f f f f f 1 f f 1 1 1 1 1 1 b f f 1 f f f 1 1 f 6 f f f f f f f f f 
f f 1 f f f b 1 1 1 1 1 1 1 f f f f f 1 f f 1 f f f f 1 1 f f 1 6 6 1 1 f f 6 f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f 1 f f 1 f f f f 1 1 f f 1 f f f f f f 6 f f f f f f a f f 
f f 1 1 f f 9 9 9 f 1 b f f f f f f f 1 f 1 1 1 f f 1 1 f f 1 b f f f f f f 9 f f f f f f 6 f f 
f f f 1 1 9 9 9 9 f f 1 f f f 1 f f f 1 f f f f f 1 1 f f f 1 f f f f f f f 9 f f f f f f 6 f f 
f f f f 1 f 9 9 9 9 f 1 b f f b 1 f f 1 f f 1 1 1 1 f f f f 1 f f f f f f f b 9 f f f f f 6 f f 
f f 1 1 1 f f 9 9 9 f f 1 f f f 1 1 f 1 f f 1 f f f f f f 1 b f f f f f f f f 9 f f f f f 6 f f 
f 1 1 f 1 1 f f 9 9 9 f 1 b f f f 1 f 1 f f 1 f f f 1 1 1 b f f f f f f f f f b 9 f f f f 6 f f 
f f f f 1 1 1 f f 9 9 f f 1 6 6 6 6 6 6 1 1 1 f 1 1 b f f f f f f f f f f f f f 9 f f f f 8 f f 
f f f f 1 f 1 1 f 9 9 9 f 1 f f f f f f f f 1 1 b f f f f f f f f f f f f f f f 9 b f f f 8 f f 
f f f 1 1 f f 1 f f 9 9 f b 1 f f f f f f f b f f f f f f f f f f f f 1 1 1 6 f f 9 f f f f f f 
f f 1 1 f f f 1 1 f f f f f 1 1 f f f f f 1 1 f f f f f f f f f f 1 1 6 f f 6 f f 9 b f f f f f 
f f 1 f f f f f 1 1 f f f f f f f f f 6 1 1 f f f f f f f 1 1 1 1 6 f f f f 6 f f f 9 f f f f f 
f 1 1 1 1 f f f f 1 b f f f f f f 1 1 1 b f f f f f 1 1 1 6 f f f f f f f f 6 f f f 9 b f f f f 
f 1 f f 1 1 f f f f f f f 1 f f f f f f f f f f 1 1 6 f f f f f f f f f f f 6 f 1 f f 9 f f f f 
f f f f f 1 1 1 f f f f f 1 f f f f f f f f 1 1 6 f f f f f f f f f f f f f 6 6 1 f f 9 6 6 6 6 
f b 1 1 f f f 1 1 1 f f 1 6 6 6 6 6 6 6 1 6 6 f f f f f f f f f f f f f f f 6 1 f f f f f f f 6 
f f f 1 1 f f f f 1 f f 1 f f f f f 1 1 f f f f f f f f f f b f f f f f f 6 1 f f f f f f f f 6 
f f f f 1 1 1 1 1 1 f f 1 f f f f f f f f f f f f f f f f 1 1 f f f f f 6 1 f f f f f f f f 1 1 
f f f f 1 1 f f f 1 f f 1 f f f f f f f f f f f f f f 1 1 1 f f f f f f 9 f f f f f f f f f 1 f 
f f f 1 1 f f f f 6 f f f f f f f 1 1 6 6 6 6 6 6 f 1 1 f f f f f f f f 9 f f f f f b 1 1 1 b f 
f f f 1 f f f f f 6 f f f f f f 1 1 f f f f f f 6 6 6 f f f f f f f f 1 6 6 f f f f 1 f f f f f 
f f f f f f f f f 6 f f f f 1 1 1 f f f f f f f 1 1 f f f f f f f f 1 1 f 6 6 6 f f 1 f f f f f 
f f f f f f f f f 6 f 1 1 1 1 f f f f f f f 1 1 1 f f f f f f f f 6 1 f f f f 6 6 1 b f f f f f 
f f f f 5 5 5 5 1 1 1 1 f f f f f f f f 1 1 1 f f f f f f f f f 6 1 f f f f b 1 f f f f f f f f 
f f 5 5 5 1 1 1 1 5 f f f f f f f f f 1 1 f f f f f f f f f f f 1 f f f f f 1 6 f f f f f f f f 
f f 5 2 1 1 5 5 5 5 f f f f f f f f b 1 f f f f f f f f f f f f b f f f f f f f f f f f f f f f 
f f 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 2 
`, img`
8 8 c 9 c 9 c c 9 9 9 9 c c c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
8 8 c 9 c 9 c c 9 9 c 9 c c c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c 9 9 9 c 9 c c 9 c c 9 c c c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 c c 9 c c 9 c c c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c 9 9 9 c c 9 c c 9 9 9 c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 c 9 c c 9 c 9 9 9 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c c c 9 9 9 9 c c 9 c c c 9 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c c c c 9 9 9 c c 9 c c c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 c 9 c c c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c c c c c c 9 9 9 9 c c c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 c c c c c c c c 9 9 9 c c c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 c c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c 9 c c c c c c c c 9 9 9 c c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c 9 9 c c c c c c c c 9 9 9 c 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c 9 9 c c c c c c c c 9 9 9 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c 9 9 9 9 c c c c c c c 9 9 9 9 c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c c c c c c c c c c c c c c 9 9 9 9 9 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c c c c c c c c c c c c c c c 9 9 9 9 9 c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b 
`, img`
. . c c c c c c c c c c c c c c c c c c c c c c c c c c c c . . 
. b d d d d d d d d d d d d d d d d d d d d d d d d d d d d b . 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c b b b 3 d d d 3 3 d 3 d d d d 3 3 3 3 d d d d 3 d 3 3 3 b b c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c b b 3 3 d d d d 3 b b 3 3 d 3 3 d d 3 3 d d d 3 3 3 3 3 b b c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d f d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c b 3 3 3 d d d d 3 d b 3 d d d d d d d d 3 3 3 3 3 d d d 3 b c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c b b b b b b 3 3 3 3 3 3 3 d d d d 3 3 3 d 3 d d d d 3 3 b b c 
c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c 
c b d d d d d d d d d d d d d d d d d d d d d d d d d d d d b c 
c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c 
c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c 
. c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c . 
. . c b b c . . . . . . . . . . . . . . . . . . . . c b b c . . 
. . c 3 3 c . . . . . . . . . . . . . . . . . . . . c 3 3 c . . 
. . . c c . . . . . . . . . . . . . . . . . . . . . . c c . . . 
`]
    hero.setFlag(SpriteFlag.BounceOnWall, true)
    scene.setTileMap(levels[next_level])
    for (let index = 0; index < 11; index++) {
        info2 = sprites.create(img`
. . . b b b b b b b b b b . . . 
. . b 1 1 1 1 1 1 1 1 1 1 b . . 
. b 1 1 1 1 1 1 1 1 1 1 1 1 b . 
. b 1 1 1 1 1 1 1 1 1 1 1 1 b . 
. b d d c c c c c c c c d d b . 
. b d c 6 6 6 6 6 6 6 6 c d b . 
. b d c 6 1 d 6 6 6 6 6 c d b . 
. b d c 6 d 6 6 6 6 6 6 c d b . 
. b d c 6 6 6 6 6 6 6 6 c d b . 
. b d c 6 6 6 6 6 6 6 6 c d b . 
. b d c 6 6 6 6 6 6 6 6 c d b . 
. b d d c c c c c c c c d d b . 
. c b b b b b b b b b b b b c . 
. c c c c c c c c c c c c c c . 
. b b b b b b b b b b b b b b . 
. b c d d d d d d d d d d d b . 
. b c b b b b b b b b b b c b . 
. b c b b b b b b b b b b c b . 
. b c c c c c c c c c c c c b . 
. b b b b b b b b b b b b b b . 
. b . . . . . . . . . . . . b . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.computer)
        scene.placeOnRandomTile(info2, 11)
    }
    for (let index = 0; index < 20; index++) {
        enemy2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . f f f . . . . . . 
. . . . . . f 5 f f . . . . f f 5 f . . . . . . 
. . . . . . f 5 5 f f . . f f 5 5 f . . . . . . 
. . . . . . f 5 5 5 f f f f 5 5 5 f . . . . . . 
. . . . . . f 5 5 5 5 f f 5 5 5 5 f . . . . . . 
. . . . . . f 5 5 5 5 5 5 5 5 5 5 f . . . . . . 
. . . . . . f f 5 9 9 5 5 9 9 5 f f . . . . . . 
. . . . . . . f 5 9 9 9 9 9 9 5 f . . . . . . . 
. . . . . . . f 5 5 5 5 5 5 5 5 f . . . . . . . 
. . . . . . . f f 3 5 5 5 5 3 f f . . . . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . . f 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 f . . . 
. . . f 5 3 3 3 3 3 5 f f 5 3 3 3 3 3 5 f . . . 
. . . f 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 f . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        scene.placeOnRandomTile(enemy2, 9)
        enemy2.setVelocity(Math.randomRange(-25, 25), Math.randomRange(-25, 25))
        enemy2.setFlag(SpriteFlag.BounceOnWall, true)
    }
    for (let index = 0; index < 3; index++) {
        vender = sprites.create(img`
. . f f f f f f f f f f f f . . 
. f f 1 1 1 1 1 1 1 1 1 1 f f . 
f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f 1 1 1 f f f 1 1 f f f 1 1 1 f 
f 1 1 1 1 f f 1 1 f f 1 1 1 1 f 
f 1 1 1 1 1 f f f f 1 1 1 1 1 f 
f 1 1 1 1 1 1 f f 1 1 1 1 1 1 f 
f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 
. f f f f f f f f f f f f f f . 
. f f . . . . . . . . . . f f . 
`, SpriteKind.Food)
        scene.placeOnRandomTile(vender, 10)
    }
    for (let index = 0; index < 2; index++) {
        scene.placeOnRandomTile(vender, 2)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
. . . . . . f f f f . . . . . . 
. . . . f f 1 1 1 1 f f . . . . 
. . . f 1 1 1 f f 1 1 1 f . . . 
. . f f f f f 1 1 f f f f f . . 
. . f f 1 1 1 1 1 1 1 1 f f . . 
. . f 1 1 1 1 f f 1 1 1 1 f . . 
. . f f f f f f f f f f f f . . 
. f f 1 1 1 1 f f 1 1 1 1 f f . 
. f 1 1 1 1 f 1 1 f 1 1 1 1 f . 
. . f 1 1 f 1 1 1 1 f 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . f 1 f f f f f f f f 1 f . . 
. . f 1 f 1 1 1 1 1 1 f 1 f . . 
. . f f f 1 1 1 1 1 1 f f f . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f 1 1 1 1 f f . . . . 
. . . f 1 1 1 f f 1 1 1 f . . . 
. . . f f f f 1 1 f f f f . . . 
. . f f 1 1 1 1 1 1 1 1 f f . . 
. . f 1 1 1 1 f f 1 1 1 1 f . . 
. . f f f f f f f f f f f f . . 
. . f 1 1 1 1 f f 1 1 1 1 f . . 
. f f 1 1 1 f 1 1 f 1 1 1 f f . 
. f f 1 1 f 1 1 1 1 f 1 1 f f . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . . f f f f f f f f f 1 f . . 
. . . f f 1 1 1 1 1 f 1 1 f . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . . . . . . . 
`, img`
. . . . . . f f f f . . . . . . 
. . . . f f 1 1 1 1 f f . . . . 
. . . f 1 1 1 f f 1 1 1 f . . . 
. . f f f f f 1 1 f f f f f . . 
. . f f 1 1 1 1 1 1 1 1 f f . . 
. . f 1 1 1 1 f f 1 1 1 1 f . . 
. . f f f f f f f f f f f f . . 
. f f 1 1 1 1 f f 1 1 1 1 f f . 
. f 1 1 1 1 f 1 1 f 1 1 1 1 f . 
. . f 1 1 f 1 1 1 1 f 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . f 1 f f f f f f f f 1 f . . 
. . f 1 f 1 1 1 1 1 1 f 1 f . . 
. . f f f 1 1 1 1 1 1 f f f . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f 1 1 1 1 f f . . . . 
. . . f 1 1 1 f f 1 1 1 f . . . 
. . . f f f f 1 1 f f f f . . . 
. . f f 1 1 1 1 1 1 1 1 f f . . 
. . f 1 1 1 1 f f 1 1 1 1 f . . 
. . f f f f f f f f f f f f . . 
. . f 1 1 1 1 f f 1 1 1 1 f . . 
. f f 1 1 1 f 1 1 f 1 1 1 f f . 
. f f 1 1 f 1 1 1 1 f 1 1 f f . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . f f f f f f f f f f f . . . 
. . f 1 1 f 1 1 1 1 1 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . f f f . . . . 
`],
    100,
    true
    )
})
info.onLifeZero(function () {
    game.over(false)
})
let vender: Sprite = null
let info2: Sprite = null
let levels: Image[] = []
let slash: Sprite = null
let enemy2: Sprite = null
let next_level = 0
let hero: Sprite = null
let informer: string[] = []
let inform = 0
info.setLife(3)
game.splash("level one: future")
game.splash("to escape the maze, you need to get the baa awards,", " they should be in those computers overthere")
game.splash("press b to teleport to the blue tiles")
info.setScore(0)
level_switch()
inform = 0
informer = ["to get this award you need to donate five hours of community service", "to get this award you need to Prepare a bulletin board, poster, flyer, social media graphic, or display promoting FBLA", "to get this award you need to also do one other activity from the service section of the activities that you can do to get the award", "to get this award you need to Complete the FBLA Knowledge Quiz with a score of 92 percent or higher", "to get this award you need to Create a TALLO online leadership profile", "to get this award you need to also do one other activity from the education section of the activities that you can do to get the award", "to get this award you need to Bring a friend who is a nonmember to a local chapter FBLA meeting", "to get this award you need to Attend at least three (3) local chapter meetings and prepare a one-page paper that includes the date of each meeting and a bulleted list of meeting highlights", "to get this award you need to also do two other activity from the progress section of the activities that you can do to get the award", "to get this award you need to Make a 1-3 minute oral informational presentation about FBLA to a business, a class, or at a chapter meeting", "to get this award you need to Design a social media graphic, Instagram post, or Twitter post with '#FBLA: World of Opportunity'", "to get this award you need to also do one other activity from the service section of the activities that you can do to get the award", "to get this award you need to Update your TALLO online leadership profile at TALLO", "to get this award you need to Prepare a resume, cover letter, and job application, applying for your dream job", "to get this award you need to also do three other activity from the education section of the activities that you can do to get the award", "to get this award you need to Prepare a recruitment brochure for your local FBLA chapter", "to get this award you need to also do three other activity from the progress section of the activities that you can do to get the award", "to get this award you need to Complete the FBLA International Recruitment Project. You will use the country and the information that you compiled for the Leader Level", "to get this award you need to Create an autobiographical scrapbook presentation (video or slide show) highlighting your life – this must include FBLA activities, community service activities, and demonstrate leadership skills", "to get this award you need to Participate on a committee to plan a free enterprise project for elementary or junior high students. As part of this project, design a free enterprise board game or card game (i.e. bingo, etc.) to help students learn these concepts", "to get this award you need to also do one other activity from the service section of the activities that you can do to get the award", "to get this award you need to Go to Membership Mania Award. (Don't forget to get your digital badge from TALLO)", "to get this award you need to Secure a letter of recommendation about your leadership skills and why you are deserving of the America award from your local or state adviser", "to get this award you need to Recruit two (2) Professional Division members", "then, you need to complete two other activities from the progress section of the activities that you can do to get the award", "", ""]
switch_level()
forever(function () {
    if (info.score() == 9) {
        level_switch()
    }
    if (info.score() == 18) {
        level_switch()
    }
    if (info.score() == 27) {
        level_switch()
    }
    if (info.score() == 36) {
        level_switch()
    }
})
