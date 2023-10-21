/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import React, { useEffect, useRef, useState } from "react";
import "./ListItemsForNavigation.css";

const gameofDogsCast = [
  "Ser Pawlie",
  "Ser Barknight",
  "Maester Woofcraft",
  "Prince Barkin",
  "BarkFurion",
  "Sheldog",
  "Doggron",
  "IronPaw",
  "Ser Barkley",
  "Queen Rowrry",
];

export function ListItemsForNavigation(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const activeItemRef = useRef(null);

  useEffect(() => {
    if (isFocused && activeItemRef.current) {
      activeItemRef.current.focus();
    }
  }, [isFocused]);

  function handleItemClick(index) {
    setSelectedIndex(index);
    setIsFocused(true);
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowLeft":
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        setIsFocused(true);
        break;
      case "ArrowDown":
      case "ArrowRight":
        setSelectedIndex((prevIndex) =>
          prevIndex < gameofDogsCast.length - 1 ? prevIndex + 1 : prevIndex
        );
        setIsFocused(true);
        break;
      case "Enter":
        setIsFocused(false);
        break;
      default:
        setIsFocused(true);
        break;
    }
  }

  return (
    <ul className="navigation-list" onKeyDown={handleKeyDown} tabIndex={0}>
      {gameofDogsCast.map((item, index) => (
        <li key={index}>
          <button
            className={selectedIndex === index ? "focused" : ""}
            ref={selectedIndex === index ? activeItemRef : null}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
