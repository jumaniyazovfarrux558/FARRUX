import React from "react";
import Icon, { Logo } from "./Icons.jsx";
import { NAV } from "./data.js";

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <Logo />
        <span>KANBAN</span>
      </div>

      <nav className="nav">
        {NAV.map((item) => (
          <button
            key={item.key}
            className={"nav-item" + (active === item.key ? " active" : "")}
            onClick={() => onNavigate(item.key)}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="nav nav-bottom">
        <button className="nav-item">
          <Icon name="settings" />
          <span>Settings</span>
        </button>
        <button className="nav-item">
          <Icon name="logout" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
