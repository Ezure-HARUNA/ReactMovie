import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components"
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Div= styled.div``

const StyledListItemText=styled(ListItemText)`
 :hover {
    color: blue!important;
  }
`

const StyledLink=styled(Link)`
  /* text-decoration:none!important; */
  color: gray!important;
  :hover {
    color: blue!important;
  }
`

const StyledButton = styled(Button)`
background: blue;
  border-radius: 3px;
  border: 0;
  color: white!important;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  margin-left:10px;
  margin-top:-15px;
`;


export default function Test(props) {

  const handleId= (e)=>{
    //e.preventDefault()
    props.setId(props.id)
}

 
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
     
     <List>
          <StyledLink className="link" onClick={(e)=>{handleId()}} to=''>
          <ListItem>
          <ListItemIcon>< TheatersRoundedIcon /></ListItemIcon>
          <ListItemText primary="人気映画"/>
          </ListItem>
          </StyledLink>

      </List>
      <List>
          <StyledLink className="link" onClick={(e)=>{handleId()}} to='/upcoming'>
          <ListItem>
          <ListItemIcon>< TheatersRoundedIcon /></ListItemIcon>
          <ListItemText primary="UpComing"/>
          </ListItem>
          </StyledLink>

      </List>
      <List>
          <StyledLink className="link" onClick={(e)=>{handleId()}} to='/favorite'>
          <ListItem>
          <ListItemIcon>< FavoriteRoundedIcon /></ListItemIcon>
          <ListItemText primary="Favorite"/>
          </ListItem>
          </StyledLink>

      </List>
      
      <Divider />
      
      
      <List>
          {/* <Link className="link" onClick={(e)=>{handleId()}} to='/'> */}
          {/* READMEのリンク */}
          <ListItem>
          <ListItemIcon>< MenuBookRoundedIcon /></ListItemIcon>
          <StyledListItemText primary="README"/>
          </ListItem>
          {/* </Link> */}

      </List>
      <List>
          {/* <Link className="link" onClick={(e)=>{handleId()}} to='/upcoming'> */}
          {/* ログアウトのリンク */}
          <ListItem>
          <ListItemIcon>< MeetingRoomRoundedIcon /></ListItemIcon>
          <StyledListItemText primary="ログアウト"/>
          </ListItem>
          {/* </Link> */}

      </List>
      
    </div>
  );


  return (
    <Div>
      <StyledButton onClick={toggleDrawer('left', true)}><MenuIcon/> </StyledButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </Div>
  );
}
