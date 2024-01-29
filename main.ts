controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)
    music.baDing.play()
    animation.runImageAnimation(
    myHammer,
    assets.animation`hammerAnimation`,
    50,
    false
    )
})
let myHammer: Sprite = null
let myMole: Sprite = null
game.showLongText("Player 1: Use the arrow keys to move the hammer. Player 2: Press A to move the mole.", DialogLayout.Center)
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Score)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
game.onUpdateInterval(1000, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)
})
