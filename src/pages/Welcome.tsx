import StepMotion from "../components/StepMotion";
import { useNavigate } from "react-router-dom";
import { useStepTransition } from "../hooks/useStepTransition";
import ProgressIndicator from "../components/ProgressIndicator";
import { saveOnboardingStep } from "../lib/onboardingStorage";
import { useOnboardingStepTracking } from "../hooks/useOnboardingStepTracking";

export default function Welcome() {
    const navigate = useNavigate();
    const { markCompleted } = useOnboardingStepTracking({
        step: "welcome",
    });

    const { loading, start } = useStepTransition({
        eventName: "welcome",
        onComplete: () => {
            saveOnboardingStep("first_task");
            markCompleted();
            navigate("/first-task");
        },
    });

    const { loading: skipLoading, start: skip } = useStepTransition({
        eventName: "welcome_skip",
        onComplete: () => {
                saveOnboardingStep("done");
                navigate("/dashboard");
            },
    });

    return (
        <StepMotion>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full bg-white p-8 rounded-xl shadow">
                    <ProgressIndicator 
                        current={1}
                        total={3}
                        label="Começando"
                    />
                    <h1 className="text-2xl font-semibold leading-tight mb-4 text-center">
                        Organize seu dia em 60 segundos
                    </h1>

                    <p className="text-gray-600 mb-6 text-center">
                        Crie uma tarefa simples e veja o dia ganhar forma.
                    </p>

                    <button
                        disabled={loading}
                        onClick={start}
                        className={`w-full py-3 rounded-lg transition
                            ${loading
                                ? "bg-gray-400 cursor-not-allowed text-white"
                                : "bg-black hover:bg-gray-800 text-white"
                            }
                        `}
                    >
                        {loading ? "Iniciando sua experiência..." : "Começar agora"}
                    </button>

                    {loading && (
                        <p className="text-xs text-gray-400 mt-3 text-center">
                            Isso leva menos de um segundo.
                        </p>
                    )}

                    {!loading && (
                        <p className="text-sm text-gray-400 mt-3 text-center">
                            Sem cadastro extra. Sem configurações.
                        </p>
                    )}

                    <button
                        disabled={loading || skipLoading}
                        onClick={skip}
                        className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition"
                    >
                        Quero explorar primeiro
                    </button>

                </div>
            </div>
        </StepMotion>
    );
}