"use client";
import { Avatar, Card, Chip } from "@material-tailwind/react";
import Link from "next/link";
import Timer from "./Timer";


export default function DisplayData({ dataAll, getUser, getStream }) {

    const displayData = dataAll.slice()
    const onlineDisplay = displayData.filter(obj => obj.isLive)

    const sorcerer = [`mekuna7`, `lurkin17ttv`, `r0xy`]
    const necromancer = [`macrobioboi`, `scriblet`, `serocifkre`, `lordxsaura`]
    const rogue = [`craftyxii`, `sanctumd4`, `aceofspadeshots`, `sagittarian_tv`, `m1py`]
    const barbarian = [`ulfhednar`, `aoinomiku`, `dalkora`]
    const druid = [`j_macc`]

    const classSpecialist = [...sorcerer, ...necromancer, ...rogue, ...barbarian, ...druid]

    return (
        <main className="mx-auto my-5">
            <section className="text-white text-[18px] font-serif text-center mt-10">Online {onlineDisplay.length} / {displayData.length}</section>

            <section className="flex flex-wrap justify-center gap-2">
                {onlineDisplay.map((streamer, index) => (
                    <Link href={`https://www.twitch.tv/${streamer.displayName}`} target="_blank" key={index}>
                        <Card className="text-white my-4 p-3 text-center font-serif w-full max-w-[300px] h-full flex-col justify-between gap-1 bg-center bg-[#05041a] bg-cover bg-no-repeat group shadow-[inset_0_0_20px_black] relative"
                            style={{ backgroundImage: "url('/layoutBG.png')" }}
                            shadow={false}>
                            {/* <div className="text-[12px]">ID: {streamer.id}</div> */}
                            <div className="absolute top-2 left-2">
                                {classSpecialist.includes(streamer.login) ?
                                    <Chip key={index} value={`Specialist`} size="sm" className="rounded-lg text-[9px] font-sans text-[#d518f2] bg-[transparent]" /> :
                                    <Chip key={index} value={`Streamer`} size="sm" className="rounded-lg text-[9px] font-sans text-[#f38f8f] bg-transparent" />
                                }
                            </div>
                            <div className="absolute top-2 right-2">
                                {classSpecialist.includes(streamer.login) ?
                                    <div className="flex justify-between">
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
                                        {barbarian.includes(streamer.login) && (
                                            <Avatar
                                                src={`/Classes/Barbarian.png`}
                                                alt={`${streamer.login}'s Class`}
                                                size="sm"
                                                draggable={false}
                                            />
                                        )}
                                        {druid.includes(streamer.login) && (
                                            <Avatar
                                                src={`/Classes/Druid.png`}
                                                alt={`${streamer.login}'s Class`}
                                                size="sm"
                                                draggable={false}
                                            />
                                        )}
                                    </div>
                                    :
                                    <div className="flex justify-between">
                                        <Avatar
                                            src={`/Classes/ContentCreator.png`}
                                            alt={`${streamer.login}'s Content Creator`}
                                            size="sm"
                                            draggable={false}
                                        />
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col justify-center items-center gap-1">
                                <Avatar
                                    src={streamer.streamimg}
                                    alt={`${streamer.displayName}'s Profile`}
                                    size="sm"
                                    draggable={false}
                                    className="group-hover:scale-110 duration-100 ease-in transition"
                                />
                                <div className="text-[16px] group-hover:scale-95 group-hover:text-[#47f0af] duration-100 ease-in transition">{streamer.displayName}</div>
                            </div>
                            <div className="text-[12px] text-gray-300 text-start">{streamer.streamTitle ? `${streamer.streamTitle.slice(0, 100)}...` : streamer.streamTitle}</div>
                            <div className="text-[12px] text-start">{streamer.streamDes}</div>
                            {streamer.isLive && <div className="flex flex-wrap gap-1">
                                {streamer.tags.slice(0, 6).map((item, index) => (
                                    <Chip color="indigo" key={index} value={item} size="sm" className="text-[9px] font-sans" />
                                ))}
                            </div>}
                            <div className="flex gap-1 items-center justify-between">
                                <div className="text-white text-[12px]">{streamer.gameName}</div>
                                <Timer data={streamer.streamTime} />
                                <div className="flex items-center gap-1">
                                    {streamer.isLive ?
                                        (
                                            <>
                                                <div className="text-[12px]">Streaming</div>
                                                <div className="relative flex h-2 w-2">
                                                    <span className="relative inline-block rounded-full h-2 w-2 bg-red-500" />
                                                    <span className="animate-ping absolute inline-block h-full w-full rounded-full bg-red-400 opacity-75" />
                                                </div>
                                            </>
                                        ) : <div className="text-[14px]">Offline</div>}
                                </div>
                            </div>

                        </Card>
                    </Link>
                ))}
            </section>
        </main>

    )
}
