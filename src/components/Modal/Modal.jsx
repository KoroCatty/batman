import React from "react";
import { useState } from "react";

import './Modal.css'
export const  Modal =()=> {
    const [isPopUp, setIsPopoUp] = useState(false);

    const togglePopover = () => {
        setIsPopoUp(!isPopUp);
    };
  
    return (
      <div className="popover-container">
        <button onClick={togglePopover} className="btn">Open Popover</button>
        {isPopUp && (
          <div className="popover">
            <div className="popover-content">
            <div className="flex flex-col gap-1">Modal Title</div>
              <div className="popover-body">
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Modal