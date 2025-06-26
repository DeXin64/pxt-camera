/**
 * This extension is designed to programme and drive the Smart AI Lens(二郎神)
 */
//% color=#0031AF icon="\uf06e" 
//% groups='["Basic", "Ball", "Face", "Card", "Color", "Tracking", "Learn"]'
//% block="PlanetX_AI-Lens"
namespace PlanetX_AILens {
 
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

    //% block="Initialize AI-Lens"
    //% group="Basic" weight=200
    //% color=#00B1ED
    export function initModule(): void {
    }


    //% block="Switch function as %fun"
    //% fun.fieldEditor="gridpicker"
    //% fun.fieldOptions.columns=3
    //% group="Basic" weight=80
    //% color=#00B1ED
    export function switchfunc(fun: FuncList): void {

    }
}
