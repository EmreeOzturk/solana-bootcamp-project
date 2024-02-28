"use client";
import React, { useState } from 'react'
import EventList from '../components/EventList';
import EventCardContainer from './EventCardContainer';

const EventPageContainer = () => {
    const [selectedEvent, setSelectedEvent] = useState<number>(0);
    return (
        <div className="flex relative justify-center transition-all duration-500 h-full mt-20 items-start gap-4">
            <EventList selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} />
            <EventCardContainer selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} />
        </div>
    )
}

export default EventPageContainer