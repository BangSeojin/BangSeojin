
const images = [
    'img/banner1.jpg',
    'img/banner2.jpg',
  ];
  
  // 랜덤한 이미지를 선택하는 함수
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  // 페이지가 로드될 때 랜덤한 이미지를 표시하는 함수
  window.addEventListener('load', function () {
    const randomBanner = document.querySelector('.randomBanner');
  
    // 이미지 경로를 가져와서 비주얼 랜덤 배너에 추가
    const imageSrc = getRandomImage();
    const bannerItem = document.createElement('div');
    bannerItem.classList.add('banner_item');
  
    const imageLink = document.createElement('a');
    imageLink.href = '#'; // 링크 설정
    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = '비주얼배너 이미지 삽입';
  
    imageLink.appendChild(image);
    bannerItem.appendChild(imageLink);
    randomBanner.appendChild(bannerItem);
  });