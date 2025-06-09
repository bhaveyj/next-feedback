import {z} from 'zod'

export const messageSchema = z.object({
    acceptMessages: z.
    string()
    .min(10, {message: 'Content must be at least 10 characters'})
    .max(300, {message: 'Content must be at most 300 characters'})
})