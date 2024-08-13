// import { createOrder } from "./order/OrderFunctions";
// import { addOrderToService } from "./order/OrderServiceFunctions";
// import { createProduct } from "./product/ProductFunctions";
// import { addProductToService } from "./product/productServiceFunctions";

import { createOrder, addOrderToService } from "./order";
import { createProduct, addProductToService } from "./product";

createOrder(["Bleistift", "Kugelschreiber", "Notizblock"]);
createProduct("Erdbeereeis", 1.8);
addProductToService("Eis verkaufen", "Erdbeereis");
addOrderToService("Eis verkaufen", "12345");
