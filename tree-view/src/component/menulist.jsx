
import menuData from "../data/menudata";
import { useState } from "react";

export default function MenuList() {
    const [isOpen, setIsOpen] = useState([]);

    function toggleMenu(id) {
        if (isOpen.includes(id)) {
            setIsOpen(isOpen.filter((menuId) => menuId !== id));
        } else {
            setIsOpen([...isOpen, id]);
        }
    }

    return (
        <>
            {menuData.map((data) => (
                <div key={data.id} className="py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <button
                        className="w-7 h-7 rounded-md hover:bg-gray-200 font-bold text-gray-600"
                        onClick={() => toggleMenu(data.id)}
                    >
                        {isOpen.includes(data.id) ? "-" : "+"}
                    </button>

                    <span className="ml-2 font-semibold text-gray-800">
                        {data.label}
                    </span>

                    {isOpen.includes(data.id) && (
                        data.children.map((child) => (
                            <div key={child.id} className="p-[2px] px-[60px] hover:bg-gray-300">
                                <button
                                    className="w-7 h-7 font-bold text-gray-600 text-[20px] rounded-md hover:bg-gray-200"
                                    onClick={() => toggleMenu(child.id)}
                                >
                                    {isOpen.includes(child.id) ? "-" : "+"}
                                </button>

                                <span>{child.label}</span>

                                {isOpen.includes(child.id) && (
                                    child.children.map((y) => (
                                        <div key={y.id} className="p-[2px] px-[80px] hover:bg-gray-400">
                                            <p>{y.label}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        ))
                    )}
                </div>
            ))}
        </>
    );
}
