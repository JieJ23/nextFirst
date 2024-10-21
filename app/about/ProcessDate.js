"use client";
import { Card, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

const TABLE_HEAD = [
    "Rank",
    "Player",
    "Tier",
    "Build",
    "Payment Date",
];


export default function ProcessData({ data }) {

    const topPlayer = data.filter(obj => obj.Tier === 150)
    return (
        <div className="text-white">
            <div className="text-center my-10">
                <Link href="/">
                    <Button>Home</Button>
                </Link>
            </div>
            <div className="px-2 mt-5 mb-16">
                <Card className="h-full w-full max-w-[1400px] mx-auto backdrop-blur-md bg-black/50 border border-white/20 overflow-auto" shadow={false}>
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head, index) => (
                                    <th key={index} className="p-4 pt-10">
                                        <Typography
                                            variant="small"
                                            className="font-bold leading-none text-gray-300"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {topPlayer.slice(0, 5).map((obj, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="white"
                                                className="font-bold"
                                            >
                                                {index + 1}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                className="font-normal text-white"
                                            >
                                                {obj.Player}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                className="font-normal text-white"
                                            >
                                                {obj.Tier}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                className="font-normal text-white"
                                            >
                                                {obj["Build Name"]}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                className="font-normal text-white"
                                            >
                                                {obj["Time Used"]}
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
}