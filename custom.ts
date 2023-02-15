enum PingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

//% weight=10 color=#0fbc11 icon="\uf1b9" groups='["Motor","Motor&time", "Sensor"]'
namespace Trueclicklife {

    //% block="Forward|Speed: %value"
    //% value.min=0 value.max=100
    //% group="Motor"
    //% weight=600
    export function forward(value: number) {
        pins.analogWritePin(AnalogPin.P13, value * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, value * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Back|Speed: %value"
    //% value.min=0 value.max=100
    //% group="Motor"
    //% weight=500
    export function back(value: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, value * 10.2)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, value * 10.2)
    }

    //% block="Turn Left|Speed: %value"
    //% value.min=0 value.max=100
    //% group="Motor"
    //% weight=400
    export function turnleft(value: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, value * 10.2)
        pins.analogWritePin(AnalogPin.P15, value * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Turn Right|Speed: %value"
    //% value.min=0 value.max=100
    //% group="Motor"
    //% weight=300
    export function turnright(value: number) {
        pins.analogWritePin(AnalogPin.P13, value * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, value * 10.2)
    }

    //% block="Stop"
    //% group="Motor"
    //% weight=200
    export function stop() {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Right sensor %rs"
    //% group="Sensor"
    //% weight=100
    export function rightsensor(rs: AnalogPin) {
        return pins.analogReadPin(rs)
    }

    //% block="Left sensor %ls"
    //% group="Sensor"
    //% weight=200
    export function leftsensor(ls: AnalogPin) {
        return pins.analogReadPin(ls)
    }

    //% block="Forward M1|Speed: %motor1 M2|Speed: %motor2 time: %number sec"
    //% motor1.min=0 motor1.max=100
    //% motor2.min=0 motor2.max=100
    //% group="Motor&time"
    //% weight=1000
    export function forwardfor(motor1: number, motor2: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, motor1 * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, motor2 * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Back M1|Speed: %motor1 M2|Speed: %motor2 time: %number sec"
    //% motor1.min=0 motor1.max=100
    //% motor2.min=0 motor2.max=100
    //% group="Motor&time"
    //% weight=400
    export function backfor(motor1: number, motor2: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, motor1 * 10.2)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, motor2 * 10.2)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)

    }

    //% block="Turn Left Speed: %value time: %number sec"
    //% value.min=0 value.max=100
    //% group="Motor&time"
    //% weight=300
    export function turnleftfor(value: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, value * 10.2)
        pins.analogWritePin(AnalogPin.P15, value * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)

    }

    //% block="Turn Right Speed: %value time: %number sec"
    //% value.min=0 value.max=100
    //% group="Motor&time"
    //% weight=200
    export function turnrightfor(value: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, value * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, value * 10.2)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)

    }

    //% block="ping trig %trig|echo %echo|unit %unit"
    //% group="Sensor"
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }
}