function fillBar(seconds) {
    console.log("Download button clicked");
    const bar = document.querySelector('.bar');
    let percent = 0;
    const interval = setInterval(() => {
        bar.style.width = percent +'%';
        percent++;
        if(percent > 100) {
            clearInterval(interval);
        }
    }, (seconds * 1000) / 100);
}

function resetBar() {
    const bar = document.querySelector('.bar');
    console.log(bar.style.width);
    if(bar.style.width === '100%') {
        bar.style.width = '0%';
    } else {
        confirm('Bar is not 100% yet');
    }
}