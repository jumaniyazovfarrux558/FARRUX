import React, { useRef, useState } from "react";

const EMPTY = {
  name: "",
  id: "",
  category: "",
  price: "",
  qty: "",
  unit: "",
  expiry: "",
  threshold: "",
};

export default function AddProductModal({ onClose, onSave }) {
  const [f, setF] = useState(EMPTY);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const [image, setImage] = useState(null);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef(null);

  const readFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim()) return;
    onSave({
      id: f.id || String(Math.floor(100000 + Math.random() * 900000)),
      name: f.name.trim(),
      image,
      category: f.category || "General",
      price: Number(f.price) || 0,
      qty: Number(f.qty) || 0,
      unit: f.unit || "Packets",
      threshold: Number(f.threshold) || 0,
      expiry: f.expiry || "-",
      status:
        Number(f.qty) === 0
          ? "Out of stock"
          : Number(f.qty) <= Number(f.threshold)
          ? "Low stock"
          : "In- stock",
    });
  };

  const Row = ({ label, k, placeholder, type = "text" }) => (
    <div className="form-row">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={f[k]} onChange={set(k)} />
    </div>
  );

  return (
    <div className="overlay" onClick={onClose}>
      <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <h3>New Product</h3>

        <div
          className="dropzone"
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
            readFile(e.dataTransfer.files[0]);
          }}
        >
          <div className={"drop-box" + (drag ? " drag" : "")}>
            {image && <img src={image} alt="Product preview" />}
          </div>
          <div className="drop-text">
            Drag image here
            <br />
            or
            <br />
            <a
              href="#browse"
              onClick={(e) => {
                e.preventDefault();
                fileRef.current && fileRef.current.click();
              }}
            >
              Browse image
            </a>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => readFile(e.target.files[0])}
          />
        </div>

        <Row label="Product Name" k="name" placeholder="Enter product name" />
        <Row label="Product ID" k="id" placeholder="Enter product ID" />
        <Row label="Category" k="category" placeholder="Select product category" />
        <Row label="Buying Price" k="price" placeholder="Enter buying price" />
        <Row label="Quantity" k="qty" placeholder="Enter product quantity" />
        <Row label="Unit" k="unit" placeholder="Enter product unit" />
        <Row label="Expiry Date" k="expiry" placeholder="Enter expiry date" />
        <Row label="Threshold Value" k="threshold" placeholder="Enter threshold value" />

        <div className="modal-actions">
          <button type="button" className="btn ghost" onClick={onClose}>
            Discard
          </button>
          <button type="submit" className="btn primary">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
