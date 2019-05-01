import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import GalleryPage from "./gallery/GalleryPage";
import DirectionsPage from "./directions/DirectionsPage";
import AccommodationPage from "./accommodation/AccommodationPage";
import WeatherPage from "./weather/WeatherPage";
import ContactPage from "./contact/ContactPage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/directions" component={DirectionsPage} />
        <Route path="/accommodation" component={AccommodationPage} />
        <Route path="/weather" component={WeatherPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
