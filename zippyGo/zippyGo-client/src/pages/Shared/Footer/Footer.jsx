import React from "react";
import logo from "../../../assets/logo/zippyGoLogo.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import apple from "../../../assets/appsImg/app_store.png";
import google from "../../../assets/appsImg/google_play.png";

const Footer = () => {
  return (
    <div>
      <footer className="border-t bg-background text-foreground py-6">
        {/* first part */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-10 h-10 lg:w-18 lg:h-18 rounded-sm"
                src={logo}
                alt=""
              />
              <p className="text-sm text-muted-foreground">
                Fast • Reliable • Nationwide Delivery
              </p>
            </div>
            <div className="mt-5 space-x-2 text-lg">
              <p className="text-muted-foreground ">
                House #236, Rd No. 8, Banasree,
              </p>
              <p className="text-muted-foreground mb-3">Rampura, Dhaka 1209</p>
              <p className="text-muted-foreground">
                E-mail: info@zippyGo.com.bd
              </p>
              <p className="text-muted-foreground">Hotline: 09678-045045</p>
            </div>
          </div>

          {/* middle part */}
          <div className="border-y-1 border-dashed border-[#e9806d] px-80 py-3">
            <div className="flex gap-4 text-sm">
              <a href="/about" className="hover:text-[#EE4E32]">
                About
              </a>
              <a href="/services" className="hover:text-[#EE4E32]">
                Services
              </a>
              <a href="/contact" className="hover:text-[#EE4E32]">
                Contact
              </a>
              <a href="/privacy" className="hover:text-[#EE4E32]">
                Privacy
              </a>
            </div>
            <div className="flex gap-4 justify-center mt-5">
              <Facebook />
              <Instagram />
              <Linkedin />
            </div>
          </div>

          {/* last part */}
          <div className="flex flex-col items-center text-center">
            <p className="mb-5 font-bold">For Mobile App</p>
            <div className="flex gap-2 mb-3">
              <img src={apple} alt="" />
              <img src={google} alt="" />
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ZippyGo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
