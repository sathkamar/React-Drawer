import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'
import { changelang } from '../../app/redux/DrawerReducer'
import { Drawer, IconButton, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Inbox, Mail } from '@material-ui/icons';
import TranslateIcon from '@material-ui/icons/Translate';
import { LangContext } from '../../app/contexts/LangContext';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function LeftDrawer() {
  const classes = useStyles();
  // const selectedLang = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  const {pageString, selectedLang} = useContext(LangContext)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap  onClick={() => dispatch(changelang(selectedLang === "en" ? "tm" : "en"))}>
            {pageString.pageTitle}
          </Typography>

          <IconButton color="secondary" aria-label="add an alarm" onClick={() => dispatch(changelang(selectedLang === "en" ? "ar" : "en"))}>
            <TranslateIcon /> <span style={{color: "#FFF"}}>{selectedLang}</span>
          </IconButton>

        </Toolbar>
       
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        {pageString.content}
        
        </Typography>
        
      </main>
    </div>
  );
}
