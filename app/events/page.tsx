"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import clsx from 'clsx';
import events from '../data/events.json';
import Link from 'next/link';
const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState<number>(0);
    return (
        <div className={
            clsx(
                "flex relative justify-center  transition-all duration-500 h-full mt-20 items-start gap-4 ",
            )
        }>
            <div className={
                clsx(
                    "flex flex-col gap-4 w-1/2 transition-all duration-1000",
                    selectedEvent !== 0 ? "-translate-x-[150px]" : "",
                )
            }>
                {
                    events.map((e) => (
                        <button key={e.id} className={
                            clsx(
                                "btn h-24 btn-block glass text-xl",
                                selectedEvent === e.id ? "bg-blue-800/40 hover:bg-blue-800/40" : ""
                            )
                        }
                            onClick={() => setSelectedEvent(e.id)}
                        >
                            {e.title}
                        </button>
                    ))
                }
            </div>
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
                        <div className={
                            clsx(
                                "card w-96 glass transition-all duration-1000 absolute top-0 ",
                                event.id === selectedEvent ? "cardInAnimation" : "translate-x-[750px]"
                            )
                        } key={event.id}>
                            <figure className='relative w-full h-64 '><Image className='object-fill' fill src={event.image.src} alt={event.image.alt} sizes={"w-full h-64"} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{event.title}</h2>
                                <p>{event.description}</p>
                                <div className='flex gap-2'>
                                    {
                                        event.tags.map((tag, index) => (
                                            <span key={index} className="badge badge-secondary">{tag}</span>
                                        ))
                                    }
                                </div>
                                <div className="card-actions justify-end items-center">
                                    <p>{event.location}</p>
                                    <p>{event.date}</p>
                                    <Link href={"events/"+event.id} className="btn btn-primary">Discover!</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EventsPage