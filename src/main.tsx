import { createRoot } from "react-dom/client";
import "./styles/style.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app/appRouter/AppRouter";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>,
);
