
// 
   // document.addEventListener('DOMContentLoaded', () => {
    $(if advert-pending == 'yes') //miroctic if syntax
    var popup = '';

function focusAdvert() {
    if (window.focus) popup.focus();
}

function openAdvert() {
    popup = open('$(link-advert)', 'hotspot_advert', '');
    setTimeout("focusAdvert()", 1000);
}
$(endif) // end of microtic if 

function openLogout() {
    if (window.name != 'hotspot_status') return true;
    open('$(link-logout)', 'hotspot_logout',
        'toolbar=0,location=0,directories=0,status=0,menubars=0,resizable=1,width=280,height=250');
    window.close();
    return false;
}


function readablizeBytes(bytes) {
    var s = ['bytes', 'kb', 'MB', 'GB', 'TB', 'PB'];
    var e = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, Math.floor(e))).toFixed(2) + " " + s[e];
}

function readablizeBytes(bytes) {
    var s = ['&#1576;&#1575;&#1610;&#1578;', '&#1603;&#1610;&#1604;&#1608;&#1576;&#1575;&#1610;&#1578;',
        '&#1605;&#1610;&#1580;&#1575;&#1576;&#1575;&#1610;&#1578;',
        '&#1580;&#1610;&#1580;&#1575;&#1576;&#1575;&#1610;&#1578;',
        '&#1578;&#1610;&#1585;&#1575;&#1576;&#1575;&#1610;&#1578;', 'PB'
    ];
    var e = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, Math.floor(e))).toFixed(2) + " " + s[e];
}

document.getElementById("timeLeft").innerHTML = "$(session-time-left)".replace("w", " ����� , ").replace("d",
    " ��� , ").replace("h", " ���� , ").replace("m", " ����� , ").replace("s", " �����");

    document.getElementById("megaLift").innerHTML =readablizeBytes($(remain - bytes - total));