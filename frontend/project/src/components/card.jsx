// src/components/ui/Card.jsx
const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="p-6">{children}</div>;
};

const CardHeader = ({ children, className }) => {
  return <div className={`p-6 border-b ${className}`}>{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h2 className="text-xl font-bold">{children}</h2>;
};

export { Card, CardContent, CardHeader, CardTitle };
