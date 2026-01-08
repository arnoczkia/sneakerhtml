const menuBtn = document.getElementById("menuBtn"); 
const dropdown = document.getElementById("dropdown");
const title = document.getElementById("brandTitle");
const desc = document.getElementById("brandDesc");
const grid = document.getElementById("grid");
const homeBtn = document.getElementById("homeBtn");

// HOME kartyak
const homeCards = [
    {
        img: "./adidas-campus-80s-south-park-towelie-1-1000.png",
        h3: "Limitált modellek",
        p: "Időtálló darabok a sneaker kultúrából."
    },
    {
        img: "./Men-s-Hoodies-Black-Logo-Hoodie-Trendy-Hip-Hop-Streetwear-Sweatshirt.avif",
        h3: "Streetwear vibe",
        p: "Letisztult megjelenés, városi stílus."
    }
];

// brand kartyak
const data = {
    Adidas: [
        { img: "Superstar_II_Shoes_White_JI0124_09_standard-Photoroom-square.webp", h3: "Superstar", p: "Adidas" },
        { img: "kolat nem szeretem.webp", h3: "Forum Low", p: "Adidas" },
        { img: "e185efd7-c48a-4aa7-9a5f-9e8b300048c2-1000x1000-odDr9hAmnPpFLibm8IYZOzdXC3oTzHVWU31BvI0X.webp", h3: "Campus 00s", p: "Adidas" },
    ],
    Nike: [
        { img: "air-force-1-custom-lacet-corde-lac-bleu.webp", h3: "Air Force 1", p: "Nike" },
        { img: "FN6344-001_800_800px.jpg", h3: "Dunk Low", p: "Nike" },
        { img: "air-max-plus-premium-black-racer-blue.webp", h3: "Air Max 1", p: "Nike" },
    ],
};

// Dropdown menü toggle
menuBtn.addEventListener("click", () => {
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
});

// Brand kivalasztasa
dropdown.querySelectorAll("div").forEach(item => {
    item.addEventListener("click", () => {
        const brand = item.dataset.brand;

        title.textContent = brand;
        desc.textContent = "Válogatott darabok a sneaker kultúrából.";

        grid.innerHTML = ""; 

        data[brand].forEach(cardData => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${cardData.img}" alt="${cardData.h3}">
                <h3>${cardData.h3}</h3>
                <p>${cardData.p}</p>
            `;
            grid.appendChild(card);
        });

        dropdown.style.display = "none";
    });
});

// HOME gomb
homeBtn.addEventListener("click", () => {
    title.textContent = "Főoldal";
    desc.textContent = "Ikonikus sneakerek és kiegészítők válogatása.";

    grid.innerHTML = "";

    homeCards.forEach(cardData => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${cardData.img}" alt="${cardData.h3}">
            <h3>${cardData.h3}</h3>
            <p>${cardData.p}</p>
        `;
        grid.appendChild(card);
    });
});

// klikk nelkul
document.addEventListener("click", e => {
    if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
    }
});
