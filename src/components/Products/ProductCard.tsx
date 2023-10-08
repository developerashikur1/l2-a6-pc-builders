import { useAddToBuildBtnContext } from "@/ContextApi/AddTobuildBtn";
import { usePcBuilderContext } from "@/ContextApi/PcBuilderContext";
import { IProduct } from "@/pages";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import StarRatings from "react-star-ratings";

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
  price: number;
  status: string;
  rating: number;
}

const ProductCard = ({
  averageRating,
  category,
  price,
  image,
  name,
  status,
  id,
  brand,
  description,
  individualRating,
  keyFeatures,
  reviews,
}: IProduct) => {
  const btnIsShowing = useAddToBuildBtnContext();
  const pcBuilderData = usePcBuilderContext();
  const router = useRouter();
  const ProductData = {
    averageRating,
    category,
    price,
    image,
    name,
    status,
    id,
    brand,
    description,
    individualRating,
    keyFeatures,
    reviews,
  };
  return (
    <div className="bg-white border border-orange-200 shadow-md hover:shadow-2xl shadow-orange-200 hover:shadow-orange-200 rounded-lg p-4 cursor-pointer h-[390px] relative">
      <Link href={`/products/${id}`}>
        <div className="mb-4">
          <Image
            width={100}
            height={100}
            src={image}
            alt={name}
            className="w-full mt-[20px] h-40 object-cover rounded-lg"
          />
        </div>
        <p
          className={`${
            status === "In Stock" ? "bg-green-600" : "bg-red-500"
          } text-white px-2 inline rounded-r-lg absolute left-0 top-[180px]`}
        >
          {status}
        </p>
        <p className="font-normal mb-2 absolute right-0 top-0 bg-orange-400 px-2 rounded-tr-md rounded-bl-lg text-white">
          {category}
        </p>
        <h2 className="text-xl font-semibold h-[60px] overflow-clip">{name}</h2>
        <div className="flex justify-between my-3">
          <p className="text-lg font-bold mb-2 bg-orange-200 px-2 rounded-lg">
            ${price}
          </p>
          <div className="flex gap-2">
            <StarRatings
              rating={averageRating}
              starRatedColor="orange"
              name="rating"
              starDimension="20px"
              starSpacing="1px"
            />
            <p>({averageRating})</p>
          </div>
        </div>
      </Link>
      {btnIsShowing?.isShowing && (
        <button
          onClick={() => {
            if (category === "Processor") {
              pcBuilderData?.updateState({
                cpu: ProductData,
              });
            }
            if (category === "Motherboard") {
              pcBuilderData?.updateState({
                motherBoard: ProductData,
              });
            }
            if (category === "Monitor") {
              pcBuilderData?.updateState({
                monitor: ProductData,
              });
            }
            if (category === "Graphics Card") {
              pcBuilderData?.updateState({
                gpu: ProductData,
              });
            }
            if (category === "RAM") {
              pcBuilderData?.updateState({
                ram: ProductData,
              });
            }
            if (category === "Power Supply Unit") {
              pcBuilderData?.updateState({
                psu: ProductData,
              });
            }
            if (category === "Storage Device") {
              pcBuilderData?.updateState({
                storage: ProductData,
              });
            }
            router.push("/pc-builder");
          }}
          className="bg-orange-400 hover:bg-orange-600 w-full p-2  rounded-md text-white"
        >
          Add to builder
        </button>
      )}
    </div>
  );
};

export default ProductCard;
