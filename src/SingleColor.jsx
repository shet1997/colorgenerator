import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const handleClick = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("copied to clipboard");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("no values present");
    }
  };
  return (
    <article
      style={{ backgroundColor: `#${hex}` }}
      className={index > 10 ? "color color-light" : "color"}
      onClick={handleClick}
    >
      <p className="percent-value ">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
