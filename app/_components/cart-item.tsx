import Image from "next/image";
import { CartContext, CartProduct } from "../_context/cart";
import {
  calculateProductTotalPrice,
  formatCurrency,
} from "../_helpers/calculateProductTotalPrice";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  cartProduct: CartProduct;
}

const CartItem = ({ cartProduct }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseQuantityClick = () =>
    decreaseProductQuantity(cartProduct.id);

  const handleIncreaseQuantityClick = () =>
    increaseProductQuantity(cartProduct.id);

  const handleRemoveProductClick = () => {
    removeProductFromCart(cartProduct.id);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        {/* IMAGEM E INFO */}
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 ">
            <Image
              src={cartProduct.imageUrl}
              alt={cartProduct.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-xs">{cartProduct.name}</h3>

            <div className="flex items-center gap-1">
              <h4 className="text-sm font-semibold">
                {formatCurrency(
                  calculateProductTotalPrice(cartProduct) *
                    cartProduct.quantity,
                )}
              </h4>
              {cartProduct.discountPercentage > 0 && (
                <span className="text-xs text-muted-foreground line-through">
                  {formatCurrency(
                    Number(cartProduct.price) * cartProduct.quantity,
                  )}
                </span>
              )}
            </div>

            {/* QUANTIDADE */}
            <div className="flex items-center gap-3 text-center">
              <Button
                size={"icon"}
                variant={"ghost"}
                className="h-7 w-7 border border-solid border-gray-200 bg-white text-black"
                onClick={handleDecreaseQuantityClick}
              >
                <ChevronLeftIcon size={16} />
              </Button>
              <span className="block w-3 text-xs">{cartProduct.quantity}</span>
              <Button
                size={"icon"}
                className="h-7 w-7 bg-primary"
                onClick={handleIncreaseQuantityClick}
              >
                <ChevronRightIcon size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* BOTÃO DE DELETAR */}
        <Button
          size={"icon"}
          variant={"ghost"}
          className="h-8 w-8 border border-solid border-gray-200 bg-white text-black"
          onClick={handleRemoveProductClick}
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.5H14"
              stroke="#323232"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6667 4.5V13.8333C12.6667 14.5 12 15.1667 11.3334 15.1667H4.66671C4.00004 15.1667 3.33337 14.5 3.33337 13.8333V4.5"
              stroke="#323232"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33337 4.49992V3.16659C5.33337 2.49992 6.00004 1.83325 6.66671 1.83325H9.33337C10 1.83325 10.6667 2.49992 10.6667 3.16659V4.49992"
              stroke="#323232"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66663 7.83325V11.8333"
              stroke="#323232"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33337 7.83325V11.8333"
              stroke="#323232"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </div>
    </>
  );
};

export default CartItem;
