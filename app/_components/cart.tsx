import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/calculateProductTotalPrice";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Cart = () => {
  const { products, subTotalPrice, totalPrice, totalDiscounts } =
    useContext(CartContext);
  return (
    <div className="flex h-full flex-col pt-6">
      {products.length > 0 ? (
        <>
          <div className="flex-auto space-y-4 overflow-y-scroll">
            {products.map((product) => (
              <CartItem key={product.id} cartProduct={product} />
            ))}
          </div>

          <div className="my-2 h-px bg-muted-foreground "></div>
          {/* TOTAIS  */}
          <div className="w-full pt-2">
            <Card>
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Subtotal</span>

                  <span>{formatCurrency(subTotalPrice)}</span>
                </div>

                <Separator />

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Entrega</span>

                  {Number(products?.[0].restaurant.deliveryFee) === 0 ? (
                    <span className="uppercase text-primary">Gratis</span>
                  ) : (
                    formatCurrency(Number(products?.[0].restaurant.deliveryFee))
                  )}
                </div>

                <Separator />

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Descontos</span>

                  <span>- {formatCurrency(totalDiscounts)}</span>
                </div>

                <Separator />

                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Total</span>

                  <span>{formatCurrency(totalPrice)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FINALIZAR PEDIDO */}
          <Button className="my-6 w-full">Finalizar pedido</Button>
        </>
      ) : (
        <h2 className="font-medium text-muted-foreground">
          Sua sacola está vazia
        </h2>
      )}
    </div>
  );
};

export default Cart;
