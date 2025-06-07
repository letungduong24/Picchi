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
import Navbar from "./Components/Common/Navbar";
import StoryCreate from "./Pages/StoryCreate";
import StoryDetail from "./Pages/StoryDetail";
const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/create-story" element={<StoryCreate />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/storymanager" element={<StoryManager />} />
          <Route path="/story/:id" element={<StoryDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
