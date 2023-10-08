import Image from "next/image";

const Icon = ({ icon }: { icon: string }) => {
  return (
    <div>
      <Image src={icon} alt="" width={100} height={100} />
    </div>
  );
};

export default Icon;
