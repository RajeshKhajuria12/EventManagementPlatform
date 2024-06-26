export interface Location {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface EventRequestBody {
    eventName: string;
    eventDate: Date;
    organizer: string;
    email: string;
    phone: string;
    location: Location;
}
