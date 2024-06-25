import { Col, Row } from 'antd'
import React from 'react'

const CardMatchPlayOff = ({teamHome, iconHome, teamAway, iconAway}) => {

	return (
		<Col span={24} style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px', marginTop:'10px'}}>
			<Row style={{width:'100%'}}>
				<Col span={10}>
					<div style={{display:'flex', justifyContent:'end', alignItems:'center'}}>
						<div style={{whiteSpace:'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{teamHome}</div>
						<img
							width={30}
							height={30}
							src={iconHome}
						/>
					</div>
				</Col>
				<Col span={4} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
					<div> vs </div>
				</Col>
				<Col span={10}>
					<div style={{display:'flex', alignItems:'center'}}>
						<img
							width={30}
							height={30}
							src={iconAway}
						/>
						<div style={{whiteSpace:'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{teamAway}</div>
					</div>
				</Col>

			</Row>
		</Col>
	)
}

export default CardMatchPlayOff