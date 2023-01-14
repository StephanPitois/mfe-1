<button
    type="button"
    class="
        inline-block
        px-6 py-2.5
        bg-zinc-600 
        text-white font-medium leading-tight
        rounded-md shadow-md 
        transition duration-150 ease-in-out
        hover:bg-zinc-700 hover:shadow-lg 
        focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-zinc-800 active:shadow-lg
    "
    on:click
>
    <slot />
</button>
