<script>
    import ProductCard from "./lib/components/ProductCard.svelte";

    const products = [
        {
            name: "No Face Kaonashi Piggy Bank",
            price: 30,
        },
        {
            name: "Princess Mononoke Tree Spirits Figures",
            price: 10,
        },
        {
            name: "Howl’s Mini Castle Figure",
            price: 90,
        },
        {
            name: "Totoro At The Bus Stop",
            price: 17,
        },
        {
            name: "Jiji Figures 6pcs/set",
            price: 17,
        },
        {
            name: "Spirited Away Tumbler 3pcs/set",
            price: 27,
        },
    ];
</script>

<main>
    <h1>Products</h1>
    <div class="justify-between gap-6">
        <!-- <p>
            "Add to Cart" triggers an
            <code>ITEM_ADDED_TO_CART</code> event, which updates the Shopping Cart.
        </p> -->
        <div class="flex-wrap lg:flex-row gap-6">
            {#each products as product}
                <ProductCard {product} />
            {/each}
        </div>
    </div>
</main>
