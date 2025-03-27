

export const subscription = [
    {
        id: '1',
        name: '1 Month',
        price: '$25',
    },
    {
        id: '2',
        name: '6 Months',
        price: '$75',
    },
    {
        id: '3',
        name: '1 Year',
        price: '$100',
    },


];

export function getSubscription() {
    return subscription;
}

export function getSubscriptionById(subId) {
    return subscription.find((sub) => sub.id === subId);
}