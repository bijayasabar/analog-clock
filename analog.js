setInterval(() => {
    d= new Date();
    hTime=d.getHours()
    mTime=d.getMinutes()
    sTime=d.getSeconds()
    // console.log(d);
    // console.log(sTime);
    // console.log(mTime);
    // console.log(hTime);
    hDegRotation=30*hTime+mTime/2;
    mDegRotation=6*mTime;
    sDegRotation=6*sTime;


    hour.style.transform=`rotate(${hDegRotation}deg)`
    minute.style.transform=`rotate(${mDegRotation}deg)`
    second.style.transform=`rotate(${sDegRotation}deg)`
}, 1000);