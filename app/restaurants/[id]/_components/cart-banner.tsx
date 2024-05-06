"use client";

import Cart from "@/app/_components/cart";
import { Button } from "@/app/_components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { CartContext } from "@/app/_context/cart";
import { formatCurrency } from "@/app/_helpers/calculateProductTotalPrice";
import { Restaurant } from "@prisma/client";
import { useContext } from "react";

interface CartBannerProps {
  restaurant: Pick<Restaurant, "id">;
}

const CartBanner = ({ restaurant }: CartBannerProps) => {
  const { products, totalPrice, totalQuantity } = useContext(CartContext);

  const restaurantHasProductsOnCart = products.some(
    (product) => product.restaurantId === restaurant.id,
  );

  if (!restaurantHasProductsOnCart) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full border-t border-solid border-gray-300 bg-white p-5 pt-3">
      <div className="flex items-center justify-between">
        {/* PREÇO */}
        <div>
          <span className="block text-sm text-muted-foreground">
            Total sem entrega
          </span>
          <h3 className="text-xl font-semibold tracking-tighter">
            {formatCurrency(totalPrice)}{" "}
            <span className="text-xs tracking-normal text-muted-foreground">
              / {totalQuantity} {totalQuantity > 1 ? "itens" : "item"}
            </span>
          </h3>
        </div>

        {/* BOTÃO */}
        <Sheet>
          <SheetTrigger>
            <Button>Ver Sacola</Button>
          </SheetTrigger>
          <SheetContent className="w-[80vw]">
            <SheetHeader>
              <SheetTitle className="text-left">Sacola</SheetTitle>
            </SheetHeader>

            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default CartBanner;
