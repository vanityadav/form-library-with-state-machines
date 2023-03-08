import { ReactNode } from "react";

type Props = {
  formId: string;
  onSubmit(data: Object): any;
  children: ReactNode;
};

export default function Forms({ formId, onSubmit, children }: Props) {
  function handleSubmit(event: any, onSubmit: any) {
    event.preventDefault();
    var data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries());
    onSubmit(formObject);
  }
  return (
    <form id={formId} onSubmit={(e) => handleSubmit(e, onSubmit)}>
      {children}
    </form>
  );
}
