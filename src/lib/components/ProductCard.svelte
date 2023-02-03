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

<article class="w-full lg:w-1/3-gap-6">
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
        margin: 0;
        padding: 1rem;
    }

    strong {
        display: block;
    }

    button {
        margin-bottom: 0;
    }
</style>
