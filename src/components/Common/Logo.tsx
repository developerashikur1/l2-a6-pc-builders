import LogoIcon from "@/assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex gap-3 items-center">
      <LogoIcon className="w-[50px] h-[50px] bg-transparent" />
      <h1 className="text-3xl font-bold">
        <span className="text-orange-500">Sky</span>Land
      </h1>
    </div>
  );
};

export default Logo;
