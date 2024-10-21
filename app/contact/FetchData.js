import DisplayData from "./DisplayData";

export default async function FetchData() {

    const clientId = `t3w0m1q061u3qvb0m4tidq05pxosfp`;
    const accessToken = `wjf8hiqlncou3zvjkeit9vizehbpdu`;

    const res = await fetch(
        'https://api.twitch.tv/helix/users?login=piratesoftware&login=wudijo',
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Client-ID': clientId,
            },
        }, { next: { revalidate: 300 } }
    );

    const data = await res.json();
    if (!data.data || data.data.length === 0) {
        return <div>Streamer not found.</div>;
    }

    console.log(data)
    return (
        <main>
            <DisplayData data={data} />
        </main>
    );
}


