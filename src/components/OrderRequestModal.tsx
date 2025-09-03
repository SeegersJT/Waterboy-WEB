import emailjs from "emailjs-com";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface OrderRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  containerCount: number;
  includeCooler: boolean;
  totalPrice: number;
}

const OrderRequestModal = ({
  isOpen,
  onClose,
  containerCount,
  includeCooler,
  totalPrice,
}: OrderRequestModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const COOLER_RENTAL_PRICE = 200;
  const coolerPrice = includeCooler ? COOLER_RENTAL_PRICE : 0;
  const containerPrice = totalPrice - coolerPrice;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderDetails = `Order Details:\nContainers: ${containerCount}\nInclude cooler: ${
      includeCooler ? "Yes" : "No"
    }\nTotal: R${totalPrice} per month`;

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: "Order Request",
          message: `${orderDetails}\n\n${formData.message}`,
          time: new Date(),
        },
        PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Request sent!",
          description: "We'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        onClose();
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-waterboy-700">Order Now</DialogTitle>
          <DialogDescription>
            Fill in your details to request an order.
          </DialogDescription>
        </DialogHeader>
        <div className="mb-4 space-y-3 text-center">
          <div className="flex justify-center flex-wrap gap-2">
            <span className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full">
              {containerCount} container{containerCount > 1 ? "s" : ""}: R
              {containerPrice} / mo
            </span>
            {includeCooler && (
              <span className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full">
                Cooler: R{coolerPrice} / mo
              </span>
            )}
          </div>
          <div className="text-sm text-gray-700">
            Total:{" "}
            <span className="font-bold text-waterboy-700">
              R{totalPrice} per month
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+27 12 345 6789"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Details</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special instructions..."
              className="min-h-32"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-waterboy-500 hover:bg-waterboy-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Send Request"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderRequestModal;
