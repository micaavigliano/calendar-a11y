import dayjs from "dayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Header = () => {
  const currentMonth = dayjs().format("MMMM D, YYYY");
  return (
    <>
      <div className="bg-violet-200">
        <CalendarMonthIcon fontSize="large" />
        <h1 className="text-black">{currentMonth}</h1>
      </div>
    </>
  );
};

export default Header;
