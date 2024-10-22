"use client"
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Avatar
} from "@material-tailwind/react";

import Link from "next/link";

export default function Cards() {
    return (
        <main className="flex flex-col lg:flex-row gap-4">
            <Link href="/about" className="inline-block group">
                <Card className="mt-6 w-96 bg-gradient-to-tl to-[#ea8e6a] from-[#eac407]">
                    <CardBody>
                        <Avatar src="/youtube.png" variant="rounded" />
                        <Typography variant="h5" color="blue-gray" className="my-2">
                            YouTube Data API v3
                        </Typography>
                        <Typography className="my-2 font-sans font-normal text-black">
                            Keep track of the latest pre-selected Diablo 4 videos, ensuring you stay updated on newly released content from chosen creators or players.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button size="sm" variant="text" className="flex items-center gap-2 bg-black text-white group-hover:scale-95">
                            YouTube Video
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </CardFooter>
                </Card>
            </Link>
            <Link href="/contact" className="inline-block group">
                <Card className="mt-6 w-96 bg-gradient-to-tr to-[#6b43c0] from-[#2c2c60]">
                    <CardBody>
                        <Avatar src="/twitch.png" variant="rounded" />
                        <Typography variant="h5" color="blue-gray" className="my-2 text-white">
                            Twitch API
                        </Typography>
                        <Typography className="my-2 font-sans font-normal text-gray-300">
                            Watch and stay updated on pre-selected Diablo 4 live streams, closely following specific players or content creators as they broadcast their gameplay in real-time.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button size="sm" variant="text" className="flex items-center gap-2 text-white bg-black group-hover:scale-95">
                            Twitch Live
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </CardFooter>
                </Card>
            </Link>
        </main>
    );
}