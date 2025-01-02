const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

class Transport {
  constructor(item) {
    this.id = item.id;
    this.type = item.type;
    this.brand = item.brand;
    this.price = item.price;
    this.image = item.image;
  }
  getInfo() {
    return ` Brand: ${this.brand} (type: ${this.type})`;
  }
  getPrice() {
    return `Price: ${this.price}.toLocaleString("en-US") $`;
  }
}

class Car extends Transport {
  constructor(item) {
    super(item);
    this.doorsCount = item.doors;
  }

  getDoorsCount() {
    return `Doors Count: ${this.doorsCount}`;
  }
}

class Bike extends Transport {
  constructor(item) {
    super(item);
    this.maxSpeed = item.maxSpeed;
  }

  getMaxSpeed() {
    return `Max Speed: ${this.maxSpeed} km/h`;
  }
}

const transports = data.map((item) => {
  if (item.type === "car") {
    return new Car(item);
  } else if (item.type === "bike") {
    return new Bike(item);
  }
  return new Transport(item);
});

const container = document.getElementById("container");
const li = document.createElement("li");
container.innerHTML = transports
  .map((transport) => {
    return `
        <li class="card">
          <h2 class="card-title">${transport.getInfo()}</h2>
          <p>${transport.getPrice()}</p>
          ${
            transport instanceof Car
              ? `<p>${transport.getDoorsCount()}</p>`
              : transport instanceof Bike
              ? `<p>${transport.getMaxSpeed()}</p>`
              : ""
          }
          <img src="${transport.image}" alt="${transport.brand} ${
      transport.type
    }">
        </li>
      `;
  })
  .join("");
