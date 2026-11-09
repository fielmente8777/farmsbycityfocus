import { FaWhatsapp } from "react-icons/fa";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number | string;
  className?: string;
}

export const guestIcon = ({
  width = 18,
  height = 18,
  color = "#FFFDF6",
  strokeWidth = "1.2",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.15 5.99998C9.15 7.32546 8.07548 8.39998 6.75 8.39998C5.42452 8.39998 4.35 7.32546 4.35 5.99998C4.35 4.67449 5.42452 3.59998 6.75 3.59998C8.07548 3.59998 9.15 4.67449 9.15 5.99998Z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M2.25 15C2.25 12.525 4.275 10.5 6.75 10.5C9.225 10.5 11.25 12.525 11.25 15"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M14.7 6.74999C14.7 7.82694 13.827 8.69999 12.75 8.69999C11.673 8.69999 10.8 7.82694 10.8 6.74999C10.8 5.67303 11.673 4.79999 12.75 4.79999C13.827 4.79999 14.7 5.67303 14.7 6.74999Z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M11.625 10.65C13.875 10.875 15.75 12.6 15.75 15"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const poolIcon = ({
  width = 18,
  height = 18,
  color = "#FFFDF6",
  strokeWidth = "1.2",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 13.5C2.625 13.5 3.375 12.75 4.5 12.75C5.625 12.75 6.375 13.5 7.5 13.5C8.625 13.5 9.375 12.75 10.5 12.75C11.625 12.75 12.375 13.5 13.5 13.5C14.625 13.5 15.375 12.75 16.5 12.75"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M6 11.25V4.5C6 4.10218 6.15804 3.72064 6.43934 3.43934C6.72064 3.15804 7.10218 3 7.5 3C7.89782 3 8.27936 3.15804 8.56066 3.43934C8.84196 3.72064 9 4.10218 9 4.5"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M12 11.25V4.5C12 4.10218 12.158 3.72064 12.4393 3.43934C12.7206 3.15804 13.1022 3 13.5 3C13.8978 3 14.2794 3.15804 14.5607 3.43934C14.842 3.72064 15 4.10218 15 4.5"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M6 6.75H12"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M6 9.375H12"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const bonfireIcon = ({
  width = 18,
  height = 18,
  color = "#FFFDF6",
  strokeWidth = "1.2",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.99999 2.25C9.37499 4.5 11.625 5.7 11.625 8.4C11.6562 8.76316 11.6115 9.12885 11.4936 9.47377C11.3758 9.81869 11.1874 10.1353 10.9405 10.4034C10.6935 10.6715 10.3934 10.8852 10.0594 11.031C9.72527 11.1768 9.36449 11.2513 8.99999 11.25C8.63549 11.2513 8.27471 11.1768 7.94062 11.031C7.60653 10.8852 7.30646 10.6715 7.05952 10.4034C6.81258 10.1353 6.62418 9.81869 6.50633 9.47377C6.38847 9.12885 6.34374 8.76316 6.37499 8.4C6.37499 7.275 6.89999 6.45 7.57499 5.85C7.72499 6.825 8.24999 7.425 8.99999 7.725C8.69999 6 8.24999 4.2 8.99999 2.25Z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M3.75 15L14.25 12.75"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M3.75 12.75L14.25 15"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const kitchenIcon = ({
  width = 18,
  height = 18,
  color = "#FFFDF6",
  strokeWidth = "1.2",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.25 10.5V15H12.75V10.5"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M5.25001 10.5C4.55112 10.46 3.88824 10.1768 3.37616 9.69946C2.86408 9.22215 2.53504 8.58079 2.44602 7.88643C2.357 7.19208 2.51361 6.48846 2.88872 5.8974C3.26383 5.30635 3.83383 4.86509 4.50001 4.65002C4.68566 4.24495 4.9497 3.88065 5.27687 3.57814C5.60405 3.27563 5.98789 3.0409 6.40625 2.88751C6.82461 2.73411 7.2692 2.66507 7.71438 2.68438C8.15956 2.7037 8.5965 2.81097 9.00001 3.00002C9.40351 2.81097 9.84046 2.7037 10.2856 2.68438C10.7308 2.66507 11.1754 2.73411 11.5938 2.88751C12.0121 3.0409 12.396 3.27563 12.7231 3.57814C13.0503 3.88065 13.3143 4.24495 13.5 4.65002C14.1662 4.86509 14.7362 5.30635 15.1113 5.8974C15.4864 6.48846 15.643 7.19208 15.554 7.88643C15.465 8.58079 15.1359 9.22215 14.6239 9.69946C14.1118 10.1768 13.4489 10.46 12.75 10.5H5.25001Z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M5.25 12.75H12.75"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const farmIcon = ({
  width = 34,
  height = 34,
  color = "#E2CDA2",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.91665 14.875H24.0833C25.6481 14.875 26.9166 16.1435 26.9166 17.7083V26.2083C26.9166 27.7731 25.6481 29.0417 24.0833 29.0417H9.91665C8.35184 29.0417 7.08331 27.7731 7.08331 26.2083V17.7083C7.08331 16.1435 8.35184 14.875 9.91665 14.875Z"
      strokeWidth="1.84167"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M11.3333 14.875V10.625C11.3333 9.12212 11.9303 7.68078 12.993 6.61807C14.0557 5.55537 15.4971 4.95834 17 4.95834C18.5029 4.95834 19.9442 5.55537 21.0069 6.61807C22.0696 7.68078 22.6666 9.12212 22.6666 10.625V14.875"
      strokeWidth="1.84167"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const bedIcon = ({
  width = 34,
  height = 34,
  color = "#E2CDA2",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.25 25.5V9.91666"
      strokeWidth="1.84167"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M4.25 19.8333H29.75V25.5"
      strokeWidth="1.84167"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M29.75 19.8333V17C29.75 15.8728 29.3022 14.7918 28.5052 13.9948C27.7082 13.1978 26.6272 12.75 25.5 12.75H15.5833V19.8333"
      strokeWidth="1.84167"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M12.75 15.5833C12.75 17.1481 11.4815 18.4167 9.91668 18.4167C8.35187 18.4167 7.08334 17.1481 7.08334 15.5833C7.08334 14.0185 8.35187 12.75 9.91668 12.75C11.4815 12.75 12.75 14.0185 12.75 15.5833Z"
      strokeWidth="1.84167"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const GuestIcon = guestIcon;
export const PoolIcon = poolIcon;
export const BonfireIcon = bonfireIcon;
export const KitchenIcon = kitchenIcon;
export const FarmIcon = farmIcon;
export const BedIcon = bedIcon;

export const whatsappIcon = ({
  width = 22,
  height = 22,
  className = "",
}: IconProps = {}) => (
  <svg
    viewBox="0 0 512 512"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width, height }}
  >
    <circle cx="260" cy="250" r="180" fill="white" />
    <path
      fill="#25D366"
      d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"
    />
  </svg>
);

export const WhatsAppIcon = whatsappIcon;

export const locationIcon = ({
  width = 18,
  height = 18,
  color = "#6B5F4C",
  strokeWidth = "1.2",
  className = "",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 15.75C9 15.75 3.75 11.1 3.75 7.125C3.75 5.73261 4.30312 4.39726 5.28769 3.41269C6.27226 2.42812 7.60761 1.875 9 1.875C10.3924 1.875 11.7277 2.42812 12.7123 3.41269C13.6969 4.39726 14.25 5.73261 14.25 7.125C14.25 11.1 9 15.75 9 15.75Z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M10.875 7.125C10.875 8.16053 10.0355 9 9 9C7.96447 9 7.125 8.16053 7.125 7.125C7.125 6.08947 7.96447 5.25 9 5.25C10.0355 5.25 10.875 6.08947 10.875 7.125Z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const LocationIcon = locationIcon;

export const gazeboIcon = ({
  width = 24,
  height = 24,
  color = "#3A2406",
  strokeWidth = "1.5",
  className = "",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 10L12 4L21 10"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M5 10H19"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M6 10V20"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M18 10V20"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M4 20H20"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M9 14H15"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const backyardIcon = ({
  width = 24,
  height = 24,
  color = "#3A2406",
  strokeWidth = "1.5",
  className = "",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 21V7L7 4L9 7V21"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M15 21V7L17 4L19 7V21"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M9 10H15"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M9 16H15"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M3 21H21"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const lawnIcon = ({
  width = 24,
  height = 24,
  color = "#3A2406",
  strokeWidth = "1.5",
  className = "",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 21V15"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M12 15C8.1 15 6 12.6 6 9.6C6 6.4 8.7 3 12 3C15.3 3 18 6.4 18 9.6C18 12.6 15.9 15 12 15Z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M3 21H21"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const barbecueIcon = ({
  width = 24,
  height = 24,
  color = "#3A2406",
  strokeWidth = "1.5",
  className = "",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 10H20C20 12.1217 19.1571 14.1566 17.6569 15.6569C16.1566 17.1571 14.1217 18 12 18C9.87827 18 7.84344 17.1571 6.34315 15.6569C4.84285 14.1566 4 12.1217 4 10Z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M8 17L6 21"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M16 17L18 21"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M8.99998 3C8.19998 4 9.79998 5 8.99998 6"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M12 3C11.2 4 12.8 5 12 6"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M15 3C14.2 4 15.8 5 15 6"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const gameIcon = ({
  width = 24,
  height = 24,
  color = "#3A2406",
  strokeWidth = "1.5",
  className = "",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4Z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
      fill={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16Z"
      fill={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z"
      fill={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M9 16C9.55228 16 10 15.5523 10 15C10 14.4477 9.55228 14 9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16Z"
      fill={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </svg>
);

export const GazeboIcon = gazeboIcon;
export const BackyardIcon = backyardIcon;
export const LawnIcon = lawnIcon;
export const BarbecueIcon = barbecueIcon;
export const GameIcon = gameIcon;

export const mailIcon = ({
  width = 22,
  height = 22,
  color = "#C9BBA0",
  className = "",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20.1666 6.28866L11 11.5824L1.83331 6.28866V6.18783C1.83452 5.51963 2.1005 4.87915 2.57299 4.40667C3.04547 3.93418 3.68595 3.6682 4.35415 3.66699H17.6458C18.314 3.6682 18.9545 3.93418 19.427 4.40667C19.8995 4.87915 20.1654 5.51963 20.1666 6.18783V6.28866ZM1.83331 7.87449L11 13.1682V13.1728L20.1666 7.87908V15.8082C20.1654 16.4764 19.8995 17.1169 19.427 17.5894C18.9545 18.0619 18.314 18.3279 17.6458 18.3291H4.35415C3.68595 18.3279 3.04547 18.0619 2.57299 17.5894C2.1005 17.1169 1.83452 16.4764 1.83331 15.8082V7.87449Z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={color}
    />
  </svg>
);

export const phoneIcon = ({
  width = 22,
  height = 22,
  color = "#C9BBA0",
  className = "",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7.68568 2.27237C8.16702 2.12724 8.68355 2.15135 9.14928 2.34069C9.61501 2.53002 10.0018 2.87315 10.2454 3.31297L10.3268 3.47687L11.055 5.09497C11.2756 5.58619 11.3471 6.13136 11.2606 6.66284C11.1742 7.19433 10.9336 7.68875 10.5688 8.08477L10.4225 8.22997L9.27518 9.30027C9.06838 9.49607 9.22348 10.254 9.97148 11.5498C10.6447 12.7158 11.1925 13.2603 11.462 13.29H11.5093L11.5676 13.279L13.8226 12.5893C14.1256 12.4963 14.4491 12.4926 14.7542 12.5787C15.0593 12.6647 15.3331 12.8368 15.543 13.0744L15.6431 13.2009L17.1358 15.2689C17.4283 15.6742 17.5741 16.1671 17.5491 16.6664C17.5241 17.1656 17.3298 17.6415 16.9983 18.0156L16.8641 18.1542L16.2679 18.7196C15.7325 19.2266 15.0628 19.5692 14.3384 19.7067C13.6139 19.8441 12.8653 19.7707 12.1814 19.4951C10.0529 18.6371 8.11908 16.6769 6.36238 13.6343C4.60238 10.584 3.87088 7.92527 4.19758 5.64827C4.29644 4.95996 4.57988 4.31128 5.01778 3.77111C5.45569 3.23095 6.03171 2.81947 6.68468 2.58037L6.89698 2.50997L7.68568 2.27237Z"
      fill={color}
    />
  </svg>
);

export const addressIcon = ({
  width = 22,
  height = 22,
  color = "#C9BBA0",
  className = "",
}: IconProps = {}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2.74999 8.92664C2.74786 9.06589 2.78806 9.2025 2.86528 9.31839C2.9425 9.43428 3.0531 9.52399 3.18243 9.57564L9.78311 12.2163L12.4238 18.8177C12.4748 18.9454 12.5629 19.0548 12.6768 19.1319C12.7906 19.209 12.925 19.2502 13.0625 19.2501H13.0735C13.2127 19.2479 13.348 19.2035 13.4615 19.1227C13.5749 19.042 13.6611 18.9286 13.7087 18.7978L19.2087 3.67277C19.2538 3.54972 19.2627 3.41637 19.2345 3.28843C19.2062 3.16048 19.142 3.04326 19.0494 2.95058C18.9568 2.85789 18.8397 2.7936 18.7117 2.76528C18.5838 2.73696 18.4504 2.74578 18.3274 2.7907L3.20236 8.2907C3.07139 8.33836 2.95799 8.42469 2.8772 8.53826C2.79641 8.65183 2.75204 8.78728 2.74999 8.92664Z"
      fill={color}
    />
  </svg>
);

export const MailIcon = mailIcon;
export const PhoneIcon = phoneIcon;
export const AddressIcon = addressIcon;
