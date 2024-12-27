import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Welcome to Your New App
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Build something amazing with React and modern web technologies.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg hover-lift"
              onClick={() => console.log("Get Started clicked")}
            >
              Get Started
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg hover-lift"
              onClick={() => console.log("Learn More clicked")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;