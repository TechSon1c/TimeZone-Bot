const apiUrlEast = 'http://worldtimeapi.org/api/timezone/America/New_York';
const apiUrlCentral = 'http://worldtimeapi.org/api/timezone/America/Chicago';
const apiUrlMountain = 'http://worldtimeapi.org/api/timezone/America/Denver';
const apiUrlPacific = 'http://worldtimeapi.org/api/timezone/America/Los_Angeles';


async function getCurrentTimeForTimeZone(apiUrl, location) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const timeString = data.datetime;
    const timePart = timeString.split('T')[1]; 
    const time = timePart.split('.')[0]; 
    return time;
}

module.exports = {
    getCurrentTimeForTimeZone,
    apiUrlEast,
    apiUrlCentral,
    apiUrlMountain,
    apiUrlPacific
};
