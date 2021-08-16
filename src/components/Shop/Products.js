import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "The best book",
    description: "Best book you can read today",
  },
  {
    id: "p2",
    price: 10,
    title: "Tree",
    description: "A tree for your room",
  },
  {
    id: "p3",
    price: 12,
    title: "Stuffed Teddy Bear",
    description: "The only teddy you will ever need",
  },
  {
    id: "p4",
    price: 11,
    title: "Slippers",
    description: "Keep your feet warm with the warmest slippers",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.desciprtion}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
