const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				rosewater: 'var(--rosewater)',
				flamingo: 'var(--flamingo)',
				pink: 'var(--pink)',
				mauve: 'var(--mauve)',
				red: 'var(--red)',
				maroon: 'var(--maroon)',
				peach: 'var(--peach)',
				yellow: 'var(--yellow)',
				green: 'var(--green)',
				teal: 'var(--teal)',
				sky: 'var(--sky)',
				sapphire: 'var(--sapphire)',
				blue: 'var(--blue)',
				lavender: 'var(--lavender)',

				text: 'var(--text)',
				subtext0: 'var(--subtext0)',
				subtext1: 'var(--subtext1)',

				overlay0: 'var(--overlay0)',
				overlay1: 'var(--overlay1)',
				overlay2: 'var(--overlay2)',

				surface0: 'var(--surface0)',
				surface1: 'var(--surface1)',
				surface2: 'var(--surface2)',

				base: 'var(--base)',
				mantle: 'var(--mantle)',
				crust: 'var(--crust)'
			}
		}
	},
	plugins: [addDynamicIconSelectors()]
};
