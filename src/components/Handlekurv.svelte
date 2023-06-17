<script>
    //import { set_custom_element_data } from 'svelte/internal';

    //import {createEventDispatcher} from 'svelte';
    
    //let dispatch = createEventDispatcher();
    import { addItem, removeItem, cart, formSubmitted, changeFormSubmitted } from '../store.js';



    let info = { fornavn:"", etternavn:"", adresse:"", by:"" }
    let errors = { fornavn:"", etternavn:"", adresse:"", by:"" }
    let valid = false;
    // let formSubmitted =false;


    const submitHandler = () => {
        valid = true;


        if (info.fornavn.trim().length < 1) {
            valid = false;
            errors.fornavn = 'Mangler svar';

        } else {
            errors.fornavn = '';
        }


        if (info.etternavn.trim().length < 1) {
            valid = false;
            errors.etternavn = 'Mangler svar';

        } else {
            errors.etternavn = '';
        }


        if (info.adresse.trim().length < 1) {
            valid = false;
            errors.adresse = 'Mangler svar';

        } else {
            errors.adresse = '';
        }


        if (info.by.trim().length < 1) {
            valid = false;
            errors.by = 'Mangler svar';

        } else {
            errors.by = '';
        }

        if (valid) {
            console.log('valid', info);
            changeFormSubmitted(true);
        }



    }

const addToCart = (product) => addItem(product);



const minusItem = (product) => removeItem(product);



const plusItem = (product) => addItem(product);





let total = 0;


cart.subscribe(items=> {
	total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
})

</script>


<div class="parent">

    <div class="child">

        
        {#if $formSubmitted} 
        <p>Thank you for your purchase. The order will be sent to {info.fornavn}
{info.etternavn} {info.adresse} {info.by}.</p>
        
        {:else if $formSubmitted == false}
        <form on:submit|preventDefault={submitHandler}>
        <div class="form-field"> <!--Navn, Adresse, postnummer, by-->
            <label for="fornavn">Fornavn:</label>
            <input type="text" id="fornavn" bind:value={info.fornavn}>
            <div class="error">{ errors.fornavn }</div>
        </div>
        <div class="form-field">
            <label for="etternavn">Etternavn:</label>
            <input type="text" id="etternavn"bind:value={info.etternavn}>
            <div class="error">{ errors.etternavn }</div>
        </div>
        <div class="form-field">
            <label for="adresse">Adresse:</label>
            <input type="text" id="adresse"bind:value={info.adresse}>
            <div class="error">{ errors.adresse }</div>
        </div>
        <div class="form-field">
        <label for="by">By:</label>
        <input type="text" id="by"bind:value={info.by}>
        <div class="error">{ errors.by }</div>
    </div>
    <button>Send bestilling</button>
</form>
{/if}
</div>

<div class="child">

    
    {#if $cart.length > 0}
<p>Det er {$cart.length} produkter i handlekurven din.</p>
<div class="cart-list">
    {#each $cart as item }
    {#if item.quantity > 0}
    <div class="cart-item">
        <img width="50" src={item.image} alt={item.name}/>
        <div>{item.quantity}
            {#if $formSubmitted == false} 
                <button class="button-cart" on:click={() => plusItem(item)}>+</button>
                <button class="button-cart" on:click={() => minusItem(item)}>-</button>
            {/if}           
            </div>
        <p>{item.price * item.quantity}kr</p>
    </div>
    {/if}
    {/each}
    <div class="total">
        <h4>Total sum: {total}kr</h4> 
        <!-- <button>Kjøp</button> -->
        
    </div>
</div>
{/if}	
</div>

</div>

<style>
.parent {
  display: flex;
  flex-direction: row;
}

.child {
  flex: 1;
  /* margin-left: 20px; */
}



    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
        float: left;
        padding-left: 50px;
    }
    .form-field{
        margin: 18px auto;
    }
    input{
        width: 100%;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    .error{
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }

    /* .product-list {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	padding-left: 13%;
	padding-right: 5%;
	padding-bottom: 50px;
	padding-top: 50px;
	float: center;
} */

/* .button-product {
  transition-duration: 0.4s;
}

.button-product:hover {
  background-color: #4CAF50; 
  color: white;
  cursor: grab;
} */

.button-cart{
	transition-duration: 0.4s;
}

.button-cart:hover{
	background-color: white; 
	color: black;
	border: 1px solid grey;
}

.cart-item {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	float: center;
	padding-bottom: 50px;
}
/* 
.image {
	height: 150px;
	width: 150px;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
} */

.total {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	text-align: auto;
	font-size: larger;
	padding: 0 auto;
}

.cart-list {
	border: 1.5px solid #dddd;
	padding: 10px;
}
</style>

