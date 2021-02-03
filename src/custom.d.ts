// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme } from '@material-ui/core/styles/createMuiTheme';
declare module '*.css'{
    const classes: {
        [key:string]:string;
    }
    export default classes;
}

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        tab:any,
        estimate: any,
        blue: string,
        orange: string
    }
        // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        tab:any,
        estimate: any,
        blue: string,
        orange: string
    }
}
