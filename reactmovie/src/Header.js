import React from "react"
import Test from "./Test"
import styled from "styled-components"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';


const Div=styled.div`
  /* position: fixed; */
`

//ログイン
const names = ['Haruna Ezure', 'Guest'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

   // データベースのデータを反映する処理
  const handleListItemClick = value => {
    onClose(value);

  //   //データベースからデータを持ってくる
  //   fetch("/api/users")
  //   .then(res=>res.json())
  //   .then(res=>{
  //   //持ってきたデータを反映させる(setUsers)
  //   setUsers(res.data)
  // })

  };
   
    

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {names.map(name => (
          <ListItem button onClick={() => handleListItemClick(name)} key={name}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} />
          </ListItem>
        ))}

        {/* <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem> */}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};



//➁コンポーネント

const StyledAppBar = styled(AppBar)`
background: linear-gradient(45deg, blue, brown);
  border-radius: 3px;
  border: 0;
  color: white;
  height:60px;
  line-height:60px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  margin-left:10px;
  margin-top:-15px;
  position: fixed!important;
`;

/*
const StyledLink = styled(Link)`
  border: 1px solid #7ca887;
  border: none;
  box-shadow: 0 0.22em #151c24;
  background: none;
  margin: 1em 0.35em 0 0.35em;
  padding: 0 0.5em 0.2em;
  outline: none;
  text-decoration: none;
  font-size: 1.25em;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  color: #7ca887;
  :hover {
    cursor: pointer;
  }
`;
*/


const Header =(props) =>{
    
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));
   
     const classes = useStyles();


     //ログイン

     const [open, setOpen] = React.useState(false);
     const [selectedValue, setSelectedValue] = React.useState(names[1]);
   
     const handleClickOpen = () => {
       setOpen(true);
     };
   
     const handleClose = value => {
       setOpen(false);
       setSelectedValue(value);
     };

   

    //➂レンダリング
    return (
        <Div className={classes.root}>
            <StyledAppBar position="static" color="primary" >
                <Toolbar>
                    <Test id={props.id} setId={props.setId}></Test>
                    <Typography variant="h6" className={classes.title}>
                        アプリ名
                    </Typography>
                    <Button color="inherit" onClick={handleClickOpen}><ExitToAppIcon/>ログイン</Button>
                    <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
                   
                </Toolbar>
            </StyledAppBar>
            
        </Div>
        
      
    )


}

//➃エクスポート
export default Header


