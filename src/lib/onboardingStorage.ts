export type OnboardingStep = "welcome" | "first_task" | "aha" | "done";

const KEY = "onboarding_step";

export function saveOnboardingStep(step: OnboardingStep) {
    localStorage.setItem(KEY, step);
}

export function getOnboardingStep(): OnboardingStep | null {
    return localStorage.getItem(KEY) as OnboardingStep | null;
}

export function clearOnboarding() {
    localStorage.removeItem(KEY);
}