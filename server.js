const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { response, json } = require("express");
const fs = require("fs");
const e = require("express");
const { request } = require("http");

const port = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

//This is Backend router
//API access point interface
app.get("/products", (request, response) => {
  fs.readFile("./data/products.json", (err, data) => {
    if (err) {
      response.send({ message: err }.status(500));
    } else {
      const products = JSON.parse(data);
      console.log("Get products request sent");
      response.json(products);
    }
  });
});

//id
// app.get("/product/:id", (request, require) => {
//   const prodId = request.params.id;
//   const foundProduct = products.find((product) => product.id === prodId);
//   if (foundProduct) {
//     response.json(foundProduct);
//   } else {
//     response.status(404).send({ message: "Product not found" });
//   }
// });

//Post req
app.post("/product", (request, response) => {
  console.log("Post req orj irlee: ", request.body);
  fs.readFile("./data/products.json", (error, data) => {
    if (error) {
      response.status(500).send({ message: error });
    } else {
      const products = JSON.parse(data);
      const newProduct = {
        id: (products.length + 1).toString(),
        ...request.body,
      };
      products.push(newProduct);
      fs.writeFile(
        "./data/products.json",
        JSON.stringify(products),
        (error) => {
          if (error) {
            response.status(500).send({ message: error });
          } else {
            response
              .status(200)
              .status({ message: "Product added successfuly" });
          }
        }
      );
    }
  });
});

//Product delete
app.delete("/products/:id", (request, response) => {
  fs.readFile("./data/products.json", (error, data) => {
    if (error) {
      response.status(500).send({ message: error });
    } else {
      let products = JSON.parse(data);
      let id = request.params.id;
      console.log("Delete huselt orj irlee id: ", id);
      const filter = products.filter((product) => product.id !== id);
      products = filter;
      fs.writeFile(
        "./data/products.json",
        JSON.stringify(products),
        (error) => {
          if (error) {
            response.status(500).send({ message: error });
          } else {
            response
              .status(200)
              .status({ message: "Product added successfully" });
          }
        }
      );
    }
  });

  // console.log("Product: ", products);
});
//APP PUT
app.put("/products/:id", (request, response) => {
  fs.readFile("./data/products.json", (error, data) => {
    if (error) {
      response.status(500).send({ message: error });
    } else {
      //
      let data = JSON.parse(products);
      let product = data.find((product) => product.id == request.params.id);
      data[data.indexOf(product)] = request.body;
      fs.writeFile(
        "./data/products.json",
        JSON.stringify(products),
        (error) => {
          if (error) {
            response.status(500).send({ message: error });
          } else {
            response
              .status(200)
              .status({ message: "Product edited successfully." });
          }
        }
      );
    }
  });
});

//Users
app.get("/users", (request, response) => {
  console.log("Get products huselt orj irsen shhuu bronnj");
  response.send("za oilgoloo");
  response.status(200).send("products bla bla");
  response.json(users);
});

//Orders
app.get("/orders", (request, response) => {
  response.json(orders);
});

//Moderators
app.get("/moderators", (request, response) => {
  response.json(modearators);
});
// app.get("/users", (request, response) => {
//   console.log("Get users request sent");
//   response.status(200).send("Users Response hiilee Hello server");
// });

//
app.listen(port, () => {
  console.log(`Server is started in ${port} port`);
});

const users = [
  {
    userId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    order: "2",
    date: "2023/01/27",
  },
  {
    userId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    order: "2",
    date: "2023/01/27",
  },
  {
    userId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    order: "2",
    date: "2023/01/27",
  },
  {
    userId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    order: "2",
    date: "2023/01/27",
  },
  {
    userId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    order: "2",
    date: "2023/01/27",
  },
  {
    userId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    order: "2",
    date: "2023/01/27",
  },
  {
    userId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    order: "2",
    date: "2023/01/27",
  },
  {
    userId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    order: "2",
    date: "2023/01/27",
  },
  {
    userId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    order: "2",
    date: "2023/01/27",
  },
  {
    userId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    order: "2",
    date: "2023/01/27",
  },
];

const orders = [
  {
    orderNo: "#15358",
    date: "2023/01/27",
    phone: "99999999",
    email: "sra11schi@example.com",
    address: "ХУД 4-р хороо",
    stock: "2",
    price: "1,477,500",
    payment: "Картаар",
  },
  {
    orderNo: "#15358",
    date: "2023/01/27",
    phone: "99999999",
    email: "sra11schi@example.com",
    address: "ХУД 4-р хороо",
    stock: "2",
    price: "1,477,500",
    payment: "Картаар",
  },
  {
    orderNo: "#15358",
    date: "2023/01/27",
    phone: "99999999",
    email: "sra11schi@example.com",
    address: "ХУД 4-р хороо",
    stock: "2",
    price: "1,477,500",
    payment: "Картаар",
  },
  {
    orderNo: "#15358",
    date: "2023/01/27",
    phone: "99999999",
    email: "sra11schi@example.com",
    address: "ХУД 4-р хороо",
    stock: "2",
    price: "1,477,500",
    payment: "Картаар",
  },
  {
    orderNo: "#15358",
    date: "2023/01/27",
    phone: "99999999",
    email: "sra11schi@example.com",
    address: "ХУД 4-р хороо",
    stock: "2",
    price: "1,477,500",
    payment: "Картаар",
  },
  {
    orderNo: "#15358",
    date: "2023/01/27",
    phone: "99999999",
    email: "sra11schi@example.com",
    address: "ХУД 4-р хороо",
    stock: "2",
    price: "1,477,500",
    payment: "Картаар",
  },
  {
    orderNo: "#15358",
    date: "2023/01/27",
    phone: "99999999",
    email: "sra11schi@example.com",
    address: "ХУД 4-р хороо",
    stock: "2",
    price: "1,477,500",
    payment: "Картаар",
  },
  {
    orderNo: "#15358",
    date: "2023/01/27",
    phone: "99999999",
    email: "sra11schi@example.com",
    address: "ХУД 4-р хороо",
    stock: "2",
    price: "1,477,500",
    payment: "Картаар",
  },
  {
    orderNo: "#15358",
    date: "2023/01/27",
    phone: "99999999",
    email: "sra11schi@example.com",
    address: "ХУД 4-р хороо",
    stock: "2",
    price: "1,477,500",
    payment: "Картаар",
  },
  {
    orderNo: "#15358",
    date: "2023/01/27",
    phone: "99999999",
    email: "sra11schi@example.com",
    address: "ХУД 4-р хороо",
    stock: "2",
    price: "1,477,500",
    payment: "Картаар",
  },
];
const modearators = [
  {
    modId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    solditem: "2",
    date: "2023/01/27",
  },
  {
    modId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    solditem: "2",
    date: "2023/01/27",
  },
  {
    modId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    solditem: "2",
    date: "2023/01/27",
  },
  {
    modId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    solditem: "2",
    date: "2023/01/27",
  },
  {
    modId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    solditem: "2",
    date: "2023/01/27",
  },
  {
    modId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    solditem: "2",
    date: "2023/01/27",
  },
  {
    modId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    solditem: "2",
    date: "2023/01/27",
  },
  {
    modId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    solditem: "2",
    date: "2023/01/27",
  },
  {
    modId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    solditem: "2",
    date: "2023/01/27",
  },
  {
    modId: "#15358",
    surname: "Батравдан",
    givenname: "Cарангэрэл",
    email: "sra11schi@example.com",
    phone: "99999999",
    solditem: "2",
    date: "2023/01/27",
  },
];
