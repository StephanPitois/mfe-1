<svelte:options tag="fl-totoro" />

<script>
	import "./lib/SomeComponent.svelte";
	import { count } from "./lib/stores.js";

	let defaultName1 = "Satsuki";
	let name1 = defaultName1;

	let defaultName2 = "Mei";
	let name2 = defaultName2;
</script>

<main part="mfeMain">
	<h1 part="mfeMainH1">MFE 1: Totoro (トトロ, Totoro)</h1>
	<img
		part="mfeMainImg"
		src="/img/totoro.png"
		alt="The main characters of My Neighbor Totoro."
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<fl-somecomponent
		name={name1}
		on:click={() => {
			name1 = `${defaultName1} and the time is ${new Date().toLocaleTimeString()}`;
			$count++;
		}}
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<fl-somecomponent
		name={name2}
		on:click={() => {
			name2 = `${defaultName2} and the time is ${new Date().toLocaleTimeString()}`;
			$count++;
		}}
	>
		<p part="mfeMainP">
			This is some child content that will overwrite the default slot
			content.
		</p>
	</fl-somecomponent>
</main>
