import React from "react";

const Checkbox = (props) => {
    return (
        <label className="relative inline-block w-5 h-5">
            <input
                type="checkbox"
                className="peer appearance-none w-full h-full border border-gray-300 rounded-md bg-transparent transition-colors duration-300 cursor-pointer checked:bg-blue-500 checked:border-transparent"
                {...props}
            />
            <span className="pointer-events-none absolute top-[4px] left-[8px] w-[4px] h-[9px] border-r-2 border-b-2 border-white rotate-45 scale-0 opacity-0 transition-transform duration-200 peer-checked:scale-100 peer-checked:opacity-100" />
            <span className="pointer-events-none absolute inset-0 rounded-md transition-all duration-300 opacity-0 peer-active:opacity-100 peer-active:shadow-[0_0_0_8px_rgba(22,119,255,0.2)]" />
        </label>
    );
};

export default Checkbox;
