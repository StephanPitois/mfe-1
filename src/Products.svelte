<script>
    import ProductCard from "./lib/components/ProductCard.svelte";
    import { products } from "./lib/stores"
</script>

<main>
    <h1>Products</h1>
    <div class="justify-between gap-6">
        <!-- <p>
            "Add to Cart" triggers an
            <code>ITEM_ADDED_TO_CART</code> event, which updates the Shopping Cart.
        </p> -->
        <div class="flex-wrap lg:flex-row gap-6">
            {#each $products as product}
                <ProductCard {product} />
            {/each}
        </div>
    </div>
</main>
