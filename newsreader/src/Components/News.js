import React, { useEffect, useState ,useRef} from "react";
import "./News.css";
export default function News() {
  const check=useRef(null);
  const BaseUrl="https://newsdata.io/api/1/news?apikey=pub_8311806a6d0b0e7bee1f12383344b2bbe3390&q=sports ";
    const [news,setNews]=useState([]);
    const loadNews= async()=>{
      try{
      const response=await fetch(`${BaseUrl}`);
      const json=await response.json();
      console.log(json.results);
      console.log("sai")
      setNews((prev)=>[...prev,...json.results]);
      }
      catch(error){
  console.log(error);
      }
    }
    useEffect(()=>{
  loadNews();
    },[]);
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("sai intersecting");
          loadNews();
        }
      });
    
      const target = check?.current?.lastElementChild;
      if (target) {
        observer.observe(target);
      }
    
      return () => {
        if (target) observer.unobserve(target);
        observer.disconnect();
      };
    }, [news]); // rerun when news updates
    
  console.log(check?.current?.lastElementChild);
    return (
        <>
        <div ref={check} className="Container_wrapper">
          {
       news.map((news)=>
       <div className="Container">
        <div className="image">
          <img src={news.image_url} alt={news.title}></img>
          </div>
       <div className="content">
       <h4>{news.title}</h4>
       <p>{news.description}</p>
        </div>
        <div className="readmore">
          <a href={news.source_url} target="_blank">Read More</a>
          </div>
       </div>
       )
          }
        </div>
        </>
    );
}