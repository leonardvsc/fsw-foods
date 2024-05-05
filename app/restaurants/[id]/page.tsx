import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import RestaurantImage from "./_components/restaurant-image";
import Image from "next/image";

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
  });

  if (!restaurant) {
    return notFound();
  }
  return (
    <div>
      <RestaurantImage restaurant={restaurant} />

      <div className="flex items-center justify-between px-5 pt-5">
        {/* TITUTO */}
        <div className="flex items-center gap-1">
          <div className="relative h-8 w-8">
            <Image
              className="rounded-full object-cover"
              src={restaurant.imageUrl}
              alt={restaurant.name}
              fill
            />
          </div>
          <h1 className="text-2xl font-semibold tracking-[-0.4px]">
            {restaurant.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
