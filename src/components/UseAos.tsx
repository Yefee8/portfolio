"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function UseAos() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <></>;
}
