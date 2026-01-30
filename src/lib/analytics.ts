export function track(event: string, payload?: Record<string, any>) {
    console.log(`[TRACK] ${event}`, payload || {});
}