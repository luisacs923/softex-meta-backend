import React, { useEffect, useState } from 'react';
import {
  Box, H2, H5, Text,
} from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import { ApiClient, useTranslation } from 'adminjs';

// import RocketSVG from './utils/rocket-svg.js';
// import DiscordLogo from './utils/discord-logo-svg.js';

const pageHeaderHeight = 300;

const pageHeaderPaddingY = 74;

const pageHeaderPaddingX = 250;

export function DashboardHeader() {
  return (
    <Box data-css="default-dashboard">
      <Box
        position="relative"
        overflow="hidden"
        bg="white"
        height={pageHeaderHeight}
        py={pageHeaderPaddingY}
        px={['default', 'lg', pageHeaderPaddingX]}
      >
        <Box position="absolute" top={30} left={0} opacity={0.9} animate display={['none', 'none', 'none', 'block']}>
          {/* <RocketSVG /> */}
        </Box>
        <Text textAlign="center" color="grey100">
          <H2 fontWeight="bold">ADMIN Meta</H2>
          <Text opacity={0.8}>Dashboard de controle</Text>
        </Text>
      </Box>
    </Box>
  );
}

const Card = styled(Box)`
  display: ${({ flex }): string => (flex ? 'flex' : 'block')};
  color: ${({ theme }) => theme.colors.grey100};
  height: 100%;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.space.md};
  transition: all 0.1s ease-in;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary60};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }

  & .dsc-icon svg, .gh-icon svg {
    width: 64px;
    height: 64px;
  }
`;

Card.defaultProps = {
  variant: 'container',
  boxShadow: 'card',
};

export function Dashboard() {
  const [data, setData] = useState(null);
  const api = new ApiClient();

  useEffect(() => {
    api.getDashboard()
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <Box>
      <DashboardHeader />
      <Box
        mt={['xl', 'xl', '0px']}
        mb="xl"
        mx={[0, 0, 0, 'auto']}
        px={['default', 'lg', 'xxl', '0']}
        position="relative"
        flex
        flexDirection="row"
        flexWrap="wrap"
        width={[1, 1, 1, 1024]}
      >
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
          <Card>
            <Text textAlign="center">
              <H5 mt="md">Colaboradores Cadastrados</H5>
              <Text>
                {`${data?.qtdColaboradores}`}
              </Text>
            </Text>
          </Card>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
          <Card>
            <Text textAlign="center">
              <H5 mt="md">Servicos Cadastrados</H5>
              <Text>
                {`${data?.qtdServico}`}
              </Text>
            </Text>
          </Card>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
          <Card>
            <Text textAlign="center">
              <H5 mt="md">Prestadores Cadastrados</H5>
              <Text>
                {`${data?.qtdPrestador}`}
              </Text>
            </Text>
          </Card>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
          <Card>
            <Text textAlign="center">
              <H5 mt="md">Clientes Cadastrados</H5>
              <Text>
                {`${data?.qtdClientes}`}
              </Text>
            </Text>
          </Card>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
          <Card>
            <Text textAlign="center">
              <H5 mt="md">Materiais Cadastrados</H5>
              <Text>
                {`${data?.qtdMaterial}`}
              </Text>
            </Text>
          </Card>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
          <Card>
            <Text textAlign="center">
              <H5 mt="md">EPIs Cadastrados</H5>
              <Text>
                {`${data?.qtdEpi}`}
              </Text>
            </Text>
          </Card>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
          <Card>
            <Text textAlign="center">
              <H5 mt="md">Materiais abaixo da quantidade minima</H5>
              <Text>
                {`${data?.qtdMaterialBaixo}`}
              </Text>
            </Text>
          </Card>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
          <Card>
            <Text textAlign="center">
              <H5 mt="md">EPIs abaixo da quantidade minima</H5>
              <Text>
                {`${data?.qtdEpiBaixo}`}
              </Text>
            </Text>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
