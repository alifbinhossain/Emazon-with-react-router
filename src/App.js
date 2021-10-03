import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Content from "./components/Main/Content/Content";
import Header from "./components/Main/Header/Header";
import Inventory from "./components/Main/Inventory/Inventory";
import NotFound from "./components/Main/NotFound/NotFound";
import OrderReview from "./components/Main/OrderReview/OrderReview";

function App() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #fff 30%, #ece9e6)",
        minHeight: "100vh",
      }}
    >
      <Router>
        <Header></Header>
        <Switch>
          {/*-------------SHOPPING SECTION------------*/}
          <Route exact path="/">
            <Content></Content>
          </Route>
          <Route path="/shop">
            <Content></Content>
          </Route>

          {/*-------------ORDER REVIEW SECTION-----------*/}
          <Route path="/order">
            <OrderReview></OrderReview>
          </Route>

          {/*-------------INVENTORY SECTION-----------*/}
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>

          {/*------------NOT FOUND-----------*/}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
