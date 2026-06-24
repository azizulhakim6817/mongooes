import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [20, "Name must be less than 20 characters"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Invalid email format",
      },
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      maxlength: 20,
      select: false,
      validate: {
        validator: (v: string) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(v),
        message: "Password must contain uppercase, lowercase and number",
      },
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      trim: true,
      validate: {
        validator: (v: string) => /^(?:\+8801|01)[3-9]\d{8}$/.test(v),
        message: "Invalid phone number",
      },
    },

    role: {
      type: String,
      required: true,
      enum: ["ADMIN", "CUSTOMER"],
      default: "CUSTOMER",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

//
//post method------------------------------------------
//
userSchema.post("save", async function (doc) {
  doc.password = await bcrypt.hash(doc.password, 10);
});

//
// pre method-----------------------------------
//
userSchema.pre("save", async function () {
  if (this?.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

export const UserModel = model<IUser>("users", userSchema);
