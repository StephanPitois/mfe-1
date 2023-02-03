<script>
    import ProductCard from "./lib/components/ProductCard.svelte";

    const products = [
        {
            name: "Totoro Warai Plush",
            price: 55,
        },
        {
            name: "Catbus puzzle (1000pcs)",
            price: 50,
        },
        {
            name: "Spirited away music box",
            price: 80,
        },
    ];
</script>

<main>
    <h1>Products</h1>
    <div class="justify-between gap-6">
        <p>
            "Add to Cart" triggers an
            <code>ITEM_ADDED_TO_CART</code> event, which updates the Shopping Cart.
        </p>
        <div class="lg:flex-row justify-start gap-6">
            {#each products as product}
                <ProductCard {product} />
            {/each}
        </div>
    </div>
</main>
