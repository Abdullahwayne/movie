import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import MovieList from './Movies';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MicIcon from '@mui/icons-material/Mic';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ListItemText from '@mui/material/ListItemText';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import DirectionsIcon from '@mui/icons-material/Directions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import ExploreIcon from '@mui/icons-material/Explore';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import HistoryIcon from '@mui/icons-material/History';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FormControl from '@mui/material/FormControl';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { getRadioUtilityClass, Icon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import '../componenets/Header.css';
import Logo from '../Assets/nature-logo.png';
import { borderRadius } from '@mui/system';

const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
         
      <CssBaseline />
      <AppBar style={{backgroundColor:"white"}} position="fixed" open={open}>
        <Toolbar><div className='mainDiv'>

        
            <div className='left'> <IconButton
          style={{
            backgroundColor: 'transparent' ,
        color:"gray"

        }}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
           
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} style={{width:"25%",}} alt='logo'/>
          </div>

         
         
          <div className='middle'>
          <Paper
      component="form" 
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:" 100%" }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
       
      </IconButton>
      <InputBase
        fullWidth
        placeholder="Search "
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" style = {{background:"#C4C4C4", borderRadius:"5px"}}sx={{ p: '10px' }} aria-label="search">
        <SearchIcon  color ="white"/>
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton  style={{background:"#C4C4C4", borderRadius:"5px"}} sx={{ p: '10px' }} aria-label="Mic">
      <MicIcon/>
      </IconButton>
    </Paper>

</div>
<div className='right'>
<IconButton type="bell" sx={{p:'10px'}}>
    <MoreVertIcon/>
    </IconButton>

    <IconButton type="bell" sx={{p:'10px'}}>
        <NotificationsIcon></NotificationsIcon>
       
    </IconButton>
    <IconButton type="bell" sx={{p:'10px'}}>
    <SettingsIcon/>
    </IconButton>
    <Button style={{backgroundColor:"gray"}} variant="contained">Sign in</Button>


    <Button style={{backgroundColor:"orange"}} variant="contained">Sign up</Button>

</div>
</div>
        
         {/* < <Typography variant="h6" noWrap component="div">
              LOGO
          </Typography>> */}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton  onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem  button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home"/>
             
            </ListItem>
        </List>
        <ListItem  button>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore"/>
            </ListItem>
            <ListItem  button>
              <ListItemIcon>
                <SubscriptionsIcon />
              </ListItemIcon>
              <ListItemText primary="Subscription"/>
            </ListItem>
        
        <Divider />
        <List>
         
            <ListItem button >
              <ListItemIcon>
                <LibraryBooksIcon/>
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItem>

            <ListItem button >
              <ListItemIcon>
                <HistoryIcon/>
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItem>

            <ListItem button >
              <ListItemIcon>
                <WatchLaterIcon/>
              </ListItemIcon>
              <ListItemText primary="Watch Later" />
            </ListItem>

            <ListItem button >
              <ListItemIcon>
                <VideoLibraryIcon/>
              </ListItemIcon>
              <ListItemText primary="Liked Videos" />
            </ListItem>
        </List>
        <Divider /> 
        <List>
            <h3>Subscriptions</h3>
        <ListItem button >
              <ListItemIcon>
                <MusicVideoIcon/>
              </ListItemIcon>
              <ListItemText primary="Music" />
            </ListItem>
            <ListItem button >
              <ListItemIcon>
                <SportsBasketballIcon/>
              </ListItemIcon>
              <ListItemText primary="Sports" />
            </ListItem>
            
            <ListItem button >
              <ListItemIcon>
                <SportsEsportsIcon />
              </ListItemIcon>
              <ListItemText primary="Gaming" />
            </ListItem>
            <ListItem button >
              <ListItemIcon>
                <NewspaperIcon/>
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItem>
        </List>
      </Drawer>
     
      
      <Main open={open}>
          <>
          </>
       <MovieList/>
      </Main>
    </Box>
  );
}

