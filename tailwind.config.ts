import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config = {
  type: "default",
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: "var(--tw-prose-body)",
            h1: {
              color: "var(--tw-prose-headings)",
              fontWeight: "700",
            },
            h2: {
              color: "var(--tw-prose-headings)",
              fontWeight: "700",
            },
            h3: {
              color: "var(--tw-prose-headings)",
              fontWeight: "600",
            },
            h4: {
              color: "var(--tw-prose-headings)",
              fontWeight: "600",
            },
            "h1, h2, h3, h4": {
              "scroll-margin-top": "100px",
            },
            a: {
              color: "hsl(var(--primary))",
              textDecoration: "none",
              "&:hover": {
                color: "hsl(var(--primary))",
                textDecoration: "underline",
              },
            },
            code: {
              color: "hsl(var(--primary))",
              "&::before": {
                content: '""',
              },
              "&::after": {
                content: '""',
              },
              fontWeight: "400",
              backgroundColor: "hsl(var(--muted))",
              borderRadius: "0.25rem",
              paddingInline: "0.375rem",
              paddingBlock: "0.125rem",
            },
            pre: {
              backgroundColor: "hsl(var(--muted))",
              borderRadius: "0.5rem",
              padding: "1rem",
              code: {
                backgroundColor: "transparent",
                padding: "0",
                color: "inherit",
              },
            },
            strong: {
              color: "var(--tw-prose-bold)",
              fontWeight: "600",
            },
            blockquote: {
              borderLeftColor: "hsl(var(--muted))",
              color: "var(--tw-prose-quotes)",
            },
            hr: {
              borderColor: "hsl(var(--border))",
            },
            table: {
              thead: {
                borderBottomColor: "hsl(var(--border))",
                th: {
                  color: "var(--tw-prose-headings)",
                },
              },
              tbody: {
                tr: {
                  borderBottomColor: "hsl(var(--border))",
                },
              },
            },
          },
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
          "6": "hsl(var(--chart-6))",
          "7": "hsl(var(--chart-7))",
          "8": "hsl(var(--chart-8))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [typography],
} satisfies Config;

export default config;
