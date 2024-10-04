const cardContainer = document.getElementById("card-container");

export function renderCards(products) {

    products.forEach((product) => {
        // Create card elements
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View details for ${product.title}`);

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        img.loading = 'lazy';

        const title = document.createElement("h4");
        title.textContent = product.title;
        title.classList.add('clamp-text');

        const price = document.createElement("p");
        price.textContent = `$${product.price}`;

        const heartIcon = document.createElement("i");
        heartIcon.classList.add('fa', 'fa-heart-o');
        heartIcon.setAttribute('tabindex', '0');
        heartIcon.setAttribute('role', 'button');
        heartIcon.setAttribute('aria-label', `Add to wishlist`);
        // Append elements to card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(heartIcon);

        // Append card to container
        cardContainer.appendChild(card);
    });
}
