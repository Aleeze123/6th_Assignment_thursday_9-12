import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl pt-3 px-4 space-y-8 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="font-bold text-xl text-center sm:text-left text-black">
              Subscribe to our newsletter
            </h1>
            <p className="text-center sm:text-left text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-auto">
            <div className="flex flex-col sm:flex-col md:flex-row items-center space-y-3 sm:space-y-3 w-full md:space-y-0 md:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 px-7 rounded-md border border-black tracking-widest text-left text-gray-800 w-full sm:w-auto"
              />
              <button className="border border-black hover:text-primary hover:bg-text p-1 px-4 rounded-md text-lg">
                Subscribe
              </button>
            </div>

            <p className="text-[13px] mt-3 text-center md:text-left text-black">
              By subscribing you agree to our{" "}
              <Link href="#" className="underline underline-offset-4 text-black">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex justify-center md:items-start md:justify-start">
            <Image src={"/images/logo.png"} alt="footerLogo" width={136} height={40} />
          </div>
          <div>
            <h3 className="text-black text-xl font-bold mb-2">Courses</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"} className="text-black">Business</Link>
              <Link href={"#"} className="text-black">Development</Link>
              <Link href={"#"} className="text-black">Technology</Link>
              <Link href={"#"} className="text-black">Design</Link>
              <Link href={"#"} className="text-black">Programming</Link>
            </div>
          </div>
          <div>
            <h3 className="text-black text-xl font-bold mb-2">Resources</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"} className="text-black">Career</Link>
              <Link href={"#"} className="text-black">Resume</Link>
              <Link href={"#"} className="text-black">Learning</Link>
              <Link href={"#"} className="text-black">Interview Preparation</Link>
              <Link href={"#"} className="text-black">Jobs</Link>
            </div>
          </div>
          <div>
            <h3 className="text-black text-xl font-bold mb-2">About Us</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"} className="text-black">Contact</Link>
              <Link href={"#"} className="text-black">Help/Support</Link>
              <Link href={"#"} className="text-black">FAQs</Link>
              <Link href={"#"} className="text-black">Terms and Conditions</Link>
              <Link href={"#"} className="text-black">Partner</Link>
            </div>
          </div>
        </div>
        <div className="border-t py-12 border-black pt-4 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div className="flex flex-col md:flex-row gap-5 text-center md:text-left text-black">
            <p>2023 Ddsgnr. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-black underline underline-offset-3">
                Privacy Policy
              </Link>
              <Link href="#" className="text-black underline underline-offset-3">
                Terms of Services
              </Link>
              <Link href="#" className="text-black underline underline-offset-3">
                Cookies Settings
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-full max-w-[736px] h-6 flex justify-end gap-4">
              <Link href={"#"} className="h-6 w-6">
                <Image src={"/images/facebook.svg"} alt="facebook" width={18} height={18} />
              </Link>
              <Link href={"#"} className="h-6 w-6">
                <Image src={"/images/instagram.svg"} alt="instagram" width={18} height={18} />
              </Link>
              <Link href={"#"} className="h-6 w-6">
                <Image src={"/images/twitter.svg"} alt="twitter" width={18} height={18} />
              </Link>
              <Link href={"#"} className="h-6 w-6">
                <Image src={"/images/linkedin.svg"} alt="linkedin" width={18} height={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
