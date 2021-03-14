import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/connectes/CNCTE_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_fr-FR._CB416887570_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="126454826"
            title="Samsung S20 Ultra"
            image="https://m.media-amazon.com/images/I/71FzyObItHL._AC_UL320_.jpg"
            price={399.99}
            rating={4}
          />
          <Product
            id="8878465465"
            title="Macbook pro 2020"
            image="https://images-eu.ssl-images-amazon.com/images/I/71vFKBpKakL._AC_UL200_SR200,200_.jpg"
            price={2500}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/71vFKBpKakL._AC_UL200_SR200,200_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_UL320_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71FzyObItHL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1345632462"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            image="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_UL320_.jpg"
            price={490}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
