import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex-col w-full h-96 space-y-12">
            <div className="flex w-full h-full flex-col items-center justify-center p-12 space-y-8">
                <p className="text-2xl text-center">
                    <a className="font-instrument-serif">Tu comunidad</a><br />
                    de <a className="font-medium">inteligencia artificial</a> en Chile
                </p>
                <p className="text-lg text-center text-space">
                    AIClub es tu comunidad estudiantil para aprender y conectar alrededor de la inteligencia artificial en Chile
                </p>
            </div>
        </div>
    )
}