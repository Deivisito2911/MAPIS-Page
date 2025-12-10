import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Construction } from "lucide-react"

export default function ConstructionPage() {
return (
<div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-slate-50">
    <div className="bg-white p-6 rounded-full shadow-sm mb-6 animate-pulse">
    <Construction className="h-16 w-16 text-mapis-blue" />
    </div>
    
    {/* CAMBIAR ESTE TÍTULO EN CADA PÁGINA */}
    <h1 className="text-3xl md:text-5xl font-bold text-mapis-blue mb-4">
    Educación primaria
    </h1>
    
    <p className="text-xl text-gray-600 max-w-md mb-8">
    Estamos construyendo esta sección. Pronto estará disponible con toda la información oficial del colegio.
    </p>
    
    <Button asChild size="lg" className="bg-mapis-yellow text-mapis-blue hover:bg-yellow-400 font-bold">
    <Link href="/">Volver al Inicio</Link>
    </Button>
</div>
)
}