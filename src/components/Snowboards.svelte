<script>
import { addItem, removeItem, cart, } from '../store.js';
// let cart = [];
let products = [
	{id: 1, name: "Nitro Team Split", image: "bilder/snowboard1.jpg", price: 6.699, quantity: 1},
    {id: 2, name: "Nitro Slash Split", image: "bilder/snowboard2.jpg", price: 7.499, quantity: 1},
    {id: 3, name: "Nitro Squash Split", image: "bilder/snowboard3.jpg", price: 7.199, quantity: 1},
    {id: 4, name: "Nitro Doppleganger", image: "bilder/snowboard4.jpg", price: 8.499, quantity: 1},
    {id: 5, name: "Nitro Volta Split", image: "bilder/snowboard5.jpg", price: 6.599, quantity: 1},
    {id: 6, name: "Nitro Miniganger", image: "bilder/snowboard6.jpg", price: 4.499, quantity: 1},

]


const addToCart = (product) => {
	addItem(product);

}

const minusItem = (product) => {

	removeItem(product);
	// for(let item of cart) {
	// 		if(item.id === product.id) {
	// 			if(product.quantity > 1 ) {
	// 					product.quantity -= 1
	// 					cart = cart
	// 			} else {
	// 					cart = cart.filter((cartItem) => cartItem != product)
	// 			}
	// 			return;
	// 		}
	// }
}

const plusItem = (product) => {
	// for(let item of cart) {
	// 	if(item.id === product.id) {
	// 		item.quantity += 1
	// 		cart = cart;
	// 		return;
	// 	}
	// }
}

// $: total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
let total = 0;


cart.subscribe(items=> {
	total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
})
// $: total = getTotal()
</script>


<div class="product-list">
	{#each products as product}
	<div class="products">
    <div class="image" style="background-image: url({product.image}"></div>
	<h4>{product.name}</h4>
	<p>{product.price},-</p>
	<!-- svelte-ignore a11y-missing-attribute -->
	<button class="button-product" on:click={() => addToCart(product)}>Kjøp  <img width='15' src='bilder/shoppingbag.png'></button>
	</div>
	{/each}

		<!-- <h4>Total sum: {total}kr</h4> 
		<button>Kjøp</button> -->

		
	<!-- {#if $cart.length > 0}
	<p>Det er {cart.length} produkter i handlekurven din.</p>
	<div class="cart-list">
	{#each $cart as item }
		{#if item.quantity > 0}
		<div class="cart-item">
			<img width="50" src={item.image} alt={item.name}/>
			<div>{item.quantity}
				<button class="button-cart" on:click={() => plusItem(item)}>+</button>
				<button class="button-cart" on:click={() => minusItem(item)}>-</button>
			</div>
			<p>{item.price * item.quantity}kr</p>
		</div>
		{/if}
	{/each}
	<div class="total">
		<h4>Total sum: {total}kr</h4> 
		<button>Kjøp</button>
		
	</div>
	</div>
	{/if} -->
</div>

<style>
.product-list {
	display: grid;
	grid-template-columns: repeat(3, 3fr);
	padding-bottom: 50px;
	padding-top: 50px;
	float: center;
    text-align: center;
}

/* .image {
	width: 100px;
	height: 100px;
	object-fit: cover;
} */

.products {
    padding-bottom: 50px;
}

.image:hover{
    font-size: larger;
}

.button-product {
  transition-duration: 0.4s;
  border: 1px solid black;
  background-color: white;
}

.button-product:hover {
  color: black;
  cursor: grab;
  border: 1px solid lightgray;
  font-size: larger;
}
</style>