import type { ElectronicComponent } from "../../entities"

interface ElectronicComponentViewerProps{
    component: ElectronicComponent
}

export const ElectronicComponentViewer = ({component} : ElectronicComponentViewerProps) => {
    return (
        <div className="w-full flex flex-row gap-3 mt-[80px] bg-white rounded-[30px] drop-shadow-lg p-4">
            <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-[48px] font-bold text-center">{component.title}</h2>
                <p className="text-[24px] font-light text-justify">{component.description}</p>
            </div>
            <div className="flex-1">
                <img src={component.image} className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}