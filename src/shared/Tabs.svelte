<script>

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

   function isDropDown(item) {
            return item === 'Vintersportsteder';
    }

   function routeTo(item) {
        // if(item !==   'Vintersportsteder') {

            dispatch('tabChange', item);
        // }
    }

    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={routeTo(item)} class:dropdown={isDropDown(item)}>
            <div class:active={item === activeItem}>
                {#if item != 'Handlekurv'}
                    {#if item === 'Vintersportsteder'}
                        <span class="dropdown">
                            <a href="#">{item}</a>
                            <div class="dropdown-content">
                            <a href="https://www.skistar.com/no/vare-skisteder/trysil/vinter-i-trysil/" target="_blank" on:click|stopPropagation>Trysil</a>
                            <a href="https://www.hafjell.no" target="_blank" on:click|stopPropagation>Hafjell</a>
                            <a href="https://www.kvitfjell.no/?gad=1&gclid=CjwKCAjwsvujBhAXEiwA_UXnADTK9dgPCsFYwXwj22qgNwuMJQI3dl-0aJ-298lskECqT-OB-e5K3RoCgD4QAvD_BwE" target="_blank" on:click|stopPropagation>Kvitfjell</a>
                            <a href="https://www.beitostolen.com/beitostolen-skisenter/" target="_blank" on:click|stopPropagation>Beitostølen</a>
                            <a href="#" on:click|stopPropagation={()=>dispatch('tabChange', 'newTab')}>New Tab</a>
                            </div>
                        </span>
                    {:else}
                        {item}
                    {/if}
                <!-- {item} -->
                <!-- {:else if item == 'Vintersportsteder'} -->
                <!-- <span class="dropdown"> -->

                <!-- <a href="#">{item}</a>
                {item}
                <div class="dropdown-content">
                    <a href="#">Service 1</a>
                    <a href="#">Service 2</a>
                    <a href="#">Service 3</a>
                </div>  -->
                <!-- </span> -->
                {:else if item == 'Handlekurv'}
                <img width='20' src='bilder/kurv.png' alt="shoping bag">
                {/if}
            </div>
        </li>
        {/each}
    </ul>
</div>

<style>
    .tabs{
        margin-bottom: 30px;
        color: #555;
        margin-top: 30px;
    }

    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }

    li{
        margin: 0 40px;
        font-size: 18px;
        display: inline-block;
        cursor: pointer;
        transition-duration: 0.3s;
    }

    li:hover{
        font-size: 19px;
        font-weight: 600;
    }

    .active{
        color:#555;
        border-bottom: 2px solid #555;
        padding-bottom: 8px;
    }

    .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }

    .dropdown:hover .dropdown-content {
    display: block;
    }

    .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    }

    .dropdown-content a:hover {
    background-color: #f1f1f1;
    }
   
</style>