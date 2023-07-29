function limitedTimeOfferBanner(offerDuration){
    const expirationDate= new Date().getTime() + offerDuration;

    const banner= document.createElement('div');
    banner.style.display='flex';
    banner.style.background='linear-gradient(90deg,#fb0,#f80)';
    banner.style.margin= '10px';
    banner.style.position='fixed';
    banner.style.top=0;
    banner.style.left=0;
    banner.style.padding= '0px 20px 0px 0px'
    banner.style.width='100%';
    banner.style.justifyContent='space-between';
    banner.style.alignItems='center';

    
    const image= document.createElement('img');

    const flex1=document.createElement('div');
    flex1.style.display='flex';
    flex1.style.alignItems='center';

    const flex2=document.createElement('div');
    const flex3=document.createElement('div');



    image.src= "https://www.exam-labs.com/static/img/clock_desktop.png";
    image.style.width= '50px';
    image.style.position='relative';
    image.style.right='10px';

    document.body.appendChild(banner);

    flex1.appendChild(image);
    banner.appendChild(flex1);
    banner.appendChild(flex2);
    banner.appendChild(flex3);


    flex1.innerHTML+= "<strong>LIMITED TIME OFFER</strong>";


    function updateTimer(){
        const currentTime= new Date().getTime();
        const offerTime= expirationDate- currentTime;

        const seconds= String(parseInt(offerTime%(60*1000)/1000)).padStart(2,'0');
        const minutes  = String(parseInt(offerTime%(60*60*1000)/(60*1000))).padStart(2,'0');
        const hours= String(parseInt(offerTime % (24* 60*60*1000)/(60*60*1000))).padStart(2,'0');
        const days= String(parseInt(offerTime/(24*60*60*1000))).padStart(2,'0');


        flex2.innerHTML= `Ends in : <b>${days}:${hours}:${minutes}:${seconds}</b>`  
        // flex2.textContent= offerTime;
    }

    updateTimer();
    setInterval(updateTimer,1000);

        flex3.innerHTML= `<b>GET ${offPercent}% OFF</b>    USE CODE: <b>${offerCode}</b>`;

        function changeDisplay() {
            if (window.innerWidth < 924) {
                banner.style.flexDirection= 'column';
                banner.style.borderRadius= "5px";
                banner.style.fontSize='14px';
            }
            else{
                banner.style.flexDirection='row';
                banner.style.borderRadius='60px';
                banner.style.fontSize='18px';
            }
          }
        
          changeDisplay();
          window.addEventListener('resize', changeDisplay);


}
// offerDuration should be in milliseconds will be added from the current time
const offerDuration= 100000000;
const offerCode= 'EXAMSTART';
const offPercent=10;

limitedTimeOfferBanner(offerDuration, offerCode, offPercent);