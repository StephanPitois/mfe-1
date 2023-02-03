<script>
    import { tick } from "svelte";

    export let product;

    let state = "";

    async function addToCart(item) {
        state = "adding";
        await tick();
        window.dispatchEvent(
            new CustomEvent("ITEM_ADDED_TO_CART", {
                detail: item,
            })
        );
        setTimeout(async () => {
            state = "added";
            await tick();
            setTimeout(() => {
                state = "";
            }, 600);
        }, 300);
    }
</script>

<article>
    <strong class="truncate">{product.name}</strong>
    <p>{`\$${product.price}`}</p>
    {#if state === "adding"}
        <button aria-busy="true" class="secondary">Please wait…</button>
    {:else if state === "added"}
        <button class="secondary">Item added!</button>
    {:else}
        <button on:click={() => addToCart(product)}>Add to Cart</button>
    {/if}
</article>

<style>
    article {
        margin-top: 0;
        margin-bottom: 1rem;
        padding: 1rem;
        flex: 1 1 0;
    }

    button {
        margin-bottom: 0;
    }
</style>
