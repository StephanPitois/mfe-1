import { readable } from 'svelte/store';

const products_response = await fetch(process.env.PUBLIC_PRODUCTS_API);

if (!products_response.ok) {
    throw new Error('Products: ' + products_response.status);
}

const products_data = await products_response.json();

export const products = readable(products_data);
