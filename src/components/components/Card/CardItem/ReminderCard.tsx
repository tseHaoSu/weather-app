import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const ReminderCard = () => {
  const [reminderTime, setReminderTime] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!reminderTime) {
      toast.error("Please select a reminder time!");
      return;
    }

    // Set timeout
    setTimeout(() => {
      toast.info("Time's up!", {
        description: `It has been ${reminderTime}, please apply sunscreen.`,
      });
    }, getTimeInMs(reminderTime));

    // Reset form
    setReminderTime("");
  };

  const getTimeInMs = (value: string) => {
    switch (value) {
      case "5 seconds":
        return 5 * 1000;
      case "10 seconds":
        return 10 * 1000;
      case "1 hour":
        return 60 * 60 * 1000;
      case "2 hours":
        return 2 * 60 * 60 * 1000;
      default:
        return 0;
    }
  };

  return (
    <Card className="w-full h-full flex flex-col rounded-xl bg-muted/50">
      <CardHeader>
        <CardTitle>Reminder</CardTitle>
        <CardDescription>Set a reminder to apply sunscreen</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        <form
          id="reminder-form"
          onSubmit={handleSubmit}
          className="h-full flex flex-col"
        >
          <div className="flex flex-row w-full items-start gap-6 flex-grow">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Time</Label>
              <Select value={reminderTime} onValueChange={setReminderTime}>
                <SelectTrigger
                  id="framework"
                  className="border-2 border-blue-400"
                >
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="5 seconds">5 seconds</SelectItem>
                  <SelectItem value="10 seconds">10 seconds</SelectItem>
                  <SelectItem value="1 hour">1 hour</SelectItem>
                  <SelectItem value="2 hours">2 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 mt-auto">
        <Button type="submit" form="reminder-form">
          Set Time
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReminderCard;
