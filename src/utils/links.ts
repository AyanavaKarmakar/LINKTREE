import { z } from "zod";

const LinkValidator = z.object({
  id: z.number().positive(),
  linkName: z.string().min(3),
  linkURL: z.string().startsWith("https://"),
});

type LinkType = z.infer<typeof LinkValidator>;

export const Links: LinkType[] = [
  {
    id: 1,
    linkName: "Github",
    linkURL: "https://github.com/AyanavaKarmakar",
  },
  {
    id: 2,
    linkName: "LinkedIn",
    linkURL: "https://www.linkedin.com/in/ayanava-karmakar/",
  },
  {
    id: 3,
    linkName: "Portfolio",
    linkURL: "https://ayanava-karmakar.vercel.app/",
  },
];