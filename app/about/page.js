"use client";

import { useState, useEffect } from 'react';

export default function About() {
    const [posts, setPosts] = useState(null); // Initialize with null
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        async function fetchPosts() {
            try {
                let res = await fetch('https://script.google.com/macros/s/AKfycbzzlL52v_BgUWkxo_paVwl0HDBDdOgwVZGxiC31Qdpb7q1tXvOZaI8X8PVmbjESj_Xh/exec');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = await res.json();
                setPosts(data); // Set fetched posts
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        }

        fetchPosts();
    }, []);

    return (
        <div>
            {loading ? ( // Check if still loading
                <p>Loading...</p> // Show loading message
            ) : (
                <ul>
                    {posts.slice(0, 10).map((post, index) => (
                        <li key={index}>{post.Player}</li>
                    ))}
                </ul>
            )}
            <a href="/">home</a>
        </div>
    );
}