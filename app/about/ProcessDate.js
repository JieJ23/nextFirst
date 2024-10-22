"use client";
import Link from "next/link";
import { Card, Avatar } from "@material-tailwind/react";
export default function ProcessData({ data }) {

    const sortByData = data.sort((a, b) => (new Date(b.uploadDate)) - (new Date(a.uploadDate)))

    return (
        <section className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-[1400px] justify-center mt-10 px-2 mx-auto">
            {sortByData.map((obj, index) => (
                <Link href={`https://www.youtube.com/watch?v=${obj.url}`} target="_blank" key={index}>
                    <Card className="flex flex-col bg-black h-full text-white shadow-[inset_0_0_5px_gray]" shadow={false}>
                        <section className="p-1">
                            <img src={obj.thumbnail} className="rounded-lg" />
                        </section>
                        <section className="flex flex-col h-full justify-between items-center text-center p-3 gap-2">
                            <div className="text-[12px] sm:text-[13px] text-center w-full text-gray-200 font-[Roberto]">{obj.title}</div>
                            <div className="flex justify-start w-full gap-2">
                                <Avatar src={obj.profileImg} size="xs" variant="rounded" />
                                <div className="text-[12px] text-[#fff]">{obj.publisher}</div>
                                <div className="text-[12px] text-gray-400">{obj.uploadDate.slice(0, 10)}</div>
                            </div>
                        </section>
                    </Card>
                </Link>
            ))}
        </section>
    );
}