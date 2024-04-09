import { useEffect, useState } from "react"
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({category}) => {

    const[articles,setArticle]=useState([])

    useEffect(()=>{
        const apiKey="ff82eda1e575446ba44e29643c493c97"
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                console.log("API response:", data); // Log the API response
                setArticle(data.articles)})
            .catch(error => console.error("Error fetching data:", error));

    },[category])
  return (
    <div>
        <h2 className="text-center mt-3">Latest <span className="badge bg-danger">News</span></h2>
        {articles && articles.map((article, index) => (
                <NewsItem
                    key={index}
                    title={article.title}
                    description={article.description}
                    src={article.urlToImage}
                    url={article.url}
                />
            ))}
                
            

    </div>
  )
}
