import styled, { css } from "styled-components";

/**
 * Membuat variable button (coponent)
 * Buat element button dan beri styling
 * Stylin mengunakan tagger template
 */
const Button = styled.button`
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;

  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["secondary"]};

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `};

  ${function (props) {
    if (props.size === "sm") {
      return props.theme.size.sm;
    } else if (props.size === "md") {
      return props.theme.size.md;
    } else if (props.size === "lg") {
      return props.theme.size.lg;
    }
  }}
`;

export default Button;
