import { Box } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import MessageList from "../components/MessageList";
import SendMessageForm from "../components/SendMessageForm";

const useStyles = makeStyles()((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const ChatPage = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <MessageList />
      <SendMessageForm />
    </Box>
  );
};

export default ChatPage;
