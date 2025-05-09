import Content from "./Content";
import { useState } from "react";

const Header = ({ headerData , setMenuState}) => {


    const menuClick = (menuItem) => {
        setMenuState(menuItem); // Update the state when a menu item is clicked
    }


    return (
        <>
            <header className="container text-light">
                <div className="col-12 d-flex align-items-center fs-5">
                    <div className="col-3">
                        <img
                            width={230}
                            src="https://hdhub4u.graphics/wp-content/uploads/2021/05/hdhub4ulogo.png"
                            alt=""
                        />
                    </div>
                    <div className="col-9">
                        <ul className="d-flex  list-unstyled">
                            <li>Home</li>
                            {
                                headerData.menu.map((val, index) => {
                                    if (val.GENERs) {
                                        return (
                                            <li className="ms-5 dropdown position-relative" key={index}>
                                                GENERs 👇🏻
                                                <ul className="dropdown-menu">
                                                    {val.GENERs.map((gen, id) => (
                                                        <li className="dropdown-item" key={id}>
                                                            {/* <a href="">{gen}</a> */}
                                                            {/* <link rel="stylesheet" href="" onClick={() => menuClick(gen)} />{gen} */}
                                                            <button onClick={() => menuClick(gen)}>{gen}</button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>)
                                    }
                                    else {
                                        return (
                                            
                                            <li key={index} className="ms-4">
                                                
                                                {/* <a onClick={() => menuClick(val)} href="">{val}</a> */}
                                                {/* <link rel="stylesheet" href="" onClick={() => menuClick(val)} />{val} */}
                                                <button onClick={() => menuClick(val)}>{val}</button>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>

                    </div>

                </div>
            </header>
           
        </>
    );
};

export default Header;