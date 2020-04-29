import React from "react";

const StoreContext = React.createContext();

const INITIAL_APP_STATE = {
  profile: {
    name: "Bob Johannson",
  },
  products: [
    {
      id: 1,
      title: "Intel 660p Series m.2 1 TB NVMe",
      price: "$119.99",
      stock: 23,
      description: "QLC Internal Solid State Drive",
      imgSrc: "/img/intel-m2.png",
    },
    {
      id: 2,
      title: 'ASUS ROG Swift PG248Q 24" Gaming Monitor',
      price: "$449.99",
      stock: 4,
      description: '24" FHD 1920x1080, 1ms, Overclockable 180 Hz, G-Sync',
      imgSrc: "/img/asus_monitor.png",
    },
    {
      id: 3,
      title: "AMD Ryzen 9 3950X 16-cor 3.5 GHz",
      price: "$737.99",
      stock: 0,
      description:
        "AM4 socket, 105W Desktop processor. 7nm process, 64MB L3 Cache, 8MB L2 Cache.",
      imgSrc: "/img/ryzen9.png",
    },
    {
      id: 4,
      title: "EVGA GeForece RTX 2080 TI",
      price: "$1,099.99",
      stock: 2,
      description:
        "BLACK EDITION GAMING Video Card. 11GB GDDR6, Dual HDB Fans, RGB.",
      imgSrc: "/img/evga-2080ti.png",
    },
    {
      id: 5,
      title: "G.SKILL Ripjaws Series 32 GB DDR4 RAM",
      price: "$138.99",
      stock: 3,
      description:
        "DDR4 3200 Desktop Memory Model, 2x16GB, Voltage 1.35V, Timing 16-18-18-38",
      imgSrc: "/img/gskill-ram.png",
    },
    {
      id: 6,
      title: "APC 360W 7 Outlet Uninterruptible Power Supply",
      price: "$61.99",
      stock: 12,
      description:
        "BE670M1 675 VA / 360 Watt, USB Charing Port, Compact Form Factor.",
      imgSrc: "/img/ups.png",
    },
  ],
};

const stateReducer = (state, action) => {
  return state;
};

export const StoreProvider = ({ children }) => {
  const storeResult = React.useReducer(stateReducer, INITIAL_APP_STATE);
  return (
    <StoreContext.Provider value={storeResult}>
      {children}
    </StoreContext.Provider>
  );
};

export const useAppState = () => {
  const [state] = React.useContext(StoreContext);
  return state;
};

export const useAppDispatch = () => {
  const [, dispatch] = React.useContext(StoreContext);
  return dispatch;
};
