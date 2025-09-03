import { Card, CardContent } from "./ui/card";

import DeliveryMan from "@/assets/delivery-man.jpg";

const AboutSection = () => {
  return (
    <section id="how it works" className="bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-heading">About WaterBoy</h2>
          <p className="section-subheading">
            The story behind our mission to provide clean water to everyone in
            Potchefstroom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={DeliveryMan}
                alt="WaterBoy delivery truck"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-waterboy-700/60 to-transparent flex items-end p-6">
                <p className="text-white text-xl font-bold">
                  Delivering since 2010
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-6">
            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 text-center">
                <h2>STEP 1</h2>
                <h3 className="text-waterboy-700 font-bold text-xl mb-2">
                  Get Started
                </h3>
                <p className="text-gray-600">Sign up or contact us to begin</p>
              </CardContent>
            </Card>

            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 text-center">
                <h2>STEP 2</h2>
                <h3 className="text-waterboy-700 font-bold text-xl mb-2">
                  Pick your day
                </h3>
                <p className="text-gray-600">
                  Choose your best weekly delivery day
                </p>
              </CardContent>
            </Card>

            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 text-center">
                <h2>STEP 3</h2>
                <h3 className="text-waterboy-700 font-bold text-xl mb-2">
                  Simple payment options
                </h3>
                <p className="text-gray-600">Card, EFT, Debit Order or cash</p>
              </CardContent>
            </Card>

            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 text-center">
                <h2>STEP 4</h2>
                <h3 className="text-waterboy-700 font-bold text-xl mb-2">
                  You're all set
                </h3>
                <p className="text-gray-600">
                  Water delivered - it's that simple
                </p>
              </CardContent>
            </Card>
          </div>

          {/* <div className="space-y-6">
            <div className="bg-waterboy-50 p-6 rounded-xl">
              <p className="italic text-waterboy-700">
                "The WaterBoy idea was born while sitting in my car in a parking lot watching an old lady 
                struggling to carry water containers to her car."
              </p>
            </div>
            
            <p className="text-gray-700">
              We started our operation in July 2010 with a simple mission - to make access to clean water 
              more convenient for everyone in Potchefstroom.
            </p>
            
            <p className="text-gray-700">
              We aim to better our clients' lifestyle by delivering clean purified water to their doorstep 
              at a very reasonable price. We place a very high value on quality and service, and all our 
              employees work very hard to achieve this common goal.
            </p>
            
            <p className="text-gray-700">
              Because of our dedication and hard work, WaterBoy is experiencing steady monthly growth 
              in our client base and becoming a well-known and trusted household name.
            </p>
            
            <div className="pt-4">
              <h3 className="font-bold text-waterboy-700 text-xl mb-3">WaterBoy Gives Back:</h3>
              <p className="text-gray-700">
                WaterBoy supports the community where and whenever possible, with donations and 
                sponsorship to local schools, sports and events.
              </p>
            </div>
          </div> */}
        </div>

        <div className="mt-16 flex flex-col items-center text-center mb-12">
          <h2 className="section-heading">What makes us unique</h2>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
            <CardContent className="p-4 md:p-6 text-center">
              <h3 className="text-waterboy-700 font-bold text-xl mb-2">
                Hassle Free
              </h3>
              <p className="text-gray-600">
                Easy ordering and regular deliveries
              </p>
            </CardContent>
          </Card>

          <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
            <CardContent className="p-4 md:p-6 text-center">
              <h3 className="text-waterboy-700 font-bold text-xl mb-2">
                No Contracts
              </h3>
              <p className="text-gray-600">No long-term commitments required</p>
              <p className="text-gray-600">Month-to-month</p>
            </CardContent>
          </Card>

          <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
            <CardContent className="p-4 md:p-6 text-center">
              <h3 className="text-waterboy-700 font-bold text-xl mb-2">
                No Deposits
              </h3>
              <p className="text-gray-600">
                Start service without upfront fees and container needed
              </p>
            </CardContent>
          </Card>

          <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
            <CardContent className="p-4 md:p-6 text-center">
              <h3 className="text-waterboy-700 font-bold text-xl mb-2">
                No Hidden Costs
              </h3>
              <p className="text-gray-600">Transparent pricing and billing</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
