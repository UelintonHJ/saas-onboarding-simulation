import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const hasTasks = tasks.length > 0;

    if (!hasTasks) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full bg-white p-8 rounded-xl shadow text-center">
                    <h2 className="text-2xl font-semibold mb-3">
                        Seu dia começa aqui
                    </h2>

                    <p className="text-gray-600 mb-8">
                        Você ainda não tem tarefas criadas <br />
                        Defina a próxima ação e dê forma ao seu dia.
                    </p>

                    <button
                        onClick={() => navigate("/first-task")}
                        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                    >
                        Criar primeira tarefa
                    </button>

                    <button
                        onClick={() => alert("Exemplos em breve")}
                        className="mt-4 text-sm text-gray-500 hover:text-gray-700 transition"
                    >
                        Ver exemplos
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-2xl font-semibold mb-6">
                Seu dia
            </h1>

            <div className="max-w-md bg-white p-4 rounded-xl shadow">
                <h2 className="text-sm text-gray-500 mb-2">
                    Próxima tarefa
                </h2>

                <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <span className="text-gray-800">
                        {tasks[0].title}
                    </span>
                </div>
            </div>
        </div>
    );
}