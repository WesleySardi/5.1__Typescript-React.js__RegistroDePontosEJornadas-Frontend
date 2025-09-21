import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { TimeEntryCreateDTO } from "../../../types";
import "./styles.css";
import FormField from "../../../components/formField/FormField";
import TextAreaField from "../../../components/textAreaField/TextAreaField";
import {
  createTimeEntry,
  getTimeEntry,
  updateTimeEntry,
} from "./helpers/services";
import TimeEntryFormActions from "./components/TimeEntryFormActions.tsx/TimeEntryFormActions";

const schema = z.object({
  employeeId: z.string().min(1, "Obrigatório"),
  employeeName: z.string().min(1, "Obrigatório"),
  timestamp: z.string().min(1, "Obrigatório"),
  type: z.enum(["Entrada", "Saída", "Intervalo"]),
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

  useEffect(() => {
    if (!existing) return;

    const dt: Date = new Date(existing.timestamp);
    const localDatetime: string = dt.toISOString().slice(0, 16);

    const fields = {
      employeeId: existing.employeeId,
      employeeName: existing.employeeName,
      timestamp: localDatetime,
      type: existing.type,
      location: existing.location ?? "",
      notes: existing.notes ?? "",
    };

    Object.entries(fields).forEach(([key, value]) =>
      setValue(key as keyof FormData, value)
    );
  }, [existing, setValue]);

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

  function onSubmit(data: FormData) {
    const payload: TimeEntryCreateDTO = { ...data };

    if (id) {
      updateMut.mutate({ id, payload });
    } else {
      createMut.mutate(payload);
    }
  }

  return (
    <div className="mainDiv">
      <h2>{id ? "Editar" : "Novo"} registro</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Código"
          error={errors.employeeId}
          className={"mainFormDivs"}
        >
          <input
            placeholder="Digite o código do registro"
            className="normalInputs"
            {...register("employeeId")}
          />
        </FormField>

        <FormField
          label="Nome"
          error={errors.employeeName}
          className="mainFormDivs"
        >
          <input
            placeholder="Digite o nome do registro"
            className="normalInputs"
            {...register("employeeName")}
          />
        </FormField>

        <FormField label="Local (opcional)" className="mainFormDivs">
          <input
            placeholder="Digite o local do registro"
            className="normalInputs"
            {...register("location")}
          />
        </FormField>

        <TextAreaField
          label="Observações (opcional)"
          placeholder="Digite suas observações"
          register={register}
          name="notes"
          error={errors.notes}
          classNameDiv={"mainFormDivs"}
          classNameTextArea={"defaultTextArea normalInputs"}
        />

        <FormField
          label="Data"
          error={errors.timestamp}
          className="specificDivs"
        >
          <input
            placeholder="Selecione a data"
            className="dateInput"
            type="datetime-local"
            {...register("timestamp")}
          />
        </FormField>

        <FormField label="Tipo" error={errors.type} className="mainFormDivs">
          <select className="typeSelect" {...register("type")}>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
            <option value="Intervalo">Intervalo</option>
          </select>
        </FormField>

        <TimeEntryFormActions {...{ createMut, updateMut }} />
      </form>
    </div>
  );
}
