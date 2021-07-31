
import { Payload } from './Payload';
export class Astronaut implements Payload {
    // properties and methods
    name: string;
    massKg: number;
    
    constructor( massKG: number, name: string){
        this.name = name;
        this.massKg = massKG;
    }
}

