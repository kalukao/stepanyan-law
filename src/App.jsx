import { Switch, Route } from "wouter";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import PracticeAreas from "@/pages/PracticeAreas";
import Contact from "@/pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/practice-areas" component={PracticeAreas} />
          <Route path="/contact" component={Contact} />
          <Route component={() => <div>404 - Not Found</div>} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
