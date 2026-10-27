import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import Inventory from "./Inventory.jsx";
import AddProductModal from "./AddProductModal.jsx";
import ProductDetail from "./ProductDetail.jsx";
import { INITIAL_PRODUCTS } from "./data.js";

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);

  const goTo = (key) => {
    if (key === "inventory") setSelected(null);
  };

  return (
    <div className="app">
      <Sidebar active="inventory" onNavigate={goTo} />
      <div className="main">
        <Topbar />
        <div className="content">
          {selected ? (
            <ProductDetail product={selected} />
          ) : (
            <Inventory
              products={products}
              page={page}
              setPage={setPage}
              onAdd={() => setModal(true)}
              onOpen={setSelected}
            />
          )}
        </div>
      </div>

      {modal && (
        <AddProductModal
          onClose={() => setModal(false)}
          onSave={(p) => {
            setProducts([...products, p]);
            setModal(false);
          }}
        />
      )}
    </div>
  );
}
