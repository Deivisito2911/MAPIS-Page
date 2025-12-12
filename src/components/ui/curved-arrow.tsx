"use client"

import { FadeIn } from "@/components/animations/fade-in"

interface CurvedArrowProps {
    direction?: "left" | "right"
    className?: string
}

export function CurvedArrow({ direction = "right", className }: CurvedArrowProps) {
    return (
        <FadeIn className={`flex justify-center w-full py-4 opacity-40 ${className}`}>
        <svg
            width="100"
            height="80"
            viewBox="0 0 100 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-24 h-24 text-mapis-yellow ${direction === "left" ? "-scale-x-100" : ""}`}
        >
            <path
            d="M10 10 C 40 10, 60 40, 50 70"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="10 10"
            className="animate-pulse"
            />
            <path
            d="M50 70 L 40 55 M 50 70 L 65 60"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
        </FadeIn>
    )
}