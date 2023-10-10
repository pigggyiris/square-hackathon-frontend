const CustomButton = ({ label, onClick, className }) => {
  return (
    <button
      className={`ml-3 h-10 w-20 rounded-xl bg-fall-900 px-3 py-2 text-sm  font-medium text-white transition duration-200 hover:bg-fall-600 active:bg-fall-950 dark:bg-brand-400 dark:text-white dark:hover:bg-fall-300 dark:active:bg-fall-200 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
