import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import {Container} from 'reactstrap';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    }

    return (
        
        
                <Card className="">
                    <CardHeader className="bg-transparent">
                        <h3 className="mb-0">Booking</h3>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <div>
                                    <label htmlFor='book-date'>Choose Date</label>
                                    <input id='book-date' value={date} onChange={handleChange} type='date' required />
                                </div>

                                <div>
                                    <label htmlFor='book-time'>Choose Time</label>
                                    <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                        <option value="">Select a Time</option>
                                        {/* Add options here */}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor='book-guests'>Number of Guests</label>
                                    <input id="book-guests" min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                                </div>

                                <div>
                                    <label htmlFor='book-occasion'>Occasion:</label>
                                    <select id='book-occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                    </select>
                                </div>

                                <div className='btnReceive'>
                                    <input aria-label='on Click' type='submit' value={"Make Your Reservation"} />
                                </div>
                            </fieldset>
                        </form>
                    </CardBody>
                </Card>

    );
};

export default BookingForm;
