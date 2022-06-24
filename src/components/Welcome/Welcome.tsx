import 'antd/dist/antd.min.css';
import React, {FC} from 'react';
import Spin from './Spin/Spin';
import s from './Welcome.module.css';
import {isSpin, setIsSpin} from '../../redux/Welcome/Welcome';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {Button} from 'antd';

const Welcome: FC = () => {
  const isSpinning = useAppSelector(isSpin);
  const dispatch = useAppDispatch();
  const stopSpin = () => dispatch(setIsSpin(true));

  return (
    <div className={s.welcome}>
      <h1>Здравствуйте!</h1>
      <h2>Это приложение призвано помочь рассчитать стоимость процедуры.</h2>
      {isSpinning
        ? <Spin/>
        : <Button className="button" type="primary" onClick={stopSpin}>Получить скидку</Button>
      }
    </div>
  );
};

export default Welcome;
