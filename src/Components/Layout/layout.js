import React from "react";
import classes from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>Bookstore</header>
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer} />
    </div>
  );
};

export default Layout;
