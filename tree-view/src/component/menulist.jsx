
import { Plus, Minus } from "lucide-react";
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
        <div className="w-full max-w-md p-4">
            {menuData.map((data) => (
                <div key={data.id} className="py-1">

                    {/* Parent menu */}
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <button
                            className="flex items-center justify-center w-6 h-6 rounded hover:bg-gray-200 text-gray-600"
                            onClick={() => toggleMenu(data.id)}
                        >
                            {isOpen.includes(data.id)
                                ? <Minus size={16} />
                                : <Plus size={16} />}
                        </button>

                        <span className="font-semibold text-gray-800">
                            {data.label}
                        </span>
                    </div>

                    {/* Child menus */}
                    {isOpen.includes(data.id) && (
                        data.children.map((child) => (
                            <div key={child.id} className="ml-8">

                                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <button
                                        className="flex items-center justify-center w-6 h-6 rounded hover:bg-gray-200 text-gray-600"
                                        onClick={() => toggleMenu(child.id)}
                                    >
                                        {isOpen.includes(child.id)
                                            ? <Minus size={16} />
                                            : <Plus size={16} />}
                                    </button>

                                    <span className="text-gray-700">
                                        {child.label}
                                    </span>
                                </div>

                                {/* Grandchild menus */}
                                {isOpen.includes(child.id) && (
                                    child.children.map((y) => (
                                        <div
                                            key={y.id}
                                            className="ml-8 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            <p className="text-sm text-gray-600">
                                                {y.label}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        ))
                    )}
                </div>
            ))}
        </div>
    );
}
