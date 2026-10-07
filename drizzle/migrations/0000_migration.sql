CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  name text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers
  FOR INSERT TO anon, authenticated
  WITH CHECK (char_length(email) BETWEEN 3 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND (name IS NULL OR char_length(name) <= 100));