"use strict";
const quizCategories = [
  {
    title: "Science",
    icon: "science",
    imgScr: "./src/assets/images/NASA.webp",
    imgAlt: "photo of outer space",
    description:
      "Explore the wonders of physics, chemistry, biology, and astronomy. From quantum mechanics to the mysteries of the cosmos, test your scientific knowledge.",
    buttonText: "Begin Exploration",
  },
  {
    title: "History",
    icon: "history",
    imgScr: "./src/assets/images/history.webp",
    imgAlt: "brown painted structure",
    description:
      "Journey through time from ancient civilizations to modern events. Test your knowledge of world history, famous figures, and pivotal moments that shaped our world.",
    buttonText: "Explore the Past",
  },
  {
    title: "Entertainment",
    icon: "entertainment",
    imgScr: "./src/assets/images/entertainment.webp",
    imgAlt: "person holding white print paper",
    description:
      "Dive into the world of movies, music, TV shows, and pop culture. From classic films to chart-topping hits, see how well you know the entertainment industry.",
    buttonText: "Start Quiz",
  },
];
const categoryIcons = {
  science: ` <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              class="fill-gray-300"
            >
              <path
                d="M200-120v-80h200v-80q-83 0-141.5-58.5T200-480q0-61 33.5-111t90.5-73q8-34 35.5-55t62.5-21l-22-62 38-14-14-36 76-28 12 38 38-14 110 300-38 14 14 38-76 28-12-38-38 14-24-66q-15 14-34.5 21t-39.5 5q-22-2-41-13.5T338-582q-27 16-42.5 43T280-480q0 50 35 85t85 35h320v80H520v80h240v80H200Zm346-458 36-14-68-188-38 14 70 188Zm-126-22q17 0 28.5-11.5T460-640q0-17-11.5-28.5T420-680q-17 0-28.5 11.5T380-640q0 17 11.5 28.5T420-600Zm126 22Zm-126-62Zm0 0Z"
              />
            </svg>`,
  history: ` <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              class="fill-gray-300"
            >
              <path
                d="M40-120v-480h80v80h80v-320h80v80h80v-80h80v80h80v-80h80v80h80v-80h80v320h80v-80h80v480H560v-120q0-33-23.5-56.5T480-320q-33 0-56.5 23.5T400-240v120H40Zm80-80h200v-40q0-66 47-113t113-47q66 0 113 47t47 113v40h200v-240H680v-240H280v240H120v240Zm240-280h80v-120h-80v120Zm160 0h80v-120h-80v120Zm-40 40Z"
              />
            </svg>`,
  entertainment: ` <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              class="fill-gray-300"
            >
              <path
                d="M160-80q-17 0-28.5-11.5T120-120v-558q0-15 6-25.5t20-16.5l400-160q20-8 37 5.5t17 34.5v120h40q17 0 28.5 11.5T680-680v120h-80v-80H200v480h207l80 80H160Zm200-640h160v-62l-160 62ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm-50-100 160-100-160-100v200Zm-430 20v-480 480Z"
              />
            </svg>`,
};

const quizCardsContainer = document.getElementById("quiz-card");
quizCategories.forEach((category) => {
  const card = document.createElement("div");
  card.className =
    "science-card flex flex-col items-center p-4 rounded shadow-md hover:shadow-xl gap-4 bg-gray-800 transform hover:scale-105 transition duration-300";
  card.innerHTML = `
     <h2 class="text-xl md:text-2xl font-semibold flex items-center gap-1">
             ${category.title}
             ${categoryIcons[category.icon]}
             </h2>
    <div>
            <img
              src= ${category.imgScr}
              alt= ${category.imgAlt}
              loading = lazy
              class="rounded-2xl bg-cover w-full bg-center object-cover"
            />
          </div>
  <p class="text-center text-gray-300">
            ${category.description}
          </p>
     <div>
            <button
              type="button"
              class="bg-indigo-600 px-6 py-4 rounded-2xl font-semibold hover:bg-indigo-500 transition duration-300 md:px-8"
            >
              ${category.buttonText}
            </button>
          </div>
  `;
  quizCardsContainer.appendChild(card);
});
