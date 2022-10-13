let isim = prompt('İsminizi giriniz');

document.querySelector('#myName').innerHTML = isim;

function showTime() {
    let rtClock = new Date();
    let hours = rtClock.getHours();
    let minutes = rtClock.getMinutes();
    let seconds = rtClock.getSeconds();
    let days = rtClock.getDay();
    let gun = "Pazartesi";
    switch (days) {
        case 1:
            gun = "Pazartesi";
            break;
        case 2:
            gun = "Salı";
            break;
        case 3:
            gun = "Çarşamba";
            break;
        case 4:
            gun = "Perşembe";
            break;
        case 5:
            gun = "Cuma";
            break;
        case 6:
            gun = "Cumartesi";
            break;
        case 7:
            gun = "Pazar";
            break;

        default: "Gün Bilgisi"
            break;
    }

    document.querySelector('#myClock').innerHTML = hours + ":" + minutes + ":" + seconds + " " + gun;
    let t = setTimeout(showTime, 500);
}