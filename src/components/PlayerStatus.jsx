/**
 * Finish the PlayerStatus component so that it follows the current status of the player.
 * - The status can be either "online" or "away".
 * - When the component first renders, the player should be "online".
 * - The toggleStatus function should change the status variable.
 * - The component should count how many times the user changed their status, using the counter.
 * - When the component first renders, the counter should be 1.
 * - The counter should be updated within useEffect when status changes.
 *
 * For example, after the first render, the div element with id root should look like this:
 *
 *   <div>
 *     <h1>Online</h1>
 *     <h3>1</h3>
 *     <button>Toggle status</button>
 *   </div>
 */

import React, { useState, useEffect, useRef } from "react";

export function PlayerStatus() {
  const [status, setStatus] = useState("Online");
  const [counter, setCounter] = useState(0);
  const isInitialRender = useRef(true);

  function onToggleStatus() {
    setStatus((prevStatus) => (prevStatus === "Online" ? "Away" : "Online"));
  }

  useEffect(() => {
	// Skip the effect on the initial render
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    // Increment the counter only if the status is "Away" or "Online"
    if (status === "Away" || status === "Online") {
      setCounter((prevCounter) => prevCounter + 1);
    }
  }, [status]);

  return (
    <div>
      <h1>{status}</h1>
      <h3>{counter}</h3>
      <button onClick={onToggleStatus}>Toggle status</button>
    </div>
  );
}
