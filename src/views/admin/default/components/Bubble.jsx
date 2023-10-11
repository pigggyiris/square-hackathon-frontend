import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Bubble = ({ title, content, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex-grow p-2"
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`ml-3 flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white shadow-lg hover:bg-opacity-90 ${color} bubble-animation w-full rounded`}
      >
        {title}
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute left-0 top-[-100%] z-10 ml-16 mt-12 w-72 rounded-lg border bg-white p-4 shadow-xl">
          <p className="text-black">{content}</p>
        </div>
      </Transition>
    </div>
  );
};

export default Bubble;
