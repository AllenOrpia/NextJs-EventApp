import Button from "../ui/Button"

import { useRef } from 'react';


const EventsSearch = (props) => {

    const yearInpputRef = useRef();
    const monthInpputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const selectedYear = yearInpputRef.current.value;
        const selectedMonth = monthInpputRef.current.value;

        props.onSearch(selectedYear, selectedMonth);

    }
    return (

        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="year">
                        Year
                    </label>
                    <select id="year" ref={yearInpputRef}>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInpputRef}>
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>August</option>
                        <option value='9'>September</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>

                    </select>
                </div>

            </div>
            <Button> Find Events</Button>
        </form>


    )
}

export default EventsSearch