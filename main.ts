function Start () {
    Num = game.askForNumber("How many minutes would like the timer to go to?")
    myCounter = sevenseg.createCounter()
    for (let index = 0; index < Num * 60; index++) {
        pause(1000)
        myCounter.count += 1
    }
    music.play(music.stringPlayable("C F A F A C C5 F ", 120), music.PlaybackMode.UntilDone)
    Try = game.ask("It’s over do you want to restart")
    if (Try == true) {
        game.reset()
    } else {
        game.gameOver(false)
    }
}
let Try = false
let myCounter: DigitCounter = null
let Num = 0
Start()
forever(function () {
	
})
