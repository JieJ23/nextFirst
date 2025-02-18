export const runtime = "edge"


import DisplayData from "./DisplayData";
import { Footer } from "../footer";
import { Header } from "../header";

export default async function FetchData() {

    const clientId = `t3w0m1q061u3qvb0m4tidq05pxosfp`;
    const accessToken = `wjf8hiqlncou3zvjkeit9vizehbpdu`;

    // const usernames = [`raxxanterax`, `wudijo`, `rob2628`, `rhykker`, `luckyluciano`, `mekuna7`, `ulfhednar`, `macrobioboi`, `aceofspadeshots`, `sanctumd4`, `lurkin17ttv`, `r0xy`, `craftyxii`, `sagittarian_tv`, `scriblet`, `serocifkre`, `lordxsaura`, `aoinomiku`, `j_macc`, `operatorotter`, `northwar`, `mathil1`, `datmodz`, `p4wnyhof`, `siggismallzttv`, `vitablo`, `annacakelive`, `darthmicrotransaction`, `dieoxide`, `dalkora`, `m1py`]

    const usernames = [`haelian`, `himasoraakane`, `lukeholtofficial`, `councilofgeeks`, `elmo3401`, `elkjop_gaming`, `29groove`, `viktorysa`, `lefttofray`, `renaliaomi`, `andrealausell`, `iceeyco`, `registeredfangirl`]

    let userString = ``;

    for (let i = 0; i < usernames.length; i++) {
        if (i > 0) {
            userString += `&login=${usernames[i]}`;
        } else
            userString += `login=${usernames[i]}`
    }

    const res = await fetch(
        `https://api.twitch.tv/helix/users?${userString}`,
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Client-ID': clientId,
            },
            cache: "no-store"
        }
    );

    const data = await res.json();
    const userIds = data.data.map(user => user.id).join('&user_id='); // Prepare the user IDs for the stream check

    const streamRes = await fetch(
        `https://api.twitch.tv/helix/streams?user_id=${userIds}`,
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Client-ID': clientId,
            },
            cache: "no-store"
        }
    );

    const streamData = await streamRes.json();

    const combinedData = data.data.map(user => {
        const streamInfo = streamData.data.find(stream => stream.user_id === user.id);
        return {
            id: user.id,
            login: user.login,
            displayName: user.display_name,
            streamimg: user.profile_image_url,
            streamDes: user.description,
            isLive: !!streamInfo, // true if the user is live, false otherwise
            gameName: streamInfo ? streamInfo.game_name : null,
            streamTime: streamInfo ? streamInfo.started_at : null,
            streamTitle: streamInfo ? streamInfo.title : null, // Get the stream title if live
            viewerCount: streamInfo ? streamInfo.viewer_count : null, // Get viewer count if live
            tags: streamInfo ? streamInfo.tags : null
        };
    })


    const response = await fetch(`http://worldtimeapi.org/api/timezone/America/New_York`, { cache: "no-store" });
    const testingR = await response.json();
    const results = testingR.datetime;


    return (
        <main>
            <Header />
            <DisplayData dataAll={combinedData} getUser={data} getStream={streamData} timenow={results} />
            <Footer />
        </main>
    );
}