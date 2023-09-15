const mongoose = require("mongoose");
const Product = require("./models/product");
const products = [
  {
    name: "drone",
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    price: 150000,
    desc: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.",
  },
  {
    name: "macbook",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5H7inY9J3CV5Ft9zud3jHH7Ed5PDpJm3PxNHrN1XaaexfBCtl38br-k8ex-yjeYjyZo&usqp=CAU",
    price: 150000,
    desc: "The MacBook was discontinued from February 2012 until March 2015, when a new model featuring an ultraportable design and an all-metal enclosure was introduced. It was again discontinued in July 2019 following a price reduction of the 3rd generation MacBook Air and discontinuation of the 2nd generation model.",
  },
  {
    name: "hp laptop",
    img: "https://images.unsplash.com/photo-1618410320928-25228d811631?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHAlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    price: 70000,
    desc: "HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage.",
  },
  {
    name: "i phone",
    img: "https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    price: 65000,
    desc: "Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email",
  },
  {
    name: "DELL Laptop",
    img: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/global-spi/ng/notebook-latitude-14-3420-campaign-hero-504x350-ng.psd?fmt=jpg&wid=504&hei=334",
    price: 90000,
    desc: "Dell laptops are meant for every kind of user starting from budget Dells, gaming Dells, 2-in-1 Dells, and all other kinds of Dell you can imagine. They're included amongst the best laptops ready and come with a variety of power, excellent feature set, and classic design that set them apart from any other laptop in the market.",
  },
  {
    name: "shoes",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    price: 8000,
    desc: ": an outer covering for the human foot typically having a thick or stiff sole with an attached heel and an upper part of lighter material (such as leather) b. : a metal plate or rim for the hoof of an animal. 2. : something resembling a shoe in function or placement.",
  },
  {
    name: "t-shirt",
    img: "https://media.istockphoto.com/id/1286538528/photo/stylish-blonde-girl-wearing-black-t-shirt-and-glasses-posing-against-street-urban-clothing.jpg?s=612x612&w=0&k=20&c=SG1_Dzz0lvRWT9FtFvr0DrrRu1R89Jqv4OJDcFxxNL8=",
    price: 800,
    desc: "a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  },
  {
    name: "wireless mouse",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    price: 3000,
    desc: "mouse specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips",
  },
  {
    name: "mustang Gt",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    price: 9000000,
    desc: " very nice car specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips",
  },
  {
    name: "samsung",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    price: 30000,
    desc: "Samsung specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips",
  },
  {
    name: "boat headphone",
    img: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    price: 2500,
    desc: "boat headphone is very good specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips",
  },
  {
    name: "modern chair",
    img: "https://plus.unsplash.com/premium_photo-1673014201385-115f57893c99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    price: 15000,
    desc: "very comfartable chair specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips",
  },
];

const seedDB = async () => {
  await Product.insertMany(products);
  console.log("DB Seeded");
};
module.exports = seedDB;
