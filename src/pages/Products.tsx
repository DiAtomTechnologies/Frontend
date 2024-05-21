import Product from "@/components/Product";

const Products = () => {
  return (
    <section className="py-10 padding-x" id="products">
      <h2 className="text-3xl open-sans font-medium">
        Our Most Selling Products
      </h2>
      <div className="w-full md:pt-20 pt-10 flex justify-evenly  gap-4 ">
        <Product name="Ventilator" price={4999} link="/" imageSrc="/ventilator.jpg" />
        <Product name="Bioprinters" price={3999} link="/" imageSrc="/ventilator.jpg" />
      </div>
    </section>
  );
};

export default Products;
