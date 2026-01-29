"use client"

import Image from "next/image"
import Link from "next/link"
import { Trophy } from "lucide-react"

// Datos de las selecciones (Placeholder)
const SELECTIONS = [
    { name: "Futbol", image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692472/Futbol_aytopv.png" }, // Usa fotos reales luego
    { name: "MAPIS MUN", image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692102/13988190_1444960418864013_2553848460531388932_o_jgjltj.jpg" },
    { name: "Voleibol", image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692394/Voleibol_hzkrzw.jpg" },
    { name: "Ajedrez", image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769691905/chess-tournament-kids-adults-participate-600nw-2476201135_ppih1f.webp" },
    { name: "kickingball", image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692610/kickingball_ahntej.jpg" },
    { name: "Robótica", image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769690548/Mapis_Robotic_Team_2_zhnoor.png" },
    { name: "Coral", image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692719/coro_ductqw.jpg" },
    { name: "Baloncesto", image: "https://res.cloudinary.com/dnwyno39r/image/upload/v1769692841/baloncesto_a9vu8f.jpg" },
]

// Función para duplicar elementos y crear el loop infinito
const InfiniteRow = ({ items, direction, speed }: { items: typeof SELECTIONS, direction: 'left' | 'right', speed: string }) => {
    return (
        <div className="flex overflow-hidden group py-4">
        <div className={`flex gap-6 pr-6 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`} style={{ animationDuration: speed }}>
            {/* Renderizamos duplicado para el efecto infinito */}
            {[...items, ...items, ...items].map((item, idx) => (
            <Link 
                href="/vida-mapis/selecciones" 
                key={idx}
                className="relative w-64 h-40 md:w-80 md:h-52 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-mapis-yellow hover:z-10 grayscale hover:grayscale-0 cursor-pointer"
            >
                <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mapis-blue/90 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-mapis-yellow" />
                    <span className="text-white font-bold text-lg uppercase tracking-wider">{item.name}</span>
                </div>
                </div>
            </Link>
            ))}
        </div>
        </div>
    )
}

export function SelectionsShowcase() {
  // Dividimos las selecciones para variar las filas
const row1 = SELECTIONS.slice(0, 4)
const row2 = SELECTIONS.slice(4, 8)
const row3 = [...SELECTIONS].reverse().slice(0, 5)

return (
<div className="w-full overflow-hidden bg-slate-50 py-10 relative">
    {/* Fondo decorativo opcional */}
    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none" />
    
    <div className="text-center mb-8 px-4 relative z-10">
    <span className="text-mapis-yellow font-bold tracking-widest uppercase text-sm">Orgullo MAPIS</span>
    <h2 className="text-3xl md:text-4xl font-bold text-mapis-blue mt-2">Nuestras Selecciones</h2>
    <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm">
        Disciplina, pasión y talento. Pasa el mouse sobre las tarjetas para explorar.
    </p>
    </div>

    <div className="flex flex-col gap-2 relative z-10">
    {/* Fila 1: Izquierda */}
    <InfiniteRow items={row1} direction="left" speed="40s" />
    
    {/* Fila 2: Derecha (Efecto cruzado) */}
    <InfiniteRow items={row2} direction="right" speed="45s" />
    
    {/* Fila 3: Izquierda 
    <InfiniteRow items={row3} direction="left" speed="35s" /> */}
    </div>

    {/* Degradados laterales para suavizar la entrada/salida */}
    <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-slate-50 to-transparent z-20" />
    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-slate-50 to-transparent z-20" />
</div>
)
}