// Dependencies
import * as z from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    tone: z.string().min(1, "O tom é obrigatório"),
});
