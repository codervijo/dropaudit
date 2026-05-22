CREATE TABLE public.penalty_estimator_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  company TEXT,
  unresolved_requests INTEGER NOT NULL,
  days_overdue INTEGER NOT NULL,
  estimated_exposure_cents BIGINT NOT NULL,
  source TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.penalty_estimator_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous + authenticated visitors to submit a lead.
CREATE POLICY "Anyone can submit a penalty estimator lead"
ON public.penalty_estimator_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND unresolved_requests BETWEEN 0 AND 1000000
  AND days_overdue BETWEEN 0 AND 3650
);

-- No SELECT/UPDATE/DELETE policies — leads are not readable from the client.
CREATE INDEX penalty_estimator_leads_created_at_idx
  ON public.penalty_estimator_leads (created_at DESC);
CREATE INDEX penalty_estimator_leads_email_idx
  ON public.penalty_estimator_leads (email);