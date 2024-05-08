const imageCB = document.getElementById('img-cb');
const infoCB = document.getElementById('info-cb');
const overlayCB = document.getElementById('overlay-cb');

const imageDH = document.getElementById('img-dh');
const infoDH = document.getElementById('info-dh');
const overlayDH = document.getElementById('overlay-dh');

const imageMTJ = document.getElementById('img-mtj');
const infoMTJ = document.getElementById('info-mtj');
const overlayMTJ = document.getElementById('overlay-mtj');

const imageTGibbs = document.getElementById('img-tgibbs');
const infoTGibbs = document.getElementById('info-tgibbs');
const overlayTGibbs = document.getElementById('overlay-tgibbs');

const imageSCreed = document.getElementById('img-screed');
const infoSCreed = document.getElementById('info-screed');
const overlaySCreed = document.getElementById('overlay-screed');

const imageCSmith = document.getElementById('img-csmith');
const infoCSmith = document.getElementById('info-csmith');
const overlayCSmith = document.getElementById('overlay-csmith');

const imageJHN = document.getElementById('img-jhn');
const infoJHN = document.getElementById('info-jhn');
const overlayJHN = document.getElementById('overlay-jhn');

const imageAlmirola = document.getElementById('img-almirola');
const infoAlmirola = document.getElementById('info-almirola');
const overlayAlmirola = document.getElementById('overlay-almirola');

const imageJoeG = document.getElementById('img-joeg');
const infoJoeG = document.getElementById('info-joeg');
const overlayJoeG = document.getElementById('overlay-joeg');

const imageRT = document.getElementById('img-rt');
const infoRT = document.getElementById('info-rt');
const overlayRT = document.getElementById('overlay-rt');

const imageTannerG = document.getElementById('img-tannerg');
const infoTannerG = document.getElementById('info-tannerg');
const overlayTannerG = document.getElementById('overlay-tannerg');

const imageTaylorG = document.getElementById('img-taylorg');
const infoTaylorG = document.getElementById('info-taylorg');
const overlayTaylorG = document.getElementById('overlay-taylorg');

const imageWilliam = document.getElementById('img-william');
const infoWilliam = document.getElementById('info-william');
const overlayWilliam = document.getElementById('overlay-william');

imageCB.addEventListener('click', () => {
    infoCB.classList.remove('display-none');
    infoDH.classList.add('display-none');
    infoMTJ.classList.add('display-none');
    infoTGibbs.classList.add('display-none');

    overlayCB.classList.remove('overlay');
    overlayDH.classList.add('overlay');
    overlayMTJ.classList.add('overlay');
    overlayTGibbs.classList.add('overlay');
});

imageDH.addEventListener('click', () => {
    infoCB.classList.add('display-none');
    infoDH.classList.remove('display-none');
    infoMTJ.classList.add('display-none');
    infoTGibbs.classList.add('display-none');

    overlayCB.classList.add('overlay');
    overlayDH.classList.remove('overlay');
    overlayMTJ.classList.add('overlay');
    overlayTGibbs.classList.add('overlay');
});

imageMTJ.addEventListener('click', () => {
    infoCB.classList.add('display-none');
    infoDH.classList.add('display-none');
    infoMTJ.classList.remove('display-none');
    infoTGibbs.classList.add('display-none');

    overlayCB.classList.add('overlay');
    overlayDH.classList.add('overlay');
    overlayMTJ.classList.remove('overlay');
    overlayTGibbs.classList.add('overlay');
});

imageTGibbs.addEventListener('click', () => {
    infoCB.classList.add('display-none');
    infoDH.classList.add('display-none');
    infoMTJ.classList.add('display-none');
    infoTGibbs.classList.remove('display-none');

    overlayCB.classList.add('overlay');
    overlayDH.classList.add('overlay');
    overlayMTJ.classList.add('overlay');
    overlayTGibbs.classList.remove('overlay');
});

imageSCreed.addEventListener('click', () => {
    infoSCreed.classList.remove('display-none');
    infoCSmith.classList.add('display-none');
    infoJHN.classList.add('display-none');

    overlaySCreed.classList.remove('overlay');
    overlayCSmith.classList.add('overlay');
    overlayJHN.classList.add('overlay');
});

imageCSmith.addEventListener('click', () => {
    infoSCreed.classList.add('display-none');
    infoCSmith.classList.remove('display-none');
    infoJHN.classList.add('display-none');

    overlaySCreed.classList.add('overlay');
    overlayCSmith.classList.remove('overlay');
    overlayJHN.classList.add('overlay');
});

imageJHN.addEventListener('click', () => {
    infoSCreed.classList.add('display-none');
    infoCSmith.classList.add('display-none');
    infoJHN.classList.remove('display-none');

    overlaySCreed.classList.add('overlay');
    overlayCSmith.classList.add('overlay');
    overlayJHN.classList.remove('overlay');
});

imageAlmirola.addEventListener('click', () => {
    infoAlmirola.classList.remove('display-none');
    infoJoeG.classList.add('display-none');
    infoRT.classList.add('display-none');

    overlayAlmirola.classList.remove('overlay');
    overlayJoeG.classList.add('overlay');
    overlayRT.classList.add('overlay');
});

imageJoeG.addEventListener('click', () => {
    infoAlmirola.classList.add('display-none');
    infoJoeG.classList.remove('display-none');
    infoRT.classList.add('display-none');

    overlayAlmirola.classList.add('overlay');
    overlayJoeG.classList.remove('overlay');
    overlayRT.classList.add('overlay');
});

imageRT.addEventListener('click', () => {
    infoAlmirola.classList.add('display-none');
    infoJoeG.classList.add('display-none');
    infoRT.classList.remove('display-none');

    overlayAlmirola.classList.add('overlay');
    overlayJoeG.classList.add('overlay');
    overlayRT.classList.remove('overlay');
});

imageTannerG.addEventListener('click', () => {
    infoTannerG.classList.remove('display-none');
    infoTaylorG.classList.add('display-none');
    infoWilliam.classList.add('display-none');

    overlayTannerG.classList.remove('overlay');
    overlayTaylorG.classList.add('overlay');
    overlayWilliam.classList.add('overlay');
});

imageTaylorG.addEventListener('click', () => {
    infoTannerG.classList.add('display-none');
    infoTaylorG.classList.remove('display-none');
    infoWilliam.classList.add('display-none');

    overlayTannerG.classList.add('overlay');
    overlayTaylorG.classList.remove('overlay');
    overlayWilliam.classList.add('overlay');
});

imageWilliam.addEventListener('click', () => {
    infoTannerG.classList.add('display-none');
    infoTaylorG.classList.add('display-none');
    infoWilliam.classList.remove('display-none');

    overlayTannerG.classList.add('overlay');
    overlayTaylorG.classList.add('overlay');
    overlayWilliam.classList.remove('overlay');
});