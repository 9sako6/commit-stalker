import React from "react";
import "./request-left-card.scss";

export const REQUEST_LEFT_CARD_ID = "request-left-card";
export default function RequestLeftCard() {
  return (
    <div className="request-left-card">
      <a href="https://developer.github.com/v3/#rate-limiting" target="_blank">
        The GitHub API's rate limit allows for up to 60 requests per hour
      </a>
    </div>
  );
}
