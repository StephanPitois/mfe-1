<script>
    export let title = "";
    export let buttonText = "";
    export let priceText = "";
</script>

<article>
    <strong class="truncate">{title}</strong>
    <p>{priceText}</p>
    <!-- TODO: show some sort of feedback when item added -->
    <button on:click>{buttonText}</button>
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
