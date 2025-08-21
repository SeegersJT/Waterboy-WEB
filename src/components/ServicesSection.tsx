/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check, Home, Database, Recycle, Droplet } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  iconColor = "text-waterboy-500",
  features,
  pricing 
}: { 
  title: string; 
  description: string; 
  icon: any; 
  iconColor?: string;
  features: string[];
  pricing: React.ReactNode;
}) => (
  <Card className="border-waterboy-100 hover:shadow-lg transition-shadow h-full flex flex-col">
    <CardHeader className="pb-4">
      <div className={`${iconColor} mb-4 flex items-center`}>
        <Icon size={24} className="mr-2" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col">
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-6 flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-waterboy-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4 border-t">
        {pricing}
      </div>
    </CardContent>
  </Card>
);

const ServicesSection = () => {
  return (
    <section id="services" className="bg-waterboy-50/50">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            We offer multiple delivery options and other services to suit your home and business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Container Rental & Delivery"
            description="We deliver purified water to your doorstep on a weekly basis."
            icon={Home}
            iconColor="text-waterboy-500"
            features={[
              "Weekly delivery on a specific day",
              "Clean containers provided by us",
              "Fresh water rotation each week",
              "No heavy containers to carry"
            ]}
            pricing={
              <div>
                <p className="font-medium text-gray-700">Starting from</p>
                <p className="text-2xl font-bold text-waterboy-700">R200<span className="text-sm text-gray-500 font-normal"> /month</span></p>
                <p className="text-xs text-gray-500">1 container weekly</p>
              </div>
            }
          />

          <ServiceCard
            title="Water Cooler Rental"
            description="Rent a water cooler with warm and cold water options."
            icon={Database}
            iconColor="text-waterboy-600"
            features={[
              "Both got and cold water options",
              "Weekly water delivery included",
              "Professional installation",
              "Maintenance included"
            ]}
            pricing={
              <div>
                <p className="font-medium text-gray-700">Multiple bottle options</p>
                <p className="text-2xl font-bold text-waterboy-700">R300<span className="text-sm text-gray-500 font-normal"> /month</span></p>
                <p className="text-xs text-gray-500">2 containers weekly</p>
              </div>
            }
          />

          <ServiceCard
            title="Refills & Coupons"
            description="We offer refill and coupon services at the Waterboy operations hub."
            icon={Recycle}
            iconColor="text-waterboy-700"
            features={[
              "Bring your own containers",
              "Available at 22 Scheepers Ave",
              "Coupons include 20 refills",
              "Refill up to 25L withh 1 punch"
            ]}
            pricing={
              <div>
                <p className="font-medium text-gray-700">Rental + 1 container</p>
                <p className="text-2xl font-bold text-waterboy-700">R400<span className="text-sm text-gray-500 font-normal"> /month</span></p>
                <p className="text-xs text-gray-500">Additional containers available</p>
              </div>
            }
          />

          <ServiceCard
            title="Water bottles"
            description="Get you pure and fresh water bottles available for your business or event."
            icon={Droplet}
            iconColor="text-waterboy-400"
            features={[
              "500ml bottles",
              "1 Liter bottles",
              "5 Litter bottles",
              "Custom labelling available"
            ]}
            pricing={
              <div>
                <p className="font-medium text-gray-700">Call for custom pricing</p>
                <p className="text-xl font-bold text-waterboy-700">+27 78 906 9543</p>
              </div>
            }
          />
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-waterboy-700 mb-6">Pricing Structure</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-waterboy-600 text-lg mb-4">Standard Water Delivery</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-700">1x container weekly</span>
                  <span className="font-medium">R200 per month</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-700">2x containers weekly</span>
                  <span className="font-medium">R300 per month</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-700">3x containers weekly</span>
                  <span className="font-medium">R400 per month</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">4x containers weekly</span>
                  <span className="font-medium">R500 per month</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-waterboy-600 text-lg mb-4">Water Cooler Rental + Delivery</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-700">Cooler + 1x container weekly</span>
                  <span className="font-medium">R400 per month</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-700">Cooler + 2x containers weekly</span>
                  <span className="font-medium">R500 per month</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-700">Cooler + 3x containers weekly</span>
                  <span className="font-medium">R600 per month</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Cooler + 4x containers weekly</span>
                  <span className="font-medium">R700 per month</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
