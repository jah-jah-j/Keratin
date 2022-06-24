import React, {useState} from 'react';
import style from './Thickness.module.css';
import {Button, Checkbox, Radio} from 'antd';
import {useNavigate} from 'react-router-dom';
import {setHairOptions, setHairThickness} from '../../redux/Finally/Finally';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {optionsOfHairs, thicknessOfHairs} from '../../redux/HairOptions/HairOptions';
import {CheckboxValueType} from 'antd/es/checkbox/Group';

const Thickness = () => {
  const dispatch = useAppDispatch();
  const Navigation = useNavigate()
  const thickness = useAppSelector(thicknessOfHairs);
  const options = useAppSelector(optionsOfHairs);
  const [currThickness, setCurrThickness] = useState('')
  const [currOptions, setCurrOptions] = useState<CheckboxValueType[]>([])

  const sendData = (thickness: string, options: CheckboxValueType[]) => {
    Navigation('/procedure');
    const strOptions = options.map(option => option.toString())
    dispatch(setHairThickness(thickness));
    dispatch(setHairOptions(strOptions));
  }

  const onChecked = (list: CheckboxValueType[]) => setCurrOptions(list);

  const createRadioBtns = () => {
    return Object.values(thickness).map((thick, index) => {
      return <Radio.Button value={index}
                           key={index}
                           className={style.thicknessItem}
                           onClick={() => setCurrThickness(thick)}
      >{thick}</Radio.Button>
    })
  }


  return (
    <div className={style.thickness}>
      <h2>Ваши волосы:</h2>
      <div className={style.thicknessWrapper}>
        <Radio.Group defaultValue={2} buttonStyle="solid">
          {createRadioBtns()}
        </Radio.Group>
      </div>
      <h2>Дополнительно:</h2>
      <div className={style.optionsWrapper}>
        <Checkbox.Group options={Object.values(options)} onChange={onChecked}/>
      </div>
      <Button style={{display: 'block'}} onClick={() => sendData(currThickness, currOptions)}>Выбрать</Button>
    </div>
  );
};
export default Thickness;
