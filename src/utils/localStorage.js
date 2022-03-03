export const getValue = (key) => {
	try {
		const value = localStorage.getItem(key);
		const parsedValue = JSON.parse(value);
		return parsedValue;
	} catch (err) {
		return undefined;
	}
};

export const setValue = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};
