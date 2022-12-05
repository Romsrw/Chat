import { useState, ChangeEvent, FormEvent } from "react";
import { makeStyles } from "tss-react/mui";
import { Button, TextField } from "@mui/material";
import { IMessage } from "../types";

const useStyles = makeStyles()((theme) => ({
  formWrapper: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(3, 0),
    borderTop: "1px solid #e0e0eb",
    backgroundColor: theme.palette.background.default,
  },
  inputText: {
    marginRight: theme.spacing(1),
  },
}));

const SendMessageForm = () => {
  const { classes } = useStyles();
  const [text, setText] = useState("");
  const username = sessionStorage.getItem("username");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSendMessage = (event: FormEvent) => {
    event.preventDefault();
    if (text.trim() && username) {
      const newMessage: IMessage = {
        id: Date.now().toString(),
        text,
        username,
      };
      const oldMessages: IMessage[] = JSON.parse(
        localStorage.getItem("localMessages") || "[]"
      );
      localStorage.setItem(
        "localMessages",
        JSON.stringify([...oldMessages, newMessage])
      );
      window.dispatchEvent(new Event("storage"));
      setText("");
    }
  };

  return (
    <form className={classes.formWrapper} onSubmit={handleSendMessage}>
      <TextField
        label="Enter message"
        variant="outlined"
        required
        size="small"
        autoComplete="off"
        fullWidth
        value={text}
        onChange={handleChangeInput}
        className={classes.inputText}
      />
      <Button type="submit" variant="contained">
        Send
      </Button>
    </form>
  );
};

export default SendMessageForm;
