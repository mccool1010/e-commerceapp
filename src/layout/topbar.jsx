import React from 'react';
import {Link} from "react-router-dom";

const Topbar = () => {

    return (
        <header className="bg-[#fe0133] p-2 border-b border-neutral-400/20 shadow">
            <div className="container mx-auto">
                <Link to={`/`}>
                    <img src="/logo-white.svg" className="w-[90px]" />
                </Link>
            </div>
        </header>
    )

};

export default Topbar;