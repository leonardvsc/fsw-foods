import { useContext, useState } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/calculateProductTotalPrice";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { createOrder } from "../_actions/order";
import { OrderStatus } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

const Cart = () => {
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isConfirmationDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const { data } = useSession();
  const { products, subtotalPrice, totalPrice, totalDiscounts, clearCart } =
    useContext(CartContext);

  const handleFinishOrderClick = async () => {
    if (!data?.user) return;
    const restaurant = products[0].restaurant;

    try {
      setIsSubmitLoading(true);

      await createOrder({
        deliveryAddress: "Endereço de entrega",
        subtotalPrice,
        totalDiscounts,
        totalPrice,
        deliveryFee: restaurant.deliveryFee,
        deliveryTimeMinutes: restaurant.deliveryTimeMinutes,
        restaurant: {
          connect: { id: restaurant.id },
        },
        status: OrderStatus.PENDING,
        user: {
          connect: { id: data.user.id },
        },
      });

      clearCart();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  return (
    <>
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

                    <span>{formatCurrency(subtotalPrice)}</span>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Entrega</span>

                    {Number(products?.[0].restaurant.deliveryFee) === 0 ? (
                      <span className="uppercase text-primary">Gratis</span>
                    ) : (
                      formatCurrency(
                        Number(products?.[0].restaurant.deliveryFee),
                      )
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
            <Button
              className="my-6 w-full"
              onClick={() => setIsConfirmDialogOpen(true)}
              disabled={isSubmitLoading}
            >
              {isSubmitLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Finalizar pedido
            </Button>
          </>
        ) : (
          <h2 className="font-medium text-muted-foreground">
            Sua sacola está vazia
          </h2>
        )}
      </div>

      <AlertDialog
        open={isConfirmationDialogOpen}
        onOpenChange={setIsConfirmDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja realizar o pedido?</AlertDialogTitle>
            <AlertDialogDescription>
              Ao realizar o seu pedido, você concorda com os termos e condições
              da nossa política de privacidade.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleFinishOrderClick}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Cart;
