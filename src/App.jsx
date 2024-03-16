import React, { useEffect, useState } from 'react'
import Quote from './Quote'
import style from './CSS/Quote.module.css'
import axios from 'axios';

export default function App() {
  const [color, setcolor] = useState("#f5f6f4");
  const [quote, setquote]= useState("You can observe a lot just by watching.")
  const [author , setauthor]= useState("Yogi Berra")
  const[quotearray, setquotearray]= useState([])
  
  const bgcolor=()=>{
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
    // console.log(randomColor);
    // setcolor(randomColor);
  }
  useEffect(()=>{
    setTimeout(()=>{
      const color= bgcolor();
      setcolor(color)
    },5000);
  });


  useEffect(()=>{
    axios.get("https://type.fit/api/quotes").then((res)=>{
      // console.log(res)
      // setquotearray([...quotearray,res.data])
      setquotearray(res.data)
      
    })
  },[])

  const handleclick= ()=>{
    const randomindex= Math.floor(Math.random()* quotearray.length)
    console.log(quotearray[randomindex])
    setquote(quotearray[randomindex].text)
    setauthor(quotearray[randomindex].author)


  }
  return (
    <>
    <div className={style.root} style={{backgroundColor:color , transition:" background-color 2s"}}>
      {/* <Quote b={bgcolor}/> */}
      <Quote h={handleclick} q={quote} a={author} />
    </div>
    </>
  )
}
