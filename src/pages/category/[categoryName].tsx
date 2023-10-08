import { MainComponent } from "@/components/Common";
import Products from "@/components/Products";
import { categoriesRouteData } from "@/components/Shared/Navbar";
import { GetStaticProps } from "next";
import { IProduct } from "..";

const ProductsOnCategory = ({ result }: { result: IProduct[] }) => {
  return (
    <MainComponent>
      <div>
        <h1 className="text-4xl font-bold text-center my-4">
          {/* {result.} */}
        </h1>
        <Products data={result} />
      </div>
    </MainComponent>
  );
};

export default ProductsOnCategory;

export const getStaticPaths = async () => {
  const paths = categoriesRouteData.map((product) => {
    return {
      params: { categoryName: product.link.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  result: IProduct;
}> = async (context) => {
  let queryName;
  const categoryName = context?.params?.categoryName;

  queryName =
    categoryName === "processor"
      ? "Processor"
      : categoryName === "ram"
      ? "RAM"
      : categoryName === "graphics-card"
      ? "Graphics Card"
      : categoryName === "motherboard"
      ? "Motherboard"
      : categoryName === "monitor"
      ? "Monitor"
      : categoryName === "storage"
      ? "Storage Device"
      : categoryName === "psu"
      ? "Power Supply Unit"
      : categoryName === "others"
      ? "Others"
      : "";

  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/category/${queryName}`
    );
    const result = await res.json();
    return { props: { result } };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { notFound: true }; // Return 404 page if there's an error
  }
};
