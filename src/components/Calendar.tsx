import dayjs from "dayjs";

const Calendar = () => {
  const currentDay = dayjs().format("MMM");
  const currentDate = dayjs().format("D");
  const d = new Date();
  const month = d.getMonth() + 1;
  const daysInMonth = dayjs()
    .month(month - 1)
    .daysInMonth();

  const arrOfDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  console.log(arrOfDays);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>GMT</th>
            <th>
              <div className="date">
                <span>{currentDay}</span>
                <span>{currentDate}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {arrOfDays.map((day, index) => (
              <tr key={index}>
                <td>{day}</td>
              </tr>
            ))}
          </tr>
          <td>Dato 2-2</td>
        </tbody>
      </table>
    </>
  );
};

export default Calendar;
