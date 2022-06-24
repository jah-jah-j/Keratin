import React, {useState} from 'react';
import style from './Procedure.module.css';
import {Button, Radio} from 'antd';
import {useNavigate} from 'react-router-dom';
import {setProcedure} from '../../redux/Finally/Finally';
import {useAppDispatch} from '../../hooks/redux';

const Procedure = () => {
  const dispatch = useAppDispatch();
  const Navigation = useNavigate()
  const procedure = ['Кератин', 'Ботокс', 'Не знаю'];
  const [choice, setChoice] = useState('')

  const sendData = (procedure: string) => {
    Navigation('/cost')
    dispatch(setProcedure(procedure))
  }

  return (
    <div className={style.thickness}>
      <h2>Какую процедуру Вы хотите сделать?</h2>
      <div className={style.thicknessWrapper}>
        <Radio.Group defaultValue={2} buttonStyle="solid">
          {procedure.map((procedure, index) => {
              return <Radio.Button value={index}
                                   key={procedure}
                                   className={style.thicknessItem}
                                   onClick={() => setChoice(procedure)}
              >{procedure}</Radio.Button>
            }
          )}
        </Radio.Group>
        <Button style={{display: 'block'}} onClick={() => sendData(choice)}>Выбрать</Button>
      </div>
    </div>
  );
};
export default Procedure;
