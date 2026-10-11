import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
afterEach(() => cleanup());
Element.prototype.scrollIntoView = vi.fn();
Element.prototype.scrollBy = vi.fn();
vi.mock("next/link", () => ({
  default: ({ children, onClick, ...props }: any) => <a {...props} onClick={event => {event.preventDefault(); onClick?.(event);}}>{children}</a>,
}));
vi.mock("next/image", () => ({
  default: ({ priority, sizes, ...props }: any) => <img {...props} />,
}));
vi.mock("next/navigation", () => ({ usePathname: () => "/" }));
