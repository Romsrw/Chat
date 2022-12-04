import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  authWrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  authForm: {
    display: "flex",
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
    sessionStorage.setItem("username", username);
    navigate("/chat");
  };

  return (
    <div className={classes.authWrapper}>
      <form className={classes.authForm} onSubmit={handleSubmit}>
        <TextField
          label="Enter You name"
          variant="outlined"
          required
          size="small"
          autoComplete="off"
          value={username}
          onChange={handleChangeInput}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
