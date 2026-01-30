type Props = {
    current: number;
    total: number;
    label?:string;
}

export default function ProgressIndicator({ current, total, label }: Props) {
    const percentage = (current / total) * 100;

    return (
        <div className="mb-6">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-black transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
                {label ?? `Passo ${current} de ${total}`}
            </p>
        </div>
    )
}