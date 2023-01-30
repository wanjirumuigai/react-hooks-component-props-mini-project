import React from "react";
import Article from "./Article";
import blogData from "../data/blog";



function ArticleList(){
    return (
        <main>
            { blogData.posts.map((item) => {
                return (
                    <Article key={item.id} title={item.title} date={item.date} preview={item.preview}/>
                )
            })
            }
           

        </main>
    )
}

export default ArticleList