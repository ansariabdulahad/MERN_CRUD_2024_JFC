const { z } = require('zod');

const registerSchema = z.object({
    profile: z
        .string()
        .trim(),
    fullname: z
        .string()
        .trim(),
    email: z
        .string({ required_error: "Email is required!" })
        .trim()
        .email({ message: "Please enter a valid email address!" })
        .min(3, { message: "Minimum 4 length required!" })
        .max(255, { message: "Maximum 255 length allowed!" }),
    mobile: z
        .string({ required_error: "Mobile is required!" })
        .trim()
        .min(6, { message: "Minimum 6 numbers are required!" })
        .max(12, { message: "Maximum 12 numbers are allowed!" }),
    dob: z
        .string({ required_error: "DOB is required!" })
        .trim(),
    gender: z
        .string({ required_error: "GENDER is required!" })
        .trim(),
    address: z
        .string({ required_error: "ADDRESS is required!" })
        .trim()
});

module.exports = registerSchema;