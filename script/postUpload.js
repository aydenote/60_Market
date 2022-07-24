const postUploadTxt = document.querySelector(".postUploadComentTxt");
const postUploadInp = document.querySelector(".postUploadInput");
const postImgContainer = document.querySelector(".postUploadImageScreen");
const postUploadBtn = document.querySelector(".headerBarBtn.buttonClick");
const postImgItem = document.querySelector(".postImgItem");
const url = (location.protocol === "https:") ? 'https://mandarin.api.weniv.co.kr' : 'http://146.56.183.55:5050';

const imgFiles = [];

// 사진 미리보기

function readInputFile(e){
    const files = e.target.files;
    const fileArr = [...files];
    fileArr.forEach(file => imgFiles.push(file));
    // console.log(imgFiles);
    fileArr.forEach(function(i) {
        if(files.length <= 3){
        const reader = new FileReader();
        reader.onload = function(e) {
        const imgItem = document.createElement('div');
        imgItem.style.backgroundImage = `url(${reader.result})`;
        imgItem.className = 'postImgItem';

        postImgContainer.appendChild(imgItem);
        e.target.value = '';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'postImgCloseBtn';
        imgItem.appendChild(closeBtn);
        closeBtn.addEventListener('click',function(){
            // MEMO:: imgFiles에서 삭제, 미리보기에 삭제
            imgFiles.splice([...postImgContainer.children].indexOf(imgItem), 1);
            postImgContainer.removeChild(imgItem);
            // console.log(imgFiles);
        });
        };
        reader.readAsDataURL(i);
    }
    })
  }
postUploadInp.addEventListener('change',readInputFile);

// 이미지 업로드

async function uploadImg(event) {
    const formData = new FormData();
    imgFiles.forEach(file => {
    formData.append("image", file);
    })
    try {
    const response = await fetch(url + "/image/uploadfiles", {
        method: "POST",
        body: formData,
    });
    const data = await response.json();
    data.forEach(data => {
        console.log(data.filename)
    })
    console.log(data);
    }
    catch (err) {
    console.log(err);
    }
}