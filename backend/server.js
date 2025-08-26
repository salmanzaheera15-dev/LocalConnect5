const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let vendors = [];
let products = [];
let orders = [];
let idCounter = 1;

// Vendors
app.get("/vendors", (req,res)=>res.json(vendors));
app.post("/vendors",(req,res)=>{
  const v = { id: idCounter++, name: req.body.name };
  vendors.push(v);
  res.json(v);
});

// Products
app.get("/products",(req,res)=>res.json(products));
app.post("/products",(req,res)=>{
  const p = { id: idCounter++, name: req.body.name, price: req.body.price };
  products.push(p);
  res.json(p);
});

// Orders
app.get("/orders",(req,res)=>res.json(orders));
app.post("/orders",(req,res)=>{
  const o = { id: idCounter++, productId: req.body.productId };
  orders.push(o);
  console.log("🔔 New order received:", o);
  res.json(o);
});

app.listen(4000, ()=>console.log("Backend running on http://localhost:4000"));
