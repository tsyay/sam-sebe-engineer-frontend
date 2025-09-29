import type { Instruction, Step, ElectronicComponent } from "../../entities";
import { getElectronicComponentById } from "./ElectronicComponents";

import image from "../assets/tempImage.png";
const instructions: Instruction[] = [
  {
    instructionId: 1,
    title: "Сборка простого радиоприёмника",
    description:
      "Пошаговое руководство по сборке детекторного радиоприёмника...",
    previewImage: image,
    components: [1, 5, 7], 
    steps: [
      {
        stepId: 1,
        image: image,
        title: "Намотка катушки",
        description: "Намотайте 50 витков эмалированного провода...",
        instructionId: 1,
      },
      // ...
    ],
  },
  {
    instructionId: 2,
    title: "Сборка мигающего светодиода",
    description: "Проект с использованием микросхемы NE555...",
    previewImage: image,
    components: [1, 2, 3, 6], 
    steps: [
      {
        stepId: 1,
        image: image,
        title: "Установка микросхемы NE555",
        description: "Поместите NE555 на макетную плату...",
        instructionId: 2,
      },
      // ...
    ],
  },
  {
    instructionId: 3,
    title: "Сборка усилителя на транзисторе",
    description: "Простой аудиоусилитель на транзисторе BC547...",
    previewImage: image,
    components: [2, 4, 10], 
    steps: [
      {
        stepId: 1,
        image: image,
        title: "Подключение транзистора",
        description: "Установите транзистор BC547 на макетную плату...",
        instructionId: 3,
      },
      // ...
    ],
  },
];

// Получить все инструкции
export function getAllInstructions(): Instruction[] {
  return instructions;
}

// Получить инструкцию по id
export function getInstructionById(id: number): Instruction | undefined {
  return instructions.find((instr) => instr.instructionId === id);
}

// Получить шаги инструкции
export function getStepsByInstructionId(id: number): Step[] {
  return getInstructionById(id)?.steps ?? [];
}

// Получить шаг по stepId
export function getStepById(
  instructionId: number,
  stepId: number
): Step | undefined {
  return getInstructionById(instructionId)?.steps.find(
    (step) => step.stepId === stepId
  );
}

export function getComponentsForInstruction(
  instruction: Instruction
): ElectronicComponent[] | undefined {
  return instruction.components
    ?.map((id) => getElectronicComponentById(id))
    .filter((comp): comp is ElectronicComponent => comp !== undefined);
}
