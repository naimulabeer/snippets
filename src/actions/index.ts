"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // needs to be server action ...////

  // checks users inputs and validation ...///
  const title = formData.get("title");
  const code = formData.get("code");

  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title must be longer!",
    };
  }

  if (typeof code !== "string" || code.length < 6) {
    return {
      message: "Code must be longer!",
    };
  }

  // create record in db ///
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  ///redirect back to root route ///
  redirect("/");
}
