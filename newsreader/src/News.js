import React, { useEffect, useState } from "react";
export default function News() {
    const [news,setNews]=useState([]);
    useEffect(()=>{
  const loadNews= async()=>{
    try{
    const response=await fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-03-18&sortBy=publishedAt&apiKey=3352c85574d3424a8c345f213eab26fa")
    const json=await response.json();
    console.log(json.articles);
    console.log("sai")
    }
    catch(error){
console.log(error);
    }
  }
  loadNews();
    },[]);
    return (
<></>
    );
}