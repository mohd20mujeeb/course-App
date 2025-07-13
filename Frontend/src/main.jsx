import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51RjdOzPRp08qCoZgYrJclAmy26jJJYLVcCYcQHc7vAOFrtZwZnGLO3jCrHCAUwPlAb0QgV2zZ7KbhGlEtGhQZvi100JDUh2DgW"
);
createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
