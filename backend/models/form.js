import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    number: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    frequency: {
      type: String,
      enum: ["weekly", "quarterly"],
      required: true
    },
    paymentMethod: {
      type: String,
      enum: ["upi", "card"],
      required: true
    },
    cause: {
      type: String,
      required: true,
      trim: true
    },
    taxBenefits: {
      type: Boolean,
      default: false
    },
    acknowledgement: {
      type: Boolean,
      default: false
    },
    consent: {
      type: Boolean,
      required: true
    }
  },
  {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
  }
);

export default mongoose.model("Form", formSchema);
