import Home from "./Home";
import About from "./About";

import { Routes, Route, BrowserRouter } from "react-router-dom";

// Import Parse minified version
import Parse from 'parse';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'Al7ZSSh904iWQjRfzaz9A0EzFS7YSFLE6xdbvOgm';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'eJOVDvWj1oZir3Fknppz04FQWEWjXeX6Vg3GvDuk';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
