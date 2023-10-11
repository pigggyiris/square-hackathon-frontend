import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Bubble = ({ title, content, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex-grow p-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-2 text-white shadow-lg ${color} w-full rounded`}
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
        <div className="absolute left-0 top-0 ml-16 mt-12 w-72 rounded-lg border bg-white p-4 shadow-xl">
          <p className="text-black">{content}</p>
        </div>
      </Transition>
    </div>
  );
};

export default Bubble;
