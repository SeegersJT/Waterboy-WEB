
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from "@/hooks/use-toast";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Pricing data
const waterPrices = {
  home: {
    1: 180,
    2: 280, 
    3: 380,
    4: 480
  },
  coolerRental: {
    1: 380,
    2: 480,
    3: 580,
    4: 680
  }
};

// Step 1: Customer Information Schema
const customerInfoSchema = z.object({
  fullName: z.string().min(3, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  address: z.string().min(5, { message: "Delivery address is required" }),
  city: z.string().min(2, { message: "City is required" })
});

// Step 2: Order Details Schema
const orderDetailsSchema = z.object({
  serviceType: z.enum(["home", "office", "cooler", "baby"]),
  quantity: z.enum(["1", "2", "3", "4"])
});

// Step 3: Payment Method Schema
const paymentSchema = z.object({
  paymentMethod: z.enum(["eft", "debit_order", "cash"])
});

// Combined form schema, using partial for multi-step form
const formSchema = customerInfoSchema.merge(orderDetailsSchema).merge(paymentSchema);

type FormData = z.infer<typeof formSchema>;

const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [orderSummary, setOrderSummary] = useState<any>(null);
  
  // Initialize form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      serviceType: "home",
      quantity: "1",
      paymentMethod: "eft"
    }
  });

  const watchServiceType = form.watch("serviceType");
  const watchQuantity = form.watch("quantity");

  // Calculate price based on selections
  const calculatePrice = () => {
    const qty = parseInt(watchQuantity);
    
    if (watchServiceType === "cooler") {
      return waterPrices.coolerRental[qty];
    } else {
      return waterPrices.home[qty];
    }
  };

  const onNext = async () => {
    try {
      if (step === 1) {
        await form.trigger(['fullName', 'email', 'phone', 'address', 'city']);
        
        if (!form.formState.isValid) return;
        
        setStep(2);
      } else if (step === 2) {
        await form.trigger(['serviceType', 'quantity']);
        
        if (!form.formState.isValid) return;
        
        // Calculate final price
        const price = calculatePrice();
        setOrderSummary({
          ...form.getValues(),
          price
        });
        
        setStep(3);
      }
    } catch (error) {
      console.error("Error validating form:", error);
    }
  };

  const onBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmitOrder = async (data: FormData) => {
    try {
      // Here you would submit the order to your backend
      console.log("Submitting order:", { ...data, price: calculatePrice() });
      
      toast({
        title: "Order Submitted Successfully!",
        description: "We'll contact you shortly to confirm your delivery schedule.",
      });
      
      // Close modal and reset form after successful submission
      onClose();
      form.reset();
      setStep(1);
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        title: "Error Submitting Order",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-waterboy-700">
            {step === 1 && "Customer Information"}
            {step === 2 && "Order Details"}
            {step === 3 && "Payment & Confirmation"}
          </DialogTitle>
          <DialogDescription>
            {step === 1 && "Please provide your contact and delivery information"}
            {step === 2 && "Select your preferred service and water quantity"}
            {step === 3 && "Review your order and choose payment method"}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4">
            {/* Step 1: Customer Information Fields */}
            {step === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+27 12 345 6789" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main Street" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Potchefstroom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Step 2: Order Details Fields */}
            {step === 2 && (
              <>
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Service Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="home" id="home" />
                            <FormLabel htmlFor="home" className="font-normal cursor-pointer">
                              Home Delivery Service
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="office" id="office" />
                            <FormLabel htmlFor="office" className="font-normal cursor-pointer">
                              Office Delivery Service
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cooler" id="cooler" />
                            <FormLabel htmlFor="cooler" className="font-normal cursor-pointer">
                              Water Cooler Rental (includes water)
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="baby" id="baby" />
                            <FormLabel htmlFor="baby" className="font-normal cursor-pointer">
                              Baby Water Delivery
                            </FormLabel>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>How many containers per week?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-4"
                        >
                          <div className="flex flex-col items-center p-3 border rounded-md border-waterboy-200 hover:bg-waterboy-50 cursor-pointer">
                            <RadioGroupItem value="1" id="qty1" className="sr-only" />
                            <FormLabel htmlFor="qty1" className="cursor-pointer text-center">
                              <div className="font-bold text-lg text-waterboy-700">1x</div>
                              <div className="text-sm">
                                R{watchServiceType === 'cooler' ? '380' : '180'}/month
                              </div>
                            </FormLabel>
                          </div>
                          
                          <div className="flex flex-col items-center p-3 border rounded-md border-waterboy-200 hover:bg-waterboy-50 cursor-pointer">
                            <RadioGroupItem value="2" id="qty2" className="sr-only" />
                            <FormLabel htmlFor="qty2" className="cursor-pointer text-center">
                              <div className="font-bold text-lg text-waterboy-700">2x</div>
                              <div className="text-sm">
                                R{watchServiceType === 'cooler' ? '480' : '280'}/month
                              </div>
                            </FormLabel>
                          </div>
                          
                          <div className="flex flex-col items-center p-3 border rounded-md border-waterboy-200 hover:bg-waterboy-50 cursor-pointer">
                            <RadioGroupItem value="3" id="qty3" className="sr-only" />
                            <FormLabel htmlFor="qty3" className="cursor-pointer text-center">
                              <div className="font-bold text-lg text-waterboy-700">3x</div>
                              <div className="text-sm">
                                R{watchServiceType === 'cooler' ? '580' : '380'}/month
                              </div>
                            </FormLabel>
                          </div>
                          
                          <div className="flex flex-col items-center p-3 border rounded-md border-waterboy-200 hover:bg-waterboy-50 cursor-pointer">
                            <RadioGroupItem value="4" id="qty4" className="sr-only" />
                            <FormLabel htmlFor="qty4" className="cursor-pointer text-center">
                              <div className="font-bold text-lg text-waterboy-700">4x</div>
                              <div className="text-sm">
                                R{watchServiceType === 'cooler' ? '680' : '480'}/month
                              </div>
                            </FormLabel>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="mt-6 p-4 bg-waterboy-50 rounded-md">
                  <p className="font-bold text-waterboy-700">Your Selected Package:</p>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <p className="text-sm font-medium">
                        {watchServiceType === 'home' ? 'Home Delivery Service' : 
                         watchServiceType === 'office' ? 'Office Delivery Service' :
                         watchServiceType === 'cooler' ? 'Water Cooler Rental' : 'Baby Water Delivery'}
                      </p>
                      <p className="text-sm">{watchQuantity}x containers per week</p>
                    </div>
                    <div className="text-xl font-bold text-waterboy-700">
                      R{calculatePrice()}/month
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Step 3: Payment & Confirmation */}
            {step === 3 && orderSummary && (
              <>
                <div className="bg-waterboy-50 p-4 rounded-md space-y-3">
                  <h3 className="font-bold text-lg">Order Summary</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm font-medium">Full Name:</p>
                      <p className="text-sm">{orderSummary.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Contact:</p>
                      <p className="text-sm">{orderSummary.phone}</p>
                      <p className="text-sm">{orderSummary.email}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Delivery Address:</p>
                    <p className="text-sm">{orderSummary.address}, {orderSummary.city}</p>
                  </div>
                  
                  <div className="border-t border-waterboy-200 pt-3 mt-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">
                          {orderSummary.serviceType === 'home' ? 'Home Delivery Service' : 
                           orderSummary.serviceType === 'office' ? 'Office Delivery Service' :
                           orderSummary.serviceType === 'cooler' ? 'Water Cooler Rental' : 'Baby Water Delivery'}
                        </p>
                        <p className="text-sm">{orderSummary.quantity}x containers per week</p>
                      </div>
                      <div className="text-xl font-bold text-waterboy-700">
                        R{orderSummary.price}/month
                      </div>
                    </div>
                  </div>
                </div>
                
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Payment Method</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="eft" id="eft" />
                            <FormLabel htmlFor="eft" className="font-normal cursor-pointer">
                              EFT (Electronic Funds Transfer)
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="debit_order" id="debit_order" />
                            <FormLabel htmlFor="debit_order" className="font-normal cursor-pointer">
                              Monthly Debit Order
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cash" id="cash" />
                            <FormLabel htmlFor="cash" className="font-normal cursor-pointer">
                              Cash on Delivery
                            </FormLabel>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-sm text-gray-500 mt-3">
                  <p>Note: After placing your order, our team will contact you to confirm your delivery schedule and payment details.</p>
                </div>
              </>
            )}
          </form>
        </Form>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          {step > 1 && (
            <Button 
              variant="outline" 
              onClick={onBack} 
              className="w-full sm:w-auto"
            >
              Back
            </Button>
          )}
          
          {step < 3 ? (
            <Button 
              onClick={onNext}
              className="w-full sm:w-auto bg-waterboy-600 hover:bg-waterboy-700"
            >
              Next
            </Button>
          ) : (
            <Button 
              onClick={form.handleSubmit(onSubmitOrder)}
              className="w-full sm:w-auto bg-waterboy-600 hover:bg-waterboy-700"
            >
              Place Order
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
