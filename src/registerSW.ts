import { AppConfig } from './AppConfig';

export function register() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(registration => {
                console.log('SW registered: ', registration);
                return registration.pushManager.getSubscription().then(subscription => {
                    console.log('Subscription: ', subscription);
                    return registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: AppConfig.PUSH_VAPID_PUBLIC_KEY,
                    });
                });
            });
        });
    }
}
