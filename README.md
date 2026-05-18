# Lee Lab Web Application

A full-stack, responsive web platform designed and built for client **Prof. [cite_start]Teresa Lee (Biology)** to modernize academic lab operations, track research, and streamline communication. [cite_start]The application delivers a professional yet warm aesthetic featuring an easy-to-update management system alongside internal administrative workflows.

## Live Demo & Repository
- **Production URL:** [https://leelab-page.onrender.com/](https://leelab-page.onrender.com/)
- **Original Group Repository:** [https://github.com/laya-rangu/leelab2](https://github.com/laya-rangu/leelab2)

---

## Architecture & Tech Stack

[cite_start]The application adheres to a secure, scalable **3-Tier Architecture**:
1. **Presentation Layer (Frontend):** Built with **React** using a component-based layout and fully responsive UI design.
2. **Application Layer (Backend API):** A RESTful API built on **Node.js** and **Express.js** handling secure business logic and JSON responses.
3. **Data Layer (Relational Database):** Hosted using **PostgreSQL** to manage highly structured relational tables.

**Deployment & Hosting:** All components (Frontend, Backend, and Database) are cloud-hosted on **Render**.

---

## Core Modules & Features

### 1. Authentication & Role-Based Access Control (RBAC)
- **Security:** Passwords are fully hashed prior to storage. Sessions are securely managed via **JSON Web Tokens (JWT)**.
- **Granular Middleware:** Custom middleware (`protect` and `adminOnly`) intercepts routing to secure administrative capabilities.
- **Roles:** Separated into **Admin** and **Student/User** tiers.

### 2. Dynamic Content & CRUD Modules
Every module supports full **Create, Read, Update, and Archive/Restore (Soft Delete)** operations to prevent accidental data loss and simplify long-term client maintenance:
- **People Management:** Dynamically displays active students, faculty, and alumni. Admins can edit rich text fields (education, bio, projects) and seamlessly transition students to alumni status.
- **News Engine:** Features dual manual entry or an alternative automation that imports raw feeds directly from a designated X (Twitter) handle into an approval dashboard for staging.
- **Publications & Research:** Allows quick uploads of academic metadata (Title, Authors, Year, Links) and active research project descriptions.
- **Teaching Module:** Tracks historical and current course materials alongside active lab teaching roles.

### 3. Operations & Internal Lab Request Workflows
- **Contact Inquiries:** Public visitors can submit contact forms. The administrative dashboard enables sorting requests, marking items as "Responded", adding private internal admin notes, and archiving messages.
- **File & Material Request System:** Authenticated lab students can submit requests for specialized lab equipment or physical materials. Admins can review, accept, reject, and monitor request history logs.

---

## Database Schema

The PostgreSQL layer manages relational state using the following primary tables:
- `users` (Credentials, Role definitions) 
- `people` (Profiles, Bio, Category tags) 
- `news` (Announcements, Image paths) 
- `publications` & `research` & `teaching` (Academic data) 
- `contact` (Visitor communications) 
- `materials` & `equipment` (Student resource tracking) 

---

## API Endpoint Architecture

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| **POST** | `/auth/register` | Register a new user profile | [cite_start]Public  |
| **POST** | `/auth/login` | Authenticate user & return JWT token | [cite_start]Public  |
| **GET** | `/people` | Retrieve team, faculty, and alumni | [cite_start]Public  |
| **POST** | `/people` | Create a new team profile | [cite_start]Admin Only  |
| **GET** | `/news` | Fetch published news/tweets | [cite_start]Public  |
| **POST** | `/news` | Approve and publish a news record | [cite_start]Admin Only  |
| **PUT/DELETE**| `/publications/:id`| Modify or archive a publication record | [cite_start]Admin Only |
| **POST** | `/contact` | Submit a public visitor message | [cite_start]Public  |
| **GET** | `/contact` | Review submitted contact inquiries | [cite_start]Admin Only  |

---

## Local Installation & Setup

### Prerequisites
Make sure you have [Node.js (v16+)](https://nodejs.org/) and a local [PostgreSQL](https://www.postgresql.org/) database engine installed.

### Steps

1. **Clone your repository copy:**
   ```bash
   git clone [https://github.com/mrunaltam6e/lee-lab-website.git](https://github.com/mrunaltam6e/lee-lab-website.git)
   cd lee-lab-website
