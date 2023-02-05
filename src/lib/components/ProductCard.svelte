<script>
    import { tick } from "svelte";

    export let product;

    let state = "";

    async function addToCart(product) {
        state = "adding";
        await tick();
        window.dispatchEvent(
            new CustomEvent("product:add-to-cart", {
                detail: product,
            })
        );
        setTimeout(async () => {
            state = "added";
            await tick();
            setTimeout(() => {
                state = "";
            }, 600);
        }, 200);
    }
</script>

<article class="flex flex-col justify-between w-full lg:w-1/4-gap-6">
    <div>
        <strong class="truncate-max-2">{product.name}</strong>
        <p>{`\$${product.price}`}</p>
    </div>
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
