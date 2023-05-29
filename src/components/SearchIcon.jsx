import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SearchIcon() {
  const { darkMode } = useContext(ThemeContext);
  return darkMode ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white"
    >
      <path d="M20 21C19.8686 21.0003 19.7385 20.9746 19.6172 20.9243C19.4958 20.874 19.3856 20.8001 19.293 20.707L15.893 17.312C14.4975 18.4075 12.7742 19.002 11 19C9.41775 19 7.87103 18.5308 6.55544 17.6518C5.23985 16.7727 4.21447 15.5233 3.60897 14.0615C3.00347 12.5997 2.84504 10.9911 3.15372 9.43928C3.4624 7.88743 4.22433 6.46197 5.34315 5.34315C6.46197 4.22433 7.88743 3.4624 9.43928 3.15372C10.9911 2.84504 12.5997 3.00347 14.0615 3.60897C15.5233 4.21447 16.7727 5.23985 17.6518 6.55544C18.5308 7.87103 19 9.41775 19 11C19.0036 12.7766 18.409 14.5026 17.312 15.9L20.707 19.3C20.8444 19.4402 20.9376 19.6178 20.9748 19.8105C21.012 20.0033 20.9916 20.2028 20.9162 20.384C20.8408 20.5653 20.7137 20.7204 20.5508 20.8299C20.3879 20.9395 20.1963 20.9986 20 21V21ZM11 5C9.81332 5 8.65328 5.3519 7.66658 6.01119C6.67989 6.67047 5.91085 7.60755 5.45673 8.7039C5.0026 9.80026 4.88378 11.0067 5.11529 12.1705C5.3468 13.3344 5.91825 14.4035 6.75736 15.2426C7.59648 16.0818 8.66558 16.6532 9.82946 16.8847C10.9933 17.1162 12.1997 16.9974 13.2961 16.5433C14.3925 16.0892 15.3295 15.3201 15.9888 14.3334C16.6481 13.3467 17 12.1867 17 11C16.9982 9.40927 16.3654 7.88423 15.2406 6.75941C14.1158 5.63459 12.5907 5.00186 11 5V5Z" />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-black"
    >
      <path d="M20 21C19.8686 21.0003 19.7385 20.9746 19.6172 20.9243C19.4958 20.874 19.3856 20.8001 19.293 20.707L15.893 17.312C14.4975 18.4075 12.7742 19.002 11 19C9.41775 19 7.87103 18.5308 6.55544 17.6518C5.23985 16.7727 4.21447 15.5233 3.60897 14.0615C3.00347 12.5997 2.84504 10.9911 3.15372 9.43928C3.4624 7.88743 4.22433 6.46197 5.34315 5.34315C6.46197 4.22433 7.88743 3.4624 9.43928 3.15372C10.9911 2.84504 12.5997 3.00347 14.0615 3.60897C15.5233 4.21447 16.7727 5.23985 17.6518 6.55544C18.5308 7.87103 19 9.41775 19 11C19.0036 12.7766 18.409 14.5026 17.312 15.9L20.707 19.3C20.8444 19.4402 20.9376 19.6178 20.9748 19.8105C21.012 20.0033 20.9916 20.2028 20.9162 20.384C20.8408 20.5653 20.7137 20.7204 20.5508 20.8299C20.3879 20.9395 20.1963 20.9986 20 21V21ZM11 5C9.81332 5 8.65328 5.3519 7.66658 6.01119C6.67989 6.67047 5.91085 7.60755 5.45673 8.7039C5.0026 9.80026 4.88378 11.0067 5.11529 12.1705C5.3468 13.3344 5.91825 14.4035 6.75736 15.2426C7.59648 16.0818 8.66558 16.6532 9.82946 16.8847C10.9933 17.1162 12.1997 16.9974 13.2961 16.5433C14.3925 16.0892 15.3295 15.3201 15.9888 14.3334C16.6481 13.3467 17 12.1867 17 11C16.9982 9.40927 16.3654 7.88423 15.2406 6.75941C14.1158 5.63459 12.5907 5.00186 11 5V5Z" />
    </svg>
  );
}
