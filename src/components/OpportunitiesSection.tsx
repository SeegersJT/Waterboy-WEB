
import { Button } from './ui/button';

const OpportunitiesSection = () => {
  return (
    <section id="opportunities" className="bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading">Business Opportunities</h2>
          <p className="section-subheading">
            Join the WaterBoy family and buy your own WaterBoy opportunity
          </p>
        </div>

        <div className="bg-gradient-to-br from-waterboy-500 to-waterboy-700 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Become A WaterBoy Licensee</h3>
              <p className="mb-6">
                Do you want to work from home and earn a very good income? The WaterBoy franchise program offers licensed opportunities all over South Africa
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-waterboy-200 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <p>Work from home with a flexible schedule</p>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-waterboy-200 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <p>Earn an above-average income</p>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-waterboy-200 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <p>Benefit from our proven business model</p>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-waterboy-200 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <p>More free time to spend with your family</p>
                </div>
                 <div className="flex items-start">
                  <svg className="h-6 w-6 text-waterboy-200 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <p>Re-occuring client base</p>
                </div>
              </div>
              <p className="text-lg font-medium mb-8">
                WaterBoy is ideal for free-thinking individuals who want more control over their time 
                and income in an ever growing environment.
              </p>
              <div>
                <Button className="bg-white text-waterboy-700 hover:bg-waterboy-50">
                  <a href="tel:+27834757372">Contact Leon: +27 83 475 7372</a>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-[url('/business-opportunity.jpg')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpportunitiesSection;
