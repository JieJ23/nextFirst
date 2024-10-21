"use client";
import { Avatar, Button, Card } from "@material-tailwind/react";
import Link from "next/link";
export default function DisplayData({ dataAll, getUser, getStream }) {

    const displayData = dataAll.slice()
    const onlineDisplay = displayData.filter(obj => obj.isLive)

    return (
        <main className="max-w-[1400px] mx-auto">
            <div className="mt-5">
                <Link href="/" className="text-white"><Button>home</Button></Link>
            </div>
            <section className="flex flex-wrap justify-center gap-3">
                {onlineDisplay.map((streamer, index) => (
                    <Card className="group hover:scale-95 ease-in duration-100 hover:shadow-[2px_2px_0_teal]  text-white my-4 bg-black/70 shadow-[2px_2px_0_white] p-2 w-full max-w-[150px] text-center font-serif" key={index}>
                        <div className="text-[12px]">ID: {streamer.id}</div>
                        <div className="text-[16px] my-1">{streamer.displayName}</div>
                        <Link href={`https://www.twitch.tv/${streamer.displayName}`} target="_blank">
                            <Avatar
                                src={streamer.streamimg}
                                alt={`${streamer.displayName}'s Profile`}
                                size="md"
                                draggable={false}
                            />
                        </Link>
                        <div className="flex gap-1 items-center justify-center">{streamer.isLive ?
                            (
                                <>
                                    <div>Live</div>
                                    <div class="relative flex h-2 w-2">
                                        <span class="relative inline-block rounded-full h-2 w-2 bg-red-500"></span>
                                        <span class="animate-ping absolute inline-block h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    </div>
                                </>
                            ) : `Offline`}
                        </div>
                    </Card>
                ))}
            </section>

        </main>

    )
}
