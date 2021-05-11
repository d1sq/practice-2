import React from "react";
import { TabMenu } from "primereact/tabmenu";
import './NavMenu.scss'
const NavMenu = () => {
  const items = [
    { label: "Main page", icon: "pi pi-fw pi-home" },
    { label: "Books", icon: "pi pi-fw pi-book" },
    { label: "Authors", icon: "pi pi-fw pi-user" },
    { label: "Genres", icon: "pi pi-fw pi-list" },
    { label: "Add New", icon: "pi pi-fw pi-plus" },
  ];

  return (
    <div className="navigation">
      <TabMenu model={items} />
    </div>
  );
};

export default NavMenu;
