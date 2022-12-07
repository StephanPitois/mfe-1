import App from './App.svelte';

const app = new App({
	target: GLOBAL_MFE__MFE_1 || document.body,
	props: {
		name: 'world'
	}
});

export default app;
