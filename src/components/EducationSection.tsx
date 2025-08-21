
import { Card, CardContent } from './ui/card';
import { Droplets } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="waterboy" className="bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading">Why Choose WaterBoy?</h2>
          <p className="section-subheading">
            Learn about the benefits of our water delivery service and our commitment to sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-waterboy-700">In a word, convenience.</h3>
            <p className="text-gray-700">
              Whether it's a 5-liter bottle or a 25-liter container, or a case of 500-ml bottles, carrying your own bottled water can be a major workout.
            </p>
            <p className="text-gray-700">
              Let our friendly WaterBoy save you the hassle by bringing the great taste of WaterBoy water right to your door-step on a weekly basis!
            </p>
            <p className="text-gray-700">
              You can count on WaterBoy to deliver the products you love to your home or office.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-waterboy-700 mb-3">Our Environmental Commitment</h3>
              <p className="text-gray-700">
                WaterBoy prides itself in being as environmentally friendly as possible:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
                <li>Our waste water is being re-purposed</li>
                <li>We do not sell our containers, we re-use them</li>
                <li>Our clients don't have to worry about changing their filters or wasting water</li>
              </ul>
            </div>

            <div className="pt-4">
              <p className="text-lg font-medium text-waterboy-700">
                Just relax - we deliver at your home or office. The only thing we can't do for our client is pour them a fresh glass of clean water.
              </p>
              <p className="text-waterboy-600 font-bold text-xl mt-2">
                It is that easy... Call now for your own fresh container of water.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-1 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <Droplets className="h-8 w-8 text-waterboy-600" />
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">Pure Quality</h3>
              </CardContent>
            </Card>
            
            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <svg className="h-8 w-8 text-waterboy-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">Better Health</h3>
              </CardContent>
            </Card>
            
            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <svg className="h-8 w-8 text-waterboy-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">Friendly Staff</h3>
              </CardContent>
            </Card>
            
            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <svg className="h-8 w-8 text-waterboy-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">Voted Best Water Company In Town</h3>
              </CardContent>
            </Card>

            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <svg className="h-8 w-8 text-waterboy-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">Consistent Service</h3>
              </CardContent>
            </Card>

            <Card className="bg-waterboy-50 border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-waterboy-100 p-3 rounded-full mb-4">
                  <svg className="h-8 w-8 text-waterboy-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-waterboy-700 font-bold text-lg mb-2">Trusted Brand</h3>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 border-none bg-gradient-to-br from-waterboy-600 to-waterboy-800 text-white">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-4">Don't Wait... Call Now!</h3>
                <p className="mb-6">Start your water delivery service today and experience the difference</p>
                <a href="tel:+27789069543" className="text-3xl font-bold hover:underline">
                  +27 78 906 9543
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
