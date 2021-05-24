import React from "react";
import { TabMenu } from "primereact/tabmenu";
import { useHistory } from "react-router-dom";
import "./NavMenu.scss";
const NavMenu = () => {
  let history = useHistory();
  const items = [
    { label: "Main page", icon: "pi pi-fw pi-home", link: "/", command: () => history.push("/")},
    { label: "Books", icon: "pi pi-fw pi-book", link: "/books" , command: () => history.push("/books")},
    { label: "Authors", icon: "pi pi-fw pi-user", link: "/authors", command: () => history.push("/authors") },
    { label: "Genres", icon: "pi pi-fw pi-list", link: "/genres", command: () => history.push("/genres") },
    { label: "Add New", icon: "pi pi-fw pi-plus", link: "/new", command: () => history.push("/new") },
  ];

  return (
    <div className="navigation">
      <TabMenu model={items}/>      
    </div>
  );
};

export default NavMenu;
