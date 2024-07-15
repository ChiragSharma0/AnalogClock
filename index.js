setInterval(
    () => {
        d =  new Date();
        htime = d.getHours();
        mtime = d.getMinutes();
        stime = d.getSeconds();
        hRotation = 30*htime + mtime/2;
        mRotation = 6*mtime;
        sRotation =  6*stime;

        hrhand.style.transform = `rotate(${hRotation}deg)`;
        minhand.style.transform = `rotate(${mRotation}deg)`;
        sechand.style.transform = `rotate(${sRotation}deg)`;

    }, 1000);