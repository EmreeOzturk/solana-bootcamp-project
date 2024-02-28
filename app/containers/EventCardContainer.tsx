import React from 'react'
import events from '../data/events.json';
import clsx from 'clsx';
import Event from '../components/Event';

type EventCardContainerProps = {
    selectedEvent: number;
    setSelectedEvent: (id: number) => void;
}

const EventCardContainer: React.FC<EventCardContainerProps> = ({
    selectedEvent,
    setSelectedEvent
}) => {
    return (
        <div
            className={
                clsx(
                    "transition-all duration-[1000ms] ",
                    selectedEvent === 0 ? "w-0" : "w-72",
                )
            }
        >
            {
                events.map((event) => (
                    <Event
                        card
                        details={event}
                        event={event}
                        selectedEvent={selectedEvent}
                        setSelectedEvent={setSelectedEvent}
                        key={event.id}
                    />
                ))
            }
        </div>
    )
}

export default EventCardContainer