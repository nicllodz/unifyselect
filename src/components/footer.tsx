import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3670] text-white py-10 px-6 md:px-16 flex justify-between">
      <div className="text-xl font-bold">Unify Select Health</div>
      <div className="flex text-xl text-right">
        <div>© Copyright 2024. Unify Select Health. All Rights Reserved.</div>
        <div>&nbsp; | Membership Terms & Cond.</div>
        <div>&nbsp; | Privacy Policy</div>
      </div>
    </footer>
  );
}