import styled from "styled-components";

export const PrimaryButton = ({
  isSubmitting = false,
  isValid = true,
  size = "m",
  children,
  ...rest
}) => {
  return (
    <>
      {size === "s" && (
        <SmallButton
          $isSubmitting={isSubmitting}
          $isValid={isValid}
          $size={size}
          {...rest}
        >
          {children}
        </SmallButton>
      )}
      {size === "m" && (
        <MediumButton
          $isSubmitting={isSubmitting}
          $isValid={isValid}
          $size={size}
          {...rest}
        >
          {children}
        </MediumButton>
      )}
      {size === "l" && (
        <LargeButton
          $isSubmitting={isSubmitting}
          $isValid={isValid}
          $size={size}
          {...rest}
        >
          {children}
        </LargeButton>
      )}
    </>
  );
};

const Button = styled.button`
  border-radius: 7px;
  border: none;
  background-color: ${({ theme, $isSubmitting, $isValid }) =>
    $isSubmitting || !$isValid ? theme.colors.gray_100 : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;

  &:hover {
    background-color: ${({ theme, $isValid }) =>
      $isValid && theme.colors.primary_100};
  }
`;

const SmallButton = styled(Button)`
  height: 43px;
  padding: 3px 10px;
  font-size: 15px;
`;

const MediumButton = styled(Button)`
  height: 50px;
  padding: 5px 10px;
  font-size: 18px;
`;

const LargeButton = styled(Button)`
  height: 60px;
  padding: 3px 10px;
  font-size: 23px;
`;
