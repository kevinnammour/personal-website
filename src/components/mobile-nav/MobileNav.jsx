import React, { useState } from "react";
import Resume from "../../assets/Resume.pdf";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import "./mobile-nav.scss";

const variants = {
  open: { x: "0" },
  closed: { x: "100%" },
};

const MobileNav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="mobile-nav">
      <motion.button
        className="toggle"
        onClick={() => setShow((show) => !show)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {show ? (
          <IoClose className="toggle-icon" />
        ) : (
          <HiOutlineMenuAlt3 className="toggle-icon" />
        )}
      </motion.button>
      <motion.nav
        className="side-bar"
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.35 }}
        initial={false}
      >
        <motion.div className="inner-nav">
          <ul className="mobile">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li className="resume">
              <a href={Resume} download={true}>
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default MobileNav;
