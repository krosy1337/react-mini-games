import {Colors} from "types/chess/Colors"

export class Player {
    color: Colors
    name: string

    constructor(color: Colors, name: string) {
        this.color = color
        this.name = name
    }
}