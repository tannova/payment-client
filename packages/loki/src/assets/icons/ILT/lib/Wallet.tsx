import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const Wallet = (props: SvgIconProps) => (
  <SvgIcon
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V7C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12V9H6C5.65606 9 5.3182 8.94094 5 8.82843V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H18V16C18 15.4477 18.4477 15 19 15C19.5523 15 20 15.4477 20 16V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM5 6C5 6.26522 5.10536 6.51957 5.29289 6.70711C5.48043 6.89464 5.73478 7 6 7H16L16 5L6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6Z"
       fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 13C15.7348 13 15.4804 13.1054 15.2929 13.2929C15.1054 13.4804 15 13.7348 15 14C15 14.2652 15.1054 14.5196 15.2929 14.7071C15.4804 14.8946 15.7348 15 16 15H19V13H16ZM13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11H20C20.5523 11 21 11.4477 21 12V16C21 16.5523 20.5523 17 20 17H16C15.2043 17 14.4413 16.6839 13.8787 16.1213C13.3161 15.5587 13 14.7957 13 14C13 13.2043 13.3161 12.4413 13.8787 11.8787Z"
       fill="currentColor"
    />
  </SvgIcon>
);

export default Wallet;