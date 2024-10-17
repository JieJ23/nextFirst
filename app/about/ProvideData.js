import ProcessData from "./processDate";

async function fetchData() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbzzlL52v_BgUWkxo_paVwl0HDBDdOgwVZGxiC31Qdpb7q1tXvOZaI8X8PVmbjESj_Xh/exec');
    return res.json();
}

export default async function ProvideData() {
    const data = await fetchData(); // Fetch data on the server
    return (
        <>
            <ProcessData data={data} />      {/* Pass data to the first client component */}
        </>
    );
}

