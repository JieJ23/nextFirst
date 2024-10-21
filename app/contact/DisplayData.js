"use client";
import { Avatar } from "@material-tailwind/react";
export default function DisplayData({ data }) {

    const streamerData = data.data;
    console.log(data)

    return (
        <main>
            {streamerData.map((streamer, index) => (
                <div className="text-white" key={index}>
                    <h1>Streamer Info</h1>
                    <p>ID: {streamer.id}</p>
                    <p>Username: {streamer.login}</p>
                    <p>Display Name: {streamer.display_name}</p>
                    <p>Description: {streamer.description}</p>
                    <Avatar
                        src={streamer.profile_image_url}
                        alt={`${streamer.display_name}'s Profile`}
                    />
                </div>
            ))}
        </main>

    )
}
