<script>
    import AddButton from "./AddButton.svelte";

    export let product;
</script>

<article class="flex flex-col justify-between w-full lg:w-1/4-gap-6">
    <div>
        <strong class="truncate-max-2"><a href="/products/{product.id}">{product.name}</a></strong>
        <p>{`\$${product.price}`}</p>
    </div>
    <AddButton {product} />
</article>

<style>
    /* article {
        margin: 0;
        padding: 1rem;
    } */

    strong {
        display: block;
    }

    a {
        /* TODO: use var */
        /* color: hsl(205deg, 20%, 32%); */
        color: #2f353f;
    }
</style>
