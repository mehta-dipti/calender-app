import { Day } from "./Day";
import { weekDays, monthNames } from "../utils/calenderUtils";
import { IMonthProps } from "../types/interface";

export const Month = (props: IMonthProps) => {
  const { date, monthIndex, showOtherMonth } = props; //9,2
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <>
      <div className="month-container">
        <div className="header">{`${monthNames[month]} ${year}`}</div>
        <div className="week-day-container">
          {weekDays.map((weekDay, index) => (
            <div className="week-day" key={index}>
              {weekDay}
            </div>
          ))}
        </div>
        <Day month={month} year={year} monthIndex={monthIndex} showOtherMonth={showOtherMonth} />
      </div>
    </>
  );
};
