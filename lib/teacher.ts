import { auth } from "@clerk/nextjs";

export const isTeacher = () => {
  const { sessionClaims } = auth();

  return sessionClaims?.metadata.role === "teacher";
};
