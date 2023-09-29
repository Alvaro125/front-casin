'use client'
import styled from "styled-components";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

const Line = styled.div`
  width: calc(100%+400px);
  left: -400px;
  display: flex;

  div {
    background-color: #39b5ff;
    color: black;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    white-space: nowrap;
    animation: animate 60s linear infinite;
    animation-delay: -60s;
  }
  div:nth-child(2) {
    animation: animate-two 60s linear infinite;
    animation-delay: -30s;
  }

  @keyframes animate {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes animate-two {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;

export function Tape() {
  return (
    <div className="overflow-hidden absolute left-0 w-full bottom-0">
      <Line>
        <div>
          <span>
          salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians
          </span>
        </div>
        <div>
          <span>
          salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians salve o corinthians
          </span>
        </div>
      </Line>
    </div>
  );
}
