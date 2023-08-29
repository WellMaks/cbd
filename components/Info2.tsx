type Info2Props = {
  title: string;
  smallText: string;
  bgColor: "white" | "teal-500" | "green-500";
};

const Info2: React.FC<Info2Props> = ({ title, smallText, bgColor }) => {
  const bgClass = {
    white: "bg-white",
    "teal-500": "bg-teal-500",
    "green-500": "bg-green-500",
  }[bgColor];
  return (
    <div className={`flex items-center ${bgClass}`}>
      <div className="flex-1/3 p-4">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <div className="flex-2/3 p-4">
        <p className="text-xs">{smallText}</p>
      </div>
    </div>
  );
};

export default Info2;
