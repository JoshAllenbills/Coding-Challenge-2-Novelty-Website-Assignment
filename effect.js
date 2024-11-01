const urls = ["https://www.espn.com/","https://wheelofnames.com/","https://www.nfl.com/","https://www.nba.com/","https://www.mlb.com/stories/game/745767","https://events.locallive.tv/schools/891","https://www.wikipedia.org/"]
const randomIndex = Math.floor(Math.random() * urls.length);
const randomUrl = urls[randomIndex];
document.querySelector("button").addEventListener("click", function() {
    window.location.href = randomUrl;
});