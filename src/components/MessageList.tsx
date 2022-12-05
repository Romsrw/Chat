import { useEffect, useRef, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Typography } from "@mui/material";
import { IMessage } from "../types";
import MessageItem from "./MessageItem";

const useStyles = makeStyles()((theme) => ({
  listWrapper: {
    overflow: "auto",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
  },
}));

const MessageList = () => {
  const { classes } = useStyles();
  const listWrapper = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<IMessage[]>(
    JSON.parse(localStorage.getItem("localMessages") || "[]")
  );

  useEffect(() => {
    const setMessagesHandler = () => {
      setMessages(JSON.parse(localStorage.getItem("localMessages") || "[]"));
    };
    window.addEventListener("storage", setMessagesHandler);

    return () => window.removeEventListener("storage", setMessagesHandler);
  }, []);

  useEffect(() => {
    if (listWrapper.current) {
      listWrapper.current.scrollTo({
        top:
          listWrapper.current.scrollHeight - listWrapper.current.offsetHeight,
      });
    }
  }, [messages]);

  return (
    <Box className={classes.listWrapper} ref={listWrapper}>
      {messages.length ? (
        <ul className={classes.list}>
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </ul>
      ) : (
        <Typography textAlign="center">No messages</Typography>
      )}
    </Box>
  );
};

export default MessageList;
