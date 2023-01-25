const express = require("express");
const cors = require("cors");

const port = 4000;
const app = express();
app.use(cors());

//This is Backend router
//API access point interface
app.get("/products", (request, response) => {
  console.log("Get products request sent");
  response.json(products);
});
app.get("/users", (request, response) => {
  console.log("Get users request sent");
  response.status(200).send("Users Response hiilee Hello server");
});

//
app.listen(port, () => {
  console.log(`Server is starting in ${port} port`);
});

const products = [
  {
    description:
      "Customize a Samsung Bespoke 3- or 4-door French door refrigerator or 4-Door Flex refrigerator with panels available in multiple colors and finishes. Plus, shop for matching appliances.",
    spec: [{ height: "69 7/8 inches" }, { width: "35 3/4 inches" }],
    name: "4-Door Flex",
    id: "a4bbe2cc",
    image:
      "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/090321/rs22t5561sr/RS22T5561SR_01_SIlver_samsung.jpg?$product-details-jpg$",
    price: 12222,
    stock: 12,
    sale: 23,
    category: "appliances",
  },
  {
    name: "HP Elitebook 840",
    spec: [
      { DisplaySize: '14"', CPU: "i5-6300U 2,4 GHZ" },
      { HardDrive: "1Tb SSD" },
      { RAM: "16GB" },
    ],
    id: "ea5e3b6c",
    image: "https://i.ebayimg.com/images/g/E8wAAOSwO9Bjmd1t/s-l1600.jpg",
    description:
      "Used: An item that has been used previously. The item may have some signs of cosmetic wear, but is fully operational and functions as intended. This item may be a floor model or store return that has been used. See the seller’s listing for full details and description of any imperfections. ",
    price: 180,
    stock: 29,
    sale: 0,
    category: "computers & tablets",
  },
  {
    name: "HP Probook 430",
    spec: [
      { DisplaySize: '13"' },
      { CPU: "i5-8250U 2,4 GHZ" },
      { HardDrive: "256Gb SSD" },
      { RAM: "8GB" },
    ],
    id: "bf3e8ab6",
    image: "https://i.ebayimg.com/images/g/F2oAAOSwbxBimCXu/s-l1600.jpg",
    description:
      "Touch Convertible Laptop AMD. 1 year Warranty. Free and fast delivery.",
    price: 265,
    stock: 2,
    sale: 15,
    category: "computers & tablets",
  },
  {
    name: "Acer Spin 3",
    spec: [
      {
        DisplaySize: '14"',
        CPU: "i5-8250U 2,4 GHZ",
        HardDrive: "512Gb SSD",
        RAM: "8GB",
      },
    ],
    id: "0bd16f1e",
    image: "https://i.ebayimg.com/images/g/YLkAAOSwKjpjpOdr/s-l1600.jpg",
    description:
      "Touch Convertible Laptop AMD. 1 year Warranty. Free and fast delivery.",
    price: 220,
    stock: 12,
    sale: 10,
    category: "computers & tablets",
  },
  {
    description:
      "The iPad is a touchscreen tablet PC made by Apple . The original iPad debuted in 2010. Apple has three iPad product lines: iPad, iPad mini and iPad Pro. All models are available in silver, gray and gold. They run Apple's iOS mobile operating system and have Wi-Fi connectivity with optional 4G capabilities.",
    spec: [
      { display: "17^" },
      { resolution: "2360 x 1640" },
      { storage: "16gb" },
    ],
    name: "iPad 10",
    id: "a4bbe60a",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5200/5200904_sd.jpg;maxHeight=640;maxWidth=550",
    price: 599,
    stock: 13,
    sale: 0,
    category: "computers & tablets",
  },
  {
    description: "",
    spec: "[{capacity: “0.8 cubic feet”},{color:”Brushed Stainless Steel”}]",
    name: "Air fryer",
    id: "e6518a42",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412355_sd.jpg;maxHeight=400;maxWidth=600",
    price: 122,
    stock: 120,
    sale: 10,
    category: "appliances",
  },
  {
    description:
      "Redmi PadAll in one, pad for fun90Hz buttery smooth displayHigh-performance MediaTek Helio G99Long-lasting 8000mAh batteryFlagship-level unibody design",
    spec: [
      "{Size: 10.61 display}",
      " {Resolution: 1200 x 2000}",
      "{Refresh rate: 90Hz}",
      "{Brightness : 400nits (typ)}",
    ],
    name: "Redmi Pad",
    id: "",
    image:
      "https://i02.appmifile.com/84_operator_sg/13/09/2022/972447360327e0954a43fb47c2b84e68.png?f=webp",
    price: 439,
    stock: 247,
    sale: 20,
    category: "pad",
  },
  {
    description:
      "As we said a moment ago, our favorite laptop features a 13.3″ inch touchscreen. Xiaomi has gone all out, as it is not only of high definition screen of 360° rotation, but it is also Super Retina OLED with a resolution of 2880 x 1800.It has a brightness of up to 600 nits and a contrast ratio of 1000000:1, with a refresh rate of 90Hz, Adjustable to 60Hz if desired via the Fn + S keyboard combination. The above resolution translates to 255 PPI with a display ratio of 16:10. Compatible with DC attenuation * TÜV Rheinland hardware low blue light certification *, Eye Care Display certification, Dolby Vision certification, VESA DisplayHDR 500 High Standard certification.",
    spec: [
      { MemoryCapacity: "Main memory allocated memory" },
      { DisplaySize: "13.3" },
      { DisplayRatio: "16:10" },
      { Type: "ConvertibleDimensions (WxHxD) 296.5mm long Width 205.5mm" },
      { OperatingSystem: "Windows 10,Windows 11" },
      { Origin: " Mainland ChinaGraphics " },
      { CardModel: "Intel Iris Xe Graphics" },
      { HardDriveType: "SSDScreen Refresh" },
      { Rate: "60Hz" },
      { HardDrive: "512GBWeight " },
      { CPUl: "Intel Core i7-1250U" },
      { PanelType: "OLED" },
      { RAM: "16GB" },
      { BodyMaterial: "MetalThickness" },
      { DriveType: "NoneWireless" },
      { Interfaces: "Bluetooth 5.2" },
      { DisplayResolution: "2880*1800Keyboard" },
    ],
    name: "Xiaomi Mi Book Air 13",
    id: "",
    image:
      "https://www.xiaomihome.global/wp-content/uploads/2022/11/xiaomi-book-air-13-2022-cover-1.webp",
    price: 1200,
    stock: 10,
    sale: 247,
    category: "laptop",
  },

  {
    description: "Philips Hue smart LED bulbs",
    spec: [{ type: "A19" }, { wattage: "9.5W" }, { output: "800 Lumens" }],
    name: "LED bulbs",
    id: "8bf7f5fc-92f3-11ed-a1eb-0242ac120002",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.templeandwebster.com.au%2FE27-A60-LED-Bulbs-112-ENLT1039.html&psig=AOvVaw07fx2Vwb6Buol-upof-vqS&ust=1674013965659000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjP_pHazfwCFQAAAAAdAAAAABAJ",
    price: 80,
    stock: 4,
    sale: 2,
    category: "appliances",
  },

  {
    description: "Philips HD6975/00 25 Litre Digital Oven Toaster Grill",
    spec: [
      { capacity: "25 Liters" },
      { wattage: "1500W" },
      { weight: "6380 Grams" },
      { finishType: "HD6975/00" },
    ],
    name: "Philips Oven",
    id: "8bf7f8d6-92f3-11ed-a1eb-0242ac120002",
    image: "​​https://m.media-amazon.com/images/I/618O0ywM1SL._SX522_.jpg",
    price: 7920,
    stock: 164,
    sale: 27,
    category: "appliances",
  },

  {
    description: "XP-PEN Artist12 11.6 Inch FHD Drawing Monitor",
    spec: [
      { brand: "XP-PEN" },
      { model: "Artist12" },
      { screen: "11.6 Inch" },
      { connectivity: "USB/HDMI" },
      { accessories: "PN06 Battery-Free Pen" },
    ],
    name: "Sketch Pad",
    id: "9afc4a40-92f7-11ed-a1eb-0242ac120002",
    image: "​​https://m.media-amazon.com/images/I/61sC5JwNrpL._AC_SX679_.jpg",
    price: 215.99,
    stock: 15,
    sale: 12,
    category: "computers & tablets",
  },
  {
    description:
      "Apple 20W USB-C Power Adapter - iPhone Charger with Fast Charging Capability, Type C Wall Charger",
    spec: [
      { brand: "XP-PEN" },
      { model: "Artist12" },
      { screen: "11.6 Inch" },
      { connectivity: "USB/HDMI" },
      { accessories: "PN06 Battery-Free Pen" },
    ],
    name: "Charger",
    id: "9c7a554c",
    image: "",
    price: 1342,
    stock: 122,
    sale: 23,
    category: "Apple",
  },
  {
    description:
      "Beats Solo3 Wireless supports spatial audio for immersive music – delivering a surround sound experience that you can take with you anywhere.*",
    spec: [
      { length: "6.9 in. / 17.7 cm" },
      { model: "Beats solo3" },
      { connectivity: "Bluetooth/Wireless" },
    ],
    name: "Beats Solo3 Headphones",
    id: "4ab6599a",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fproduct%2FMX432LL%2FA%2Fbeats-solo3-wireless-headphones-the-beats-icon-collection-matte-black&psig=AOvVaw2tl_AIH02av1Ou9DkxSqTX&ust=1673669056089000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCPzZ7Vw_wCFQAAAAAdAAAAABAE",
    price: 200,
    stock: 60,
    sale: 10,
    category: "headphones",
  },
  {
    description:
      "Introducing the newest member of the Nintendo Switch family Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch – OLED Model system. In addition to a new screen with vivid colors and sharp contrast, the Nintendo Switch – OLED Model includes a wide adjustable stand for more comfortable viewing angles, a dock with a wired LAN port for TV mode (LAN cable sold separately), 64GB of internal storage, and enhanced audio in Handheld and Tabletop modes using the system’s speakers. *There may be software where the game experience may differ due to the new capabilities of the system, such as the larger screen size.",
    spec: [
      { storage: "Save games to your system with 64 GB of internal storage" },
      {
        audio:
          "Enjoy enhanced sound from the system’s onboard speakers when playing in Handheld and Tabletop modes.",
      },
    ],
    name: "Nintendo Switch - OLED Model/White Joy-Con",
    id: "6a411100",
    image: "https://m.media-amazon.com/images/I/51yJ+OqktYL.jpg",
    price: 54,
    stock: 7,
    sale: 5,
    category: "gaming console",
  },
  {
    description:
      "Fast-heating electric glass carafe kettle for quickly and conveniently boiling water",
    spec: [{ height: "8.27 inches" }, { audio: "4.92inches" }],
    name: "Basics Electric Glass and Steel Kettle",
    id: "92fadc2a",
    image: "https://m.media-amazon.com/images/I/61JS5e82ayL._AC_SX679_.jpg",
    price: 24,
    stock: 17,
    sale: 15,
    category: "appliance",
  },
  {
    description:
      "Celestron PowerSeeker 127EQ Telescope - 20mm Erect-Image Eyepiece - 4mm Eyepiece - 3x Barlow Lens - Star Pointer Finder - Equatorial Head - 2x Slow-Motion Cables - Adjustable-Height Tripod - Counterweight Bar - 7.5 lbs Counterweight - Download Code - Original Box",
    spec: [{ height: "8.46 inches" }, { width: "16.73 inches" }],
    name: "​​Celestron - PowerSeeker 127EQ Telescope",
    id: "39b365d6",
    image: "https://m.media-amazon.com/images/I/61Squ7U2zRL._AC_SX679_.jpg",
    price: 169,
    stock: 9,
    sale: 23,
    category: "telescope",
  },
  {
    description:
      "2022 Apple 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray (6th Generation)",
    spec: [
      {
        Brand: "Apple",
        Model_Name: "IPad",
        Memory_Storage_Capacity: "128GB",
        Color: "Space Gray",
        Screen_Size: "12.9 inches",
        Display_Resolution: "2732 x 2048 Pixels",
        Network: "WiFi",
      },
    ],
    name: "Apple IPad Pro 2022 12.9 inches",
    id: "0ed4e2d2",
    image: "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg",
    price: 1094,
    stock: 3,
    sale: 1,
    category: "Apple",
  },
  {
    description:
      "SAMSUNG Galaxy Tab A8 10.5” 32GB Android Tablet w/ LCD Screen, Long Lasting Battery, Kids Content, Smart Switch, Expandable Memory, US Version, Dark Gray",
    spec: [
      {
        Brand: "Samsung",
        Series: "Galaxy Tab A8",
        Memory_Storage_Capacity: "32GB",
        Color: "Dark Gray",
        Screen_Size: "10.5 inches",
        Display_Resolution: "1920 x 1200 Pixels",
        Network: "WiFi",
      },
    ],
    name: "Galaxy Tab A8",
    id: "0ed4e412",
    image: "https://m.media-amazon.com/images/I/61b2BrYtVGL._AC_SX679_.jpg",
    price: 189,
    stock: 22,
    sale: 0.4,
    category: "tablets",
  },
  {
    description:
      "SAMSUNG Galaxy Tab S8+ Android Tablet, 12.4” Large AMOLED Screen, 512GB Storage, Wi-Fi 6E, Ultra Wide Camera, S Pen Included, Long Lasting Battery, Graphite",
    spec: [
      {
        Brand: "Samsung",
        Series: "Galaxy Tab S8 plus",
        Memory_Storage_Capacity: "512GB",
        Color: "Graphite",
        Screen_Size: "12.4 inches",
        Display_Resolution: "2800 x 1752 Pixels",
        Network: "WiFi 6E",
      },
    ],
    name: "Galaxy Tab S8 Plus",
    id: "0ed4e520",
    image: "https://m.media-amazon.com/images/I/81d74GHCPEL._AC_SX679_.jpg",
    price: 1099,
    stock: 3,
    sale: 0.2,
    category: "tablets",
  },
  {
    description:
      "Microsoft Surface Pro 9 (2022), 13 2-in-1 Tablet & Laptop, Thin & Lightweight, Intel 12th Gen i7 Fast Processor for Multi-Tasking, 16GB RAM, 256GB Storage with Windows 11, Graphite",
    spec: [
      {
        Brand: "Microsoft",
        Series: "Surface Pro",
        CPU: "Intel Evo i7-2640M",
        RAM: "16GB",
        Memory_Storage_Capacity: "256GB",
        Color: "Graphite",
        Screen_Size: "13 inches",
        Graphics_Coprocessor: "Intel Iris Xe Graphics",
        Network: "WiFi 6E",
      },
    ],
    name: "Surface Pro",
    id: "0ed4e73c",
    image: "https://m.media-amazon.com/images/I/51qmNla8aTL._AC_SX679_.jpg",
    price: 1399.99,
    stock: 5,
    sale: 0.1,
    category: "tablets",
  },
  {
    description:
      "Microsoft Surface Pro 9 (2022), 13 2-in-1 Tablet & Laptop, Thin & Lightweight, Intel 12th Gen i7 Fast Processor for Multi-Tasking, 16GB RAM, 256GB Storage with Windows 11, Forest",
    spec: [
      {
        Brand: "Microsoft",
        Series: "Surface Pro",
        CPU: "Intel Evo i7-2640M",
        RAM: "16GB",
        Memory_Storage_Capacity: "256GB",
        Color: "Forest",
        Screen_Size: "13 inches",
        Graphics_Coprocessor: "Intel Iris Xe Graphics",
        Network: "WiFi 6E",
      },
    ],
    name: "Surface Pro",
    id: "0ed4e836",
    image: "https://m.media-amazon.com/images/I/51D3B+8L7DL._AC_SX679_.jpg",
    price: 1399.99,
    stock: 4,
    sale: 0.1,
    category: "tablets",
  },
];
