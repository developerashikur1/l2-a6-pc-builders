import { GetStaticProps } from "next";
import Image from "next/image";
import { IProduct } from "..";

const ProductDetails = ({ result }: { result: IProduct }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Image
            width={300}
            height={300}
            src={result?.image}
            alt={result?.name}
            className="w-64 h-auto mx-auto mb-4"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{result?.name}</h1>
          <div className="flex gap-2 my-4">
            <p className="px-3 py-1  bg-slate-200 rounded-full">
              {" "}
              <strong>Price:</strong> {result?.price}
            </p>
            <p className="px-3 py-1  bg-slate-200 rounded-full">
              {result?.status}
            </p>
            <p className="px-3 py-1  bg-slate-200 rounded-full">
              <strong>Category:</strong> {result?.category}
            </p>
          </div>

          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Key Features</span>
            </p>
            {result?.keyFeatures.map((feature, i) => (
              <div key={i} className="flex gap-2 mb-1">
                <p className="font-medium">{feature?.title}:</p>
                <p>{feature?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  const data = await res.json();

  const paths = data.map((product: IProduct) => {
    return {
      params: { productId: product.id.toString() },
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
  const productId = context?.params?.productId;
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/products/${productId}`
    );
    const result = await res.json();
    return { props: { result } };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { notFound: true }; // Return 404 page if there's an error
  }
};
