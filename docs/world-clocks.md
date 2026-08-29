World clocks feature

This branch (feature/world-clocks) adds a polished world clocks component with fuzzy timezone autosuggest. Key details:

Files added
- world-clocks-fuzzy.html — standalone page implementing fuzzy autosuggest (Fuse.js), full IANA list when available via Intl.supportedValuesOf, 12/24 toggle, dark mode, keyboard navigation, and persistence to localStorage.
- scaffold/supabase-client.js — a small Supabase client scaffold (ES module) to help wire server-sync for saved zones. It does not include any secrets. See the notes below.

How the autosuggest works
- The page will attempt to read the full IANA timezone list using Intl.supportedValuesOf('timeZone') in modern browsers. If not available it falls back to a curated list.
- Fuse.js (via CDN) is used for fuzzy searching and ranking suggestions.
- Users can add zones, remove them, toggle 12/24 hour format, toggle dark mode. Zones persist in localStorage.

Supabase server-sync (scaffold)
- If you want server-backed sync across devices, set up a Supabase project and create a table `user_zones` with columns:
  - user_id (text) PRIMARY KEY
  - zones (jsonb)
- Add two repository secrets in GitHub (Settings → Secrets):
  - SUPABASE_URL
  - SUPABASE_ANON_KEY
- The scaffolded file `scaffold/supabase-client.js` exports initSupabase(url,key), getUserZones(userId), saveUserZones(userId,zones). The integration (auth flow, UI binding) is left for the app and requires you to wire auth.

Next steps I can take (choose one or more)
- Integrate the component into index.html and match Farm Khata styles and fonts.
- Replace localStorage persistence with Supabase sync and add an auth flow scaffold (signup/login UI).
- Create a pull request from feature/world-clocks into main (recommended) with a live preview and deployment instructions.
- Add CI (GitHub Actions) to build and deploy to Vercel/Netlify/GitHub Pages.

If you want me to open a PR now, or integrate further, reply with "open PR" or tell me which next step to run.