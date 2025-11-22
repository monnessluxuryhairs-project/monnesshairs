// src/data/valueSectionData.js
import { FaGem, FaHeart, FaCrown } from "react-icons/fa";

const valuesData = [
  {
    id: "quality",
    icon: FaGem, // component reference, we will render it
    title: "Quality",
    desc: "Only the finest 100% virgin human hair, hand-selected for perfection and longevity.",
  },
  {
    id: "passion",
    icon: FaHeart,
    title: "Passion",
    desc: "Driven by love for beauty and dedication to making every client feel extraordinary.",
  },
  {
    id: "luxury",
    icon: FaCrown,
    title: "Luxury",
    desc: "Elevating your style with premium products that make you feel like royalty.",
  },
];

export default valuesData;
