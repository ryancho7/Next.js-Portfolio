"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Nav() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Mobile Development</HoveredLink>
            <HoveredLink href="/seo">Game Development</HoveredLink>
            <HoveredLink href="/branding">Database Querying</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Project Preview">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Seoul Bites"
              href="https://github.com/ryancho7/seoul-bites"
              src="/images/seoul-bites.png"
              description="Mobile IOS App: React Native, NativeWind, Sanity, Redux"
            />
            <ProductItem
              title="Sports News"
              href="https://sports-news-summarized.netlify.app/"
              src="/images/sports-news.png"
              description="Sports Article Summarizer: OpenAI GPT API, Vite, Redux, JSX, Tailwind CSS"
            />
            <ProductItem
              title="Persona Playground"
              href="https://github.com/info340-sp24a/project-erihuynh"
              src="/images/persona-playground.jpeg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Minesweeper"
              href="https://github.com/ryancho7/MineSweeper"
              src="/images/minesweeper.jpeg"
              description="Respond to government RFPs, RFIs, and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Navigate">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Welcome</HoveredLink>
            <HoveredLink href="/individual">About Me</HoveredLink>
            <HoveredLink href="/team">Timeline</HoveredLink>
            <HoveredLink href="/enterprise">Projects</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
