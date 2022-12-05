import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: "0 auto",
    height: "100vh",
    boxShadow: "0px 0px 10px 0px rgba(12, 35, 52, 0.25)",
  },
}));

const App = () => {
  const { classes } = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/chat" element={<ChatPage />} />
        {/* <Route path="*" element={<Navigate to="/auth" />} /> */}
      </Routes>
    </Container>
  );
};

export default App;
