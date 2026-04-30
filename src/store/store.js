import { atom } from "jotai";

const countAtom = atom(0);
const orderAtom = atom([])

const totalAmountAtom = atom((get)=> {
    const orders = get(orderAtom);
    let amount = 0;
    orders.forEach((order) => {
        amount += order.amount;
    })
    return amount;
})

export {countAtom,orderAtom, totalAmountAtom}