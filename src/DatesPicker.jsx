import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from "react";
import {DateRangePicker} from "react-date-range";

function DatesPicker() {

	const handleSelect = (ranges) => {
		console.log(ranges);
		setSelectionRange(ranges.selection);
	}

	const [selectionRange, setSelectionRange] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: "selection"
	});

	return (
		<DateRangePicker
			// showDateDisplay={false}
			ranges={[selectionRange]}
			onChange={handleSelect}
		/>
	)
}

export default DatesPicker;