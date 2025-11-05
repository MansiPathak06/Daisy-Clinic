import Link from 'next/link'; // Import Link from next/link for navigation

const Navbar = () => {
  return (
    <nav className="bg-sky-500 text-white shadow-lg py-4"> {/* Increased height by adding padding */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Image instead of Clinic Name */}
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="https://res.cloudinary.com/dhwxbtiwt/image/upload/v1762363810/daisy-removebg-preview_w6hfkh.png" // Replace this with the correct path to your logo image
                alt="Clinic Logo"
                className="h-16 w-auto" // Adjust the height of the logo
              />
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-6 text-lg">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-black transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            <Link href="/appointments" className="hover:text-black transition-colors">Appointments</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
