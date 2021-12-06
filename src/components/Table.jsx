import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../css/Table.css';

export default function Table() {
  const { planets, tableHead } = useContext(AppContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            { tableHead.map((value) => <th key={ value }>{value}</th>) }
          </tr>
        </thead>
        <tbody>
          { planets.map((planet) => (
            <tr key={ planet.url }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}
