import { readable } from 'svelte/store';

const products_response = await fetch(process.env.PUBLIC_PRODUCTS_API);
const products_data = await products_response.json();

export const products = readable(products_data);
