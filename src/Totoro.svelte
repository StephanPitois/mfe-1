<script>
	// import { Button, Tile } from "carbon-components-svelte";
	import ProductCard from "./lib/components/ProductCard.svelte";

	const products = [
		{
			name: "Totoro Warai Plush",
			price: 55,
			imageUrl: "/img/totoro.jpeg",
		},
		{
			name: "Catbus puzzle (1000pcs)",
			price: 50,
			imageUrl: "/img/catbus.jpeg",
		},
		{
			name: "Spirited away music box",
			price: 80,
			imageUrl: "/img/no-face.jpeg",
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
	<div class="mfeCardBody">
		<main class="mfeMain">
			<h1 class="mfeMainH1">Products | MFE 1: Totoro</h1>
			<div class="content">
				<p>
					"Add to Cart" triggers an <code>ITEM_ADDED_TO_CART</code> event.
					The Shopping Cart listens to that event and gets updated.
				</p>
				<div class="flex flex-col lg:flex-row justify-start gap-6">
					{#each products as product}
						<!-- <Tile>
							{product.name}<br />
							<strong>${product.price}</strong><br /><br />
							<Button
								size="small"
								on:click={() => addToCart(product)}
								>Add to Cart</Button
							>
						</Tile> -->
						<ProductCard
							imageUrl={product.imageUrl}
							title={product.name}
							buttonText={"Add to Cart"}
							priceText={`\$${product.price}`}
							on:click={() => addToCart(product)}
						/>
					{/each}
				</div>
			</div>
		</main>
	</div>
</div>

<style>
	/* .flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	} */
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
