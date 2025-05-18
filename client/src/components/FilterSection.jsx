import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

  const FilterSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-sm">{title}</h3>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500"
          >
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
        {isOpen && <div className="pl-1">{children}</div>}
      </div>
    );
  };

export default FilterSection