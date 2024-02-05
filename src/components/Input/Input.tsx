import { InputStyled } from './InputStyled';

type Props = {
  variant: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  $error: string;
};

const Input: React.FC<Props> = ({
  variant = 'primary',
  type,
  id,
  name,
  placeholder,
  $error,
}: Props) => {
  return (
    <InputStyled
      $variant={variant}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      $error={$error}
    />
  );
};

export default Input;
