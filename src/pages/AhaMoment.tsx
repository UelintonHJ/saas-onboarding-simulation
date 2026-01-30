import StepMotion from "../components/StepMotion";
import { useNavigate } from "react-router-dom";
import { useStepTransition } from "../hooks/useStepTransition";
import ProgressIndicator from "../components/ProgressIndicator";
import { saveOnboardingStep } from "../lib/onboardingStorage";
import { useOnboardingStepTracking } from "../hooks/useOnboardingStepTracking";

export default function AhaMoment() {
    const navigate = useNavigate();
    const { markCompleted } = useOnboardingStepTracking({
        step: "aha",
    });

    const { loading, start } = useStepTransition({
        eventName: "aha",
        onComplete: () => {
            saveOnboardingStep("done");
            markCompleted();
            navigate("/dashboard");
        },
    });

    return (
        <StepMotion>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full bg-white p-8 rounded-xl shadow text-center">
                    <ProgressIndicator
                        current={3}
                        total={3}
                        label="Tudo pronto"
                    />
                    <h2 className="text-2xl font-semibold leading-tight mb-4">
                        Boa! Você já começou 👏
                    </h2>

                    <p className="text-gray-600 mb-8">
                        Essa é a parte mais difícil. <br />
                        Daqui pra frente, fica mais fácil.
                    </p>

                    <div className="mb-8">
                        <div className="h-3 bg-gray-200 rounded-full">
                            <div className="h-3 bg-black rounded-full w-1/4"></div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            Primeira tarefa criada
                        </p>
                    </div>

                    <button
                        disabled={loading}
                        onClick={start}
                        className={`w-full py-3 rounded-lg transition
                            ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-black hover:bg-gray-800 text-white"
                            }
                        `}
                    >
                        {loading ? "Preparando seu dia..." : "Ver meu dia"}
                    </button>
                </div>
            </div>
        </StepMotion>
    );
}