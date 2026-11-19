
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
                <div key={data.id}>
                    <button onClick={() => toggleMenu(data.id)}>
                        {isOpen.includes(data.id) ? "-" : "+"}
                    </button>

                    <span>{data.label}</span>
                </div>
            ))}
        </>
    );
}
