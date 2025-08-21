
import { Card, CardContent } from './ui/card';

const LocationsSection = () => {
  return (
    <section id="locations" className="bg-waterboy-50/50">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading">Our Locations</h2>
          <p className="section-subheading">
            WaterBoy is proud to serve multiple areas across South Africa
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-bold text-waterboy-600 mb-3">Head Office</h4>
                <p className="text-gray-700 text-lg font-medium">Potchefstroom</p>
                <p className="text-gray-600 mt-1">+27 78 906 9543</p>
                <p className="text-gray-600 mt-1">Main operations hub</p>
              </div>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-waterboy-600 mb-3">Branches</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700"><pre>Bloemfontein  - +27 72 408 6701</pre></li>
                    <li className="text-gray-700"><pre>Kimberley     - +27 64 648 9082</pre></li>
                    <li className="text-gray-700"><pre>Krugersdorp   - +27 73 486 1302</pre></li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm h-40">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <h4 className="text-xl font-bold text-waterboy-600 text-center">
                    PRIME LOCATIONS FOR NEW WATERBOY OPPORTUNITIES AVAILABLE
                  </h4>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-[16/9]">
                <iframe
                  title="WaterBoy Potchefstroom Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.7606072128706!2d27.101874399999996!3d-26.720093799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e96813ff153262f%3A0xbf19fd06428a335c!2s22%20Scheepers%20Ave%2C%20Potchefstroom%2C%202520!5e0!3m2!1sen!2sza!4v1755779911873!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-waterboy-700 mb-2">Expanding Our Reach</h3>
                <p className="text-gray-600">
                  WaterBoy is continuously growing and expanding to new locations across South Africa. 
                  If you don't see your area listed, please contact us to check if we can service your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationsSection;
