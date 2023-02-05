import { tick } from "svelte";

async function addToCart(product, stateCallback) {
    stateCallback("adding");
    await tick();
    window.dispatchEvent(
        new CustomEvent("product:add-to-cart", {
            detail: product,
        })
    );
    setTimeout(async () => {
        stateCallback("added");
        await tick();
        setTimeout(() => {
            stateCallback("");
        }, 600);
    }, 200);
}

export { addToCart }