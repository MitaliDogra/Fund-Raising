// src/components/ui/Button.jsx
const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-lg font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
