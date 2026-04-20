import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Ceremony } from "./components/Ceremony";
import { GuestList } from "./components/GuestList";
import { TaskTracker } from "./components/TaskTracker";
import { Budget } from "./components/Budget";
import { Timeline } from "./components/Timeline";
import { Postscript } from "./components/Postscript";
import { LanguageProvider } from "./i18n/context";

export default function App() {
  return (
    <LanguageProvider>
      <div className="grain vignette min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <Ceremony />
          <GuestList />
          <TaskTracker />
          <Budget />
          <Timeline />
          <Postscript />
        </main>
      </div>
    </LanguageProvider>
  );
}
