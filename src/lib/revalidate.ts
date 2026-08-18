// src/lib/revalidate.ts

export async function revalidateSection(
  section: string
) {
  await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        section,
        secret: process.env.REVALIDATION_SECRET,
      }),
    }
  );
}