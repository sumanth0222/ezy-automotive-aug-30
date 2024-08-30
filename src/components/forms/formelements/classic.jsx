import React from "react";
import Pickr from "@simonwep/pickr";

// Classic
export function Classicmethod() {
  const colorPicker = React.useRef();

  React.useEffect(() => {
    if (colorPicker.current) {
      const pickr = Pickr.create({
        el: ".color-picker",
        theme: "classic",
         default: '#6c5ffc',
      swatches: [
        "rgba(244, 67, 54, 1)",
        "rgba(233, 30, 99, 0.95)",
        "rgba(156, 39, 176, 0.9)",
        "rgba(103, 58, 183, 0.85)",
        "rgba(63, 81, 181, 0.8)",
        "rgba(33, 150, 243, 0.75)",
        "rgba(3, 169, 244, 0.7)",
        "rgba(0, 188, 212, 0.7)",
        "rgba(0, 150, 136, 0.75)",
        "rgba(76, 175, 80, 0.8)",
        "rgba(139, 195, 74, 0.85)",
        "rgba(205, 220, 57, 0.9)",
        "rgba(255, 235, 59, 0.95)",
        "rgba(255, 193, 7, 1)",
      ],

      components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
          hex: true,
          rgba: true,
          hsva: true,
          input: true,
          clear: true,
          save: true,
        },
      },  

      });
        console.log(pickr);
    }
  
  }, []);

  return (
    
    <div className="App">
      <div className="color-picker" ref={colorPicker}></div>
    </div>
  );
}