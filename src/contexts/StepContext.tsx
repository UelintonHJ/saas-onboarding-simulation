import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { track } from "../lib/analytics";

type Step = "welcome" | "first_task" |"aha" | "dashboard";

type StepContextType = {
    goToStep: (step: Step, event?: string) => void;
};

export const StepContext = createContext<StepContextType | null>(null);

export function StepProvider({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();

    function goToStep(step: Step, event?: string) {
        if (event) {
            track(event, { step });
        }

        const map: Record<Step, string> = {
            welcome: "/",
            first_task: "/first-task",
            aha: "/aha",
            dashboard: "/dashboard",
        };

        navigate(map[step]);
    }

    return (
        <StepContext.Provider value={{ goToStep }}>
            {children}
        </StepContext.Provider>
    );
}