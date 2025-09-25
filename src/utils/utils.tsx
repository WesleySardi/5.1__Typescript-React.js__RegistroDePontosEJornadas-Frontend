import { toast } from "react-toastify";

export async function handleApiRequest<T>(
  fn: () => Promise<T>,
  successMsg?: string
): Promise<T | null> {
  try {
    const result = await fn();

    if (successMsg) {
      toast.success(successMsg, {
        position: "top-right",
        autoClose: 3000,
      });
    }

    return result;
  } catch (error: any) {
    toast.error(
      error?.response?.data?.message || "Ocorreu um erro inesperado.",
      {
        position: "top-right",
        autoClose: 4000,
      }
    );
    return null;
  }
}
