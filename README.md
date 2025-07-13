# Mini‑Blog Reader – Candidate Assignment

This is a responsive web application built with **Next.js 15 App Router**, featuring user and post data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). It demonstrates dynamic routing, data fetching, pagination, and modular component architecture using TypeScript.

---

## Quick Start

1. **Clone the repo**

   git clone https://github.com/your-username/your-project.git
   cd mini-blog

2. **Install dependencies**

   npm install

3. **Run the development server**

   npm run dev

4. **Open the app**

   Visit `http://localhost:3000` in your browser.

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Axios** for data fetching
- **Tailwind CSS** & **DaisyUI** for styling
- **JSONPlaceholder API** as a mock backend

---

## Trade‑offs & Future Improvements

Given more time, I would:

- **Improve Error Handling**
  Implement custom error pages (`/not-found`, `500`, etc.) for a more user-friendly fallback experience.

---

## Project Structure

```
/app
  /users
    /[id]        → Dynamic user profile route
  /posts
    /[id]        → Posts listing
/components
  /users         → UserInfo, Wrappers, etc.
  /posts         → PostCard, CardWrapper, etc.
  Footer.tsx
  Navbar.tsx
/hooks
  useFetch.ts    → Custom data fetching hook
/helper          → Custom helper function for cleaner structure
```
