"use strict";
let submitBtn = document.getElementById('submitBtn');
const resumeForm = document.getElementById('resumeForm');
resumeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let pic = document.getElementById('pic');
    let myNam = document.getElementById('name');
    let desig = document.getElementById('desig');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let address = document.getElementById('address');
    let skills1 = document.getElementById('skills1');
    let skills2 = document.getElementById('skills2');
    let skills3 = document.getElementById('skills3');
    let lang1 = document.getElementById('lang1');
    let lang2 = document.getElementById('lang2');
    let lang3 = document.getElementById('lang3');
    let crs1Data1 = document.getElementById('crs1Data1');
    let crs1Data2 = document.getElementById('crs1Data2');
    let crs1Data3 = document.getElementById('crs1Data3');
    let crs2Data1 = document.getElementById('crs2Data1');
    let crs2Data2 = document.getElementById('crs2Data2');
    let crs2Data3 = document.getElementById('crs2Data3');
    let crs3Data1 = document.getElementById('crs3Data1');
    let crs3Data2 = document.getElementById('crs3Data2');
    let crs3Data3 = document.getElementById('crs3Data3');
    let edu1Data1 = document.getElementById('edu1Data1');
    let edu1Data2 = document.getElementById('edu1Data2');
    let edu1Data3 = document.getElementById('edu1Data3');
    let edu2Data1 = document.getElementById('edu2Data1');
    let edu2Data2 = document.getElementById('edu2Data2');
    let edu2Data3 = document.getElementById('edu2Data3');
    let edu3Data1 = document.getElementById('edu3Data1');
    let edu3Data2 = document.getElementById('edu3Data2');
    let edu3Data3 = document.getElementById('edu3Data3');
    localStorage.setItem('name', myNam.value);
    localStorage.setItem('desig', desig.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('skills1', skills1.value);
    localStorage.setItem('skills2', skills2.value);
    localStorage.setItem('skills3', skills3.value);
    localStorage.setItem('lang1', lang1.value);
    localStorage.setItem('lang2', lang2.value);
    localStorage.setItem('lang3', lang3.value);
    localStorage.setItem('crs1Data1', crs1Data1.value);
    localStorage.setItem('crs1Data2', crs1Data2.value);
    localStorage.setItem('crs1Data3', crs1Data3.value);
    localStorage.setItem('crs2Data1', crs2Data1.value);
    localStorage.setItem('crs2Data2', crs2Data2.value);
    localStorage.setItem('crs2Data3', crs2Data3.value);
    localStorage.setItem('crs3Data1', crs3Data1.value);
    localStorage.setItem('crs3Data2', crs3Data2.value);
    localStorage.setItem('crs3Data3', crs3Data3.value);
    localStorage.setItem('edu1Data1', edu1Data1.value);
    localStorage.setItem('edu1Data2', edu1Data2.value);
    localStorage.setItem('edu1Data3', edu1Data3.value);
    localStorage.setItem('edu2Data1', edu2Data1.value);
    localStorage.setItem('edu2Data2', edu2Data2.value);
    localStorage.setItem('edu2Data3', edu2Data3.value);
    localStorage.setItem('edu3Data1', edu3Data1.value);
    localStorage.setItem('edu3Data2', edu3Data2.value);
    localStorage.setItem('edu3Data3', edu3Data3.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            let textimg = reader.result;
            localStorage.setItem("profilePic", textimg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./static-res/index.html";
});
