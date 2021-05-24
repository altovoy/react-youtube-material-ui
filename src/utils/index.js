import axios from 'axios'

const ytDuration2String = (duration) => {
    // Structure: PT3M3S
    let out = duration.replace('PT', '')
    let index = out.indexOf('M')
    const mins = out.slice(0, index != -1 ? index : 0)
    out = out.replace(mins + 'M', '')
    index = out.indexOf('S')
    const segs = out.slice(0, index != -1 ? index : 0).replace('S')
    out = `${norm(mins)}:${norm(segs)}`
    return out

}

const norm = (time) => {
    if (time < 10) {
        time = '0' + time
    }
    return time
}

const timeSince = (date) => {
    let dateAgo = new Date(date);
    var seconds = Math.floor((new Date() - dateAgo) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " años";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " meses";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " días";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " horas";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutos";
    }
    return Math.floor(seconds) + " segundos";
}

const notateNumber = (number) => {
    if (number >= 1000000) {
        return ((number / 1000000).toFixed(1) + 'M de').replace('.', ',')
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

}

const apiResp2CardData = (videoList) => {
    return videoList.items.map((video) => {
        const { snippet, statistics, contentDetails } = video
        const { title, publishedAt, description, thumbnails, channelTitle } = snippet
        const img = thumbnails.medium.url
        const { viewCount } = statistics || { viewCount: '' }
        let { duration } = contentDetails || { duration: 'PT3M3S' }  // Structure: PT3M3S
        duration = ytDuration2String(duration)
        let timeAgo = timeSince(publishedAt)
        let views = notateNumber(viewCount)
        return { img, duration, title, channelTitle, description, timeAgo, views }
    })
}

const YOUTUBE_DATA_API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY
const YOUTUBE_DATA_API_BASE_URL = 'https://youtube.googleapis.com/youtube/v3'
const baseVideoParams = {
    regionCode: 'CO',
    key: YOUTUBE_DATA_API_KEY,
}

const DEFAULT_MAX_RESULTS = 10

const getVideoList = (maxResults) => {
    return axios.get(`${YOUTUBE_DATA_API_BASE_URL}/videos/`, {
        params: {
            ...baseVideoParams,
            part: 'snippet, contentDetails, statistics',
            chart: 'mostPopular',
            maxResults: maxResults || DEFAULT_MAX_RESULTS
        }
    })
}

const searchVideosByKeyword = (keyword, maxResults) => {
    return axios.get(`${YOUTUBE_DATA_API_BASE_URL}/search/`, {
        params: {
            ...baseVideoParams,
            part: 'snippet',
            q: keyword || 'TRL7 AT-Robotica',
            chart: 'mostPopular',
            maxResults: maxResults || DEFAULT_MAX_RESULTS
        }
    })
}

export {
    ytDuration2String,
    timeSince,
    notateNumber,
    getVideoList,
    searchVideosByKeyword,
    apiResp2CardData
}