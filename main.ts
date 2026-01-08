radio.setGroup(1)
music.play(music.stringPlayable("C F A D F C D G ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Double)), music.PlaybackMode.LoopingInBackground)
})
