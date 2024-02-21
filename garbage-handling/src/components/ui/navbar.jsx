import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col md:flex-row bg-black items-center border-none">
                <div className="flex-1 cursor-pointer" onClick={() => navigate("/")}>
                    <p className="text-white mx-12 text-2xl ">Intelligent Garbage Handling</p>
                </div>
                <div className="flex-1 flex items-center" >
                    <Button className="bg-transparent hover:bg-white hover:text-black py-6 h-full flex-1 rounded-none" onClick={() => navigate("/map")}>Map view</Button>
                    <Button className="bg-transparent hover:bg-white hover:text-black py-6 h-full flex-1 rounded-none" onClick={() => navigate("/dashboard")}>Dashboard</Button>
                    <Button className="bg-transparent hover:bg-white hover:text-black py-6 h-full flex-1 rounded-none" onClick={() => navigate("/about")}>About</Button>

                </div>
            </div>
        </>
    );
}
