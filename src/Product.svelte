<script>
    import AddButton from "./lib/components/AddButton.svelte";
    import { products } from "./lib/stores";

    const parts = new URL(window.location.href).pathname.match(/[^\/]+/g);
    const id = parseInt(parts[parts.length - 1]);
    const product = $products.find((p) => p.id === id);
</script>

<main>
    {#if product}
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <AddButton {product} fullWidth={false} />
    {/if}
</main>
