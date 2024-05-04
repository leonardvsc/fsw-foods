import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/calculateProductTotalPrice";
import { Button } from "./ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="w-[266px] min-w-[266px] space-y-2">
      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />

        <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-white px-2 py-[2px] text-black">
          <StarIcon className="fill-yellow-400 text-yellow-500" size={12} />
          <span className="text-xs font-semibold">5.0</span>
        </div>

        <Button
          size="icon"
          className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-700"
        >
          <HeartIcon className="h-fit w-fit fill-white" size={16} />
        </Button>
      </div>

      <div>
        <div>
          <h3 className="truncate text-lg font-semibold tracking-[-0.5px]">
            {restaurant.name}
          </h3>

          {/* INFORMAÇÕES DA ENTREGA */}
          <div className="flex items-center gap-3">
            {/* CUSTO DE ENTREGA */}
            <div className="flex items-center gap-1">
              <BikeIcon className="text-primary" size={14} />
              <span className="block text-xs text-muted-foreground">
                {Number(restaurant.deliveryFee) === 0
                  ? "Entrega grátis"
                  : `${formatCurrency(Number(restaurant.deliveryFee))}`}
              </span>
            </div>
            {/* TEMPO DE ENTREGA */}
            <div>
              <div className="flex items-center gap-1">
                <TimerIcon className="text-primary" size={14} />
                <span className="block text-xs text-muted-foreground">
                  {restaurant.deliveryTimeMinutes} min
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;