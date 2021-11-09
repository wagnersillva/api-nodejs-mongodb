const getDate = (format) => {
    const __date = new Date();
    const month_values = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const YYYY = __date.getFullYear()
    const MM = __date.getMonth() < 10 ? `0${__date.getMonth()}` : __date.getMonth();
    const DD = __date.getDay()  < 10 ? `0${__date.getDay()}` : __date.getDay();
    const month = month_values[__date.getMonth()]
    const hh = __date.getHours() < 10 ? `0${__date.getHours()}` : __date.getHours();
    const mm = __date.getMinutes() < 10 ? `0${__date.getMinutes()}` : __date.getMinutes();
    const ss = __date.getSeconds() < 10 ? `0${__date.getSeconds()}` : __date.getSeconds();

    if(!format) {format = 'default';}

    switch (format) {
        case "YYYY/MM/DD":
            return `${YYYY}/${MM}/${DD}`
            break;
        case "YYYY-MM-DD":
            return `${YYYY}-${MM}-${DD}`
            break;
        case "YYYY-MM-DD hh:mm:ss":
            return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`
            break;
        case "YYYY/MM/DD hh:mm:ss":
            return `${YYYY}/${MM}/${DD} ${hh}:${mm}:${ss}`
            break;
        case "hh:mm:ss":
            return `${hh}:${mm}:${ss}`
            break;
        case "hh:mm":
            return `${hh}:${mm}`
            break;
        case "default":
            return `${month} ${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`
            break;
        default:
            return `Format invalid`
            break;
    }

}

module.exports = getDate;