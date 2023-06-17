<!-- Her genereres alt javascript betegner -->
<!-- I det man lukker prosjektet/fanen vil nettsiden slutte med å eksistere -->
<!-- må skrive inn "npm run dev" for å starte opp serveren igjen-->

<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import Index from './components/Index.svelte';
	import Butikk from './components/Snowboards.svelte';
	import Handlekurv from './components/Handlekurv.svelte';
	import Utstyr from './components/Bags.svelte';
	import NewTab from './components/NewTab.svelte';

	import {currentTab, changeTab} from './store';

	// tabs
	let items = ['Hjem', 'Handlekurv', 'Snowboards', 'Snowboard Utstyr', 'Vintersportsteder'];
	// let activeItem = 'Hjem';
	const tabChange = (e) => {
		// activeItem = e.detail;
		changeTab(e.detail);
	}

</script>

<Header></Header>

<main>
	<Tabs activeItem={$currentTab} items={items} on:tabChange={tabChange}></Tabs>
	{#if $currentTab === 'Hjem'}
	<Index/>
	{:else if $currentTab === 'Handlekurv'}
	<Handlekurv/>
	{:else if $currentTab === 'Snowboards'}
	<Butikk/>
	{:else if $currentTab === 'Snowboard Utstyr'}
	<Utstyr/>
	{:else if $currentTab === 'Vintersportsteder'}
	<p>Steder</p>
	{:else if $currentTab === 'newTab'}
	<NewTab />
	{/if}
</main> 

<Footer></Footer>

<style>
	main{
		margin: 0;
	}
</style>

