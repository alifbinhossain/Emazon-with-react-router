import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Content from "./components/Main/Content/Content";
import Form from "./components/Main/Form/Form";
import SignIn from "./components/Main/Form/SignIn/SignIn";
import SignUp from "./components/Main/Form/SignUp/SignUp";
import Header from "./components/Main/Header/Header";
import Inventory from "./components/Main/Inventory/Inventory";
import NotFound from "./components/Main/NotFound/NotFound";
import OrderPlace from "./components/Main/OrderPlace/OrderPlace";
import OrderReview from "./components/Main/OrderReview/OrderReview";
import PrivateRoute from "./components/Main/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
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
            {/*-------------PLACE ORDER----------*/}
            <PrivateRoute path="/placeorder">
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            {/*-------------SIGN IN FORM----------*/}
            <Route path="/form/signin">
              <Form>
                <SignIn></SignIn>
              </Form>
            </Route>
            {/*-------------SIGN UP FORM----------*/}
            <Route path="/form/signup">
              <Form>
                <SignUp></SignUp>
              </Form>
            </Route>

            {/*------------NOT FOUND-----------*/}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
