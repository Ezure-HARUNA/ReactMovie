import React from "react"
import {Link} from 'react-router-dom'
import NO_IMG from "./img/noImage.png"
import styled from "styled-components"
//import RemoveFavorite from "./RemoveFavorite"
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const imgUrl = "https://image.tmdb.org/t/p/w154/";

const Img =styled.img`
width: 154px;
/* width:100%; */
/* height:100%; */
height: 250px;
border-radius:4px;
`

const Div=styled.div`
   position: relative;
   margin-top: 30px!important;
   transition: transform;
   transition-duration: 0.2s;
   color: white;
    
   :hover {
        cursor: pointer;
        transform: scale(1.1);
   }
   
  @media screen and (max-width: 1500px) {
    width: 200px!important;
  }
  @media screen and (max-width: 640px) {
    width:170px!important;
  }
  
  @media screen and (max-width: 375px) {
    width:150px!important;
    /* margin: 0 auto; */
    /* justify-content:space-between!important; */
    width:40%!important;
  }
`

const StyledRating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.25rem;
  padding: 0.2rem;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const StyledStarRoundedIcon=styled(StarRoundedIcon)`
color: yellow;`

const StyledTitle=styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0.25rem;
  padding: 0.2rem;
  background-color: rgba(0, 0, 0, 0.0);
`



const List =(props) => {
    //img→検索結果を表示
    const poster =
    props.movies[props.id].poster_path === "N/A" ? NO_IMG : imgUrl+props.movies[props.id].poster_path
    //  props.movies[props.id].poster_path === "N/A" ? NO_IMG : imgUrl+props.movies[props.id].poster_path

    // let genresArray = props.movies[props.id].genres.map(item => item.name);

     const rating = () => {
        if (props.movies[props.id].vote_average !== 0) {
          return (
            <StyledRating>
              <StyledStarRoundedIcon />
              {props.movies[props.id].vote_average}
            </StyledRating>
          );
        }
      };
      const title =() =>{
          if (props.movies[props.id].title !== null) {
              return (
                <StyledTitle>{props.movies[props.id].title}</StyledTitle> 
              )
          }
      }

    

      const handleId= (e)=>{
          //e.preventDefault()
          props.setId(props.id)
      }
    
  
    return (
       //中央ぞろえ
       <Div style={{margin:'auto'}} className="movie"> 
             {/* <h2>{genresArray().join(" , ")}</h2>  */}
            {rating()}
            <Link onClick={(e)=>{handleId()}} to='/detail'>
            <Img 
                //  onClick={handleListSubmit}
                 src={poster}
              />
            </Link>
              {/* <PageContoroll></PageContoroll> */}
            {title()}


            {/* {props.removeMode && <RemoveFavorite favorites={props.favorites} setFavorites={props.setFavorites} movie={props.movie} id={props.id}/>} */}
            
            {/* <RemoveFavorite favorites={props.favorites} setFavorites={props.setFavorites} movie={props.movie}/> */}
            {/* <p>{props.movies[props.id].title}</p>  */}
            {/* <p>{props.movies[props.id].release_date}</p>  */}
            {/* <p>{props.movies[props.id].overview}</p>  */}
            {/* </Grid> */}
            
        
            

        </Div>
    )
}

export default List
//export default withRouter(connect(mapStateToProps, map)(List))
