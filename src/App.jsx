import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

import Feed from './Pages/Feed';
import Friend from './Pages/Friend';
import Grid from './Pages/Grid';
import StoryManager from './Pages/StoryManager';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/storymanager" element={<StoryManager />} />
      </Routes>
    </Router>
  );
};

export default App;
