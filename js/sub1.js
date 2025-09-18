async function sub1() {
  const REST_API_KEY = 'fdad087a1d6a396138baab34ca701d7f';
  const params = new URLSearchParams({
    target: "title",
    query: "편안함의 습격"
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
    const book = data.documents[0];

    // ✅ 데이터 추출
    const { title, thumbnail, authors, publisher, price, sale_price, contents } = book;

    // ✅ DOM 반영
    document.querySelector("#book-thumbnail").src = thumbnail;
    document.querySelector("#book-title").textContent = title;
    document.querySelector("#book-authors").textContent = "저자: " + authors.join(", ");
    document.querySelector("#book-publisher").textContent = "출판사: " + publisher;

    // ✅ 가격 표시
    const original = document.querySelector(".price-original");
    const discount = document.querySelector(".price-discount");
    const final = document.querySelector(".price-final");

    original.textContent = price.toLocaleString() + "원";

    if (sale_price && sale_price < price) {
      const discountPercent = Math.round(((price - sale_price) / price) * 100);
      discount.textContent = discountPercent + "% 할인";
      final.textContent = sale_price.toLocaleString() + "원";
    } else {
      discount.textContent = "-";
      final.textContent = price.toLocaleString() + "원";
    }

    // ✅ 책 소개(밑에 노란 박스)
    const contextBox = document.querySelector(".contextbox");
    contextBox.innerHTML = `
      <h6>${authors[0]}</h6>
      <p>${contents}</p>
      <span>자세히보기</span>
    `;

  } catch (error) {
    console.log('에러발생', error);
  }
}

sub1();


// 📌 txt 불러오기 (메모장 내용)
document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("./sub_txt/txt1.txt");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.text();
    document.getElementById("tmpBox").innerHTML = data;

  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
});
