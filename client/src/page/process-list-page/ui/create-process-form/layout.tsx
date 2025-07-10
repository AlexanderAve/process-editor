import styles from "./style.module.css";

export function Layout({ onSubmit }: { onSubmit: (name: string) => void }) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <input
        type="text"
        className={styles.input}
        placeholder="process name"
        name="name"
      />
      <button className={styles.btn}>save</button>
    </form>
  );
}
