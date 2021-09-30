import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('5. Teste o componente <Pokedex.js />', () => {
  test('se página contém um heading h2 com o texto Encountered pokémons.', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', {
      level: 2,
      name: 'Encountered pokémons',
    });
    expect(title).toBeInTheDocument();
  });

  test(`se é exibido o próximo Pokémon da lista 
  quando o botão Próximo pokémon é clicado.`, () => {
    renderWithRouter(<App />);
    const buttonName = screen.getByRole('button', {
      name: 'Próximo pokémon',
    });
    expect(buttonName).toBeInTheDocument();
  });
});
