import { makeStyles } from "tss-react/mui";
import { Paper, Typography } from "@mui/material";
import { IMessage } from "../types";

const useStyles = makeStyles()((theme) => ({
  messageWrapper: {
    width: "100%",
    display: "flex",
    marginBottom: theme.spacing(1),
  },
  message: {
    padding: theme.spacing(1),
  },
}));

interface IProps {
  message: IMessage;
}

const MessageItem = ({ message }: IProps) => {
  const { classes } = useStyles();
  return (
    <li className={classes.messageWrapper}>
      <Paper elevation={3} className={classes.message}>
        <Typography>{message.text}</Typography>
      </Paper>
    </li>
  );
};

export default MessageItem;
