import React from "react"
import {Link} from 'react-router-dom'
import styled from "styled-components"
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Button from '@material-ui/core/Button';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import BackspaceRoundedIcon from '@material-ui/icons/BackspaceRounded';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import NO_IMG from "./img/noImage.png"



const imgUrl = "https://image.tmdb.org/t/p/w1280/";
const imgUrlPc = "https://image.tmdb.org/t/p/w500/";
const detailImgUrl = "https://image.tmdb.org/t/p/w1280/";

const Img =styled.img`
width:100%;
height:100%;
`

// const Div=styled.div`
//    /* position: relative; */
//    min-height:100vh;
//    /* width:100vw; */
//    background-color: #282A3A;
//    margin-top: 10px!important;
//    color: white;
//    overflow: hidden!important;
// `
const Div2=styled.div`
    padding: 0 3%!important;
`
const Div3=styled.div`
    padding: 0 3%;`

const DivSP=styled.div`
display: flex!important;
flex-wrap: wrap!important;
color: red;
`

const StyledStarRoundedIcon=styled(StarRoundedIcon)`
color: yellow;`


const StyledButton = styled(Button)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 20px!important;
    border: 0;
    color: white;
    height:40px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    margin: 10px 5px!important;
    cursor: pointer;

 `

 
const StyledButton2 = styled(Button)`
background: linear-gradient(45deg, blue 30%, #00a81c 90%);
border-radius: 20px!important;
border: 0;
color: white;
height:40px;
padding: 0 30px;
box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
margin: 10px 5px!important;
cursor: pointer;

`

const imgUrlF = "https://image.tmdb.org/t/p/w1280/";

//const DEFAULT_IMG ="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg"
//No Image用の画像

const FavoriteDetail =(props) => {

    const Div =styled.div`
/* width: 470px!important; */
/* height: 720px!important; */
background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.05) 35%,
      rgba(44, 57, 73, 0.8) 55%,
      rgba(44, 57, 73, 1) 70%
    ), 
    url(${ imgUrl+props.movies[props.id].backdrop_path})!important;

     /* position: relative; */
   min-height:100vh;
   /* width:100vw; */
   background-color: #282A3A;
   margin-top: 10px!important;
   color: white;
   overflow: hidden!important;
   display: flex;
   background-size: contain!important;
`


    //img→検索結果を表示
    //const poster =
     //props.img === "N/A" ? DEFAULT_IMG : props.img;
    const rating = () => {
        if (props.favorites[props.id].vote_average !== 0) {
            return (
                <div>
                    <StyledStarRoundedIcon />
                    {props.favorites[props.id].vote_average}
                </div>
            )
        }
    }

    const handleId= (e)=>{
        //e.preventDefault()
        props.setId(props.id)
    }

    const[isAdd, setIsAdd]=React.useState(true)
    const handleIsFavorite =(e)=>{
        e.preventDefault()
        if (isAdd) {
            setIsAdd(false)
            // props.movies(e.target.props.movies.value)
            // If no favorites exist, clone the movie and copy into newFavorites.
            const removeFavoritesF = props.favorites.slice();
            
            //取り出した値の追加
            //let deepClone = JSON.parse(JSON.stringify(props.movies));
            removeFavoritesF.splice(props.id, 1)
  
            //favoritesの再定義
            props.setFavorites(removeFavoritesF)
  
          //const newFavorites = favorites.filter(item => item.id !== props.movie.id);
        } else {
            setIsAdd(true)
            //➁追加の処理
            // props.movies=e.target.props.movies.value
                 
            // If no favorites exist, clone the movie and copy into newFavorites.
            let newFavoritesF = props.favorites.slice();
            let moviesCloneF = JSON.parse(JSON.stringify(props.movies[props.id]));

            //取り出した値の追加
            //let deepClone = JSON.parse(JSON.stringify(props.movies));
            newFavoritesF.push(moviesCloneF)

            //favoritesの再定義
            props.setFavorites(newFavoritesF)
            }

    } 
    
    let isAddState
        if (isAdd) {
           isAddState="削除"
    
        } else {
        　 isAddState="追加"
     
    }

   

    const theme = useTheme();
    const isPC=useMediaQuery(theme.breakpoints.up('sm'));

    const poster =
    props.favorites[props.id].backdrop_path === "N/A" ? NO_IMG : detailImgUrl+props.favorites[props.id].backdrop_path

    // const isTAB=useMediaQuery({
    //     query: "(max-width: 1024px)"
    // })

    // let genresArray =props.details.map(item=>item.name)

    let strf=props.favorites[props.id].release_date;
    let releaseDatef=strf.split('-').join('/');

    

    // const { urlKey } = props;
    // const url = `https://www.youtube.com/watch?v=${urlKey}`;

    
    return (
    <>
        {isPC ? (
        <Div style={{margin:'auto'}} className="movie"> 
            {/* <Img 
                src={poster}
            /> */}
            <Div2>
                <h1>{props.favorites[props.id].title}</h1> 
                {rating()}
                <h2>Overview</h2>
                {/* <h3>ジャンル{genresArray.join(" , ")}</h3> */}
                <p>{props.favorites[props.id].overview}</p>
                <h3>Release Date</h3>
                <p>{releaseDatef}</p>
                <h3>上映時間</h3>
                {/* <p>{props.details.runtime}分</p> */}

                <StyledButton  onClick={(e)=>{handleIsFavorite(e)}} variant="contained" color="primary" startIcon={<FavoriteRoundedIcon />}> 
                    {isAddState}
                </StyledButton> 
                <Link onClick={(e)=>{handleId()}} to='/'>
                <StyledButton2  variant="contained" color="primary" startIcon={<BackspaceRoundedIcon />}>
                    Back To Sarch Screen
                </StyledButton2>
                </Link>
                {/* <PlayButton onClick={() => window.open(url, "_blank")}>
                    <PlayIcon />
                    Watch Trailer
                </PlayButton> */}
            </Div2>
        </Div>       
　　　　
           
        ) : ( //PC版
            <DivSP>
                <Img 
                    src={imgUrlF+props.favorites[props.id].backdrop_path}
                />
                <Div3 className="childContainer">
                    <h1>{props.favorites[props.id].title}</h1> 
                    {rating()}
                    <h2>Overview</h2>
                    {/* <h3>ジャンル{genresArray.join(" , ")}</h3> */}
                    <p>{props.favorites[props.id].overview}</p>
                    <h3>Release Date</h3>
                    <p>{releaseDatef}</p>
                    <h3>上映時間</h3>
                    {/* <p>{props.details.runtime}分</p> */}

                    <StyledButton  onClick={(e)=>{handleIsFavorite(e)}} variant="contained" color="primary" startIcon={<FavoriteRoundedIcon />}> 
                        {isAddState}
                    </StyledButton> 
                    <Link onClick={(e)=>{handleId()}} to='/'>
                    <StyledButton2  variant="contained" color="primary" startIcon={<BackspaceRoundedIcon />}>
                        Back To Sarch Screen
                    </StyledButton2>
                    </Link>
                    {/* <PlayButton onClick={() => window.open(url, "_blank")}>
                        <PlayIcon />
                        Watch Trailer
                    </PlayButton> */}
                </Div3>
            </DivSP>

        )}
    </>
    )

}



export default FavoriteDetail
//export default withRouter(connect(mapStateToProps, map)(List))