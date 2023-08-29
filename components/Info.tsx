"use client";

type ElementProps = {
  imageUrl: string;
  title: string;
  text: string;
};

const Element: React.FC<ElementProps> = ({ imageUrl, title, text }) => {
  return (
    <div className="flex items-center space-x-4 py-4 pb-24">
      <img
        src={imageUrl}
        alt={title}
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Element;
