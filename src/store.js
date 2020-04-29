import React from "react";

const StoreContext = React.createContext();

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

const INITIAL_APP_STATE = {
  cart: [],
  profile: {
    name: "Bob Johannson",
  },
  categories: ["GPU", "CPU", "RAM", "Storage"],
  products: [
    {
      id: 1,
      categories: ["Storage"],
      title: "Intel 660p Series m.2 1TB NVMe",
      price: {
        formatted: "$119.99",
        raw: 11999,
      },
      stock: 23,
      description: "QLC Internal Solid State Drive",
      imgSrc: "/img/intel-m2.png",
    },
    {
      id: 2,
      categories: [],
      title: 'ASUS ROG Swift PG248Q 24" Gaming Monitor',
      price: {
        formatted: "$449.99",
        raw: 44999,
      },
      stock: 4,
      description: '24" FHD 1920x1080, 1ms, Overclockable 180 Hz, G-Sync',
      imgSrc: "/img/asus_monitor.png",
    },
    {
      id: 3,
      categories: ["CPU"],
      title: "AMD Ryzen 9 3950X 16-Core 3.5 GHz",
      price: {
        formatted: "$737.99",
        raw: 73799,
      },
      stock: 0,
      description:
        "AM4 socket, 105W Desktop processor. 7nm process, 64MB L3 Cache, 8MB L2 Cache.",
      imgSrc: "/img/ryzen9.png",
    },
    {
      id: 4,
      categories: ["GPU"],
      title: "EVGA GeForece RTX 2080TI",
      price: {
        formatted: "$1,099.99",
        raw: 109999,
      },
      stock: 2,
      description:
        "BLACK EDITION GAMING Video Card. 11GB GDDR6, Dual HDB Fans, RGB.",
      imgSrc: "/img/evga-2080ti.png",
    },
    {
      id: 5,
      categories: ["RAM"],
      title: "G.SKILL Ripjaws Series 32GB DDR4 RAM",
      price: {
        formatted: "$138.99",
        raw: 13899,
      },
      stock: 3,
      description:
        "DDR4 3200 Desktop Memory Model, 2x16GB, Voltage 1.35V, Timing 16-18-18-38",
      imgSrc: "/img/gskill-ram.png",
    },
    {
      id: 6,
      categories: [],
      title: "APC 360W Uninterruptible Power Supply",
      price: {
        formatted: "$61.99",
        raw: 6199,
      },
      stock: 12,
      description:
        "BE670M1 675 VA / 360 Watt, USB Charing Port, Compact Form Factor.",
      imgSrc: "/img/ups.png",
    },

    {
      id: 7,
      categories: ["CPU"],
      title: "AMD Ryzen 5 3600 6-Core 3.6 GHz",
      price: {
        formatted: "$174.99",
        raw: 17499,
      },
      stock: 8,
      description:
        "AM4 socket, 65W Desktop processor. 7nm process, 32MB L3 Cache, 3MB L2 Cache.",
      imgSrc: "/img/ryzen9.png",
    },
    {
      id: 8,
      categories: ["CPU"],
      title: "Intel Core i9-9900K Coffee Lake 8-Core 3.6 GHz",
      price: {
        formatted: "$524.99",
        raw: 52499,
      },
      stock: 5,
      description:
        "LGA 1151 socket 95W Desktop Processor, Intel UHD Graphics 630, Max Turbo 5.0 GHz, Optane Support.",
      imgSrc: "/img/intel-i9.png",
    },
    {
      id: 9,
      categories: ["Storage"],
      title: "Seagate BarraCuda 2TB 7200 RPM Hard Drive",
      price: {
        formatted: "$50.99",
        raw: 5099,
      },
      stock: 15,
      description:
        "Versatile HDDs for all your PC needs bring you industry-leading excellence in personal computing.",
      imgSrc: "/img/barracuda-hdd.png",
    },
    {
      id: 10,
      categories: ["RAM"],
      title: "CORSAIR Vengeance RGB Pro 16GB DDR4 RAM",
      price: {
        formatted: "$99.99",
        raw: 9999,
      },
      stock: 13,
      description: "DDR4 3200, Voltage 1.35V, Timing 16-18-18-36",
      imgSrc: "/img/corsair-ram.png",
    },
    {
      categories: ["GPU"],
      id: 11,
      title: "GIGABYTE Radeon RX 5700 XT",
      price: {
        formatted: "$409.99",
        raw: 40999,
      },
      stock: 11,
      description:
        "GAMING OC Video Card. 8GB GDDR6, PCIe 4.0, 7nm RDNA Arch, FreeSync 2 HDR",
      imgSrc: "/img/rx5700xt.png",
    },
  ],
};
