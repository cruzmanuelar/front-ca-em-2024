import { Col, Modal, Row, Typography } from 'antd'
import React from 'react'
import CardMatchPlayOff from './CardMatchPlayOff'

const ModalPlayOff = ({
	openModalPlayOff, 
	setOpenModalPlayOff,
	dataSource,
	groupB,
	groupC,
	groupD
}) => {

	const { Title } = Typography

	const closeModal = () => {
		setOpenModalPlayOff(false)
	}

	return (
		<Modal
			open={openModalPlayOff}
			footer={null}
			onCancel={closeModal}
			// className='Modal-Form-Quinela'
			closeIcon={false}
		>
			<Row>
				<Col span={24} style={{display:'flex', justifyContent:'center', margin:'0 0 10px 0'}}>
					<div style={{ fontSize:'14px'}}>Cruces Cuartos de final</div>
				</Col>
				<CardMatchPlayOff
					teamHome={dataSource[0]['name']}
					iconHome={dataSource[0]['image']}
					teamAway={groupB[1]['name']}
					iconAway={groupB[1]['image']}
				/>

				<CardMatchPlayOff
					teamHome={groupB[0]['name']}
					iconHome={groupB[0]['image']}
					teamAway={dataSource[1]['name']}
					iconAway={dataSource[1]['image']}
				/>

				<CardMatchPlayOff
					teamHome={groupC[0]['name']}
					iconHome={groupC[0]['image']}
					teamAway={groupD[1]['name']}
					iconAway={groupD[1]['image']}
				/>

				<CardMatchPlayOff
					teamHome={groupD[0]['name']}
					iconHome={groupD[0]['image']}
					teamAway={groupC[1]['name']}
					iconAway={groupC[1]['image']}
				/>
			</Row>
		</Modal>
	)
}

export default ModalPlayOff