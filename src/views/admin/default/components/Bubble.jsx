import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";

const Bubble = ({ title, content, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bubbleRef = useRef(null);

  const handleMouseEnter = () => {
    if (bubbleRef.current) {
      bubbleRef.current.classList.add("bubble-animation");
    }
  };

  const handleMouseLeave = () => {
    if (bubbleRef.current) {
      bubbleRef.current.classList.remove("bubble-animation");
    }
    setIsOpen(false);
  };

  return (
    <div
      className="relative flex-grow p-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={bubbleRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`ml-3 flex items-center justify-center rounded-xl px-4 py-2 text-sm font-bold text-white shadow-lg ${color} w-full rounded`}
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
        <div className="absolute left-0 top-[-100%] z-10 ml-16 mt-12 w-72 rounded-lg border bg-fall-50 p-4 shadow-xl">
          <p className="text-black">{content}</p>
        </div>
      </Transition>
    </div>
  );
};

export default Bubble;
