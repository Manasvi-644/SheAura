import React from "react";
import "./CategoryBar.css";

function CategoryBar() {
  const categories = [
    "Makeup",
    "Skin",
    "Hair",
    "Bath & Body",
    "Appliances",
    "Natural",
    "Mom & Baby",
    "Beauty Advice",
    "Health & Wellness",
    "Fragnances"
  ];

  return (
    <div className="category-bar">
      {categories.map((item, index) => (
        <div key={index} className="category-item">
          {item}
        </div>
      ))}
    </div>
  );
}

export default CategoryBar;
