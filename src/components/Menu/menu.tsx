import { menu } from "../../utils/data";
import { Logo } from "../../assets";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="mainContainer">
      <div className="logoContainer">
        {" "}
        <div className="logo"> {Logo()} </div> <h1>Human R.</h1>
      </div>

      {menu.map((item) => (
        <div className="item" key={item.id}>
          <h2 className="title">{item.title}</h2>
          {item.listItems.map((listItem, listItemIndex) => (
            <div
              className={`listItem ${
                listItemIndex === 0 && item.title === "Menu" ? "firstItem" : ""
              }`}
              key={listItem.id}
            >
              {listItem.icon}
              <span className="listItemTitle">{listItem.title}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
