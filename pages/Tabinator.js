import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "@fontsource/luckiest-guy";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: 'black',
    opacity: "90%",
    // color: "white"
    display: "flex",
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper className={classes.root}>
        {" "}
        <Typography
          style={{
            fontFamily: "Luckiest Guy",
            color: "yellow",
            textShadow: "4px 4px #000",
            backgroundImage: `url(${"/img/hero.bmp"})`,
            width: "100%",
            fontSize: "5rem",
            padding: "10px",
          }}
        >
          Invenire Studios
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Art" />
          <Tab label="CAD" />
          <Tab label="Events/Promotions" />
        </Tabs>
      </Paper>
    </>
  );
}
