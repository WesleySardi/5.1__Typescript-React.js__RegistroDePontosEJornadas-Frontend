import type { UseMutationResult } from "@tanstack/react-query";

export interface SaveOrCreateButtonProps {
  createMut: UseMutationResult<any, unknown, any, unknown>;
  updateMut: UseMutationResult<any, unknown, any, unknown>;
}
