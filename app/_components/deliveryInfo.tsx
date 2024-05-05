import { Restaurant } from "@prisma/client";
import { formatCurrency } from "../_helpers/calculateProductTotalPrice";
import { Card } from "./ui/card";

interface DeliveryInfoProps {
  restaurant: Pick<Restaurant, "deliveryFee" | "deliveryTimeMinutes">;
}

const DeliveryInfo = ({ restaurant }: DeliveryInfoProps) => {
  return (
    <>
      <Card className="mt-6 flex justify-around py-4">
        {/* CUSTO DE ENTREGA */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">Entrega</span>
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              className="fill-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.99508 6.28247C5.00121 5.60925 5.18206 4.94917 5.51993 4.36685C5.8578 3.78452 6.3411 3.29994 6.92251 2.96051C7.03823 2.86907 7.17567 2.80916 7.32143 2.78663C7.46718 2.7641 7.61628 2.77971 7.75421 2.83195C7.89214 2.88418 8.01417 2.97126 8.10844 3.08469C8.20271 3.19812 8.26601 3.33402 8.29213 3.47917C8.43443 3.89682 8.6066 4.30452 8.74463 4.72359C8.78143 4.84939 8.85082 4.96321 8.94578 5.05355C9.04075 5.14388 9.1579 5.20753 9.28538 5.238C9.70801 5.35967 10.1306 5.47991 10.5511 5.60656C10.6064 5.617 10.659 5.63836 10.7059 5.6694C10.7528 5.70043 10.793 5.74052 10.8242 5.7873C10.8554 5.83408 10.877 5.88661 10.8877 5.94183C10.8983 5.99705 10.8978 6.05384 10.8862 6.10887C10.8798 6.16826 10.8607 6.22558 10.8303 6.27695C10.7998 6.32833 10.7587 6.37256 10.7096 6.40669C10.6606 6.44081 10.6048 6.46403 10.546 6.47476C10.4873 6.48549 10.4269 6.48349 10.369 6.4689C9.94565 6.40984 9.52373 6.34367 9.10394 6.26256C8.78918 6.21538 8.4907 6.092 8.23451 5.90314C7.97831 5.71428 7.77218 5.46566 7.63401 5.17894C7.56286 5.03664 7.47604 4.90075 7.38283 4.73853C7.05563 5.05737 6.83582 5.47017 6.75389 5.91962C6.70195 6.12595 6.75386 6.22412 6.95877 6.29456C7.56781 6.50303 8.17259 6.72573 8.77451 6.95484C8.8944 6.98365 9.00512 7.0422 9.09643 7.12507C9.18774 7.20793 9.25671 7.31246 9.29697 7.42901C9.33724 7.54555 9.34748 7.67036 9.32681 7.79192C9.30613 7.91348 9.25517 8.02787 9.17864 8.12454C8.87696 8.62259 8.55397 9.10782 8.23451 9.5952C8.00825 9.94027 8.00398 9.93742 8.23451 10.2875C8.24874 10.3088 8.27363 10.3309 8.27363 10.3522C8.27363 10.4668 8.30848 10.6176 8.25014 10.6859C8.20722 10.7283 8.15508 10.76 8.0978 10.7788C8.04052 10.7976 7.97966 10.8028 7.92001 10.7941C7.61301 10.7071 7.31251 10.5987 7.0207 10.4696C6.96394 10.4511 6.91208 10.4201 6.86892 10.3788C6.82577 10.3375 6.79243 10.2871 6.77139 10.2312C6.75035 10.1754 6.74215 10.1155 6.74737 10.056C6.7526 9.99652 6.77112 9.93898 6.80157 9.88763C7.02498 9.35021 7.24906 8.8128 7.4739 8.27538C7.49239 8.23056 7.50593 8.1843 7.52514 8.13308C7.04915 7.99078 6.58385 7.85274 6.12351 7.70617C5.92091 7.64994 5.72575 7.56969 5.54221 7.46711C5.3486 7.34132 5.19451 7.16336 5.0977 6.95375C5.00089 6.74414 4.96532 6.51143 4.99508 6.28247Z" />
              <path d="M3.90118 6.92699C3.48638 6.93197 3.07086 6.92273 2.65606 6.93127C2.48415 6.93499 2.31302 6.95573 2.14519 6.99317C1.79242 7.0677 1.46716 7.23843 1.20545 7.48645C0.94374 7.73447 0.755804 8.05011 0.662448 8.39838L0.513062 8.84591L0.42343 8.83522C0.291525 8.52798 0.242511 8.1915 0.28134 7.85939C0.320168 7.52729 0.445419 7.21118 0.644644 6.94264C0.244783 6.85655 0.0463098 6.66802 0.0391948 6.34358C0.0202216 5.50449 0.00744665 4.66516 0.000806019 3.82559C-0.00339611 3.74666 0.00886382 3.66773 0.0368498 3.59381C0.0648358 3.51988 0.107886 3.4526 0.163307 3.39624C0.218728 3.33988 0.285283 3.29568 0.358725 3.26646C0.432167 3.23724 0.51085 3.22363 0.58984 3.22651C1.46451 3.21844 2.33925 3.21844 3.21391 3.22651C3.38578 3.22643 3.55183 3.28858 3.68144 3.40145C3.81105 3.51432 3.89544 3.67029 3.91898 3.84053C4.07836 4.66966 4.23557 5.49974 4.39068 6.33077C4.41172 6.40371 4.41469 6.48068 4.39936 6.55504C4.38404 6.6294 4.35087 6.6989 4.3027 6.75758C4.25452 6.81626 4.19278 6.86234 4.12283 6.89186C4.05288 6.92137 3.97683 6.93342 3.90118 6.92699Z" />
              <path d="M10.7331 7.71726C10.8648 7.65109 10.9181 7.58776 10.8619 7.44048C10.8219 7.32459 10.7914 7.20561 10.7709 7.08473C10.7324 6.89547 10.7965 6.76598 10.9388 6.72898C11.0946 6.68701 11.2184 6.77239 11.2703 6.96307C11.3173 7.13454 11.3592 7.30815 11.4076 7.49954C11.5806 7.4899 11.7541 7.4899 11.927 7.49954C12.3552 7.55246 12.7569 7.73517 13.0782 8.02313C13.3995 8.31109 13.625 8.69051 13.7243 9.11037C13.8227 9.53113 13.7906 9.97191 13.6323 10.374C13.4739 10.776 13.1967 11.1203 12.8377 11.3608C12.4786 11.5982 12.0555 11.7201 11.6251 11.7101C11.1947 11.7 10.7777 11.5585 10.4301 11.3046C10.1401 11.09 9.90981 10.8047 9.76116 10.4759C9.61252 10.1472 9.55044 9.78589 9.58081 9.42638C9.61119 9.06687 9.733 8.7211 9.93469 8.42196C10.1364 8.12281 10.4112 7.88022 10.7331 7.71726ZM10.4891 10.0438C10.5996 10.3396 10.8162 10.5836 11.0967 10.7283C11.3773 10.873 11.7017 10.908 12.0067 10.8265C12.3186 10.7399 12.5859 10.5379 12.7544 10.2615C12.9228 9.98508 12.9799 9.65494 12.9139 9.33803C12.8539 9.04332 12.6888 8.78046 12.4494 8.5984C12.21 8.41633 11.9126 8.32746 11.6126 8.34835C11.6688 8.56607 11.7193 8.78022 11.7833 8.98869C11.794 9.02498 11.8545 9.04989 11.9 9.07266C11.9739 9.10445 12.0402 9.15154 12.0946 9.21084C12.149 9.27013 12.1901 9.34028 12.2154 9.41666C12.2407 9.49303 12.2495 9.57389 12.2412 9.65392C12.233 9.73394 12.2078 9.8113 12.1675 9.8809C12.1292 9.94742 12.0779 10.0055 12.0166 10.0517C11.9553 10.0978 11.8853 10.1311 11.8108 10.1495C11.7362 10.168 11.6588 10.1711 11.583 10.1588C11.5073 10.1465 11.4348 10.119 11.3699 10.078C11.303 10.0338 11.246 9.97625 11.2024 9.90894C11.1588 9.84162 11.1297 9.76602 11.1168 9.68688C11.1039 9.60773 11.1075 9.52677 11.1274 9.4491C11.1474 9.37143 11.1832 9.29873 11.2326 9.23559C11.2693 9.17451 11.2831 9.10242 11.2717 9.0321C11.2369 8.84497 11.1828 8.66213 11.1294 8.46291C10.8446 8.59894 10.621 8.83659 10.5025 9.12913C10.384 9.42167 10.3793 9.74795 10.4891 10.0438Z" />
              <path d="M3.12249 7.49383C3.39981 7.49023 3.67505 7.54198 3.93213 7.64606C4.18921 7.75014 4.42294 7.90445 4.61965 8.09997C4.81636 8.29549 4.97216 8.52827 5.0778 8.78472C5.18344 9.04116 5.23683 9.3161 5.23491 9.59344C5.23735 9.87065 5.18493 10.1456 5.08066 10.4025C4.9764 10.6593 4.82234 10.893 4.62738 11.0901C4.43242 11.2871 4.20044 11.4437 3.94472 11.5507C3.689 11.6578 3.41464 11.7132 3.13743 11.7137C2.86015 11.7141 2.58559 11.6596 2.32944 11.5535C2.07329 11.4473 1.8406 11.2916 1.64487 11.0952C1.44913 10.8988 1.29417 10.6656 1.18889 10.4091C1.08361 10.1526 1.03011 9.87784 1.03143 9.60057C1.0301 9.04413 1.24949 8.50986 1.64148 8.11493C2.03347 7.72 2.56605 7.49665 3.12249 7.49383ZM3.13812 10.872C3.47396 10.8683 3.79495 10.7328 4.03183 10.4947C4.26872 10.2566 4.40257 9.93499 4.4046 9.59913C4.40218 9.26267 4.26741 8.94069 4.02949 8.70277C3.79157 8.46485 3.46963 8.33012 3.13317 8.3277C2.9668 8.32834 2.80218 8.36195 2.64888 8.4266C2.49558 8.49126 2.35665 8.58568 2.24007 8.70438C2.12348 8.82308 2.03158 8.96371 1.96969 9.11814C1.90781 9.27258 1.87719 9.43775 1.87954 9.60411C1.87727 9.77028 1.9081 9.93524 1.9703 10.0894C2.0325 10.2435 2.12482 10.3836 2.2418 10.5017C2.35878 10.6197 2.49803 10.7132 2.65157 10.7768C2.80511 10.8404 2.96985 10.8728 3.13604 10.872H3.13812Z" />
              <path d="M10.5122 1.72909C10.0948 1.64884 9.68252 1.54359 9.27772 1.4139C9.01162 1.33492 8.86933 1.41888 8.90704 1.69352C8.94709 1.92656 8.99909 2.15738 9.06285 2.38508C9.07993 2.47387 9.12204 2.55596 9.18418 2.62163C9.24632 2.6873 9.32594 2.73386 9.41365 2.75581C9.7758 2.85258 10.1386 2.94649 10.5043 3.02831C10.6751 3.06602 10.7178 3.12365 10.609 3.26738C10.5413 3.37409 10.4416 3.45667 10.3242 3.50331C10.2067 3.54995 10.0775 3.55827 9.95509 3.52706C9.50926 3.42212 9.07152 3.2854 8.64522 3.11795C8.36533 3.00007 8.12926 2.79772 7.96994 2.53916C7.81062 2.2806 7.736 1.97876 7.75655 1.67576C7.78767 1.50033 7.8341 1.32797 7.89529 1.16064C8.01275 0.885734 8.21284 0.654176 8.46782 0.498127C8.72281 0.342077 9.02004 0.269271 9.31828 0.289767C9.63923 0.307111 9.94796 0.418559 10.206 0.610253C10.464 0.801947 10.6598 1.06536 10.769 1.36765C10.875 1.65794 10.8103 1.77676 10.5122 1.72909Z" />
              <path d="M12.436 7.05054C12.2584 7.00241 12.087 6.93387 11.9251 6.84633C11.7909 6.77632 11.6788 6.6704 11.6013 6.54037C11.5237 6.41033 11.4839 6.2613 11.4861 6.10993C11.4846 5.88115 11.5539 5.6575 11.6845 5.46963C11.815 5.28175 12.0005 5.13885 12.2154 5.06049C12.263 5.02348 12.3186 4.99797 12.3777 4.98592C12.4368 4.97388 12.4979 4.97563 12.5562 4.99105C12.6145 5.00647 12.6684 5.03513 12.7138 5.07482C12.7593 5.1145 12.795 5.16415 12.8181 5.21986C13.0062 5.52495 13.097 5.88007 13.0785 6.23801C13.0375 6.43953 12.9828 6.63802 12.9148 6.83211C12.9021 6.88087 12.8786 6.92618 12.8462 6.96475C12.8138 7.00332 12.7732 7.03418 12.7273 7.0551C12.6815 7.07601 12.6315 7.08646 12.5811 7.08567C12.5307 7.08488 12.4811 7.07288 12.436 7.05054Z" />
              <path d="M9.20065 1.54077C9.23054 1.53152 9.32022 1.61192 9.3252 1.65959C9.33018 1.70726 9.27394 1.77414 9.21559 1.88727C9.13519 1.78268 9.05836 1.72575 9.06334 1.67381C9.06832 1.62187 9.14302 1.555 9.20065 1.54077Z" />
              <path d="M3.10384 9.02893C3.18197 9.02411 3.26028 9.0352 3.334 9.06152C3.40772 9.08784 3.47531 9.12884 3.53272 9.18205C3.59013 9.23527 3.63613 9.29959 3.66795 9.37111C3.69977 9.44262 3.71679 9.51985 3.71789 9.59812C3.71758 9.7498 3.65924 9.89563 3.55487 10.0057C3.45049 10.1158 3.30793 10.1817 3.15648 10.1901C3.07971 10.1923 3.00324 10.1792 2.93153 10.1518C2.85981 10.1243 2.7943 10.083 2.73863 10.0301C2.68296 9.97716 2.63823 9.91378 2.60713 9.84356C2.57604 9.77335 2.55912 9.69767 2.55737 9.6209C2.55364 9.54597 2.56489 9.47105 2.59046 9.40053C2.61603 9.33001 2.65544 9.26531 2.70632 9.21019C2.7572 9.15507 2.81855 9.11065 2.8868 9.07952C2.95505 9.0484 3.02886 9.0312 3.10384 9.02893Z" />
            </svg>
          </div>

          {Number(restaurant.deliveryFee) > 0 ? (
            <p className="text-xs font-semibold">
              {formatCurrency(Number(restaurant.deliveryFee))}
            </p>
          ) : (
            <p className="text-xs font-semibold">Grátis</p>
          )}
        </div>

        {/* TEMPO DE ENTREGA */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">Entrega</span>
            <svg
              width="11"
              height="14"
              viewBox="0 0 11 14"
              className="fill-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.93981 13.0439C4.62709 13.044 4.31516 13.0125 4.00874 12.9501C3.41786 12.829 2.8566 12.5928 2.35698 12.255C1.6142 11.7535 1.03279 11.0474 0.683184 10.2222C0.564996 9.94281 0.474765 9.65235 0.413813 9.35514C0.288657 8.74073 0.288657 8.1074 0.413813 7.493C0.534844 6.90212 0.771039 6.34085 1.10892 5.84123C1.61036 5.09845 2.31645 4.51704 3.14164 4.16744C3.42107 4.04925 3.71153 3.95902 4.00874 3.89807C4.62315 3.77291 5.25648 3.77291 5.87088 3.89807C6.46176 4.0191 7.02302 4.25529 7.52265 4.59317C8.26542 5.09461 8.84684 5.8007 9.19644 6.62589C9.31463 6.90533 9.40486 7.19578 9.46581 7.493C9.58888 8.09761 9.59082 8.72063 9.4715 9.326C9.36917 9.84669 9.17675 10.3455 8.90291 10.8001C8.49279 11.4849 7.91205 12.0516 7.21743 12.4449C6.5228 12.8382 5.73804 13.0446 4.93981 13.0439ZM6.53116 6.25986C6.4563 6.2598 6.38217 6.27452 6.31301 6.30319C6.24386 6.33185 6.18104 6.37389 6.12817 6.42688L4.51337 8.03956C4.40639 8.14672 4.34637 8.29199 4.34651 8.4434C4.34664 8.59482 4.40692 8.73998 4.51408 8.84696C4.62124 8.95393 4.76651 9.01395 4.91793 9.01382C5.06934 9.01369 5.21451 8.95341 5.32148 8.84625L6.12817 8.03956L6.93486 7.23357C7.0155 7.15417 7.07061 7.0525 7.09313 6.94159C7.11565 6.83068 7.10457 6.71557 7.06129 6.611C7.01801 6.50643 6.94451 6.41715 6.85019 6.3546C6.75588 6.29204 6.64504 6.25906 6.53187 6.25986H6.53116Z" />
              <path d="M2.67847 1.56018C2.67847 1.39995 2.74212 1.24629 2.85541 1.13299C2.96871 1.0197 3.12237 0.956047 3.2826 0.956047L6.90738 0.956047C7.0676 0.956047 7.22126 1.0197 7.33456 1.13299C7.44786 1.24629 7.51151 1.39995 7.51151 1.56018C7.51151 1.7204 7.44786 1.87406 7.33456 1.98736C7.22126 2.10066 7.0676 2.16431 6.90738 2.16431H3.2826C3.12237 2.16431 2.96871 2.10066 2.85541 1.98736C2.74212 1.87406 2.67847 1.7204 2.67847 1.56018V1.56018Z" />
              <path d="M8.87918 2.68863C8.99621 2.5716 9.15494 2.50585 9.32044 2.50585C9.48594 2.50585 9.64467 2.5716 9.7617 2.68863L10.5588 3.4857C10.6758 3.60273 10.7415 3.76146 10.7415 3.92696C10.7415 4.09246 10.6758 4.25119 10.5588 4.36821C10.4417 4.48524 10.283 4.55099 10.1175 4.55099C9.95201 4.55099 9.79329 4.48524 9.67626 4.36821L8.87918 3.57114C8.76216 3.45411 8.69641 3.29539 8.69641 3.12988C8.69641 2.96438 8.76216 2.80565 8.87918 2.68863Z" />
            </svg>
          </div>

          {restaurant.deliveryTimeMinutes > 0 && (
            <p className="text-xs font-semibold">
              {restaurant.deliveryTimeMinutes} min
            </p>
          )}
        </div>
      </Card>
    </>
  );
};

export default DeliveryInfo;