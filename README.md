# Logistics Control Centre

React + TypeScript operations workspace for international logistics, local shipping, shipment handovers, joint actions, exceptions and cost control.

## First use
1. Open the GitHub Pages site and create the first account.
2. In Supabase SQL Editor, promote that trusted user to administrator:
```sql
update public.profiles set role = 'admin', department = 'management'
where email = 'your-admin-email@example.com';
```
3. Sign out and back in. New accounts default to read-only. Assign team roles only after verifying each account.

## Stack and deployment
- GitHub Pages frontend (Vite), deployed from `main` by GitHub Actions.
- Supabase Auth, Postgres, private Storage and row-level security.
- The browser contains only a Supabase publishable key. Never add a service-role/secret key to frontend code.
- Shipment document bucket is private; document links are short-lived.
- Milestones are manually entered. Carrier API tracking is not enabled yet.

Enable Pages at repository Settings → Pages → Build and deployment → GitHub Actions.

## Operational boundaries
International Logistics owns overseas booking, agents, rates, origin documentation and international transit. Local Shipping owns customs clearance, release, local transport, delivery and container returns. Handover acknowledgement records receipt, not transfer of liability for upstream errors.
