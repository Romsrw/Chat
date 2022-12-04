import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    background: theme.palette.background.paper,
  },
}));

const App = () => {
  const { classes } = useStyles();
  return <div className={classes.root}>app</div>;
};

export default App;
