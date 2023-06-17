<script>
    import {changeTab} from '../store';
    let text = "Nye snowboards til ny sesong!"
</script>

<main>
    <div class="hovedside">
        <h1>
            <span style="color:white">{text}</span>
        </h1>
        <div>
            <button class="indexbutton" on:click={()=> changeTab('Snowboards')}>SJEKK UTVALGET</button>
            <!-- <a href="snowboards.html">
            </a> -->
        </div>
    </div>

    <div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="indexbilde" src="bilder/indexbilde.jpg">
    </div>
</main>

<style>
    .hovedside {
    margin-top: 47px;
    background-color: #636363;
    float: left;
    text-align: center;
    width: 50%;
    height: 400px;
    margin-bottom: 25px;
    padding-top: 150px;
    margin-top: 0;
}

.indexbutton {
    overflow: hidden;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    background-color: #494848;
    font-size: 20px;
    border-radius: 4px;
    border: 2px solid #494848;
    transition-duration: 0.4s;
}

.indexbutton:hover {
    background-color: #636363;
    color: white;
    cursor: grab;
}

.indexbilde {
    float: right;
    object-fit: cover;
    width: 50%;
    height: 550px;
    margin-top: 0px;
    margin-bottom: 25px;
}

</style>