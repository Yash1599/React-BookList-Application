import React from 'react';
const Book = (props) =>{ 
  const {img,title,author}=props.book;
  const clickHandler =()=>{
    alert('hello world')
  }

  const complexExample=(author)=>{
    console.log(author)
  }
  return(
     <article className="book" onMouseOver={()=>{
       console.log(title)
     }} >
     <img src={img} alt=''/>
     <h1 onClick={()=>{console.log(title)}}>{title}</h1>
     <h4>{author}</h4>
     <button type='button' onClick={clickHandler}>Hello Fellas</button>
     <button type='button' onClick={()=>complexExample(author)}></button>
    </article>
  )
} ;

export default Book