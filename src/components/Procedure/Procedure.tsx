import React, {useEffect, useState} from 'react';
import style from './Procedure.module.css';
import {Button, Radio} from 'antd';
import {useNavigate} from 'react-router-dom';
import {setProcedure} from '../../redux/Finally';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {hairProcedure} from '../../redux/HairOptions';

const Procedure = () => {
  const dispatch = useAppDispatch();
  const Navigation = useNavigate();
  const procedure = useAppSelector(hairProcedure);
  const [choice, setChoice] = useState('');

  useEffect(() => {
    const hairProcedure = localStorage.getItem('procedure');
    hairProcedure && dispatch(setProcedure(hairProcedure));
  }, [])


  const sendData = (procedure: string) => {
    Navigation('/cost');
    dispatch(setProcedure(procedure));
    localStorage.setItem('procedure', procedure);
  }

  return (
    <div className={style.thickness}>
      <h2>Какую процедуру Вы хотите сделать?</h2>
      <div className={style.thicknessWrapper}>
        <Radio.Group defaultValue={2} buttonStyle="solid">
          {Object.values(procedure).map((procedure, index) => {
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
