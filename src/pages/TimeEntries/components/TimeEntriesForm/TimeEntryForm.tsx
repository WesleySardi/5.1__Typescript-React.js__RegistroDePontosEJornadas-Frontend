import {
  createTimeEntry,
  getTimeEntry,
  updateTimeEntry,
} from "./helpers/services";

import "./styles.css";
import { z } from "zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import type { TimeEntryCreateDTO } from "../../../../types";
import FormActions from "./components/FormActions/FormActions";
import NormalInputs from "./components/NormalInputs/NormalInputs";
import SpecificInputs from "./components/SpecificInputs/SpecificInputs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const schema = z.object({
  employeeId: z.string().min(1, "*"),
  employeeName: z.string().min(1, "*"),
  timestamp: z.string().min(1, "*"),
  type: z.enum(["1", "2", "3"]),
  location: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function TimeEntryForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { data: existing } = useQuery({
    queryKey: ["timeEntry", id],
    queryFn: () => (id ? getTimeEntry(id) : Promise.resolve(null)),
    enabled: !!id,
  });

  const createMut = useMutation({
    mutationFn: (payload: TimeEntryCreateDTO) =>
      createTimeEntry({
        ...payload,
        timestamp: new Date(payload.timestamp).toISOString(),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["timeEntries"] });
      navigate("/");
    },
  });

  const updateMut = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: TimeEntryCreateDTO;
    }) =>
      updateTimeEntry(id, {
        ...payload,
        timestamp: new Date(payload.timestamp).toISOString(),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["timeEntries"] });
      navigate("/");
    },
  });

  const onSubmit = (data: FormData) => {
    const payload: TimeEntryCreateDTO = { ...data, type: Number(data.type) };

    if (id) {
      updateMut.mutate({ id, payload });
    } else {
      createMut.mutate(payload);
    }
  };

  useEffect(() => {
    if (!existing) return;

    const dt: Date = new Date(existing.timestamp);
    const localDatetime: string = dt.toISOString().slice(0, 16);

    const fields = {
      employeeId: existing.employeeId,
      employeeName: existing.employeeName,
      timestamp: localDatetime,
      type: existing.type.toString(),
      location: existing.location ?? "",
      notes: existing.notes ?? "",
    };

    Object.entries(fields).forEach(([key, value]) =>
      setValue(key as keyof FormData, value)
    );
  }, [existing, setValue]);

  return (
    <div className="mainDiv">
      <h2>{id ? "Editar" : "Novo"} registro</h2>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="formDiv">
          <div className="firstDiv">
            <NormalInputs {...{ errors, register }} />
          </div>

          <div className="secondDiv">
            <SpecificInputs {...{ errors, register }} />
          </div>
        </div>

        <FormActions {...{ createMut, updateMut }} />
      </form>
    </div>
  );
}
