import { Schema, model, ObjectId, Model } from "mongoose";

interface Itask {
  _id: ObjectId;
  title: string;
  description: string;
  completed: boolean;
  important: boolean;
}

const tasksSchema = new Schema<Itask>(
  {
    title: {
      type: String,
      required: [true, "must provide a task name"],
      trim: true,
      maxlength: [20, "title cannot be more than 20 characters"],
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    important: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const TaskModel: Model<Itask> = model<Itask>("Task", tasksSchema);
