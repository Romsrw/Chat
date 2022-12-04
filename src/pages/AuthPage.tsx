import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    background: theme.palette.background.paper,
  },
}));

const AuthPage = () => {
  const { classes } = useStyles();
  return <div className={classes.root}>AuthPage</div>;
};

export default AuthPage;
