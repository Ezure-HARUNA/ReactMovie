//➀インポート
import React from "react"
import Search from "./Search"
import List from "./List";
import PageContoroll from "./PageContoroll";
import CircularProgress from '@material-ui/core/CircularProgress';

  //styled-componentsをインポート
  import styled from "styled-components";

　//APIの導入
// const MOVIE_POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=62df1d74f3375f28b7946846b540b1b9&amp;language=ja-JA&amp;page=${props.pages}`;
  //const MOVIE_UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=62df1d74f3375f28b7946846b540b1b9&amp;language=ja-JA&amp;page=1";
  
//➁コンポーネント

const Div = styled.div `
  min-height:100vh;
  width:100vw;
  background-color: #282A3A;
  z-index: 1!important;
  color:white!important;

.errorMessage {
  margin: 0 auto;
  font-weight:bold;
  color: red;
}
/* .moviesList {
  display: flex;
  flex-wrap: wrap;
  justify-content:flex-start!important;
}*/
` 
const Ul =styled.ul`
  display:flex;
  flex-flow: row wrap; 
  justify-content: flex-start!important;
`


const App =(props) => {
  
  
      //map関数の引数をreturnしてあげる必要がある
              //配列  　　　//配列 //配列(movies)に用意されたメソッド(あらかじめ用意された関数)　//movie=連想配列(要素)
              //メソッドは作ることもできる
              const moviecards=props.movies.map((movie, id) =>{
                return (
                   <List details={props.details} setId={props.setId} id={id} movie={movie} movies={props.movies}/>
                )
                })
    
              /*
              const moviecards= [<List key={`${id}-{res.results[0].title}`} movie={movie} />
                                 , <List key={`${id}-{res.results[1].title}`} movie={movie} />
                                 ,<List key={`${id}-{res.results[2].title}`} movie={movie} />
                                ・・・・・・]
                */


  return (
    
    <Div>
       
     
      <Search search={props.search}></Search>
      {/* <img src="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg" alt=""/> */}
      {/* 分岐ごとの表示 */}
      <div className="moviesList">
        
        {props.loading && !props.errorMessage ? ( //loading=true/errorMessage=falseの場合
          // <span>loading...</span>
          <CircularProgress color="secondary" />
        ): !props.loading && props.errorMessage ? (
          <ul>
              <h3 className="errorMessage">検索結果 なし</h3>
          </ul>
        ): (
          <Ul>
            {moviecards}
          </Ul>
        )} 
      </div>
        <PageContoroll pages={props.pages} setPages={props.setPages}></PageContoroll>  
    </Div>
    
  )
}

 


//➃エクスポート
export default App
//export default process.env.NODE_ENV === "development" ? hot(App) : App;
