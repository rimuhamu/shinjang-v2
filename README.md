# Shinjang (Version 2) - Order Tracking Application

A Next.js-based order tracking system for group orders (GO) from Korea, China, and Japan, built with PayloadCMS as the headless CMS backend. Upgraded to Nextjs 15 and PayloadCMS 3.

## 🌟 Features

- **Order Tracking**: Search and view order status by customer name

- **Multi-Country Support**: Track orders from Korea (KR), China (CH), and Japan (JP)

- **Rate Conversion**: Built-in currency converter with shipping calculations

- **Admin Panel**: PayloadCMS-powered admin interface for managing customers, products, and orders

- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript

- **Backend**: PayloadCMS 3

- **Database**: MongoDB (via Mongoose)

- **Styling**: Tailwind CSS, Shadcn

- **Forms**: React Hook Form with Zod validation

- **Data Tables**: TanStack Table

- **Icons**: Lucide React

- **Notifications**: Sonner

- **Build**: Turbopack

## 📦 Installation

1.  **Clone the repository**

```bash

git clone <repository-url>

cd shinjang-v2

```

2.  **Install dependencies**

```bash

npm install

```

3.  **Environment Setup**

Create a `.env` file in the root directory with the following variables:

```env

DATABASE_URI=your_mongodb_connection_string

PAYLOAD_SECRET=your_payload_secret_key

```

4.  **Seed the database**

```bash

npm run seed

```

## 🚀 Development

Start the development server:

```bash

npm  run  dev

```

The application will be available at:

- **Frontend**: http://localhost:3000

- **Admin Panel**: http://localhost:3000/admin

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack

- `npm run build` - Build the application for production with Turbopack

- `npm run start` - Start production server

- `npm run lint` - Run ESLint

- `npm run seed` - Seed database with sample data

## 🗄️ Data Models

### Products

- `name`: Product name (e.g., "PC Jisoo THE ALBUM")

- `price`: Product price as string (e.g., "225000")

- `batchNumber`: Batch identifier (number)

- `country`: Origin country (Korea/China/Japan)

- `status`: Order status with 6 stages

- `isPaid`: Payment status (boolean)

- `notes`: Additional notes (textarea)

### Customers

- `name`: Customer name

- `ordered`: Array of related products

### Users

- `role`: User role (only admin for now)

## 🚦 Order Status Flow

Orders progress through these statuses:

1.  **Ordered to Seller** - Initial order placed

2.  **In Progress** - Being processed by seller

3.  **Arrived WH LN** - Arrived at overseas warehouse

4.  **OTW INA** - On the way to Indonesia

5.  **Arrived WH INA** - Arrived at indonesian warehouse

6.  **Arrived Admin** - Delivered to admin

## 📱 Pages Structure

- `/` - Homepage with customer search

- `/orders` - Order listing with enhanced filtering and visual status

- `/no-results` - No results found page

- `/error` - Error page with recovery options

- `/rate-conversion` - Currency conversion tool

- `/payments` - Payment methods information

- `/tnc-shinjang` - Terms & Conditions for GO services

- `/tnc-shopee` - Terms & Conditions for Shopee checkout

- `/admin` - PayloadCMS 3 admin panel
