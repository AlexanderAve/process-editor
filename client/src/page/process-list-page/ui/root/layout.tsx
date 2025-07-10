import style from "./style.module.css";

export function Layout({
  createProcessForm,
  processCard,
  isLoading,
}: {
  isLoading: boolean;
  createProcessForm: React.ReactNode;
  processCard: React.ReactNode;
}) {
  return (
    <div className={style.root}>
      <h1 className={style.title}>Process List Page</h1>
      <a href="process/123">process page</a>
      {createProcessForm}
      {isLoading && <div className={style.loading}>Loading...</div>}
      <div className={style.list}>{processCard}</div>
    </div>
  );
}
