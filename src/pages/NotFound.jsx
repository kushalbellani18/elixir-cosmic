import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 cosmic-bg" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cosmic-pink/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-cosmic-cyan/15 rounded-full blur-[80px]" />

      <div className="text-center relative z-10 px-6">
        <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Button variant="glassPrimary" size="lg" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
