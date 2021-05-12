import React from "react";
import { TabMenu } from "primereact/tabmenu";
import { Link } from "react-router-dom";
import "./NavMenu.scss";
const NavMenu = () => {
  const items = [
    { label: "Main page", icon: "pi pi-fw pi-home", link: "/" },
    { label: "Books", icon: "pi pi-fw pi-book", link: "/books" },
    { label: "Authors", icon: "pi pi-fw pi-user", link: "/authors" },
    { label: "Genres", icon: "pi pi-fw pi-list", link: "/genres" },
    { label: "Add New", icon: "pi pi-fw pi-plus", link: "/new" },
  ];

  return (
    <div className="navigation">
      <TabMenu model={items}/>      
    </div>
  );
};

export default NavMenu;
