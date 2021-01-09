input.onButtonPressed(Button.A, function () {
    dfplayer.execute(
    dfplayer.playType.type2
    )
    dfplayer.folderPlay(1, 1, dfplayer.yesOrNot.type1)
})
input.onButtonPressed(Button.AB, function () {
    dfplayer.execute(
    dfplayer.playType.type2
    )
})
input.onButtonPressed(Button.B, function () {
    dfplayer.execute(
    dfplayer.playType.type2
    )
    dfplayer.folderPlay(1, 2, dfplayer.yesOrNot.type1)
})
dfplayer.MP3_setSerial(SerialPin.P0, SerialPin.P0)
