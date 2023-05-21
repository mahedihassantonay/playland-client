import logo from '../../assets/logo.png'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-blue-500 mt-16">
            <footer className="footer p-10 text-white container mx-auto">
  <div>
    <img src={logo} className='h-16' alt="" />
    <p>PlayLand Industries Ltd.<br/>Providing reliable shopping since 2005</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
    <a href='#' className='flex gap-2'> <FaInstagram size={24} /> <FaTwitterSquare size={24}/> <FaFacebookSquare size={24}/></a>
  </div>

  
</footer>
<p className="text-gray-300 text-center">
        <small>&copy; 2023 Copyright PLAYLAND. All Rights Reserved.</small>
      </p>
        </div>
    );
};

export default Footer;