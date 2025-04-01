"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui";
import { CheckIcon } from "@/components/icons";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  interface FormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message:
          "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
      });
      setIsSubmitting(false);
      // Reset form
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">Bize Ulaşın</h2>
      <Card className="border">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Adınız Soyadınız"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ornek@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Konu</Label>
                <Select name="subject">
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Konu Seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="randevu">Randevu Talebi</SelectItem>
                    <SelectItem value="bilgi">Bilgi Talebi</SelectItem>
                    <SelectItem value="geri-bildirim">Geri Bildirim</SelectItem>
                    <SelectItem value="diger">Diğer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mesajınız</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Mesajınızı buraya yazın..."
                rows={5}
                required
              />
            </div>

            {formStatus.message && (
              <div
                className={`flex items-center gap-2 rounded-md p-3 ${
                  formStatus.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {formStatus.type === "success" && (
                  <CheckIcon className="size-5 flex-shrink-0" />
                )}
                <p className="text-sm">{formStatus.message}</p>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
