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
        estimate: any
      }
      // allow configuration using `createMuiTheme`
      interface ThemeOptions {
        tab:any,
        estimate: any
      }
  }