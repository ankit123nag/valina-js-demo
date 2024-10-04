import { renderCards } from "./cards.js";

const api_endpoint = 'https://fakestoreapi.com/products';

const resultCount = document.getElementById('result-count');
const loadMore = document.getElementById('laod-more');

let data = [];
let offset = 0;
const limit = 10;

async function fetchData() {
    try {
        const response = await fetch(api_endpoint);
        if (!response.ok) {
            throw new Error("Something went wrong!!!");
        }
        data = await response.json();
    } catch (error) {
        console.error("There is a problem while fetching data:", error);
    }
}

loadMore.addEventListener('click', loadMoreData);

function loadMoreData() {
    const cardsToRender = data.slice(offset, offset + limit);
    renderCards(cardsToRender);
    resultCount.innerHTML = `${offset + cardsToRender.length} Results`;
    offset += limit;

    if (offset >= data.length) {
        loadMore.style.display = 'none';
    }
}

window.onload = async () => {
    await fetchData();
    loadMoreData();
};