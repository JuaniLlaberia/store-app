import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineBuildingStorefront,
  HiOutlineMoon,
} from 'react-icons/hi2';
import ButtonIcon from './ButtonIcon';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const NavButtonsMenu = () => {
  const navigate = useNavigate();

  return (
    <StyledMenu>
      <ButtonIcon size='regular' onClick={() => navigate('/dashboard')}>
        <HiOutlineBuildingStorefront />
      </ButtonIcon>
      <ButtonIcon size='regular' onClick={() => console.log('Changing theme')}>
        <HiOutlineMoon />
      </ButtonIcon>
      <ButtonIcon size='regular' onClick={() => console.log('Loggin out')}>
        <HiOutlineArrowRightOnRectangle />
      </ButtonIcon>
    </StyledMenu>
  );
};

export default NavButtonsMenu;
