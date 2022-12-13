<svelte:options tag="fl-totoro" />

<script>
	import "./lib/SomeComponent.svelte";
	import { count } from "./lib/stores.js";

	let defaultName1 =
		"Satsuki. I update Totoro's STORE and trigger a GLOBAL EVENT";
	let name1 = defaultName1;

	let defaultName2 =
		"Mei. I update Totoro's STORE BUT I do NOT trigger a global event";
	let name2 = defaultName2;

	function handleClick1() {
		name1 = `${defaultName1} and the time is ${new Date().toLocaleTimeString()}`;
		$count++;

		// Use this to communicate with other micro-frontends:
		window.dispatchEvent(
			new CustomEvent("TOTORO_WAS_CLICKED", {
				detail: { message: "Totoro's first component was clicked." },
			})
		);
	}

	function handleClick2() {
		name2 = `${defaultName2} and the time is ${new Date().toLocaleTimeString()}`;
		$count++;
	}
</script>

<main part="mfeMain">
	<h1 part="mfeMainH1">MFE 1: Totoro (トトロ, Totoro)</h1>
	<img
		part="mfeMainImg"
		src="/img/totoro.jpeg"
		alt="The main characters of My Neighbor Totoro."
	/>
	<p class="info">
		Event-based MFE communication only works when MFEs are 
		on the same page. That's not an issue because the goal
		of these events if to ensure that the entire page is in
		an up-to-date, consistent state. Whenever the user navigates
		to another page, the MFEs on that page are responsible
		for updating their own state. If that process is too
		much of a burden, we will look into ways for the app shell
		to help pass the global state when navigating to another page,
		either in-memory of via session storage.
	</p>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<fl-somecomponent name={name1} on:click={handleClick1} />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<fl-somecomponent name={name2} on:click={handleClick2}>
		<p part="mfeMainP">
			This is some child content that will overwrite the default slot
			content. With Svelte, slots are loaded lazily, but when compiled to
			custom elements (web components), they are rendered eagerly. This is
			just something to know, not necessarily an issue. It does not remove
			any of the dynamic behavior within a slot. For example, whenever
			<code>$count</code>
			is updated dynamically, this slot is re-rendered accordingly. Proof:
			<code>$count={$count}</code>.
		</p>
	</fl-somecomponent>
</main>

<style>
	.info {
		font-size: small;
		padding-bottom: 25px;
	}
</style>