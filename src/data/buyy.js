

export const buyy = [

    {
        id: 1
    },
];

export function getBuyy() {
    return buyy;
}

export function getBuyyById(buyId) {
    return buyy.find((buy) => buy.id === buyId);
}