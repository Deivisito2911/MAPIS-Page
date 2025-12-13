"use client"

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export function StatsBar() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

    return (
        <section className="bg-mapis-yellow" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-black/10">
            <div>
                <div className="text-4xl lg:text-5xl font-bold text-mapis-blue mb-2 tabular-nums">
                + <CountUp end={17} duration={2.5} start={inView ? null : 0} />
                </div>
                <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Años de Historia</div>
            </div>
            <div>
                <div className="text-4xl lg:text-5xl font-bold text-mapis-blue mb-2 tabular-nums">
                <CountUp end={100} duration={2.5} start={inView ? null : 0} suffix="%" />
                </div>
                <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Compromiso</div>
            </div>
            <div>
                <div className="text-4xl lg:text-5xl font-bold text-mapis-blue mb-2 tabular-nums">
                <CountUp end={3} duration={2} start={inView ? null : 0} />
                </div>
                <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Pilares Educativos</div>
            </div>
            <div>
                <div className="text-4xl lg:text-5xl font-bold text-mapis-blue mb-2">Top</div>
                <div className="text-sm font-medium text-blue-900 uppercase tracking-wide">Nivel Académico</div>
            </div>
            </div>
        </div>
        </section>
    )
}