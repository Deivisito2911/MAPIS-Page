import { TransitionScreen } from "@/components/ui/transition-screen"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
        <TransitionScreen />
        {children}
        </>
    )
}