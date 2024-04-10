import { OrderItem, Order } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";
type OrderType = {
  items: OrderItem[];
};

export const OrderContext = createContext<OrderType>({
  items: []
});


const OrderProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<OrderItem[]>([]);
  

  return (
    <OrderContext.Provider value={{ items }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;

export const useOrder = () => useContext(OrderContext);
