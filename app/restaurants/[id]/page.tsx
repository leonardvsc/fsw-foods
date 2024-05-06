import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import RestaurantImage from "./_components/restaurant-image";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import DeliveryInfo from "@/app/_components/deliveryInfo";
import ProductList from "@/app/_components/product-list";
import CartBanner from "./_components/cart-banner";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

const RestaurantPage = async ({ params: { id } }: RestaurantPageProps) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id,
    },
    include: {
      categories: {
        orderBy: {
          name: "asc",
        },
        include: {
          products: {
            where: {
              restaurantId: id,
            },
            include: {
              restaurant: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
      products: {
        take: 10,
        include: {
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <RestaurantImage restaurant={restaurant} />

      <div className="relative z-50 mt-[-1.5rem] flex items-center justify-between rounded-t-3xl bg-white px-5 pt-5 ">
        {/* TITUTO */}
        <div className="flex items-center gap-[0.375rem]">
          <div className="relative h-8 w-8">
            <Image
              className="rounded-full object-cover"
              src={restaurant.imageUrl}
              alt={restaurant.name}
              fill
            />
          </div>
          <h1 className="text-xl font-semibold tracking-[-0.4px]">
            {restaurant.name}
          </h1>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-[3px] rounded-full bg-foreground px-[14px] py-[8px] text-white">
          <StarIcon className="fill-yellow-400 text-yellow-500" size={12} />
          <span className="text-xs font-semibold">5.0</span>
        </div>
      </div>

      {/* PREÇO DE ENTREGA E TEMPO DE ENTREGA */}
      <div className="px-5">
        <DeliveryInfo restaurant={restaurant} />
      </div>

      {/* CATEGORIAS DO RESTAURANTE */}
      <div className="mt-3 flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        {restaurant.categories.map((category) => (
          <div
            className="min-w-[167px] rounded-md bg-[#F4F4F5] p-2 text-center"
            key={category.id}
          >
            <span className="block text-xs text-muted-foreground">
              {category.name}
            </span>
          </div>
        ))}
      </div>

      {/* PRODUTOS MAIS PEDIDOS DO RESTAURANTE */}
      <div className="mt-6 space-y-4">
        {/* TODO: Mostrar produtos mais pedidos quando implementarmos realização de pedidos */}
        <h2 className="px-5 text-lg font-semibold tracking-[-0.4px]">
          Mais pedidos
        </h2>
        <ProductList products={restaurant.products} />
      </div>

      {restaurant.categories.map((category) => (
        <div className="my-6 space-y-4" key={category.id}>
          <h2 className="px-5 text-lg font-semibold tracking-[-0.4px]">
            {category.name}
          </h2>
          <ProductList products={category.products} />
        </div>
      ))}

      <CartBanner restaurant={restaurant} />
    </div>
  );
};

export default RestaurantPage;
