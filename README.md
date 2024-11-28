# Contact App with React + Vite

This project is a simple contact management app built using React and Vite. It allows users to add, edit, and delete contacts. The app provides a clean and interactive UI, with features for managing a list of contacts.

## Features

- **Add New Contact**: Users can add new contacts with a name and a tag.
- **Edit Existing Contact**: Users can edit the details of an existing contact.
- **Delete Contact**: Users can remove contacts from the list.
- **Toast Notifications**: Informative toast notifications are displayed for successful actions like adding or editing contacts.
- **Form Reset**: The form resets after adding or editing a contact, providing a smooth user experience.

## Tech Stack

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast build tool that offers fast refresh, making development smoother.
- **JavaScript**: Used for managing and storing contact data locally in the app.
- **React Toastify**: Used to show notifications to the user for successful actions.
- **CSS**: For styling the app’s components.

## Setup Instructions

### Prerequisites

Make sure you have `Node.js` installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/nabilaalt/ContactApps.git
```

2. Navigate to the project folder:

```bash
cd ContactApps
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and go to `http://localhost:3000`.

### Usage

- Add a contact by entering a name and a tag in the input fields and clicking "Add New".
- Edit an existing contact by clicking the "Edit" button next to the contact you want to modify.
- Delete a contact by clicking the "Delete" button next to the contact.

### Toast Notifications

The app uses `react-toastify` to display success notifications after adding or editing contacts. You will see a toast message whenever a contact is successfully added or updated.

## Development

This template uses Vite for fast development. The application is automatically hot-reloaded during development, allowing you to see changes instantly.

- **Fast Refresh**: The app supports Fast Refresh using Vite’s HMR feature, which ensures that your changes are reflected immediately without needing a full reload.

- **ESLint**: The project is set up with ESLint to ensure a consistent coding style and catch potential issues early.

## Contributing

Feel free to fork the repository and make changes! If you have any improvements or bug fixes, you can open a pull request.
