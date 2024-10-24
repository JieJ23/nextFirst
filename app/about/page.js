export const runtime = "edge"

import ProvideData from "./ProvideData";

export default async function About() {
    return (
        <main>
            <ProvideData />
        </main>
    )
}
