type FormEvent = React.FormEvent<HTMLFormElement>
type MouseEvent = React.MouseEvent<HTMLButtonElement>
type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export type { FormEvent, MouseEvent, ChangeEvent };

export interface PopUpChildProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    content: string;
  }

  export interface InProgressChildProps {
    inProgress: boolean;
  }