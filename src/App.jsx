import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import EmotionCalendar from "./pages/EmotionCalendar";
import FormToday from "./components/Forms/FormToday";
import FormProfile from "./components/Forms/FormProfile";
// ?? To uncomment
// import CalendarDate from "./components/CalendarDate";




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route path ="/calendar" component={EmotionCalendar}/>
        <Route path ="/today" component={FormToday}/>
        <Route path ="/profile/update" component={FormProfile}/>
        {/* ?? To uncomment */}
        {/* <Route path ="/calendar/date" component={CalendarDate}/> */}
      </Switch>
    </div>
  );
}

export default App;
