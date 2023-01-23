import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from "react";
import {Calendar} from "react-date-range";

function DatePicker() {

	const handleSelect = (selectedDate) => {
		console.log(selectedDate); // native Date object
		setDate(selectedDate);
	}

	const [date, setDate] = useState(new Date());

	return (
		<Calendar
			date={date}
			onChange={handleSelect}
		/>
	)
}

export default DatePicker;