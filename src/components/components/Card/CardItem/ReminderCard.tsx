import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
  const [reminderHour, setReminderHour] = useState("");
  const [reminderMin, setReminderMin] = useState("");
  const [reminderTimes, setReminderTimes] = useState<{ [key: number]: string }>(
    {}
  );

  const reminderIntervals = [2, 4, 6];

  const calculateReminderTime = (
    baseHour: number,
    baseMinute: number,
    hoursToAdd: number
  ) => {
    const newHour = (baseHour + hoursToAdd) % 24;
    const formattedHour = newHour === 0 ? 24 : newHour;
    const formattedMin = baseMinute.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMin}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!reminderHour || !reminderMin) {
      toast.error("Please select a reminder time!");
      return;
    }

    const hour = parseInt(reminderHour);
    const minute = parseInt(reminderMin);

    //add 2 hours
    const times: { [key: number]: string } = {};
    reminderIntervals.forEach((interval) => {
      times[interval] = calculateReminderTime(hour, minute, interval);
    });

    setReminderTimes(times);
    // Set timeouts for each reminder interval

    toast.success("Reminders set!", {
      description: `You will be reminded at the following times: ${Object.values(
        times
      ).join(", ")}`,
    });

    // Reset form
    setReminderHour("");
    setReminderMin("");
  };

  return (
    <Card className="w-full flex flex-col rounded-xl bg-muted/50">
      <CardHeader>
        <CardTitle> 🕐 Personal Sunscreen Reminder</CardTitle>
        <CardDescription>
          Enter the time you last applied sunscreen to know when to re-apply!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        <form
          id="reminder-form"
          onSubmit={handleSubmit}
          className="h-full flex flex-col"
        >
          <div className="flex flex-row w-full items-start gap-6 flex-grow">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="framework">Hour</Label>
              <Select value={reminderHour} onValueChange={setReminderHour}>
                <SelectTrigger
                  id="hour-selection"
                  className="border-2 border-blue-400"
                >
                  <SelectValue placeholder="Hours" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
                    <SelectItem key={hour} value={hour.toString()}>
                      {hour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Label htmlFor="framework">Minutes</Label>
              <Select value={reminderMin} onValueChange={setReminderMin}>
                <SelectTrigger
                  id="min-selection"
                  className="border-2 border-blue-400"
                >
                  <SelectValue placeholder="Minutes" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                    <SelectItem key={minute} value={minute.toString()}>
                      {minute}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
        <Button type="submit" form="reminder-form" className="bg-sky-500">
          Set Time
        </Button>
        {reminderTimes && (
          <div className="mt-6 flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-sm">
            <h3 className="text-blue-800 font-medium mb-1">
              Next Application Time
            </h3>
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white text-2xl font-bold py-2 px-4 rounded-md shadow">
                {reminderTimes[2]}
              </div>
              <div className="bg-blue-500 text-white text-2xl font-bold py-2 px-4 rounded-md shadow">
                {reminderTimes[4]}
              </div>
              <div className="bg-blue-500 text-white text-2xl font-bold py-2 px-4 rounded-md shadow">
                {reminderTimes[6]}
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-2">
              Set a reminder for every 2, 4, and 6 hours
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
