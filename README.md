<div align="center">
  <h1 align="center">HYBRBASE Full-stack Technical Challenge II</h1>
  <h3>A product catalog system for an expanding e-commerce retailer</h3>
</div>

## Authentication Flow of Convex
<img src="public/Authentication Flow using Convex.png" width="840" alt="Demo">

## Desrciption
- **Maintainable Codebase and Architecture:**
  - **Routes:** Configured with ```routes.ts``` enables automatically code-split each route, provide type safety for the parameters and data, and automatically load the data with access to pending states as the user navigates to it
    * **Components and Layout:** Seperated by feature and domain - can be grouped and reused across the app
    * **Global State Management with Redux:** Provides a centralized state management solution for the application, allowing for efficient data sharing and management across different components
    * **Providers for extension wrapper:** Here we can wrap our application with React-Toastify allows you to add notifications to your app with ease
    **Database Integration:** Configured in the ```/convex``` folder, which allows for easy integration with a database using Convex

## Demo
[Click here to view](https://youtu.be/R0kNDGETfh4)


## Tech Stack
<table>
  <tr>
    <td align="center" width="160">
      <img src="https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router" alt="" width="140" height="40"/>
    </td>
    <td>
      <b>React Router:</b> Providing a seamless user experience by mapping various URLs to components,navigation in single-page application (SPA) without refreshing the entire page
    </td>
  </tr>
  <tr>
    <td align="center" width="160">
      <img src="https://img.shields.io/badge/-Redux-black?style=flat-square&logo=redux" alt="" width="140" height="40"/>
    </td>
    <td>
      <b>Redux:</b> A JS library for predictable and maintainable global state management
    </td>
  </tr>
  <tr>
    <td align="center" width="160">
      <img src="https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC" alt="" width="140" height="40"/>
    </td>
    <td>
      <b>TailwindCSS:</b> A utility-first CSS framework packed with classes that can be composed to build any design, directly in your HTML.
    </td>
  </tr>
    <tr>
    <td align="center" width="160">
      <img src="https://dashboard.convex.dev/convex-logo-only.svg" alt="" width="140" height="40"/>
    </td>
    <td>
      <b>Convex:</b> The pen-source reactive database for app developers.
    </td>
  </tr>
</table>



## Getting Started

### Prerequisites

Here's what you need to be able to run this source:
- React.js (version >= 18)

### 1. Clone the repository

```shell
git clone https://github.com/chuhaiphu/hybrbase-challenge
```

### 2. Install dependencies
```shell
yarn install
```

### 3. Start the frontend app:
```bash
yarn dev
```

### 4. Using Convex for database integration
Follow instructions from [Convex](https://docs.convex.dev/quickstart/react)

### Importing data
Extract the data from the [JSON file](/public/snapshot.zip) then follow the instructions from [Convex-Importing](https://docs.convex.dev/database/import-export/import)
