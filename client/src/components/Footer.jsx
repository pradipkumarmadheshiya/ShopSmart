import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white mt-16">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold mb-4">ShopSmart</h3>
              <ul className="space-y-2">
                <li className="hover:text-blue-100 cursor-pointer">About Us</li>
                <li className="hover:text-blue-100 cursor-pointer">Careers</li>
                <li className="hover:text-blue-100 cursor-pointer">Press Releases</li>
                <li className="hover:text-blue-100 cursor-pointer">Gift Cards</li>
              </ul>
            </div>
            
            {/* Help */}
            <div>
              <h3 className="text-lg font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li className="hover:text-blue-100 cursor-pointer">Payments</li>
                <li className="hover:text-blue-100 cursor-pointer">Shipping</li>
                <li className="hover:text-blue-100 cursor-pointer">Cancellation & Returns</li>
                <li className="hover:text-blue-100 cursor-pointer">FAQ</li>
              </ul>
            </div>
            
            {/* Policy */}
            <div>
              <h3 className="text-lg font-bold mb-4">Policy</h3>
              <ul className="space-y-2">
                <li className="hover:text-blue-100 cursor-pointer">Return Policy</li>
                <li className="hover:text-blue-100 cursor-pointer">Terms of Use</li>
                <li className="hover:text-blue-100 cursor-pointer">Security</li>
                <li className="hover:text-blue-100 cursor-pointer">Privacy</li>
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 cursor-pointer">
                    <Facebook/>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 cursor-pointer">
                    <Twitter/>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 cursor-pointer">
                    <Linkedin/>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 cursor-pointer">
                    <Youtube/>
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2">Newsletter</h3>
              <div className=" flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="p-2 rounded focus:outline-none flex-grow border w-60 md:w-full"
                />
                <button className="bg-gray-800 px-4 rounded hover:bg-gray-900 cursor-pointer py-2 w-fit md:w-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm">
            © {new Date().getFullYear()} ShopSmart. All rights reserved.
          </div>
        </div>
    </footer>
  )
}

export default Footer
