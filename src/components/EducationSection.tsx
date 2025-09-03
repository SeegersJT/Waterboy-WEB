import { Droplets } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const EducationSection = () => {
  return (
    <section id="waterboy" className="bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading">Why Choose WaterBoy?</h2>
          <p className="section-subheading">
            Learn about the benefits of our water delivery service and our
            commitment to sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Feature cards arranged responsively: 2 columns on mobile and tablets, 3 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <Droplets className="h-8 w-8 text-waterboy-600" />
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">
                  Pure Quality
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <svg
                    className="h-8 w-8 text-waterboy-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">
                  Better Health
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <svg
                    className="h-8 w-8 text-waterboy-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">
                  Friendly Staff
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <svg
                    className="h-8 w-8 text-waterboy-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">
                  Voted Best Water Company In Town
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <svg
                    className="h-8 w-8 text-waterboy-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">
                  Consistent Service
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <svg
                    className="h-8 w-8 text-waterboy-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">
                  Trusted Brand
                </h3>
              </CardContent>
            </Card>

            <Card className="col-span-2 lg:col-span-3 border-none bg-gradient-to-br from-waterboy-600 to-waterboy-800 text-white">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Don't Wait... Call Now!
                </h3>
                <p className="mb-6">
                  Start your water delivery service today and experience the
                  difference
                </p>
                <a
                  href="tel:+27789069543"
                  className="text-3xl font-bold hover:underline"
                >
                  +27 78 906 9543
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
