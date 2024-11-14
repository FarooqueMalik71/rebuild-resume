window.addEventListener('load', () => {







    let profilePic: any = localStorage.getItem('profilePic');
    let name: any = localStorage.getItem('name');
    let desig: any = localStorage.getItem('desig');
    let email: any = localStorage.getItem('email');
    let phone: any = localStorage.getItem('phone');
    let address: any = localStorage.getItem('address');

    let skills1: any = localStorage.getItem('skills1');
    let skills2: any = localStorage.getItem('skills2');
    let skills3: any = localStorage.getItem('skills3');

    let lang1: any = localStorage.getItem('lang1');
    let lang2: any = localStorage.getItem('lang2');
    let lang3: any = localStorage.getItem('lang3');

    let crs1Data1: any = localStorage.getItem('crs1Data1');
    let crs1Data2: any = localStorage.getItem('crs1Data2');
    let crs1Data3: any = localStorage.getItem('crs1Data3');

    let crs2Data1: any = localStorage.getItem('crs2Data1');
    let crs2Data2: any = localStorage.getItem('crs2Data2');
    let crs2Data3: any = localStorage.getItem('crs2Data3');

    let crs3Data1: any = localStorage.getItem('crs3Data1');
    let crs3Data2: any = localStorage.getItem('crs3Data2');
    let crs3Data3: any = localStorage.getItem('crs3Data3');

    let edu1Data1: any = localStorage.getItem('edu1Data1');
    let edu1Data2: any = localStorage.getItem('edu1Data2');
    let edu1Data3: any = localStorage.getItem('edu1Data3');
    let edu2Data1: any = localStorage.getItem('edu2Data1');
    let edu2Data2: any = localStorage.getItem('edu2Data2');
    let edu2Data3: any = localStorage.getItem('edu2Data3');
    let edu3Data1: any = localStorage.getItem('edu3Data1');
    let edu3Data2: any = localStorage.getItem('edu3Data2');
    let edu3Data3: any = localStorage.getItem('edu3Data3');


    let displayName: any = document.getElementById('displayName')
    displayName.textContent = name
    let displayDesig: any = document.getElementById('displayDesig')
    displayDesig.textContent = desig
    let displayAddress: any = document.getElementById('displayAddress')
    displayAddress.textContent = address
    let displayEmail: any = document.getElementById('displayEmail')
    displayEmail.textContent = email
    let displayPhone: any = document.getElementById('displayPhone')
    displayPhone.textContent = phone



    const displaySkill1 = document.getElementById('dSkill1') as HTMLElement
    displaySkill1.textContent = skills1
    const displaySkill2 = document.getElementById('dSkill2') as HTMLElement
    displaySkill2.textContent = skills2
    const displaySkill3 = document.getElementById('dSkill3') as HTMLElement
    displaySkill3.textContent = skills3


    const displayLang1 = document.getElementById('dSlang1') as HTMLElement
    displayLang1.textContent = lang1
    const displayLang2 = document.getElementById('dSlang2') as HTMLElement
    displayLang2.textContent = lang2
    const displayLang3 = document.getElementById('dSlang3') as HTMLElement
    displayLang3.textContent = lang3



    const crsName = document.getElementById('crsName') as HTMLElement

    crsName.textContent = crs1Data1
    const crsDate = document.getElementById('crsDate') as HTMLElement

    crsDate.textContent = crs1Data2
    const crsOver = document.getElementById('crsOver') as HTMLElement
    crsOver.textContent = crs1Data3


    const crs2Name = document.getElementById('crs2Name') as HTMLElement
    crs2Name.textContent = crs2Data1

    const crs2Date = document.getElementById('crs2Date') as HTMLElement
    crs2Date.textContent = crs2Data2

    const crs2Over = document.getElementById('crs2Over') as HTMLElement
    crs2Over.textContent = crs2Data3


    const crs3Name = document.getElementById('crs3Name') as HTMLElement
    crs3Name.textContent = crs3Data1

    const crs3Date = document.getElementById('crs3Date') as HTMLElement
    crs3Date.textContent = crs3Data2

    const crs3Over = document.getElementById('crs3Over') as HTMLElement
    crs3Over.textContent = crs3Data3






    const eduName = document.getElementById('eduName') as HTMLElement
    eduName.textContent = edu1Data1
    const eduDate = document.getElementById('eduDate') as HTMLElement
    eduDate.textContent = edu1Data2
    const eduForm = document.getElementById('eduForm') as HTMLElement
    eduForm.textContent = edu1Data3


    const edu2Name = document.getElementById('edu2Name') as HTMLElement
    edu2Name.textContent = edu2Data1

    const edu2Date = document.getElementById('edu2Date') as HTMLElement
    edu2Date.textContent = edu2Data2

    const eduForm2 = document.getElementById('eduForm2') as HTMLElement
    eduForm2.textContent = edu2Data3


    const edu3Name = document.getElementById('edu3Name') as HTMLElement
    edu3Name.textContent = edu3Data1

    const edu3Date = document.getElementById('edu3Date') as HTMLElement
    edu3Date.textContent = edu3Data2

    const eduForm3 = document.getElementById('eduForm3') as HTMLElement
    eduForm3.textContent = edu3Data3


    const resumPic = document.getElementById('resumePic') as HTMLElement
   resumPic.src = profilePic











});














let cors_sec = document.getElementById('refCors')
let cors_btn = document.getElementById("btnId")


cors_btn?.addEventListener('click', () => {

    cors_sec!.classList.toggle('hide')


})

let get_btnPrint = document.getElementById('btnPrint')

get_btnPrint?.addEventListener('click', () => {


    window.print()
})
