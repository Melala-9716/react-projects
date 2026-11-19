
import menuData from "../data/menudata";

export default function MenuList() {
    return (
        <>
            {menuData.map((data) => (
                <div key={data.id}>
                    {data.label}
                </div>
            ))}
        </>
    );
}
