import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
      <Typography
          style={{
            fontFamily: "Luckiest Guy",
            color: "yellow",
            textShadow: "6px 6px #000",
            backgroundImage: `url(${"/img/hero.bmp"})`,
            width: "100%",
            fontSize: "5rem",
            padding: "10px",
          }}
        >
          Invenire Studios
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Art" {...a11yProps(0)} />
          <Tab label="CAD" {...a11yProps(1)} />
          <Tab label="Events/Promotions" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className={classes.container}>
      <main className={classes.main}>
        {/* <div className={classes.heroContent} >  */}
        <img  className={classes.heroContent}src="/img/hero.bmp" />
        {/* </div> */}
        {/* <Image src="/img/hero.bmp" alt="hero" layout="fill" /></div> */}
        {/* <Box m={5}></Box> */}
        {/* <Typography variant="h1" align="center" gutterBottom className={classes.title}>
          Invenire Studios
        </Typography> */}
        {/* <Image src="/img/hero.bmp" alt="hero" width={600} height={500} /> */}
        <Typography variant="h4" align="center" color="white" component="p">
          Art
        </Typography>
        <br/><br/>
      </main>
    </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className={classes.container}>
      <main className={classes.main}>
        {/* <div className={classes.heroContent} >  */}
        <img  className={classes.heroContent}src="/img/mnriser.bmp" />
        {/* </div> */}
        {/* <Image src="/img/hero.bmp" alt="hero" layout="fill" /></div> */}
        {/* <Box m={5}></Box> */}
        {/* <Typography variant="h1" align="center" gutterBottom className={classes.title}>
          Invenire Studios
        </Typography> */}
        {/* <Image src="/img/hero.bmp" alt="hero" width={600} height={500} /> */}
        <Typography variant="h4" align="center" color="white" component="p">
          Art
        </Typography>
        <br/><br/>
      </main>
    </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Events and promotions
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}