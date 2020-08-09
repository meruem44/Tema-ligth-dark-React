import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    background: ${props => props.theme.colors.primary};
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 0 25px;
    font-size: 25px;
`;