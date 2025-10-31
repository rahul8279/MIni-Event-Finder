import { Schema, model, Document, Model } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description: string;
  location: {
    type: string;
    coordinates: number[];
    address?: string;
  };
  date: Date;
  maxParticipants: number;
  currentParticipants: number;
  participants: {
    name: string;
    email: string;
    location: {
      type: string;
      coordinates: number[];
      address?: string;
    };
  }
}

const eventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        required: true,
      },
      address: {
        type: String,
        default: "",
      },
    },
    date: {
      type: Date,
      required: [true, "Event date is required"],
    },
    maxParticipants: {
      type: Number,
      required: [true, "Maximum participants required"],
    },
    currentParticipants: {
      type: Number,
      default: 0,
    },

    participants: [
      {
        name: {
          type: String,
        },
        email:{
          type: String,
        },
        location: {
          type: {
            type: String,
            enum: ["Point"],
            default: "Point",
          },
          coordinates: {
            type: [Number],
            required: true,
          },
          address: {
            type: String,
            default: "",
          },
        },
      },
    ],
  },
  { timestamps: true }
);

// Create Geo index for location-based search
eventSchema.index({ location: "2dsphere" });

const Event: Model<IEvent> = model<IEvent>("Event", eventSchema);
export default Event;
