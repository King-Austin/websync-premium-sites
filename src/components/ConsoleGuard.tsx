"use client";

import { useEffect } from "react";

export const ConsoleGuard = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const warningMessage = `%cSTOP!%c

This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a websyncdigital feature or "hack" someone's account, it is a scam and will give them access to your account.

%cwebsyncdigital Asset Protection is active.%c
Unauthorized scraping or exploitation is strictly forbidden.
RC 9470161 | Websyncdigital Technology Ltd | Fully Registered Legal Entity`;

      console.log(
        warningMessage,
        "color: red; font-size: 50px; font-weight: bold; -webkit-text-stroke: 1px black;",
        "color: gray; font-size: 16px;",
        "color: #2563eb; font-size: 18px; font-weight: bold;",
        "color: gray; font-size: 12px;"
      );

      // Aggressive Source Protection: Debugger Trap
      // This will pause the thread constantly if DevTools is open, making Source inspection nearly impossible.
      const sourceGuard = () => {
        setInterval(() => {
          (function() { 
            return false;
          }["constructor"]("debugger")());
        }, 100);
      };
      sourceGuard();
      
      // Prevent standard right-click on sensitive images
      const handleContextMenu = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'IMG' && target.classList.contains('protected-asset')) {
          e.preventDefault();
        }
      };
      
      document.addEventListener('contextmenu', handleContextMenu);
      return () => document.removeEventListener('contextmenu', handleContextMenu);
    }
  }, []);

  return null;
};
