import { makeStyles } from "tss-react/mui";
import { Paper, Typography } from "@mui/material";
import { IMessage } from "../types";

const useStyles = makeStyles()((theme) => ({
  messageWrapper: {
    width: "100%",
    display: "flex",
    marginBottom: theme.spacing(1),
    boxSizing: "border-box",
  },
  message: {
    padding: theme.spacing(1, 2),
    maxWidth: "80%",
  },
  myMessage: {},
  text: {
    wordBreak: "keep-all",
  },
}));

interface IProps {
  message: IMessage;
}

const MessageItem = ({ message }: IProps) => {
  const { classes } = useStyles();
  const savedUsername = sessionStorage.getItem("username");
  const authorMessage =
    savedUsername === message.username ? "You" : message.username;
  const styleMessage =
    savedUsername === message.username
      ? { justifyContent: "flex-end", backgroundColor: "white" }
      : { justifyContent: "flex-start", backgroundColor: "#EBF0FD" };
  return (
    <li
      className={classes.messageWrapper}
      style={{ justifyContent: styleMessage.justifyContent }}
    >
      <Paper
        elevation={3}
        className={classes.message}
        style={{ backgroundColor: styleMessage.backgroundColor }}
      >
        <Typography fontWeight="bold">{authorMessage}:</Typography>
        <Typography className={classes.text}>{message.text}</Typography>
      </Paper>
    </li>
  );
};

export default MessageItem;
