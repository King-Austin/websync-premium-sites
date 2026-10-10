import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import ServiceTabs from "./ServiceTabs";
import FAQ from "./FAQ";
import Portfolio from "./Portfolio";
import Header from "./Header";
import ContactBrief from "./ContactBrief";
import Footer from "./Footer";

describe("WebSync marketing interactions", () => {
  it("switches service content with pointer and keyboard, wrapping at the ends", () => {
    render(<ServiceTabs />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(8);
    fireEvent.click(screen.getByRole("tab", { name: /Web Application/ }));
    expect(screen.getByRole("tabpanel")).toHaveAccessibleName(
      "Web Application",
    );
    expect(
      within(screen.getByRole("tabpanel")).getByRole("heading", {
        name: "Web Application",
      }),
    ).toBeVisible();
    fireEvent.keyDown(screen.getByRole("tab", { name: /Web Application/ }), {
      key: "End",
    });
    expect(screen.getByRole("tab", { name: /Website Care/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    fireEvent.keyDown(screen.getByRole("tab", { name: /Website Care/ }), {
      key: "ArrowRight",
    });
    expect(screen.getByRole("tab", { name: /Landing Page/ })).toHaveFocus();
    expect(screen.getByRole("tab", { name: /Landing Page/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
  it("filters questions and replaces the answer without leaving a stale selected question", () => {
    render(<FAQ />);
    fireEvent.click(
      screen.getByRole("button", { name: "Ownership", exact: true }),
    );
    expect(screen.getByRole("region", { name: "Answer" })).toHaveTextContent(
      "₦399,000",
    );
    fireEvent.change(
      screen.getByRole("searchbox", { name: "Search questions" }),
      { target: { value: "xyz" } },
    );
    expect(screen.getByRole("status")).toHaveTextContent("No questions match");
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "" } });
    fireEvent.click(screen.getByRole("button", { name: "All", exact: true }));
    fireEvent.click(screen.getByRole("button", { name: /03 How long/ }));
    expect(screen.getByRole("region", { name: "Answer" })).toHaveTextContent(
      "7–14 business days",
    );
  });
  it("shows 19 distinct client parent domains and filters without changing external destinations", () => {
    const { container } = render(<Portfolio />);
    expect(container.querySelectorAll(".ws-project")).toHaveLength(19);
    const domains = [...container.querySelectorAll(".ws-project-image")].map(
      (a) => new URL(a.getAttribute("href")!).hostname,
    );
    expect(new Set(domains).size).toBe(19);
    expect(domains.every((h) => !h.includes("websyncdigital"))).toBe(true);
    fireEvent.click(
      screen.getByRole("button", { name: "Commerce", exact: true }),
    );
    expect(container.querySelectorAll(".ws-project")).toHaveLength(3);
    fireEvent.click(
      screen.getByRole("button", { name: "Software", exact: true }),
    );
    expect(container.querySelectorAll(".ws-project")).toHaveLength(2);
    fireEvent.click(
      screen.getByRole("button", { name: "All work", exact: true }),
    );
    expect(container.querySelectorAll(".ws-project")).toHaveLength(19);
  });
  it("opens the mobile navigation and closes after route selection", () => {
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
    const nav = screen.getByRole("navigation", { name: "Mobile navigation" });
    expect(within(nav).getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about",
    );
    fireEvent.click(within(nav).getByRole("link", { name: "About" }));
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument();
  });
  it("prepares a WhatsApp brief without sending a message or pretending to store the enquiry", () => {
    render(<ContactBrief />);
    fireEvent.change(screen.getByLabelText("Your name"), {
      target: { value: "Test visitor" },
    });
    fireEvent.change(screen.getByLabelText("Business or project"), {
      target: { value: "Test business" },
    });
    fireEvent.change(screen.getByLabelText("A little about the project"), {
      target: { value: "Build an online catalogue" },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /Prepare my WhatsApp message/ }),
    );
    const url = new URL(
      screen.getByRole("link", { name: /Open WhatsApp/ }).getAttribute("href")!,
    );
    expect(url.hostname).toBe("wa.me");
    expect(url.searchParams.get("text")).toContain("Build an online catalogue");
    expect(screen.getByRole("status")).toHaveTextContent("review and send");
  });
  it("copies the actual business email and reports success", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    render(<Footer />);
    fireEvent.click(screen.getByRole("button", { name: "Copy email address" }));
    expect(await screen.findByText("Email copied")).toBeVisible();
    expect(writeText).toHaveBeenCalledWith("digitalwebsync@gmail.com");
  });
});
