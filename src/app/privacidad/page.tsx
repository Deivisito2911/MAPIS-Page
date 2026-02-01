import { Metadata } from "next"
import { Shield, Lock, FileText, UserCheck } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
    title: "Política de Privacidad | U.E. Mariano Picón Salas",
    description: "Términos de uso y políticas de protección de datos personales.",
}

export default function PrivacidadPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            
            {/* Header */}
            <div className="bg-mapis-blue px-8 py-10 text-white text-center">
                <FadeIn>
                    <Shield className="w-12 h-12 mx-auto mb-4 text-mapis-yellow" />
                    <h1 className="text-3xl font-bold uppercase">Política de Privacidad</h1>
                    <p className="mt-2 text-blue-100">Protección de Datos y Seguridad de la Información</p>
                </FadeIn>
            </div>

            {/* Contenido Legal */}
            <div className="p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed">
                
                <FadeIn delay={100}>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                        <Lock className="w-5 h-5 text-mapis-blue" /> 
                        1. Alcance y Marco Legal
                    </h2>
                    <p>
                        La Unidad Educativa "Mariano Picón Salas" (en adelante "La Institución") se compromete a proteger la privacidad de los datos personales de nuestra comunidad educativa (estudiantes, representantes, personal docente y administrativo). 
                    </p>
                    <p className="mt-2">
                        Esta política se rige por lo establecido en la <strong>Constitución de la República Bolivariana de Venezuela</strong> (Artículos 28 y 60 sobre el Habeas Data y la protección al honor), así como la <strong>Ley Orgánica de Protección de Niños, Niñas y Adolescentes (LOPNNA)</strong>, garantizando el Interés Superior del Niño en todo manejo de información.
                    </p>
                </FadeIn>

                <FadeIn delay={200}>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                        <FileText className="w-5 h-5 text-mapis-blue" /> 
                        2. Recolección y Uso de Datos
                    </h2>
                    <p>
                        A través de este sitio web (www.uemapís.com.ve) y nuestros sistemas internos (Arcadat), recolectamos información únicamente con fines educativos y administrativos. Esto incluye:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Datos de identificación del estudiante y sus representantes.</li>
                        <li>Registros académicos (calificaciones, asistencias).</li>
                        <li>Datos de contacto para comunicaciones oficiales.</li>
                    </ul>
                    <p className="mt-2 text-sm bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                        <strong>Importante:</strong> La Institución no comercializa, cede ni transfiere datos personales a terceros, salvo requerimientos expresos de autoridades competentes (Ministerio del Poder Popular para la Educación).
                    </p>
                </FadeIn>

                <FadeIn delay={300}>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                        <UserCheck className="w-5 h-5 text-mapis-blue" /> 
                        3. Uso de Imágenes de Menores (LOPNNA)
                    </h2>
                    <p>
                        Conforme al Artículo 65 de la LOPNNA (Derecho al Honor, Reputación, Propia Imagen y Vida Privada), la publicación de fotografías o videos de estudiantes en nuestros medios digitales tiene fines estrictamente <strong>institucionales, académicos y culturales</strong> (ej. eventos deportivos, actos de grado, actividades pedagógicas).
                    </p>
                    <p className="mt-2">
                        Al formalizar la inscripción, los representantes legales otorgan su consentimiento para este uso. No obstante, cualquier representante tiene el derecho de solicitar la <strong>no publicación</strong> o el retiro de imágenes específicas de su representado dirigiendo una carta a la Dirección del Plantel.
                    </p>
                </FadeIn>

                <FadeIn delay={400}>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                        4. Enlaces a Terceros
                    </h2>
                    <p>
                        Nuestro sitio web contiene enlaces a plataformas externas, específicamente al sistema de gestión académica <strong>ARCADAT</strong> (uemapis.com.ve). La Institución no se hace responsable por las políticas de privacidad o el contenido de sitios externos, aunque velamos porque nuestros proveedores cumplan con altos estándares de seguridad.
                    </p>
                </FadeIn>

                <hr className="border-gray-200 my-8" />

                <div className="text-sm text-gray-500 text-center">
                    <p>Última actualización: Enero 2026</p>
                    <p>U.E. Mariano Picón Salas - Isla de Margarita, Venezuela.</p>
                </div>

            </div>
        </div>
        </div>
    )
}