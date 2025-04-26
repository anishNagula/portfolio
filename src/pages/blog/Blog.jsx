import React from "react";

function BlogPost({ title, date, content }) {
    return (
        <div className="blog-card">
            <h2 className="blog-title">{title}</h2>
            <p className="blog-date">{date}</p>
            <p className="blog-content">{content}</p>
        </div>
    );
}

export default function Blog() {
    const posts = [
        // {
        //     title: "Why Building Small Projects Matters",
        //     date: "April 26, 2025",
        //     content: "Building small projects helps you learn faster. They give you hands-on experience, help you build a portfolio, and boost your confidence. Instead of reading endlessly, you start *creating*, which is the real path to mastery."
        // }
    ];

    return (
        <div className="blog-main">
            <h1 className="blog-heading">my blog</h1>
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
