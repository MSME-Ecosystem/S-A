import Image from "next/image";
import React from "react";
import Link from "next/dist/client/link";

function Navheader() {
  return (
    <>

 
    <div className="nav-header">
       <Link className="brand-logo" href="/dashboard">
            <Image            
              src="/dashboard/images/logos/logo.png"
              width={50}
              height={50}
              alt="logo"
              className="logo-abbr img-fluid"
            />
            <h4 className="brand-title">Smart Agriculture</h4>
        </Link>
      <div className="nav-control">
        <div className="hamburger">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Navheader;
