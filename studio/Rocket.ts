import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
export class Rocket {
    // properties and methods
    totalCapacityKg: number;
    name: string;
    astronauts: Astronaut[] = [];
    cargoItems: Cargo[]= [];

    constructor( name: string, totalCapacityKg: number,){
        this.totalCapacityKg = totalCapacityKg
        this.name = name
    }

    sumMass( items: Payload[] ): number {
    let sum = 0
    for(let i=0; i < items.length; i++){
        sum = sum + items[i].massKg
   
    }
    return sum;
    }
    currentMassKg(): number {
       let astronautsMass = this.sumMass(this.astronauts);
       let cargoMass = this.sumMass(this.cargoItems);
        return astronautsMass+cargoMass;
    }
    canAdd(item: Payload): boolean{
        
        return this.currentMassKg() +  item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo)
            return true;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
        
            this.astronauts.push(astronaut);
            return true;
        } 
            return false;
        
    }
}