"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Create email content
      const emailContent = {
        to: "jofielartmicropigmentare@gmail.com",
        subject: `Formular contact - ${formData.name}`,
        message: `
          Nume: ${formData.name}
          Email: ${formData.email}
          Telefon: ${formData.phone}
          Serviciu dorit: ${formData.service || "Nu a fost specificat"}
          Mesaj: ${formData.message || "Nu a fost specificat"}
        `,
      };

      // Send email using the Email API route
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailContent),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "A apărut o eroare la trimiterea mesajului.",
        );
      }

      // Success
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setIsSubmitting(false);
      setError(
        err instanceof Error
          ? err.message
          : "A apărut o eroare la trimiterea mesajului.",
      );
      console.error("Error sending email:", err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-muted/50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Mulțumim pentru mesaj!</h3>
        <p className="text-muted-foreground mb-4">
          Am primit solicitarea ta și te vom contacta în cel mai scurt timp
          posibil.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Trimite alt mesaj</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-destructive/10 p-4 rounded-lg text-destructive mb-4">
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Nume complet *</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Numele tău complet"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@exemplu.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon *</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+40 7xx xxx xxx"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Serviciu dorit</Label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Selectează un serviciu</option>
          <option value="eyebrows">Micropigmentare Sprâncene</option>
          <option value="lips">Micropigmentare Buze</option>
          <option value="package">Pachet Sprâncene + Buze</option>
          <option value="consultation">Doar Consultație</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mesaj</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Detalii suplimentare sau întrebări..."
          rows={5}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
      </Button>
    </form>
  );
}
