import React, {useEffect, useState} from 'react';
import style from './Thickness.module.css';
import {Button, Checkbox, Radio} from 'antd';
import {useNavigate} from 'react-router-dom';
import {hairThickness, setHairOptions, setHairThickness} from '../../redux/Finally';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {optionsOfHairs, thicknessOfHairs} from '../../redux/HairOptions';
import {CheckboxValueType} from 'antd/es/checkbox/Group';

const Thickness = () => {
	const dispatch = useAppDispatch();
	const Navigation = useNavigate();
	const thicknessTypes = useAppSelector(thicknessOfHairs);
	const thickness = useAppSelector(hairThickness);
	const options = useAppSelector(optionsOfHairs);
	const [currThickness, setCurrThickness] = useState('');
	const [currOptions, setCurrOptions] = useState<CheckboxValueType[]>([]);

	useEffect(() => {
		const hairThickness = localStorage.getItem('thickness');
		const hairOptions = localStorage.getItem('options')?.split(',');
		hairOptions && dispatch(setHairOptions(hairOptions));
		hairThickness && dispatch(setHairThickness(hairThickness));
	}, [])

	const sendData = (thickness: string, options?: CheckboxValueType[]) => {
		if (options) {
			const strOptions = options.map(option => option.toString())
			dispatch(setHairOptions(strOptions));
			localStorage.setItem('options', options?.join(','))
		}
		dispatch(setHairThickness(thickness));
		localStorage.setItem('thickness', thickness);
	}

	const onChecked = (list: CheckboxValueType[]) => setCurrOptions(list);

	const createRadioBtns = () => {
		return Object.values(thicknessTypes).map((thick, index) => {
			return <Radio.Button value={index}
			                     key={index}
			                     className={style.thicknessItem}
			                     onClick={() => setCurrThickness(thick)}
			>{thick}</Radio.Button>
		})
	}

	if (thickness) {
		return (
			<div className={style.thickness}>
				<h2>Вы уже выбрали густоту волос</h2>
				<Button style={{display: 'block'}} onClick={() => {
					sendData('', []);
					Navigation('/thickness');
				}}>Изменить</Button>
			</div>
		)
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
			<Button style={{display: 'block'}}
			        onClick={() => {
				        sendData(currThickness, currOptions)
				        Navigation('/procedure');
			        }}
			>Выбрать</Button>
		</div>
	);
};
export default React.memo(Thickness);
