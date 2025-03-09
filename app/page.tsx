import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="flex flex-col h-full items-center justify-center bg-sky-400">
      <div className="space-y-6 text-center" >
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
        Auth 🔐
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
        <div>
          <LoginButton>
           <Button variant="secondary" size="lg">
             Log in
           </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

export default Home