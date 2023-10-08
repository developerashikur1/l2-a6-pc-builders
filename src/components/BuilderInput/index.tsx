import { usePcBuilderContext } from "@/ContextApi/PcBuilderContext";
import { Cross } from "@/assets/Icon";
import { IProduct } from "@/pages";
import Image, { StaticImageData } from "next/image";
interface InputProps {
  icon: StaticImageData;
  label: string;
  selectFn: () => void;
  selectedData?: IProduct | null;
  removeKey?: string;
}

const BuilderInput = ({
  icon,
  label,
  selectFn,
  selectedData,
  removeKey,
}: InputProps) => {
  const pcBuilderData = usePcBuilderContext();
  const resetData = {
    name: "",
    id: "",
    image: "",
    brand: "",
    category: "",
    status: "",
    price: 0,
    description: "",
    keyFeatures: [],
    individualRating: 0,
    averageRating: 0,
    reviews: [],
  };
  const removedData = () => {
    pcBuilderData?.updateState({
      [removeKey as string]: null,
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <div className="md:flex gap-3 justify-center items-center">
          <div className="p-2 bg-orange-100 w-[58px] rounded-lg">
            <Image src={icon} alt="" />
          </div>
          <p className="text-lg font-medium">{label}</p>
        </div>
        <div>
          <button
            onClick={selectFn}
            className="py-2 px-5 font-medium border-2 rounded-lg bg-gray-100 hover:bg-orange-100"
          >
            Select
          </button>
        </div>
      </div>

      {selectedData && (
        <div className="flex justify-between w-[80%] mx-auto items-center py-2 gap-2">
          <div className="md:flex gap-3 items-center">
            <div className="w-[58px]">
              <Image
                src={selectedData?.image || ""}
                width={100}
                height={100}
                alt=""
              />
            </div>
            <p className="text-lg font-medium">{selectedData.name}</p>
          </div>
          <div>
            <button onClick={removedData}>
              <Cross />
            </button>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default BuilderInput;
