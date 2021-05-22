
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
    if(number >= 1000000){
        return ((number/1000000).toFixed(1)+ 'M de').replace('.', ',')
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
}

export { ytDuration2String, timeSince, notateNumber }