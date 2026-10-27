import React from "react";
import Icon from "./Icons.jsx";
import { PAGE_SIZE } from "./data.js";

const statusClass = (s) =>
  s === "Out of stock" ? "red" : s === "Low stock" ? "orange" : "green";

export default function Inventory({ products, page, setPage, onAdd, onOpen }) {
  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const visible = products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  return (
    <>
      <section className="card overview">
        <h2 className="card-title">Overall Inventory</h2>
        <div className="stats">
          <div className="stat">
            <div className="stat-head blue">Categories</div>
            <div className="stat-row">
              <div>
                <div className="stat-val">14</div>
                <div className="stat-sub">Last 7 days</div>
              </div>
            </div>
          </div>
          <div className="stat">
            <div className="stat-head orange">Total Products</div>
            <div className="stat-row">
              <div>
                <div className="stat-val">868</div>
                <div className="stat-sub">Last 7 days</div>
              </div>
              <div>
                <div className="stat-val">₹25000</div>
                <div className="stat-sub">Revenue</div>
              </div>
            </div>
          </div>
          <div className="stat">
            <div className="stat-head purple">Top Selling</div>
            <div className="stat-row">
              <div>
                <div className="stat-val">5</div>
                <div className="stat-sub">Last 7 days</div>
              </div>
              <div>
                <div className="stat-val">₹2500</div>
                <div className="stat-sub">Cost</div>
              </div>
            </div>
          </div>
          <div className="stat">
            <div className="stat-head red">Low Stocks</div>
            <div className="stat-row">
              <div>
                <div className="stat-val">12</div>
                <div className="stat-sub">Ordered</div>
              </div>
              <div>
                <div className="stat-val">2</div>
                <div className="stat-sub">Not in stock</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card products">
        <div className="products-head">
          <h2 className="card-title">Products</h2>
          <div className="actions">
            <button className="btn primary" onClick={onAdd}>
              Add Product
            </button>
            <button className="btn outline">
              <Icon name="filter" size={16} />
              Filters
            </button>
            <button className="btn outline">Download all</button>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Products</th>
              <th>Buying Price</th>
              <th>Quantity</th>
              <th>Threshold Value</th>
              <th>Expiry Date</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((p) => (
              <tr key={p.id} onClick={() => onOpen(p)}>
                <td>{p.name}</td>
                <td>₹{p.price}</td>
                <td>
                  {p.qty} {p.unit}
                </td>
                <td>
                  {p.threshold} {p.unit}
                </td>
                <td>{p.expiry}</td>
                <td className={statusClass(p.status)}>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pager">
          <button
            className="btn outline small"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="btn outline small"
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}
