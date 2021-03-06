import React from 'react';
import './App.css';
import Navmenu from './parts/nav';
import {Outlet} from 'react-router-dom'

// Components to make:
// Cart will act like a todo list (Options to delete, mark as gift?, undo, redo, edit quantity, sort)

// Optional Components to make:
// Save the cart they make so it doesn't disappear on refesh
// Make a Purchased Alert that tells the user they bought something, they didn't obviously
// Refunds?
// Virtual Balance?
// A Login System to save carts or even make to do lists for the store

function App() {
  return (
    <div>
      <Navmenu/>
      <Outlet/>
    </div>
  );
}

export default App;
