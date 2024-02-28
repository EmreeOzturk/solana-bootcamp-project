import React from 'react'
import clsx from 'clsx';
import events from '../data/events.json';
import Event from './Event';


type EventListProps = {
    selectedEvent: number;
    setSelectedEvent: (id: number) => void;
}
const EventList: React.FC<EventListProps> = (
    {
        selectedEvent,
        setSelectedEvent
    }
) => {
    return (
        <div className={
            clsx(
                "flex flex-col gap-4 w-1/2 transition-all duration-1000",
                selectedEvent !== 0 ? "-translate-x-[150px]" : "",
            )
        }>
            {
                events.map((event) => (
                    <Event event={event} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} key={event.id} />
                ))
            }
        </div>
    )
}

export default EventList