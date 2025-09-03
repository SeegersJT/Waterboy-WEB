import {
  Check,
  Database,
  Droplet,
  Home,
  LucideIcon,
  Minus,
  Plus,
  Recycle,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import bottles from "@/assets/bottles.png";
import containers from "@/assets/containers.jpg";
import coolers from "@/assets/coolers.png";
import refills from "@/assets/refills.jpg";
import OrderRequestModal from "./OrderRequestModal";

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  iconColor = "text-waterboy-500",
  features,
  watermark,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  features: string[];
  watermark?: string;
}) => (
  <Card className="border-waterboy-100 hover:shadow-lg transition-shadow h-full flex flex-col relative overflow-hidden">
    {watermark && (
      <>
        <img
          src={watermark}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-waterboy-50/80 via-white/60 to-white/90 pointer-events-none" />
      </>
    )}
    <CardHeader className="pb-4 relative z-10 drop-shadow-sm">
      <div className={`${iconColor} mb-4 flex items-center`}>
        <Icon size={24} className="mr-2" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col relative z-10 drop-shadow-sm">
      <p className="text-gray-700 mb-6">{description}</p>
      <div className="mb-6 flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-waterboy-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

const ServicesSection = () => {
  const [containerCount, setContainerCount] = useState(1);
  const [includeCooler, setIncludeCooler] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const COOLER_RENTAL_PRICE = 200;
  const containerPrice = 200 + (containerCount - 1) * 100;
  const coolerPrice = includeCooler ? COOLER_RENTAL_PRICE : 0;
  const totalPrice = containerPrice + coolerPrice;

  return (
    <section id="services" className="bg-waterboy-50/50">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            We offer multiple delivery options and other services to suit your
            home and business needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <ServiceCard
            title="Container Rental & Delivery"
            description="We deliver purified water to your doorstep on a weekly basis."
            icon={Home}
            iconColor="text-waterboy-500"
            watermark={containers}
            features={[
              "Weekly delivery on a specific day",
              "Clean containers provided by us",
              "Fresh water rotation each week",
              "No heavy containers to carry",
            ]}
          />

          <ServiceCard
            title="Water Cooler Rental"
            description="Rent a water cooler with warm and cold water options."
            icon={Database}
            iconColor="text-waterboy-600"
            watermark={coolers}
            features={[
              "Both hot and cold water options",
              "Weekly water delivery included",
              "Professional installation",
              "Maintenance included",
            ]}
          />

          <ServiceCard
            title="Refills & Coupons"
            description="We offer refill and coupon services at the Waterboy operations hub."
            icon={Recycle}
            iconColor="text-waterboy-700"
            watermark={refills}
            features={[
              "Bring your own containers",
              "Available at 22 Scheepers Ave",
              "Coupons available for a reduced price",
            ]}
          />

          <ServiceCard
            title="Water bottles"
            description="Get you pure and fresh water bottles available for your business or event."
            icon={Droplet}
            iconColor="text-waterboy-400"
            watermark={bottles}
            features={[
              "500ml bottles",
              "1 Liter bottles",
              "5 Litter bottles",
              "Custom labelling available",
            ]}
          />
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-waterboy-700 mb-6">
            Pricing Structure
          </h3>

          <div className="max-w-md mx-auto flex flex-col items-center space-y-6">
            <h4 className="font-bold text-waterboy-600 text-lg text-center">
              {includeCooler
                ? "Water Cooler Rental + Delivery"
                : "Standard Water Delivery"}
            </h4>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setContainerCount((prev) => Math.max(1, prev - 1))
                }
                aria-label="Decrease containers"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-medium">
                {containerCount} container{containerCount > 1 ? "s" : ""} weekly
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setContainerCount((prev) => Math.min(4, prev + 1))
                }
                aria-label="Increase containers"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeCooler}
                onChange={(e) => setIncludeCooler(e.target.checked)}
                className="h-4 w-4 accent-waterboy-500"
              />
              <span className="text-gray-700">
                {`Include water cooler (+R${COOLER_RENTAL_PRICE}/mo)`}
              </span>
            </label>

            <div className="space-y-3 text-center">
              <div className="flex justify-center flex-wrap gap-2">
                <span className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full">
                  Containers: R{containerPrice} / mo
                </span>
                {includeCooler && (
                  <span className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full">
                    Cooler: R{coolerPrice} / mo
                  </span>
                )}
              </div>
              <div className="text-xl font-bold text-waterboy-700">
                Total: R{totalPrice} per month
              </div>
            </div>

            <Button
              onClick={() => setShowOrderModal(true)}
              className="w-full bg-waterboy-500 hover:bg-waterboy-600"
            >
              Order Now
            </Button>
          </div>
        </div>
        <OrderRequestModal
          isOpen={showOrderModal}
          onClose={() => setShowOrderModal(false)}
          containerCount={containerCount}
          includeCooler={includeCooler}
          totalPrice={totalPrice}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
