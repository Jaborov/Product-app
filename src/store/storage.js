export function loadState(key) {
	try {
		const jsonState = localStorage.getItem(key);
		if(!jsonState) {
			return undefined;
		}
		return JSON.parse(jsonState);
	} catch(e) {
		console.error(e);
		return undefined;
	}
}

export function saveState(state, key) {
	const stingState = JSON.stringify(state);
	localStorage.setItem(key, stingState);
}