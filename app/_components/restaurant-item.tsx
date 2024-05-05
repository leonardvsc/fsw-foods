import { Restaurant } from "@prisma/client";
import { HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/calculateProductTotalPrice";
import { Button } from "./ui/button";
import Link from "next/link";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <Link
      className="w-[266px] min-w-[266px] "
      href={`/restaurants/${restaurant.id}`}
    >
      <div className="w-full space-y-2">
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
            <h3 className="truncate text-base font-semibold tracking-[-0.5px]">
              {restaurant.name}
            </h3>

            {/* INFORMAÇÕES DA ENTREGA */}
            <div className="flex items-center gap-3">
              {/* CUSTO DE ENTREGA */}
              <div className="flex items-center gap-1">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.99508 6.28271C5.00121 5.6095 5.18206 4.94942 5.51993 4.36709C5.8578 3.78477 6.3411 3.30018 6.92251 2.96075C7.03823 2.86932 7.17567 2.8094 7.32143 2.78688C7.46718 2.76435 7.61628 2.77996 7.75421 2.83219C7.89214 2.88443 8.01417 2.9715 8.10844 3.08493C8.20271 3.19836 8.26601 3.33426 8.29213 3.47942C8.43443 3.89706 8.6066 4.30477 8.74463 4.72384C8.78143 4.84963 8.85082 4.96345 8.94578 5.05379C9.04075 5.14413 9.1579 5.20777 9.28538 5.23824C9.70801 5.35991 10.1306 5.48016 10.5511 5.6068C10.6064 5.61724 10.659 5.63861 10.7059 5.66964C10.7528 5.70068 10.793 5.74076 10.8242 5.78754C10.8554 5.83432 10.877 5.88686 10.8877 5.94208C10.8983 5.9973 10.8978 6.05408 10.8862 6.10911C10.8798 6.1685 10.8607 6.22582 10.8303 6.2772C10.7998 6.32857 10.7587 6.37281 10.7096 6.40693C10.6606 6.44105 10.6048 6.46427 10.546 6.475C10.4873 6.48573 10.4269 6.48373 10.369 6.46914C9.94565 6.41009 9.52373 6.34391 9.10394 6.2628C8.78918 6.21563 8.4907 6.09224 8.23451 5.90338C7.97831 5.71452 7.77218 5.46591 7.63401 5.17918C7.56286 5.03689 7.47604 4.901 7.38283 4.73878C7.05563 5.05761 6.83582 5.47041 6.75389 5.91986C6.70195 6.1262 6.75386 6.22437 6.95877 6.29481C7.56781 6.50327 8.17259 6.72598 8.77451 6.95508C8.8944 6.98389 9.00512 7.04244 9.09643 7.12531C9.18774 7.20818 9.25671 7.31271 9.29697 7.42925C9.33724 7.5458 9.34748 7.67061 9.32681 7.79216C9.30613 7.91372 9.25517 8.02811 9.17864 8.12479C8.87696 8.62283 8.55397 9.10807 8.23451 9.59544C8.00825 9.94052 8.00398 9.93766 8.23451 10.2877C8.24874 10.3091 8.27363 10.3311 8.27363 10.3525C8.27363 10.467 8.30848 10.6179 8.25014 10.6862C8.20722 10.7285 8.15508 10.7603 8.0978 10.779C8.04052 10.7978 7.97966 10.803 7.92001 10.7943C7.61301 10.7074 7.31251 10.5989 7.0207 10.4699C6.96394 10.4514 6.91208 10.4203 6.86892 10.379C6.82577 10.3378 6.79243 10.2874 6.77139 10.2315C6.75035 10.1756 6.74215 10.1157 6.74737 10.0562C6.7526 9.99676 6.77112 9.93923 6.80157 9.88787C7.02498 9.35046 7.24906 8.81305 7.4739 8.27563C7.49239 8.2308 7.50593 8.18455 7.52514 8.13332C7.04915 7.99102 6.58385 7.85299 6.12351 7.70642C5.92091 7.65019 5.72575 7.56993 5.54221 7.46736C5.3486 7.34157 5.19451 7.1636 5.0977 6.95399C5.00089 6.74439 4.96532 6.51167 4.99508 6.28271Z" />
                  <path d="M3.90118 6.92699C3.48638 6.93197 3.07086 6.92273 2.65606 6.93127C2.48415 6.93499 2.31302 6.95573 2.14519 6.99317C1.79242 7.0677 1.46716 7.23843 1.20545 7.48645C0.94374 7.73447 0.755804 8.05011 0.662448 8.39838L0.513062 8.84591L0.42343 8.83522C0.291525 8.52798 0.242511 8.1915 0.28134 7.85939C0.320168 7.52729 0.445419 7.21118 0.644644 6.94264C0.244783 6.85655 0.0463098 6.66802 0.0391948 6.34358C0.0202216 5.50449 0.00744665 4.66516 0.000806019 3.82559C-0.00339611 3.74666 0.00886382 3.66773 0.0368498 3.59381C0.0648358 3.51988 0.107886 3.4526 0.163307 3.39624C0.218728 3.33988 0.285283 3.29568 0.358725 3.26646C0.432167 3.23724 0.51085 3.22363 0.58984 3.22651C1.46451 3.21844 2.33925 3.21844 3.21391 3.22651C3.38578 3.22643 3.55183 3.28858 3.68144 3.40145C3.81105 3.51432 3.89544 3.67029 3.91898 3.84053C4.07836 4.66966 4.23557 5.49974 4.39068 6.33077C4.41172 6.40371 4.41469 6.48068 4.39936 6.55504C4.38404 6.6294 4.35087 6.6989 4.3027 6.75758C4.25452 6.81626 4.19278 6.86234 4.12283 6.89186C4.05288 6.92137 3.97683 6.93342 3.90118 6.92699Z" />
                  <path d="M10.7331 7.71726C10.8648 7.65109 10.9181 7.58776 10.8619 7.44048C10.8219 7.32459 10.7914 7.20561 10.7709 7.08473C10.7324 6.89547 10.7965 6.76598 10.9388 6.72898C11.0946 6.68701 11.2184 6.77239 11.2703 6.96307C11.3173 7.13454 11.3592 7.30815 11.4076 7.49954C11.5806 7.4899 11.7541 7.4899 11.927 7.49954C12.3552 7.55246 12.7569 7.73517 13.0782 8.02313C13.3995 8.31109 13.625 8.69051 13.7243 9.11037C13.8227 9.53113 13.7906 9.97191 13.6323 10.374C13.4739 10.776 13.1967 11.1203 12.8377 11.3608C12.4786 11.5982 12.0555 11.7201 11.6251 11.7101C11.1947 11.7 10.7777 11.5585 10.4301 11.3046C10.1401 11.09 9.90981 10.8047 9.76116 10.4759C9.61252 10.1472 9.55044 9.78589 9.58081 9.42638C9.61119 9.06687 9.733 8.7211 9.93469 8.42196C10.1364 8.12281 10.4112 7.88022 10.7331 7.71726ZM10.4891 10.0438C10.5996 10.3396 10.8162 10.5836 11.0967 10.7283C11.3773 10.873 11.7017 10.908 12.0067 10.8265C12.3186 10.7399 12.5859 10.5379 12.7544 10.2615C12.9228 9.98508 12.9799 9.65494 12.9139 9.33803C12.8539 9.04332 12.6888 8.78046 12.4494 8.5984C12.21 8.41633 11.9126 8.32746 11.6126 8.34835C11.6688 8.56607 11.7193 8.78022 11.7833 8.98869C11.794 9.02498 11.8545 9.04989 11.9 9.07266C11.9739 9.10445 12.0402 9.15154 12.0946 9.21084C12.149 9.27013 12.1901 9.34028 12.2154 9.41666C12.2407 9.49303 12.2495 9.57389 12.2412 9.65392C12.233 9.73394 12.2078 9.8113 12.1675 9.8809C12.1292 9.94742 12.0779 10.0055 12.0166 10.0517C11.9553 10.0978 11.8853 10.1311 11.8108 10.1495C11.7362 10.168 11.6588 10.1711 11.583 10.1588C11.5073 10.1465 11.4348 10.119 11.3699 10.078C11.303 10.0338 11.246 9.97625 11.2024 9.90894C11.1588 9.84162 11.1297 9.76602 11.1168 9.68688C11.1039 9.60773 11.1075 9.52677 11.1274 9.4491C11.1474 9.37143 11.1832 9.29873 11.2326 9.23559C11.2693 9.17451 11.2831 9.10242 11.2717 9.0321C11.2369 8.84497 11.1828 8.66213 11.1294 8.46291C10.8446 8.59894 10.621 8.83659 10.5025 9.12913C10.384 9.42167 10.3793 9.74795 10.4891 10.0438Z" />
                  <path d="M3.12252 7.49383C3.39984 7.49023 3.67508 7.54198 3.93216 7.64606C4.18924 7.75014 4.42297 7.90445 4.61968 8.09997C4.81639 8.29549 4.97219 8.52827 5.07783 8.78472C5.18347 9.04116 5.23686 9.3161 5.23494 9.59344C5.23739 9.87065 5.18496 10.1456 5.08069 10.4025C4.97643 10.6593 4.82237 10.893 4.62741 11.0901C4.43245 11.2871 4.20047 11.4437 3.94475 11.5507C3.68903 11.6578 3.41467 11.7132 3.13746 11.7137C2.86018 11.7141 2.58562 11.6596 2.32947 11.5535C2.07332 11.4473 1.84063 11.2916 1.6449 11.0952C1.44916 10.8988 1.29421 10.6656 1.18892 10.4091C1.08364 10.1526 1.03014 9.87784 1.03146 9.60057C1.03013 9.04413 1.24952 8.50986 1.64151 8.11493C2.0335 7.72 2.56608 7.49665 3.12252 7.49383ZM3.13815 10.872C3.47399 10.8683 3.79498 10.7328 4.03186 10.4947C4.26875 10.2566 4.4026 9.93499 4.40463 9.59913C4.40221 9.26267 4.26744 8.94069 4.02952 8.70277C3.7916 8.46485 3.46966 8.33012 3.1332 8.3277C2.96683 8.32834 2.80221 8.36195 2.64891 8.4266C2.49561 8.49126 2.35668 8.58568 2.2401 8.70438C2.12351 8.82308 2.03161 8.96371 1.96972 9.11814C1.90784 9.27258 1.87722 9.43775 1.87957 9.60411C1.8773 9.77028 1.90813 9.93524 1.97033 10.0894C2.03253 10.2435 2.12485 10.3836 2.24183 10.5017C2.35881 10.6197 2.49806 10.7132 2.6516 10.7768C2.80514 10.8404 2.96988 10.8728 3.13607 10.872H3.13815Z" />
                  <path d="M10.5122 1.72909C10.0947 1.64884 9.68249 1.54359 9.27769 1.4139C9.01159 1.33492 8.8693 1.41888 8.90701 1.69352C8.94706 1.92656 8.99906 2.15738 9.06282 2.38508C9.0799 2.47387 9.12201 2.55596 9.18415 2.62163C9.24629 2.6873 9.32591 2.73386 9.41362 2.75581C9.77577 2.85258 10.1386 2.94649 10.5043 3.02831C10.6751 3.06602 10.7178 3.12365 10.6089 3.26738C10.5413 3.37409 10.4416 3.45667 10.3241 3.50331C10.2067 3.54995 10.0775 3.55827 9.95506 3.52706C9.50923 3.42212 9.07149 3.2854 8.64519 3.11795C8.3653 3.00007 8.12923 2.79772 7.96991 2.53916C7.81059 2.2806 7.73597 1.97876 7.75651 1.67576C7.78764 1.50033 7.83407 1.32797 7.89526 1.16064C8.01272 0.885734 8.21281 0.654176 8.46779 0.498127C8.72278 0.342077 9.02001 0.269271 9.31825 0.289767C9.6392 0.307111 9.94793 0.418559 10.2059 0.610253C10.4639 0.801947 10.6598 1.06536 10.769 1.36765C10.875 1.65794 10.8103 1.77676 10.5122 1.72909Z" />
                  <path d="M12.436 7.05054C12.2584 7.00241 12.087 6.93387 11.9252 6.84633C11.7909 6.77632 11.6788 6.6704 11.6013 6.54037C11.5238 6.41033 11.4839 6.2613 11.4862 6.10993C11.4847 5.88115 11.5539 5.6575 11.6845 5.46963C11.8151 5.28175 12.0005 5.13885 12.2154 5.06049C12.2631 5.02348 12.3186 4.99797 12.3777 4.98592C12.4368 4.97388 12.4979 4.97563 12.5562 4.99105C12.6145 5.00647 12.6685 5.03513 12.7139 5.07482C12.7593 5.1145 12.795 5.16415 12.8181 5.21986C13.0062 5.52495 13.097 5.88007 13.0785 6.23801C13.0375 6.43953 12.9828 6.63802 12.9149 6.83211C12.9021 6.88087 12.8787 6.92618 12.8462 6.96475C12.8138 7.00332 12.7732 7.03418 12.7273 7.0551C12.6815 7.07601 12.6316 7.08646 12.5812 7.08567C12.5308 7.08488 12.4812 7.07288 12.436 7.05054Z" />
                  <path d="M9.20065 1.54077C9.23054 1.53152 9.32022 1.61192 9.3252 1.65959C9.33018 1.70726 9.27394 1.77414 9.21559 1.88727C9.13519 1.78268 9.05836 1.72575 9.06334 1.67381C9.06832 1.62187 9.14302 1.555 9.20065 1.54077Z" />
                  <path d="M3.10381 9.02893C3.18194 9.02411 3.26025 9.0352 3.33397 9.06152C3.40769 9.08784 3.47528 9.12884 3.53269 9.18205C3.5901 9.23527 3.6361 9.29959 3.66792 9.37111C3.69974 9.44262 3.71676 9.51985 3.71786 9.59812C3.71755 9.7498 3.65921 9.89563 3.55484 10.0057C3.45046 10.1158 3.3079 10.1817 3.15645 10.1901C3.07968 10.1923 3.00321 10.1792 2.9315 10.1518C2.85978 10.1243 2.79427 10.083 2.7386 10.0301C2.68292 9.97716 2.6382 9.91378 2.6071 9.84356C2.57601 9.77335 2.55909 9.69767 2.55734 9.6209C2.55361 9.54597 2.56486 9.47105 2.59043 9.40053C2.616 9.33001 2.65541 9.26531 2.70629 9.21019C2.75717 9.15507 2.81852 9.11065 2.88677 9.07952C2.95502 9.0484 3.02883 9.0312 3.10381 9.02893Z" />
                </svg>

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
    </Link>
  );
};

export default RestaurantItem;
