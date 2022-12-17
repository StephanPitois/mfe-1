<svelte:options tag="fl-totoro" />

<script>
	import "./lib/SomeComponent.svelte";
	import { count } from "./lib/stores.js";
	// import { Confetti } from "svelte-confetti";

	const defaultName1 =
		"Satsuki. I update Totoro's store $count and trigger a TOTORO_WAS_CLICKED event";
	let name1 = defaultName1;

	const defaultName2 =
		"Mei. I update Totoro's store $count without triggering any global events";
	let name2 = defaultName2;

	const products = [
		{
			name: "Spirited away music box",
			price: 79.95,
		},
		{
			name: "Howl puzzle (1000pcs)",
			price: 50.0,
		},
		{
			name: "Totoro Warai Plush",
			price: 54.95,
		},
	];

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

	function addToCart(item) {
		window.dispatchEvent(
			new CustomEvent("ITEM_ADDED_TO_CART", {
				detail: item,
			})
		);
	}
</script>

<div class="mfeCard wrapper">
	<div class="mfeCardTitle">Micro-Frontend</div>
	<div class="mfeCardBody">
		<main class="mfeMain">
			<h1 class="mfeMainH1">MFE 1: Totoro (トトロ, Totoro)</h1>
			<div class="flex">
				<img
					class="mfeMainImg"
					src="/img/totoro.jpeg"
					alt="The main characters of My Neighbor Totoro."
				/>
				<div class="mfeCard">
					<div class="mfeCardTitle">Stores owned by Totoro</div>
					<div class="mfeCardBody">
						<code>$count = {$count}</code>
					</div>
				</div>
			</div>
			<p>
				Here we can put items in a cart. The cart icon (another MFE)
				gets updated in the header when you add to the cart. This is
				done by dispatching a <code>ITEM_ADDED_TO_CART</code> event. You
				can view the cart on Page 2. In this demo the cart is saved in session
				storage, but in a real world app, the cart would be saved on the
				server.
			</p>
			<p>
				Note that in this demo, we don't persist the shopping cart, so
				if you refresh the page the content is lost.
			</p>
			<div class="flex" style="justify-content: start; gap: 25px">
				{#each products as product}
					<div class="product">
						{product.name}<br />
						<strong>${product.price}</strong><br /><br />
						<button on:click={() => addToCart(product)}
							>Add to Cart</button
						>
						<!-- <Confetti /> -->
					</div>
				{/each}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<fl-somecomponent name={name1} on:click={handleClick1} />
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<fl-somecomponent name={name2} on:click={handleClick2}>
				<p class="mfeMainP">
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
	/* 
	@import url seems to be an acceptable way to share global styles.
	@import seems to only import the style once, even when called
	by several components on the same page. And from what I've seen
	so far, the imported styles don't seem to be inlined in the 
	generated web component, which is good as that prevents
	duplication and bloat. global.css is defined in the app shell.
	*/
	@import "/global.css";
	.flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 25px;
	}
	.wrapper .mfeCard .mfeCardBody {
		padding: 10px;
	}
	.product {
		border: 1px solid #333;
		border-radius: 5px;
		background: rgb(238 238 238 / 50%);
		padding: 10px;
		width: 200px;
		max-width: 150px;
	}
</style>
