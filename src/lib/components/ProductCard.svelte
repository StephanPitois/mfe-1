<script>
    export let title = "";
    export let buttonText = "";
    export let priceText = "";
</script>

<article class="flex justify-center">
    <div class="p-6 w-full">
        <strong class="text-gray-900 text-lg mb-2 truncate">{title}</strong>
        <p class="text-gray-700 text-base font-medium mb-4">{priceText}</p>
        <button on:click>{buttonText}</button>
    </div>
</article>

<style>
    button {
        margin-bottom: 0;
    }

    article {
        margin-top: 0;
        margin-bottom: 1rem;
        padding: 1rem;
        flex: 1 1 0;
    }
</style>