import Image from "next/image";

import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-12 tablet:flex-row tablet:space-x-12 tablet:space-y-0">
            <div className="w-full space-y-12">
                <div className="text-center space-y-8 tablet:text-left">
                    <p className="text-2xl desktop:text-4xl">
                        <a className="font-instrument-serif">Tu comunidad</a><br />
                        de <a className="font-medium">inteligencia artificial</a> en Chile
                    </p>
                    <p className="text-md text-space desktop:text-lg">
                        AIClub es tu comunidad estudiantil para aprender y conectar alrededor de la inteligencia artificial en Chile
                    </p>
                </div>
                <div className="flex flex-col w-full space-y-4 px-16 tablet:flex-row tablet:space-y-0 tablet:space-x-4 tablet:px-0">
                    <Button variant="default" size="lg">Sé parte</Button>
                    <Button variant="secondary" size="lg">Conóce más</Button>
                </div>
            </div>
            <div className="relative w-full h-[16rem] tablet:h-[30rem] desktop:h-[32rem]">
                <Image 
                    className="rounded-xl object-cover"
                    src="/hero_image.png" 
                    alt="Hero" 
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                />
            </div>
        </div>
    )
}