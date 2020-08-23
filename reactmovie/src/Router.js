// インポートするコンポーネント、styled-components、material-ui,その他をインポート

import React, {useEffect} from "react"
import {BrowserRouter , Route} from "react-router-dom";
import App from "./App"
import Header from "./Header"
import Detail from "./Detail"
import List from "./List"
import FavoriteList from "./FavoriteList"
import UpComing from "./UpComing"
import Favorite from "./Favorite"
import FavoriteDetail from "./FavoriteDetail"
import Search from './Search'


import styled from "styled-components"
// import PageContoroll from "./PageContoroll";

const Div=styled.div`
   background-color: #282A3A;
`

const Router =() =>{
    const [movies, setMovies] = React.useState([])
    const [details, setDetails] =React.useState([])
    const [favorites, setFavorites] =React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [pages, setPages]=React.useState(1)
    const [id, setId] =React.useState("")
    let newFavorites ;

//app
    const [loading, setLoading] = React.useState(true)
    const [errorMessage, setErrorMessage] = React.useState(null)

     //APIの導入
  const MOVIE_POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=62df1d74f3375f28b7946846b540b1b9&amp;language=ja-JA&amp;page=${pages}`;
  // const MOVIE_POPULAR_URL = `https://api.themoviedb.org/3/discover/movie?api_key=62df1d74f3375f28b7946846b540b1b9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}`
    
    useEffect(() => {
      fetch(MOVIE_POPULAR_URL)
          .then(res => res.json())
          .then(res => { //responseでも可能(任意) json→連想配列
              setMovies(res.results)
              // setDetails(res.genres)
              setPages(res.page)
              setLoading(false)

          });

      fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=62df1d74f3375f28b7946846b540b1b9&language=ja-JA") 
          .then(res => res.json())
          .then(res => {
            setDetails(res.genres)
          })

  
  },[] );
  

  
        
    //配列・連想配列・変数・関数→別々の呼び出し方
  

    //検索の分岐別の処理
    //useEffect
    const search = Value => {
      //検索中
      setLoading(true)
      setErrorMessage(null)

      // fetch(`https://api.themoviedb.org/3/search/person?api_key=62df1d74f3375f28b7946846b540b1b9&language=en-US&query=${searchValue}&page=1&include_adult=false`)
     //fetch( `https://api.themoviedb.org/3/search/movie?api_key=62df1d74f3375f28b7946846b540b1b9&language=en-US&query=${searchValue}&page=1&include_adult=false`)
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=62df1d74f3375f28b7946846b540b1b9&language=ja-JA&query=${searchValue}&page=${pages}&include_adult=false`)

          
        .then(res => res.json())
        .then(res => { //検索成功
            if (res !== null) {
              setLoading(false)
              setMovies(res.results)
              // setDetails(res.genres)
              setPages(res.page)
            } else { //検索失敗
              setErrorMessage(true)
              setLoading(false)
            }
        })

      }

    
    
    


   const favoritecards=favorites.map((favorite, id) =>{
      return (
         <FavoriteList setId={setId} id={id}
          favorite={favorite} favorites={favorites} setFavorites={setFavorites}/>
      )
   })

   

    return (
    <Div>
       <BrowserRouter>
          <Header id={id} setId={setId}></Header>
          {/* <App search={search} loading={loading} errorMessage={errorMessage} pages={pages} setPages={setPages} movies={movies} setMovies={setMovies} details={details} setDetails={setDetails} setId={setId}></App>}> */}
          <Route exact path='/' render={(props) => <App search={search} loading={loading} errorMessage={errorMessage} pages={pages} setPages={setPages} movies={movies} setMovies={setMovies} details={details} setDetails={setDetails} setId={setId}></App>}></Route>
          <Route path='/search' render={(proos) => <Search searchValue={searchValue} setSearchValue={setSearchValue}></Search>}></Route>
          <Route path='/detail' render={(props) => <Detail  newFavorites={newFavorites} movies={movies} details={details} id={id} setId={setId} favorites={favorites} setFavorites={setFavorites}></Detail>}></Route>
          <ul>
          <Route path='/list' render={(props) => <List favorites={favorites} setFavorites={setFavorites} details={details} movies={movies} id={id} setid={setId}></List>}></Route>
          </ul>
          <Route path='/upcoming' render={(props) => <UpComing  movies={movies} setMovies={setMovies} setId={setId}></UpComing>}></Route>
          <Route path='/favorite' render={(props)=><Favorite favoritecards={favoritecards} favorites={favorites} setFavorites={setFavorites} movies={movies} id={id} ></Favorite>}></Route>
          <ul>
               <Route exact path='/favoritelist' render={(props)=> <FavoriteList  favorites={favorites} setFavorites={setFavorites} movies={movies} id={id} ></FavoriteList>}></Route>
          </ul>
          <Route exact path='/favoritedetail' render={(props) => <FavoriteDetail movies={movies} setFavorites={setFavorites} favorites={favorites} id={id}></FavoriteDetail>}></Route>
          {/* <Route path="pagecontoroll" render={(props) => <PageContoroll setId={setId} pages={pages} setPages={setPages}></PageContoroll>}></Route> */}
          {/* <PageContoroll setId={setId} pages={pages} setPages={setPages}></PageContoroll> */}
      </BrowserRouter>
         
    </Div>
    )
}

export default Router