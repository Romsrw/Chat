import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    background: theme.palette.background.paper,
  },
}));

const ChatPage = () => {
  const { classes } = useStyles();
  return <div className={classes.root}>ChatPage</div>;
};

export default ChatPage;