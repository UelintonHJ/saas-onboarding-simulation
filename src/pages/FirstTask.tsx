import StepMotion from "../components/StepMotion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStepTransition } from "../hooks/useStepTransition";
import ProgressIndicator from "../components/ProgressIndicator";
import { saveOnboardingStep } from "../lib/onboardingStorage";
import { useOnboardingStepTracking } from "../hooks/useOnboardingStepTracking";

export default function FirstTask() {
    const [task, setTask] = useState("");
    const navigate = useNavigate();
    const { markCompleted } = useOnboardingStepTracking({
        step: "first_task",
    });

    const { loading, start } = useStepTransition({
        eventName: "first_task",
        eventData: { task },
        onComplete: () => {
            localStorage.setItem("tasks", JSON.stringify([
                {
                    id: Date.now(),
                    title: task,
                    completed: false,
                }
            ]));

            saveOnboardingStep("aha");
            markCompleted();
            navigate("/aha");
        },
    });


    return (
        <StepMotion>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full bg-white p-8 rounded-xl shadow">
                    <ProgressIndicator
                        current={2}
                        total={3}
                        label="Criando sua primeira tarefa"
                    />
                    <h2 className="text-xl font-semibold mb-2">
                        O que você quer fazer primeiro?
                    </h2>

                    <p className="text-gray-600 mb-4">
                        Algo pequeno já é um ótimo começo.
                    </p>

                    <input
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Ex: Estudar React por 30 minutos"
                        className="w-full border rounded-lg px-4 py-3 mb-4"
                        disabled={loading}
                    />

                    <button
                        disabled={loading || !task.trim()}
                        onClick={start}
                        className={`w-full py-3 rounded-lg transition
                        ${loading
                                ? "bg-gray-400 cursor-not-allowed text-white"
                                : "bg-black hover:bg-gray-800 text-white"
                            }
                    `}
                    >
                        {loading ? "Guardando sua primeira tarefa..." : "Salvar e continuar"}
                    </button>
                </div>
            </div>
        </StepMotion>
    )
}