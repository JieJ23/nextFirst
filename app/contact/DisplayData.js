"use client";
import { Avatar, Button, Card, Chip } from "@material-tailwind/react";
import Link from "next/link";


export default function DisplayData({ dataAll, getUser, getStream }) {

    const displayData = dataAll.slice()
    const onlineDisplay = displayData.filter(obj => obj.isLive)

    const classSpecialist = [`mekuna7`, `macrobioboi`, `craftyxii`, `sanctumd4`, `aceofspadeshots`, `r0xy`]

    const sorcerer = [`mekuna7`, `lurkin17ttv`, `r0xy`]
    const necromancer = [`macrobioboi`]
    const rogue = [`craftyxii`, `sanctumd4`, `aceofspadeshots`]

    return (
        <main className="mx-auto">
            <div className="flex justify-center mt-5">
                <Link href="/" className="text-white"><Button color="indigo" variant="gradient">home</Button></Link>
            </div>
            <section className="flex flex-wrap justify-center gap-2 mb-10">
                {displayData.map((streamer, index) => (
                    <Link href={`https://www.twitch.tv/${streamer.displayName}`} target="_blank" key={index}>
                        <Card className="text-white my-4 p-3 text-center font-serif max-w-[300px] min-w-[300px] h-full flex-col justify-evenly gap-1 bg-center bg-[#05041a] bg-cover bg-no-repeat group shadow-[inset_0_0_20px_black]"
                            style={{ backgroundImage: "url('/layoutBG.png')" }}
                            shadow={false}>
                            {/* <div className="text-[12px]">ID: {streamer.id}</div> */}
                            <div className="text-[16px] group-hover:scale-95 group-hover:text-[#47f0af] duration-100 ease-in transition">{streamer.displayName}</div>
                            <div>

                                <Avatar
                                    src={streamer.streamimg}
                                    alt={`${streamer.displayName}'s Profile`}
                                    size="md"
                                    draggable={false}
                                    className="group-hover:scale-110 duration-100 ease-in transition"
                                />
                            </div>
                            <div className="flex gap-1 items-center justify-center">{streamer.isLive ?
                                (
                                    <>
                                        <div className="text-[12px]">Live</div>
                                        <div className="relative flex h-2 w-2">
                                            <span className="relative inline-block rounded-full h-2 w-2 bg-red-500" />
                                            <span className="animate-ping absolute inline-block h-full w-full rounded-full bg-red-400 opacity-75" />
                                        </div>
                                    </>
                                ) : <div className="text-[14px]">Offline</div>}
                            </div>
                            <div className="text-[12px] text-gray-300">{streamer.streamTitle}</div>
                            <div className="text-[12px] text-start">{streamer.streamDes}</div>
                            {streamer.isLive && <div className="flex flex-wrap gap-1">
                                {streamer.tags.slice(0, 6).map((item, index) => (
                                    <Chip color="indigo" key={index} value={item} className="text-[10px] font-sans" />
                                ))}
                            </div>}
                            {classSpecialist.includes(streamer.login) ?
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <Chip key={index} value={`Class Specialist`} className="text-[10px] font-sans bg-[#0fefb3] text-black" />
                                    </div>
                                    {sorcerer.includes(streamer.login) && (
                                        <Avatar
                                            src={`/Classes/Sorcerer.png`}
                                            alt={`${streamer.login}'s Class`}
                                            size="sm"
                                            draggable={false}
                                        />
                                    )}
                                    {necromancer.includes(streamer.login) && (
                                        <Avatar
                                            src={`/Classes/Necromancer.png`}
                                            alt={`${streamer.login}'s Class`}
                                            size="sm"
                                            draggable={false}
                                        />
                                    )}
                                    {rogue.includes(streamer.login) && (
                                        <Avatar
                                            src={`/Classes/Rogue.png`}
                                            alt={`${streamer.login}'s Class`}
                                            size="sm"
                                            draggable={false}
                                        />
                                    )}
                                </div>

                                :
                                <div className="flex justify-between">

                                    <div className="flex">
                                        <Chip key={index} value={`Content Streamer`} className="text-[10px] font-sans bg-[#d89845] text-black" />
                                    </div>
                                    <Avatar
                                        src={`/Classes/ContentCreator.png`}
                                        alt={`${streamer.login}'s Content Creator`}
                                        size="sm"
                                        draggable={false}
                                    />
                                </div>
                            }
                        </Card>
                    </Link>

                ))}
            </section>

        </main>

    )
}
