<svelte:options tag="fl-totoro" />

<script>
	import "./lib/SomeComponent.svelte";
	import { count } from "./lib/stores.js";

	let defaultName1 = "Satsuki. I update Totoro's store $count and trigger a TOTORO_WAS_CLICKED event";
	let name1 = defaultName1;

	let defaultName2 =
		"Mei. I update Totoro's store $count without triggering any global events";
	let name2 = defaultName2;

	function handleClick1() {
		name1 = defaultName1;
		$count++;

		// Use this to communicate with other micro-frontends:
		window.dispatchEvent(
			new CustomEvent("TOTORO_WAS_CLICKED", {
				detail: { message: "Totoro's first component was clicked." },
			})
		);
	}

	function handleClick2() {
		name2 = defaultName2;
		$count++;
	}
</script>

<div part="mfeCard">
	<div part="mfeCardTitle">Micro-Frontend</div>
	<div part="mfeCardBody">
		<main part="mfeMain">
			<h1 part="mfeMainH1">MFE 1: Totoro (トトロ, Totoro)</h1>
			<div class="flex">
				<img
					part="mfeMainImg"
					src="/img/totoro.jpeg"
					alt="The main characters of My Neighbor Totoro."
				/>
				<div part="mfeCard">
					<div part="mfeCardTitle">Stores owned by Totoro</div>
					<div part="mfeCardBody" class="mfeCardBody">
						<code>$count = {$count}</code>
					</div>
				</div>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<fl-somecomponent name={name1} on:click={handleClick1} />
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<fl-somecomponent name={name2} on:click={handleClick2}>
				<p part="mfeMainP">
					This is some child content that will overwrite the default
					slot content. With Svelte, slots are loaded lazily, but when
					compiled to custom elements (web components), they are
					rendered eagerly. This is just something to know, not
					necessarily an issue. It does not remove any of the dynamic
					behavior within a slot. For example, whenever
					<code>$count</code>
					is updated dynamically, this slot is re-rendered accordingly.
					Proof:
					<code>$count={$count}</code>.
				</p>
			</fl-somecomponent>
		</main>
	</div>
</div>

<style>
	.flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 25px;
	}
	.mfeCardBody {
		padding: 10px;
	}
</style>
