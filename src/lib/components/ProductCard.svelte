<script>
    import Button from "./Button.svelte";

    export let imageUrl = "";
    export let title = "";
    export let buttonText = "";
    export let priceText = "";
</script>

<div class="flex justify-center">
    <div class="rounded-md shadow-lg bg-white max-w-sm">
        <img class="rounded-t-md" src={imageUrl} alt="" />
        <div class="p-6">
            <h5 class="text-gray-900 text-lg mb-2 truncate">{title}</h5>
            <p class="text-gray-700 text-base font-medium mb-4">{priceText}</p>
            <Button on:click>{buttonText}</Button>
        </div>
    </div>
</div>
