import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-waterboy-50/50 px-4">
      <Card className="w-full max-w-xl shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-waterboy-700">
            Water Delivery Dashboard
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            We’re putting the finishing touches on something cool. 🚚💧
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl bg-waterboy-100/50 p-4 text-waterboy-700 text-center">
            Coming soon — track orders, manage deliveries, and more.
          </div>

          <div className="flex justify-center">
            <a href="/" className="text-sm text-waterboy-700 hover:underline">
              ← Back to Home
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
