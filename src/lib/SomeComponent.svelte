<svelte:options tag="fl-somecomponent" />

<script>
    import { count } from "./stores.js";

    export let name = "";
</script>

<div class="mfeCard">
    <div class="mfeCardTitle">Component</div>
    <div class="mfeCardBody">
        <div class="some-component">
            <p class="t">
                I'm a component named {name}. <br /> <br /> The current value of
                Totoro's store $count is {$count}. Click me to increase the value.
            </p>
            <slot>
                <p>
                    This shows how slots are rendered when no content is
                    provided.
                </p>
            </slot>
        </div>
    </div>
</div>

<style>
	/* 
	@import url seems to be an acceptable way to share global styles.
	@import seems to only import the style once, even when called
	by several components on the same page. And from what I've seen
	so far, the imported styles don't seem to be inlined in the 
	generated web component, which is good as that prevents
	duplication and bloat. global.css is defined in the app shell.
	*/
	@import "/global.css";
    
    .mfeCard {
        font-size: small;
        border: 1px solid #b7a3d1;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 25px;
    }

    .mfeCardTitle {
        background: #b7a3d1;
        color: #333;
        display: block;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding: 3px 6px;
    }

    .some-component {
        background: #ccbbe2;
        padding: 25px;
        cursor: pointer;
        position: relative;
        border: 5px dashed transparent;
    }

    p {
        background: #b7a3d1;
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
