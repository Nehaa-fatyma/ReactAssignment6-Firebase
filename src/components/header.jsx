import { NavLink } from "react-router-dom";

const Header = () => {
  const productList = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Product",
      url: "/product",
    },
  ];
  return (
    <>
      <nav>
        <ul>
          {productList.map((item, index) => {
            return (
              <>
                <li key={index}>
                  <NavLink to={item.url}>{item.name}</NavLink>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default Header;
