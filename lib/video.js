import videoData from '../data/videos.json'

export const getVideos = async (searchQuery) => {
    try {
        const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`);
        const data = await response.json();

        return data.items.map(item => {
            const id = item?.id?.videoId || id;
            return {
                title: item.snippet.title,
                imgUrl: item.snippet.thumbnails.high.url,
                id: id
            }
        });
    } catch (err) {
        console.log("Something went wrong with video API", error);
        return [];
    }

}