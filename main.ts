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

    export enum learnID {
        ID1 = 1,
        ID2 = 2,
        ID3 = 3,
        ID4 = 4,
        ID5 = 5
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

    //% block="Learn an object with: %thingsID"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Learn" weight=81
    //% color=#00B1ED
    export function learnObject(thingsID: learnID): void {
   
    }

    //% block="Clear learned objects"
    //% group="Learn" weight=15 
    //% color=#00B1ED
    export function ClearlearnObject(): void {

    }

    //% block="Image contains learned objects: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Learn" weight=82 
    //% color=#00B1ED
    export function objectCheck(status: learnID): boolean {

    }

    //% block="In the image get learn object %thingsID Confidence"
    //% group="Learn" weight=83 
    //% color=#00B1ED
    export function objectConfidence(thingsID: learnID): number {

    }
}
