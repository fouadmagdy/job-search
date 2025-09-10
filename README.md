# Job Search App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Requirements

- **Node.js version:** 23.10.0

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Running Unit Tests

To run all unit tests:

```bash
npx jest --config jest.config.cjs
```

Or to run a specific test file:

```bash
npx jest --config jest.config.cjs src/__tests__/CityPills.test.tsx
```

## Project Structure

```
my-app/
├── public/
│   └── images/
│       ├── CityLandscape.png
│       ├── CityLandscape.svg
│       ├── Logo.png
│       └── logo.svg
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── job-search/
│   │   │   └── page.tsx
│   │   └── problems/
│   │       ├── first-problem.ts
│   │       ├── second-problem.ts
│   │       └── third-problem.ts
│   ├── components/
│   │   ├── CityPills.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── SearchBar.tsx
│   │   └── ThemeToggle.tsx
│   └── __tests__/
│       ├── CityPills.test.tsx
│       ├── first-problem.test.tsx
│       ├── second-problem.test.tsx
│       └── third-problem.test.tsx
├── package.json
├── jest.config.cjs
├── tsconfig.json
└── ...
```

## Accessing the Job Search Page

After starting the development server, navigate to [http://localhost:3000/job-search](http://localhost:3000/job-search) or click the "Go to Job Searchs" link on the home page.
