import { makeStyles } from "tss-react/mui";
import { Box } from "@mui/material";

const useStyles = makeStyles()((theme) => ({
  listWrapper: {},
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    overflow: "auto",
    flex: 1,
  },
  listItem: {
    width: "100%",
    display: "flex",
  },
}));

const MessageList = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.listWrapper}>
      <ul className={classes.list}>
        <li className={classes.listItem}>message item1</li>
        <li className={classes.listItem}>message item2</li>
        <li className={classes.listItem}>message item3</li>
        <li className={classes.listItem}>message item4</li>
        <li className={classes.listItem}>message item5</li>
      </ul>
    </Box>
  );
};

export default MessageList;
