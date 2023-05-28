import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkModeIcon() {
  const { darkMode } = useContext(ThemeContext);
  return darkMode ? (
    <svg
      version="1.1"
      id="Layer_1_1_"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 16 16"
      width="24px"
      fill="#fff"
    >
      <circle cx="8.5" cy="7.5" r="4.5" />
      <rect x="8" width="1" height="2" />
      <rect x="8" y="13" width="1" height="2" />
      <rect x="14" y="7" width="2" height="1" />
      <rect x="1" y="7" width="2" height="1" />
      <rect
        x="12.596"
        y="11.096"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.7175 12.8033)"
        width="1"
        height="2"
      />
      <rect
        x="3.404"
        y="1.904"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.9099 3.6109)"
        width="1"
        height="2"
      />
      <rect
        x="2.904"
        y="11.596"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.4099 6.3033)"
        width="2"
        height="1"
      />
      <rect
        x="12.096"
        y="2.404"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.7823 10.1107)"
        width="2"
        height="1"
      />
    </svg>
  ) : (
    <svg
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      width="24px"
    >
      <g>
        <path
          d="M17,4c-0.2,0-0.5,0-0.7,0l-0.1,0c-0.4,0-0.8,0.4-0.9,0.8s0.1,0.9,0.5,1.1C18.4,7.3,20,10,20,13c0,4.4-3.6,8-8,8
     c-2.3,0-4.6-1-6.1-2.8c-0.3-0.3-0.8-0.4-1.2-0.3c-0.4,0.2-0.6,0.6-0.6,1.1c1,6.4,6.4,11,12.8,11c7.2,0,13-5.8,13-13S24.2,4,17,4z"
        />
        <path
          d="M6,13.2C6.1,13.7,6.5,14,7,14s0.9-0.3,1-0.8c0.5-2.2,1-2.7,3.3-3.3C11.7,9.9,12,9.5,12,9s-0.3-0.9-0.8-1C9,7.5,8.5,7,8,4.8
     C7.9,4.3,7.5,4,7,4S6.1,4.3,6,4.8C5.5,7,5,7.5,2.8,8C2.3,8.1,2,8.5,2,9s0.3,0.9,0.8,1C5,10.5,5.5,11,6,13.2z"
        />
        <path d="M11,14c-0.6,0-1,0.4-1,1s0.4,1,1,1c0,0.6,0.4,1,1,1s1-0.4,1-1c0.6,0,1-0.4,1-1s-0.4-1-1-1c0-0.6-0.4-1-1-1S11,13.4,11,14z" />
      </g>
    </svg>
  );
}
