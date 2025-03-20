import { Separator } from "../ui/separator";
import { Sun } from "lucide-react";

const footer = () => {
  return (
    <footer className="mt-auto border-t px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:flex-row gap-4">
          <Sun />
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UVision. All rights reserved.
          </div>
        </div>
        <Separator className="md:hidden" />
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
