import React from "react";
import "./Layout.css"

function Layout({ children }) {
  return (
    <React.Fragment>
      <main className="container layout">
        <div className="row">
          <div className="col-lg-12 col-12 content">{children}</div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Layout;
