import { MainComponent } from "@/components/Common";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { GetStaticProps } from "next";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ result }: { result: IProduct[] }) {
  return (
    <MainComponent>
      <Hero />
      <div>
        <h1 className="text-4xl font-bold text-center my-4">
          Featured Products
        </h1>
        <p className="text-lg text-center my-4">Choose your product</p>
        <Products data={result} />
      </div>
    </MainComponent>
  );
}

export type IProduct = {
  id: string;
  image: string;
  name: string;
  brand: string;
  category: string;
  status: string;
  price: number;
  description: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  individualRating: number;
  averageRating: number;
  reviews: {
    userName: string;
    message: string;
  }[];
};
export const getStaticProps: GetStaticProps<{
  result: IProduct[];
}> = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  const result = await res.json();
  return { props: { result } };
};
