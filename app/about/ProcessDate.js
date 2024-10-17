"use client";

export default function ProcessData({ data }) {

    const topPlayer = data.slice(0, 10)

    return (
        <div>
            <a href="/">Home</a>
            <h2>Player Data</h2>
            <ul>
                {topPlayer.map((post, index) => (
                    <li key={index}>{post.Player}</li>
                ))}
            </ul>
        </div>
    );
}