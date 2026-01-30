import { useState } from "react";
import { track } from "../lib/analytics";

type UseStepTransitionParams = {
    eventName: string;
    eventData?: Record<string, any>;
    delay?: number;
    onComplete: () => void;
};

export function useStepTransition({
    eventName,
    eventData = {},
    delay = 600,
    onComplete,
}: UseStepTransitionParams) {
    const [loading, setLoading] = useState(false);

    function start() {
        if (loading) return;

        setLoading(true);

        track(eventName, {
            ...eventData,
        });

        setTimeout(() => {
            onComplete();
        }, delay);
    }

    return {
        loading,
        start,
    };
}