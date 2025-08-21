import { useState } from 'react';
import emailjs from 'emailjs-com';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle 
} from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { Facebook, Mail, Send } from 'lucide-react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      // these keys must match your EmailJS template variable names
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      time: new Date()
    }, PUBLIC_KEY)
    .then(() => {
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
      setFormData({ name: '', email: '', phone: '', message: '', subject: 'General Inquiry' });
    })
    .catch((err) => {
      console.error(err);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    })
    .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="bg-waterboy-50/50">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading">Contact Us</h2>
          <p className="section-subheading">
            Get in touch with our team for orders, inquiries, or more information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-waterboy-700">Send Us A Message</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
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
                  <Label htmlFor="subject">Subject</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Home Delivery">Container Rental & Delivery</option>
                    <option value="Office Delivery">Water Cooler Rental</option>
                    <option value="Water Cooler Rental">Refills & Coupons</option>
                    <option value="Business Opportunity">Water bottles</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please let us know how we can help..."
                    className="min-h-32"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-waterboy-500 hover:bg-waterboy-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Preparing…' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </form>
          </Card>

          {/* Right column unchanged */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-waterboy-700 mb-4">Get In Touch</h3>
              <p className="text-gray-700 mb-6">
                Have questions about our services or want to schedule a delivery? Contact us using any of the 
                methods below and our friendly team will be happy to assist you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-waterboy-100 p-3 rounded-full mr-4">
                    <svg className="h-6 w-6 text-waterboy-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <a href="tel:+27789069543" className="text-lg font-medium text-waterboy-700 hover:underline">
                      +27 78 906 9543
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-waterboy-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-waterboy-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <a href="mailto:water8boy@gmail.com" className="text-lg font-medium text-waterboy-700 hover:underline">
                      water8boy@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-waterboy-100 p-3 rounded-full mr-4">
                    <svg className="h-6 w-6 text-waterboy-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Head Office</p>
                    <p className="text-lg font-medium text-waterboy-700">
                      22 Scheepers Ave, Potchefstroom, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-waterboy-700 mb-4">Business Hours</h3>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-waterboy-700 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-waterboy-100 p-4 rounded-full hover:bg-waterboy-200 transition-colors"
                >
                  <Facebook className="h-6 w-6 text-waterboy-600" />
                </a>
                <a
                  href="https://wa.me/27789069543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-waterboy-100 p-4 rounded-full hover:bg-waterboy-200 transition-colors"
                >
                  <svg className="h-6 w-6 text-waterboy-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.41044 22L3.76749 16.4147C2.93524 15.0884 2.50021 13.5337 2.5 11.9167C2.49974 6.91919 6.57299 2.83333 11.5833 2.83333C14.0167 2.83333 16.3201 3.76668 18.0636 5.51465C19.8071 7.26263 20.75 9.56668 20.75 12C20.75 16.9975 16.6767 21.0833 11.6667 21.0833C10.1487 21.0833 8.62624 20.7078 7.28695 20H2.41044Z" />
                    <path d="M2.41044 22L3.76749 16.4147C2.93524 15.0884 2.50021 13.5337 2.5 11.9167C2.49974 6.91919 6.57299 2.83333 11.5833 2.83333C14.0167 2.83333 16.3201 3.76668 18.0636 5.51465C19.8071 7.26263 20.75 9.56668 20.75 12C20.75 16.9975 16.6767 21.0833 11.6667 21.0833C10.1487 21.0833 8.62624 20.7078 7.28695 20H2.41044Z" />
                    <path d="M16.0434 14.5C15.7014 15.0167 14.9116 15.6434 14.4513 15.7581C14.1788 15.8186 13.7818 15.8658 12.9833 15.5917C11.7034 15.1588 10.2264 13.8461 9.17682 12.0333C8.67809 11.1686 8.42426 10.0814 9.17682 9.33333C9.37501 9.10625 9.58266 8.98866 9.79167 8.91667L10.3784 8.91667C10.5867 8.91667 10.8034 9.11667 10.9167 9.33333L11.4334 10.375C11.525 10.5667 11.5076 10.8131 11.3933 11.0084L11.1316 11.4174C11.0536 11.5449 11.0512 11.7055 11.1267 11.8333C11.3801 12.2683 11.7161 12.7476 12.1083 13.1417C12.4517 13.485 12.8226 13.8281 13.2583 14.055C13.3864 14.1203 13.5386 14.1142 13.6604 14.0401L14.0583 13.7667C14.2517 13.6334 14.5 13.6167 14.6767 13.7L15.9159 14.3507C16.1326 14.4641 16.2167 14.6357 16.0434 14.5Z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@waterboy.co.za"
                  className="bg-waterboy-100 p-4 rounded-full hover:bg-waterboy-200 transition-colors"
                >
                  <Mail className="h-6 w-6 text-waterboy-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
