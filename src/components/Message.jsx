/*
 * The Message component contains an button element and
 * a paragraph below the button. Rendering of the paragraph
 * should be toggled by clicking on the button element
 * using the following logic:
 *
 * - At the start, the paragraph should not be rendered.
 * - After a click, the paragraph should be rendered.
 * - After another click, the paragraph should not be rendered.
 * - Finish the Message component by implementing this logic.
 */

import React, { useState } from "react";

export function Message() {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const toggleParagraph = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <>
      <button onClick={toggleParagraph}>
        {isParagraphVisible === true ? "Collapse message" : "Want to buy a new car?"}
      </button>
      {isParagraphVisible && <p>Call +11 22 33 44 now!</p>}
    </>
  );
}