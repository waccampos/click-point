import styled from "styled-components"

export const Ponto = styled.div`
    z-index: 1001;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    top: ${(prop) => prop.top };
    left: ${(prop) => prop.left };

`