import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

export default function Onboarding({ children }: Props) {
    const location = useLocation();

    return (
        <div className="h-screen overflow-hidden bg-gray-50">
            <AnimatePresence mode="wait">
                <div key={location.pathname}>
                    <div key={location.pathname} className="h-full">
                        {children}
                    </div>
                </div>
            </AnimatePresence>
        </div>

    );
}