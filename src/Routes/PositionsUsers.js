import { Col, Row, Table, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDataPositionsUsersReducer } from '../Redux/Actions/Users/Users'

const PositionsUsers = () => {

	const dispatch = useDispatch()

    const { Title } = Typography

	const getRankingUsers = () => {
		dispatch(GetDataPositionsUsersReducer())
	}

	const {
        rex_data_user,
    } = useSelector(({top}) => top)
	
	const {
        rex_data_positions_users
    } = useSelector(({users}) => users)

    const columns = [
        {
            title: '',
            dataIndex: 'pos',
            key: 'pos',
            align: 'center',
            render : (_, record, index) => {
                return <div style={{display:'flex', justifyContent:'center'}}>
					{index+1}
                </div>
            },
            fixed : 'left',
            width:'25px'
        },
        {
            title: 'Usuario',
            dataIndex: 'user',
            key: 'user',
            align: 'center',
            render : (_, record, index) => {
                return <div style={{display:'flex', alignItems:'center'}}>
                    <div>{record.user}</div>
                </div>
            },
            fixed : 'left',
            width:'40px'
        },
        {
            title: 'PR',
            dataIndex: 'presult',
            key: 'presult',
            align: 'center',
            width:'20px',
            render : (_, record) => {
                return <div>{record._sum.puupuntosresultado}</div>
            }
        },  
        {
            title: 'PG',
            dataIndex: 'pgoals',
            key: 'pgoals',
            align: 'center',
            width:'20px',
            render : (_, record) => {
                return <div>{record._sum.puupuntosgoles}</div>
            }
        },
        {
            title: 'PM',
            dataIndex: 'pmarker',
            key: 'pmarker',
            align: 'center',
            width:'20px',
            render : (_, record) => {
                return <div>{record._sum.puupuntosmarcador}</div>
            }
        },
        {
            title: 'Ptos',
            dataIndex: 'ptos',
            key: 'ptos',
            align: 'center',
            width:'20px',
            render : (_, record) => {
                return <div>{record._sum.puupuntostotal}</div>
            }
        },
    ];

	useEffect(() => {
		getRankingUsers()
	}, [])

	return (
		<Row style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'0px 10px'}}>
            <Col span={24} style={{display:'flex', justifyContent:'center'}}>
                <Title level={4}>Tabla de posiciones</Title>
            </Col>
			<Col span={24} md={12}>
                <Table
                    className={`Table-Positions ${rex_data_user.tornombre == 'EM' ? 'Table-EM':''}`}
                    columns={columns}
                    dataSource={rex_data_positions_users}
                    p
                    pagination={{
                        position:['none','none'],
                        pageSize : 20 
                    }}
                />

			</Col>
            <Col span={24} style={{marginTop:'20px'}}>
                <div><b>PR:</b> Puntos por resultado final acertado (+3)</div>
                <div><b>PM:</b> Puntos por marcador final acertado (+2)</div>
                <div><b>PG:</b> Puntos por goles acertados (+1)</div>
                <div><b>Ptos:</b> Puntos totales</div>
            </Col>
		</Row>
	)
}

export default PositionsUsers