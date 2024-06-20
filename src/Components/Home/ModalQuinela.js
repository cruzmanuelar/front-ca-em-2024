import { Modal, Input, Row, Col, Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditDataFormQuinelaReducer, SendFormQuinelaReducer, ShowModalFormQuinelaReducer } from '../../Redux/Actions/Home/Home'
import './../../Styles/Components/Home/ModalQuinela.css'
import { ToastContainer } from "react-toastify";

const ModalQuinela = () => {

	const {
        rex_show_modal_form_quinela,
		rex_data_next_matches,
		rex_data_form_quinela
    } = useSelector(({home}) => home)

	const dispatch = useDispatch()

	const closeModal = () => {
		dispatch(ShowModalFormQuinelaReducer(false))
	}

	const sendQuinela = async () => {
		const response = await dispatch(SendFormQuinelaReducer())
		if(response){
			closeModal()
		}
	}

    return (
        <Modal
			open={rex_show_modal_form_quinela}
			footer={null}
			onCancel={closeModal}
			className='Modal-Form-Quinela'
			closeIcon={false}
		>
			<div style={{ display:'flex', justifyContent:'center'}}>Formulario Quinela</div>
			{
				rex_data_form_quinela.map((mat, index) => (
					<Row key={index} gutter={[12,12]} style={{display:'flex', margin:'10px 0'}}>
						<Col span={12} style={{display:'flex', flexDirection:'row-reverse', alignItems:'center', gap:'10px'}}>
							<Input
								style={{width:'40px', textAlign:'center', border:'1px solid #592321'}}
								onChange={(e) => dispatch(EditDataFormQuinelaReducer(e.target.value, mat.partid, 'goalhome'))}
								defaultValue={
									mat.goalhome 
									? mat.goalhome
									: mat.pru
										? mat.pru.prugoleslocal
										: ""
								}
							/>
							<img 
								src={mat.parlocalsel.selimagen}
								width={30}
								height={30}
							/>
							<div style={{whiteSpace:'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{mat.parlocalsel.selnombre}</div>
						</Col>
						<Col span={12} style={{display:'flex', alignItems:'center', gap:'10px'}}>
							<Input 
								style={{width:'40px', textAlign:'center', border:'1px solid #592321'}}
								onChange={(e) => dispatch(EditDataFormQuinelaReducer(e.target.value, mat.partid, 'goalaway'))}
								defaultValue={
									mat.goalaway 
									? mat.goalaway
									: mat.pru
										? mat.pru.prugolesvisita
										: ""
								}
							/>
							<img 
								height={30}
								width={30}
								src={mat.parvisitasel.selimagen}
							/>
							<div style={{whiteSpace:'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{mat.parvisitasel.selnombre}</div>
						</Col>
					</Row>
				))
			}

			<div style={{display:'flex', justifyContent:'end', gap:'10px'}}>
				<Button danger onClick={closeModal}>Cancelar</Button>
				<Button onClick={sendQuinela} style={{backgroundColor:'#0958d9', color:'#FFFFFF'}}>Guardar</Button>
			</div>
			{/* <ToastContainer /> */}
		</Modal>
    )
}

export default ModalQuinela