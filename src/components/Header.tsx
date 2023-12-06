import dayjs from "dayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Header = () => {
  const currentMonth = dayjs().format("MMMM D, YYYY");
  return (
    <>
    <div>

      <CalendarMonthIcon fontSize="large"/>
      <h1>{currentMonth}</h1>
    </div>
    </>
  );
};

export default Header;
