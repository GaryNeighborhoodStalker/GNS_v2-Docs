export default function useColorTheme() {
	const setTheme = ({ colorTheme = 'blurple', persist = false }) => {
		const themes = ['default'];
		const { classList } = document.documentElement;
		const themesClasses = themes.map(theme => `guide-theme-${theme}`);

		if (colorTheme !== 'blurple' && !themes.includes(colorTheme)) {
			const oldTheme = localStorage.getItem('guide-color-theme');
			colorTheme = themes.includes(oldTheme) ? oldTheme : 'blurple';
		}

		if (persist) {
			localStorage.setItem('guide-color-theme', colorTheme);
		}

		if (colorTheme === 'blurple') return classList.remove(...themesClasses);
		classList.remove(...themesClasses.filter(themeClass => themeClass !== `guide-theme-${colorTheme}`));
		classList.add(`guide-theme-${colorTheme}`);
	};

	return {
		setTheme,
	};
}
