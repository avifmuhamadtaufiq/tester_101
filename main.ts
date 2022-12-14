bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . # .
        # . # . #
        . # # # .
        # . # . #
        . . . # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        kompor1_level += Math.map(10, 0, 100, 0, 1023)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        kompor1_level += Math.map(10, 0, 100, 0, 1023)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        kompor1_level += Math.map(10, 0, 100, 1023, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        kompor2_level += Math.map(10, 0, 100, 1023, 0)
    } else {
    	
    }
})
let kompor1_level = 0
let kompor2_level = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, kompor1_level)
    pins.analogWritePin(AnalogPin.P2, kompor2_level)
})
