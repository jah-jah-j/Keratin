import React from 'react';
import style from './Length.module.css';
import hairs from '../../assets/images/hair-length.jpg';
import {Button, Modal} from 'antd';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {setHairLength} from '../../redux/Finally/Finally';
import {hairLength} from '../../redux/HairOptions/HairOptions';

const Length = () => {
  const lengths = useAppSelector(hairLength)
  const dispatch = useAppDispatch();
  const Navigation = useNavigate();

  const showModal = (length: number, isLonger: boolean = false) => {
    Modal.confirm({
      content: !isLonger
        ? `Длина ваших волос: до ${length} см`
        : `Длина ваших волос больше ${getLastLength()} см`,
      okText: 'Хорошо',
      cancelText: 'Изменить',
      closable: true,
      onOk: () => {
        Navigation('/thickness')
        dispatch(setHairLength(length))
      }
    })
  }

  const calcLastTopPos = () => lengths[lengths.length - 1].topPos + 50
  const getLastLength = () => lengths[lengths.length - 1].length

  return (
    <div className={style.length}>
      <h2>Пожалуйста, выберите длину Ваших волос</h2>
      <div className={style.hairWrapper}>
        {lengths.map(({length, topPos}) => {
            return <Button onClick={() => showModal(length)}
                           key={length}
                           className={style.lengthItem}
                           style={{top: topPos + 'px'}}
            >До {length} см</Button>
          }
        )}

        <Button onClick={() => showModal(50, true)}
                key={'last'}
                className={style.lengthItem}
                style={{top: calcLastTopPos() + 'px'}}
        >Длиннее</Button>

        <img src={hairs} alt="Длинные волосы"/>
      </div>
    </div>
  );
};

export default Length;
