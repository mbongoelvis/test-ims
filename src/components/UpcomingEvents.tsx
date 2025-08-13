/*
    // Basic usage
    <UpcomingEvents />

    // With custom props
    <UpcomingEvents 
    maxEvents={3}
    className="max-w-md"
    />

    // With custom events
    const customEvents = [
    {
        id: '1',
        title: 'Product Launch',
        date: '2025-08-15',
        time: '3:00 PM',
    }
    ];

    <UpcomingEvents events={customEvents} />
*/

import React from 'react';
import type { UpcomingEventsProps } from '@/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react'; 

const mockEvents: Array<{
  id: string;
  title: string;
  date: string;
  time: string;
}> = [
  { id: "1", title: "Meet Digisol group", date: "2023-10-01", time: "10:00 AM" },
  { id: "2", title: "Don't forget to eat", date: "2023-10-02", time: "11:00 AM" },
  { id: "3", title: "Invoice at from james", date: "2023-10-03", time: "12:00 PM" },
];

// const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//         weekday: 'short',
//         month: 'short',
//         day: 'numeric',
//     });
// };

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
    events = mockEvents,
    maxEvents = 3,
    className = ''
}) => {  
    const displayEvents = events.slice(0, maxEvents);


    return (
        <Card className={`w-full p-3 ${className}`}>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-semibold flex-wrap">
                    <div className="p-2 bg-ddanger-20/50 rounded-4xl flex items-center justify-center">
                        <Calendar className="w-full text-dprimary" />
                    </div>
                    <div className='text-lg'>Upcoming Events</div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {displayEvents.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground"> 
                        <Calendar className="w-8 h-8 mx-auto mb-4 opacity-50" />
                        <p>No upcoming events scheduled</p>
                    </div>
                ) : (
                    <div className="space-y-0">
                        {displayEvents.map((event) => (
                            <div
                                key={event.id}
                                className="p-2 cursor-pointer border mb-2 rounded-lg transition-shadow"
                            >
                                <div className="flex flex-wrap justify-between text-sm text-muted-foreground font-semibold">
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <span className="font-semibold text-foreground text-[16px]">{event.title}</span> 
                                        </div>
                                        <div className="flex items-center gap-1 font-normal text-[14px]">
                                            <span>{/*formatDate*/(event.date)}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start font-normal gap-1 text-[14px]"> 
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )

};

