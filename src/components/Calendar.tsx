import dayjs from "dayjs";
import { useState } from "react";
import Modal from "./Modal";

const Calendar = () => {
  const [isModal, setIsModal] = useState(false);
  //const currentDay = dayjs().format("MMM");
  const currentDate = dayjs().format("MMM D");
  //const d = new Date();
  //const month = d.getMonth() + 1;
  // const daysInMonth = dayjs()
  //   .month(month - 1)
  //   .daysInMonth();

  const arrOfDays = Array.from({ length: 23 }, (_, i) => {
    return {
      date: i + 1,
      id: i + 1,
    };
  });

  const openEditModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>GMT</th>
            <th>
              <div className="date">
                <span>{currentDate}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {arrOfDays.map((day) => (
                <div key={day.id}>{day.date}:00</div>
              ))}
            </td>
            <td>
              {arrOfDays.map((day) => (
                <div key={day.id}>
                  <button onClick={openEditModal}>hello</button>
                  {isModal && (
                    <Modal
                      isOpen={isModal}
                      onClose={closeModal}
                      title={"Edit user data"}
                    >
                      <p>hello</p>
                    </Modal>
                  )}
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Calendar;
