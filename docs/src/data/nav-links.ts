import { getCollection } from "astro:content";

export type Category = {
  title: string;
  description: string;
  slug: string;
  sections: Section[];
};

export type Section = {
  title: string;
  description: string;
  slug: string;
  pages: Page[];
};

export type Page = {
  title: string;
} & (
  | {
      isExternal?: false;
      slug: string;
    }
  | {
      isExternal: true;
      href: string;
    }
);

const components = await getCollection("components");
console.log(components);

export const navCategories: Category[] = [
  {
    title: "Info",
    description: "Learn about Concord and how to use it in your next project.",
    slug: "info",
    sections: [
      {
        title: "Getting Started",
        description: "Learn how to set up your project to use Concord.",
        slug: "getting-started",
        pages: [
          { title: "Introduction", slug: "introduction" },
          { title: "Installation & Setup", slug: "installation-and-setup" },
          { title: "Customization", slug: "customization" },
          { title: "Next Steps", slug: "next-steps" },
        ],
      },
      {
        title: "Further Reading",
        description: "Additional information about the project.",
        slug: "further-reading",
        pages: [
          { title: "Design Choices", slug: "design-choices" },
          { title: "Inspiration", slug: "inspiration" },
          {
            title: "Changelog",
            isExternal: true,
            href: "https://github.com/jrgermain/concord/releases",
          },
        ],
      },
    ],
  },
  {
    title: "Components",
    description:
      "Browse the component library and see examples of how to use and configure each component.",
    slug: "components",
    sections: [
      {
        title: "Components",
        description: "",
        slug: "$default",
        pages: components.map((c) => ({ title: c.data.name, slug: c.id })),
      },
    ],
  },
  {
    title: "Utilities",
    description:
      "Explore the design tokens and utility classes included in Concord.",
    slug: "utilities",
    sections: [
      {
        title: "Design Tokens",
        description:
          "Learn about the design tokens included in Concord and how to use them.",
        slug: "design-tokens",
        pages: [
          { title: "Tokens Overview", slug: "tokens-overview" },
          { title: "Animations", slug: "animations" },
          { title: "Borders", slug: "borders" },
          { title: "Colors", slug: "colors" },
          { title: "Shadows", slug: "shadows" },
          { title: "Spacing", slug: "spacing" },
          { title: "Typography", slug: "typography" },
        ],
      },
      {
        title: "CSS Classes",
        description:
          "Learn about the miscellaneous CSS classes included in Concord and how to use them.",
        slug: "css",
        pages: [
          { title: "Accessibility", slug: "accessibility" },
          { title: "Formatting Text", slug: "formatting-text" },
          {
            title: "Markdown/Generated HTML",
            slug: "markdown-generated-html",
          },
          { title: "Overriding Color Mode", slug: "overriding-color-mode" },
          {
            title: "Showing/Hiding Content",
            slug: "showing-hiding-content",
          },
          { title: "Simulating States", slug: "simulating-states" },
        ],
      },
      {
        title: "JavaScript/TypeScript",
        description:
          "Learn about the JavaScript and TypeScript utilities exported by Concord's root package and how to use them.",
        slug: "js-ts",
        pages: [
          { title: "Tokens", slug: "tokens" },
          { title: "Popups", slug: "popups" },
        ],
      },
    ],
  },
];
