import React from "react";
import Icon from "./Icons.jsx";

export default function Topbar() {
  return (
    <header className="topbar">
      <label className="search">
        <Icon name="search" size={18} />
        <input placeholder="Search product, supplier, order" />
      </label>
      <div className="topbar-right">
        <button className="icon-btn" aria-label="Notifications">
          <Icon name="bell" size={17} />
        </button>
        <div className="avatar" aria-label="Profile">
          <svg viewBox="0 0 40 40" width="40" height="40">
            <rect width="40" height="40" fill="#8c8c8c" />
            <circle cx="20" cy="16" r="8" fill="#3a2a22" />
            <path d="M4 40c1-9 8-13 16-13s15 4 16 13Z" fill="#1d1d1f" />
          </svg>
        </div>
      </div>
    </header>
  );
}
