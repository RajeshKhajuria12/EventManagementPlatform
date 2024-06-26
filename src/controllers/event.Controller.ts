import { Request, Response } from 'express';
import { Event } from '../models';
import { EventRequestBody } from '../types';

export const addEvent = async (req: Request, res: Response) => {
    const { eventName, eventDate, organizer, email, phone, location }: EventRequestBody = req.body;

    const { street, city, state, zip } = location;

    try {
        const newEvent = await Event.create({
            id: generateId(),
            eventName,
            eventDate,
            organizer,
            email,
            phone,
            street,
            city,
            state,
            zip,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        res.status(201).json(newEvent);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const event = await Event.findByPk(id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        await event.update({ ...req.body, updatedAt: new Date() });
        res.json(event);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const event = await Event.findByPk(id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        await event.destroy();
        res.status(204).send();
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const getEventById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const event = await Event.findByPk(id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json(event);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const listEvents = async (req: Request, res: Response) => {
    const { organizer, date } = req.query;
    try {
        const where: any = {};

        if (organizer) {
            where.organizer = organizer;
        }

        if (date) {
            where.eventDate = new Date(date as string);
        }

        const events = await Event.findAll({ where });
        res.json(events);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

function generateId(): string {
    return Math.random().toString(36).substr(2, 9);
}
