// 지금 많이 읽고 있는 작품 
async function bookData() {
  const REST_API_KEY = 'fdad087a1d6a396138baab34ca701d7f';
    const keywords = ["에세이", "소설"];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

    const params = new URLSearchParams({
        query: randomKeyword,
        size: 21,
    });


  const url = `https://dapi.kakao.com/v3/search/book?${params}`;

  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: { Authorization: `KakaoAK ${REST_API_KEY}` }
      });

      if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }

      const data = await response.json();
      const slides = document.querySelectorAll(".section .Swiper1 .swiper-slide");

      slides.forEach((slide, i) => {
          const doc = data.documents[i];
          if (!doc) return;

          slide.innerHTML = `
          <a href="sub1.html">
            <div class="book-item">
              <img src="${doc.thumbnail || 'noimage.png'}" alt="${doc.title}">
              <span class="rank">${i + 1}</span>
              <div class="book-info">
                <h3>${doc.title}</h3>
                <p>${doc.authors.length ? doc.authors.join(", ") : "저자 정보 없음"}</p>
              </div>
            </div>
        </a>
          `;
      });

  } catch (error) {
      console.log('에러발생', error);
  }
}
bookData();




// 오늘, 리디의 발견
async function bookData2() {
    const REST_API_KEY = 'fdad087a1d6a396138baab34ca701d7f';
    const keywords = ["자기계발","힐링"];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

    const params = new URLSearchParams({
        query: randomKeyword,
        size: 21,
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        
        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll(".section2 .swiper-slide");
        console.log(boxElements)

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            box.appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h3");
            h3.textContent = doc.title;   // 제목 전체 넣기
            box.appendChild(h3);


            // <h6> 저자
            const h6 = document.createElement("h6");
            h6.textContent = doc.authors.length ? doc.authors.join(", ") : "저자 없음";
            box.appendChild(h6);


        });



    } catch (error) {
        console.log('에러발생', error);
    }
}
bookData2();




// 베스트
async function bookData3() {
  const REST_API_KEY = 'fdad087a1d6a396138baab34ca701d7f';
        const keywords = ["철학","물리학"];
        const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

        const params = new URLSearchParams({
            query: randomKeyword,
            size: 21,
  });

  const url = `https://dapi.kakao.com/v3/search/book?${params}`;

  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: { Authorization: `KakaoAK ${REST_API_KEY}` }
      });

      if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }

      const data = await response.json();

      // ✅ Swiper3 슬라이드만 선택
      const slides = document.querySelectorAll(".Swiper3 .swiper-slide");

      slides.forEach((slide, i) => {
          const doc = data.documents[i];
          if (!doc) return;

          slide.innerHTML = `
          <a href="sub1.html">
            <div class="book-item">
              <img src="${doc.thumbnail || 'noimage.png'}" alt="${doc.title}">
              <span class="rank">${i + 1}</span>
              <div class="book-info">
                <h3>${doc.title}</h3>
                <p>${doc.authors.length ? doc.authors.join(", ") : "저자 정보 없음"}</p>
              </div>
            </div>
            </a>
          `;
      });

  } catch (error) {
      console.log('에러발생', error);
  }
}
bookData3();




// 지금, 리디에서만! 선 출간 신작
async function bookData5() {
    const REST_API_KEY = 'fdad087a1d6a396138baab34ca701d7f';
    const keywords = ["시집","시"];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

    const params = new URLSearchParams({
        query: randomKeyword,
        size: 21,
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        
        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll(".section4 .swiper-slide");
        console.log(boxElements)

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            box.appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h3");
            h3.textContent = doc.title;   // 제목 전체 넣기
            box.appendChild(h3);


            // <h6> 저자
            const h6 = document.createElement("h6");
            h6.textContent = doc.authors.length ? doc.authors.join(", ") : "저자 없음";
            box.appendChild(h6);

        });



    } catch (error) {
        console.log('에러발생', error);
    }
}
bookData5();



// 새로나온 작품
async function bookData6() {
    const REST_API_KEY = 'fdad087a1d6a396138baab34ca701d7f';
    const keywords = ["영화","웹소설"];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

    const params = new URLSearchParams({
        query: randomKeyword,
        size: 21,
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        
        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll(".section5 .swiper-slide");
        console.log(boxElements)

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            box.appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h3");
            h3.textContent = doc.title;   // 제목 전체 넣기
            box.appendChild(h3);


            // <h6> 저자
            const h6 = document.createElement("h6");
            h6.textContent = doc.authors.length ? doc.authors.join(", ") : "저자 없음";
            box.appendChild(h6);

        });



    } catch (error) {
        console.log('에러발생', error);
    }
}
bookData6();

