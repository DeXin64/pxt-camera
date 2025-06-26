/**
* Functions to micro:bit XGO Robot Kit by ELECFREAKS Co.,Ltd.
*/
//% color=#8600FF icon="\uf1b0"
//% block="xgo" blockId="xgo"
namespace xgo {

    export enum rotate_enum {
        //% block="Left"
        Left,
        //% block="Right"
        Right
    }

    export enum FuncList {
        //% block="Card recognition"
        Card = 2,
        //% block="Face recognition" 
        Face = 6,
        //% block="Ball recognition"
        Ball = 7,
        //% block="Tracking recognition"
        Tracking = 8,
        //% block="Color recognition"
        Color = 9,
        //% block="Learn Object"
        Things = 10
    }
    //% block="rotate %direction,speed is %speed\\%"
    //% speed.min=0 speed.max=100
    export function rotate(direction: rotate_enum, speed: number) {
        let rotate_buffer = pins.createBuffer(9)
        rotate_buffer[0] = 0x55
        rotate_buffer[1] = 0x00
        rotate_buffer[2] = 0x09
        rotate_buffer[3] = 0x00
        rotate_buffer[4] = 0x32
        rotate_buffer[7] = 0x00
        rotate_buffer[8] = 0xAA
        if (speed > 100)
            speed = 100
        if (speed < 0)
            speed = 0
        switch (direction) {
            case rotate_enum.Right:
                rotate_buffer[5] = Math.map(speed, 0, 100, 128, 0)
                rotate_buffer[6] = ~(0x09 + 0x00 + 0x32 + rotate_buffer[5])
                break
            case rotate_enum.Left:
                rotate_buffer[5] = Math.map(speed, 0, 100, 128, 255)
                rotate_buffer[6] = ~(0x09 + 0x00 + 0x32 + rotate_buffer[5])
                break
        }
        serial.writeBuffer(rotate_buffer)
    }

    //% block="Initialize AI-Lens"
    //% group="Basic" weight=80
    //% color=#00B1ED
    export function initModule(): void {
    }


    //% block="Switch function as %fun"
    //% fun.fieldEditor="gridpicker"
    //% fun.fieldOptions.columns=3
    //% group="Basic" weight=95
    //% color=#00B1ED
    export function switchfunc(fun: FuncList): void {

    }
}
