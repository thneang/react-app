import { useState } from "react";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  async function handleSubmit() {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, email, message }),
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col space-y-4 w-full md:w-2/3"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Sujet"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        onSubmit={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Envoyer
      </button>
    </form>
  );
}
