




function calcvolume(){
    // common parameters
    let chamberheight = document.getElementById("chamberheight").value/1000;
    let chamberwidth = document.getElementById("chamberwidth").value/1000;
    let batchwt = document.getElementById("batchwt").value;
    let actclay = document.getElementById("actclay").value/100;
    let loi = document.getElementById("loi").value/100;

    // part specific
    let treewt = document.getElementById("treewt").value;
    let coreswt = document.getElementById("coreswt").value;
    let mouldthickness = document.getElementById("mouldthickness").value/1000;
    let refreshing = document.getElementById("refreshing").value;
    let bentspec = document.getElementById("bentspec").value;
    let coalspec = document.getElementById("coalspec").value;
    
    let volume = chamberheight*chamberwidth*mouldthickness*1500;
    let smratio = 0.21*treewt;

    let actmouldweight = volume-smratio;
    let mouldsperbatch = batchwt/actmouldweight;
    console.log(mouldsperbatch);
    let moulds = document.getElementById("moulds").value;
    let batchesreq = (Number(moulds) + moulds*0.04)/mouldsperbatch;
    let rtnsndcon = batchwt*batchesreq;
    let ironwt  = moulds*treewt;
    let coredil = (coreswt*(Number(moulds) + moulds*0.04))*0.7;
    let newsand = ((refreshing*ironwt)/1000)-coredil;
    let bentonite = ((bentspec*actclay*100)+((newsand+coredil)*actclay)/(ironwt/1000))*(ironwt/1000);
    let coaldust = ((coalspec*loi*100)+((newsand+coredil)*loi)/(ironwt/1000))*(ironwt/1000);
    let calcnewsand = newsand/batchesreq;
    let calcbent = bentonite/batchesreq;
    let calccoal = coaldust/batchesreq;
    console.log(calcnewsand);  
    console.log(calcbent);  
    console.log(calccoal);  

// final result
document.getElementById("calcnewsand").value = calcnewsand.toFixed(0);
document.getElementById("calcbent").value = calcbent.toFixed(0);
document.getElementById("calccoal").value = calccoal.toFixed(0);
}