import { Link } from "react-router"
import type { Instruction } from "../../../entities"

interface InstructionCardProps {
    instruction: Instruction,
} 

export const InstructionCard = ({instruction} : InstructionCardProps) => {
    return (
        <Link to={`/instruction/${instruction.instructionId}`} className="flex flex-col gap-3">
            <h3 className="text-[24px]">{instruction.title}</h3>
            <p className="font-light text-justify">{instruction.description}</p>
        </Link>
    )   
}