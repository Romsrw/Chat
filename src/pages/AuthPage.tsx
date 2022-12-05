import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, TextField } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  authWrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
  formWrapper: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
  },
  authForm: {
    display: "flex",
    flexDirection: "column",
  },
  inputName: {
    marginBottom: theme.spacing(3),
  },
}));

const AuthPage = () => {
  const { classes } = useStyles();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (username.trim()) {
      sessionStorage.setItem("username", username);
      navigate("/chat");
    }
  };

  return (
    <Box className={classes.authWrapper}>
      <Paper className={classes.formWrapper} elevation={3}>
        <form className={classes.authForm} onSubmit={handleSubmit}>
          <TextField
            label="Enter your name"
            variant="outlined"
            required
            size="small"
            autoComplete="off"
            value={username}
            onChange={handleChangeInput}
            className={classes.inputName}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AuthPage;
