import { Col, Row, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDataPositionsUsersReducer } from '../Redux/Actions/Users/Users'

const PositionsUsers = () => {

	const dispatch = useDispatch()

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
            width:'30px'
        },
        {
            title: 'Usuario',
            dataIndex: 'user',
            key: 'user',
            align: 'center',
            render : (_, record, index) => {
                return <div style={{display:'flex', alignItems:'center'}}>
                    <img
                        width={30}
                        height={30}
                        src={record.usupais}
                    />
                    <div>{record.user}</div>
                </div>
            },
            fixed : 'left',
            width:'70px'
        },
        {
            title: 'P.Goles',
            dataIndex: 'pgoals',
            key: 'pgoals',
            align: 'center',
            width:'40px'
        },
        {
            title: 'P.V',
            dataIndex: 'pwins',
            key: 'pwins',
            align: 'center',
            width:'40px'
        },  
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            align: 'center',
            width:'40px'
        },
        {
            title: '!!',
            dataIndex: 'stats',
            key: 'stats',
            align: 'center',
            width:'40px'
        },
    ];

	useEffect(() => {
		getRankingUsers()
	}, [])

	return (
		<Row style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'20px 10px'}}>
			<Col span={24} md={12}>
				<Table
					className={`Table-Positions ${rex_data_user.tornombre == 'EM' ? 'Table-EM':''}`}
					dataSource={rex_data_positions_users}
					columns={columns}
				/>
			</Col>
		</Row>
	)
}

export default PositionsUsers