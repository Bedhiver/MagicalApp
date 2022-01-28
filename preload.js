window.addEventListener('DOMContentLoaded', () => {
	const replacetText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) {
			element.innerHTML = text;
		}
	};

	for (const dependency of ['chrome', 'node', 'electron']) {
		replacetText(`${dependency}-version`, process.versions[dependency]);
	}
});
