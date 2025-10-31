import type { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler.ts";
import ApiError from "../utils/apiError.ts";
import Event from "../model/event.model.ts";
import ApiResponse from "../utils/apiResponse.ts";

export const createEvent = asyncHandler(async (req: Request, res: Response) => {
  const { title, description, location, date, maxParticipants, participants } =
    req.body;

  if (
    !title ||
    !description ||
    !location ||
    !location.coordinates ||
    !date ||
    !maxParticipants
  ) {
    throw new ApiError(400, "All required fields must be provided");
  }

  const event = await Event.create({
    title,
    description,
    location: {
      type: "Point",
      coordinates: location.coordinates,
      address: location.address || "",
    },
    date,
    maxParticipants,
    participants: participants || [],
    currentParticipants: participants?.length || 0,
  });
  const response = new ApiResponse(201, "Event created successfully", event);
  res.status(201).json(response);
});

export const getEvents = asyncHandler(async (req: Request, res: Response) => {
  const { lng, lat, maxDistance, address, page = 1, limit = 10 } = req.query;

  if (!lng && !lat && !address) {
    const events = await Event.find()
      .skip((+page - 1) * +limit)
      .limit(+limit);

    const response = new ApiResponse(200, "Events retrieved successfully", {
      count: events.length,
      page: +page,
      events,
    });
    return res.status(200).json(response);
  }

  let query: any = {};
  let coordinates: [number, number] | null = null;
  const longitude =
    coordinates?.[0] ?? (lng ? parseFloat(lng as string) : null);
  const latitude = coordinates?.[1] ?? (lat ? parseFloat(lat as string) : null);

  if (longitude !== null && latitude !== null) {
    query = {
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: maxDistance ? parseInt(maxDistance as string) : 5000,
        },
      },
    };
  } else if (address) {
    query = {
      "location.address": { $regex: new RegExp(address as string, "i") },
    };
  }
  const events = await Event.find(query)
    .skip((+page - 1) * +limit)
    .limit(+limit);
  const response = new ApiResponse(200, "Events retrieved successfully", {
    count: events.length,
    page: +page,
    events,
  });
  return res.status(200).json(response);
});

export const getEventById = asyncHandler(
  async (req: Request, res: Response) => {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    if (!event) {
      throw new ApiError(404, "Event not found");
    }
    const response = new ApiResponse(
      200,
      "Event retrieved successfully",
      event
    );
    res.status(200).json(response);
  }
);
export const registerForEvent = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, location } = req.body;
    const eventId = req.params.id;
    if (!name || !email || !location || !location.address) {
      throw new ApiError(400, "All required fields must be provided");
    }
    const event = await Event.findById(eventId);
    if (!event) {
      throw new ApiError(404, "Event not found");
    }
   const existingRegistration = await Event.findOne({
  _id: eventId,
  'participants.email': email,
});

if (existingRegistration) {
  throw new ApiError(400, "User already registered for this event");
}
    if (event.currentParticipants >= event.maxParticipants) {
      throw new ApiError(400, "Event is already full");
    }
   event.participants = {
      name,
      email,
      location
   };
    event.currentParticipants++;
    await event.save();
    const response = new ApiResponse(
      200,
      "Registered for event successfully",
      event
    );
    res.status(200).json(response);
  }
);
