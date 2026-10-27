import React, { useState } from "react";
import Icon from "./Icons.jsx";
import { DETAIL_OVERRIDES, STORES, SUPPLIER } from "./data.js";

const TABS = ["Overview", "Purchases", "Adjustments", "History"];

function ProductImage() {
  // Generic noodle-pack illustration (no brand artwork)
  return (
    <svg viewBox="0 0 100 130" width="86" height="112" aria-hidden="true">
      <rect x="4" y="4" width="92" height="122" rx="6" fill="#f7d417" />
      <rect x="4" y="4" width="92" height="30" rx="6" fill="#e1251b" />
      <text x="50" y="25" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="Inter, sans-serif">
        NOODLES
      </text>
      <ellipse cx="50" cy="75" rx="30" ry="22" fill="#fff4cc" />
      <path d="M26 72c8-8 14 8 24 0s14 8 24 0M28 82c8-8 14 8 22 0s14 8 22 0" stroke="#e9a400" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="18" y="104" width="64" height="10" rx="3" fill="#e1251b" opacity="0.85" />
    </svg>
  );
}

export default function ProductDetail({ product }) {
  const [tab, setTab] = useState("Overview");
  const o = DETAIL_OVERRIDES[product.id] || {};
  const expiry = o.expiry || product.expiry;
  const threshold = o.threshold ?? product.threshold;
  const opening = o.opening ?? product.qty;
  const remaining = o.remaining ?? product.qty;
  const onTheWay = o.onTheWay ?? 10;

  return (
    <section className="card detail">
      <div className="detail-head">
        <h2 className="detail-title">{product.name}</h2>
        <div className="actions">
          <button className="btn outline">
            <Icon name="edit" size={15} />
            Edit
          </button>
          <button className="btn outline">Download</button>
        </div>
      </div>

      <div className="tabs">
        {TABS.map((t) => (
          <button key={t} className={"tab" + (tab === t ? " active" : "")} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>

      {tab === "Overview" ? (
        <div className="detail-body">
          <div className="detail-left">
            <h4>Primary Details</h4>
            <dl>
              <dt>Product name</dt>
              <dd>{product.name}</dd>
              <dt>Product ID</dt>
              <dd>{product.id}</dd>
              <dt>Product category</dt>
              <dd>{product.category}</dd>
              <dt>Expiry Date</dt>
              <dd>{expiry}</dd>
              <dt>Threshold Value</dt>
              <dd>{threshold}</dd>
            </dl>

            <h4>Supplier Details</h4>
            <dl>
              <dt>Supplier name</dt>
              <dd>{SUPPLIER.name}</dd>
              <dt>Contact Number</dt>
              <dd>{SUPPLIER.contact}</dd>
            </dl>

            <h4>Stock Locations</h4>
            <table className="stock-table">
              <thead>
                <tr>
                  <th>Store Name</th>
                  <th>Stock in hand</th>
                </tr>
              </thead>
              <tbody>
                {STORES.map((s) => (
                  <tr key={s.name}>
                    <td>{s.name}</td>
                    <td className="link">{s.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="detail-right">
            <div className="image-box">
              {product.image ? (
                <img className="product-img" src={product.image} alt={product.name} />
              ) : (
                <ProductImage />
              )}
            </div>
            <ul className="metrics">
              <li>
                <span>Opening Stock</span>
                <b>{opening}</b>
              </li>
              <li>
                <span>Remaining Stock</span>
                <b>{remaining}</b>
              </li>
              <li>
                <span>On the way</span>
                <b>{onTheWay}</b>
              </li>
              <li>
                <span>Threshold value</span>
                <b>{threshold}</b>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="empty">No {tab.toLowerCase()} to show yet.</div>
      )}
    </section>
  );
}
