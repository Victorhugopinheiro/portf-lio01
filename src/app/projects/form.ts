"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Nome é um campo necessário",
    }),
    email: z.string().email("Email é um campo obrigátorio"),
    mensagem: z.string().min(2, {
        message: "Digite sua mensagem",
    }),
})

export type FormSchema = z.infer<typeof formSchema>

export function ProfileForm() {
    // 1. Define your form.
    return useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            mensagem: "",
        },
    })

}