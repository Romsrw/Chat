import { Navigate, Route, Routes } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: "0 auto",
    maxWidth: theme.spacing(100),
    height: "100vh",
  },
}));

const App = () => {
  const { classes } = useStyles();
  return (
    <main className={classes.root}>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/chat" element={<ChatPage />} />
        {/* <Route path="*" element={<Navigate to="/auth" />} /> */}
      </Routes>
    </main>
  );
};

export default App;
