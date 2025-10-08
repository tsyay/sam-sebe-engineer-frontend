export type ComponentId = Brand<number, 'ComponentId'>
export type Url = string & { __brand: 'Url' }
export type HexColor = string & { __brand: 'HexColor' }

export type Component = {
    readonly componentId: ComponentId
    readonly title: string
    readonly description: string
    readonly image: Url
    readonly backgroundColor?: HexColor
}