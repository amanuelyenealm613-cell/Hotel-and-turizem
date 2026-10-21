# Hotel-and-turizem
# Hotel Booking & Controller System

A multi-language web app for hotel reservations, service management, and store inventory.

## Pages

| File | Role |
|------|------|
| `customer.html` | Customer portal — browse hotels, book services, upload payment proof, get a one-time QR code |
| `admin.html` | Hotel owner dashboard — fixed locations, bank accounts, bookings (English UI) |
| `admission.html` | Controller & store — stock tracking, quantity updates, transaction audit |

---

## Features

### Customer Portal (`customer.html`)
- **Languages:** Amharic, English, Afaan Oromoo, Tigrinya
- **Quick view:** Tap a hotel card to open details
- **Fixed locations:** Saved Google Maps links per hotel (not device GPS)
- **Hotel-specific payments:** Telebirr, CBE, BOA, Dashen shown per hotel
- **Verification:** Fayda ID + payment receipt required before QR is issued
- **AI helper:** Basic answers on options, pricing, and simple diet tips

### Hotel Dashboard (`admin.html`)
- Clean English UI for fast management
- Save permanent coordinates or Google Maps URL per hotel
- Assign Telebirr and bank accounts to each hotel
- Manage rooms, dining, pool, spa, and entertainment

### Controller & Store (`admission.html`)
- Live stock tracking for raw materials and inventory
- Simple `+` / `−` quantity controls
- View payments, contact info, and reference numbers in one place

---

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6), Tailwind CSS
- **Backend & Auth:** Firebase Realtime Database, Firebase Authentication (Google Sign-In)
- **Libraries:** qrcodejs, Font Awesome

---

## Getting Started

1. Clone this repository
2. Open any of the HTML files in a browser (or serve with a local static server)
3. Configure Firebase credentials in each file if needed
4. Enable Google Sign-In in Firebase Authentication for the customer portal

---

## Project Structure
