<script>

import { addItem, removeItem, cart, } from '../store.js';

    let products = [
        {id: 7, name: "Snowboard Boots", image: "bilder/snowboardsko.jpg", price: 2.199, quantity: 1},
        {id: 8, name: "Snowboard Bag Navy", image: "bilder/snowboardbag.jpg", price: 2.799, quantity: 1},    
    ]

    const addToCart = (product) => addItem(product);



const minusItem = (product) => removeItem(product);



const plusItem = (product) => addItem(product);
</script>
    
    
    <div class="product-list">
        {#each products as product}
        <div class="products">
        <div class="image" style="background-image: url({product.image})"></div>
        <h4>{product.name}</h4>
        <p>{product.price},-</p>
        <!-- svelte-ignore a11y-missing-attribute -->
        <button class="button-product"  on:click={() => addToCart(product)}>Kjøp  <img width='15' src='bilder/shoppingbag.png'></button>
        </div>
        {/each}
    </div>
    
    <style>
    .product-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-bottom: 50px;
        padding-top: 50px;
        float: center;
        text-align: center;
    }
    
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