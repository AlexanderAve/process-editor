import { useProcessList } from "./model/use-process-list";
import { CreateProcessForm } from "./ui/create-process-form";
import { ProcessCard } from "./ui/process-card";
import { Root } from "./ui/root";

export function Page() {
  const processList = useProcessList();

  return (
    <Root
      isLoading={processList.loading}
      createProcessForm={<CreateProcessForm onSubmit={processList.create} />}
      processCard={processList.list.map((process) => (
        <ProcessCard
          id={process.id}
          key={process.id}
          name={process.name}
          onDelete={process.onDelete}
        />
      ))}
    />
  );
}
