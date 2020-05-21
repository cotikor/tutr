import { createMuiTheme } from '@material-ui/core/styles';

/*
breakpoint values {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}
#264653
#2A9D8F
#E9C46A
#F4A261
#E76F51
*/
export default createMuiTheme({
	typography: {
    h6: "1.2rem",
		useNextVariants: true,
		body1: { color: "inherit" },
		body2: { color: "inherit" },
	},
	palette: {
		primary: {
			main: "#E9C46A",
			contrastText: "#2A9D8F",
		},
		secondary: {
			main: "#2A9D8F",
			contrastText: "#E9C46A",
		},
		background: {
			default: "#E9C46A",
			paper: "#E76F51",
		},
		tonalOffset: 0.2,
	},
});

