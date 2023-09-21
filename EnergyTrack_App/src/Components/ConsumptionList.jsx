import React from 'react';
import { Button } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { BsDatabaseAdd } from 'react-icons/bs';
import { MdAutorenew } from 'react-icons/md';
import Table from 'react-bootstrap/Table';

const ConsumptionList = () => {
  return (
    <Table striped bordered hover size="lg">
      <thead>
        <tr>
          <th>#</th>
          <th>Fecha</th>
          <th>Número de piso</th>
          <th>Consumo energético</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>08/092023</td>
          <td>Piso 4</td>
          <td>123.45 KWH</td>
          <td className="flex justify-evenly ">
            <div>
              <Button variant="success" className="w-10">
                <BsDatabaseAdd />
              </Button>
            </div>
            <div>
              <Button variant="info" className="w-10">
                <MdAutorenew />
              </Button>
            </div>
            <div>
              <Button variant="danger" className="w-10">
                <MdDelete />
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ConsumptionList;
