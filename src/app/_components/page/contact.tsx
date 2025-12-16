"use client"

import { useRef } from "react"
import Link from "next/link"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormSchema, ProfileForm } from "@/app/projects/form"

export function Contact() {
    const form = ProfileForm()
    const formRef = useRef<HTMLFormElement>(null)

    async function onSubmit(formData: FormSchema) {
        try {
            if (!formRef.current) return

            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_VITE_APP_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_VITE_APP_EMAILJS_TEMPLATE_ID as string,
                formRef.current,
                process.env.NEXT_PUBLIC_VITE_APP_EMAILJS_PUBLIC_KEY as string
            )

            form.reset()
        } catch (err) {
            console.log("Erro ao enviar email:", err)
        }
    }

    return (
        <div id="contact" className="min-h-[70vh] min-w-full flex flex-col lg:flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-8 p-16 space-y-6">
                <h1 className="text-center text-4xl md:text-7xl">
                    <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                        Entre em contato
                    </span>
                </h1>

                <p className="text-center max-w-[400px] font-semibold text-lg text-gray-500">
                    Estou aberto a novas oportunidades e projetos. Sinta-se à vontade para entrar em contato comigo através do formulário abaixo ou enviar um e-mail diretamente.
                </p>

               
            </div>

            <Form {...form}>
                <form
                    ref={formRef}
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="text-white">
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input className="h-14 w-72" placeholder="Digite seu nome" {...field} name="name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="text-white">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className="h-14 w-72" placeholder="Digite seu E-mail" {...field} name="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="mensagem"
                        render={({ field }) => (
                            <FormItem className="text-white h-32 mb-16">
                                <FormLabel>Mensagem</FormLabel>
                                <FormControl className="h-full">
                                    <Input className="h-32 w-72" placeholder="Digite sua mensagem" {...field} name="mensagem" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        className="text-nowrap rounded-md border mt border-blue-600 bg-black 
                        px-5 py-3 text-lg font-bold text-white shadow-lg shadow-blue-700 transition-all 
                        duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600"
                    >
                        Enviar E-mail
                    </Button>
                </form>
            </Form>
        </div>
    )
}
