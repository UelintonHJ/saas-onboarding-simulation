import { useEffect, useRef } from "react";
import { track } from "../lib/analytics";

type Params = {
    step: string;
}

export function useOnboardingStepTracking({ step }: Params) {
    const completedRef = useRef(false);

    useEffect(() => {
        track("onboarding_step_viewwd", {
            step,
        });

        return () => {
            if (!completedRef.current) {
                track("onboarding_step_abandoned", {
                    step,
                });
            }
        };
    }, [step]);

    function markCompleted() {
        completedRef.current = true;

        track("onboarding_step_completed", {
            step,
        });
    }

    return {
        markCompleted,
    };
}