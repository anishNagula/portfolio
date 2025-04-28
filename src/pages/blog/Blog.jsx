import React, { useState, useEffect } from "react";

function BlogPost({ title, date, content }) {
    return (
        <div className="blog-card">
            <h2 
                className="blog-title"
                dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <p className="blog-date">{date}</p>
            <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: content }} // This will render the HTML content
            ></div>
        </div>
    );
}

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/posts.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);  // Ensure the data looks correct
                setPosts(data);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div className="blog-main">
            <h1 className="blog-heading">My Blog</h1>
            <div className="blog-posts">
                {posts.length === 0 ? (
                    <p className="blog-empty">Coming soon...</p>
                ) : (
                    posts.map((post, index) => (
                        <BlogPost key={index} {...post} />
                    ))
                )}
            </div>
        </div>
    );
}
