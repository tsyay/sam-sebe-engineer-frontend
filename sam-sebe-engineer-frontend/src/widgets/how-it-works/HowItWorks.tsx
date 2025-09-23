import { StepCard } from './ui'
import boy from './ui/assets/images/HowItWorksBoy.png'

export const HowItWorks = () => {
    return (
        <div className='w-full h-fit flex flex-col justify-center gap-3 py-[64px]'>
            <h2 className="text-[72px]">Как это работает?</h2>
            <div className="w-full h-fit flex flex-row gap-3 items-center">
                <div className="flex-1">
                    <img src={boy} className='rounded-[30px]'/>
                </div>
                <div className="flex-1 flex flex-col gap-3 justify-center">
                    <StepCard stepNumber={1} title='Выбери проект' description='Открой инструкцию на телефоне или компьютере'/>
                    <StepCard stepNumber={2} title='Собери схему' description='Вставляй компоненты в макетную плату'/>
                    <StepCard stepNumber={3} title='Запускай' description='Оцени результат и эксперментируй!'/>
                </div>
            </div>
        </div>
    )
}