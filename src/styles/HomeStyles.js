import {makeStyles} from '@material-ui/core/styles';
import theme from '../theme.js'
const drawerWidth = 260;

const HomeStyles = makeStyles(() => ({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(56,56,56,.8)',
        outline: '1px solid slategrey',
        borderRadius: '10px',
        height: '20%'
      },
    },
    root: {
      display: 'flex',
    },
    appBar: {
      background: 'rgba(32, 32, 32, 0.95)',
      zIndex: theme.zIndex.drawer + 1,
      width: '100%',
      top: 0,
      left: 0,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 10,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      borderRight: 'none',
      ['& slide']: {
        borderRight: 'none'
      },
    },
    paper: {
      borderRight: 'none',
      position: 'fixed',
      top: 'auto',
      paddingBottom: '5%'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: '80px ' + theme.spacing(3) + 'px',
    },
    imageIcon: {
      height: '25px'
    },
    iconRoot: {
      textAlign: 'center'
    },
    searchField: {
      ['& input']: {
        padding: '3px 10px',
        height: '30px',
        width: '30vw',
        background: theme.palette.background.default,
      },
  
      [`& fieldset`]: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
      },
  
      ['& hover']: {
        border: 'none'
      }
    },
    searchButton: {
      background: '#313131',
      height: '36px',
      bordeLeft: "none",
      color: "#606060",
      '&:hover': {
        backgroundColor: '#313131',
        boxShadow: 'none',
        color: '#909090'
      }
    },
    a: {
      color: "#929292",
      fontWeight: '600',
      textDecoration: 'none',
      display: 'block'
    },
    drawerContainer: { margin: '5% 16px' },
    appBarFit: {
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(9) + 1,
      },
    },
    chipsContainer: {
      height: '56px',
      background: 'rgba(32, 32, 32, 0.95)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 30px',
      border: '1px solid rgba(255,255,255,0.1)',
      borderLeft: 'none',
      borderRight: 'none',
      zIndex: '2',
  
    },
    bottomNavigation: {
      display: 'none',
    }
  
    , '@media screen and (max-width: 450px)': {
      micIcon: {
        display: 'none'
      },
      toolbar: {
        padding: 0
      },
      content: {
        pading: '80px 0'
      }
    },
    '@media screen and (max-width: 768px)': {
      appBarFit: {
        marginLeft: 0,
        left: 0
      },
      appBarShift: {
        width: '100%',
        marginLeft: 0,
        left: 0
      },
      drawer: {
        display: 'none',
      },
      rightButtons: {
        display: 'none',
      },
      menuButton: {
        display: 'none',
      },
      chipsContainer: {
        margin: 0
      },
      bottomNavigation: {
        display: 'flex',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%'
      }
  
    },
  }));

  export default HomeStyles