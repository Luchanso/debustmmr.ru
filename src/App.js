import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import gray from "@material-ui/core/colors/teal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Landing } from "./Landing";
import "./App.css";
import { Login } from "./Login";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: red,
    secondary: gray,
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
