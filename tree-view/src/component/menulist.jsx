
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

                    {isOpen.includes(data.id) && (
                        data.children.map((child) => (
                            <div key={child.id}>
                                <button onClick={() => toggleMenu(child.id)}>
                                    {isOpen.includes(child.id) ? "-" : "+"}
                                </button>

                                <span>{child.label}</span>

                                {isOpen.includes(child.id) && (
                                    child.children.map((y) => (
                                        <div key={y.id}>
                                            {y.label}
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
