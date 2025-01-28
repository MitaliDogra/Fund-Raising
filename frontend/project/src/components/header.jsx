import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between items-center bg-orange-500 text-white py-4 px-8 shadow-md">
            <div className="text-xl font-bold">Fundraiser</div>
            <nav className="flex gap-6">
                <a href="#profile" className="text-white text-base hover:text-orange-200">Profile</a>
                <a href="#about" className="text-white text-base hover:text-orange-200">About Us</a>
                <a href="#contact" className="text-white text-base hover:text-orange-200">Contact Us</a>
            </nav>
        </header>
    );
};

export default Header;
