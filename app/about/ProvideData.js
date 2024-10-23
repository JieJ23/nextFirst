import ProcessData from "./ProcessDate";
import { Header } from "../header";
import { Footer } from "../footer";

const YOUR_API_KEY = process.env.YT_KEY;

export default async function ProvideData() {
    const creatorObject = [];
    const channelString = [`UCSnGGntxMnAM6oDHML2qzaw`, `UCv-N1CZR3EaJdRS2rGCiYjQ`, `UCeIfiz4VGkf8xTBAeH0xcFw`, `UC0J_47RRQSxgyALsli8USNA`, `UCPDaMS5mMCJXfKmvo4r68oA`, `UC7NS_0nSUO9c9bp9XLnq57w`, `UC7XvfoN5vtY5pRWltFU69fA`, `UCBh7i2-7P2oInbVLOV5q_bQ`, `UCBq8CLRcJN8rgqHOkyL1ozg`]

    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelString.join(",")}&key=${YOUR_API_KEY}`, { next: { revalidate: 120 } });

    const fetchData = await res.json();

    const uploadsPlaylistIdArray = []

    for (let i = 0; i < channelString.length; i++) {
        const string = fetchData.items[i].contentDetails.relatedPlaylists.uploads;
        uploadsPlaylistIdArray.push(string)
    }

    const resProfile = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelString.join(",")}&key=${YOUR_API_KEY}`, { next: { revalidate: 300 } })
    const proinfo = await resProfile.json();
    // const image = proinfo.items[0].snippet.thumbnails.default.url

    const profileImageMap = {};
    proinfo.items.forEach(channel => {
        profileImageMap[channel.id] = channel.snippet.thumbnails.default.url;
    });

    async function getVidData(id) {
        const videosRes = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=${id}&key=${YOUR_API_KEY}`, { next: { revalidate: 300 } });
        const videosData = await videosRes.json();
        console.log(videosData)
        for (let i = 0; i < videosData.items.length; i++) {
            const video = videosData.items[i].snippet;
            const channelId = videosData.items[i].snippet.channelId; // Get the channelId of the video
            // Create an object for each video
            console.log(video)
            const videoObject = {
                videoId: video.resourceId.videoId, // video ID
                title: video.title,                  // video title
                uploadDate: video.publishedAt,      // upload date
                thumbnail: video.thumbnails.high.url, // thumbnail URL
                publisher: video.channelTitle,       // publisher/channel title
                profileImg: profileImageMap[channelId] // Get corresponding profile image using channelId
            };

            // Push the video object into the creatorObject array
            creatorObject.push(videoObject);
        }
    }

    await Promise.all(uploadsPlaylistIdArray.map(id => getVidData(id)));
    return (
        <>
            <Header />
            <ProcessData data={creatorObject} />      {/* Pass data to the first client component */}
            <Footer />
        </>
    );
}

