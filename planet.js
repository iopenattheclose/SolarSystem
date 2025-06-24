document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    {
      name: "Sun",
      image: "images/sun.jpg",
      description: `
        <h2>Sun</h2>
        <p>The Sun is a massive, glowing ball of hot gas primarily composed of hydrogen and helium. It provides the energy that sustains life on Earth.</p>
        <ul>
          <li>Core temperature: 15 million °C</li>
          <li>Mass: 333,000 times Earth</li>
          <li>Distance from Earth: ~150 million km</li>
        </ul>
      `
    },
    {
      name: "Mercury",
      image: "images/mercury.jpg",
      description: `
        <h2>Mercury</h2>
        <p>Mercury is the smallest and innermost planet. It has a heavily cratered surface and experiences drastic temperature swings.</p>
        <ul>
          <li>Orbital period: 88 Earth days</li>
          <li>Temperature range: -173°C to 427°C</li>
          <li>0 moons</li>
        </ul>
      `
    },
    {
      name: "Venus",
      image: "images/venus.jpg",
      description: `
        <h2>Venus</h2>
        <p>Venus is similar in size to Earth but has a thick, toxic atmosphere mainly of CO₂. It's the hottest planet in the Solar System.</p>
        <ul>
          <li>Atmospheric pressure: 92x Earth's</li>
          <li>Average temperature: 464°C</li>
          <li>0 moons</li>
        </ul>
      `
    },
    {
      name: "Earth",
      image: "images/earth.jpg",
      description: `
        <h2>Earth</h2>
        <p>Earth is the only planet known to support life, thanks to its atmosphere, water cycle, and magnetic field.</p>
        <ul>
          <li>70% surface covered by water</li>
          <li>Atmosphere: Nitrogen & Oxygen</li>
          <li>1 moon</li>
        </ul>
      `
    },
    {
      name: "Mars",
      image: "images/mars.jpg",
      description: `
        <h2>Mars</h2>
        <p>Known as the Red Planet, Mars has the tallest volcano and the deepest canyon in the Solar System.</p>
        <ul>
          <li>Moons: Phobos & Deimos</li>
          <li>Olympus Mons: 21 km high</li>
          <li>Signs of ancient water flows</li>
        </ul>
      `
    },
    {
      name: "Jupiter",
      image: "images/jupiter.jpg",
      description: `
        <h2>Jupiter</h2>
        <p>Jupiter is the largest planet, famous for its Great Red Spot — a massive storm system larger than Earth.</p>
        <ul>
          <li>Gas Giant with no solid surface</li>
          <li>Moons: 95+</li>
          <li>Mass: 318x Earth's</li>
        </ul>
      `
    },
    {
      name: "Saturn",
      image: "images/saturn.jpg",
      description: `
        <h2>Saturn</h2>
        <p>Saturn is a gas giant best known for its beautiful and complex ring system, made of ice and rock fragments.</p>
        <ul>
          <li>Density: less than water</li>
          <li>Moons: 140+ confirmed</li>
          <li>Main rings span 282,000 km</li>
        </ul>
      `
    },
    {
      name: "Uranus",
      image: "images/uranus.jpg",
      description: `
        <h2>Uranus</h2>
        <p>Uranus is unique for rotating on its side, possibly due to a massive collision. It has a bluish hue from methane gas in its atmosphere.</p>
        <ul>
          <li>Discovered in 1781</li>
          <li>Coldest atmosphere: -224°C</li>
          <li>27 known moons</li>
        </ul>
      `
    },
    {
      name: "Neptune",
      image: "images/neptune.jpg",
      description: `
        <h2>Neptune</h2>
        <p>Neptune is a dark, icy gas giant with supersonic winds and storms. It was discovered via mathematical predictions.</p>
        <ul>
          <li>Moons: 14 (largest: Triton)</li>
          <li>Fastest winds: ~2,100 km/h</li>
          <li>Orbits the Sun every 165 years</li>
        </ul>
      `
    }
  ];

  let currentIndex = 0;
  const container = document.createElement("div");
  container.className = "planet-page";
  document.body.innerHTML = "";
  document.body.appendChild(container);

  function showPage(index) {
    container.innerHTML = `
      <div class="image-container">
        <img src="${pages[index].image}" alt="${pages[index].name}" class="planet-image" />
      </div>
      <div class="description">${pages[index].description}</div>
    `;
  }

  showPage(currentIndex);

  container.addEventListener("click", () => {
    const desc = container.querySelector(".description");
    desc.classList.toggle("show");
  });

  container.addEventListener("touchstart", handleTouchStart, false);
  container.addEventListener("touchmove", handleTouchMove, false);

  let xDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
  }

  function handleTouchMove(evt) {
    if (!xDown) return;
    const xUp = evt.touches[0].clientX;
    const xDiff = xDown - xUp;

    if (xDiff > 50) {
      currentIndex = (currentIndex + 1) % pages.length;
      showPage(currentIndex);
    } else if (xDiff < -50) {
      currentIndex = (currentIndex - 1 + pages.length) % pages.length;
      showPage(currentIndex);
    }
    xDown = null;
  }
});
