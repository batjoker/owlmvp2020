var autoTouch = setInterval(function(){
    vote();
    },100);// interval set
autoTouch;

function vote(){
    let t = "8e75ec523c1ca90747436eafb8decd7e";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    //console.log(generate(t));
    let url = "https://play-api.omnigonprosuite.com/api/v1/poll/vote";
    let params = {"challenge":null,"response":"","uid":"11005776","itemIds":["****"],"st":generate(t)};
	//itemIds can be found from website
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onload = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
        console.log(xhr.responseText);
        } else {
        console.error(xhr.statusText);
        }
    }
    };
    xhr.onerror = function (e) {
    console.error(xhr.statusText);
    };
    xhr.send(JSON.stringify(params));
}

function encode(e) {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let t = (characters,
    "")
        , a = 0;
    do {
        let o = e.charCodeAt(a++)
            , r = e.charCodeAt(a++)
            , i = e.charCodeAt(a++);
        o = o ? o : 0,
        r = r ? r : 0,
        i = i ? i : 0;
        let l = o >> 2 & 63
            , s = (3 & o) << 4 | r >> 4 & 15
            , d = (15 & r) << 2 | i >> 6 & 3
            , c = 63 & i;
        r ? i || (c = 64) : d = c = 64,
        t += characters.charAt(l) + characters.charAt(s) + characters.charAt(d) + characters.charAt(c)
    } while (a < e.length);return t
}

function generate(t){
    let i = t
        , l = "https://mvpvote.omnigonprosuite.com"
        , s = String(parseInt(1e10 * Math.random())) + String(parseInt(1e10 * Math.random()) + String(parseInt(1e9 * Math.random())))
        , d = "tid=" + s + "&pd=" + l + "&fp=" + i + "&sip=" + ""
        , c = ((new Date % 9e6).toString(36),
    Math.floor((10 * Math.random()).toString()[0] / 2))
        , u = Math.floor((10 * Math.random()).toString()[0] / 2)
        , f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        , g = Math.random().toString(36).slice(-5);
    return g = g.slice(0, c) + f[2 * c] + g.slice(c + 1, g.length),
    g = g.slice(0, u) + f[2 * u] + g.slice(u + 1, g.length),
    (g + encode(d))
}