import React, { useEffect, useState } from "react";

export const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`header-animate ml-5 mt-5 text-fall-900 ${
        loaded ? "slide-in" : ""
      }`}
    >
      <div className="font-caveat text-3xl font-bold leading-tight tracking-tight text-fall-50 ">
        <p>Hello, Coffee Lover!</p>
      </div>
      <div className="mt-4">
        <p className="font-caveat text-xl leading-relaxed text-softgreen-50">
          A good day starts with a cup of coffee ☕
        </p>
      </div>
    </div>
  );
};
