// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import { BsSearch, BsCart } from "react-icons/bs";

// const Header = (props) => {
//   return (
//     <>
//       <header className="header-top-strip">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-6">
//               <p className="text-white mb-0">Free Shipping over ₱500 </p>
//             </div>
//             <div className="col-6">
//               <p className="text-end text-white mb-0">
//                 Cellphone Number:
//                 <a className="text-white" href="tel: +639112244556">
//                   +639112244556
//                 </a>
//               </p>
//             </div>
//             {/*END COL*/}
//           </div>
//           {/*END ROW*/}
//         </div>
//         {/*END CONTAINER*/}
//       </header>
//       {/*END HEADER*/}

//       <header className="header-upper">
//         <div className="container-xxl">
//           <div className="row align-items-center">
//             <div className="col-2">
//               <Link className="img-responsive">
//                 <img src="images/GabsplateLogo.png" alt="" />
//               </Link>
//             </div>
//             {/*END COL-2*/}

//             <div className="col-5 justify-content-end">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control py-2"
//                   placeholder="Search Product Here..."
//                   aria-label="Search Product Here..."
//                   aria-describedby="basic-addon2"
//                 />
//                 <span className="input-group-text p-3" id="basic-addon2">
//                   <BsSearch className="fs-6" />
//                 </span>
//               </div>
//               {/*END INPUT GROUP*/}
//             </div>
//             {/*END COL-5*/}

//             <div className="col-5">
//               <div className="header-upper-links d-flex align-items-center justify-content-end">
//                 <div>
//                   <Link className="d-flex">
//                     <BsCart className="bsCart" />
//                     <span className="navbar-brand mb-0 h1">
//                       <span>
//                         {props.totalCount > 0 && (
//                           <span className="badge bg-secondary ms-2">
//                             {props.totalCount}
//                           </span>
//                         )}
//                       </span>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//               {/*END HEADER-UPPER-LINKS*/}
//             </div>
//             {/*END COL-5*/}
//           </div>
//           {/*END ROW*/}
//         </div>
//         {/*END CONTAINER*/}
//       </header>
//       {/*END HEADER*/}

//       <header className="header-bottom py-3">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-12">
//               <div className="menu-bottom d-flex align-items-center">
//                 <div></div>
//                 <div className="menu-links">
//                   <div className="d-flex align-items-center gap-15">
//                     <NavLink to="/">Home</NavLink>
//                     <NavLink to="/">Our Store</NavLink>
//                     <NavLink to="/">Contact</NavLink>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       {/*END HEADER*/}
//     </>
//   );
// };

// export default Header;

import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free Shipping over ₱500 </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Cellphone Number:
                <a className="text-white" href="tel: +639112244556">
                  +639112244556
                </a>
              </p>
            </div>
            {/*END COL*/}
          </div>
          {/*END ROW*/}
        </div>
        {/*END CONTAINER*/}
      </header>
      {/*END HEADER*/}

      <header className="header-upper">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <Link className="img-responsive">
                <img src="images/GabsplateLogo.png" alt="" />
              </Link>
            </div>
            {/*END COL-2*/}
            <div className="col-5 justify-content-end">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
              {/*END INPUT GROUP*/}
            </div>
            {/*END COL-5*/}
            {/* 
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-end">
                <div>
                  <div
                    className="shopping-cart"
                    onClick={() => navigate("/cart")}
                  >
                    <ShoppingCart id="cartIcon" />
                    <p>{getTotalQuantity() || 0}</p>
                  </div>
                </div>
              </div> */}
            {/*END HEADER-UPPER-LINKS*/}
            {/* </div> */}s{/*END COL-5*/}
          </div>
          {/*END ROW*/}
        </div>
        {/*END CONTAINER*/}
      </header>
      {/*END HEADER*/}

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center">
                <div></div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="">Our Store</NavLink>
                    <NavLink to="">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*END HEADER*/}
    </>
  );
};

export default Header;
