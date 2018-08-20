// this code is for fetching the code from the system
var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();
var seconds = d.getSeconds();

 var msg = document.getElementById("message");
if (hour < 12) {
    msg.innerHTML="good morning";
} 
else if (hour < 15) {
    msg.innerHTML="good Afternoon";
}
else if (hour < 19) {
    msg.innerHTML="good Evening";
}
else {
    msg.innerHTML="good night";
}

// onload this function is called to display the temperature n weather image
function weather() {

    var xhttp = new XMLHttpRequest();
    var res;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(this.responseText);
            console.log(res);
            var day = res.query.results.channel.item.forecast[0].day;

            switch (day) {

                case "Mon": document.getElementById("day").innerHTML = "MONDAY";
                    document.getElementById("day1").innerHTML = "TUESDAY";
                    document.getElementById("day2").innerHTML = "WEDNESDAY";
                    document.getElementById("day3").innerHTML="THURSDAY";
                    document.getElementById("day4").innerHTML = "FRIDAY";
                    document.getElementById("day5").innerHTML = "SATURDAY";
                    document.getElementById("day6").innerHTML = "FRIDAY";
                    break;

                case "Tue": document.getElementById("day").innerHTML = "TUESDAY";
                    document.getElementById("day1").innerHTML = "WEDNESDAY";
                    document.getElementById("day2").innerHTML = "THURSDAY";
                    document.getElementById("day3").innerHTML = "FRIDAY";
                    document.getElementById("day4").innerHTML = "SATURDAY";
                    document.getElementById("day5").innerHTML = "FRIDAY";
                    document.getElementById("day6").innerHTML = "MONDAY";
                    break;

                case "Wed": document.getElementById("day5").innerHTML = "MONDAY";
                    document.getElementById("day6").innerHTML = "TUESDAY";
                    document.getElementById("day").innerHTML = "WEDNESDAY";
                    document.getElementById("day1").innerHTML = "THURSDAY";
                    document.getElementById("day2").innerHTML = "FRIDAY";
                    document.getElementById("day3").innerHTML = "SATURDAY";
                    document.getElementById("day4").innerHTML = "FRIDAY";
                    break;

                case "Thu": document.getElementById("day4").innerHTML = "MONDAY";
                    document.getElementById("day5").innerHTML = "TUESDAY";
                    document.getElementById("day6").innerHTML = "WEDNESDAY";
                    document.getElementById("day").innerHTML = "THURSDAY";
                    document.getElementById("day1").innerHTML = "FRIDAY";
                    document.getElementById("day2").innerHTML = "SATURDAY";
                    document.getElementById("day3").innerHTML = "FRIDAY";
                    break;

                case "Fri": 
                    document.getElementById("day3").innerHTML = "MONDAY";
                    document.getElementById("day4").innerHTML = "TUESDAY";
                    document.getElementById("day5").innerHTML = "WEDNESDAY";
                    document.getElementById("day6").innerHTML = "THURSDAY";
                    document.getElementById("day").innerHTML = "FRIDAY";
                    document.getElementById("day1").innerHTML = "SATURDAY";
                    document.getElementById("day2").innerHTML = "FRIDAY";
                    break;

                case "Sat": document.getElementById("day2").innerHTML = "MONDAY";
                    document.getElementById("day3").innerHTML = "TUESDAY";
                    document.getElementById("day4").innerHTML = "WEDNESDAY";
                    document.getElementById("day5").innerHTML = "THURSDAY";
                    document.getElementById("day6").innerHTML = "FRIDAY";
                    document.getElementById("day").innerHTML = "SATURDAY";
                    document.getElementById("day1").innerHTML = "FRIDAY";
                    break;

                case "Sun": document.getElementById("day1").innerHTML = "MONDAY";
                    document.getElementById("day2").innerHTML = "TUESDAY";
                    document.getElementById("day3").innerHTML = "WEDNESDAY";
                    document.getElementById("day4").innerHTML = "THRUSDAY";
                    document.getElementById("day5").innerHTML = "FRIDAY";
                    document.getElementById("day6").innerHTML = "SATURDAY";
                    document.getElementById("day").innerHTML = "FRIDAY";
                    break;

            }

            document.getElementById("higher").innerHTML = (((res.query.results.channel.item.forecast[0].high) - 32) / 1.8).toFixed(0)+'&deg';
            document.getElementById("lower").innerHTML = (((res.query.results.channel.item.forecast[0].low) - 32) / 1.8).toFixed(0)+'&deg';

            document.getElementById("higher1").innerHTML = (((res.query.results.channel.item.forecast[1].high) - 32) / 1.8).toFixed(0) + '&deg';
            document.getElementById("lower1").innerHTML = (((res.query.results.channel.item.forecast[1].low) - 32) / 1.8).toFixed(0) + '&deg';

            document.getElementById("higher2").innerHTML = (((res.query.results.channel.item.forecast[2].high) - 32) / 1.8).toFixed(0) + '&deg';
            document.getElementById("lower2").innerHTML = (((res.query.results.channel.item.forecast[2].low) - 32) / 1.8).toFixed(0) + '&deg';

            document.getElementById("higher3").innerHTML = (((res.query.results.channel.item.forecast[3].high) - 32) / 1.8).toFixed(0) + '&deg';
            document.getElementById("lower3").innerHTML = (((res.query.results.channel.item.forecast[3].low) - 32) / 1.8).toFixed(0) + '&deg';

            document.getElementById("higher4").innerHTML = (((res.query.results.channel.item.forecast[4].high) - 32) / 1.8).toFixed(0) + '&deg';
            document.getElementById("lower4").innerHTML = (((res.query.results.channel.item.forecast[4].low) - 32) / 1.8).toFixed(0) + '&deg';

            document.getElementById("higher5").innerHTML = (((res.query.results.channel.item.forecast[5].high) - 32) / 1.8).toFixed(0) + '&deg';
            document.getElementById("lower5").innerHTML = (((res.query.results.channel.item.forecast[5].low) - 32) / 1.8).toFixed(0) + '&deg';

            document.getElementById("higher6").innerHTML = (((res.query.results.channel.item.forecast[6].high) - 32) / 1.8).toFixed(0) + '&deg';
            document.getElementById("lower6").innerHTML = (((res.query.results.channel.item.forecast[6].low) - 32) / 1.8).toFixed(0) + '&deg';

            var img1 = document.getElementById("image1");
            var img2 = document.getElementById("image2");
            var img3 = document.getElementById("image3");
            var img4 = document.getElementById("image4");
            var img5 = document.getElementById("image5");
            var img6 = document.getElementById("image6");
            var img7 = document.getElementById("image7");

            var img11 = res.query.results.channel.item.forecast[0].text;
            var img22 = res.query.results.channel.item.forecast[1].text;
            var img33 = res.query.results.channel.item.forecast[2].text;
            var img44 = res.query.results.channel.item.forecast[3].text;
            var img55 = res.query.results.channel.item.forecast[4].text;
            var img66 = res.query.results.channel.item.forecast[5].text;
            var img77 = res.query.results.channel.item.forecast[6].text;

            var arr = [img1, img2, img3, img4, img5, img6, img7];

            var arr1 = [img11, img22, img33, img44, img55, img66, img77];
             
            // this is used for displaying images based on text

            for (let a = 0; a < arr1.length; a++) {
                switch (arr1[a]) {
                    case "Cloudy": arr[a].classList.add("image4");
                        break;
                    case "Mostly Cloudy": arr[a].classList.add("image2");
                        break;
                    case "Sunny" || "Mostly Sunny": arr[a].classList.add("image1");
                        break;
                    case "Partly Cloudy": arr[a].classList.add("image5");
                        break;
                    case "Mostly Sunny": arr[a].classList.add("image2");
                        break;
                    case "Scattered Thunderstorms": arr[a].classList.add("image11");
                        break;
                    case "Breezy": arr[a].classList.add("image7");
                        break;
                    case "Thunderstorms": arr[a].classList.add("image2");
                        break;

                }
            }
        }
    };
    // selecting the location
    var loca;
    loca = document.getElementById("location-select").value;

    xhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + loca + "%2C%20in%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", true);
    xhttp.send();
}