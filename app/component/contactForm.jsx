"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/xdanyqak", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-3 mt-8 flex flex-wrap gap-10">
        <input
          className="p-2 w-full focus:outline-none border-b border-gray-300"
          placeholder="Name"
          name="name"
          required
        />

        <input
          className="p-2 w-full focus:outline-none border-b border-gray-300"
          placeholder="Mail"
          type="email"
          name="email"
          required
        />

        <input
          className="p-2 w-full focus:outline-none border-b border-gray-300"
          placeholder="Subject"
          name="subject"
        />

        {/* Optional hidden fields */}
        <input type="hidden" name="_subject" value="New Contact Message" />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full p-2 bg-[#2E2E2E] px-3 rounded-full text-white"
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="text-green-600 w-full text-center">
            Message sent successfully
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 w-full text-center">
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </form>
  );
}
