"use strict";

const pack_price = 22;
const extra_hop = 13;

let showprice_pack = document.getElementById("price1");
if(showprice_pack)showprice_pack.innerHTML = `${pack_price}`;

let showprice_pack2 = document.getElementById("price2");
if(showprice_pack2)showprice_pack2.innerHTML = `${pack_price}`;

let price_rhi1 = document.getElementById("price-rhi1");
if(price_rhi1)price_rhi1.innerHTML = `${extra_hop}`;

let price_rhi2 = document.getElementById("price-rhi12");
if(price_rhi2)price_rhi2.innerHTML = `${extra_hop}`;