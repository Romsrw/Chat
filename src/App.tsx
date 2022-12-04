import { Navigate, Route, Routes } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";

const useStyles = makeStyles()((theme) => ({
  root: {
    background: theme.palette.background.paper,
  },
}));

const App = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </div>
  );
};

export default App;
