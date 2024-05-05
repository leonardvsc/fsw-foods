"use client";

import DeliveryInfo from "@/app/_components/deliveryInfo";
import DiscountBadge from "@/app/_components/discount-badge";
import ProductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import {
  calculateProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/calculateProductTotalPrice";
import { Prisma } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>;
  complementaryProducts: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>[];
}

const ProductDetails = ({
  product,
  complementaryProducts,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantityClick = () =>
    setQuantity((currentState) => currentState + 1);
  const handleDecreaseQuantityClick = () =>
    setQuantity((currentState) => {
      if (currentState === 1) return 1;
      return currentState - 1;
    });

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl bg-white py-5">
      {/* RESTAURANTE */}
      <div className="flex items-center gap-[0.375rem] px-5">
        <div className="relative h-6 w-6">
          <Image
            className="rounded-full object-cover"
            src={product?.restaurant.imageUrl}
            alt={product.restaurant.name}
            fill
          />
        </div>

        <span className="text-xs font-medium text-muted-foreground">
          {product?.restaurant.name}
        </span>
      </div>

      {/* NOME DO PRODUTO */}
      <h1 className="mb-2 px-5 pt-2 text-xl font-semibold tracking-[-0.4px]">
        {product.name}
      </h1>

      {/* PREÇO DO PRODUTO E QUANTIDADE */}
      <div className="flex justify-between px-5">
        {/* PREÇO COM DESCONTO */}
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">
              {formatCurrency(calculateProductTotalPrice(product))}
            </h2>
            {product.discountPercentage > 0 && (
              <DiscountBadge product={product} />
            )}
          </div>

          {/* PREÇO ORIGINAL */}
          {product.discountPercentage > 0 && (
            <span className="block text-sm text-muted-foreground">
              De: {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>

        {/* QUANTIDADE */}
        <div className="flex items-center gap-3 text-center">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="border border-solid border-gray-200 bg-white text-black"
            onClick={handleDecreaseQuantityClick}
          >
            <ChevronLeftIcon size={20} />
          </Button>
          <span className="w-4">{quantity}</span>
          <Button
            size={"icon"}
            className="bg-primary"
            onClick={handleIncreaseQuantityClick}
          >
            <ChevronRightIcon size={20} />
          </Button>
        </div>
      </div>

      {/* DADOS DA ENTREGA */}
      <div className="px-5">
        <DeliveryInfo restaurant={product.restaurant} />
      </div>

      {/* DESCRICÃO */}
      <div className="mt-6 space-y-2 px-5">
        <h3 className="font-semibold">Sobre</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>

      {/* SUCOS */}
      <div className="mt-6 space-y-2 px-5">
        <h3 className="font-semibold">Sucos</h3>
        <ProductList products={complementaryProducts} />
      </div>

      {/* BOTÃO DE ADICIONAR AO CARRINHO */}
      <div className="mt-6 px-5">
        <Button className="w-full font-semibold">Adicionar à sacola</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
