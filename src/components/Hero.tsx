
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-university-blue text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoLTR2LTJoNHYtNGgydjRoNHYyaC00djR6Ii8+PHBhdGggZD0iTTMwIDYwSDkwVjMwSDMweiIvPjwvZz48L3N2Zz4=')]"></div>
      <div className="university-container relative z-10 py-16 md:py-24 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Playfair_Display']">
            Computer Laboratory Management System
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Efficiently manage all aspects of Injibara University's computer laboratories, 
            from equipment inventory to scheduling and maintenance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="university-button-secondary text-lg px-6 py-3">
              Explore Labs
            </Button>
            <Button variant="outline" className="text-lg px-6 py-3 bg-transparent border-white hover:bg-white/10">
              View Schedules
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
