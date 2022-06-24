import React, {FC, useEffect} from 'react';
import s from './Spin.module.css'
import Marquee from "react-fast-marquee"
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {offers, setStopOffer, stopOffer} from '../../../redux/Welcome/Welcome';
import {offer, setFinallyOffer} from '../../../redux/Finally/Finally';
import Offer from './Offer/Offer';
import {Button, Modal} from 'antd';
import {useNavigate} from 'react-router-dom';


const Spin: FC = () => {
  const isStop = useAppSelector(stopOffer);
  const random = useAppSelector(offer);
  const offersArr = useAppSelector(offers);
  const dispatch = useAppDispatch();
  const Navigation = useNavigate()

  const randomizer = (arr: Array<any>) => {
    const random = Math.floor(Math.random() * arr.length)
    return arr[random]
  }

  const stopSpin = () => {
    const randOffer = randomizer(offersArr)
    dispatch(setStopOffer(true))
    dispatch(setFinallyOffer(randOffer))
  }

  useEffect(() => {
    if (random) {
      Modal.success({
        content: `Ваша скидка: ${random}`,
        okText: 'Хорошо',
        afterClose: () => Navigation('/length')
      })
    }
  }, [random, Navigation])

  return (
    <div>
      {!isStop && <Marquee style={{width: '10%'}} speed={300} gradient={false}>
        <div className={s.offers}>
          {offersArr.map((offer, index) => <Offer key={index} text={offer}/>)}
        </div>
      </Marquee>}
      <Button className={s.start} onClick={stopSpin}>Остановить</Button>
    </div>
  );
};

export default Spin;
