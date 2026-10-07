import { useState } from "react";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = email.trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(clean) || clean.length > 255) {
      setStatus("error"); setMsg("Please enter a valid email address."); return;
    }
    setStatus("loading");
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: clean, name: name.trim().slice(0, 100) || null });
    if (error && error.code !== "23505") { setStatus("error"); setMsg("Sorry, something went wrong. Please try again."); return; }
    setStatus("done"); setMsg("Thank you! You'll receive future newsletters by email.");
    setEmail(""); setName("");
  };

  return (
    <section className="mt-12 rounded-xl bg-secondary/40 border border-border p-6 md:p-8">
      <h2 className="font-display text-2xl text-foreground mb-2 flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /> Get newsletter updates by email</h2>
      <p className="font-body text-muted-foreground mb-5">Sign up and we'll let you know when each new PCDC newsletter is published.</p>
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
        <input aria-label="Your name" placeholder="Your name (optional)" value={name} onChange={(e) => setName(e.target.value)} maxLength={100}
          className="flex-1 rounded-lg border border-input bg-background px-4 py-3 font-body text-foreground" />
        <input aria-label="Email address" type="email" required placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255}
          className="flex-1 rounded-lg border border-input bg-background px-4 py-3 font-body text-foreground" />
        <button type="submit" disabled={status === "loading"}
          className="rounded-lg bg-primary text-primary-foreground px-6 py-3 font-body font-semibold hover:brightness-110 disabled:opacity-60">
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {msg && <p role="status" className={`mt-3 font-body text-sm ${status === "error" ? "text-destructive" : "text-primary"}`}>{msg}</p>}
    </section>
  );
};

export default NewsletterSignup;
