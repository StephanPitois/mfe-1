<script>
    import { addToCart } from "../cart";

    export let product;
    export let fullWidth = true;

    let state = "";
</script>

{#if state === "adding"}
    <button aria-busy="true" class="secondary" class:narrow={!fullWidth}
        >Please wait…</button
    >
{:else if state === "added"}
    <button class="secondary" class:narrow={!fullWidth}>Item added!</button>
{:else}
    <button
        class:narrow={!fullWidth}
        on:click={() => addToCart(product, (newState) => (state = newState))}
        >Add to Cart</button
    >
{/if}

<style>
    button {
        margin-bottom: 0;
    }
    .narrow {
        width: 180px;
    }
</style>
