"use client";
import Link from "next/link";
import { Card, Avatar, Chip } from "@material-tailwind/react";
export default function ProcessData({ data }) {

    const sortByData = data.sort((a, b) => (new Date(b.uploadDate)) - (new Date(a.uploadDate)))
    const hadesContent = sortByData.filter(obj => obj.title.toLowerCase().includes(`hades`))

    const allCreator = [...new Set(data.map(obj => obj.publisher))].sort()

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Formats as 'YYYY-MM-DD'

    return (
        <>
            <section className="flex justify-center flex-wrap mt-10 max-w-[1200px] mx-auto gap-1">
                {allCreator.map((obj, index) => (
                    <Chip variant="gradient" value={`#${obj}`} key={index} color="teal" className="font-sans lowercase text-black" />
                ))}
            </section>
            <section className="text-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5 max-w-[1400px] justify-center mt-5 px-2 mx-auto">
                {hadesContent.map((obj, index) => (
                    <Link href={`https://www.youtube.com/watch?v=${obj.videoId}`} target="_blank" key={index}>
                        <Card className="flex flex-col bg-black h-full text-white shadow-[inset_0_0_5px_gray]" shadow={false}>
                            <section className="p-1 w-full">
                                <img src={obj.thumbnail} className="rounded-lg" />
                            </section>
                            <section className="flex flex-col h-full justify-between items-center text-center p-3 pt-0 gap-1">
                                <div className="flex justify-between items-center w-full gap-1">
                                    <Avatar src={obj.profileImg} size="sm" variant="rounded" />
                                    <div className="text-[12px] lg:text-[13px] text-start w-full text-gray-200 font-serif mb-1">{`${obj.title}`}</div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="text-[11px] text-[#fff] w-full text-start">{obj.publisher}</div>
                                    <div className={`text-[11px] text-gray-400 text-end w-full font-serif ${obj.uploadDate.slice(0, 10) === formattedDate && `text-orange-400 animate-bounce font-[monospace]`} `}>{obj.uploadDate.slice(0, 10) === formattedDate ? `NEW` : obj.uploadDate.slice(0, 10)}</div>
                                </div>
                            </section>
                        </Card>
                    </Link>
                ))}
            </section>

        </>
    );
}