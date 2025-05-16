"use client";
import { FloatingLabel } from "@/components/form/FloatingLabel";
import { Button } from "@/components/navigation/Button";
import { useState } from "react";
import validator from "validator";

export function ContactForm() {
  const [form, setForm] = useState({
    email: "",
    entreprise: "",
    poste: "",
    message: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string>("");

  async function handleSubmit() {
    setSuccess("");
    try {
      const subject = `[Recrutement] ${form.entreprise} - ${form.poste}`;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          subject: subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSuccess("Votre message a bien été envoyé !");
        setErrors([]);
        setForm({
          email: "",
          entreprise: "",
          poste: "",
          message: "",
        });
      } else {
        setErrors(["Une erreur est survenue lors de l'envoi du message."]);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setErrors(["Une erreur réseau est survenue."]);
    }
  }

  function validate() {
    const newErrors: string[] = [];
    if (!validator.isEmail(form.email)) {
      newErrors.push("Email invalide");
    }
    if (form.message.length < 10) {
      newErrors.push("Le message doit faire au moins 10 caractères");
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!validate()) return;
        handleSubmit();
      }}
      className="flex flex-col space-y-4 w-full md:w-2/3 self-center"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <FloatingLabel label="Email*">
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </FloatingLabel>
        </div>
        <div className="w-full md:w-1/2">
          <FloatingLabel label="Entreprise">
            <input
              type="text"
              value={form.entreprise}
              onChange={(e) =>
                setForm((f) => ({ ...f, entreprise: e.target.value }))
              }
              className="p-2 border border-gray-300 rounded w-full"
            />
          </FloatingLabel>
        </div>
      </div>

      <FloatingLabel label="Poste">
        <input
          type="text"
          value={form.poste}
          onChange={(e) => setForm((f) => ({ ...f, poste: e.target.value }))}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </FloatingLabel>

      <FloatingLabel label="Message*">
        <textarea
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="p-2 border border-gray-300 rounded min-h-[300px] w-full"
          required
        />
      </FloatingLabel>

      <Button type="submit" className="w-full md:max-w-[300px]">
        Envoyer
      </Button>
      <span className="text-red-500">
        {errors.map((err, i) => (
          <span key={i}>
            {err}
            <br />
          </span>
        ))}
      </span>
      {success && <span className="text-green-500 text-sm">{success}</span>}
    </form>
  );
}
