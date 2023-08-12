import type {NextPage} from "next";
import Image from "next/image";

import Navbar from "../components/Navbar.jsx";
import Marquee from "../components/Marquee";
import ProductCard from "../components/ProductCard";
import CartModal from "../components/CartModal";
import header from "../public/header.svg";
import footer from "../public/footer.svg";
import CartState from "../context/cart/CartState";
import products from "../product/mock.json";

const Home: NextPage = () => {
  return (
    <CartState>
      <header>
        <Navbar />
      </header>
      <CartModal />
      <div className="flex justify-center mx-2 my-2">
        <Image alt="Basement supply" src={header} />
      </div>
      <Marquee />
      <div className="justify-between gap-5 m-4 sm:flex">
        {products.map((prod) => (
          <ProductCard
            key={prod._id}
            _id={prod._id}
            description={prod.description}
            img={prod.img}
            name={prod.name}
            price={prod.price}
          />
        ))}
      </div>
      <footer>
        <div className="flex justify-center mx-2 my-3">
          <Image alt="Wear everyday" src={footer} />
        </div>
      </footer>
    </CartState>
  );
};

export default Home;
