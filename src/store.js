  import { writable, derived, get } from 'svelte/store';

  // Initialize the cart store with an empty array
  export const cart = writable([]);

  // Add an item to the cart
// export const addItem = (item) => {
//   cart.update((items) => [...items, item]);
// };



export const addItem = (item) => {
    console.log(`ITEM ADDED ${item}`)
    changeTab('Handlekurv');

    if(get(formSubmitted) == true) {

        cart.set([item]);
        changeFormSubmitted(false);
        return;
    }

  cart.update((items) => {
    const existingItem = items.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
      console.log('OLD ELEMENT ADDED');
      return items;
    }
    console.log('NEW ITEM ADDED');
    return [...items, { ...item, quantity: 1 }];
  });
};


// Remove an item from the cart
export const removeItem = (item) => {
    cart.update((items) => {
    const existingItem = items.find((i) => i.id === item.id);

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
      return items;
    }

    return items.filter((i) => i !== item);
  });
//   cart.update((items) => items.filter((i) => i !== item));
};


export const currentTab = writable('Hjem');

export const changeTab = (tabName) => currentTab.set(tabName);

export const formSubmitted = writable(false);

export const changeFormSubmitted = (value) => formSubmitted.set(value);


// export const getTotal = () => {
//   let total = 0;
//   cart.subscribe((items) => {
//     total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   });
//   console.log(`TOTAL CHANGED: ${total}`);
//   return total;
// };

// export const cartLength = derived(cart, ($cart) => {
//   return $cart.length;
// });