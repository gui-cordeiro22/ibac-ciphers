// Dependencies
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.system.space.xl};

  > .pdg-separator {
    position: absolute;
    left: 0px;
    bottom: 150px;
    z-index: 2;
  }

  ${({ theme }) => css`
    @media (${theme.mediaQueries.tablet}) {
      gap: ${theme.system.space.md};

      > .pdg-separator {
        position: inherit;
      }
    }
  `}
`;

export const ActionElementsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.system.space.xs};

  ${({ theme }) => css`
    @media (${theme.mediaQueries.tablet}) {
      flex-direction: row;
      gap: ${theme.system.space.md};
    }
  `}
`;
