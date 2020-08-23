import React, { useState } from "react";
import styled from "styled-components";
//material-UIをインポート
//import { makeStyles } from '@material-ui/core/styles';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const Search = (props) => {
//   const [searchValue, setSearchValue] = useState("");
const searchValue = props.searchValue;
const setSearchValue = props.setSearchValue;
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }
 


const StyledForm =styled.form`
  margin-top: 300px!important;
  color: white;
  display: flex!important;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 70px;
}
`
const StyledInputBase =styled(InputBase)`
color: white!important;
margin: 20px!important;
background-color:#4A638C;
opacity: 1;
border-radius: 20px;
width: 200px;
height:36px;
`



const StyledButton = styled(Button)`
  background: linear-gradient(45deg, blue 30%, #00a81c 90%);
  border-radius: 20px!important;
  border: 0;
  color: white;
  height:40px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  margin-top:-15px;
  cursor: pointer;
`


const Search =(props) =>{
  //const [title, setTitle] =React.useState("")
  //const [overview, setOverview] =React.useState("")
  //const [img, setImg]=React.useState("")
  //const [year, setYear]=React.useState("")


  //const [ステート名、ステートの再定義関数名]= React.useState(ステートの初期値)
//   const [searchValue, setSearchValue] = React.useState("");


  
  //ボタンが押されてsubmitした時に、検索処理を行う
  // ➀ボタンが押されたことを感知する
  const handleSearchInputChange =(e) =>{
      e.preventDefault()
      setSearchValue(e.target.value)
  }
     
      
          
      const resetInput =()=>{
          //➁入力範囲を空にする
          setSearchValue("")
      }
          // ➂検索機能の呼び出し
          
      const callSearchClick =(e) => {
           e.preventDefault();
  //preventDefaultで何が起こっているのか分からない
          props.search(searchValue);
          resetInput();
      }

 


  
   return (
      <StyledForm align ="center" className="search" >
          
          {/* <TextareaAutosize aria-label="empty textarea" placeholder="キーワードを入力" /> */}
          {/* <Button type="submit" variant="contained" color="primary" href=""> */}
             {/* 検索 */}
          {/* </Button> */}
          

          
            {/* <SearchIcon color="primary"/> */}
            <form className="searchInput"> 
              {/* onSubmit={(e)=>{handleSearchSubmit(e)}}  */}
                {/* 定義と実行。returnでは定義の中に実行を入れる */}
               <StyledInputBase value={searchValue} onChange={handleSearchInputChange} type="text" placeholder=" 入力してください"  inputProps={{ 'aria-label': 'search' }}/>
               <StyledButton onClick={callSearchClick} type="submit" variant="contained" color="primary" ><SearchIcon style={{ fontSize: 20 }} color="white"></SearchIcon>検索</StyledButton>
               {/* title={title} setTitle={setTitle}  img={img} setImg={setImg} overview={overview} setOverview={setOverview} year={year} setYear={setYear} */}
            </form>
               
          
          
            
            

          

                      
      </StyledForm>
      
  )


}


  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;