"use client";
import { Avatar } from "@material-tailwind/react";
import Link from "next/link";
export default function DisplayData({ dataAll, getUser, getStream }) {

    const displayData = dataAll.slice()
    const onlineDisplay = displayData.filter(obj => obj.isLive)

    return (
        <main className="max-w-[1000px] mx-auto">
            {onlineDisplay.map((streamer, index) => (
                <div className="text-white my-4" key={index}>
                    <h1>Streamer Info</h1>
                    <p>ID: {streamer.id}</p>
                    <p>Username: {streamer.login}</p>
                    <p>Display Name: {streamer.displayName}</p>
                    <p className="flex gap-1 items-center">Description: {streamer.isLive ?
                        (
                            <>
                                <div>Live</div>
                                <div class="relative flex h-2 w-2">
                                    <span class="relative inline-block rounded-full h-2 w-2 bg-red-500"></span>
                                    <span class="animate-ping absolute inline-block h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                </div>
                            </>
                        ) : `Offline`}
                    </p>
                    <div>
                        <Link href={`https://www.twitch.tv/${streamer.displayName}`} target="_blank">
                            <Avatar
                                src={streamer.streamimg}
                                alt={`${streamer.displayName}'s Profile`}
                            />
                        </Link>
                    </div>
                </div>
            ))}
        </main>

    )
}
