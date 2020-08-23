import React from "react";
import styled from "styled-components"
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles';

const StyledPagination=styled(Pagination)`
    color: white!important;
 `
const useStyles = makeStyles(theme => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const PageContoroll =(props) => {
   
    const classes = useStyles();
    const handleChange = (e, value) => {
      e.preventDefault()
      props.setPages(value);
    };
  
    return (
        <div style={{margin:'auto',width:'50%'}}> 
            <StyledPagination  count={10} color="primary" page={props.pages}  onChange={(e)=>{handleChange(e)}}/>
          
        </div>
    )

}

export default PageContoroll


