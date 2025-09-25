"use client";
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Loader2, OctagonAlertIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Alert, AlertTitle } from './ui/alert'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuthState } from '@/hook/use-auth-state'
import { Textarea } from './ui/textarea';
import { formSchema} from '@/lib/schemas';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { send } from '@/lib/email';
import { ContactList } from './contact-list';
import { data } from '@/data/contact-info';

export const Contact = () => {
    
    
    const { error, pending, setPending, } = useAuthState();
    const form = useForm<z.infer<typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues: {
           nom: "",
           email: "",
           telephone: "",
           soin:"",
           message:""
     }
    });
  
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
     setPending(false);
     send(data); 
    }
  return (
    <div className='flex flex-col z-0 gap-5 py-20 px-5 bg-black text-white'>
      <div className='text-foreground  flex justify-center text-3xl font-extralight'>
        <a href="https://www.doctolib.fr/angiologue/paris/yasmina-ferfar-fbd22b47-cfb1-4d74-934e-4bd692667242/" >Prendre Rendez-vous</a>
      </div>
      <div>
        <p className='font-extralight text-2xl text-center'>Contactez-nous pour une consultation personnalisée</p>
      </div>
      <ContactList items={data}/>
      <div className="gap-5 flex flex-col items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8 w-[100%] sm:w-[500px] lg:w-[600px] space-y-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-semibold">Contact</h1>
              </div>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input className = "hover:opacity-70 opacity-40 bg-white text-black" placeholder="Votre nom" {...field} />
                      </FormControl>
                      <FormMessage /> 
                      </FormItem> 
                  )}
                />    

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className = "hover:opacity-70 opacity-40 bg-white text-black" type= "email" placeholder="votre email" {...field} />
                      </FormControl>
                      <FormMessage /> 
                      </FormItem> 
                  )}
                />                                  
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input className = "hover:opacity-70 opacity-40 bg-white text-black" placeholder="06 12 34 65 78" {...field} />
                      </FormControl>
                      <FormMessage /> 
                      </FormItem> 
                  )}
                /> 
                <FormField
                  control={form.control}
                  name="soin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Soin souhaité</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} >
                          <FormControl className='bg-white text-black hover:opacity-70 opacity-40'>
                            <SelectTrigger >
                              <SelectValue className="bg-white text-black hover:opacity-70 opacity-40" placeholder="Selectionnez un soin"  {...field}/>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className='bg-black text-white'>
                            <SelectItem value="Traitement des varices">Traitement des varices</SelectItem>
                            <SelectItem value="Injection Botox">Injection Botox</SelectItem>
                            <SelectItem value="Acide hyalurique">Acide hyalurique</SelectItem>
                            <SelectItem value="Peeling">Peeling</SelectItem>
                            <SelectItem value="Hydrafacial">Hydrafacial</SelectItem>
                            <SelectItem value="Drainage lymphatique">Drainage lymphatique</SelectItem>
                            <SelectItem value="Laser épilation">Laser épilation</SelectItem>
                            <SelectItem value="Laser rajeunissement">Laser rajeunissement</SelectItem>
                          </SelectContent>
                      </Select>
                      <FormMessage /> 
                    </FormItem> 
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (500 caractères au maximum)</FormLabel>
                      <FormControl>
                        <Textarea className = "bg-white text-black hover:opacity-70 opacity-40" placeholder="Décrivez votre demande" {...field} />
                      </FormControl>
                      <FormMessage /> 
                    </FormItem> 
                  )}
                  
                />  
              </div>
              { !!error && (
                <Alert className="bg-destructive/10 border-none">
                  <OctagonAlertIcon className="h-4 w-4 !text-destructive"/>
                  <AlertTitle>{error}</AlertTitle>
                </Alert>
              )} 
              <Button type="submit"  className="w-full bg-black text-white" disabled={pending}>
                  {pending ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    "Envoyer le message"
                  )}
              </Button>
              
              <div className="after:border-border relative test-center text-sm after:absolute
              after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
};