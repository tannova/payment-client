import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const Dashboard = (props: SvgIconProps) => (
  <SvgIcon
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: 'transparent' }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.2071 6.20711C13.5976 5.81658 13.5976 5.18342 13.2071 4.79289C12.8166 4.40237 12.1834 4.40237 11.7929 4.79289L10.2934 6.29237C9.90178 6.10495 9.46315 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12C10.6569 12 12 10.6569 12 9C12 8.53685 11.895 8.09822 11.7076 7.70658L13.2071 6.20711ZM8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 9.55229 9.55228 10 9 10C8.44772 10 8 9.55229 8 9Z"
      fill="#031352"
    />
    <path
      d="M3.75981 15C2.59486 13.9934 1.74479 12.6709 1.31515 11.1906C0.854008 9.60179 0.899901 7.90931 1.4465 6.34759C1.99312 4.78583 3.01355 3.43179 4.36689 2.47345C5.72028 1.51507 7.33945 1 9 1C10.6606 1 12.2797 1.51507 13.6331 2.47345C14.9865 3.43179 16.0069 4.78583 16.5535 6.34759C17.1001 7.90931 17.146 9.60179 16.6849 11.1906C16.2552 12.6709 15.4051 13.9934 14.2402 15H3.75981Z"
      stroke="#031352"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default Dashboard;
