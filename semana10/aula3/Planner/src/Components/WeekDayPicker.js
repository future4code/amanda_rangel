import React from "react";
import { SelectPicker} from "rsuite";

    const weekDays = [
      {
        label: 'Segunda',
        value: 'Segunda',
      },
      {
        label: 'Terça',
        value: 'Terça',
      },
      {
        label: 'Quarta',
        value: 'Quarta',
      },
      {
        label: 'Quinta',
        value: 'Quinta',
      },
      {
        label: 'Sexta',
        value: 'Sexta',
      },
      {
        label: 'Sábado',
        value: 'Sábado',
      },
      {
        label: 'Domingo',
        value: 'Domingo',
      },
    ];

    export const WeekDayPicker = props => {
      return (
        <SelectPicker
          onChange={props.onChange}
          placeholder="Dia da semana"
          searchable={false}
          data={weekDays}
          style={{ width: 224 }}
        />
      );
    };

