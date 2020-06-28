export interface ToggleComponentProps {
  children: React.ReactNode;
}

export type CreateToggleComponentReturn = (
  props: ToggleComponentProps
) => JSX.Element | null;
