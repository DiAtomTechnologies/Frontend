export const Validate = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/validate`,
      {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return res.ok;
  } catch (err) {
    console.error("Authentication error : ", err);
    return false;
  }
};
