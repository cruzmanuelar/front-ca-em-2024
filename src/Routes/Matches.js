import { Col, Pagination, Row, Skeleton, Segmented, FloatButton } from 'antd'
import React, { useEffect, useState } from 'react'
import './../Styles/Routes/Matches.css'
import { useDispatch, useSelector } from 'react-redux';
import { GetDataMatchesReducer, ShowDateMatchReducer } from '../Redux/Actions/Matches/Matches';
import moment from 'moment';
import { 
	CalendarOutlined,
	CloseOutlined
} from '@ant-design/icons';
import ModalMatches from '../Components/Matches/ModalMatches';


const Matches = () => {

	const {
        rex_data_matches,
		rex_date_matches_em
    } = useSelector(({matches}) => matches)

	const [ showModal, setShowModal] = useState(false)
	const [ showGroup, setShowGroup ] = useState("Grupo A")

    const {
        rex_data_user,
    } = useSelector(({top}) => top)

	const dispatch = useDispatch()
	const onChange = (value) => {
		dispatch(ShowDateMatchReducer(value))
		setShowModal(false)
	};

	const getMatches = async () => {
		await dispatch(GetDataMatchesReducer())
	}

	useEffect(() => {
		getMatches()
	}, [])

	return (
		<div className='Matches-Container'>
			{
				rex_data_user.tornombre == 'CA'
				? 	<Row style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'5px 0'}}>
						<Col>
							<Segmented
								options={['Grupo A', 'Grupo B', 'Grupo C']}
								onChange={(value)=>{setShowGroup(value)}}
							/>
						</Col>
					</Row>
				: null
			}
			

			<Row type="flex" justify="space-around" align="middle">
				<Col sm={24} md={8}>
						<div className={`Title-Fixture Fixture-${rex_data_user.tornombre}`}>
							<span>{rex_date_matches_em}</span>
						</div>
						{
							rex_data_matches.length > 0
							? rex_data_matches.filter(mfe => 
									mfe.fecnombre == rex_date_matches_em
								).map((mat) => {
								return (
									<div>
										{mat.data
											.filter(dam => rex_data_user.tornombre == "CA" ? dam.pargrupos?.grunombre == showGroup : true )
											.map(par => {
											return (
												<Row className='Container-Match-Info' >
													<Col span={24} style={{display:'flex', justifyContent:'center',alignItems:'center', fontSize:'11px'}}>{moment(par.parfecha).format('DD/MM/YYYY')}</Col>
													<Col span={6} style={{display:'flex', justifyContent:'end', alignItems:'center'}}>
														<div style={{display:'flex', alignItems:'center'}}>
															{par.parlocalsel.selnombre}
															<img
																width={30}
																height={30}															
																src={par.parlocalsel.selimagen}
															/>
														</div>
													</Col>
													<Col span={6} style={{display:'flex', justifyContent:'center', columnGap:'8px'}}>
														<div className={`Container-Result-Match ${rex_data_user.tornombre}`}>
															{par.pargoleslocal} - {par.pargolesvisita}
														</div>
													</Col>
													<Col span={6} style={{display:'flex', justifyContent:'initial', alignItems:'center'}}>
														<div style={{display:'flex', alignItems:'center'}}>
															<img
																width={30}
																height={30}
																src={par.parvisitasel.selimagen}
															/>
															{par.parvisitasel.selnombre}
															
														</div>
													</Col>
												</Row>
											)
										})}
									</div>
								)
							})
							: <Row style={{display:'flex', alignItems:'center', margin:'10px 0', justifyContent:'center'}}>
								<Col span={4}>
									<Skeleton />
									<Skeleton />
								</Col>
							</Row>
						}
				</Col>
			</Row>
			<FloatButton.Group
				trigger="click"
				className={`Button-Match Button-${rex_data_user.tornombre}`}
				shape="square"
				style={{
					right: 24,
				}}
				icon={<CalendarOutlined style={{color : '#FFFFFF'}}/>}
				onClick={()=> setShowModal(true)}
				closeIcon={ <CloseOutlined style={{color : '#FFFFFF'}}/>}
				>
			</FloatButton.Group>
			<ModalMatches
				onChange={onChange}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</div>
	)
}

export default Matches