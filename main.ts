//% weight=0 color=#3CB371 icon="\uf0ad" block="Task"

namespace task {        
    //% blockId="TaskStart" block="start task"
    //% blockGap=0 weight=0
    export function TaskStart(): void {
       basic.show_icon(IconNames.HAPPY)
    }
    
    //% blockId="TaskStop" block="stop task"
    //% blockGap=0 weight=0
    export function TaskStop(): void {
        basic.show_icon(IconNames.SAD)
    }
}