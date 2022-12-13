<svelte:options tag="fl-somecomponent" />

<script>
    import { count } from "./stores.js";

    export let name = "";
</script>

<div class="some-component">
    <p class="t">I'm a Svelte Component named {name}. You clicked {$count} time(s).</p>

    <slot>
        <p>This shows how slots are rendered when no content is provided.</p>
    </slot>
</div>

<style>
    .some-component {
        background: #b7a3d1;
        padding: 25px;
        margin-bottom: 25px;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
        border: 5px dashed transparent;
    }

    .some-component:hover {
        border: 5px dashed transparent;
    }

    .some-component::before {
        content: "component";
        display: inline-block;
        transform: translate(-12.5px, -52px);
        top: 0;
        left: 0;
        font-size: x-small;
        background-color: #edebfc;
        color: #333;
        border: 1px solid #333;
        padding: 3px 6px;
        border-radius: 5px;
    }

    p {
        background: #ab97c5;
        padding: 25px;
        border-radius: 5px;
        margin-top: 0;
        font-size: small;
    }

    p:last-of-type {
        margin: 0;
    }

    p.t {
        background-color: transparent;
        padding: 0;
        margin-bottom: 25px;
    }
</style>
