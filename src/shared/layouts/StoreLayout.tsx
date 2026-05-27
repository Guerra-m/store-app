import { Outlet } from "react-router-dom";
import { Footer } from "../ui/footer/Footer";
import { Header } from "../ui/header/Header";
import { AuthModal } from "../../modules/auth/components/AuthModal";
import { RegisterModal } from "../../modules/auth/components/RegisterModal";

export const StoreLayout = () => {
  return (
    <div className="min-h-screen flex flex-col ">

      <Header></Header>

      <div className="flex flex-1">

        

        <main className="flex-1 p-4 bg-surface">
          <Outlet />
        </main>

      </div>
      
      <AuthModal />
      <RegisterModal/>
      <Footer />

    </div>
  )
}
