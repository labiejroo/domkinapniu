import { Box, Button, CssBaseline, Divider, Drawer, Fab, IconButton, List, ListItemIcon, styled, Toolbar, Typography, useScrollTrigger, useTheme, Zoom } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import * as P from './parts';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MuiAppBar from '@mui/material/AppBar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BungalowIcon from '@mui/icons-material/Bungalow';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PaidIcon from '@mui/icons-material/Paid';
import RuleIcon from '@mui/icons-material/Rule';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})
(({ theme, open }) => ({
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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const NavBar = () => {
const isMobile = window.innerWidth < 900;
const theme = useTheme();
const [open, setOpen] = React.useState(false);

const handleDrawerOpen = () => {
  setOpen(true);
};

const handleDrawerClose = () => {
  setOpen(false);
};


    return (
        <>
        
       

        <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" 
                open={open}
                sx={{ bgcolor: "#f0efed" }}
                >
                    <Toolbar id="back-to-top-anchor">
                        {isMobile && 
                    <IconButton
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ 
                      mr: 2,
                      color: "#242f25",
                       ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                        }
                        {
                        // !open ? ( 

                    <Box
                      component="img"
                      sx={{
                        height: 93,
                        width: 210,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                      }}
                      alt="logo"
                      src="assets/logo/poziome/png/logo1.png"
                    />
                    // <Typography variant="h6" noWrap component="div">
                    //     Domki Na Pniu
                    // </Typography>
                        // ) 
                        // : (
                        //   <Box
                        //   component="img"
                        //   sx={{
                        //     height: 93,
                        //     width: 93,
                        //     padding: '10px',
                        //     // maxHeight: { xs: 233, md: 167 },
                        //     // maxWidth: { xs: 350, md: 250 },
                        //   }}
                        //   alt="logo"
                        //   src="assets/logo/sygnet/png/sygnet.png"
                        // />
                        // )
                    }
                        {!isMobile && 
                    <P.Links>
                    <P.LinkBox><P.StyledLink to="/">home</P.StyledLink></P.LinkBox>
                    <P.LinkBox><P.StyledLink to="/oferta">oferta</P.StyledLink></P.LinkBox>
                    <P.LinkBox><P.StyledLink to="/galeria">galeria</P.StyledLink></P.LinkBox>
                    <P.LinkBox><P.StyledLink to="/cennik">cennik</P.StyledLink></P.LinkBox>
                    <P.LinkBox><P.StyledLink to="/regulamin">regulamin</P.StyledLink></P.LinkBox> 
                    <P.LinkBox><P.StyledLink to="/kontakt"><Button variant="outlined"
                    style={{
                      color: "#242f25",
                      fontFamily: 'myFirstFontReg',
                      borderColor: "#242f25",
                      '&:hover': {
                        backgroundColor: "#242f25",
                    },
                      // borderRadius: 35,
                      // backgroundColor: "#21b6ae",
                      // padding: "18px 36px",
                      // fontSize: "18px"
                  }}
                  >kontakt</Button></P.StyledLink></P.LinkBox> 
                    </P.Links>
                        }
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#f0efed',

                            '& > div' : {
                              backgroundColor: '#242f25',
                              '& > button' : {
                                color: '#f0efed',
                              }
                            }
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    >
                    <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ?
                         <ChevronLeftIcon /> : <ChevronRightIcon />
                        }
                    </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                    {/* {['Home', 'Oferta', 'Galeria', 'Cennik', 'Regulamin', 'Kontakt'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))} */}
                    <P.NoStyledLink to="/">
                        <ListItem  onClick={handleDrawerClose}
                        button key={'Home'} >

                          <ListItemIcon>
                              <BungalowIcon   sx={{
                                color: '#c79d09',
                              }} />
                          </ListItemIcon>
                          <ListItemText sx={{
                            '& > span' : {
                              color: '#242f25',
                              fontFamily: 'myFirstFontReg',
                              fontSize: '22px'
                            }
                          }} primary={'home'} />
                        </ListItem>
                          </P.NoStyledLink>
                          <P.NoStyledLink to="/oferta">

                        <ListItem onClick={handleDrawerClose} button key={'Oferta'}>
                          <ListItemIcon>
                              <LocalOfferIcon  sx={{
                                color: '#c79d09',
                              }}/>
                          </ListItemIcon>
                          <ListItemText  sx={{
                            '& > span' : {
                              color: '#242f25',
                              fontFamily: 'myFirstFontReg',
                              fontSize: '22px'
                            }
                          }} primary={'oferta'} />
                        </ListItem>
                          </P.NoStyledLink>
                          <P.NoStyledLink to="/galeria">

                        <ListItem onClick={handleDrawerClose} button key={'Galeria'}>
                          <ListItemIcon>
                              <PhotoLibraryIcon  sx={{
                                color: '#c79d09',
                              }}/>
                          </ListItemIcon>
                          <ListItemText sx={{
                            '& > span' : {
                              color: '#242f25',
                              fontFamily: 'myFirstFontReg',
                              fontSize: '22px'
                            }
                          }} primary={'galeria'} />
                        </ListItem>
                          </P.NoStyledLink>
                          <P.NoStyledLink to="/cennik">

                        <ListItem onClick={handleDrawerClose} button key={'Cennik'}>
                          <ListItemIcon>
                              <PaidIcon  sx={{
                                color: '#c79d09',
                              }}/>
                          </ListItemIcon>
                          <ListItemText sx={{
                            '& > span' : {
                              color: '#242f25',
                              fontFamily: 'myFirstFontReg',
                              fontSize: '22px'
                            }
                          }} primary={'cennik'} />
                        </ListItem>
                          </P.NoStyledLink>
                          <P.NoStyledLink to="/regulamin">

                        <ListItem onClick={handleDrawerClose} button key={'Regulamin'}>
                          <ListItemIcon>
                              <RuleIcon  sx={{
                                color: '#c79d09',
                              }}/>
                          </ListItemIcon>
                          <ListItemText sx={{
                            '& > span' : {
                              color: '#242f25',
                              fontFamily: 'myFirstFontReg',
                              fontSize: '22px'
                            }
                          }} primary={'regulamin'} />
                        </ListItem>
                          </P.NoStyledLink>
                          <P.NoStyledLink to="/kontakt">

                        <ListItem onClick={handleDrawerClose} button key={'Kontakt'}>
                          <ListItemIcon>
                              <MailIcon  sx={{
                                color: '#c79d09',
                              }}/>
                          </ListItemIcon>
                          <ListItemText sx={{
                            '& > span' : {
                              color: '#242f25',
                              fontFamily: 'myFirstFontReg',
                              fontSize: '22px'
                            }
                          }} primary={'kontakt'} />
                        </ListItem>
                          </P.NoStyledLink>
                    </List>
                    <Divider />
                    <List>
                    <P.NoStyledLink to="/kontakt">
                    <ListItem button={false} key="logo">

                      <Box
                          component="img"
                          sx={{
                            height: 54,
                            width: 140,
                            // padding: '10px',
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                          }}
                          alt="logo"
                          src="assets/logo/nazwa/png/nazwaBlack.png"
                          />  
                    </ListItem>
                          </P.NoStyledLink>
                    </List>
                </Drawer>
                </Box>


        {console.log(`isMobile ${isMobile}`)}
        {!isMobile && 
          <P.ContactWrapper isMobile={isMobile}>
              <P.ContactInfo>
                  <PhoneIcon />
                  <a href="tel:506141730">506 141 730</a>
              </P.ContactInfo>
              <P.ContactInfo>
                  <MailIcon />
                  <a href="mailto:domkinapniu@gmail.com">domkinapniu@gmail.com</a>
              </P.ContactInfo>
            
              {/* <P.ContactInfo>
                  
                  <a href="tel:506137671"><FacebookIcon /></a>
                
              </P.ContactInfo>
              <P.ContactInfo>
                  
            
                  <a href="tel:506137671"><InstagramIcon /></a>
              </P.ContactInfo> */}
              {/* <P.MainHeader>
                  <P.Logo></P.Logo>
                  <P.Links>
                      <P.LinkBox><Link to="/home">home</Link></P.LinkBox>
                      <P.LinkBox><Link to="/oferta">oferta</Link></P.LinkBox>
                      <P.LinkBox><Link to="/galeria">galeria</Link></P.LinkBox>
                      <P.LinkBox><Link to="/cennik">cennik</Link></P.LinkBox>
                      <P.LinkBox><Link to="/regulamin">regulamin</Link></P.LinkBox> 
                      <P.LinkBox><Link to="/kontakt"><Button variant="contained">kontakt</Button></Link></P.LinkBox> 
                  </P.Links>
              </P.MainHeader> */}
          </P.ContactWrapper>
        }
        </>
    )
};

export default NavBar;