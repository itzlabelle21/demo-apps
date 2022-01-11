import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { MoralisProvider } from "react-moralis";
import MainLayout from "./components/MainLayout";

let theme = createMuiTheme({palette: {type: 'dark'}});
theme = responsiveFontSizes(theme);

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

function App() {
  return (
    <MoralisProvider appId={"w5CYNEk0LBdCYIgIEqUm2CZpxImzwlwGmuPR1fEv"} serverUrl={"https://dzdfmwoloqps.usemoralis.com:2053/server"}>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </MoralisProvider>
  );
}

export default App;
