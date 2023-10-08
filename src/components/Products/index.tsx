import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import ProductCard from "./ProductCard";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { MainComponent } from "../Common";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { IProduct } from "@/pages";
import { useState, useEffect } from "react";

const shuffleArray = (array: IProduct[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Products = ({ data }: { data: IProduct[] }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [shuffledProducts, setShuffledProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const randomData = shuffleArray(data);
    setShuffledProducts(randomData);
  }, [data]);
  return (
    <MainComponent>
      <ScrollAnimationWrapper className="container mx-auto mt-8 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {shuffledProducts?.slice(0, 6).map((product, index) => (
          <motion.div
            custom={{ duration: 2 + index }}
            variants={scrollAnimation}
            key={index}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </ScrollAnimationWrapper>
    </MainComponent>
  );
};

export default Products;
