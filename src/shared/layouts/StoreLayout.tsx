import { Outlet } from "react-router-dom";
import { Footer } from "../ui/footer/Footer";
import { Header } from "../ui/header/Header";

export const StoreLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Header></Header>

      <div className="flex flex-1">

        

        <main className="flex-1 p-4 bg-gray-100">
          <Outlet />
        </main>

      </div>

      <Footer />

    </div>
  )
}
