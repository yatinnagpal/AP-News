import React,{useState} from 'react';
import './News.scss';
function News() {
    const [img, setImg] = useState();
    const url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8797f70669b843738048d10827c7d266";
    const newurl="https://api.github.com/users";
     fetch(url).then((response)=>{
         return response.json();
     }).then((data)=>{
        console.log(data);
        const {articles}=data;
        articles.forEach(element => {
            if(element.urlToImage)
            {
              console.log(element.title);
              console.log(element.description);
              console.log(element.author);
              document.getElementById("news").innerHTML+=`<div class="card" style="width: 18rem; height:300px; margin-left:20px; margin-top:20px; margin-right:40px">
              <img src=${element.urlToImage} class="card-img-top" alt="..." style="width:285px; height:200px">
              <div class="card-body">
                <h6 class="card-title">${element.title}</h6>
          
                <a href=${element.url} target="_blank" class="btn btn-primary">Read more</a>
              </div>
            </div>`;
            }
        });
     }).catch((err)=>console.log("error occured",err));
  return (
    <div id="news">
    </div>
  )
}

export default News;
