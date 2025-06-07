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
import useConfirmStore from "./store/confirmStore";
import Confirm from "./Components/Common/Confirm";
import useSuccessStore from "./store/successStore";
import useErrorStore from "./store/errorStore";
import Success from "./Components/Common/Success";
import Error from "./Components/Common/Error";

const App = () => {
  const { confirmModal, hideConfirm } = useConfirmStore();
  const { successModal, hideSuccess } = useSuccessStore();
  const { errorModal, hideError } = useErrorStore();


  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        {confirmModal.show && (
          <Confirm
            title={confirmModal.title}
            content={confirmModal.content}
            trueButton={confirmModal.trueButton}
            handleTrue={() => {
              confirmModal.onConfirm?.();
              hideConfirm();
            }}
            handleFalse={hideConfirm}
          />
        )}
        {successModal.show && (
          <Success
            title={successModal.title}
            content={successModal.content}
            button={successModal.button}
            handleClose={hideSuccess}
          />
        )}
        {errorModal.show && (
          <Error
            title={errorModal.title}
            content={errorModal.content}
            button={errorModal.button}
            handleClose={hideError}
          />
        )}
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
