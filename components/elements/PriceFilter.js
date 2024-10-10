import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
  const [price, setPrice] = useState([0, 1000]); // initial price range

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Price Range: ${price[0]} - ${price[1]}`);
    // Add your filter logic here
  };

  return (
    <div className="range-slider">
        <Slider
          range
          min={0}
          max={2000}
          value={price}
          onChange={handlePriceChange}
          allowCross={false}
        />
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="property-amount" 
            name="field-name" 
            value={`$${price[0]} - $${price[1]}`} 
            readOnly 
          />
          <input type="submit" value="Filter" />
        </form>
    </div>
  );
};

export default PriceFilter;
