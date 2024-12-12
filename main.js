let products = document.querySelector("#products");

let data = [
  {
    img: "https://i.pinimg.com/originals/66/e0/3f/66e03f072ee1fd9c542f9b0d9157dbdf.jpg",
    title: "Burger",
    price: "14$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=ac8a1b97451fb35ea4d704b1ed1f41df_l-10639406-images-thumbs&n=13",
    title: "Pizza",
    price: "20$",
  },
  {
    img: "https://slkfood.ru/wp-content/uploads/2023/03/%D0%A5%D0%BE%D1%82-%D0%B4%D0%BE%D0%B3-2.jpg",
    title: "Hot-dog",
    price: "6$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-altay/6406681/2a000001801eb51d1fee4b0b75d555cbe82a/XXL_height",
    title: "Lavash",
    price: "10$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-altay/9728306/2a00000189f975d6ac6be472b2b01c881e08/XXL_height",
    title: "Donar",
    price: "9$",
  },
  {
    img: "https://medialeaks.ru/wp-content/uploads/2020/10/1-3-1-1.jpg",
    title: "KFC",
    price: "25$",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/korean-corn-dogs-1-1666842213.jpg",
    title: "CORNDOG",
    price: "12$",
  }, {
    img: "https://s.yimg.com/ny/api/res/1.2/fDo0rW5UY986eQKEY4HDGA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-images/2020-07/939179f0-bbb9-11ea-97be-916880f259f7",
    title: "COLA",
    price: "5$",
  },
];

for (let item of data) {
  products.innerHTML += `
    <article class="border  p-2 rounded-lg bg-white">
                <img src="${item.img}" alt="" class="rounded-md w-full h-44 object-cover">
                <h1 class="text-xl font-medium text-gray-900">${item.title}</h1>
                <h2 class="text-2xl my-1 font-bold text-blue-500">${item.price}</h2>
                <button class="bg-gray-900 text-white p-2 w-full rounded-md mt-2 active:scale-110 duration-200">Add to cart</button>
            </article>
    `;
}