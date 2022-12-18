<script>
	import { Button, Tile } from "carbon-components-svelte";

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
			<h1 class="mfeMainH1">Products | MFE 1: Totoro (トトロ, Totoro)</h1>
			<div class="content">
				<div class="flex">
					<img
						class="mfeMainImg"
						src="/img/totoro.jpeg"
						alt="Totoro"
					/>
				</div>
				<p>
					"Add to Cart" triggers an <code
						>ITEM_ADDED_TO_CART</code
					> event. The Shopping Cart listens to that event and gets updated.
				</p>
				<div class="flex" style="justify-content: start; gap: 25px">
					{#each products as product}
						<Tile>
							{product.name}<br />
							<strong>${product.price}</strong><br /><br />
							<Button
								size="small"
								on:click={() => addToCart(product)}
								>Add to Cart</Button
							>
						</Tile>
					{/each}
				</div>
			</div>
		</main>
	</div>
</div>

<style>
	.flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.wrapper .mfeCard .mfeCardBody {
		padding: 10px;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 25px;
	}
</style>
