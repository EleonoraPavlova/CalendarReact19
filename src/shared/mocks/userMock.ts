import avatar from "@/assets/webp/avatar.webp";
import { User } from "@/shared/types";

export const userMock: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: avatar,
  messages: ["yes"],
} as const;
