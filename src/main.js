import App from './App.svelte';

var target = document.body;
	console.log('loading mfe1...');

if (typeof GLOBAL_MFE_PARENT_ID_MFE_1 !== 'undefined') {
	target = document.getElementById(GLOBAL_MFE_PARENT_ID_MFE_1);
	console.log(target);
	console.log({GLOBAL_MFE_PARENT_ID_MFE_1});
	if (target && target.hasChildNodes()) {
		console.log('target already has children');
	}
}

const app = new App({
	target: target,
	props: {
		name: 'world'
	}
});

export default app;
