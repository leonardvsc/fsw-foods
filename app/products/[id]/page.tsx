interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = ({ params: { id } }: ProductPageProps) => {
  return <div>{id}</div>;
};

export default ProductPage;
