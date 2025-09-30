import type { ElectronicComponent } from "../component";
import type { Instruction } from "../instruction";

export interface Kit{
    kitId: number,
    title: string,
    description: string,
    images: string[],
    componentIds: Number[],
    instructionIds: Number[] 
}