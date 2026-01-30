import { Routes, Route, useNavigate } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import { getOnboardingStep } from "./lib/onboardingStorage";

import Welcome from "./pages/Welcome";
import FirstTask from "./pages/FirstTask";
import AhaMoment from "./pages/AhaMoment";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const step = getOnboardingStep();

    if (!step) return;

    const map: Record<string, string> = {
      welcome: "/",
      first_task: "/first-task",
      aha: "/aha",
      done: "/dashboard",
    };

    navigate(map[step], { replace: true });
  }, []);

  return (
    <Onboarding>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/first-task" element={<FirstTask />} />
        <Route path="/aha" element={<AhaMoment />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Onboarding>
  )
}