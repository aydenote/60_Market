// fileArr  : Blob  객체형 파일 데이터 저장
// arrImgName : 파일명 저장

interface FileArrType extends Blob {
  lastModified: number;
  lastModifiedDate?: object;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string | null;
  Blob?: ArrayBuffer;
}

interface ImageDataType {
  destination: string;
  encoding: string;
  fieldname: string;
  filename: string;
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
}

let fileArr: FileArrType[] = [];
let arrImgName: string[] = [];

// 게시물 수정 , 생성에 따른 함수 실행
export function checkPost(
  postUserProfile: HTMLImageElement,
  postImgContainer: HTMLElement,
  postUploadTxt: HTMLTextAreaElement,
  postUploadBtn: HTMLButtonElement
) {
  const postid = window.location.hash.split('?postid=')[1];
  fileArr = [];

  // 게시물 수정 PUT 요청
  if (postid) {
    getLoginUserInfo(postUserProfile);
    getPost(postid, postUploadTxt, postImgContainer);
    postUploadBtn.addEventListener('click', () => {
      editPost(postid, postUploadTxt);
    });
  } else {
    postUploadBtn.addEventListener('click', () => createPost());
    getLoginUserInfo(postUserProfile);
  }
}

// 로그인 유저 정보
async function getLoginUserInfo(profileImgEl: HTMLImageElement) {
  const token = localStorage.getItem('Token');
  const accountname = localStorage.getItem('accountname');
  const url = 'https://mandarin.api.weniv.co.kr';

  try {
    const res = await fetch(`${url}/profile/${accountname}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const userJson = await res.json();
    profileImgEl.src =
      userJson.profile.image.length <= 20 ? `${url}/${userJson.profile.image}` : `${userJson.profile.image}`;
  } catch (err) {
    console.log(err);
  }
}

// 업로드 사진 미리보기, 이미지 삭제 이벤트 등록
export function readInputFile(event: Event) {
  const reader = new FileReader();
  const files = (<HTMLInputElement>event.target).files!;
  const postImgContainer = document.querySelector('.postUploadImageScreen') as HTMLElement;
  const postImgItem = document.querySelectorAll('.postImgItem');
  const imgFileName = files[0].name;
  reader.readAsDataURL(files[0]);
  fileArr.push(files[0]);
  if (postImgItem.length === 3) {
    fileArr.splice(fileArr.length - 1);
    alert('이미지는 최대 3장 업로드 가능합니다.');
  } else {
    reader.onload = function () {
      const imgItem = document.createElement('div');
      imgItem.style.backgroundImage = `url(${reader.result})`;
      imgItem.className = 'postImgItem';
      imgItem.dataset.key = `${imgFileName}`;
      postImgContainer.appendChild(imgItem);
      (<HTMLInputElement>event.target).value = '';

      const closeBtn = document.createElement('button');
      closeBtn.className = 'postImgCloseBtn';
      imgItem.appendChild(closeBtn);
      closeBtn.addEventListener('click', deletImg);
    };
  }
}

// 해당 이미지 fileArr에서 삭제, 업로드 사진 미리보기에서 삭제
function deletImg(event: MouseEvent) {
  const postImgContainer = document.querySelector('.postUploadImageScreen') as HTMLElement;
  const imgItem = (event.target as HTMLElement).parentElement!;
  const targetImgName = imgItem.dataset.key;
  const defaultUrl = 'https://mandarin.api.weniv.co.kr';
  const fileLength = fileArr.length;

  // 업로드 사진 미리보기에서 삭제
  postImgContainer.removeChild(imgItem);

  // 클릭한 타겟을 fileArr 배열에서 삭제
  for (let i = 0; i < fileLength; i++) {
    if (fileArr[i].name === targetImgName) {
      fileArr.splice(i, 1);
    }
  }

  for (let i = 0; i < fileLength; i++) {
    let alreadyImg = imgItem.style.backgroundImage.split('"')[1].replace(`${defaultUrl}/`, '');
    if (fileArr[i].name === alreadyImg) {
      fileArr.splice(i, 1);
      break;
    }
  }
}

// 이미지 업로드
async function uploadImg(fileArr: FileArrType[]) {
  const formData = new FormData();
  const url = 'https://mandarin.api.weniv.co.kr';
  arrImgName = [];
  fileArr.forEach(file => {
    formData.append('image', file);
  });
  try {
    const response = await fetch(url + '/image/uploadfiles', {
      method: 'POST',
      body: formData,
    });
    const res = await response.json();
    res.forEach((imageData: ImageDataType) => {
      arrImgName.push(`${url}/${imageData.filename}`);
    });
    fileArr = [];
    return arrImgName;
  } catch {
    fileArr.pop();
    alert('이미지 파일은 최대 3장까지만 가능합니다.');
  }
}

// 업로드버튼 활성화
export function postInput() {
  const postUploadTxt = document.querySelector('.postUploadComentTxt') as HTMLTextAreaElement;
  const postUploadBtn = document.querySelector('.headerBarBtn.buttonClick') as HTMLButtonElement;

  if (postUploadTxt.value.length >= 1) {
    postUploadBtn.style.opacity = '1';
    postUploadBtn.disabled = false;
  } else {
    postUploadBtn.style.opacity = '0.3';
    postUploadBtn.disabled = true;
  }
}

// 게시글 작성 후 데이터 서버에 보내기
export async function createPost() {
  const postUploadTxt = document.querySelector('.postUploadComentTxt') as HTMLTextAreaElement;
  const token = localStorage.getItem('Token');
  const url = 'https://mandarin.api.weniv.co.kr';
  const contentText = postUploadTxt.value;
  const images = await uploadImg(fileArr);

  const res = await fetch(`${url}/post`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      post: {
        content: contentText,
        image: images!.join(','),
      },
    }),
  });
  const json = await res.json();
  if (json.post) {
    fileArr = [];
    window.location.hash = '#profile';
  } else {
    return;
  }
}

// 게시물 수정 페이지에서 url를 파일로 변환
async function convertURLtoFile(postImgArr: string[], fileArr: FileArrType[]) {
  for (const imgUrl of postImgArr) {
    const response = await fetch(imgUrl);
    const data = await response.blob();
    const ext = imgUrl.split('.').pop(); // url 구조에 맞게 수정할 것
    const filename = imgUrl.split('/').pop(); // url 구조에 맞게 수정할 것
    const metadata = { type: `image/${ext}` };
    fileArr.push(new File([data], filename!, metadata));
  }
}

// 게시물 수정 페이지에서 이미지 미리보기 및 삭제 버튼 추가
async function setImg(postImgContainer: HTMLElement, postImgArr: string[], fileArr: FileArrType[]) {
  await convertURLtoFile(postImgArr, fileArr);
  if (postImgArr.length >= 1 && postImgArr[0] !== '') {
    postImgArr.map((imageSrc: string) => {
      const imgItem = document.createElement('div');
      imgItem.className = 'postImgItem';
      imgItem.setAttribute('style', `background-image: url(${imageSrc})`);
      postImgContainer.appendChild(imgItem);

      const closeBtn = document.createElement('button');
      closeBtn.className = 'postImgCloseBtn';
      imgItem.appendChild(closeBtn);
      closeBtn.addEventListener('click', deletImg);
    });
  }
}

// 서버에 저장된 게시글, 이미지 가져오기
async function getPost(postid: string, postUploadTxt: HTMLTextAreaElement, postImgContainer: HTMLElement) {
  const token = localStorage.getItem('Token');
  const defaultUrl = 'https://mandarin.api.weniv.co.kr';
  try {
    const res = await fetch(`${defaultUrl}/post/${postid}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const json = await res.json();
    const post = json.post;
    const postContent = post.content;
    const postImgArr = post.image.split(',');

    postUploadTxt.textContent = postContent;
    setImg(postImgContainer, postImgArr, fileArr);
  } catch (err) {
    console.log(err);
  }
}

// 게시물 수정
async function editPost(postid: string, postUploadTxt: HTMLTextAreaElement) {
  const token = localStorage.getItem('Token');
  const defaultUrl = 'https://mandarin.api.weniv.co.kr';
  const resultImg = await uploadImg(fileArr);

  try {
    const res = await fetch(`${defaultUrl}/post/${postid}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        post: {
          content: postUploadTxt.value,
          image: resultImg!.join(','),
        },
      }),
    });
    const json = await res.json();
    fileArr = [];
    window.location.hash = '#profile'; // 주소 업데이트

    if (json.type == 'entity.too.large') {
      console.error(json.message);
      alert('이미지 용량이 너무 큽니다.');
    }
  } catch (err) {
    console.error(err);
    window.location.hash = '#error';
  }
}
