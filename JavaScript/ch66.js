function countdown(seconds) {
    const timer = setInterval(() => {
        console.log(seconds);
        seconds--;
        if (seconds < 0) clearInterval(timer);
    }, 1000);
}
