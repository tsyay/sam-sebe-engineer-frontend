export type KitId = Brand<number, 'KitId'>
export type Url = string & { __brand: 'Url' }
export type ComponentId = Brand<number, 'ComponentId'>
export type InstructionId = Brand<number, 'InstructionId'>

export type Kit = {
    kitId: KitId,
    title: string,
    description: string,
    shortDescription: string,
    images: Url,
    componentIds: ComponentId[],
    instructionIds: InstructionId[] 
}