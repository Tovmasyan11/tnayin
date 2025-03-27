

export const more = [
    {
        id: '1',
        name: '1 Month',
        price: '$25',
        
    },
    {
        id: '2',
        name: '6 Months',
        price: '$75',
        plus: 'matcheli',
    },
    {
        id: '3',
        name: '1 Year',
        price: '$100',
        plus: 'matcheli+qo anvan koxqy astx e linelu'
    },
   


];

export function getMore() {
    return more;
}

export function getMoreById(morId) {
    return more.find((mor) => mor.id === morId);
}