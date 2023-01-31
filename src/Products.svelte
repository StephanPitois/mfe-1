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
            <h1 class="mfeMainH1">Products</h1>
            <div class="content">
                <p>
                    This is component <code>remote_app_1.Products</code>. "Add to Cart" triggers an
                    <code>ITEM_ADDED_TO_CART</code> event, which
                    updates the Shopping Cart.
                </p>
                <div class="flex flex-col lg:flex-row justify-start gap-6">
                    {#each products as product}
                    <ProductCard title={product.name} buttonText={"Add to Cart"}
                        priceText={`\$${product.price}`} on:click={()=> addToCart(product)}
                        />
                        {/each}
                </div>
            </div>
        </main>
    </div>
</div>

<style>
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