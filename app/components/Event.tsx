import React from 'react'
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type EventProps = {
    event: {
        id: number;
        title: string;
    };
    selectedEvent: number;
    setSelectedEvent: (id: number) => void;
    card?: boolean;
    details?: {
        description: string;
        location: string;
        date: string;
        tags: string[];
        image: {
            src: string;
            alt: string;
        };
    }
}
const Event: React.FC<EventProps> = (
    {
        event,
        selectedEvent,
        setSelectedEvent,
        details,
        card
    }
) => {

    if (card) {
        return (
            <div className={
                clsx(
                    "card w-96 glass transition-all duration-1000 absolute top-0 ",
                    event.id === selectedEvent ? "cardInAnimation" : "translate-x-[750px]"
                )
            } key={event.id}>
                <figure className='relative w-full h-64 '><Image className='object-fill' fill src={details?.image.src!} alt={details?.image.alt!} sizes={"w-full h-64"} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{event.title}</h2>
                    <p>{details?.description}</p>
                    <div className='flex gap-2'>
                        {
                            details?.tags.map((tag, index) => (
                                <span key={index} className="badge badge-secondary">{tag}</span>
                            ))
                        }
                    </div>
                    <div className="card-actions justify-end items-center">
                        <p>{details?.location}</p>
                        <p>{details?.date}</p>
                        <Link href={"events/" + event.id} className="btn btn-primary">Discover!</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <button key={event.id} className={
            clsx(
                "btn h-24 btn-block glass text-xl",
                selectedEvent === event.id ? "bg-blue-800/40 hover:bg-blue-800/40" : ""
            )
        }
            onClick={() => setSelectedEvent(event.id)}
        >
            {event.title}
        </button>
    )
}

export default Event