const startDay = new Date('2022-07-29T00:00:00')

setInterval(function clock(){
    var today = new Date()
    var Hours = today.getHours();
    var Minutes = today.getMinutes();
    var Seconds = today.getSeconds();
    (Hours<10)?(Hours="0"+Hours):(Hours);
    (Minutes<10)?(Minutes="0"+Minutes):(Minutes);
    (Seconds<10)?(Seconds="0"+Seconds):(Seconds);
    console.log(today)
    document.querySelector('date').textContent = (Math.floor((today - startDay) / (1000 * 24 * 60 * 60))) 
    document.querySelector('.time').textContent = (Hours + ':' + Minutes + ':' + Seconds )

}, 1000)
