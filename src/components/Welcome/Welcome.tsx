import 'antd/dist/antd.min.css';
import React, {ChangeEvent, FC, useState} from 'react';
import Spin from '../Spin/Spin';
import s from './Welcome.module.css';
import {isSpin, setIsSpin} from '../../redux/Welcome';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {Button} from 'antd';
import {offer, setName, userName} from '../../redux/Finally';
import {useNavigate} from 'react-router-dom';

const Welcome: FC = () => {
  const isSpinning = useAppSelector(isSpin);
  const name = useAppSelector(userName);
  const haveOffer = useAppSelector(offer);
  const dispatch = useAppDispatch();
  const Navigation = useNavigate();
  const startSpin = () => dispatch(setIsSpin(true));
  const [localName, setLocalName] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setLocalName(e.target.value)


  const onSubmitName = () => {
    localStorage.setItem('name', localName);
    dispatch(setName(localName))
  }

  const getContent = () => {
    if (name && haveOffer) {
      return (
        <div className={s.welcome}>
          <p><strong>{name}</strong> у тебя уже есть скидка {haveOffer}</p>
          <Button className="button" type="primary"
                  onClick={() => Navigation('/length')}
          >Перейти к следующему пункту</Button>
        </div>
      )
    }

    if (name && !isSpinning) {
      return (
        <div className={s.welcome}>
          <h1>Прекрасно, {name}. Теперь кликай по кнопке, чтобы получить своё предложение</h1>
          <Button className="button" type="primary" onClick={startSpin}>Получить скидку</Button>
        </div>
      )
    }

    if (name && isSpinning) return <Spin/>

    return (
      <div className={s.welcome}>
        <h1>Здравствуйте!</h1>
        <h2>Это приложение призвано помочь рассчитать стоимость процедуры.</h2>
        <div>
          <h3>Представьтесь, пожалуйста</h3>
          <input type="text" value={localName} onInput={onChange}/>
          <Button className="button" type="primary" onClick={onSubmitName}>Представиться</Button>
        </div>
      </div>
    )
  }

  return <div> {getContent()}</div>

};

export default React.memo(Welcome);
