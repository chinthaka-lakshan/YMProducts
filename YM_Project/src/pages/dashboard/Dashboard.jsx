import SideBar from "../../components/SideBar/SideBar";
import "./dashboard.css";
import "../../index.css";

import itemList from "../../Image/item_list.png";
import stock from "../../Image/stock.png";
import users from "../../Image/users.png";
import TopBar from "../../components/TopBar/TopBar";
const Dashboard = () => {
  return (
    <>
      <div className="baseCont">
        <div className="hRow">
          <h3 className="text-4xl font-serif font-medium">Welcom To YM Products</h3>
        </div>
        <div className="hLine"></div>

        <div className="middleBox">
          <a href="">
            <button>
              <img src={itemList} alt="" />
              <span>Item List</span>
            </button>
          </a>
          <a href="">
            <button>
              <img src={users} alt="" />
              <span>Users</span>
            </button>
          </a>
          <a href="">
            <button>
              <img src={stock} alt="" />
              <span>Stock</span>
            </button>
          </a>
          <a href="">
            <button>
              <img src={itemList} alt="" />
              <span>Item List</span>
            </button>
          </a>
          <a href="">
            <button>
              <img src={users} alt="" />
              <span>Users</span>
            </button>
          </a>
          <a href="">
            <button>
              <img src={stock} alt="" />
              <span>Stock</span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
