import { AppConfig } from './AppConfig';


const urlB64ToUint8Array = (base64String: string) => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
    const rawData = atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

const showLocalNotification = (title: string, body: string, swRegistration: ServiceWorkerRegistration) => {
    const options = {
      body,
      // here you can add more properties like icon, image, vibrate, etc.
    }
    swRegistration.showNotification(title, options)
}


const getSubscriptionAndAddToken = (registration: any) => {
    return registration.pushManager.getSubscription().then((subscription: any) => {
        console.log('Subscription: ', subscription);
        if (!subscription) {
            const generatedSubscription = registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlB64ToUint8Array(AppConfig.PUSH_VAPID_PUBLIC_KEY),
            }).then((generated: any) => {
                console.log(generated);
            });
            
            registration.addEventListener('push', function(event: any) {
                if (event.data) {
                  console.log('Push event!! ', event.data.text())
                  showLocalNotification('Test Data', event.data.text(), registration)
                } else {
                  console.log('Push event but no data')
                }
            })

            return generatedSubscription;            
        }
        return subscription;
    });
}

export function register() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(registration => {
                console.log('SW registered: ', registration);
                if (!("Notification" in window)) return console.log('Push notifications are not allowed on this browser');
                const { permission } = window.Notification;

                if (permission === 'denied') return console.log('This user navigator has explicitly not allowed push notifications');
                
                if (permission === 'granted') return getSubscriptionAndAddToken(registration);

                if (permission === 'default') {
                    return window.Notification.requestPermission().then((permission: string) => {
                        if ( permission === 'granted') {
                            return getSubscriptionAndAddToken(registration);  
                        }
                    });
                }
                
            });
        });
    }
}
